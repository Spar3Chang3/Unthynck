import"../chunks/disclose-version.Bg9kRutz.js";import{e as F,p as L,a as N,s as o,f as Y,l as m,at as j,c as n,r as u,t as z,au as B,m as G}from"../chunks/runtime.CujgLOHB.js";import{s as K}from"../chunks/render.DYv6prKW.js";import{i as A}from"../chunks/if.Ck0J_65a.js";import{e as Q,i as R}from"../chunks/each.DfX4q5Xw.js";import{a as d,t as _,e as V}from"../chunks/template.GUaYdGvl.js";import{T as X,r as D,b as Z}from"../chunks/Global.Pv3MWMcT.js";import{l as $,b as T}from"../chunks/input.1XdjuRsO.js";import{i as ee,p as te}from"../chunks/proxy.BCqRXuL-.js";import{o as ae}from"../chunks/index-client.2-vHILIg.js";function O(e,s,t){if(e.multiple)return ie(e,s);for(var r of e.options){var a=f(r);if(ee(a,s)){r.selected=!0;return}}(!t||s!==void 0)&&(e.selectedIndex=-1)}function se(e,s){F(()=>{var t=new MutationObserver(()=>{var r=e.__value;O(e,r)});return t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}})}function re(e,s,t=s){var r=!0;$(e,"change",()=>{var a;if(e.multiple)a=[].map.call(e.querySelectorAll(":checked"),f);else{var l=e.querySelector(":checked");a=l&&f(l)}t(a)}),F(()=>{var a=s();if(O(e,a,r),r&&a===void 0){var l=e.querySelector(":checked");l!==null&&(a=f(l),t(a))}e.__value=a,r=!1}),se(e)}function ie(e,s){for(var t of e.options)t.selected=~s.indexOf(f(t))}function f(e){return"__value"in e?e.__value:e.value}var oe=_(`<div class="submitted-prompt svelte-1weu331"><h4 style="color: green">Thanks! We'll get back to you as soon as we can.</h4></div>`),ne=_('<option class="user-option svelte-1weu331"> </option>'),ue=_('<div class="confusion-prompt svelte-1weu331"><p class="confusion-prompt svelte-1weu331" style="color: red">Please do not put your personal message in the box below</p> <p class="confusion-prompt svelte-1weu331">We will contact you later for the personal message if your inquiry is accepted</p></div>'),le=_(`<div class="contact-prompt"><h2>Want Unthynck to play for you? We're open for commission!</h2></div> <div class="contact-info svelte-1weu331"><form><div class="user-contact svelte-1weu331"><label for="name">Name</label> <input type="text" id="name" required class="name user-input svelte-1weu331" placeholder="John Doe"> <label for="email">Email</label> <input type="email" id="email" required class="email user-input svelte-1weu331" placeholder="example@unthynck.band"></div> <br> <div class="user-dropdown svelte-1weu331"><label for="inquiryType">Type of Inquiry</label> <select id="inquiryType" required class="inquiry-type svelte-1weu331"><option disabled class="inquiry-type-input svelte-1weu331">Select Inquiry</option><!></select> <!></div> <br> <div class="user-message svelte-1weu331"><label for="business-message">Tell us About Your Inquiry</label> <textarea id="business-message" required rows="8" class="business-message-input svelte-1weu331" placeholder="I want to hear you guys for my 18th birthday! Here's my address and the time I'm currently thinking about"></textarea></div> <div class="submit-button-container svelte-1weu331"><button type="submit" class="submit-button svelte-1weu331">Send Inquiry</button></div></form></div>`,1),ve=_('<section class="contact-us svelte-1weu331"><!></section>');function ge(e,s){L(s,!0);let t=te({name:"",email:"",type:"",businessMessage:""}),r=j(!1);const a=["Cameo","Performance","Personal Message"],l=a[2],U=c=>{c.preventDefault(),G(r,!0)};ae(()=>{document.title=X.contactUs});var h=ve(),C=n(h);A(C,()=>m(r),c=>{var b=oe();d(c,b)},c=>{var b=le(),I=o(Y(b),2),w=n(I),g=n(w),q=o(n(g),2);D(q);var M=o(q,4);D(M),u(g);var x=o(g,4),y=o(n(x),2),k=n(y);k.value=((k.__value="")==null,"");var E=o(k);Q(E,17,()=>a,R,(i,v)=>{var p=ne(),W={},J=n(p,!0);u(p),z(()=>{W!==(W=m(v))&&(p.value=(p.__value=m(v))==null?"":m(v)),K(J,m(v))}),d(i,p)}),u(y);var H=o(y,2);A(H,()=>t.type===l,i=>{var v=ue();d(i,v)}),u(x);var S=o(x,4),P=o(n(S),2);Z(P),u(S),B(2),u(w),u(I),V("submit",w,U),T(q,()=>t.name,i=>t.name=i),T(M,()=>t.email,i=>t.email=i),re(y,()=>t.type,i=>t.type=i),T(P,()=>t.businessMessage,i=>t.businessMessage=i),d(c,b)}),u(h),d(e,h),N()}export{ge as component};