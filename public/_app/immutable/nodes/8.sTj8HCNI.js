import"../chunks/disclose-version.Bg9kRutz.js";import{p as L,s as p,f as F,t as G,a as O,T as w,W as e,av as m,c as l,r as i,a4 as S}from"../chunks/runtime.b1WfW1_i.js";import{a as V,t as C,d as J}from"../chunks/template.MTczrOfA.js";import{i as K}from"../chunks/lifecycle.BQOhzoWn.js";import{o as E}from"../chunks/index-client.IZMx1DiG.js";import{r as Q,s as n}from"../chunks/attributes.Q33ISrhl.js";import{b as R}from"../chunks/input.BmHTm4GM.js";import{I as s,T as X}from"../chunks/Global.YDv5xU0l.js";function Y(a,t,v){a.preventDefault(),w(t,!e(t)),v()}function Z(a,t){a.preventDefault(),w(t,!e(t))}var ee=C('<section class="cassette svelte-wyeyi5"><div class="cassette-body svelte-wyeyi5"><div class="dots svelte-wyeyi5"></div> <div class="dots svelte-wyeyi5"></div> <div class="dots svelte-wyeyi5"></div> <div class="dots svelte-wyeyi5"></div> <div class="label svelte-wyeyi5"><div class="label-descp svelte-wyeyi5"><div class="line svelte-wyeyi5"></div> <div class="line svelte-wyeyi5"></div></div> <div class="player svelte-wyeyi5"><div class="tape svelte-wyeyi5"><div class="circle svelte-wyeyi5" id="circle1"><div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div></div> <div class="visor svelte-wyeyi5"><div class="left-reel reel svelte-wyeyi5"></div> <div class="right-reel reel svelte-wyeyi5"></div></div> <div class="circle svelte-wyeyi5" id="circle2"><div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div></div></div></div> <div class="label-color svelte-wyeyi5"></div></div></div></section> <br class="svelte-wyeyi5"> <section class="media-controls svelte-wyeyi5"><div class="playback-control svelte-wyeyi5"><button class="control-button svelte-wyeyi5"><img class="icon svelte-wyeyi5" alt="playback control"></button></div> <div class="volume-control svelte-wyeyi5"><button class="control-button svelte-wyeyi5"><img class="icon svelte-wyeyi5" alt="volume control"></button> <input type="range" min="0" max="100" class="volume-slider svelte-wyeyi5"></div> <div class="shuffle-control svelte-wyeyi5"><button class="control-button svelte-wyeyi5"><img class="icon svelte-wyeyi5" alt="shuffle control"></button></div></section>',1);function te(a,t){L(t,!0);const v="/audio/default.mp3",b="/audio/tape.mp3";let o=m(50),r=m(!1),d=m(!0),h=m(!1),c=null,_=null,H=S($),N=S(W),U=S(j);function W(){return e(d)?s.playerPlay:s.playerPause}function $(){if(P(),e(r))return s.volumeMute;if(e(o)===0)return s.volumeNone;if(e(o)<=50)return s.volumeLow;if(e(o)>50)return s.volumeHigh}function j(){return e(h)?s.playerShuffleOn:s.playerShuffleOff}function q(M){M.preventDefault(),!(!c&&!_)&&(_.play(),w(d,!e(d)),e(d)?c.pause():c.play())}function P(){c&&(e(r)?c.volume=0:c.volume=e(o)/100)}E(()=>{c=new Audio(v),_=new Audio(b)});var A=ee(),D=p(F(A),4),g=l(D),k=l(g);k.__click=q;var x=l(k);i(k),i(g);var I=p(g,2),y=l(I);y.__click=[Y,r,P];var z=l(y);i(y);var u=p(y,2);Q(u),i(I);var T=p(I,2),f=l(T);f.__click=[Z,h];var B=l(f);i(f),i(T),i(D),G(()=>{n(x,"src",e(N)),n(x,"title",e(d)?"Music Paused":"Music Playing"),n(y,"title",e(r)?"Music Muted":"Music Unmuted"),n(z,"src",e(H)),u.disabled=e(r),n(u,"title",e(o)),n(f,"title",e(h)?"Shuffling Enabled":"Shuffling Disabled"),n(B,"src",e(U))}),R(u,()=>e(o),M=>w(o,M)),V(a,A),O()}J(["click"]);var se=C('<section class="music svelte-1vfclpl"><!></section>');function de(a,t){L(t,!1),E(()=>{document.title=X.music}),K();var v=se(),b=l(v);te(b,{}),i(v),V(a,v),O()}export{de as component};
