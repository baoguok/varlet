var A=Object.defineProperty,I=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var U=(e,t,o)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,C=(e,t)=>{for(var o in t||(t={}))R.call(t,o)&&U(e,o,t[o]);if(F)for(var o of F(t))z.call(t,o)&&U(e,o,t[o]);return e},B=(e,t)=>I(e,D(t));import{L as $}from"./index.31c5b564.js";import{R as H}from"./index.23ced9c1.js";import{h as M,j as P,e as Q}from"./elements.6bb3d81f.js";import{e as Z,i as q}from"./shared.61f3a471.js";import{p as O,u as G,a as E,_ as J,b as K,c as W}from"./en-US.51e06fb5.js";import{_ as N}from"./elevation.8f12812c.js";import{q as X,r as V,x as Y,H as ee,z as te,d as c,e as ae,o as m,c as p,B as T,f as j,a as v,t as r,h as l,w as ie,l as g,p as oe,Z as ne,i as n,F as b,j as y,k as x}from"./vendor.8a125dba.js";import{C as se}from"./index.3a539e19.js";import{T as re,a as le}from"./index.9830a2b0.js";import{T as de}from"./index.8926a47b.js";import{T as fe}from"./index.b64ff58f.js";import{d as ue}from"./index.77fe3760.js";import{w as me,a as ce}from"./utils.efdc8a96.js";import"./index.789f7251.js";import"./index.bf70d0d0.js";import"./index.fa799c77.js";import"./components.33246c91.js";import"./index.1fd29ede.js";import"./provide.f392a899.js";import"./provide.d631162f.js";import"./index.3c3c86a9.js";const ge={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:{type:Function},"onUpdate:loading":{type:Function},"onUpdate:error":{type:Function}};const pe=X({name:"VarList",directives:{Ripple:H},components:{VarLoading:$},props:ge,setup(e){const t=V(null),o=V(null);let i;const h=()=>{var f,s,u;(f=e["onUpdate:error"])==null||f.call(e,!1),(s=e["onUpdate:loading"])==null||s.call(e,!0),(u=e.onLoad)==null||u.call(e)},_=()=>{const f=i===window?window.innerHeight:i.getBoundingClientRect().bottom,{bottom:s}=o.value.getBoundingClientRect();return s-Q(e.offset)<=f},d=async()=>{if(await te(),P(t.value))return;const{loading:f,finished:s,error:u}=e;!f&&!s&&!u&&_()&&h()};return Y(()=>{i=M(t.value),e.immediateCheck&&d(),i.addEventListener("scroll",d)}),ee(()=>{i.removeEventListener("scroll",d)}),{pack:O,listEl:t,detectorEl:o,dt:Z,isNumber:q,load:h,check:d}}}),ve={class:"var-list var--box",ref:"listEl"},he={class:"var-list__loading"},Te={class:"var-list__loading-text"},be={class:"var-list__finished"},ke={class:"var-list__detector",ref:"detectorEl"};function _e(e,t,o,i,h,_){const d=c("var-loading"),f=ae("ripple");return m(),p("div",ve,[T(e.$slots,"default"),e.loading?T(e.$slots,"loading",{key:0},()=>[v("div",he,[v("div",Te,r(e.dt(e.loadingText,e.pack.listLoadingText)),1),l(d,{size:"mini",radius:10})])]):j("v-if",!0),e.finished?T(e.$slots,"finished",{key:1},()=>[v("div",be,r(e.dt(e.finishedText,e.pack.listFinishedText)),1)]):j("v-if",!0),e.error?T(e.$slots,"error",{key:2},()=>[ie(v("div",{class:"var-list__error",onClick:t[0]||(t[0]=(...s)=>e.load&&e.load(...s))},[g(r(e.dt(e.errorText,e.pack.listErrorText)),1)],512),[[f]])]):j("v-if",!0),v("div",ke,null,512)],512)}var k=N(pe,[["render",_e]]);k.install=function(e){e.component(k.name,k)};var Le={basicUsage:"\u57FA\u672C\u4F7F\u7528",loadFail:"\u52A0\u8F7D\u5931\u8D25",tipText:"\u63D0\u793A\u6587\u5B57",loadingText:"\u6B63\u5728\u52AA\u529B\u8F93\u51FA",errorText:"\u51FA\u9519\u4E86\u51FA\u9519\u4E86",finishedText:"\u4E00\u6EF4\u90FD\u6CA1\u6709\u4E86",listItem:"\u5217\u8868\u9879"},je={basicUsage:"Basic Usage",loadFail:"Load Fail",tipText:"Tip Text",loadingText:"loading QAQ",errorText:"error TNT",finishedText:"finished ORZ",listItem:"List Item"};const{add:w,use:ye,pack:xe,packs:We,merge:Xe}=G(),Fe=e=>{W(e),ye(e)};E("zh-CN",J);E("en-US",K);w("zh-CN",Le);w("en-US",je);const Ue={name:"ListExample",components:{VarList:k,VarCell:se,VarTabs:re,VarTab:le,VarTabsItems:de,VarTabItem:fe},setup(){const e=oe({loading:!1,loading2:!1,loading3:!1,finished:!1,finished2:!1,finished3:!1,error:!1,list:[],list2:[],list3:[],current:0});return me(Fe),ce(ue),B(C({pack:xe},ne(e)),{load(){setTimeout(()=>{for(let t=0;t<20;t++)e.list.push(e.list.length+1);e.loading=!1,e.list.length>=60&&(e.finished=!0)},1e3)},load2(){setTimeout(()=>{if(e.list2.length===40){e.error=!0,e.loading2=!1;return}for(let t=0;t<20;t++)e.list2.push(e.list2.length+1);e.loading2=!1},1e3)},load3(){setTimeout(()=>{for(let t=0;t<20;t++)e.list3.push(e.list3.length+1);e.loading3=!1,e.list3.length>=60&&(e.finished3=!0)},1e3)}})}};function Ce(e,t,o,i,h,_){const d=c("var-tab"),f=c("var-tabs"),s=c("var-cell"),u=c("var-list"),L=c("var-tab-item"),S=c("var-tabs-items");return m(),p(b,null,[l(f,{active:e.current,"onUpdate:active":t[0]||(t[0]=a=>e.current=a),sticky:"","offset-top":"54px",style:{"margin-bottom":"10px"}},{default:n(()=>[l(d,null,{default:n(()=>[g(r(i.pack.basicUsage),1)]),_:1}),l(d,null,{default:n(()=>[g(r(i.pack.loadFail),1)]),_:1}),l(d,null,{default:n(()=>[g(r(i.pack.tipText),1)]),_:1})]),_:1},8,["active"]),l(S,{active:e.current,"onUpdate:active":t[5]||(t[5]=a=>e.current=a)},{default:n(()=>[l(L,null,{default:n(()=>[l(u,{finished:e.finished,loading:e.loading,"onUpdate:loading":t[1]||(t[1]=a=>e.loading=a),onLoad:i.load},{default:n(()=>[(m(!0),p(b,null,y(e.list,a=>(m(),x(s,{key:a},{default:n(()=>[g(r(i.pack.listItem)+": "+r(a),1)]),_:2},1024))),128))]),_:1},8,["finished","loading","onLoad"])]),_:1}),l(L,null,{default:n(()=>[l(u,{finished:e.finished2,error:e.error,"onUpdate:error":t[2]||(t[2]=a=>e.error=a),loading:e.loading2,"onUpdate:loading":t[3]||(t[3]=a=>e.loading2=a),onLoad:i.load2},{default:n(()=>[(m(!0),p(b,null,y(e.list2,a=>(m(),x(s,{key:a},{default:n(()=>[g(r(i.pack.listItem)+": "+r(a),1)]),_:2},1024))),128))]),_:1},8,["finished","error","loading","onLoad"])]),_:1}),l(L,null,{default:n(()=>[l(u,{"loading-text":i.pack.loadingText,"finished-text":i.pack.finishedText,"error-text":i.pack.errorText,finished:e.finished3,loading:e.loading3,"onUpdate:loading":t[4]||(t[4]=a=>e.loading3=a),onLoad:i.load3},{default:n(()=>[(m(!0),p(b,null,y(e.list3,a=>(m(),x(s,{key:a},{default:n(()=>[g(r(i.pack.listItem)+": "+r(a),1)]),_:2},1024))),128))]),_:1},8,["loading-text","finished-text","error-text","finished","loading","onLoad"])]),_:1})]),_:1},8,["active"])],64)}var Ye=N(Ue,[["render",Ce]]);export{Ye as default};
