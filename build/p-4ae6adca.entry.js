import{r as s,h as t,H as i}from"./p-a469560d.js";import{g as o}from"./p-f6488768.js";import{m as n}from"./p-525a3ef1.js";import{u as r}from"./p-afb1992f.js";import"./p-f2660943.js";import"./p-c73722f4.js";import"./p-74529b1d.js";const a=class{constructor(t){s(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>n.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await r(this.menu)}render(){const s=o(this),n=this.autoHide&&!this.visible;return t(i,{onClick:this.onClick,"aria-hidden":n?"true":null,class:{[s]:!0,"menu-toggle-hidden":n}},t("slot",null))}};a.style=":host(.menu-toggle-hidden){display:none}";export{a as ion_menu_toggle}