import{h}from"@stencil/core";import{openWormhole}from"stencil-wormhole";export class ScTotal{constructor(){this.order_key={total:"total_amount",subtotal:"subtotal_amount",amount_due:"amount_due"},this.total="amount_due",this.order=void 0}render(){var t,e,o,r,l;if((null===(t=this.order)||void 0===t?void 0:t.currency)&&(null===(r=null===(o=null===(e=this.order)||void 0===e?void 0:e.line_items)||void 0===o?void 0:o.data)||void 0===r?void 0:r.length))return h("sc-format-number",{type:"currency",currency:this.order.currency,value:null===(l=this.order)||void 0===l?void 0:l[this.order_key[this.total]]})}static get is(){return"sc-total"}static get originalStyleUrls(){return{$:["sc-total.css"]}}static get styleUrls(){return{$:["sc-total.css"]}}static get properties(){return{total:{type:"string",mutable:!1,complexType:{original:"'total' | 'subtotal' | 'amount_due'",resolved:'"amount_due" | "subtotal" | "total"',references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"total",reflect:!1,defaultValue:"'amount_due'"},order:{type:"unknown",mutable:!1,complexType:{original:"Checkout",resolved:"Checkout",references:{Checkout:{location:"import",path:"../../../../types",id:"src/types.ts::Checkout"}}},required:!1,optional:!1,docs:{tags:[],text:""}}}}}openWormhole(ScTotal,["order"],!1);