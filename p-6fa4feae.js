import{b as n}from"./p-4403447b.js";let i;const t=n=>{if(void 0===i){const t=void 0!==n.style.webkitAnimationName;i=void 0===n.style.animationName&&t?"-webkit-":""}return i},e=(n,i,e)=>{const o=i.startsWith("animation")?t(n):"";n.style.setProperty(o+i,e)},o=(n,i)=>{const e=i.startsWith("animation")?t(n):"";n.style.removeProperty(e+i)},a=[],r=(n=[],i)=>{if(void 0!==i){const t=Array.isArray(i)?i:[i];return[...n,...t]}return n},s=i=>{let s,l,d,m,f,c,u,v,y,p,g,$,b,A=[],k=[],C=[],E=!1,h={},w=[],S=[],T={},F=0,R=!1,D=!1,W=!0,I=!1,M=!0;const j=i,x=[],z=[],K=[],P=[],Z=[],q=[],B=[],G=[],H=[],J=[],L="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,N="function"==typeof Element&&"function"==typeof Element.prototype.animate&&L,O=(n,i)=>((i&&i.oneTimeCallback?z:x).push({c:n,o:i}),b),Q=()=>{if(N)J.forEach((n=>{n.cancel()})),J.length=0;else{const i=K.slice();n((()=>{i.forEach((n=>{o(n,"animation-name"),o(n,"animation-duration"),o(n,"animation-timing-function"),o(n,"animation-iteration-count"),o(n,"animation-delay"),o(n,"animation-play-state"),o(n,"animation-fill-mode"),o(n,"animation-direction")}))}))}},U=()=>{Z.forEach((n=>{n&&n.parentNode&&n.parentNode.removeChild(n)})),Z.length=0},V=()=>void 0!==f?f:u?u.getFill():"both",X=()=>void 0!==y?y:void 0!==c?c:u?u.getDirection():"normal",Y=()=>R?"linear":void 0!==d?d:u?u.getEasing():"linear",_=()=>D?0:void 0!==p?p:void 0!==l?l:u?u.getDuration():0,nn=()=>void 0!==m?m:u?u.getIterations():1,tn=()=>void 0!==g?g:void 0!==s?s:u?u.getDelay():0,en=()=>{0!==F&&(F--,0===F&&((()=>{fn(),G.forEach((n=>n())),H.forEach((n=>n()));const n=W?1:0,i=w,t=S,o=T;K.forEach((n=>{const a=n.classList;i.forEach((n=>a.add(n))),t.forEach((n=>a.remove(n)));for(const i in o)o.hasOwnProperty(i)&&e(n,i,o[i])})),x.forEach((i=>i.c(n,b))),z.forEach((i=>i.c(n,b))),z.length=0,M=!0,W&&(I=!0),W=!0})(),u&&u.animationFinish()))},on=(o=!0)=>{(()=>{q.forEach((n=>n())),B.forEach((n=>n()));const n=k,i=C,t=h;K.forEach((o=>{const a=o.classList;n.forEach((n=>a.add(n))),i.forEach((n=>a.remove(n)));for(const n in t)t.hasOwnProperty(n)&&e(o,n,t[n])}))})(),A.length>0&&(N?(K.forEach((n=>{const i=n.animate(A,{id:j,delay:tn(),duration:_(),easing:Y(),iterations:nn(),fill:V(),direction:X()});i.pause(),J.push(i)})),J.length>0&&(J[0].onfinish=()=>{en()})):((o=!0)=>{U();const r=((s=A).forEach((n=>{for(const i in n)if(n.hasOwnProperty(i)){const t=n[i];if("easing"===i)n["animation-timing-function"]=t,delete n[i];else{const e=i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();e!==i&&(n[e]=t,delete n[i])}}})),s);var s;K.forEach((s=>{if(r.length>0){const l=((n=[])=>n.map((n=>{const i=n.offset,t=[];for(const i in n)n.hasOwnProperty(i)&&"offset"!==i&&t.push(`${i}: ${n[i]};`);return`${100*i}% { ${t.join(" ")} }`})).join(" "))(r);$=void 0!==i?i:(n=>{let i=a.indexOf(n);return i<0&&(i=a.push(n)-1),`ion-animation-${i}`})(l);const d=((n,i,e)=>{const o=(n=>{const i=n.getRootNode();return i.head||i})(e),a=t(e),r=o.querySelector("#"+n);if(r)return r;const s=(e.ownerDocument||document).createElement("style");return s.id=n,s.textContent=`@${a}keyframes ${n} { ${i} } @${a}keyframes ${n}-alt { ${i} }`,o.appendChild(s),s})($,l,s);Z.push(d),e(s,"animation-duration",`${_()}ms`),e(s,"animation-timing-function",Y()),e(s,"animation-delay",`${tn()}ms`),e(s,"animation-fill-mode",V()),e(s,"animation-direction",X());const m=nn()===1/0?"infinite":nn().toString();e(s,"animation-iteration-count",m),e(s,"animation-play-state","paused"),o&&e(s,"animation-name",`${d.id}-alt`),n((()=>{e(s,"animation-name",d.id||null)}))}}))})(o)),E=!0},an=n=>{if(n=Math.min(Math.max(n,0),.9999),N)J.forEach((i=>{i.currentTime=i.effect.getComputedTiming().delay+_()*n,i.pause()}));else{const i=`-${_()*n}ms`;K.forEach((n=>{A.length>0&&(e(n,"animation-delay",i),e(n,"animation-play-state","paused"))}))}},rn=n=>{J.forEach((n=>{n.effect.updateTiming({delay:tn(),duration:_(),easing:Y(),iterations:nn(),fill:V(),direction:X()})})),void 0!==n&&an(n)},sn=(i=!0,t)=>{n((()=>{K.forEach((o=>{e(o,"animation-name",$||null),e(o,"animation-duration",`${_()}ms`),e(o,"animation-timing-function",Y()),e(o,"animation-delay",void 0!==t?`-${t*_()}ms`:`${tn()}ms`),e(o,"animation-fill-mode",V()||null),e(o,"animation-direction",X()||null);const a=nn()===1/0?"infinite":nn().toString();e(o,"animation-iteration-count",a),i&&e(o,"animation-name",`${$}-alt`),n((()=>{e(o,"animation-name",$||null)}))}))}))},ln=(n=!1,i=!0,t)=>(n&&P.forEach((e=>{e.update(n,i,t)})),N?rn(t):sn(i,t),b),dn=()=>{E&&(N?J.forEach((n=>{n.pause()})):K.forEach((n=>{e(n,"animation-play-state","paused")})))},mn=()=>{v=void 0,en()},fn=()=>{v&&clearTimeout(v)},cn=i=>new Promise((t=>{i&&i.sync&&(D=!0,O((()=>D=!1),{oneTimeCallback:!0})),E||on(),I&&(N?(an(0),rn()):sn(),I=!1),M&&(F=P.length+1,M=!1),O((()=>t()),{oneTimeCallback:!0}),P.forEach((n=>{n.play()})),N?(J.forEach((n=>{n.play()})),0!==A.length&&0!==K.length||en()):(()=>{if(fn(),n((()=>{K.forEach((n=>{A.length>0&&e(n,"animation-play-state","running")}))})),0===A.length||0===K.length)en();else{const i=tn()||0,t=_()||0,e=nn()||1;isFinite(e)&&(v=setTimeout(mn,i+t*e+100)),(i=>{let t;const e={passive:!0},a=e=>{i===e.target&&(t&&t(),fn(),n((()=>{K.forEach((n=>{o(n,"animation-duration"),o(n,"animation-delay"),o(n,"animation-play-state")})),n(en)})))};i&&(i.addEventListener("webkitAnimationEnd",a,e),i.addEventListener("animationend",a,e),t=()=>{i.removeEventListener("webkitAnimationEnd",a,e),i.removeEventListener("animationend",a,e)})})(K[0])}})()})),un=(n,i)=>{const t=A[0];return void 0===t||void 0!==t.offset&&0!==t.offset?A=[{offset:0,[n]:i},...A]:t[n]=i,b};return b={parentAnimation:u,elements:K,childAnimations:P,id:j,animationFinish:en,from:un,to:(n,i)=>{const t=A[A.length-1];return void 0===t||void 0!==t.offset&&1!==t.offset?A=[...A,{offset:1,[n]:i}]:t[n]=i,b},fromTo:(n,i,t)=>un(n,i).to(n,t),parent:n=>(u=n,b),play:cn,pause:()=>(P.forEach((n=>{n.pause()})),dn(),b),stop:()=>{P.forEach((n=>{n.stop()})),E&&(Q(),E=!1),R=!1,D=!1,M=!0,y=void 0,p=void 0,g=void 0,F=0,I=!1,W=!0},destroy:n=>(P.forEach((i=>{i.destroy(n)})),(n=>{Q(),n&&U()})(n),K.length=0,P.length=0,A.length=0,x.length=0,z.length=0,E=!1,M=!0,b),keyframes:n=>(A=n,b),addAnimation:n=>{if(null!=n)if(Array.isArray(n))for(const i of n)i.parent(b),P.push(i);else n.parent(b),P.push(n);return b},addElement:n=>{if(null!=n)if(1===n.nodeType)K.push(n);else if(n.length>=0)for(let i=0;i<n.length;i++)K.push(n[i]);else console.error("Invalid addElement value");return b},update:ln,fill:n=>(f=n,ln(!0),b),direction:n=>(c=n,ln(!0),b),iterations:n=>(m=n,ln(!0),b),duration:n=>(N||0!==n||(n=1),l=n,ln(!0),b),easing:n=>(d=n,ln(!0),b),delay:n=>(s=n,ln(!0),b),getWebAnimations:()=>J,getKeyframes:()=>A,getFill:V,getDirection:X,getDelay:tn,getIterations:nn,getEasing:Y,getDuration:_,afterAddRead:n=>(G.push(n),b),afterAddWrite:n=>(H.push(n),b),afterClearStyles:(n=[])=>{for(const i of n)T[i]="";return b},afterStyles:(n={})=>(T=n,b),afterRemoveClass:n=>(S=r(S,n),b),afterAddClass:n=>(w=r(w,n),b),beforeAddRead:n=>(q.push(n),b),beforeAddWrite:n=>(B.push(n),b),beforeClearStyles:(n=[])=>{for(const i of n)h[i]="";return b},beforeStyles:(n={})=>(h=n,b),beforeRemoveClass:n=>(C=r(C,n),b),beforeAddClass:n=>(k=r(k,n),b),onFinish:O,progressStart:(n=!1,i)=>(P.forEach((t=>{t.progressStart(n,i)})),dn(),R=n,E?ln(!1,!0,i):on(),b),progressStep:n=>(P.forEach((i=>{i.progressStep(n)})),an(n),b),progressEnd:(n,i,t)=>(R=!1,P.forEach((e=>{e.progressEnd(n,i,t)})),void 0!==t&&(p=t),I=!1,W=!0,0===n?(y="reverse"===X()?"normal":"reverse","reverse"===y&&(W=!1),N?(ln(),an(1-i)):(g=(1-i)*_()*-1,ln(!1,!1))):1===n&&(N?(ln(),an(i)):(g=i*_()*-1,ln(!1,!1))),void 0!==n&&(O((()=>{p=void 0,y=void 0,g=void 0}),{oneTimeCallback:!0}),u||cn()),b)}};export{s as c}