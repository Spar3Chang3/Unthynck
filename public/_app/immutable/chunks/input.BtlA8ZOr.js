import{at as f,aa as l,h as o}from"./runtime.lwYzDcGd.js";import{a as s}from"./attributes.DX39N_JJ.js";function t(e,a,_,v=_){e.addEventListener(a,_);const r=e.__on_r;r?e.__on_r=()=>{r(),v()}:e.__on_r=v,s()}function c(e,a,_=a){var v=f();t(e,"input",()=>{var r=n(e)?u(e.value):e.value;_(r),v&&r!==(r=a())&&(e.value=r??"")}),l(()=>{var r=a();if(o&&e.defaultValue!==e.value){_(e.value);return}n(e)&&r===u(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function n(e){var a=e.type;return a==="number"||a==="range"}function u(e){return e===""?null:+e}export{c as b,t as l};
