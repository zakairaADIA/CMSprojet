import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{f as formBusy}from"./getters3.js";import{s as state}from"./mutations2.js";import{d as defineCustomElement$2}from"./sc-line-item2.js";import{d as defineCustomElement$1}from"./sc-skeleton2.js";const scLineItemInvoiceDueDateCss=":host{display:block}sc-line-item{text-align:left;line-height:var(--sc-line-height-dense);color:var(--sc-input-label-color)}",ScLineItemInvoiceDueDateStyle0=scLineItemInvoiceDueDateCss,ScLineItemInvoiceDueDate=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow()}render(){var e;const t=null==state?void 0:state.checkout,s=(null===(e=null==t?void 0:t.invoice)||void 0===e?void 0:e.due_date_date)||null;return s?formBusy()&&!(null==t?void 0:t.invoice)?h("sc-line-item",null,h("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),h("sc-skeleton",{slot:"price",style:{width:"50px",display:"inline-block","--border-radius":"6px"}})):h("sc-line-item",null,h("span",{slot:"description"},h("slot",{name:"title"},wp.i18n.__("Due Date","surecart"))),h("span",{slot:"price-description"},s)):null}static get style(){return ScLineItemInvoiceDueDateStyle0}},[1,"sc-line-item-invoice-due-date"]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-line-item-invoice-due-date","sc-line-item","sc-skeleton"].forEach((e=>{switch(e){case"sc-line-item-invoice-due-date":customElements.get(e)||customElements.define(e,ScLineItemInvoiceDueDate);break;case"sc-line-item":customElements.get(e)||defineCustomElement$2();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$1()}}))}export{ScLineItemInvoiceDueDate as S,defineCustomElement as d};