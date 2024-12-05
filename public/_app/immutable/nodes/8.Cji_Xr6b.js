import"../chunks/disclose-version.Bg9kRutz.js";import{p as j,as as k,a as C,a0 as P,s as i,c,j as o,r as l,t as w}from"../chunks/runtime.8aERoiLu.js";import{s as x}from"../chunks/render.BjEt2VPh.js";import{i as O}from"../chunks/if.vGGyft-f.js";import{e as F,i as T}from"../chunks/each.BDlHyYkj.js";import{e as N,a as v,t as u}from"../chunks/template.tWMG4ekI.js";import{p}from"../chunks/proxy.DE6t_P0E.js";import{o as A}from"../chunks/index-client.8_MlTCsB.js";var $=u('<div class="results-section svelte-ma7pqn"><h2 class="svelte-ma7pqn">Parsed Tracks</h2> <pre class="svelte-ma7pqn"> </pre> <button class="svelte-ma7pqn">Copy JSON to Clipboard</button></div>'),I=u("<li> </li>"),W=u('<div class="results-section svelte-ma7pqn"><h2 class="svelte-ma7pqn">Uploaded Files</h2> <ul></ul></div>'),z=u('<section class="nunja svelte-ma7pqn"><h1 class="svelte-ma7pqn">Music Directory Uploader</h1> <div class="upload-section svelte-ma7pqn"><label class="svelte-ma7pqn">Upload Music Directory</label> <input type="file" webkitdirectory directory="" multiple class="svelte-ma7pqn"></div> <!> <!></section>');function B(f,U){j(U,!0);let h=k(p([])),d=k(p([])),q=k(void 0);function M(a){return a.length===0?null:(a[0].webkitRelativePath||a[0].relativePath).split("/")[0].replace(/\s+/g,"")}async function D(a,e){return new Promise((r,n)=>{const t=a.name.replace(".mp3",""),s=t.indexOf(" "),y=t.slice(0,s),S=t.slice(s+1),m=new Audio(URL.createObjectURL(a));m.addEventListener("loadedmetadata",()=>{r({trackNumber:y,trackName:S,trackDuration:Math.round(m.duration),trackPath:`releases/${e}/music/${a.name}`,artworkPath:`releases/${e}/art/art.png`,trackDescription:""}),URL.revokeObjectURL(m.src)}),m.addEventListener("error",G=>{n(new Error("Error loading audio file"))})})}async function E(a){const e=Array.from(a.target.files);P(h,p(e));const r=M(e),n=e.filter(t=>t.name.endsWith(".mp3")).sort((t,s)=>t.name.localeCompare(s.name));try{const t=await Promise.all(n.map(s=>D(s,r)));P(d,p(t))}catch(t){console.error("Error parsing MP3 files",t)}}function J(){const a=JSON.stringify(o(d),null,2);o(q).writeText(a).then(()=>alert("JSON copied to clipboard!")).catch(e=>console.error("Error copying JSON:",e))}A(()=>{typeof navigator<"u"&&navigator.clipboard?P(q,p(navigator.clipboard)):console.warn("Clipboard API is not supported in this environment")});var b=z(),g=i(c(b),2),L=i(c(g),2);l(g);var _=i(g,2);O(_,()=>o(d).length>0,a=>{var e=$(),r=i(c(e),2),n=c(r,!0);w(()=>x(n,JSON.stringify(o(d),null,2))),l(r);var t=i(r,2);l(e),N("click",t,J),v(a,e)});var R=i(_,2);O(R,()=>o(h).length>0,a=>{var e=W(),r=i(c(e),2);F(r,21,()=>o(h),T,(n,t)=>{var s=I(),y=c(s,!0);l(s),w(()=>x(y,o(t).webkitRelativePath||o(t).relativePath)),v(n,s)}),l(r),l(e),v(a,e)}),l(b),N("change",L,E),v(f,b),C()}function te(f){B(f,{})}export{te as component};