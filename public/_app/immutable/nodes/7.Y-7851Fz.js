import"../chunks/disclose-version.Bg9kRutz.js";import{p as O,s as p,f as G,t as J,a as T,a0 as w,j as e,as as m,c as i,r as a,m as S}from"../chunks/runtime.8aERoiLu.js";import{a as V,t as j,d as K}from"../chunks/template.tWMG4ekI.js";import{i as Q}from"../chunks/lifecycle.BfzA1LnJ.js";import{o as C}from"../chunks/index-client.8_MlTCsB.js";import{r as R,s as n,I as l,T as W}from"../chunks/Global.Dx0hi3i_.js";import{b as X}from"../chunks/input.C278g3Xx.js";function Y(v,s,o){v.preventDefault(),w(s,!e(s)),o()}function Z(v,s){v.preventDefault(),w(s,!e(s))}var ee=j('<section class="cassette svelte-wyeyi5"><div class="cassette-body svelte-wyeyi5"><div class="dots svelte-wyeyi5"></div> <div class="dots svelte-wyeyi5"></div> <div class="dots svelte-wyeyi5"></div> <div class="dots svelte-wyeyi5"></div> <div class="label svelte-wyeyi5"><div class="label-descp svelte-wyeyi5"><div class="line svelte-wyeyi5"></div> <div class="line svelte-wyeyi5"></div></div> <div class="player svelte-wyeyi5"><div class="tape svelte-wyeyi5"><div class="circle svelte-wyeyi5" id="circle1"><div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div></div> <div class="visor svelte-wyeyi5"><div class="left-reel reel svelte-wyeyi5"></div> <div class="right-reel reel svelte-wyeyi5"></div></div> <div class="circle svelte-wyeyi5" id="circle2"><div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div></div></div></div> <div class="label-color svelte-wyeyi5"></div></div></div></section> <br class="svelte-wyeyi5"> <section class="media-controls svelte-wyeyi5"><div class="playback-control svelte-wyeyi5"><button class="control-button svelte-wyeyi5"><img class="icon svelte-wyeyi5" alt="playback control"></button></div> <div class="volume-control svelte-wyeyi5"><button class="control-button svelte-wyeyi5"><img class="icon svelte-wyeyi5" alt="volume control"></button> <input type="range" min="0" max="100" class="volume-slider svelte-wyeyi5"></div> <div class="shuffle-control svelte-wyeyi5"><button class="control-button svelte-wyeyi5"><img class="icon svelte-wyeyi5" alt="shuffle control"></button></div></section>',1);function te(v,s){O(s,!0);const o="/audio/default.mp3",b="/audio/tape.mp3";let c=m(50),r=m(!1),d=m(!0),h=m(!1),t=null,_=null,E=S($),H=S(U),N=S(q);function U(){return e(d)?l.playerPlay:l.playerPause}function $(){if(P(),e(r))return l.volumeMute;if(e(c)===0)return l.volumeNone;if(e(c)<=50)return l.volumeLow;if(e(c)>50)return l.volumeHigh}function q(){return e(h)?l.playerShuffleOn:l.playerShuffleOff}function z(M){M.preventDefault(),!(!t&&!_)&&(_.play(),w(d,!e(d)),e(d)?t.pause():t.play())}function P(){t&&(e(r)?t.volume=0:t.volume=e(c)/100)}C(()=>(t=new Audio(o),_=new Audio(b),()=>{t.stop,t.pause(),t.src="",t=null}));var A=ee(),D=p(G(A),4),g=i(D),k=i(g);k.__click=z;var x=i(k);a(k),a(g);var I=p(g,2),u=i(I);u.__click=[Y,r,P];var B=i(u);a(u);var y=p(u,2);R(y),a(I);var L=p(I,2),f=i(L);f.__click=[Z,h];var F=i(f);a(f),a(L),a(D),J(()=>{n(x,"src",e(H)),n(x,"title",e(d)?"Music Paused":"Music Playing"),n(u,"title",e(r)?"Music Muted":"Music Unmuted"),n(B,"src",e(E)),y.disabled=e(r),n(y,"title",e(c)),n(f,"title",e(h)?"Shuffling Enabled":"Shuffling Disabled"),n(F,"src",e(N))}),X(y,()=>e(c),M=>w(c,M)),V(v,A),T()}K(["click"]);var se=j('<section class="music svelte-42u6os"><!></section>');function re(v,s){O(s,!1),C(()=>{document.title=W.music}),Q();var o=se(),b=i(o);te(b,{}),a(o),V(v,o),T()}export{re as component};
