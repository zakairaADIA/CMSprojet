import{r as e,h as s,H as r}from"./p-e97fde0a.js";const t=":host{display:block;line-height:1}";const n=t;const i=class{constructor(s){e(this,s);this.prices=undefined;this.minPrice=undefined;this.maxPrice=undefined}handlePricesChange(){let e,s;(this.prices||[]).filter((e=>!(e===null||e===void 0?void 0:e.archived))).forEach((r=>{if(!s||r.amount>s.amount){s=r}if(!e||r.amount<e.amount){e=r}}));this.minPrice=e;this.maxPrice=s}componentWillLoad(){this.handlePricesChange()}render(){if(!this.maxPrice||!this.minPrice){return s(r,null)}return s(r,null,this.maxPrice.amount==this.minPrice.amount?s("span",null,s("sc-format-number",{type:"currency",currency:this.maxPrice.currency,value:this.maxPrice.amount})):s("span",null,s("sc-visually-hidden",null,wp.i18n.__("Price range from","surecart")," "),s("sc-format-number",{type:"currency",currency:this.minPrice.currency,value:this.minPrice.amount}),s("span",{"aria-hidden":true}," — "),s("sc-visually-hidden",null,wp.i18n.__("to","surecart")),s("sc-format-number",{type:"currency",currency:this.maxPrice.currency,value:this.maxPrice.amount})))}static get watchers(){return{prices:["handlePricesChange"]}}};i.style=n;export{i as sc_price_range};
//# sourceMappingURL=p-c827fd15.entry.js.map