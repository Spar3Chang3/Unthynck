import"../chunks/disclose-version.Bg9kRutz.js";import{p as L,s as p,f as F,t as G,a as O,T as w,W as e,as as m,c as i,r as a,a4 as S}from"../chunks/runtime.BenPUt-j.js";import{a as V,t as C,d as J}from"../chunks/template.DcwmSksp.js";import{i as K}from"../chunks/lifecycle.BYJU183W.js";import{o as E}from"../chunks/index-client.GFVulxwk.js";import{r as Q,s as n,I as l,T as R}from"../chunks/Global.rZwQt2GV.js";import{b as X}from"../chunks/input.CL7YN4xF.js";function Y(v,s,c){v.preventDefault(),w(s,!e(s)),c()}function Z(v,s){v.preventDefault(),w(s,!e(s))}var ee=C('<section class="cassette svelte-wyeyi5"><div class="cassette-body svelte-wyeyi5"><div class="dots svelte-wyeyi5"></div> <div class="dots svelte-wyeyi5"></div> <div class="dots svelte-wyeyi5"></div> <div class="dots svelte-wyeyi5"></div> <div class="label svelte-wyeyi5"><div class="label-descp svelte-wyeyi5"><div class="line svelte-wyeyi5"></div> <div class="line svelte-wyeyi5"></div></div> <div class="player svelte-wyeyi5"><div class="tape svelte-wyeyi5"><div class="circle svelte-wyeyi5" id="circle1"><div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div></div> <div class="visor svelte-wyeyi5"><div class="left-reel reel svelte-wyeyi5"></div> <div class="right-reel reel svelte-wyeyi5"></div></div> <div class="circle svelte-wyeyi5" id="circle2"><div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div> <div class="teeth svelte-wyeyi5"></div></div></div></div> <div class="label-color svelte-wyeyi5"></div></div></div></section> <br class="svelte-wyeyi5"> <section class="media-controls svelte-wyeyi5"><div class="playback-control svelte-wyeyi5"><button class="control-button svelte-wyeyi5"><img class="icon svelte-wyeyi5" alt="playback control"></button></div> <div class="volume-control svelte-wyeyi5"><button class="control-button svelte-wyeyi5"><img class="icon svelte-wyeyi5" alt="volume control"></button> <input type="range" min="0" max="100" class="volume-slider svelte-wyeyi5"></div> <div class="shuffle-control svelte-wyeyi5"><button class="control-button svelte-wyeyi5"><img class="icon svelte-wyeyi5" alt="shuffle control"></button></div></section>',1);function te(v,s){L(s,!0);const c="/audio/default.mp3",b="/audio/tape.mp3";let o=m(50),r=m(!1),d=m(!0),h=m(!1),t=null,_=null,H=S($),N=S(W),U=S(j);function W(){return e(d)?l.playerPlay:l.playerPause}function $(){if(P(),e(r))return l.volumeMute;if(e(o)===0)return l.volumeNone;if(e(o)<=50)return l.volumeLow;if(e(o)>50)return l.volumeHigh}function j(){return e(h)?l.playerShuffleOn:l.playerShuffleOff}function q(M){M.preventDefault(),!(!t&&!_)&&(_.play(),w(d,!e(d)),e(d)?t.pause():t.play())}function P(){t&&(e(r)?t.volume=0:t.volume=e(o)/100)}E(()=>(t=new Audio(c),_=new Audio(b),()=>{t.stop,t.pause(),t.src="",t=null}));var A=ee(),D=p(F(A),4),g=i(D),k=i(g);k.__click=q;var x=i(k);a(k),a(g);var I=p(g,2),u=i(I);u.__click=[Y,r,P];var z=i(u);a(u);var y=p(u,2);Q(y),a(I);var T=p(I,2),f=i(T);f.__click=[Z,h];var B=i(f);a(f),a(T),a(D),G(()=>{n(x,"src",e(N)),n(x,"title",e(d)?"Music Paused":"Music Playing"),n(u,"title",e(r)?"Music Muted":"Music Unmuted"),n(z,"src",e(H)),y.disabled=e(r),n(y,"title",e(o)),n(f,"title",e(h)?"Shuffling Enabled":"Shuffling Disabled"),n(B,"src",e(U))}),X(y,()=>e(o),M=>w(o,M)),V(v,A),O()}J(["click"]);var se=C('<section class="music svelte-1vfclpl"><!></section>');function re(v,s){L(s,!1),E(()=>{document.title=R.music}),K();var c=se(),b=i(c);te(b,{}),a(c),V(v,c),O()}export{re as component};
