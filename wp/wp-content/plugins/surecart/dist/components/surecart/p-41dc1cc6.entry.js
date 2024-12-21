import{r as i,c as s,h as t,H as e}from"./p-e97fde0a.js";import{c as o}from"./p-100cb670.js";import{a}from"./p-93127aa7.js";import{s as r}from"./p-894c7006.js";import{s as n,o as l}from"./p-021b5199.js";import"./p-9a298389.js";import"./p-401e165e.js";import"./p-d3366af3.js";import"./p-03631502.js";import"./p-9dbc54d6.js";import"./p-830ab1a3.js";import"./p-ec182234.js";import"./p-3f6362a4.js";import"./p-95325ec5.js";import"./p-6ec14893.js";const c=":host{display:block}a{color:var(--sc-color-primary-500)}a.customer-email__login-link{color:var(--sc-customer-login-link-color, var(--sc-input-placeholder-color));text-decoration:none;font-size:var(--sc-font-size-small)}.tracking-confirmation-message{font-size:var(--sc-font-size-xx-small)}.tracking-confirmation-message span{opacity:0.75}";const h=c;const d=class{constructor(t){i(this,t);this.scChange=s(this,"scChange",7);this.scClear=s(this,"scClear",7);this.scInput=s(this,"scInput",7);this.scFocus=s(this,"scFocus",7);this.scBlur=s(this,"scBlur",7);this.scUpdateOrderState=s(this,"scUpdateOrderState",7);this.scUpdateAbandonedCart=s(this,"scUpdateAbandonedCart",7);this.scLoginPrompt=s(this,"scLoginPrompt",7);this.trackingConfirmationMessage=undefined;this.size="medium";this.value=a("email");this.pill=false;this.label=undefined;this.showLabel=true;this.help="";this.placeholder=undefined;this.disabled=false;this.readonly=false;this.required=false;this.invalid=false;this.autofocus=undefined;this.hasFocus=undefined}async handleChange(){this.value=this.input.value;this.scChange.emit();try{n.checkout=await o({id:n.checkout.id,data:{email:this.input.value}})}catch(i){console.log(i)}}async reportValidity(){var i,s;return(s=(i=this.input)===null||i===void 0?void 0:i.reportValidity)===null||s===void 0?void 0:s.call(i)}handleSessionChange(){var i,s,t,e,o,l;if(this.value&&!r.loggedIn)return;if(r.loggedIn){this.value=r.email||((s=(i=n===null||n===void 0?void 0:n.checkout)===null||i===void 0?void 0:i.customer)===null||s===void 0?void 0:s.email)||((t=n===null||n===void 0?void 0:n.checkout)===null||t===void 0?void 0:t.email);return}const c=a("email");if(!r.loggedIn&&!!c){this.value=c;return}this.value=((e=n===null||n===void 0?void 0:n.checkout)===null||e===void 0?void 0:e.email)||((l=(o=n===null||n===void 0?void 0:n.checkout)===null||o===void 0?void 0:o.customer)===null||l===void 0?void 0:l.email)}componentWillLoad(){this.handleSessionChange();this.removeCheckoutListener=l("checkout",(()=>this.handleSessionChange()))}disconnectedCallback(){this.removeCheckoutListener()}renderOptIn(){if(!this.trackingConfirmationMessage)return null;if(n.abandonedCheckoutEnabled!==false){return t("div",{class:"tracking-confirmation-message"},t("span",null,this.trackingConfirmationMessage)," ",t("a",{href:"#",onClick:i=>{i.preventDefault();this.scUpdateAbandonedCart.emit(false)}},wp.i18n.__("No Thanks","surecart")))}return t("div",{class:"tracking-confirmation-message"},t("span",null," ",wp.i18n.__("You won't receive further emails from us.","surecart")))}render(){var i;return t(e,{key:"bc967aac9ef137a1aa3934eb69af1baea87c7179"},t("sc-input",{key:"28c179e737e0286dda531acdf90c26531301d7de",exportparts:"base, input, form-control, label, help-text, prefix, suffix",type:"email",name:"email",ref:i=>this.input=i,value:this.value,help:this.help,label:this.label,autocomplete:"email",placeholder:this.placeholder,disabled:this.disabled||!!r.loggedIn&&!!((i=this.value)===null||i===void 0?void 0:i.length)&&!this.invalid,readonly:this.readonly,required:true,invalid:this.invalid,autofocus:this.autofocus,hasFocus:this.hasFocus,onScChange:()=>this.handleChange(),onScInput:()=>this.scInput.emit(),onScFocus:()=>this.scFocus.emit(),onScBlur:()=>this.scBlur.emit()}),this.renderOptIn())}};d.style=h;export{d as sc_customer_email};
//# sourceMappingURL=p-41dc1cc6.entry.js.map