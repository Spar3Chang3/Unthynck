import{i as t,u as _,r as c,h as d}from"./runtime.itU1-eAt.js";import{l as m}from"./events.Dwqh_hTn.js";function i(e,a,n=a){var u=t();m(e,"input",l=>{var r=l?e.defaultValue:e.value;if(r=v(e)?f(r):r,n(r),u&&r!==(r=a())){var o=e.selectionStart,s=e.selectionEnd;e.value=r??"",s!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(s,e.value.length))}}),(d&&e.defaultValue!==e.value||_(a)==null&&e.value)&&n(v(e)?f(e.value):e.value),c(()=>{var l=a();v(e)&&l===f(e.value)||e.type==="date"&&!l&&!e.value||l!==e.value&&(e.value=l??"")})}function v(e){var a=e.type;return a==="number"||a==="range"}function f(e){return e===""?null:+e}export{i as b};
