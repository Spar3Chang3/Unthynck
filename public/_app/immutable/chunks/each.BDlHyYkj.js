import{A as ee,n as ae,h as w,x as k,b as re,B as ne,C as P,H as fe,w as z,y as L,z as R,I as D,o as Q,q as W,v as le,D as ie,F,G as y,J as G,K as V,L as ue,M as se,N as J,O as te,P as ve,Q as _e,R as de,S as Z,T as oe,U as ce,V as he,W as Ee,X as pe}from"./runtime.8aERoiLu.js";let O=null;function Ce(i,e){return e}function Ae(i,e,r,s){for(var t=[],_=e.length,u=0;u<_;u++)te(e[u].e,t,!0);var o=_>0&&t.length===0&&r!==null;if(o){var A=r.parentNode;ve(A),A.append(r),s.clear(),C(i,e[0].prev,e[_-1].next)}_e(t,()=>{for(var h=0;h<_;h++){var v=e[h];o||(s.delete(v.k),C(i,v.prev,v.next)),de(v.e,!o)}})}function we(i,e,r,s,t,_=null){var u=i,o={flags:e,items:new Map,first:null},A=(e&Z)!==0;if(A){var h=i;u=w?k(oe(h)):h.appendChild(ee())}w&&re();var v=null,N=!1;ae(()=>{var n=r(),d=ne(n)?n:n==null?[]:P(n),a=d.length;if(N&&a===0)return;N=a===0;let I=!1;if(w){var E=u.data===fe;E!==(a===0)&&(u=z(),k(u),L(!1),I=!0)}if(w){for(var p=null,T,c=0;c<a;c++){if(R.nodeType===8&&R.data===ce){u=R,I=!0,L(!1);break}var f=d[c],l=s(f,c);T=$(R,o,p,null,f,l,c,t,e),o.items.set(l,T),p=T}a>0&&k(z())}if(!w){var M=he;Te(d,o,u,t,e,(M.f&D)!==0,s)}_!==null&&(a===0?v?Q(v):v=W(()=>_(u)):v!==null&&le(v,()=>{v=null})),I&&L(!0),r()}),w&&(u=R)}function Te(i,e,r,s,t,_,u){var B,U,X,Y;var o=(t&Ee)!==0,A=(t&(y|V))!==0,h=i.length,v=e.items,N=e.first,n=N,d,a=null,I,E=[],p=[],T,c,f,l;if(o)for(l=0;l<h;l+=1)T=i[l],c=u(T,l),f=v.get(c),f!==void 0&&((B=f.a)==null||B.measure(),(I??(I=new Set)).add(f));for(l=0;l<h;l+=1){if(T=i[l],c=u(T,l),f=v.get(c),f===void 0){var M=n?n.e.nodes_start:r;a=$(M,e,a,a===null?e.first:a.next,T,c,l,s,t),v.set(c,a),E=[],p=[],n=a.next;continue}if(A&&Ie(f,T,l,t),f.e.f&D&&(Q(f.e),o&&((U=f.a)==null||U.unfix(),(I??(I=new Set)).delete(f))),f!==n){if(d!==void 0&&d.has(f)){if(E.length<p.length){var S=p[0],x;a=S.prev;var q=E[0],g=E[E.length-1];for(x=0;x<E.length;x+=1)K(E[x],S,r);for(x=0;x<p.length;x+=1)d.delete(p[x]);C(e,q.prev,g.next),C(e,a,q),C(e,g,S),n=S,a=g,l-=1,E=[],p=[]}else d.delete(f),K(f,n,r),C(e,f.prev,f.next),C(e,f,a===null?e.first:a.next),C(e,a,f),a=f;continue}for(E=[],p=[];n!==null&&n.k!==c;)(_||!(n.e.f&D))&&(d??(d=new Set)).add(n),p.push(n),n=n.next;if(n===null)continue;f=n}E.push(f),a=f,n=f.next}if(n!==null||d!==void 0){for(var H=d===void 0?[]:P(d);n!==null;)(_||!(n.e.f&D))&&H.push(n),n=n.next;var b=H.length;if(b>0){var j=t&Z&&h===0?r:null;if(o){for(l=0;l<b;l+=1)(X=H[l].a)==null||X.measure();for(l=0;l<b;l+=1)(Y=H[l].a)==null||Y.fix()}Ae(e,H,j,v)}}o&&ie(()=>{var m;if(I!==void 0)for(f of I)(m=f.a)==null||m.apply()}),F.first=e.first&&e.first.e,F.last=a&&a.e}function Ie(i,e,r,s){s&y&&G(i.v,e),s&V?G(i.i,r):i.i=r}function $(i,e,r,s,t,_,u,o,A){var h=O;try{var v=(A&y)!==0,N=(A&ue)===0,n=v?N?se(t):J(t):t,d=A&V?J(u):u,a={i:d,v:n,k:_,a:null,e:null,prev:r,next:s};return O=a,a.e=W(()=>o(i,n,d),w),a.e.prev=r&&r.e,a.e.next=s&&s.e,r===null?e.first=a:(r.next=a,r.e.next=a.e),s!==null&&(s.prev=a,s.e.prev=a.e),a}finally{O=h}}function K(i,e,r){for(var s=i.next?i.next.e.nodes_start:r,t=e?e.e.nodes_start:r,_=i.e.nodes_start;_!==s;){var u=pe(_);t.before(_),_=u}}function C(i,e,r){e===null?i.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}export{we as e,Ce as i};
