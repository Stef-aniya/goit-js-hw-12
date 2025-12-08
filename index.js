import{a as d,S as f,i as a}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p="https://pixabay.com/api/",m="53564240-a8c4c5fb04a0c541f79bb8ed2";async function y(n){try{return(await d.get(p,{params:{key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1}})).data}catch(t){throw t}}const c=document.querySelector(".gallery"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const t=n.map(r=>`
        <li class="gallery-item">
            <a href="${r.largeImageURL}">
            <img src="${r.webformatURL}" alt="${r.tags}">
            </a>
            <div class="info">
            <p>Likes: ${r.likes}</p>
            <p>Views: ${r.views}</p>
            <p>Comments: ${r.comments}</p>
            <p>Downloads: ${r.downloads}</p>
            </div>
        </li>
        `).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function L(){c.innerHTML=""}const l=document.querySelector(".loader");function b(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const u=document.querySelector(".form"),S=u.querySelector('input[name="search-text"]');document.querySelector(".btn");u.addEventListener("submit",q);function q(n){n.preventDefault();const t=S.value.trim();if(!t){a.error({title:"Error",message:"Please enter a search word!"});return}L(),b(),y(t).then(r=>{if(r.hits.length===0){a.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(r.hits)}).catch(()=>{a.error({title:"Error",message:"Something went wrong. Try again later."})}).finally(()=>{w()})}
//# sourceMappingURL=index.js.map
