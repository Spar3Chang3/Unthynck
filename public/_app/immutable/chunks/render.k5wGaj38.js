import{an as m,ab as D,ao as O,af as S,ap as g,X as h,W as R,d as H,Y as u,ac as I,aq as L,ar as V,a7 as Y,$,as as C,Z as M,O as W,p as j,h as E,D as k,a as q,H as P}from"./runtime.D5Mm-hzT.js";import{b as X,r as N,h as v,c as Z}from"./template.xCgAhjl1.js";const z=["touchstart","touchmove"];function B(t){return z.includes(t)}function K(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function F(t,e){return b(t,e)}function Q(t,e){m(),e.intro=e.intro??!1;const n=e.target,_=E,l=u;try{for(var a=D(n);a&&(a.nodeType!==8||a.data!==O);)a=S(a);if(!a)throw g;h(!0),R(a),H();const i=b(t,{...e,anchor:a});if(u===null||u.nodeType!==8||u.data!==I)throw L(),g;return h(!1),i}catch(i){if(i===g)return e.recover===!1&&V(),m(),Y(n),h(!1),F(t,e);throw i}finally{h(_),R(l)}}const d=new Map;function b(t,{target:e,anchor:n,props:_={},events:l,context:a,intro:i=!0}){m();var y=new Set,p=o=>{for(var r=0;r<o.length;r++){var s=o[r];if(!y.has(s)){y.add(s);var f=B(s);e.addEventListener(s,v,{passive:f});var T=d.get(s);T===void 0?(document.addEventListener(s,v,{passive:f}),d.set(s,1)):d.set(s,T+1)}}};p($(X)),N.add(p);var c=void 0,A=C(()=>{var o=n??e.appendChild(M());return W(()=>{if(a){j({});var r=P;r.c=a}l&&(_.$$events=l),E&&Z(o,null),c=t(o,_)||{},E&&(k.nodes_end=u),a&&q()}),()=>{var f;for(var r of y){e.removeEventListener(r,v);var s=d.get(r);--s===0?(document.removeEventListener(r,v),d.delete(r)):d.set(r,s)}N.delete(p),w.delete(c),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return w.set(c,A),c}let w=new WeakMap;function U(t){const e=w.get(t);e&&e()}export{Q as h,F as m,K as s,U as u};
