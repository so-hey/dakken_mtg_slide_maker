(()=>{var e={};e.id=221,e.ids=[221],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7398:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>x,tree:()=>d}),n(204),n(4359),n(5866);var s=n(3191),a=n(8716),r=n(7922),i=n.n(r),l=n(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);n.d(t,o);let d=["",{children:["workspace",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,204)),"C:\\Users\\sohtn\\Desktop\\dakken_mtg_slide_maker\\src\\app\\workspace\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,4359)),"C:\\Users\\sohtn\\Desktop\\dakken_mtg_slide_maker\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\sohtn\\Desktop\\dakken_mtg_slide_maker\\src\\app\\workspace\\page.tsx"],p="/workspace/page",u={require:n,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/workspace/page",pathname:"/workspace",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7147:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2994,23)),Promise.resolve().then(n.t.bind(n,6114,23)),Promise.resolve().then(n.t.bind(n,9727,23)),Promise.resolve().then(n.t.bind(n,9671,23)),Promise.resolve().then(n.t.bind(n,1868,23)),Promise.resolve().then(n.t.bind(n,4759,23))},2670:()=>{},3375:(e,t,n)=>{Promise.resolve().then(n.bind(n,9892))},9892:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var s=n(326),a=n(7577);let r=(0,a.createContext)({date:new Date,setDate:()=>{},displayText:"",setDisplayText:()=>{},isWorking:!0,setIsWorking:()=>{},isLoaded:!1,setIsLoaded:()=>{}}),i=({children:e})=>{let[t,n]=(0,a.useState)(new Date),[i,l]=(0,a.useState)(""),[o,d]=(0,a.useState)(!0),[c,p]=(0,a.useState)(!1);return s.jsx(r.Provider,{value:{date:t,setDate:n,displayText:i,setDisplayText:l,isWorking:o,setIsWorking:d,isLoaded:c,setIsLoaded:p},children:e})},l=()=>(0,a.useContext)(r);function o({text:e,handleClick:t}){return(0,s.jsxs)("button",{className:"btn btn-outline-success",type:"button",onClick:t,children:[e,s.jsx("span",{className:"material-symbols-outlined",children:"download"})]})}let d=e=>`${e.getFullYear()}${(e.getMonth()+1).toString().padStart(2,"0")}${e.getDate().toString().padStart(2,"0")}`;function c(){let{date:e,setIsWorking:t,isLoaded:n}=l(),a=async()=>{let t=await fetch("/api/getPDF",{method:"GET"});if(t.ok){let n=await t.blob(),s=window.URL.createObjectURL(n),a=document.createElement("a");a.href=s,a.download=`${d(e)}.pdf`,a.click()}},r=async()=>{let t=await fetch("/api/getMd",{method:"GET"});if(t.ok){let n=await t.blob(),s=window.URL.createObjectURL(n),a=document.createElement("a");a.href=s,a.download=`${d(e)}.md`,a.click()}};return s.jsx("div",{className:"container-fluid",children:s.jsx("div",{className:"row mt-0 justify-content-center mh-100",children:(0,s.jsxs)("div",{className:"col-10 col-lg-11 mh-100 mt-4",children:[(0,s.jsxs)("button",{type:"button",className:"btn btn-outline-secondary col-2",onClick:()=>t(!0),children:[s.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"}),s.jsx("span",{children:"戻る"})]}),s.jsx("br",{}),s.jsx("br",{}),n?(0,s.jsxs)("div",{className:"d-grid gap-2 col-8 mx-auto",children:[s.jsx(o,{text:"PDFをダウンロード",handleClick:a}),s.jsx(o,{text:"mdファイルをダウンロード",handleClick:r})]}):(0,s.jsxs)("div",{className:"d-grid gap-2 col-1 mx-auto",children:[s.jsx("br",{}),s.jsx("div",{className:"loading"})]})]})})})}function p({group:e,content:t,handleContent:n}){return(0,s.jsxs)("div",{className:"input-group mb-3",children:[s.jsx("span",{className:"input-group-text",id:"inputGroup-sizing-default",style:{width:"4vw"},children:e}),s.jsx("input",{type:"text",className:"form-control",value:t,placeholder:"なし",onChange:n,"aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]})}function u(){let{date:e,setDate:t}=l();return s.jsx("div",{className:"container",children:s.jsx("div",{className:"row mt-2",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"form-group row",children:s.jsx("div",{className:"col-8",children:s.jsx("input",{type:"date",className:"form-control",id:"dateInput",onChange:e=>{t(new Date(e.target.value))}})})})})})})}function x({noticeTitle:e,handleNoticeTitle:t,noticeContent:n,handleNoticeContent:a,handleNoticeAdd:r}){return s.jsx("div",{children:(0,s.jsxs)("div",{children:[s.jsx("div",{className:"input-group mb-1",children:s.jsx("input",{type:"text",className:"form-control",id:"Title",value:e,onChange:t,placeholder:"Title"})}),(0,s.jsxs)("div",{className:"input-group mb-3",children:[s.jsx("input",{type:"text",className:"form-control",id:"Content",value:n,onChange:a,placeholder:"Content"}),s.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:r,children:"追加"})]})]})})}function m({notice:e,handleNoticeDelete:t,index:n}){return(0,s.jsxs)("div",{children:[s.jsx("div",{className:"input-group mb-1",children:s.jsx("input",{type:"text",className:"form-control",id:"Title",value:e[0],placeholder:"Title",disabled:!0})}),(0,s.jsxs)("div",{className:"input-group mb-3",children:[s.jsx("input",{type:"text",className:"form-control",id:"Content",value:e[1],placeholder:"Content",disabled:!0}),s.jsx("button",{type:"button",className:"btn btn-outline-danger",id:`deleteButton${n}`,onClick:t,children:"削除"})]})]})}function h(e){let t=0;for(let n of e)n.match(/[ -~]/)?t+=3:t+=5;return t}let g=e=>`${e.getFullYear()}年${e.getMonth()+1}月${e.getDate()}日(${v(e.getDay())})`,v=e=>{switch(e){case 0:return"日";case 1:return"月";case 2:return"火";case 3:return"水";case 4:return"木";case 5:return"金";case 6:return"土"}};function j(){let{date:e,setDisplayText:t,setIsWorking:n,setIsLoaded:r}=l(),[i,o]=(0,a.useState)(""),[d,c]=(0,a.useState)(""),[v,j]=(0,a.useState)(""),[b,f]=(0,a.useState)(""),[w,y]=(0,a.useState)(""),[k,N]=(0,a.useState)(""),[C,_]=(0,a.useState)([]),T=e=>{let t=Number(e.currentTarget.id.slice(12));_(C.filter((e,n)=>n!==t))},P=async()=>{let t,s;await fetch("/api/writeMdFile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pdfText:(t=(t=`---
marp: true
class: invert
theme: dakken_style
author: dakken
paginate: true
math: mathjax
---

<div class="title">DA研定例会</div>

# <center>{date}</center>

---

# 部門報告

### DS部門

- {dsContent}

### DE部門

- {deContent}

### BIZ部門

- {bizContent}

### CC部門

- {ccContent}

---

# その他連絡事項

{otherNotice}`).replace("{date}",g(e)).replace("{dsContent}",""===i?"なし":i).replace("{deContent}",""===d?"なし":d).replace("{bizContent}",""===v?"なし":v).replace("{ccContent}",""===b?"なし":b),s="",C.map((e,t)=>{t%4==0&&0!=t&&(s+="---\n\n");let[n,a]=e;(""!=n||""!=a)&&(120>=h(n)?s+=`### ${n}

`:s+=`#### ${n}

`,s+=`- ${a}

`)}),""==s&&(s="### なし\n\n"),t=t.replace("{otherNotice}",s))})}).then(e=>{e.ok&&n(!1)}),await fetch("/api/convertPDF",{method:"GET"}).then(e=>{console.log(e),r(!0)})};return(0,s.jsxs)("div",{style:{overflow:"hidden"},children:[(0,s.jsxs)("div",{className:"container",style:{height:"75vh",overflowY:"auto"},children:[s.jsx("h3",{className:"mt-4",children:"定例会日時"}),s.jsx(u,{}),s.jsx("hr",{}),s.jsx("h3",{children:"部門報告"}),s.jsx(p,{group:"DS",content:i,handleContent:e=>{let t=e.target.value;150>=h(t)&&(""==t?o(""):o(t))}}),s.jsx(p,{group:"DE",content:d,handleContent:e=>{let t=e.target.value;150>=h(t)&&(""==t?c(""):c(t))}}),s.jsx(p,{group:"BIZ",content:v,handleContent:e=>{let t=e.target.value;150>=h(t)&&(""==t?j(""):j(t))}}),s.jsx(p,{group:"CC",content:b,handleContent:e=>{let t=e.target.value;150>=h(t)&&(""==t?f(""):f(t))}}),s.jsx("hr",{}),s.jsx("h3",{children:"その他連絡事項"}),s.jsx(x,{noticeTitle:w,handleNoticeTitle:e=>{let t=e.target.value;150>=h(t)&&y(t)},noticeContent:k,handleNoticeContent:e=>{let t=e.target.value;150>=h(t)&&N(t)},handleNoticeAdd:()=>{""!=w&&""!=k&&(_([...C,[w,k]]),y(""),N(""),console.log(C))}}),s.jsx("div",{children:C.map((e,t)=>s.jsx("div",{children:s.jsx(m,{notice:e,handleNoticeDelete:T,index:t})},t))}),s.jsx("br",{}),s.jsx("br",{})]}),s.jsx("hr",{}),s.jsx("div",{style:{height:"20vh",overflow:"hidden"},children:s.jsx("center",{children:s.jsx("button",{type:"button",className:"btn btn-lg btn-outline-primary",onClick:P,children:"確定"})})})]})}function b(){let{isWorking:e}=l();return s.jsx("div",{className:"col-sm-6 border-end mh-100",style:{overflow:"hidden"},children:e?s.jsx(j,{}):s.jsx(c,{})})}function f(){let{displayText:e}=l();return s.jsx("div",{className:"col-sm-6 mh-100",style:{overflowY:"auto"},children:(0,s.jsxs)("div",{children:[s.jsx("style",{children:`
        .displayText .title {
          font-size: min(3.8vw, 53.2px) !important;
          font-weight: bold;
          text-align: center;
          padding-top: min(7vw, 98px);
        }
        .displayText h1 {
          font-size: min(2vw, 28px) !important;
          font-weight: bold;
          margin-bottom: min(1.5vw, 21px);
        }
        .displayText h2 {
          font-size: min(1.8vw, 25.2px) !important;
          font-weight: bold;
        }
        .displayText h3 {
          font-size: min(1.5vw, 21px) !important;
          font-weight: bold;
          margin: min(0.8vw, 11.2px) min(1.5vw, 21px);
        }
        .displayText h4 {
          font-size: min(1.2vw, 16.8px) !important;
          font-weight: bold;
          margin: min(0.7vw, 9.8px) min(1.2vw, 16.8px);
        }
        .displayText h5 {
          font-size: min(1vw, 14px) !important;
          font-weight: bold;
          margin: min(0.6vw, 8.4px) min(1vw, 14px);
        }
        .displayText ul {
          margin: min(0.8vw, 11.2px);
        }
        .displayText li {
          font-size: min(1.2vw, 16.8px) !important;
        }
        .displayText .box {
          height: min(24vw, 336px);
          padding: 0 min(1vw, 14px);
        }
      `}),s.jsx("div",{className:"displayText",dangerouslySetInnerHTML:{__html:e}}),s.jsx("br",{}),s.jsx("br",{})]})})}function w(){return s.jsx(i,{children:s.jsx(y,{})})}let y=()=>(0,s.jsxs)("div",{className:"row mh-100",style:{display:"flex",height:"100vh",overflow:"hidden"},children:[s.jsx(b,{}),s.jsx(f,{})]})},4359:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d,metadata:()=>o});var s=n(9510),a=n(5384),r=n.n(a);function i(){return s.jsx("header",{className:"navbar navbar-expand-lg bd-navbar sticky-top navbar-dark bg-dark",children:s.jsx("nav",{className:"container-fluid",children:s.jsx("div",{className:"container-xxl",children:s.jsx("a",{className:"navbar-brand",href:"#",children:"Dakken-MTG-Slide-Maker"})})})})}function l({content:e}){return s.jsx("main",{className:"d-flex vh-100 justify-content-center",style:{backgroundColor:"#EEE"},children:s.jsx("div",{className:"row container-xxl",style:{backgroundColor:"white"},children:e})})}n(4315),n(5330);let o={title:"Dakken MTG Slide Maker",description:"Generate dakken meeting slide."};function d({children:e}){return(0,s.jsxs)("html",{lang:"en",children:[(0,s.jsxs)("head",{children:[s.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),s.jsx("link",{rel:"icon",href:"/images/favicon.ico",type:"image/x-icon"}),s.jsx("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM",crossOrigin:"anonymous"})]}),(0,s.jsxs)("body",{className:r().className,children:[s.jsx(i,{}),s.jsx(l,{content:e})]})]})}},204:(e,t,n)=>{"use strict";n.r(t),n.d(t,{$$typeof:()=>i,__esModule:()=>r,default:()=>l});var s=n(8570);let a=(0,s.createProxy)(String.raw`C:\Users\sohtn\Desktop\dakken_mtg_slide_maker\src\app\workspace\page.tsx`),{__esModule:r,$$typeof:i}=a;a.default;let l=(0,s.createProxy)(String.raw`C:\Users\sohtn\Desktop\dakken_mtg_slide_maker\src\app\workspace\page.tsx#default`)},5330:()=>{},4315:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),s=t.X(0,[948,349],()=>n(7398));module.exports=s})();