# Nawroz Private Hospital — Bağımsız Site Kurulum Rehberi

Bu klasör, sitenin Claude'dan tamamen bağımsız sürümüdür. Kendi adresinizde
(ör. **nawrozprivate.com**) çalışır; ziyaretçilerin hiçbir hesaba ihtiyacı yoktur.

Kurulum 4 adımdan oluşur. **Sadece 1. adım zorunludur**, diğerleri isteğe bağlıdır:

| Adım | Ne sağlar | Ücret | Süre |
|---|---|---|---|
| 1. Siteyi yayınla | Site internette açılır, asistan herkese cevap verir | Ücretsiz | 5 dk |
| 2. Alan adını bağla | `nawrozprivate.com` adresi | Alan adı ücreti (yıllık) | 15 dk + bekleme |
| 3. Doktor panelini aç | Doktorları telefondan düzenleme | Ücretsiz (Firebase) | 20 dk |
| 4. Claude yapay zekası | Asistan gerçek yapay zekayla konuşur | Kullanım başına ücretli | 30 dk |

---

## 1. Siteyi yayınla (Netlify — ücretsiz)

1. ZIP dosyasını bilgisayarında aç. İçinde **`nawroz-site`** klasörü (yüklenecek site), bu rehber
   ve **`firestore.rules`** dosyası var. Netlify'a **sadece `nawroz-site` klasörünü** yükle.
2. Tarayıcıda **https://app.netlify.com/drop** adresine git.
3. `nawroz-site` klasörünü sayfadaki kutuya **sürükle bırak**.
4. Site birkaç saniyede yayına girer. Siteyi kalıcı yapmak için **ücretsiz hesap aç / giriş yap** (Netlify bunu ister; yoksa site geçici kalır).
5. Adı güzelleştir: **Site configuration → Change site name** → `nawroz-private` yaz.
   Adresin şöyle olur: `https://nawroz-private.netlify.app` (isim boşsa).

> Bu aşamada site tamamen çalışır: doktorlar, üç dil, sağlık ipuçları, acil bandı
> ve **akıllı asistan** (kendi cevap sistemiyle, herkese ücretsiz).

**Sonra bir değişiklik yaparsan:** Netlify'da sitene gir → **Deploys** → klasörü tekrar
sürükle bırak. Yeni sürüm hemen yayına girer.

---

## 2. Kendi alan adını bağla (nawrozprivate.com)

1. Bir alan adı firmasından (Namecheap, GoDaddy, Cloudflare vb.) **nawrozprivate.com**
   (veya boş olan benzer bir isim) satın al.
2. Netlify'da sitene gir → **Domain management → Add a domain** → `nawrozprivate.com` yaz.
3. Netlify sana yapman gereken ayarı gösterir. En kolayı:
   **"Use Netlify DNS"** seç → Netlify'ın verdiği 4 adet **nameserver** adresini kopyala →
   alan adını aldığın firmanın panelinde **Nameservers** bölümüne yapıştır.
4. Ayarın yayılması birkaç saat (bazen 24 saat) sürebilir. **HTTPS (kilit işareti)**
   Netlify tarafından otomatik ve ücretsiz eklenir.

---

## 3. Doktor panelini aç (Firebase — ücretsiz)

Panel; doktor ekleme, düzenleme, fotoğraf değiştirme, sıralama ve gizleme içindir.
Sadece senin e-postanla giriş yapılabilir.

### 3a. Firebase projesi
1. **https://console.firebase.google.com** → Google hesabınla gir → **Create a project** → ad: `nawroz`.
   (Google Analytics sorulursa kapatabilirsin.)

### 3b. Veritabanı
1. Sol menü **Build → Firestore Database → Create database**.
2. **Production mode** seç, bölge olarak Avrupa'dan birini seç (ör. `eur3`).
3. **Rules** sekmesine gir, içindekileri sil, ZIP'teki **`firestore.rules`** dosyasının
   içeriğini yapıştır → **Publish**.
   *E-postan farklıysa dosyadaki `youssufzahdi97@icloud.com` kısmını kendi e-postanla
   (küçük harflerle) değiştir.*

### 3c. Giriş (yönetici hesabı)
1. **Build → Authentication → Get started** → **Email/Password**'ü aç → Save.
2. **ÖNEMLİ (güvenlik):** **Settings** sekmesi → **User actions** → **"Enable create (sign-up)"**
   işaretini **kaldır** → Save. Böylece siteden kimse hesap açamaz; hesapları sadece sen
   buradan açarsın.
3. **Users** sekmesi → **Add user** → e-postanı ve güçlü bir şifre yaz (en az 12 karakter).

### 3d. Siteyi Firebase'e bağla
1. **Project settings** (dişli ikon) → **General** → aşağıda **Your apps** → **`</>` (Web)**.
2. Uygulamaya ad ver (ör. `nawroz-site`) → **Register app**.
3. Ekranda bir `firebaseConfig` görünür. İçinden şu 4 değeri al:
   `apiKey`, `authDomain`, `projectId`, `appId`.
4. Klasördeki **`config.js`** dosyasını Not Defteri ile aç ve bu değerleri tırnakların
   içine yapıştır. `adminEmails` kısmında senin e-postan olsun. Kaydet.
5. Klasörü Netlify'a **tekrar sürükle bırak** (1. adımdaki gibi).

### 3e. Panele gir
1. Siteni aç → en alttaki **"دخول الإدارة / Staff sign-in"** yazısına bas
   (veya adresin sonuna `#admin` ekle).
