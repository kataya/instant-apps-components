import{r as t,h as e,H as a}from"./p-e9d68db2.js";let s=class{constructor(e){t(this,e)}render(){return e(a,null,e("header",{style:{backgroundColor:this.backgroundColor}},e("span",{class:"instant-apps-header__header-content"},this.logoImage&&this.logoLink?e("a",{href:`${this.logoLink}`,target:"_blank"},e("img",{src:`${this.logoImage}`,alt:`${this.logoImageAltText}`})):this.logoImage?e("img",{src:`${this.logoImage}`,alt:this.logoImageAltText}):"",e("h1",{style:{color:this.textColor}},this.titleText)),e("slot",{name:"actions-end"})))}};s.style=":host{width:100%}:host header{box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;width:100%;height:5%;padding:0 0.5%;background-color:#0079c1;padding-top:5px;padding-bottom:5px}:host header .instant-apps-header__header-content{display:flex;align-items:center}:host header .instant-apps-header__header-content img{width:6%;padding:0 5px}:host header .instant-apps-header__header-content a{display:flex;align-items:center;width:8%;padding-right:5px}:host header .instant-apps-header__header-content a img{width:100%;padding-right:0}:host header .instant-apps-header__header-content h1{margin:0;font-size:18px;color:var(--calcite-ui-text-inverse);font-weight:430}";export{s as instant_apps_header}