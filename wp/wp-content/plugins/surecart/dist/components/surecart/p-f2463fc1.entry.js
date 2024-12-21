import{r as e,h as t,a}from"./p-e97fde0a.js";const i=":host{display:block}.heading{font-family:var(--sc-font-sans);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.heading--small .heading__title{font-size:var(--sc-font-size-small);text-transform:uppercase}.heading__text{width:100%}.heading__title{font-size:var(--sc-font-size-x-large);font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense);white-space:normal}.heading__description{font-size:var(--sc-font-size-normal);line-height:var(--sc-line-height-dense);color:var(--sc-color-gray-500)}";const s=i;const n=class{constructor(t){e(this,t);this.size="medium"}render(){return t("div",{key:"4f8cfcc9dfdf2a69908d98fba958c2cf1ae2cbae",part:"base",class:{heading:true,"heading--small":this.size==="small","heading--medium":this.size==="medium","heading--large":this.size==="large"}},t("div",{key:"17f4b7d485e5979fae0a075077e34a1ac37cdeb5",class:{heading__text:true}},t("div",{key:"d742ee0a5188171175252fd22098ea44ea9fbd7a",class:"heading__title",part:"title"},t("slot",{key:"23f0bf8fa532646310837b5362cc68880bf3ea7d"})),t("div",{key:"7e6e4eadd08437a75dab7cccdd4427e7ae35d983",class:"heading__description",part:"description"},t("slot",{key:"2ad1f6adea182e4b10c7f1150a2db73cf94c1db0",name:"description"}))),t("slot",{key:"a6b57db07ed198149111ddae37dbac4d51e4dec5",name:"end"}))}get el(){return a(this)}};n.style=s;const d=class{constructor(t){e(this,t);this.checkout=undefined;this.hasManualInstructions=undefined}handleOrderChange(){var e;if((e=this.checkout)===null||e===void 0?void 0:e.manual_payment){this.addManualPaymentInstructions()}}addManualPaymentInstructions(){var e,t;if(this.hasManualInstructions)return;const a=this.el.shadowRoot.querySelector("slot").assignedElements({flatten:true}).find((e=>e.tagName==="SC-ORDER-CONFIRMATION-DETAILS"));const i=document.createElement("sc-order-manual-instructions");(t=(e=a===null||a===void 0?void 0:a.parentNode)===null||e===void 0?void 0:e.insertBefore)===null||t===void 0?void 0:t.call(e,i,a);this.hasManualInstructions=true}componentWillLoad(){this.hasManualInstructions=!!this.el.querySelector("sc-order-manual-instructions")}render(){return t("slot",{key:"c0dd3f7ec590a7ff1f482f0f135fcda14c2ff1ca"})}get el(){return a(this)}static get watchers(){return{checkout:["handleOrderChange"]}}};export{n as sc_heading,d as sc_order_confirm_components_validator};
//# sourceMappingURL=p-f2463fc1.entry.js.map