2. E-posta ve şifrenle giriş yap → sağ altta **Doktor paneli** butonu çıkar.
3. İlk seferde panelde **"Mevcut doktorları içe aktar"** butonuna bas.
   Bundan sonra her doktoru tek tek düzenleyebilirsin; değişiklik herkese anında görünür.

> Not: `config.js` içindeki Firebase anahtarları gizli değildir, sitede görünmeleri
> normaldir. Güvenliği `firestore.rules` sağlar: sadece senin hesabın değiştirebilir.

---

## 4. Claude yapay zekası (isteğe bağlı, ücretli)

Bu adım olmadan asistan zaten çalışır (kendi cevap sistemiyle). Bu adımla asistan,
serbest soruları da anlayan gerçek yapay zekaya geçer. Yapay zeka bir hata verirse
asistan otomatik olarak kendi sistemine döner, boş cevap kalmaz.

1. **https://console.anthropic.com** → hesap aç → **Billing** bölümünden ödeme ekle →
   **API Keys → Create Key** → anahtarı kopyala. *(Bu anahtarı kimseyle paylaşma.)*
2. Yapay zeka için sunucu fonksiyonu gerekir. Sürükle-bırak yükleme bunu desteklemez,
   bu yüzden siteyi GitHub üzerinden yayınlamak gerekir:
   1. **https://github.com** → ücretsiz hesap → **New repository** → ad: `nawroz-site` → Create.
   2. **"uploading an existing file"** linkine bas → `nawroz-site` klasörünün **içindeki
      her şeyi** sürükle → **Commit changes**.
   3. Netlify → **Add new site → Import an existing project → GitHub** → `nawroz-site`'ı seç → **Deploy**.
3. Netlify'da: **Site configuration → Environment variables → Add a variable**
   - Key: `ANTHROPIC_API_KEY`
   - Value: kopyaladığın anahtar
4. **Deploys → Trigger deploy → Deploy site**.
5. Asistanda bir soru sor; cevap artık yapay zekadan gelir. Kürtçe sorularda daha güçlü
   model otomatik devreye girer.

Asistan sadece senin sitenden kullanılabilir; başka siteler senin anahtarınla soru soramaz.
Kendi alan adını (ör. nawrozprivate.com) bağladıysan otomatik tanınır.

**Maliyet:** Her soru küçük bir ücret tutar; güncel fiyatlar Anthropic'in fiyat
sayfasındadır. Anthropic Console'da aylık harcama limiti koyabilirsin. Kötüye kullanıma
karşı fonksiyonda kişi başı 10 dakikada 40 soru sınırı vardır.

*(GitHub yöntemiyle yayınladıysan, sonraki değişiklikleri GitHub'daki dosyaları
güncelleyerek yaparsın; Netlify otomatik yeniden yayınlar.)*

---

## Güvenlik kontrol listesi (mutlaka yap)

Site tarafındaki korumalar hazır: HTTPS, koruma başlıkları (Content-Security-Policy),
sadece senin değiştirebildiğin veritabanı kuralları ve gizli tutulan yapay zeka anahtarı.
Asıl risk **hesaplardır**. Şunları yap:

- [ ] **Netlify:** güçlü şifre + **iki adımlı doğrulama (2FA)** → User settings → Security.
      *En önemli madde: bu hesaba giren siteyi değiştirebilir.*
- [ ] **Google hesabı (Firebase):** 2FA aç → myaccount.google.com → Security.
- [ ] **Alan adı firması** (aldıysan): güçlü şifre + 2FA + **Domain lock / Transfer lock** açık.
- [ ] **Anthropic** (yapay zeka kurduysan): 2FA + **aylık harcama limiti** (Billing → Limits).
- [ ] **Firebase sign-up kapalı** (3c, 2. madde).
- [ ] Şifreleri kimseyle paylaşma; personele panel yetkisi vermen gerekirse ona ayrı hesap aç
      ve e-postasını `config.js` ile `firestore.rules` dosyalarına ekle.
- [ ] `config.js` dışındaki dosyaları değiştirme. Bir anahtarı (API key) asla dosyalara yazma;
      sadece Netlify'ın **Environment variables** bölümüne gir.

Bir hesabının ele geçirildiğinden şüphelenirsen: hemen şifreyi değiştir, Netlify'da
**Deploys** bölümünden eski sağlam sürüme dön (**Publish deploy**), Anthropic anahtarını sil
ve yenisini oluştur.

## Telefonda uygulama gibi kullanmak

Site, telefona uygulama gibi kurulabilir (ikon, tam ekran, hızlı açılış):
- **iPhone (Safari):** Paylaş → **Ana Ekrana Ekle**
- **Android (Chrome):** ⋮ menüsü → **Ana ekrana ekle / Uygulamayı yükle**

---

## Klasörde ne var?

| Dosya | Görevi |
|---|---|
| `index.html` | Sitenin kendisi |
| `img/` | Doktor fotoğrafları ve logo |
| `app.js` | Sitenin çalışma kodu (dokunma) |
| `config.js` | **Senin dolduracağın ayarlar** (Firebase, yönetici e-postası) |
| `standalone.js` | Siteyi Firebase'e ve yapay zekaya bağlayan kod (dokunma) |
| `firestore.rules` *(site klasörünün dışında)* | Veritabanı güvenlik kuralları (3b'de yapıştırılır) |
| `netlify/functions/ai.mjs` | Yapay zeka sunucu fonksiyonu (anahtarı gizli tutar) |
| `netlify.toml` | Netlify ayarları ve güvenlik başlıkları |
| `manifest.webmanifest`, `sw.js`, `icons/` | Telefona uygulama gibi kurulum |

Takıldığın bir adım olursa ekran görüntüsünü gönder, birlikte çözelim.
