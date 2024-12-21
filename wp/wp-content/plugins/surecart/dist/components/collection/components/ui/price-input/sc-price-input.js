import{h}from"@stencil/core";import{getCurrencySymbol}from"../../../functions/price";import{FormSubmitController}from"../../../functions/form-data";import{isZeroDecimal,maybeConvertAmount}from"../../../functions/currency";import{sprintf,__}from"@wordpress/i18n";export class ScPriceInput{constructor(){this.size="medium",this.name=void 0,this.value="",this.pill=!1,this.label=void 0,this.showLabel=!0,this.help="",this.clearable=!1,this.placeholder=void 0,this.disabled=!1,this.readonly=!1,this.minlength=void 0,this.maxlength=void 0,this.max=void 0,this.min=void 0,this.required=!1,this.invalid=!1,this.autofocus=void 0,this.hasFocus=void 0,this.currencyCode=void 0,this.showCode=void 0}async reportValidity(){const e=this.input.shadowRoot.querySelector("input");return e.setCustomValidity(""),this.min&&this.value&&parseFloat(this.value)<this.min&&(this.invalid=!0,e.setCustomValidity(sprintf(__("Must be %d or more.","surecart"),maybeConvertAmount(this.min,this.currencyCode).toString()))),this.max&&this.value&&parseFloat(this.value)>this.max&&(this.invalid=!0,e.setCustomValidity(sprintf(__("Must be %d or less.","surecart"),maybeConvertAmount(this.max,this.currencyCode).toString()))),e.reportValidity()}async triggerFocus(e){return this.input.triggerFocus(e)}async setCustomValidity(e){this.input.setCustomValidity(e)}async triggerBlur(){return this.input.blur()}handleFocusChange(){var e,t,o,i;this.hasFocus?null===(t=null===(e=this.input)||void 0===e?void 0:e.focus)||void 0===t||t.call(e):null===(i=null===(o=this.input)||void 0===o?void 0:o.blur)||void 0===i||i.call(o)}handleChange(){this.updateValue(),this.scChange.emit()}handleInput(){this.updateValue(),this.scInput.emit()}updateValue(){const e=parseFloat(this.input.value);if(isNaN(e))return void(this.value="");const t=isZeroDecimal(this.currencyCode)?e:(100*e).toFixed(2);this.value=t.toString(),this.setCustomValidity("")}componentDidLoad(){this.handleFocusChange(),this.formController=new FormSubmitController(this.el).addFormData(),document.addEventListener("wheel",(()=>{this.input.triggerBlur()}))}disconnectedCallback(){var e;null===(e=this.formController)||void 0===e||e.removeFormData()}getFormattedValue(){if(!this.value)return"";const e=parseFloat(this.value);return isNaN(e)?"":maybeConvertAmount(e,this.currencyCode).toString()}render(){return h("sc-input",{key:"6acd20c52b5a3305cf8e3ee0d633fa111e0bea4f",exportparts:"base, input, form-control, label, help-text, prefix, suffix",size:this.size,label:this.label,showLabel:this.showLabel,help:this.help,ref:e=>this.input=e,type:"text",name:this.name,disabled:this.disabled,readonly:this.readonly,required:this.required,placeholder:this.placeholder,minlength:this.minlength,maxlength:this.maxlength,min:this.min?this.min/100:0,step:.01,max:this.max?this.max/100:null,autofocus:this.autofocus,inputmode:"decimal",onScChange:()=>this.handleChange(),onScInput:()=>this.handleInput(),onScBlur:()=>this.scBlur.emit(),onScFocus:()=>this.scFocus.emit(),pattern:"^\\d*(\\.\\d{0,2})?$",value:this.getFormattedValue()},h("span",{key:"ad3e6746f8063b9b1f55da885211e8cb25bf159d",style:{opacity:"0.5"},slot:"prefix"},getCurrencySymbol(this.currencyCode)),h("span",{key:"5a3f492667b004b979346d380541c7ca3cc458e9",slot:"suffix"},h("slot",{key:"e5bfb4decf20e7693716b80e51d2b744249dd731",name:"suffix"},this.showCode&&(null==this?void 0:this.currencyCode)&&h("span",{key:"94de71f635c3f49f0bfe19fc043ddec585132e4d",style:{opacity:"0.5"}},this.currencyCode.toUpperCase()))))}static get is(){return"sc-price-input"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-price-input.css"]}}static get styleUrls(){return{$:["sc-price-input.css"]}}static get properties(){return{size:{type:"string",mutable:!1,complexType:{original:"'small' | 'medium' | 'large'",resolved:'"large" | "medium" | "small"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's size."},attribute:"size",reflect:!0,defaultValue:"'medium'"},name:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's name attribute."},attribute:"name",reflect:!1},value:{type:"string",mutable:!0,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's value attribute."},attribute:"value",reflect:!1,defaultValue:"''"},pill:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Draws a pill-style input with rounded edges."},attribute:"pill",reflect:!0,defaultValue:"false"},label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's label."},attribute:"label",reflect:!1},showLabel:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Should we show the label"},attribute:"show-label",reflect:!1,defaultValue:"true"},help:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's help text."},attribute:"help",reflect:!1,defaultValue:"''"},clearable:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Adds a clear button when the input is populated."},attribute:"clearable",reflect:!1,defaultValue:"false"},placeholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's placeholder text."},attribute:"placeholder",reflect:!1},disabled:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Disables the input."},attribute:"disabled",reflect:!0,defaultValue:"false"},readonly:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Makes the input readonly."},attribute:"readonly",reflect:!0,defaultValue:"false"},minlength:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The minimum length of input that will be considered valid."},attribute:"minlength",reflect:!1},maxlength:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The maximum length of input that will be considered valid."},attribute:"maxlength",reflect:!1},max:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's maximum value."},attribute:"max",reflect:!0},min:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's minimum value."},attribute:"min",reflect:!0},required:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Makes the input a required field."},attribute:"required",reflect:!0,defaultValue:"false"},invalid:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"This will be true when the control is in an invalid state. Validity is determined by props such as `type`,\n`required`, `minlength`, `maxlength`, and `pattern` using the browser's constraint validation API."},attribute:"invalid",reflect:!0,defaultValue:"false"},autofocus:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's autofocus attribute."},attribute:"autofocus",reflect:!1},hasFocus:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Inputs focus"},attribute:"has-focus",reflect:!0},currencyCode:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"3 letter currency code for input"},attribute:"currency-code",reflect:!0},showCode:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Show the currency code with the input"},attribute:"show-code",reflect:!1}}}static get events(){return[{method:"scChange",name:"scChange",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control's value changes."},complexType:{original:"void",resolved:"void",references:{}}},{method:"scInput",name:"scInput",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control's value changes."},complexType:{original:"void",resolved:"void",references:{}}},{method:"scFocus",name:"scFocus",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control gains focus."},complexType:{original:"void",resolved:"void",references:{}}},{method:"scBlur",name:"scBlur",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control loses focus."},complexType:{original:"void",resolved:"void",references:{}}}]}static get methods(){return{reportValidity:{complexType:{signature:"() => Promise<boolean>",parameters:[],references:{Promise:{location:"global",id:"global::Promise"}},return:"Promise<boolean>"},docs:{text:"",tags:[]}},triggerFocus:{complexType:{signature:"(options?: FocusOptions) => Promise<void>",parameters:[{name:"options",type:"FocusOptions",docs:""}],references:{Promise:{location:"global",id:"global::Promise"},FocusOptions:{location:"global",id:"global::FocusOptions"}},return:"Promise<void>"},docs:{text:"Sets focus on the input.",tags:[]}},setCustomValidity:{complexType:{signature:"(message: string) => Promise<void>",parameters:[{name:"message",type:"string",docs:""}],references:{Promise:{location:"global",id:"global::Promise"}},return:"Promise<void>"},docs:{text:"Sets a custom validation message. If `message` is not empty, the field will be considered invalid.",tags:[]}},triggerBlur:{complexType:{signature:"() => Promise<void>",parameters:[],references:{Promise:{location:"global",id:"global::Promise"}},return:"Promise<void>"},docs:{text:"Removes focus from the input.",tags:[]}}}}static get elementRef(){return"el"}static get watchers(){return[{propName:"hasFocus",methodName:"handleFocusChange"}]}}