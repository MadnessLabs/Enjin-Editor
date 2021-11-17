import{r as t,c as s,h as r,a as e,H as i}from"./p-942c9e49.js";import{g as o}from"./p-e36f1ef1.js";import{a as n,b as h,h as a}from"./p-c563b4de.js";let c=class{constructor(r){t(this,r),this.ionItemReorder=s(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){const t=this.el.closest("ion-content");t&&(this.scrollEl=await t.getScrollElement()),this.gesture=(await import("./p-f5849699.js")).createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:t=>this.canStart(t),onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:()=>this.onEnd()}),this.disabledChanged()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(t){return Promise.resolve(this.completeSync(t))}canStart(t){if(this.selectedItemEl||0!==this.state)return!1;const s=t.event.target.closest("ion-reorder");if(!s)return!1;const r=l(s,this.el);return!!r&&(t.data=r,!0)}onStart(t){t.event.preventDefault();const s=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;const e=this.el,i=e.children;if(!i||0===i.length)return;let o=0;for(let t=0;t<i.length;t++){const s=i[t];o+=s.offsetHeight,r.push(o),s.$ionIndex=t}const h=e.getBoundingClientRect();if(this.containerTop=h.top,this.containerBottom=h.bottom,this.scrollEl){const t=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=t.top+f,this.scrollElBottom=t.bottom-f}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=d(s),this.selectedItemHeight=s.offsetHeight,this.state=1,s.classList.add(p),n()}onMove(t){const s=this.selectedItemEl;if(!s)return;const r=this.autoscroll(t.currentY),e=this.containerTop-r,i=Math.max(e,Math.min(t.currentY,this.containerBottom-r)),o=r+i-t.startY,n=this.itemIndexForTop(i-e);if(n!==this.lastToIndex){const t=d(s);this.lastToIndex=n,h(),this.reorderMove(t,n)}s.style.transform=`translateY(${o}px)`}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t)return void(this.state=0);const s=this.lastToIndex,r=d(t);s===r?this.completeSync():this.ionItemReorder.emit({from:r,to:s,complete:this.completeSync.bind(this)}),a()}completeSync(t){const s=this.selectedItemEl;if(s&&2===this.state){const r=this.el.children,e=r.length,i=this.lastToIndex,o=d(s);i===o||void 0!==t&&!0!==t||this.el.insertBefore(s,o<i?r[i+1]:r[i]),Array.isArray(t)&&(t=m(t,o,i));for(let t=0;t<e;t++)r[t].style.transform="";s.style.transition="",s.classList.remove(p),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const s=this.cachedHeights;for(let r=0;r<s.length;r++)if(s[r]>t)return r;return s.length-1}reorderMove(t,s){const r=this.selectedItemHeight,e=this.el.children;for(let i=0;i<e.length;i++){let o="";i>t&&i<=s?o=`translateY(${-r}px)`:i<t&&i>=s&&(o=`translateY(${r}px)`),e[i].style.transform=o}}autoscroll(t){if(!this.scrollEl)return 0;let s=0;return t<this.scrollElTop?s=-u:t>this.scrollElBottom&&(s=u),0!==s&&this.scrollEl.scrollBy(0,s),this.scrollEl.scrollTop-this.scrollElInitial}render(){const t=o(this);return r(i,{class:{[t]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return e(this)}static get watchers(){return{disabled:["disabledChanged"]}}};const d=t=>t.$ionIndex,l=(t,s)=>{let r;for(;t;){if(r=t.parentElement,r===s)return t;t=r}},f=60,u=10,p="reorder-selected",m=(t,s,r)=>{const e=t[s];return t.splice(s,1),t.splice(r,0,e),t.slice()};c.style=".reorder-list-active>*{transition:transform 300ms;will-change:transform}.reorder-enabled{user-select:none}.reorder-enabled ion-reorder{display:block;cursor:grab;pointer-events:all;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:grabbing}.reorder-selected{position:relative;transition:none !important;box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{transform:translate3d(0,  0,  0)}";export{c as ion_reorder_group}