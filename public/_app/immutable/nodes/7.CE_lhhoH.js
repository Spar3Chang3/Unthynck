var ve=Object.defineProperty;var de=(l,t,s)=>t in l?ve(l,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[t]=s;var S=(l,t,s)=>de(l,typeof t!="symbol"?t+"":t,s);import"../chunks/disclose-version.Bg9kRutz.js";import{p as G,f as ce,t as fe,a as J,g as e,e as o,at as c,c as a,s as r,r as n,au as me,w as I}from"../chunks/runtime.B4SQLpdX.js";import{a as K,t as R,d as pe}from"../chunks/template.Cv82tJgS.js";import{i as he}from"../chunks/lifecycle.C3XcLQts.js";import{o as W}from"../chunks/index-client.BhmIk07o.js";import{r as we,s as f,I as u,T as ze}from"../chunks/Global.qXj1oen3.js";import{g as ye,s as h}from"../chunks/Firebase.Dluiv_HF.js";import{b as _e}from"../chunks/input.BRm4Rrop.js";import{p as b}from"../chunks/proxy.0PXur3Bm.js";import{g as X,w as be}from"../chunks/index.FgZZ6e5B.js";class ge{constructor(){S(this,"front");S(this,"rear");S(this,"size");this.front=null,this.rear=null,this.size=0}_Node(t){return{value:t,next:null}}enqueue(t){const s=this._Node(t);this.size===0?this.rear=this.front=s:(this.rear.next=s,this.rear=s)}enqueueArray(t){if(!Array.isArray(t)){console.error("function 'enqueueArray' must be passed an array as an argument");return}if(this.size===0){this.rear=this.front=this._Node(t[0]);for(let s=1;s<t.length;s++)this.enqueue(t[s])}}dequeue(){if(this.isEmpty)return null;this.size--;const t=this.front.value;return this.front=this.front.next,this.front===null&&(this.rear=null,this.size=0),t}peek(){return this.isEmpty()?null:this.front.value}isEmpty(){return this.size===0}}const Ae=new ge,N=be(Ae),Pe=()=>{const l=X(N),t=l.dequeue();return N.set(l),t},Se=()=>X(N).isEmpty();function Ie(l,t,s,v){l.preventDefault(),!(!e(t)&&!e(s))&&(e(s).play(),o(v,!e(v)),e(v)?e(t).pause():e(t).play())}function Me(l,t,s){l.preventDefault(),o(t,!e(t)),s()}function xe(l,t){l.preventDefault(),o(t,!e(t))}var ke=R('<section class="cassette svelte-lewz84"><div class="cassette-body svelte-lewz84"><div class="dots svelte-lewz84"></div> <div class="dots svelte-lewz84"></div> <div class="dots svelte-lewz84"></div> <div class="dots svelte-lewz84"></div> <div class="label svelte-lewz84"><div class="label-descp svelte-lewz84"><div class="line svelte-lewz84"></div> <div class="line svelte-lewz84"></div></div> <div class="player svelte-lewz84"><div class="tape svelte-lewz84"><div class="circle svelte-lewz84" id="circle1"><div class="teeth svelte-lewz84"></div> <div class="teeth svelte-lewz84"></div> <div class="teeth svelte-lewz84"></div> <div class="teeth svelte-lewz84"></div></div> <div class="visor svelte-lewz84"><div class="left-reel reel svelte-lewz84"></div> <div class="right-reel reel svelte-lewz84"></div></div> <div class="circle svelte-lewz84" id="circle2"><div class="teeth svelte-lewz84"></div> <div class="teeth svelte-lewz84"></div> <div class="teeth svelte-lewz84"></div> <div class="teeth svelte-lewz84"></div></div></div></div> <div class="label-color svelte-lewz84"></div></div></div></section> <br class="svelte-lewz84"> <section class="media-controls svelte-lewz84"><div class="playback-control svelte-lewz84"><button class="control-button svelte-lewz84"><img class="icon svelte-lewz84" alt="playback control"></button></div> <div class="volume-control svelte-lewz84"><button class="control-button svelte-lewz84"><img class="icon svelte-lewz84" alt="volume control"></button> <input type="range" min="0" max="100" class="volume-slider svelte-lewz84"></div> <div class="shuffle-control svelte-lewz84"><button class="control-button svelte-lewz84"><img class="icon svelte-lewz84" alt="shuffle control"></button></div></section>',1);function qe(l,t){G(t,!0);const s="/audio/default.mp3",v="/audio/tape.mp3";let d=c(50),w=c(!1),z=c(!0),M=c(!1),i=c(null),y=c(null),g=c(0),m=I(()=>[{animationPlayState:`${e(z)?"paused":"running"}`,animationDuration:`${Math.round(e(g))}s`},{animationPlayState:`${e(z)?"paused":"running"}`,animationDuration:`${Math.round(e(g))}s`}]),Y=I(se),Z=I(te),ee=I(le);function te(){return e(z)?u.playerPlay:u.playerPause}function se(){if(O(),e(w))return u.volumeMute;if(e(d)===0)return u.volumeNone;if(e(d)<=50)return u.volumeLow;if(e(d)>50)return u.volumeHigh}function le(){return e(M)?u.playerShuffleOn:u.playerShuffleOff}function O(){e(i)&&(e(w)?e(i).volume=0:e(i).volume=e(d)/100)}function ie(){const p=Pe(),re=p.slice(0,p.lastIndexOf("/")),ue=p.slice(p.lastIndexOf("/")+1);return ye(re,ue)}W(()=>(Se()?o(i,b(new Audio(s))):(o(i,b(new Audio)),e(i).src=ie()),o(y,b(new Audio(v))),o(g,b(Math.round(e(i).duration))),e(i).addEventListener("loadedmetadata",()=>{o(g,b(Math.round(e(i).duration)))}),()=>{e(i).stop,e(i).pause(),e(i).src="",o(i,null),e(y).pause(),e(y).src="",o(y,null)}));var Q=ke(),x=ce(Q),L=a(x),F=r(a(L),8),T=r(a(F),2),V=a(T),C=a(V),k=r(C,2),q=a(k),H=r(q,2);n(k);var ae=r(k,2);n(V),n(T),me(2),n(F),n(L),n(x);var U=r(x,4),D=a(U),E=a(D);E.__click=[Ie,i,y,z];var j=a(E);n(E),n(D);var $=r(D,2),_=a($);_.__click=[Me,w,O];var ne=a(_);n(_);var A=r(_,2);we(A),n($);var B=r($,2),P=a(B);P.__click=[xe,M];var oe=a(P);n(P),n(B),n(U),fe(()=>{h(C,"animation-play-state",e(m)[0].animationPlayState),h(q,"animation-duration",e(m)[0].animationDuration),h(q,"animation-play-state",e(m)[0].animationPlayState),h(H,"animation-duration",e(m)[1].animationDuration),h(H,"animation-play-state",e(m)[1].animationPlayState),h(ae,"animation-play-state",e(m)[1].animationPlayState),f(j,"src",e(Z)),f(j,"title",e(z)?"Music Paused":"Music Playing"),f(_,"title",e(w)?"Music Muted":"Music Unmuted"),f(ne,"src",e(Y)),A.disabled=e(w),f(A,"title",e(d)),f(P,"title",e(M)?"Shuffling Enabled":"Shuffling Disabled"),f(oe,"src",e(ee))}),_e(A,()=>e(d),p=>o(d,p)),K(l,Q),J()}pe(["click"]);var De=R('<section class="music svelte-42u6os"><!></section>');function Ue(l,t){G(t,!1),W(()=>{document.title=ze.music}),he();var s=De(),v=a(s);qe(v,{}),n(s),K(l,s),J()}export{Ue as component};