import{L as c,l as t,h as d,m as v,n as h}from"./runtime.itU1-eAt.js";import{a as n}from"./events.Dwqh_hTn.js";function u(r){if(d){var s=!1,o=()=>{if(!s){if(s=!0,r.hasAttribute("value")){var e=r.value;f(r,"value",null),r.value=e}if(r.hasAttribute("checked")){var _=r.checked;f(r,"checked",null),r.checked=_}}};r.__on_r=o,h(o),n()}}function f(r,s,o,e){var _=r.__attributes??(r.__attributes={});d&&(_[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||_[s]!==(_[s]=o)&&(s==="style"&&"__styles"in r&&(r.__styles={}),s==="loading"&&(r[c]=o),o==null?r.removeAttribute(s):typeof o!="string"&&g(r).includes(s)?r[s]=o:r.setAttribute(s,o))}var i=new Map;function g(r){var s=i.get(r.nodeName);if(s)return s;i.set(r.nodeName,s=[]);for(var o,e=r,_=Element.prototype;_!==e;){o=v(e);for(var a in o)o[a].set&&s.push(a);e=t(e)}return s}export{u as r,f as s};
