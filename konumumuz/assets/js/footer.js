onLoad(()=>{const r=window.matchMedia("(max-width: 720px)");r.addListener(e=>{null!=e&&e.matches||document.querySelectorAll("footer .links-wrapper .links").forEach(e=>e.classList.remove("active"))});let o;window.addEventListener("resize",o=()=>{var e=document.querySelector("footer"),t=window.getComputedStyle(e),t=parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"));document.body.style.setProperty("--footer-height",Math.ceil(e.offsetHeight+t)+"px")}),o(),document.querySelectorAll("footer .links-wrapper .links .header").forEach(t=>{t.addEventListener("click",e=>{r.matches&&e.target==t&&((e=t.parentElement).classList.contains("active")?e.classList.remove("active"):e.classList.add("active"),e.addEventListener("transitionend",()=>o(),{once:!0}))})});{const l=document.querySelector(".newsletter form");let s=!1;null!=l&&l.addEventListener("submit",e=>{e.preventDefault();const o=e=>{var t=l.querySelector("input").value;""==t.replaceAll(" ","")||s||(s=!0,Modal.alert(e?"Unsubscribing...":"Subscribing..."),fetch(window.HOST+"api/email/newsletter",{method:e?"DELETE":"POST",body:JSON.stringify({email:t})}).then(e=>e.json()).then(t=>{let r=null;4==t?.error?.code&&(r="<p>Would you like to <span data-newsletter-unsubscribe style='color: var(--red-400); cursor: pointer; text-decoration:underline;'>unsubscribe</span>?</p>"),"You have successfully subscribed to our newsletter."==t.message&&(r="<p>You can unsubscribe by re-filling the subscription form.</p>"),"success"==t.status?(l.querySelector("input").value="",Modal.alert({title:e?"Unsubscribed :(":"Subscribed!",body:`<p style='color: var(--green-400)'>${t.message}</p>`,footer:r})):Modal.alert({title:`Failed to ${e?"unsubscribe":"subscribe"}.`,body:"<p style='color: var(--red-400)'>"+t.error.message+"</p>",footer:r},{callback:e=>{e.on("close",()=>{null!=r&&(l.querySelector("input").value="")}).on("open",()=>4==t?.error?.code&&e.getElement().querySelector("[data-newsletter-unsubscribe]").addEventListener("click",()=>{s=!1,o(!0)}))}}),s=!1}).catch(e=>{Modal.alert({title:"Error!",body:"<p style='color: var(--red-400)'>Unexpected error!</p>"}),s=!1}))};o(!1)})}});