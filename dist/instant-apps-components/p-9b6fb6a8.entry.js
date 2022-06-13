import{r as t,h as i,g as n,H as o}from"./p-5bb33799.js";import{g as s}from"./p-b27a88a3.js";let a=class{constructor(i){t(this,i),this.placement="trailing-start",this.pagination=!1,this.disableAction=!1,this.intlOf="of"}componentDidLoad(){this.getMessages()}componentDidUpdate(){this.popoverEl.referenceElement=this.referenceElement}render(){var t,n,o,s;return i("calcite-popover",{ref:t=>this.popoverEl=t,heading:this.popoverTitle,"auto-close":"true",placement:this.placement,"intl-close":null===(t=this.messages)||void 0===t?void 0:t.close,"trigger-disabled":"true","ref-id":this.refId,dismissible:"true"},i("div",{class:"instant-apps-popover__content"+(this.disableAction?" instant-apps-popover--action-disabled":"")},this.disableAction?null:i("calcite-action",{key:"popover-action",class:"instant-apps-popover__action",onclick:this.popoverAction,icon:"chevron-left",compact:"true","text-enabled":"true",text:this.intlPopoverAction?this.intlPopoverAction:null===(n=this.messages)||void 0===n?void 0:n.back}),i("section",null,i("span",{id:"subtitle"},this.subtitle),i("p",null,this.content)),this.pagination?i("div",{key:`iac-popover-footer-${this.index}`,class:"instant-apps-popover__footer"},i("span",null,this.index+1," ",this.intlOf," ",null===(s=null===(o=this.parent)||void 0===o?void 0:o.instantAppsPopovers)||void 0===s?void 0:s.size),this.renderPagination()):null))}renderPagination(){var t,n;const{index:o,messages:s,parent:a}=this,e=o===(null===(n=null===(t=this.parent)||void 0===t?void 0:t.instantAppsPopovers)||void 0===n?void 0:n.size)-1;return i("div",{key:"pagination-button-container",class:"instant-apps-popover__button-container"},0===o?null:i("calcite-button",{key:"prev",onClick:()=>null==a?void 0:a.previous(),appearance:"outline",color:"neutral"},null==s?void 0:s.back),i("calcite-button",{key:"next",onClick:()=>{e?null==a||a.done():null==a||a.next()}},e?null==s?void 0:s.done:null==s?void 0:s.next))}async getMessages(){const t=await s(this.el);this.messages=t[0]}get el(){return n(this)}};a.style=":host{display:block}.instant-apps-popover__content{display:flex;flex-direction:column;padding:0 5% 5% 5%;max-width:25vw;font-family:var(--calcite-sans-family);font-size:14px}.instant-apps-popover__content .instant-apps-popover__action{align-self:flex-start;--calcite-ui-foreground-2:transparent}.instant-apps-popover__content span{display:inline-block;font-weight:900;color:var(--calcite-ui-text-1);margin:0 0 10px 0;font-family:var(--calcite-sans-family)}.instant-apps-popover__content p{line-height:19.12px;margin:0;margin-bottom:10px;font-family:var(--calcite-sans-family)}.instant-apps-popover__content .instant-apps-popover__footer{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.instant-apps-popover__content .instant-apps-popover__footer span{margin-bottom:0;font-weight:normal;font-size:14px;font-family:var(--calcite-sans-family)}.instant-apps-popover__content .instant-apps-popover__footer calcite-button:first-child{--calcite-ui-foreground-3:transparent}.instant-apps-popover__content .instant-apps-popover__footer calcite-button:last-child{margin-left:5px}.instant-apps-popover__content.instant-apps-popover--action-disabled{padding:5%}.instant-apps-popover__content.instant-apps-popover--action-disabled #subtitle{margin:0 0 10px 0}";let e=class{constructor(i){t(this,i),this.instantAppsPopovers=new Map,this.beforeOpen=()=>Promise.resolve()}componentWillLoad(){var t;Array.from(null===(t=this.host.querySelector("[slot='popovers']"))||void 0===t?void 0:t.children).forEach(((t,i)=>{const n=t.getAttribute("ref-id");t.parent=this,t.index=i,this.instantAppsPopovers.set(n,t)})),this.host.addEventListener("calcitePopoverOpen",(t=>{const i=t.target.getAttribute("ref-id");this.currentId=i}))}render(){return i(o,null,i("slot",{name:"popovers"}))}next(){const t=Array.from(this.instantAppsPopovers.keys()),i=t.indexOf(this.currentId)+1,n=t[i];this.close(this.currentId),this.open(n)}previous(){const t=Array.from(this.instantAppsPopovers.keys()),i=t.indexOf(this.currentId)-1,n=t[i];this.close(this.currentId),this.open(n)}done(){this.endTour()}handlePopoverProps(t){var i;Array.from(null===(i=this.host.querySelector("[slot='popovers']"))||void 0===i?void 0:i.children).forEach((i=>{i.disableAction=t.disableAction,i.pagination=t.pagination}))}async open(t){return this.beforeOpen().then((()=>{var i;(null===(i=this.instantAppsPopovers.get(t))||void 0===i?void 0:i.firstElementChild).toggle(!0)}))}async close(t){var i;(null===(i=this.instantAppsPopovers.get(t))||void 0===i?void 0:i.firstElementChild).toggle(!1)}async beginTour(){this.inTour=!0,this.handlePopoverProps({pagination:!0,disableAction:!0});const t=Array.from(this.instantAppsPopovers.keys());this.open(t[0])}async endTour(){this.close(this.currentId),this.inTour=!1,this.handlePopoverProps({pagination:!1,disableAction:!1})}get host(){return n(this)}};e.style=":host{display:block}";export{a as instant_apps_popover,e as instant_apps_popovers}