import{h as o,O as d,K as v,au as l,$ as f,av as u,aw as h}from"./runtime.lwYzDcGd.js";function A(r){o&&d(r)!==null&&v(r)}let i=!1;function g(){i||(i=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var e;if(!r.defaultPrevented)for(const s of r.target.elements)(e=s.__on_r)==null||e.call(s)})},{capture:!0}))}function k(r){if(o){var e=!1,s=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var t=r.value;c(r,"value",null),r.value=t}if(r.hasAttribute("checked")){var a=r.checked;c(r,"checked",null),r.checked=a}}};r.__on_r=s,h(s),g()}}function c(r,e,s,t){var a=r.__attributes??(r.__attributes={});o&&(a[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||a[e]!==(a[e]=s)&&(e==="style"&&"__styles"in r&&(r.__styles={}),e==="loading"&&(r[l]=s),s==null?r.removeAttribute(e):typeof s!="string"&&p(r).includes(e)?r[e]=s:r.setAttribute(e,s))}var n=new Map;function p(r){var e=n.get(r.nodeName);if(e)return e;n.set(r.nodeName,e=[]);for(var s,t=f(r),a=Element.prototype;a!==t;){s=u(t);for(var _ in s)s[_].set&&e.push(_);t=f(t)}return e}export{g as a,A as b,k as r,c as s};
