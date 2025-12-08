import{a as g,S as L,i as s}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const b="https://pixabay.com/api/",w="53564240-a8c4c5fb04a0c541f79bb8ed2";async function c(n,r){try{return(await g.get(b,{params:{key:w,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}catch(e){throw e}}const m=document.querySelector(".gallery"),S=new L(".gallery a",{captionsData:"alt",captionDelay:250});function l(n){const r=n.map(e=>`
        <li class="gallery-item">
            <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}">
            </a>
            <div class="info">
            <p>Likes: ${e.likes}</p>
            <p>Views: ${e.views}</p>
            <p>Comments: ${e.comments}</p>
            <p>Downloads: ${e.downloads}</p>
            </div>
        </li>
        `).join("");m.insertAdjacentHTML("beforeend",r),S.refresh()}function v(){m.innerHTML=""}const h=document.querySelector(".loader");function q(){h.classList.remove("hidden")}function u(){h.classList.add("hidden")}const p=document.querySelector(".btn");function P(){p.classList.remove("btn-hidden")}function E(){p.classList.add("btn-hidden")}const y=document.querySelector(".form"),$=y.querySelector('input[name="search-text"]'),O=document.querySelector(".btn");let d=1,f="";y.addEventListener("submit",x);O.addEventListener("click",onLoadMore);async function x(n){n.preventDefault();const r=$.value.trim();if(!r){s.error({title:"Error",message:"Please enter a search word!"});return}d=1,f=r,v(),E(),q();try{const e=await c(f,d);if(e.hits.length===0){s.error({title:"No results",message:"Sorry,nothing found"});return}l(e.hits),Math.ceil(e.totalHits/15)>1&&P()}catch{s.error({title:"Error",message:"Something went wrong. Try again later."})}finally{u()}c(r).then(e=>{if(e.hits.length===0){s.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}l(e.hits)}).catch(()=>{s.error({title:"Error",message:"Something went wrong. Try again later."})}).finally(()=>{u()})}
//# sourceMappingURL=index.js.map
