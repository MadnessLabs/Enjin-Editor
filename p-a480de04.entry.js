import{w as e,r,c as i,d as s,h as t,a as n,H as o}from"./p-b8756f4d.js";import{a as h,g as a}from"./p-7a2e015f.js";import{c as f}from"./p-c563b4de.js";import{e as l,g as c,b as p}from"./p-4403447b.js";import{c as g}from"./p-6fa4feae.js";import{g as d}from"./p-8f72be08.js";const m=e=>{const r=e.querySelector("ion-spinner"),i=r.shadowRoot.querySelector("circle"),s=e.querySelector(".spinner-arrow-container"),t=e.querySelector(".arrow-container"),n=t?t.querySelector("ion-icon"):null,o=g().duration(1e3).easing("ease-out"),h=g().addElement(s).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),a=g().addElement(i).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),f=g().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(t&&n){const e=g().addElement(t).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),r=g().addElement(n).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([e,r])}return o.addAnimation([h,a,f])},u=(e,r)=>{e.style.setProperty("opacity",r.toString())},x=(r,i)=>{if(!r)return Promise.resolve();const s=y(r,200);return e((()=>{r.style.setProperty("transition","0.2s all ease-out"),void 0===i?r.style.removeProperty("transform"):r.style.setProperty("transform",`translate3d(0px, ${i}, 0px)`)})),s},v=async(e,r)=>{const i=e.querySelector("ion-refresher-content");if(!i)return Promise.resolve(!1);await i.componentOnReady();const s=i.querySelector(".refresher-pulling ion-spinner"),t=i.querySelector(".refresher-refreshing ion-spinner");return null!==s&&null!==t&&("ios"===r&&h("mobile")&&void 0!==e.style.webkitOverflowScrolling||"md"===r)},y=(e,r=0)=>new Promise((i=>{b(e,r,i)})),b=(e,r=0,i)=>{let s,t;const n={passive:!0},o=()=>{s&&s()},h=r=>{void 0!==r&&e!==r.target||(o(),i(r))};return e&&(e.addEventListener("webkitTransitionEnd",h,n),e.addEventListener("transitionend",h,n),t=setTimeout(h,r+500),s=()=>{t&&(clearTimeout(t),t=void 0),e.removeEventListener("webkitTransitionEnd",h,n),e.removeEventListener("transitionend",h,n)}),o},w=class{constructor(e){r(this,e),this.ionRefresh=i(this,"ionRefresh",7),this.ionPull=i(this,"ionPull",7),this.ionStart=i(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async checkNativeRefresher(){const e=await v(this.el,a(this));if(e&&!this.nativeRefresher){const e=this.el.closest("ion-content");this.setupNativeRefresher(e)}else e||this.destroyNativeRefresher()}destroyNativeRefresher(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}async resetNativeRefresher(e,r){this.state=r,"ios"===a(this)?await x(e,void 0):await y(this.el.querySelector(".refresher-refreshing-icon"),200),this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach((e=>e.destroy())),this.animations=[],this.progress=0,this.state=1}async setupiOSNativeRefresher(r,i){this.elementToTransform=this.scrollEl;const t=r.shadowRoot.querySelectorAll("svg");let n=.16*this.scrollEl.clientHeight;const o=t.length;e((()=>t.forEach((e=>e.style.setProperty("animation","none"))))),this.scrollListenerCallback=()=>{(this.pointerDown||1!==this.state)&&s((()=>{const s=this.scrollEl.scrollTop,h=this.el.clientHeight;if(s>0){if(8===this.state){const r=l(0,s/(.5*h),1);return void e((()=>u(i,1-r)))}return void e((()=>u(r,0)))}this.pointerDown&&(this.didStart||(this.didStart=!0,this.ionStart.emit()),this.pointerDown&&this.ionPull.emit());const a=l(0,Math.abs(s)/h,.99),c=this.progress=l(0,(Math.abs(s)-30)/n,1),p=l(0,Math.floor(c*o),o-1);var g,d;8===this.state||p===o-1?(this.pointerDown&&(g=i,d=this.lastVelocityY,e((()=>{g.style.setProperty("--refreshing-rotation-duration",d>=1?"0.5s":"2s"),g.style.setProperty("opacity","1")}))),this.didRefresh||(this.beginRefresh(),this.didRefresh=!0,f({style:"light"}),this.pointerDown||x(this.elementToTransform,h+"px"))):(this.state=2,((r,i,s,t)=>{e((()=>{u(r,s),i.forEach(((e,r)=>e.style.setProperty("opacity",r<=t?"0.99":"0")))}))})(r,t,a,p))}))},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),this.gesture=(await import("./p-101feae9.js")).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:()=>{this.pointerDown=!0,this.didRefresh||x(this.elementToTransform,"0px"),0===n&&(n=.16*this.scrollEl.clientHeight)},onMove:e=>{this.lastVelocityY=e.velocityY},onEnd:()=>{this.pointerDown=!1,this.didStart=!1,this.needsCompletion?(this.resetNativeRefresher(this.elementToTransform,32),this.needsCompletion=!1):this.didRefresh&&s((()=>x(this.elementToTransform,this.el.clientHeight+"px")))}}),this.disabledChanged()}async setupMDNativeRefresher(r,i,s){const t=c(i).querySelector("circle"),n=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),o=c(s).querySelector("circle");null!==t&&null!==o&&e((()=>{t.style.setProperty("animation","none"),s.style.setProperty("animation-delay","-655ms"),o.style.setProperty("animation-delay","-655ms")})),this.gesture=(await import("./p-101feae9.js")).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:()=>8!==this.state&&32!==this.state&&0===this.scrollEl.scrollTop,onStart:e=>{e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:i=>{if(i.velocityY<0&&0===this.progress&&!i.data.didStart||i.data.cancelled)i.data.cancelled=!0;else{if(!i.data.didStart)return i.data.didStart=!0,this.state=2,void e((()=>{const e=((e,r)=>"scale"===e?(e=>{const r=e.clientHeight,i=g().addElement(e).keyframes([{offset:0,transform:`scale(0) translateY(-${r+20}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return m(e).addAnimation([i])})(r):(e=>{const r=e.clientHeight,i=g().addElement(e).keyframes([{offset:0,transform:`translateY(-${r+20}px)`},{offset:1,transform:"translateY(100px)"}]);return m(e).addAnimation([i])})(r))((e=>{const r=e.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"})(r),n);i.data.animation=e,this.scrollEl.style.setProperty("--overflow","hidden"),e.progressStart(!1,0),this.ionStart.emit(),this.animations.push(e)}));this.progress=l(0,i.deltaY/180*.5,1),i.data.animation.progressStep(this.progress),this.ionPull.emit()}},onEnd:r=>{if(!r.data.didStart)return;if(e((()=>this.scrollEl.style.removeProperty("--overflow"))),this.progress<=.4)return this.gesture.enable(!1),void r.data.animation.progressEnd(0,this.progress,500).onFinish((()=>{this.animations.forEach((e=>e.destroy())),this.animations=[],this.gesture.enable(!0),this.state=1}));const i=d([0,0],[0,0],[1,1],[1,1],this.progress)[0],s=(e=>g().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"))(n);this.animations.push(s),e((async()=>{n.style.setProperty("--ion-pulling-refresher-translate",100*i+"px"),r.data.animation.progressEnd(),await s.play(),this.beginRefresh(),r.data.animation.destroy()}))}}),this.disabledChanged()}async setupNativeRefresher(e){if(this.scrollListenerCallback||!e||this.nativeRefresher||!this.scrollEl)return;this.setCss(0,"",!1,""),this.nativeRefresher=!0;const r=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),i=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");"ios"===a(this)?this.setupiOSNativeRefresher(r,i):this.setupMDNativeRefresher(e,r,i)}componentDidUpdate(){this.checkNativeRefresher()}async connectedCallback(){if("fixed"!==this.el.getAttribute("slot"))return void console.error('Make sure you use: <ion-refresher slot="fixed">');const e=this.el.closest("ion-content");e?(await e.componentOnReady(),this.scrollEl=await e.getScrollElement(),this.backgroundContentEl=c(e).querySelector("#background-content"),await v(this.el,a(this))?this.setupNativeRefresher(e):(this.gesture=(await import("./p-101feae9.js")).createGesture({el:e,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:()=>this.canStart(),onStart:()=>this.onStart(),onMove:e=>this.onMove(e),onEnd:()=>this.onEnd()}),this.disabledChanged())):console.error("<ion-refresher> must be used inside an <ion-content>")}disconnectedCallback(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async complete(){this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||p((()=>p((()=>this.resetNativeRefresher(this.elementToTransform,32)))))):this.close(32,"120ms")}async cancel(){this.nativeRefresher?this.pointerDown||p((()=>p((()=>this.resetNativeRefresher(this.elementToTransform,16))))):this.close(16,"")}getProgress(){return Promise.resolve(this.progress)}canStart(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}onStart(){this.progress=0,this.state=1}onMove(e){if(!this.scrollEl)return;const r=e.event;if(r.touches&&r.touches.length>1)return;if(0!=(56&this.state))return;const i=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,s=e.deltaY*i;if(s<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(s,"0ms",!0,""),0===s)return void(this.progress=0);const t=this.pullMin;this.progress=s/t,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),s<t?this.state=2:s>this.pullMax?this.beginRefresh():this.state=4}onEnd(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(e,r){setTimeout((()=>{this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"")}),600),this.state=e,this.setCss(0,this.closeDuration,!0,r)}setCss(r,i,s,t){this.nativeRefresher||(this.appliedStyles=r>0,e((()=>{if(this.scrollEl&&this.backgroundContentEl){const e=this.scrollEl.style,n=this.backgroundContentEl.style;e.transform=n.transform=r>0?`translateY(${r}px) translateZ(0px)`:"",e.transitionDuration=n.transitionDuration=i,e.transitionDelay=n.transitionDelay=t,e.overflow=s?"hidden":""}})))}render(){const e=a(this);return t(o,{slot:"fixed",class:{[e]:!0,["refresher-"+e]:!0,"refresher-native":this.nativeRefresher,"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state}})}get el(){return n(this)}static get watchers(){return{disabled:["disabledChanged"]}}};w.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:flex;flex-direction:column;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{transform-origin:center;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@keyframes refresher-pop{0%{transform:scale(1);animation-timing-function:ease-in}50%{transform:scale(1.2);animation-timing-function:ease-out}100%{transform:scale(1)}}@keyframes refresher-rotate{from{transform:rotate(0deg)}to{transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:flex;flex-direction:column;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{transform-origin:center;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:flex}ion-refresher.refresher-native .refresher-pulling-icon{transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:flex;border:1px solid #ececec;background:white;box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};export{w as ion_refresher}