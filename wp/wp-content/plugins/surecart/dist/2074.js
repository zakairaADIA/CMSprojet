"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[2074],{4805:function(e,t,n){n.d(t,{a:function(){return f},b:function(){return l},g:function(){return d}});var r=n(4467),o=n(296);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var _n=0,r=function(){};return{s:r,n:function(){return _n>=e.length?{done:!0}:{done:!1,value:e[_n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function l(e){for(var t,n="",r=Object.entries(e);t=r.shift();){var i=t,a=(0,o.A)(i,2),c=a[0],l=a[1];if(Array.isArray(l)||l&&l.constructor===Object){var u,d=s(Object.entries(l).reverse());try{for(d.s();!(u=d.n()).done;){var f=(0,o.A)(u.value,2),h=f[0],v=f[1];r.unshift(["".concat(c,"[").concat(h,"]"),v])}}catch(e){d.e(e)}finally{d.f()}}else void 0!==l&&(null===l&&(l=""),n+="&"+[c,l].map(encodeURIComponent).join("="))}return n.substr(1)}function u(e){try{return decodeURIComponent(e)}catch(t){return e}}function d(e){return(function(e){var t;try{t=new URL(e,"http://example.com").search.substring(1)}catch(e){}if(t)return t}(e)||"").replace(/\+/g,"%20").split("&").reduce((function(e,t){var n=t.split("=").filter(Boolean).map(u),r=(0,o.A)(n,2),i=r[0],s=r[1],c=void 0===s?"":s;return i&&function(e,t,n){for(var r=t.length,o=r-1,i=0;i<r;i++){var s=t[i];!s&&Array.isArray(e)&&(s=e.length.toString()),s=["__proto__","constructor","prototype"].includes(s)?s.toUpperCase():s;var c=!isNaN(Number(t[i+1]));e[s]=i===o?n:e[s]||(c?[]:{}),Array.isArray(e[s])&&!c&&(e[s]=a({},e[s])),e=e[s]}}(e,i.replace(/\]/g,"").split("["),c),e}),Object.create(null))}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(!t||!Object.keys(t).length)return e;var n=e,r=e.indexOf("?");return-1!==r&&(t=Object.assign(d(e),t),n=n.substr(0,r)),n+"?"+l(t)}},2074:function(e,t,n){n.r(t),n.d(t,{sc_purchase_downloads_list:function(){return s}});var r=n(3029),o=n(2901),i=n(1346),a=n(4805),s=function(){return(0,o.A)((function e(t){(0,r.A)(this,e),(0,i.r)(this,t),this.allLink=void 0,this.heading=void 0,this.busy=void 0,this.loading=void 0,this.requestNonce=void 0,this.error=void 0,this.purchases=[]}),[{key:"renderEmpty",value:function(){return(0,i.h)("div",null,(0,i.h)("sc-divider",{style:{"--spacing":"0"}}),(0,i.h)("slot",{name:"empty"},(0,i.h)("sc-empty",{icon:"download"},wp.i18n.__("You don't have any downloads.","surecart"))))}},{key:"renderLoading",value:function(){return(0,i.h)("sc-card",{"no-padding":!0,style:{"--overflow":"hidden"}},(0,i.h)("sc-stacked-list",null,(0,i.h)("sc-stacked-list-row",{style:{"--columns":"2"},"mobile-size":0},(0,i.h)("div",{style:{padding:"0.5em"}},(0,i.h)("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),(0,i.h)("sc-skeleton",{style:{width:"20%"}})))))}},{key:"renderList",value:function(){var e=this;return this.purchases.map((function(t){var n,r,o,s=null===(r=null===(n=null==t?void 0:t.product)||void 0===n?void 0:n.downloads)||void 0===r?void 0:r.data.filter((function(e){return!e.archived})),c=(s||[]).map((function(e){var t;return(null==e?void 0:e.media)?null===(t=null==e?void 0:e.media)||void 0===t?void 0:t.byte_size:0})),l=c.reduce((function(e,t){return e+t}),0);return(0,i.h)("sc-stacked-list-row",{href:(null==t?void 0:t.revoked)?null:(0,a.a)(window.location.href,{action:"show",model:"download",id:t.id,nonce:e.requestNonce}),key:t.id,"mobile-size":0},(0,i.h)("sc-spacing",{style:{"--spacing":"var(--sc-spacing-xx--small)"}},(0,i.h)("div",null,(0,i.h)("strong",null,null===(o=null==t?void 0:t.product)||void 0===o?void 0:o.name)),(0,i.h)("div",{class:"download__details"},wp.i18n.sprintf(wp.i18n._n("%s file","%s files",null==s?void 0:s.length,"surecart"),null==s?void 0:s.length),!!l&&(0,i.h)(i.F,null," ","• ",(0,i.h)("sc-format-bytes",{value:l})))),(0,i.h)("sc-icon",{name:"chevron-right",slot:"suffix"}))}))}},{key:"renderContent",value:function(){var e;return this.loading?this.renderLoading():0===(null===(e=this.purchases)||void 0===e?void 0:e.length)?this.renderEmpty():(0,i.h)("sc-card",{"no-padding":!0,style:{"--overflow":"hidden"}},(0,i.h)("sc-stacked-list",null,this.renderList()))}},{key:"render",value:function(){return(0,i.h)("sc-dashboard-module",{key:"5ccf0a38a0bc8b065d0ff56eaaf3a9717e793f43",class:"downloads-list",error:this.error},(0,i.h)("span",{key:"57110086a52d06895a05c445f4ad5824aea9f0af",slot:"heading"},(0,i.h)("slot",{key:"1d2c5639a5966b8a03dad99855ad2879a7047036",name:"heading"},this.heading||wp.i18n.__("Items","surecart"))),(0,i.h)("slot",{key:"8c988bfc8038d2a71af97aa30f790799d2b7aeda",name:"before"}),!!this.allLink&&(0,i.h)("sc-button",{key:"c49361ab9aa83d123c5185dc3249f04ebe00aa0c",type:"link",href:this.allLink,slot:"end"},wp.i18n.__("View all","surecart"),(0,i.h)("sc-icon",{key:"e6b38f6630fab8f33c1aa2d98da294a4110d22ae",name:"chevron-right",slot:"suffix"})),this.renderContent(),(0,i.h)("slot",{key:"e2a8442ebe848fb3cc9edf0647358781dce7d617",name:"after"}),this.busy&&(0,i.h)("sc-block-ui",{key:"a5d7e2413662795dceae785db3473de988bdc94e"}))}},{key:"el",get:function(){return(0,i.a)(this)}}])}();s.style=":host{display:block}.download__details{opacity:0.75}"}}]);