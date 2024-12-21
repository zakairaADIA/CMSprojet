import{h,Host}from"@stencil/core";import{state as checkoutState}from"../../../../store/checkout/index";import{__}from"@wordpress/i18n";export class ScLineItemTrial{constructor(){this.label=void 0}render(){var t;return(null===(t=null==checkoutState?void 0:checkoutState.checkout)||void 0===t?void 0:t.trial_amount)?h("sc-line-item",null,h("span",{slot:"description"},this.label||__("Trial","surecart")),h("sc-format-number",{slot:"price",type:"currency",currency:checkoutState.checkout.currency,value:checkoutState.checkout.trial_amount})):h(Host,{style:{display:"none"}})}static get is(){return"sc-line-item-trial"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-line-item-trial.scss"]}}static get styleUrls(){return{$:["sc-line-item-trial.css"]}}static get properties(){return{label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The label for the trial item"},attribute:"label",reflect:!1}}}}