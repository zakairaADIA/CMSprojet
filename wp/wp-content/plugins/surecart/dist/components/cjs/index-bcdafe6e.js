"use strict";const index=require("./index-8acc3c89.js"),appendToMap=(e,t,r)=>{const n=e.get(t);n?n.includes(r)||n.push(r):e.set(t,[r])},debounce=(e,t)=>{let r;return(...n)=>{r&&clearTimeout(r),r=setTimeout((()=>{r=0,e(...n)}),t)}},isConnected=e=>!("isConnected"in e)||e.isConnected,cleanupElements=debounce((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(isConnected))}),2e3),stencilSubscription=()=>{if("function"!=typeof index.getRenderingRef)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const r=index.getRenderingRef();r&&appendToMap(e,t,r)},set:t=>{const r=e.get(t);r&&e.set(t,r.filter(index.forceUpdate)),cleanupElements(e)},reset:()=>{e.forEach((e=>e.forEach(index.forceUpdate))),cleanupElements(e)}}},unwrap=e=>"function"==typeof e?e():e,createObservableMap=(e,t=((e,t)=>e!==t))=>{const r=unwrap(e);let n=new Map(Object.entries(null!=r?r:{}));const s={dispose:[],get:[],set:[],reset:[]},o=()=>{var t;n=new Map(Object.entries(null!==(t=unwrap(e))&&void 0!==t?t:{})),s.reset.forEach((e=>e()))},c=e=>(s.get.forEach((t=>t(e))),n.get(e)),a=(e,r)=>{const o=n.get(e);t(r,o,e)&&(n.set(e,r),s.set.forEach((t=>t(e,r,o))))},u="undefined"==typeof Proxy?{}:new Proxy(r,{get(e,t){return c(t)},ownKeys(e){return Array.from(n.keys())},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},has(e,t){return n.has(t)},set(e,t,r){return a(t,r),!0}}),i=(e,t)=>(s[e].push(t),()=>{removeFromArray(s[e],t)});return{state:u,get:c,set:a,on:i,onChange:(t,r)=>{const n=i("set",((e,n)=>{e===t&&r(n)})),s=i("reset",(()=>r(unwrap(e)[t])));return()=>{n(),s()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(i("set",t.set)),t.get&&e.push(i("get",t.get)),t.reset&&e.push(i("reset",t.reset)),t.dispose&&e.push(i("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{s.dispose.forEach((e=>e())),o()},reset:o,forceUpdate:e=>{const t=n.get(e);s.set.forEach((r=>r(e,t,t)))}}},removeFromArray=(e,t)=>{const r=e.indexOf(t);r>=0&&(e[r]=e[e.length-1],e.length--)},createStore=(e,t)=>{const r=createObservableMap(e,t);return r.use(stencilSubscription()),r};exports.createStore=createStore;