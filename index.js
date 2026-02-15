import{a as d,S as f}from"./assets/vendor-Cv5692A3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="54663882-ec3b2d69ddbcbb3faf32c451a";function y(n,o=1,t=12){return d.get(p,{params:{key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:t}}).then(a=>a.data.hits)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const o=n.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${t.likes}</p>
        <p>Views: ${t.views}</p>
        <p>Comments: ${t.comments}</p>
        <p>Downloads: ${t.downloads}</p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){l.innerHTML=""}function b(){u.classList.add("active")}function v(){u.classList.remove("active")}const i=document.querySelector(".form");let c=1;i.addEventListener("submit",async n=>{n.preventDefault();const t=i.querySelector("input[name='search-text']").value.trim();if(t){c=1,L(),b();try{const a=await y(t,c);g(a)}catch(a){console.error("Помилка запиту:",a)}finally{v()}}});
//# sourceMappingURL=index.js.map
