import{g as t}from"./p-7994d83f.js";import{MENU_BACK_BUTTON_PRIORITY as n}from"./p-f2660943.js";import{c as a}from"./p-6fa4feae.js";const r=t=>a().duration(t?400:300),e=n=>{let e,s;const o=n.width+8,i=a(),c=a();n.isEndSide?(e=o+"px",s="0px"):(e=-o+"px",s="0px"),i.addElement(n.menuInnerEl).fromTo("transform",`translateX(${e})`,`translateX(${s})`);const u="ios"===t(n),p=u?.2:.25;return c.addElement(n.backdropEl).fromTo("opacity",.01,p),r(u).addAnimation([i,c])},s=n=>{let e,s;const o=t(n),i=n.width;n.isEndSide?(e=-i+"px",s=i+"px"):(e=i+"px",s=-i+"px");const c=a().addElement(n.menuInnerEl).fromTo("transform",`translateX(${s})`,"translateX(0px)"),u=a().addElement(n.contentEl).fromTo("transform","translateX(0px)",`translateX(${e})`),p=a().addElement(n.backdropEl).fromTo("opacity",.01,.32);return r("ios"===o).addAnimation([c,u,p])},o=n=>{const e=t(n),s=n.width*(n.isEndSide?-1:1)+"px",o=a().addElement(n.contentEl).fromTo("transform","translateX(0px)",`translateX(${s})`);return r("ios"===e).addAnimation(o)},i=(()=>{const t=new Map,a=[],r=async t=>{if(await m(),"start"===t||"end"===t){return l((n=>n.side===t&&!n.disabled))||l((n=>n.side===t))}if(null!=t)return l((n=>n.menuId===t));return l((t=>!t.disabled))||(a.length>0?a[0].el:void 0)},i=async()=>(await m(),p()),c=(n,a)=>{t.set(n,a)},u=t=>{const n=t.side;a.filter((a=>a.side===n&&a!==t)).forEach((t=>t.disabled=!0))},p=()=>l((t=>t._isOpen)),f=()=>a.some((t=>t.isAnimating)),l=t=>{const n=a.find(t);if(void 0!==n)return n.el},m=()=>Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((t=>t.componentOnReady())));return c("reveal",o),c("push",s),c("overlay",e),"undefined"!=typeof document&&document.addEventListener("ionBackButton",(t=>{const a=p();a&&t.detail.register(n,(()=>a.close()))})),{registerAnimation:c,get:r,getMenus:async()=>(await m(),a.map((t=>t.el))),getOpen:i,isEnabled:async t=>{const n=await r(t);return!!n&&!n.disabled},swipeGesture:async(t,n)=>{const a=await r(n);return a&&(a.swipeGesture=t),a},isAnimating:async()=>(await m(),f()),isOpen:async t=>{if(null!=t){const n=await r(t);return void 0!==n&&n.isOpen()}return void 0!==await i()},enable:async(t,n)=>{const a=await r(n);return a&&(a.disabled=!t),a},toggle:async t=>{const n=await r(t);return!!n&&n.toggle()},close:async t=>{const n=await(void 0!==t?r(t):i());return void 0!==n&&n.close()},open:async t=>{const n=await r(t);return!!n&&n.open()},_getOpenSync:p,_createAnimation:(n,a)=>{const r=t.get(n);if(!r)throw new Error("animation not registered");return r(a)},_register:t=>{a.indexOf(t)<0&&(t.disabled||u(t),a.push(t))},_unregister:t=>{const n=a.indexOf(t);n>-1&&a.splice(n,1)},_setOpen:async(t,n,a)=>{if(f())return!1;if(n){const n=await i();n&&t.el!==n&&await n.setOpen(!1,!1)}return t._setOpen(n,a)},_setActiveMenu:u}})();export{i as m}