import{r as t,h as e,H as o,a as s}from"./p-942c9e49.js";import{g as a,c as i,a as n}from"./p-e36f1ef1.js";let p=class{constructor(e){t(this,e)}componentDidLoad(){d((async()=>{const t=n(window,"hybrid");i.getBoolean("_testing")||import("./p-35331d77.js").then((t=>t.startTapClick(i))),i.getBoolean("statusTap",t)&&import("./p-06c77ecf.js").then((t=>t.startStatusTap())),i.getBoolean("inputShims",r())&&import("./p-5514aa89.js").then((t=>t.startInputShims(i)));const e=await import("./p-f2660943.js");i.getBoolean("hardwareBackButton",t)?e.startHardwareBackButton():e.blockHardwareBackButton(),"undefined"!=typeof window&&import("./p-2e4e8117.js").then((t=>t.startKeyboardAssist(window))),import("./p-aef0bba0.js").then((t=>t.startFocusVisible()))}))}render(){const t=a(this);return e(o,{class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":i.getBoolean("_forceStatusbarPadding")}})}get el(){return s(this)}};const r=()=>n(window,"ios")&&n(window,"mobile"),d=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)};p.style="html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";export{p as ion_app}