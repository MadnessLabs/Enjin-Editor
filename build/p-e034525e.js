import{w as i,B as a}from"./p-a469560d.js";import{c as n}from"./p-c73722f4.js";const e="ionViewWillLeave",o="ionViewDidLeave",s="ionViewWillUnload",t=a=>new Promise(((n,e)=>{i((()=>{r(a),c(a).then((i=>{i.animation&&i.animation.destroy(),d(a),n(i)}),(i=>{d(a),e(i)}))}))})),r=i=>{const a=i.enteringEl,n=i.leavingEl;P(a,n,i.direction),i.showGoBack?a.classList.add("can-go-back"):a.classList.remove("can-go-back"),h(a,!1),n&&h(n,!1)},c=async i=>{const n=await w(i);return n&&a.isBrowser?l(n,i):p(i)},d=i=>{const a=i.leavingEl;i.enteringEl.classList.remove("ion-page-invisible"),void 0!==a&&a.classList.remove("ion-page-invisible")},w=async i=>{if(i.leavingEl&&i.animated&&0!==i.duration)return i.animationBuilder?i.animationBuilder:"ios"===i.mode?(await import("./p-e914d905.js")).iosTransitionAnimation:(await import("./p-47fbc2df.js")).mdTransitionAnimation},l=async(i,a)=>{await m(a,!0);const n=i(a.baseEl,a);b(a.enteringEl,a.leavingEl);const e=await v(n,a);return a.progressCallback&&a.progressCallback(void 0),e&&f(a.enteringEl,a.leavingEl),{hasCompleted:e,animation:n}},p=async i=>{const a=i.enteringEl,n=i.leavingEl;return await m(i,!1),b(a,n),f(a,n),{hasCompleted:!0}},m=async(i,a)=>{const n=(void 0!==i.deepWait?i.deepWait:a)?[V(i.enteringEl),V(i.leavingEl)]:[y(i.enteringEl),y(i.leavingEl)];await Promise.all(n),await u(i.viewIsReady,i.enteringEl)},u=async(i,a)=>{i&&await i(a)},v=(i,a)=>{const n=a.progressCallback,e=new Promise((a=>{i.onFinish((i=>a(1===i)))}));return n?(i.progressStart(!0),n(i)):i.play(),e},b=(i,a)=>{g(a,"ionViewWillLeave"),g(i,"ionViewWillEnter")},f=(i,a)=>{g(i,"ionViewDidEnter"),g(a,"ionViewDidLeave")},g=(i,a)=>{if(i){const n=new CustomEvent(a,{bubbles:!1,cancelable:!1});i.dispatchEvent(n)}},y=i=>i?new Promise((a=>n(i,a))):Promise.resolve(),V=async i=>{const a=i;if(a){if(null!=a.componentOnReady&&null!=await a.componentOnReady())return;await Promise.all(Array.from(a.children).map(V))}},h=(i,a)=>{a?(i.setAttribute("aria-hidden","true"),i.classList.add("ion-page-hidden")):(i.hidden=!1,i.removeAttribute("aria-hidden"),i.classList.remove("ion-page-hidden"))},P=(i,a,n)=>{void 0!==i&&(i.style.zIndex="back"===n?"99":"101"),void 0!==a&&(a.style.zIndex="100")},L=i=>{if(i.classList.contains("ion-page"))return i;return i.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||i};export{s as L,e as a,o as b,V as d,L as g,g as l,h as s,t}