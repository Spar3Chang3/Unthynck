var oe=Object.defineProperty;var ue=(l,t,s)=>t in l?oe(l,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[t]=s;var S=(l,t,s)=>ue(l,typeof t!="symbol"?t+"":t,s);import"../chunks/disclose-version.Bg9kRutz.js";import{p as G,f as ve,t as de,a as J,g as e,e as r,at as c,c as a,s as o,r as n,au as ce,w as M}from"../chunks/runtime.B4SQLpdX.js";import{a as K,t as R,d as fe}from"../chunks/template.Cv82tJgS.js";import{i as me}from"../chunks/lifecycle.C3XcLQts.js";import{o as W}from"../chunks/index-client.BhmIk07o.js";import{r as pe,s as f,I as u,T as he}from"../chunks/Global.qXj1oen3.js";import{g as we,s as p}from"../chunks/Firebase.Dluiv_HF.js";import{b as ze}from"../chunks/input.BRm4Rrop.js";import{p as _}from"../chunks/proxy.0PXur3Bm.js";import{g as X,w as ye}from"../chunks/index.FgZZ6e5B.js";class _e{constructor(){S(this,"front");S(this,"rear");S(this,"size");this.front=null,this.rear=null,this.size=0}_Node(t){return{value:t,next:null}}enqueue(t){const s=this._Node(t);this.size===0?this.rear=this.front=s:(this.rear.next=s,this.rear=s)}enqueueArray(t){if(!Array.isArray(t)){console.error("function 'enqueueArray' must be passed an array as an argument");return}if(this.size===0){this.rear=this.front=this._Node(t[0]);for(let s=1;s<t.length;s++)this.enqueue(t[s])}}dequeue(){if(this.isEmpty)return null;this.size--;const t=this.front.value;return this.front=this.front.next,this.front===null&&(this.rear=null,this.size=0),t}peek(){return this.isEmpty()?null:this.front.value}isEmpty(){return this.size===0}}const be=new _e,$=ye(be),ge=()=>{const l=X($),t=l.dequeue();return $.set(l),t},Ae=()=>X($).isEmpty();function Pe(l,t,s,v){l.preventDefault(),!(!e(t)&&!e(s))&&(e(s).play(),r(v,!e(v)),e(v)?e(t).pause():e(t).play())}function Se(l,t,s){l.preventDefault(),r(t,!e(t)),s()}function Me(l,t){l.preventDefault(),r(t,!e(t))}var ke=R('<section class="cassette svelte-lewz84"><div class="cassette-body svelte-lewz84"><div class="dots svelte-lewz84"></div> <div class="dots svelte-lewz84"></div> <div class="dots svelte-lewz84"></div> <div class="dots svelte-lewz84"></div> <div class="label svelte-lewz84"><div class="label-descp svelte-lewz84"><div class="line svelte-lewz84"></div> <div class="line svelte-lewz84"></div></div> <div class="player svelte-lewz84"><div class="tape svelte-lewz84"><div class="circle svelte-lewz84" id="circle1"><div class="teeth svelte-lewz84"></div> <div class="teeth svelte-lewz84"></div> <div class="teeth svelte-lewz84"></div> <div class="teeth svelte-lewz84"></div></div> <div class="visor svelte-lewz84"><div class="left-reel reel svelte-lewz84"></div> <div class="right-reel reel svelte-lewz84"></div></div> <div class="circle svelte-lewz84" id="circle2"><div class="teeth svelte-lewz84"></div> <div class="teeth svelte-lewz84"></div> <div class="teeth svelte-lewz84"></div> <div class="teeth svelte-lewz84"></div></div></div></div> <div class="label-color svelte-lewz84"></div></div></div></section> <br class="svelte-lewz84"> <section class="media-controls svelte-lewz84"><div class="playback-control svelte-lewz84"><button class="control-button svelte-lewz84"><img class="icon svelte-lewz84" alt="playback control"></button></div> <div class="volume-control svelte-lewz84"><button class="control-button svelte-lewz84"><img class="icon svelte-lewz84" alt="volume control"></button> <input type="range" min="0" max="100" class="volume-slider svelte-lewz84"></div> <div class="shuffle-control svelte-lewz84"><button class="control-button svelte-lewz84"><img class="icon svelte-lewz84" alt="shuffle control"></button></div></section>',1);function qe(l,t){G(t,!0);const s="/audio/default.mp3",v="/audio/tape.mp3";let d=c(50),h=c(!1),w=c(!0),k=c(!1),i=c(null),z=c(null),b=c(0),m=M(()=>[{animationPlayState:`${e(w)?"paused":"running"}`,animationDuration:`${Math.round(e(b))}s`},{animationPlayState:`${e(w)?"paused":"running"}`,animationDuration:`${Math.round(e(b))}s`}]),Y=M(se),Z=M(te),ee=M(le);function te(){return e(w)?u.playerPlay:u.playerPause}function se(){if(Q(),e(h))return u.volumeMute;if(e(d)===0)return u.volumeNone;if(e(d)<=50)return u.volumeLow;if(e(d)>50)return u.volumeHigh}function le(){return e(k)?u.playerShuffleOn:u.playerShuffleOff}function Q(){e(i)&&(e(h)?e(i).volume=0:e(i).volume=e(d)/100)}function ie(){const P=ge();return we(P.trackPath,P.fileName)}W(()=>(Ae()?r(i,_(new Audio(s))):(r(i,_(new Audio)),e(i).src=ie()),r(z,_(new Audio(v))),r(b,_(Math.round(e(i).duration))),e(i).addEventListener("loadedmetadata",()=>{r(b,_(Math.round(e(i).duration)))}),()=>{e(i).stop,e(i).pause(),e(i).src="",r(i,null),e(z).pause(),e(z).src="",r(z,null)}));var L=ke(),q=ve(L),F=a(q),O=o(a(F),8),T=o(a(O),2),V=a(T),C=a(V),D=o(C,2),I=a(D),H=o(I,2);n(D);var ae=o(D,2);n(V),n(T),ce(2),n(O),n(F),n(q);var U=o(q,4),x=a(U),E=a(x);E.__click=[Pe,i,z,w];var j=a(E);n(E),n(x);var N=o(x,2),y=a(N);y.__click=[Se,h,Q];var ne=a(y);n(y);var g=o(y,2);pe(g),n(N);var B=o(N,2),A=a(B);A.__click=[Me,k];var re=a(A);n(A),n(B),n(U),de(()=>{p(C,"animation-play-state",e(m)[0].animationPlayState),p(I,"animation-duration",e(m)[0].animationDuration),p(I,"animation-play-state",e(m)[0].animationPlayState),p(H,"animation-duration",e(m)[1].animationDuration),p(H,"animation-play-state",e(m)[1].animationPlayState),p(ae,"animation-play-state",e(m)[1].animationPlayState),f(j,"src",e(Z)),f(j,"title",e(w)?"Music Paused":"Music Playing"),f(y,"title",e(h)?"Music Muted":"Music Unmuted"),f(ne,"src",e(Y)),g.disabled=e(h),f(g,"title",e(d)),f(A,"title",e(k)?"Shuffling Enabled":"Shuffling Disabled"),f(re,"src",e(ee))}),ze(g,()=>e(d),P=>r(d,P)),K(l,L),J()}fe(["click"]);var De=R('<section class="music svelte-42u6os"><!></section>');function Ce(l,t){G(t,!1),W(()=>{document.title=he.music}),me();var s=De(),v=a(s);qe(v,{}),n(s),K(l,s),J()}export{Ce as component};
