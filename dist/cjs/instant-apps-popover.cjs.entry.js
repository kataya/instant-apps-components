'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-172ac3b5.js');
const locale = require('./locale-2767e2c1.js');

const instantAppsPopoverCss = ":host{display:block}.instant-apps-popover__content{display:flex;flex-direction:column;padding:0 5% 5% 5%;max-width:35vw;font-family:var(--calcite-sans-family);font-size:14px}.instant-apps-popover__content .instant-apps-popover__action{align-self:flex-start;--calcite-ui-foreground-2:transparent}.instant-apps-popover__content span{display:inline-block;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);margin:0 0 10px 0;font-family:var(--calcite-sans-family)}.instant-apps-popover__content p{line-height:19.12px;margin:0;margin-bottom:10px;font-family:var(--calcite-sans-family)}.instant-apps-popover__content .instant-apps-popover__footer{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.instant-apps-popover__content .instant-apps-popover__footer span{margin-bottom:0;font-weight:normal;font-size:14px;font-family:var(--calcite-sans-family)}.instant-apps-popover__content .instant-apps-popover__footer calcite-button:first-child{--calcite-ui-foreground-3:transparent}.instant-apps-popover__content .instant-apps-popover__footer calcite-button:last-child{margin-left:5px}.instant-apps-popover__content .instant-apps-popover__img{width:100%;margin-bottom:10px}.instant-apps-popover__content.instant-apps-popover--action-disabled{padding:5%}.instant-apps-popover__content.instant-apps-popover--action-disabled #subtitle{margin:0 0 10px 0}";

const CSS = {
  content: 'instant-apps-popover__content',
  buttonContainer: 'instant-apps-popover__button-container',
  action: 'instant-apps-popover__action',
  actionDisabled: 'instant-apps-popover--action-disabled',
  img: 'instant-apps-popover__img',
  footer: 'instant-apps-popover__footer',
};
let InstantAppsPopover = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.placement = 'trailing-start';
    this.pagination = false;
    this.disableAction = false;
    this.intlOf = 'of';
  }
  componentDidLoad() {
    this.getMessages();
  }
  componentDidUpdate() {
    this.popoverEl.referenceElement = this.referenceElement;
  }
  render() {
    var _a, _b, _c, _d;
    return (index.h("calcite-popover", { ref: (el) => (this.popoverEl = el), heading: this.popoverTitle, "auto-close": "true", placement: this.placement, "intl-close": (_a = this.messages) === null || _a === void 0 ? void 0 : _a.close, "trigger-disabled": "true", "ref-id": this.refId, dismissible: "true" }, index.h("div", { class: `${CSS.content}${this.disableAction ? ` ${CSS.actionDisabled}` : ''}` }, !this.disableAction ? (index.h("calcite-action", { key: "popover-action", class: CSS.action, onclick: this.popoverAction, icon: document.dir === 'rtl' ? 'chevron-right' : 'chevron-left', compact: "true", "text-enabled": "true", text: this.intlPopoverAction ? this.intlPopoverAction : (_b = this.messages) === null || _b === void 0 ? void 0 : _b.back })) : null, index.h("section", null, index.h("span", { id: "subtitle" }, this.subtitle), index.h("p", null, this.content), this.imgSrc ? index.h("img", { key: `iac-popover-img-${this.refId}`, class: CSS.img, src: this.imgSrc, alt: this.imgAlt ? this.imgAlt : '' }) : null), this.pagination ? (index.h("div", { key: `iac-popover-footer-${this.index}`, class: CSS.footer }, index.h("span", null, this.index + 1, " ", this.intlOf, " ", (_d = (_c = this.parent) === null || _c === void 0 ? void 0 : _c.instantAppsPopovers) === null || _d === void 0 ? void 0 :
      _d.size), this.renderPagination())) : null)));
  }
  renderPagination() {
    var _a, _b;
    const { index: index$1, messages, parent } = this;
    const size = (_b = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.instantAppsPopovers) === null || _b === void 0 ? void 0 : _b.size;
    const isFirst = index$1 === 0;
    const isLast = index$1 === size - 1;
    return (index.h("div", { key: "pagination-button-container", class: CSS.buttonContainer }, !isFirst ? (index.h("calcite-button", { key: "prev", onClick: () => parent === null || parent === void 0 ? void 0 : parent.previous(), appearance: "outline", color: "neutral" }, messages === null || messages === void 0 ? void 0 : messages.back)) : null, index.h("calcite-button", { key: "next", onClick: () => {
        if (isLast) {
          parent === null || parent === void 0 ? void 0 : parent.done();
        }
        else {
          parent === null || parent === void 0 ? void 0 : parent.next();
        }
      } }, isLast ? messages === null || messages === void 0 ? void 0 : messages.done : messages === null || messages === void 0 ? void 0 : messages.next)));
  }
  async getMessages() {
    const messages = await locale.getLocaleComponentStrings(this.el);
    this.messages = messages[0];
  }
  get el() { return index.getElement(this); }
};
InstantAppsPopover.style = instantAppsPopoverCss;

exports.instant_apps_popover = InstantAppsPopover;
