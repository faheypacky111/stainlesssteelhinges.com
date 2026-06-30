/* StainlessSteelHinges.com — Google Consent Mode v2 banner */
(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  var KEY="ssh_consent", choice=null;
  try { choice = localStorage.getItem(KEY); } catch(e){}
  gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied"});
  if (choice==="granted") gtag("consent","update",{analytics_storage:"granted"});
  function rec(v){ try{localStorage.setItem(KEY,v);}catch(e){} if(v==="granted")gtag("consent","update",{analytics_storage:"granted"});
    var b=document.getElementById("ssh-consent"); if(b&&b.parentNode)b.parentNode.removeChild(b); }
  document.addEventListener("DOMContentLoaded",function(){
    if(choice==="granted"||choice==="denied")return;
    var css=document.createElement("style");
    css.textContent='#ssh-consent{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#16191c;color:#eef0f1;'
      +'border-top:1px solid #2b3036;padding:15px 20px;font-family:"IBM Plex Sans",system-ui,sans-serif;font-size:14px;line-height:1.5}'
      +'#ssh-consent .in{max-width:1180px;margin:0 auto;display:flex;align-items:center;gap:18px;flex-wrap:wrap;justify-content:space-between}'
      +'#ssh-consent p{margin:0;flex:1 1 320px;color:#c4c9cd}#ssh-consent a{color:#6fa8d6}'
      +'#ssh-consent .btns{display:flex;gap:10px}#ssh-consent button{font-family:"IBM Plex Mono",monospace;text-transform:uppercase;'
      +'letter-spacing:.05em;font-size:12px;font-weight:500;border:none;padding:10px 18px;cursor:pointer}'
      +'#ssh-acc{background:#1c5a8f;color:#fff}#ssh-dec{background:transparent;color:#c4c9cd;border:1px solid #3b4046}'
      +'@media(max-width:600px){#ssh-consent .btns{flex:1 1 100%}#ssh-consent button{flex:1}}';
    document.head.appendChild(css);
    var bar=document.createElement("div"); bar.id="ssh-consent"; bar.setAttribute("role","dialog"); bar.setAttribute("aria-label","Cookie consent");
    bar.innerHTML='<div class="in"><p>We use cookies for analytics to understand how visitors use this site. Declining keeps analytics off. See our <a href="privacy.html">Privacy Policy</a>.</p>'
      +'<div class="btns"><button id="ssh-dec" type="button">Decline</button><button id="ssh-acc" type="button">Accept</button></div></div>';
    document.body.appendChild(bar);
    document.getElementById("ssh-acc").addEventListener("click",function(){rec("granted");});
    document.getElementById("ssh-dec").addEventListener("click",function(){rec("denied");});
  });
})();
