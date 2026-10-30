/* Nawroz Private Hospital — standalone runtime.
   Gives the page the same services it used inside Claude, but from your own accounts:
   - db / user / assets  -> Firebase (Firestore + Auth), configured in config.js
   - sample (AI)         -> /api/ai serverless function (Netlify), needs ANTHROPIC_API_KEY
   Anything not configured simply switches off; the site keeps working. */
(function(){
  var C=window.NAWROZ_CONFIG||{};
  var fbOn=!!(C.firebase&&C.firebase.apiKey&&C.firebase.projectId);
  var admins=(C.adminEmails||[]).map(function(e){return String(e).trim().toLowerCase()}).filter(Boolean);
  var fbP=null,aiP=null;
  function loadScript(src){return new Promise(function(res,rej){var s=document.createElement('script');s.src=src;s.onload=res;s.onerror=rej;document.head.appendChild(s)})}
  function fb(){
    if(!fbOn)return Promise.resolve(null);
    if(!fbP)fbP=(async function(){
      var b='https://www.gstatic.com/firebasejs/10.12.5/';
      await loadScript(b+'firebase-app-compat.js');
      await Promise.all([loadScript(b+'firebase-auth-compat.js'),loadScript(b+'firebase-firestore-compat.js')]);
      var app=firebase.initializeApp(C.firebase);var auth=firebase.auth();
      var user=await new Promise(function(r){var u=auth.onAuthStateChanged(function(x){u();r(x)})});
      return {app:app,auth:auth,db:firebase.firestore(),user:user};
    })().catch(function(e){console.warn('Firebase not available:',e);return null});
    return fbP;
  }
  function isAdmin(f){return !!(f&&f.user&&f.user.email&&admins.indexOf(f.user.email.toLowerCase())>=0)}
  /* shrink an uploaded photo so it fits inside a Firestore document */
  function shrink(file){return new Promise(function(res,rej){
    var url=URL.createObjectURL(file),img=new Image();
    img.onload=function(){var max=520,w=img.naturalWidth,h=img.naturalHeight,k=Math.min(1,max/Math.max(w,h));
      var c=document.createElement('canvas');c.width=Math.round(w*k);c.height=Math.round(h*k);
      c.getContext('2d').drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(url);
      var out=c.toDataURL('image/webp',0.82);if(out.indexOf('data:image/webp')!==0)out=c.toDataURL('image/jpeg',0.82);
      if(out.length>900000)return rej({code:'too_large'});res(out)};
    img.onerror=function(){rej({code:'bad_image'})};img.src=url})}
  function ai(){
    if(!aiP)aiP=(async function(){
      try{var ctl=new AbortController();var t=setTimeout(function(){ctl.abort()},5000);
        var r=await fetch('/api/ai',{signal:ctl.signal});clearTimeout(t);
        if(!r.ok)return null;var j=await r.json();if(!j||!j.ok)return null;
      }catch(e){return null}
      return async function(input,opts){
        opts=opts||{};
        try{
          var r=await fetch('/api/ai',{method:'POST',headers:{'content-type':'application/json'},signal:opts.signal,body:JSON.stringify({messages:input,tier:opts.modelTier||'quick'})});
          if(r.status===429)throw {code:'rate_limited'};
          if(!r.ok)throw {code:'sampling_disabled'};
          var j=await r.json();var text=String(j.text||'');
          if(!text)throw {code:'empty_completion'};
          if(opts.onText)opts.onText({text:text,delta:text});
          return {text:text,truncated:false};
        }catch(e){if(e&&e.name==='AbortError')throw {code:'cancelled',text:''};throw (e&&e.code)?e:{code:'unavailable'}}
      };
    })();
    return aiP;
  }
  window.claude={use:async function(name){
    if(name==='sample')return ai();
    var f=await fb();
    if(name==='db')return f?f.db:null;
    if(name==='user'){var adm=isAdmin(f);return {
      isOwner:async function(){return adm},canEdit:async function(){return adm},can:async function(){return adm},
      id:async function(){return f&&f.user?f.user.uid:null},
      me:async function(){return {id:f&&f.user?f.user.uid:null,name:'',email:f&&f.user?f.user.email:null,isOwner:adm,canEdit:adm}}}}
    if(name==='assets'){if(!isAdmin(f))return null;return {upload:async function(file){var u=await shrink(file);return {id:'inline',url:u}}}}
    return null;
  }};

  /* ---------- staff sign-in (open with  yoursite.com/#admin  or the footer link) ---------- */
  var L={ar:{t:'دخول الإدارة',e:'الإيميل',p:'كلمة السر',go:'دخول',out:'تسجيل خروج',as:'داخل باسم',no:'لوحة التحكم بعد ما تفعّلت. شوف دليل الإعداد (Firebase).',bad:'الإيميل أو كلمة السر غلط.',na:'هذا الحساب ما عنده صلاحية إدارة.',x:'سكّر'},
    ku:{t:'چوونا ژوور یا ڕێڤەبەریێ',e:'ئیمەیل',p:'پەیڤا نهێنی',go:'چوونە ژوور',out:'دەرکەفتن',as:'چوویە ژوور وەک',no:'پانێل هێشتا چالاک نەبوویە. ڕێبەرا دامەزراندنێ ببینە (Firebase).',bad:'ئیمەیل یان پەیڤا نهێنی خەلەتە.',na:'ئەڤ هەژمارە دەستهەلاتا ڕێڤەبەریێ نینە.',x:'گرتن'},
    en:{t:'Staff sign-in',e:'Email',p:'Password',go:'Sign in',out:'Sign out',as:'Signed in as',no:'The control panel is not set up yet. See the setup guide (Firebase).',bad:'Wrong email or password.',na:'This account has no admin access.',x:'Close'}};
  function lt(){var l=document.documentElement.lang;return L[l]||L.ar}
  function esc(s){return String(s||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  async function openLogin(){
    var t=lt(),d=document.getElementById('sxLogin');
    if(!d){d=document.createElement('dialog');d.id='sxLogin';d.className='sxlogin';document.body.appendChild(d);
      d.addEventListener('click',function(e){if(e.target===d)d.close()})}
    var f=await fb(),body;
    if(!fbOn||!f){body='<p class="sxm">'+esc(t.no)+'</p>'}
    else if(f.user){body='<p class="sxm">'+esc(t.as)+' <b>'+esc(f.user.email)+'</b></p>'+(isAdmin(f)?'':'<p class="sxe">'+esc(t.na)+'</p>')+'<button type="button" class="sxb" id="sxOut">'+esc(t.out)+'</button>'}
    else{body='<form id="sxForm"><label>'+esc(t.e)+'<input id="sxE" type="email" autocomplete="username" required dir="ltr"></label><label>'+esc(t.p)+'<input id="sxP" type="password" autocomplete="current-password" required dir="ltr"></label><p class="sxe" id="sxErr" hidden></p><button class="sxb" type="submit">'+esc(t.go)+'</button></form>'}
    d.innerHTML='<div class="sxh"><b>'+esc(t.t)+'</b><button type="button" class="sxx" aria-label="'+esc(t.x)+'">×</button></div>'+body;
    d.querySelector('.sxx').onclick=function(){d.close()};
    var o=d.querySelector('#sxOut');if(o)o.onclick=async function(){await f.auth.signOut();location.hash='';location.reload()};
    var fm=d.querySelector('#sxForm');if(fm)fm.onsubmit=async function(e){e.preventDefault();var er=d.querySelector('#sxErr');
      try{await f.auth.signInWithEmailAndPassword(d.querySelector('#sxE').value.trim(),d.querySelector('#sxP').value);history.replaceState(null,'',location.pathname);location.reload()}
      catch(x){er.hidden=false;er.textContent=t.bad}};
    try{d.showModal()}catch(e){d.setAttribute('open','')}
  }
  window.nawrozLogin=openLogin;
  function hash(){if(location.hash==='#admin')openLogin()}
  addEventListener('hashchange',hash);
  document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a.flogin');if(a){e.preventDefault();openLogin()}});
  addEventListener('load',function(){hash();
    if('serviceWorker' in navigator&&location.protocol==='https:')navigator.serviceWorker.register('sw.js').catch(function(){});
  });
})();
