import{r as t,h as a,H as i,a as e}from"./p-b37fb52e.js";import{a as s}from"./p-a38ea475.js";const n=class{constructor(a){t(this,a),this.loaded=!1,this.active=!1}async componentWillLoad(){this.active&&await this.setActive()}async setActive(){await this.prepareLazyLoaded(),this.active=!0}changeActive(t){t&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return s(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)}render(){const{tab:t,active:e,component:s}=this;return a(i,{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":`tab-button-${t}`,class:{"ion-page":void 0===s,"tab-hidden":!e}},a("slot",null))}get el(){return e(this)}static get watchers(){return{active:["changeActive"]}}};n.style=":host(.tab-hidden){display:none !important}";export{n as ion_tab}