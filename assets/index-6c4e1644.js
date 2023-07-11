(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let o=document.querySelector(".mobile-burger-icon"),l=document.querySelector(".menu");o.addEventListener("click",function(){o.classList.toggle("active"),l.classList.toggle("active"),o.classList.contains("active")?(o.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18" stroke="#77AC63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18" stroke="#77AC63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,document.body.style.overflow="hidden"):(o.innerHTML=`
      <svg class="mobile-burger-icon not-cheked" id="icon" width="24" height="24">
        <use href="/img/symbol-defs.svg#mobile-burger-icon"></use>
      </svg>`,document.body.style.overflow="")});
