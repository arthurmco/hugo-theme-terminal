!function(){const e=document.querySelector(".container"),t=document.querySelector(".menu"),n=document.querySelector(".menu-trigger"),i=(document.querySelector(".menu__inner--desktop"),document.querySelector(".menu__sub-inner-more-trigger")),o=document.querySelector(".menu__sub-inner-more"),d=getComputedStyle(document.body).getPropertyValue("--phoneWidth"),s=()=>window.matchMedia(d).matches,c=()=>{n&&n.classList.toggle("hidden",!s()),t&&t.classList.toggle("hidden",s()),o&&o.classList.toggle("hidden",!s())};t&&t.addEventListener("click",(e=>e.stopPropagation())),o&&o.addEventListener("click",(e=>e.stopPropagation())),c(),document.body.addEventListener("click",(()=>{s()||!o||o.classList.contains("hidden")?s()&&!t.classList.contains("hidden")&&t.classList.add("hidden"):o.classList.add("hidden")})),window.addEventListener("resize",c),n&&n.addEventListener("click",(e=>{e.stopPropagation(),t&&t.classList.toggle("hidden")})),i&&i.addEventListener("click",(t=>{t.stopPropagation(),o&&o.classList.toggle("hidden"),o.getBoundingClientRect().right>e.getBoundingClientRect().right&&(o.style.left="auto",o.style.right=0)}));const r=document.querySelector("#date-archive");r&&r.addEventListener("change",(e=>{const t=[...Array(12).keys()].map((e=>new Date(0,e).toLocaleString("en-US",{month:"long"}))),[n,i]=e.target.value.split("/"),o=t.indexOf(i);if(o>=0){const e=`${n}/${(o+1).toString().padStart(2,"0")}`;window.location=`/blog/archive/${e}/`}}))}();