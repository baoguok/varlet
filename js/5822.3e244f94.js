(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[5822],{7245:(e,n)=>{"use strict";n.Z={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",monthDictionary:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},10:{name:"October",abbr:"OCT"},11:{name:"November",abbr:"NOV"},12:{name:"December",abbr:"DEC"}},weekDictionary:{0:{name:"Sunday",abbr:"S"},1:{name:"Monday",abbr:"M"},2:{name:"Tuesday",abbr:"T"},3:{name:"Wednesday",abbr:"W"},4:{name:"Thursday",abbr:"T"},5:{name:"Friday",abbr:"F"},6:{name:"Saturday",abbr:"S"}},selected:" selected"}},9486:(e,n,r)=>{"use strict";r.d(n,{bU:()=>c,P2:()=>u,IH:()=>d,D$:()=>v});var t=r(641),i=r(8732);function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(){var e={},n=(0,t.iH)({}),r=r=>{if(!e[r])return console.warn("The ".concat(r," does not exist. You can mount a language package using the add method")),{};n.value=e[r]};return{packs:e,pack:n,add:(n,r)=>{r.lang=n,e[n]=r},use:r,merge:(n,t)=>{e[n]?(e[n]=o(o({},e[n]),t),r(n)):console.warn("The ".concat(n," does not exist. You can mount a language package using the add method"))}}}var{packs:s,pack:u,add:d,use:v,merge:b}=c();d("zh-CN",i.Z),v("zh-CN")},8732:(e,n)=>{"use strict";n.Z={dialogTitle:"提示",dialogConfirmButtonText:"确认",dialogCancelButtonText:"取消",actionSheetTitle:"请选择",listLoadingText:"加载中",listFinishedText:"没有更多了",listErrorText:"加载失败",pickerTitle:"请选择",pickerConfirmButtonText:"确认",pickerCancelButtonText:"取消",monthDictionary:{"01":{name:"一月",abbr:"一月"},"02":{name:"二月",abbr:"二月"},"03":{name:"三月",abbr:"三月"},"04":{name:"四月",abbr:"四月"},"05":{name:"五月",abbr:"五月"},"06":{name:"六月",abbr:"六月"},"07":{name:"七月",abbr:"七月"},"08":{name:"八月",abbr:"八月"},"09":{name:"九月",abbr:"九月"},10:{name:"十月",abbr:"十月"},11:{name:"十一月",abbr:"十一月"},12:{name:"十二月",abbr:"十二月"}},weekDictionary:{0:{name:"星期日",abbr:"日"},1:{name:"星期一",abbr:"一"},2:{name:"星期二",abbr:"二"},3:{name:"星期三",abbr:"三"},4:{name:"星期四",abbr:"四"},5:{name:"星期五",abbr:"五"},6:{name:"星期六",abbr:"六"}},selected:"个被选择"}},6206:(e,n,r)=>{"use strict";r.d(n,{Z:()=>b});var t=r(7875),i=r(641),a=r(3652),o=r(4268),l=r(8442),c=(0,t.aZ)({name:"VarSticky",props:a.N,setup(e){var n,r=(0,i.iH)(null),a=(0,i.iH)(null),c=(0,i.iH)(!1),s=(0,i.iH)("0px"),u=(0,i.iH)("0px"),d=(0,i.iH)("auto"),v=(0,i.iH)("auto"),b=(0,i.iH)("auto"),p=(0,i.iH)("auto"),f=(0,t.Fl)((()=>(0,o.uA)(e.offsetTop))),x=window,m=()=>{var t=0;if(x!==window){var{top:i}=x.getBoundingClientRect();t=i}var o=a.value,l=r.value,{top:m,left:h}=l.getBoundingClientRect(),y=m-t,{onScroll:g}=e;y<=f.value?(n||(d.value="".concat(l.offsetWidth,"px"),v.value="".concat(l.offsetHeight,"px"),s.value="".concat(t+f.value,"px"),u.value="".concat(h,"px"),b.value="".concat(o.offsetWidth,"px"),p.value="".concat(o.offsetHeight,"px"),c.value=!0),null==g||g(f.value,!0)):(c.value=!1,null==g||g(y,!1))},h=()=>{(x=(0,o.Ak)(r.value))!==window&&x.addEventListener("scroll",m),window.addEventListener("scroll",m),m()},y=()=>{x!==window&&x.removeEventListener("scroll",m),window.removeEventListener("scroll",m)};return(0,t.dl)(h),(0,t.se)(y),(0,t.bv)((()=>{n=["sticky","-webkit-sticky"].includes(window.getComputedStyle(r.value).position),h()})),(0,t.Ah)(y),{stickyEl:r,wrapperEl:a,isFixed:c,offsetTop:f,fixedTop:s,fixedLeft:u,fixedWidth:d,fixedHeight:v,fixedWrapperWidth:b,fixedWrapperHeight:p,toNumber:l.He}}}),s=r(6062),u=r.n(s),d=r(8006);u()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,c.render=function(e,n,r,i,a,o){return(0,t.wg)(),(0,t.j4)("div",{class:"var-sticky",ref:"stickyEl",style:{zIndex:e.toNumber(e.zIndex),top:e.isFixed?null:"".concat(e.offsetTop,"px"),width:e.isFixed?e.fixedWidth:null,height:e.isFixed?e.fixedHeight:null}},[(0,t.Wm)("div",{class:"var-sticky__wrapper",ref:"wrapperEl",style:{zIndex:e.toNumber(e.zIndex),position:e.isFixed?"fixed":null,width:e.isFixed?e.fixedWrapperWidth:null,height:e.isFixed?e.fixedWrapperHeight:null,left:e.isFixed?e.fixedLeft:null,top:e.isFixed?e.fixedTop:null}},[(0,t.WI)(e.$slots,"default")],4)],4)};var v=c;v.install=function(e){e.component(v.name,v)};var b=v},3652:(e,n,r)=>{"use strict";r.d(n,{N:()=>t});var t={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},onScroll:{type:Function}}},9838:(e,n,r)=>{"use strict";r.d(n,{H6:()=>p,Jr:()=>f,nN:()=>x,wn:()=>m,$E:()=>h,NB:()=>y,V$:()=>w,hO:()=>k,Mc:()=>z});var t=r(4825),i=r(7875),a=r(641),o=r(8442),l=["collect","clear"];function c(e,n,r,t,i,a,o){try{var l=e[a](o),c=l.value}catch(e){return void r(e)}l.done?n(c):Promise.resolve(c).then(t,i)}function s(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var a=e.apply(n,r);function o(e){c(a,t,i,o,l,"next",e)}function l(e){c(a,t,i,o,l,"throw",e)}o(void 0)}))}}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){b(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function b(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){return Array.isArray(n)?n.reduce(((n,r)=>(n[r]=e[r],n)),{}):e[n]}function f(e,n={},r={}){var a={setup:()=>()=>(0,i.h)(e,v(v({},n),r))},{unmount:o}=function(e){var n=(0,t.ri)(e),r=document.createElement("div");return document.body.appendChild(r),{instance:n.mount(r),unmount(){n.unmount(),document.body.removeChild(r)}}}(a);return{unmountInstance:o}}function x(e){var n=(0,a.qj)([]),r=(0,i.FN)();return(0,i.JJ)(e,{collect:e=>{var t;n.push(e),t=function(e){var n=[],r=e=>{null!=e&&e.component?r(null==e?void 0:e.component.subTree):Array.isArray(null==e?void 0:e.children)&&e.children.forEach((e=>{(0,i.lA)(e)&&(n.push(e),r(e))}))};return r(e),n}(r.subTree),n.sort(((e,n)=>t.indexOf(e.vnode)-t.indexOf(n.vnode)))},clear:e=>{(0,o.cl)(n,e)},instances:n}),{length:(0,i.Fl)((()=>n.length))}}function m(e){if(!g(e))return{index:null};var n=(0,i.f3)(e),{collect:r,clear:t,instances:a}=n,o=(0,i.FN)();return(0,i.bv)((()=>{(0,i.Y3)().then((()=>r(o)))})),(0,i.Ah)((()=>{(0,i.Y3)().then((()=>t(o)))})),{index:(0,i.Fl)((()=>a.indexOf(o)))}}function h(e){var n=[],r=e=>{n.push(e)},t=e=>{(0,o.cl)(n,e)};return{childProviders:n,bindChildren:n=>{(0,i.JJ)(e,v({collect:r,clear:t},n))}}}function y(e){if(!g(e))return{parentProvider:null,bindParent:null};var n=(0,i.f3)(e),{collect:r,clear:t}=n;return{parentProvider:u(n,l),bindParent:e=>{(0,i.bv)((()=>r(e))),(0,i.Jd)((()=>t(e)))}}}function g(e){return e in(0,i.FN)().provides}function w(){var e=(0,a.iH)(""),n=function(){var n=s((function*(n,r,t){return!(0,o.kJ)(n)||!n.length||!(yield Promise.all(n.map((e=>e(r,t))))).some((n=>!0!==n&&(e.value=String(n),!0)))}));return function(e,r,t){return n.apply(this,arguments)}}(),r=function(){var r=s((function*(r,t,i,a,o){r.includes(t)&&(yield n(i,a,o))&&(e.value="")}));return function(e,n,t,i,a){return r.apply(this,arguments)}}();return{errorMessage:e,validate:n,resetValidation:()=>{e.value=""},validateWithTrigger:r}}function k(e){(0,i.bv)((()=>{window.addEventListener("hashchange",e),window.addEventListener("popstate",e)})),(0,i.Ah)((()=>{window.removeEventListener("hashchange",e),window.removeEventListener("popstate",e)}))}function z(){var e=(0,a.iH)(!1);return(0,i.dl)((()=>{e.value=!1})),(0,i.se)((()=>{e.value=!0})),{disabled:e}}},7725:(e,n,r)=>{"use strict";var t=r(2609),i=r.n(t)()((function(e){return e[1]}));i.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-sticky {\n  position: sticky;\n  position: -webkit-sticky;\n}\n.var-index-anchor {\n  position: relative;\n}\n",""]),n.Z=i},6954:(e,n,r)=>{"use strict";var t=r(2609),i=r.n(t)()((function(e){return e[1]}));i.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n:root {\n  --index-bar-list-item-font-size: var(--font-size-xs);\n  --index-bar-list-item-color: var(--color-primary);\n  --index-bar-list-item-active-color: var(--color-danger);\n  --index-bar-list-item-height: 14px;\n  --index-bar-list-item-padding: 0 10px;\n}\n.var-index-bar {\n  position: relative;\n}\n.var-index-bar__anchor-list {\n  position: fixed;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.var-index-bar__anchor-item {\n  font-size: var(--index-bar-list-item-font-size);\n  display: flex;\n  align-items: center;\n  height: var(--index-bar-list-item-height);\n  justify-content: center;\n  padding: var(--index-bar-list-item-padding);\n  color: var(--index-bar-list-item-color);\n  cursor: pointer;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.var-index-bar__anchor-item--active {\n  color: var(--index-bar-list-item-active-color);\n}\n",""]),n.Z=i},1778:(e,n,r)=>{"use strict";var t=r(2609),i=r.n(t)()((function(e){return e[1]}));i.push([e.id,".var-index-anchor__example {\n  background: #e7edf7;\n  height: 42px;\n  display: flex;\n  align-items: center;\n  padding: 0 12px;\n  color: #2e67ba;\n}\n",""]),n.Z=i},8006:(e,n,r)=>{"use strict";var t=r(2609),i=r.n(t)()((function(e){return e[1]}));i.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-sticky {\n  position: sticky;\n  position: -webkit-sticky;\n}\n",""]),n.Z=i},5822:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>L});var t=r(7875),i=r(349),a=r(641),o=r(4825),l=r(6206),c=r(9838),s=Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"),u=Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY"),d={index:{type:[Number,String]}},v=(0,t.aZ)({name:"VarIndexAnchor",components:{[l.Z.name]:l.Z},inheritAttrs:!1,props:d,setup(e){var{index:n,indexBar:r,bindIndexBar:i}=function(){var{parentProvider:e,bindParent:n}=(0,c.NB)(s),{index:r}=(0,c.wn)(u);return{index:r,indexBar:e,bindIndexBar:n}}(),l=(0,a.iH)(0),d=(0,t.Fl)((()=>e.index)),v=(0,a.iH)(null);if(r&&i){var{active:b,sticky:p,stickyOffsetTop:f,zIndex:x}=r;return i({index:n,name:d,ownTop:l,setOwnTop:()=>{v.value&&(l.value=v.value.$el?v.value.$el.offsetTop:v.value.offsetTop)}}),{name:d,anchorEl:v,active:b,sticky:p,zIndex:x,stickyOffsetTop:f,Transition:o.uT}}console.error('[Varlet] IndexAnchor: You should use this component in "IndexBar"')}}),b=r(6062),p=r.n(b),f=r(7725);p()(f.Z,{insert:"head",singleton:!1}),f.Z.locals,v.render=function(e,n,r,a,o,l){return(0,t.wg)(),(0,t.j4)((0,t.LL)(e.sticky?"var-sticky":e.Transition),{"offset-top":e.sticky?e.stickyOffsetTop:null,"z-index":e.sticky?e.zIndex:null,ref:"anchorEl"},{default:(0,t.w5)((()=>[(0,t.Wm)("div",(0,t.dG)({class:"var-index-anchor"},e.$attrs),[(0,t.WI)(e.$slots,"default",{},(()=>[(0,t.Uk)((0,i.zw)(e.name),1)]))],16)])),_:3},8,["offset-top","z-index"])};var x=v,m={class:"var-index-bar",ref:"barEl"},h=r(8442),y=r(4268),g={sticky:{type:Boolean,default:!0},stickyOffsetTop:{type:Number,default:0},hideList:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},highlightColor:{type:String},duration:{type:[Number,String],default:0},onClick:{type:Function},onChange:{type:Function}};function w(e,n,r,t,i,a,o){try{var l=e[a](o),c=l.value}catch(e){return void r(e)}l.done?n(c):Promise.resolve(c).then(t,i)}var k=(0,t.aZ)({name:"VarIndexBar",props:g,setup(e){var{length:n,indexAnchors:r,bindIndexAnchors:i}=function(){var{bindChildren:e,childProviders:n}=(0,c.$E)(s),{length:r}=(0,c.nN)(u);return{length:r,indexAnchors:n,bindIndexAnchors:e}}(),o=(0,a.iH)(null),l=(0,a.iH)(""),d=(0,a.iH)(null),v=(0,a.iH)(null),b=(0,a.iH)([]),p=(0,a.iH)(),f=(0,t.Fl)((()=>e.sticky)),x=(0,t.Fl)((()=>e.stickyOffsetTop)),m=(0,t.Fl)((()=>e.zIndex));i({active:p,sticky:f,stickyOffsetTop:x,zIndex:m});var g=n=>{var r,t=(0,h.PO)(n)?n.name.value:n;t!==p.value&&(p.value=t,null===(r=e.onChange)||void 0===r||r.call(e,t))},k=()=>{var{scrollTop:e,scrollHeight:n}=o.value;r.forEach(((t,i)=>{var a=t.ownTop.value,o=e-a+x.value,c=i===r.length-1?n:r[i+1].ownTop.value-t.ownTop.value;o>=0&&o<c&&!l.value&&g(t)}))},z=function(){var n,t=(n=function*(n,t){var i;if(t&&(null===(i=e.onClick)||void 0===i||i.call(e,n)),n!==p.value){var a=r.find((({name:e})=>n===e.value));if(a){var c=a.ownTop.value,s=(0,y.vj)(o.value);l.value=n,g(n),yield(0,y.X5)(o.value,{left:s,top:c,animation:h.qb,duration:(0,h.He)(e.duration)}),(0,y.xX)((()=>{l.value=""}))}}},function(){var e=this,r=arguments;return new Promise((function(t,i){var a=n.apply(e,r);function o(e){w(a,t,i,o,l,"next",e)}function l(e){w(a,t,i,o,l,"throw",e)}o(void 0)}))});return function(e,n){return t.apply(this,arguments)}}();return(0,t.YP)((()=>n.value),(()=>(0,t.Y3)((()=>{r.forEach((({name:e,setOwnTop:n})=>{e.value&&b.value.push(e.value),n()}))})))),(0,t.bv)((()=>{var e;d.value=(0,y.Ak)(v.value),o.value=d.value===window?d.value.document.documentElement:d.value,null===(e=d.value)||void 0===e||e.addEventListener("scroll",k)})),(0,t.Jd)((()=>{var e;null===(e=d.value)||void 0===e||e.removeEventListener("scroll",k)})),{barEl:v,active:p,zIndex:m,anchorNameList:b,scrollTo:e=>{(0,y.U7)((()=>z(e,!0)))},anchorClick:z}}}),z=r(6954);p()(z.Z,{insert:"head",singleton:!1}),z.Z.locals,k.render=function(e,n,r,a,o,l){return(0,t.wg)(),(0,t.j4)("div",m,[(0,t.WI)(e.$slots,"default"),(0,t.Wm)("ul",{class:"var-index-bar__anchor-list",style:{zIndex:e.zIndex+2,display:e.hideList?"none":"block"}},[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(e.anchorNameList,(n=>((0,t.wg)(),(0,t.j4)("li",{key:n,class:["var-index-bar__anchor-item",{"var-index-bar__anchor-item--active":e.active===n}],style:{color:e.active===n&&e.highlightColor?e.highlightColor:""},onClick:r=>e.anchorClick(n)},(0,i.zw)(n),15,["onClick"])))),128))],4)],512)};var O=k;O.install=function(e){e.component(O.name,O)};var T=O,C=r(9785),E=r(8732),j=r(7245),H=r(9486),{add:P,use:_,pack:N,packs:I,merge:S}=(0,H.bU)(),A=e=>{(0,H.D$)(e),_(e)};(0,H.IH)("zh-CN",E.Z),(0,H.IH)("en-US",j.Z),P("zh-CN",{title:"标题",text:"文本"}),P("en-US",{title:"Title",text:"Text"});var F=r(6125),B={name:"IndexBarExample",components:{[T.name]:T,[x.name]:x,[C.Z.name]:C.Z},setup(){var e=(0,a.iH)([]);return(0,t.bv)((()=>{for(var n=0;n<26;n++)e.value.push(String.fromCharCode(65+n))})),(0,F.jS)(A),{list:e,pack:N,change:e=>{console.log(e)}}}},Z=r(1778);p()(Z.Z,{insert:"head",singleton:!1}),Z.Z.locals,B.render=function(e,n,r,a,o,l){var c=(0,t.up)("var-index-anchor"),s=(0,t.up)("var-cell"),u=(0,t.up)("var-index-bar");return(0,t.wg)(),(0,t.j4)(u,{onChange:a.change,"sticky-offset-top":50,duration:"300"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(a.list,(e=>((0,t.wg)(),(0,t.j4)("div",{key:e},[(0,t.Wm)(c,{index:e,class:"var-index-anchor__example"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(a.pack.title)+" "+(0,i.zw)(e),1)])),_:2},1032,["index"]),(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e)+" "+(0,i.zw)(a.pack.text),1)])),_:2},1024),(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e)+" "+(0,i.zw)(a.pack.text),1)])),_:2},1024),(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e)+" "+(0,i.zw)(a.pack.text),1)])),_:2},1024)])))),128))])),_:1},8,["onChange"])};var L=B}}]);