import{_ as H,c as r,j as V,n as q,i as z,k as F}from"./elevation.cab6996c.js";import{r as o,q as I,u as L,e as N,f as P,o as _,c as b,a as s,t as p,F as A,k as T,w as E,l as M,j as D,i as R,m as S}from"./vendor.efca09d3.js";const G={name:"AppHome",setup(){var i,f,g,x,C,k,w,y,j,B;const m=o((f=(i=r)==null?void 0:i.title)!=null?f:""),d=o((x=(g=r)==null?void 0:g.logo)!=null?x:""),v=o((w=(k=(C=r)==null?void 0:C.mobile)==null?void 0:k.title)!=null?w:{}),u=o((B=(j=(y=r)==null?void 0:y.pc)==null?void 0:j.menu)!=null?B:[]).value.filter(e=>e.type===2),h=I(u),a=o("zh-CN"),n=o("mobile"),l=L();return V(e=>{a.value=e}),q(e=>{n.value=e}),{components:h,lang:a,toComponent:e=>{l.push({path:`/${e.doc}`,query:{language:a.value,platform:n.value,replace:e.doc}}),!z()&&F()&&window.top.scrollToMenu(e.doc)},logo:d,title:m,description:v}}},J={class:"logo"},K={class:"varlet-home__title"},O=["src"],Q={class:"varlet-home__desc"};function U(m,d,v,t,u,h){const a=N("var-site-icon"),n=N("var-site-cell"),l=P("ripple");return _(),b(A,null,[s("div",J,[s("h1",K,[s("img",{class:"varlet-home__image",src:t.logo},null,8,O),s("span",null,p(t.title),1)]),s("h2",Q,p(t.description[t.lang]),1)]),(_(!0),b(A,null,T(t.components,c=>E((_(),M(n,{key:c.text,onClick:i=>t.toComponent(c)},{extra:D(()=>[R(a,{name:"chevron-right",size:"14"})]),default:D(()=>[S(p(c.text[t.lang]),1)]),_:2},1032,["onClick"])),[[l]])),128))],64)}var Y=H(G,[["render",U],["__scopeId","data-v-24a8218c"]]);export{Y as default};
