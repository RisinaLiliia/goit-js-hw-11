import{S as g,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="48284605-8cfffb6b97886c5ff39067830",y="https://pixabay.com/api/";async function h(o,r=1,n=15){const s=`${y}?key=${p}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${n}`,e=await fetch(s);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}const d=document.querySelector(".gallery"),u=document.querySelector(".loader");function b(o){const r=o.map(({webformatURL:n,largeImageURL:s,tags:e,likes:t,views:i,comments:f,downloads:m})=>`
    <a href="${s}" class="gallery__item">
      <div class="photo-card">
        <img src="${n}" alt="${e}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${t}</p>
          <p class="info-item"><b>Views:</b> ${i}</p>
          <p class="info-item"><b>Comments:</b> ${f}</p>
          <p class="info-item"><b>Downloads:</b> ${m}</p>
        </div>
      </div>
    </a>
  `).join("");d.insertAdjacentHTML("beforeend",r)}function L(){d.innerHTML=""}function w(){u.classList.remove("hidden")}function $(){u.classList.add("hidden")}const S=document.querySelector("#search-form");document.querySelector(".gallery");document.querySelector(".loader");let l=1,c="",v=new g(".gallery a");S.addEventListener("submit",async o=>{if(o.preventDefault(),c=o.target.elements.searchQuery.value.trim(),!c){a.warning({title:"Warning",message:"Please enter a search term!"});return}L(),l=1;try{w();const{hits:r,totalHits:n}=await h(c,l);if(!r.length){a.error({title:"Error",message:"Sorry, no images found. Try again!"});return}b(r),v.refresh(),a.success({title:"Success",message:`Found ${n} images!`})}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{$()}});
//# sourceMappingURL=index.js.map
