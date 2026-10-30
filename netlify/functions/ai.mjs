// Nawroz AI assistant proxy — keeps your Anthropic API key secret on the server.
// Set ANTHROPIC_API_KEY in Netlify: Site configuration → Environment variables.
const MODELS = { quick: "claude-haiku-5-5", default: "claude-sonnet-5-5" };
const hits = new Map(); // best-effort per-IP limit (resets when the function restarts)

export default async (req, context) => {
  const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { "content-type": "application/json" } });
  const key = process.env.ANTHROPIC_API_KEY;
  if (req.method === "GET") return json({ ok: !!key });
  if (req.method !== "POST") return json({ error: "method" }, 405);
  if (!key) return json({ error: "not_configured" }, 503);

  // Only this website may use the assistant (blocks other sites from spending your credit).
  const origin = req.headers.get("origin") || "";
  let host = "";
  try { host = new URL(req.url).host; } catch {}
  const allowed = (process.env.ALLOWED_HOSTS || "").split(",").map((h) => h.trim()).filter(Boolean);
  let oHost = "";
  try { oHost = origin ? new URL(origin).host : ""; } catch {}
  if (!oHost || (oHost !== host && !allowed.includes(oHost))) return json({ error: "forbidden" }, 403);
  const ctype = req.headers.get("content-type") || "";
  if (!ctype.includes("application/json")) return json({ error: "bad_type" }, 415);

  const ip = context?.ip || req.headers.get("x-nf-client-connection-ip") || "x";
  const now = Date.now(), win = 10 * 60 * 1000, max = 40;
  const list = (hits.get(ip) || []).filter((t) => now - t < win);
  if (list.length >= max) return json({ error: "rate_limited" }, 429);
  list.push(now); hits.set(ip, list);

  let body;
  try { body = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
  const raw = Array.isArray(body?.messages) ? body.messages : [];
  if (!raw.length || raw.length > 30) return json({ error: "bad_messages" }, 400);
  const messages = raw.map((m) => ({ role: m?.role === "assistant" ? "assistant" : "user", content: String(m?.content || "").slice(0, 16000) }));
  if (messages[0].role !== "user" || messages[messages.length - 1].role !== "user") return json({ error: "bad_order" }, 400);
  const total = messages.reduce((n, m) => n + m.content.length, 0);
  if (total > 60000) return json({ error: "too_long" }, 413);

  const model = MODELS[body?.tier] || MODELS.quick;
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({
        model, max_tokens: 700,
        system: "You are the website assistant of Nawroz Private Hospital (Newroz Hospital & Complex) in Zakho. Follow the hospital instructions in the first user message. Only discuss health and this hospital; never diagnose or give medicine doses.",
        messages,
      }),
    });
    if (r.status === 429) return json({ error: "rate_limited" }, 429);
    if (!r.ok) return json({ error: "upstream", status: r.status }, 502);
    const j = await r.json();
    const text = (j.content || []).filter((b) => b.type === "text").map((b) => b.text).join("");
    return json({ text });
  } catch (e) {
    return json({ error: "network" }, 502);
  }
};

export const config = { path: "/api/ai" };
