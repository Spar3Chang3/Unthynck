import{am as m,T as S,an as D,X as I,ao as g,y as h,x as R,b as L,z as u,U as O,ap as V,aq as C,P as H,C as Y,ar as q,A as M,q as P,p as $,h as E,F as j,a as k,e as z}from"./runtime.8aERoiLu.js";import{b as F,r as A,h as y,c as U}from"./template.tWMG4ekI.js";const W=["touchstart","touchmove"];function X(t){return W.includes(t)}function K(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function B(t,e){return N(t,e)}function Q(t,e){m(),e.intro=e.intro??!1;const n=e.target,_=E,l=u;try{for(var a=S(n);a&&(a.nodeType!==8||a.data!==D);)a=I(a);if(!a)throw g;h(!0),R(a),L();const i=N(t,{...e,anchor:a});if(u===null||u.nodeType!==8||u.data!==O)throw V(),g;return h(!1),i}catch(i){if(i===g)return e.recover===!1&&C(),m(),H(n),h(!1),B(t,e);throw i}finally{h(_),R(l)}}const d=new Map;function N(t,{target:e,anchor:n,props:_={},events:l,context:a,intro:i=!0}){m();var v=new Set,p=o=>{for(var r=0;r<o.length;r++){var s=o[r];if(!v.has(s)){v.add(s);var f=X(s);e.addEventListener(s,y,{passive:f});var w=d.get(s);w===void 0?(document.addEventListener(s,y,{passive:f}),d.set(s,1)):d.set(s,w+1)}}};p(Y(F)),A.add(p);var c=void 0,b=q(()=>{var o=n??e.appendChild(M());return P(()=>{if(a){$({});var r=z;r.c=a}l&&(_.$$events=l),E&&U(o,null),c=t(o,_)||{},E&&(j.nodes_end=u),a&&k()}),()=>{var f;for(var r of v){e.removeEventListener(r,y);var s=d.get(r);--s===0?(document.removeEventListener(r,y),d.delete(r)):d.set(r,s)}A.delete(p),T.delete(c),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return T.set(c,b),c}let T=new WeakMap;function Z(t){const e=T.get(t);e&&e()}export{Q as h,B as m,K as s,Z as u};
