import"../chunks/disclose-version.Bg9kRutz.js";import{p as T,at as x,c as a,s as n,r as t,au as C,t as K,a as j,m as y,l as s}from"../chunks/runtime.CujgLOHB.js";import{p as m}from"../chunks/proxy.BCqRXuL-.js";import{d as N,a as H,t as A}from"../chunks/template.GUaYdGvl.js";import{e as Q,i as R}from"../chunks/each.DfX4q5Xw.js";import{o as L}from"../chunks/index-client.2-vHILIg.js";import{I as U,s as V,T as W}from"../chunks/Global.Pv3MWMcT.js";import{i as X,a as Y,s as S,g as Z,b as $,c as tt}from"../chunks/Firebase.DSZICgop.js";import{s as p}from"../chunks/render.DYv6prKW.js";import{t as at}from"../chunks/class.Bvena8yX.js";const et=(c,e)=>{c.preventDefault(),y(e,!s(e))};var st=A('<div class="flip-box svelte-9osdrc"><button class="flip-button svelte-9osdrc" aria-label="flip-button"></button> <div class="flip-box-inner svelte-9osdrc"><div class="flip-box-front card svelte-9osdrc"><div class="portrait-container svelte-9osdrc"><img class="portrait svelte-9osdrc" alt="Band Member portrait"></div> <div class="interact-tip-container svelte-9osdrc"><img class="interact-tip svelte-9osdrc" src="/icons/interaction-cursor.svg" alt="Interaction Hint Icon - click card to flip"></div></div> <div class="flip-box-back card svelte-9osdrc"><div class="content svelte-9osdrc"><div class="banner svelte-9osdrc"><h1 class="svelte-9osdrc"> </h1></div> <div class="type-caption svelte-9osdrc"><h3 class="svelte-9osdrc"> </h3></div> <div class="stats svelte-9osdrc"><div class="health svelte-9osdrc"><h3 class="svelte-9osdrc"> </h3></div> <div class="about-me svelte-9osdrc"><p class="svelte-9osdrc"> </p></div> <div class="socials svelte-9osdrc"></div></div></div></div></div></div>');function rt(c,e){T(e,!0);let l=x(!1),v=x(m(U.loadingIcon));async function u(){let _=new Image;await Z(e.imagePath,"portrait.jpg").then(J=>{_.src=J}),_.onload=()=>{y(v,m(_.src))}}L(()=>{X(),Y(),u()});var o=st(),i=a(o);i.__click=[et,l];var r=n(i,2),g=a(r),d=a(g);S(d,"transition","opacity 500ms ease");var O=a(d);t(d),C(2),t(g);var k=n(g,2),I=a(k),h=a(I),D=a(h),q=a(D,!0);t(D),t(h);var b=n(h,2),M=a(b),z=a(M,!0);t(M),t(b);var P=n(b,2),f=a(P),w=a(f),E=a(w);t(w),t(f);var F=n(f,2),B=a(F),G=a(B,!0);t(B),t(F),C(2),t(P),t(I),t(k),t(r),t(o),K(()=>{at(r,"show-back",s(l)),S(d,"opacity",s(l)?"0":"1"),V(O,"src",s(v)),p(q,e.name),p(z,e.position),p(E,`HP: ${e.hp??""}`),p(G,e.aboutMe)}),H(c,o),j()}N(["click"]);var it=A('<section class="meet-the-band svelte-1gpc872"></section>');function ht(c,e){T(e,!0);const l="public/members";let v=x(m([]));async function u(){$(),await tt(l).then(i=>{y(v,m(Object.values(i)))}).catch(i=>{alert("Could not obtain members :( Please try refreshing or come back later - "+i)})}L(()=>{document.title=W.meetTheBand,u()});var o=it();Q(o,21,()=>s(v),R,(i,r)=>{rt(i,{get name(){return s(r).name},get hp(){return s(r).hp},get id(){return s(r).id},get aboutMe(){return s(r).aboutMe},get imagePath(){return s(r).imagePath},get position(){return s(r).position}})}),t(o),H(c,o),j()}export{ht as component};
