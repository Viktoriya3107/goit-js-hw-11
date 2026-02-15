import{a as p,S as d}from"./assets/vendor-Cv5692A3.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="https://pixabay.com/api/",m="54663882-ec3b2d69ddbcbb3faf32c451a";function y(s,i=1,e=12){return p.get(f,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:e}}).then(o=>o.data.hits)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const i=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",i),g.refresh()}function L(){l.innerHTML=""}function b(){u.classList.add("active")}function v(){u.classList.remove("active")}const n=document.querySelector(".form");let c=1;n.addEventListener("submit",async s=>{s.preventDefault();const e=n.querySelector("input[name='search-text']").value.trim();if(!e){iziToast.warning({title:"Увага",message:"Будь ласка, введіть запит для пошуку.",position:"topRight"});return}c=1,L(),b();try{const o=await y(e,c);if(!o||o.length===0){iziToast.error({title:"Помилка",message:`За запитом "${e}" зображень не знайдено.`,position:"topRight"});return}h(o)}catch(o){console.error("Помилка запиту:",o),iziToast.error({title:"Помилка",message:"Сталася помилка під час завантаження зображень. Спробуйте пізніше.",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
