import{a5 as N,a6 as Y,e as R,y as m,T as y,Y as M,a7 as U,a8 as o,a9 as x,aa as z,g as d,X as $,ab as j,ac as G,ad as p,ae as H,af as V,ag as X,j as q,ah as Z,F as J,z as B,ai as K}from"./runtime.Cp1fv9q6.js";import{p as Q}from"./proxy.DCSCrVS7.js";import{c as W}from"./store.z1_eNC_8.js";function D(a,r){return a===r||(a==null?void 0:a[y])===r}function ea(a={},r,i,v){return N(()=>{var s,f;return Y(()=>{s=f,f=[],R(()=>{a!==i(...f)&&(r(a,...f),s&&D(i(...s),a)&&r(null,...s))})}),()=>{m(()=>{f&&D(i(...f),a)&&r(null,...f)})}}),a}function F(a){for(var r=B,i=B;r!==null&&!(r.f&(j|G));)r=r.parent;try{return p(r),a()}finally{p(i)}}function fa(a,r,i,v){var L;var s=(i&H)!==0,f=(i&V)!==0,O=(i&X)!==0,w=(i&K)!==0,T=!1,u;O?[u,T]=W(()=>a[r]):u=a[r];var l=(L=M(a,r))==null?void 0:L.set,t=v,P=!0,S=!1,A=()=>(S=!0,P&&(P=!1,w?t=R(v):t=v),t);u===void 0&&v!==void 0&&(l&&f&&U(),u=A(),l&&l(u));var n;if(f)n=()=>{var e=a[r];return e===void 0?A():(P=!0,S=!1,e)};else{var b=F(()=>(s?q:Z)(()=>a[r]));b.f|=o,n=()=>{var e=d(b);return e!==void 0&&(t=void 0),e===void 0?t:e}}if(!(i&x))return n;if(l){var C=a.$$legacy;return function(e,_){return arguments.length>0?((!f||!_||C||T)&&l(_?n():e),e):n()}}var E=!1,g=!1,h=J(u),c=F(()=>q(()=>{var e=n(),_=d(h);return E?(E=!1,g=!0,_):(g=!1,h.v=e)}));return s||(c.equals=z),function(e,_){if(arguments.length>0){const I=_?d(c):f&&O?Q(e):e;return c.equals(I)||(E=!0,$(h,I),S&&t!==void 0&&(t=I),R(()=>d(c))),e}return d(c)}}export{ea as b,fa as p};