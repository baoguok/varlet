(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[1943],{9947:(e,n,t)=>{"use strict";var r=t(641),i={locks:{},zIndex:2e3,touchmoveForbid:!0};(0,r.qj)(i),n.Z=(0,r.qj)(i)},2986:(e,n,t)=>{"use strict";t.d(n,{Z:()=>f});var r=t(9947),i=t(6062),o=t.n(i),a=t(526),l=(o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals,t(4352));function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){var n=this._ripple;n.removeRipple(),n.disabled||n.tasker||(n.tasker=window.setTimeout((()=>{var t;n.tasker=null;var{x:r,y:i,centerX:o,centerY:a,size:l}=function(e,n){var{top:t,left:r}=e.getBoundingClientRect(),{clientWidth:i,clientHeight:o}=e,a=Math.sqrt(Math.pow(i,2)+Math.pow(o,2))/2,l=2*a;return{x:n.touches[0].clientX-r-a,y:n.touches[0].clientY-t-a,centerX:(i-2*a)/2,centerY:(o-2*a)/2,size:l}}(this,e),s=document.createElement("div");s.classList.add("var-ripple"),s.style.opacity="0",s.style.transform="translate(".concat(r,"px, ").concat(i,"px) scale3d(.3, .3, .3)"),s.style.width="".concat(l,"px"),s.style.height="".concat(l,"px"),s.style.backgroundColor=null!==(t=n.color)&&void 0!==t?t:"currentColor",s.dataset.createdAt=String(performance.now()),function(e){var{zIndex:n,position:t}=window.getComputedStyle(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden","static"===t&&(e.style.position="relative"),"auto"===n&&(e.style.zIndex="1")}(this),this.appendChild(s),window.setTimeout((()=>{s.style.transform="translate(".concat(o,"px, ").concat(a,"px) scale3d(1, 1, 1)"),s.style.opacity=".25"}),20)}),60))}function p(){var e=()=>{var e=this.querySelectorAll(".var-ripple");if(e.length){var n=e[e.length-1],t=250-performance.now()+Number(n.dataset.createdAt);setTimeout((()=>{n.style.opacity="0",setTimeout((()=>{var e;return null===(e=n.parentNode)||void 0===e?void 0:e.removeChild(n)}),250)}),t)}};this._ripple.tasker?setTimeout(e,60):e()}function v(){var e=this._ripple;e.touchmoveForbid&&(e.tasker&&window.clearTimeout(e.tasker),e.tasker=null)}o()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var f={mounted:function(e,n){var t,i,o;e._ripple=c(c({tasker:null},null!==(t=n.value)&&void 0!==t?t:{}),{},{touchmoveForbid:null!==(i=null===(o=n.value)||void 0===o?void 0:o.touchmoveForbid)&&void 0!==i?i:r.Z.touchmoveForbid,removeRipple:p.bind(e)}),e.addEventListener("touchstart",d,{passive:!0}),e.addEventListener("touchmove",v,{passive:!0}),e.addEventListener("dragstart",p,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})},unmounted:function(e){e.removeEventListener("touchstart",d),e.removeEventListener("touchmove",v),e.removeEventListener("dragstart",p),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)},updated:function(e,n){var t,i,o;e._ripple=c(c(c({},e._ripple),null!==(t=n.value)&&void 0!==t?t:{}),{},{touchmoveForbid:null!==(i=null===(o=n.value)||void 0===o?void 0:o.touchmoveForbid)&&void 0!==i?i:r.Z.touchmoveForbid,tasker:null})},install(e){e.directive("ripple",this)}}},9978:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var r=t(7875),i={gutter:{type:[String,Number],default:0},justify:{type:String,default:"flex-start",validator:function(e){return["flex-start","flex-end","center","space-between","space-around"].includes(e)}},align:{type:String,default:"flex-start",validator:function(e){return["flex-start","center","flex-end"].includes(e)}},onClick:{type:Function}},o=t(9795),a=t(4268),l=(0,r.aZ)({name:"VarRow",props:i,setup(e){var{cols:n,bindCols:t,length:i}=(0,o.v8)(),l=()=>{var t=(()=>{var e=[[]],t=0;return n.forEach((n=>{var r=n.span.value+n.offset.value;t+r>24?(e.push([n]),t=r):(e[e.length-1].push(n),t+=r)})),e})(),r=(0,a.uA)(e.gutter)/2;t.forEach((e=>{e.forEach(((n,t)=>{e.length<=1||(0===t&&n.setPadding({left:0,right:r}),t===e.length-1&&n.setPadding({left:r,right:0}),t>0&&t<e.length-1&&n.setPadding({left:r,right:r}))}))}))},s={computePadding:l};(0,r.YP)((()=>i.value),l),(0,r.YP)((()=>e.gutter),l),t(s)}}),s=t(6062),c=t.n(s),u=t(4640);c()(u.Z,{insert:"head",singleton:!1}),u.Z.locals,l.render=function(e,n,t,i,o,a){return(0,r.wg)(),(0,r.j4)("div",{class:"var-row var--box",style:{justifyContent:e.justify,alignItems:e.align},onClick:n[1]||(n[1]=(...n)=>e.onClick&&e.onClick(...n))},[(0,r.WI)(e.$slots,"default")],4)};var d=l;d.install=function(e){e.component(d.name,d)};var p=d},9795:(e,n,t)=>{"use strict";t.d(n,{MG:()=>i,dJ:()=>o,v8:()=>a});var r=t(9838),i=Symbol("ROW_BIND_COL_KEY"),o=Symbol("ROW_COUNT_COL_KEY");function a(){var{bindChildren:e,childProviders:n}=(0,r.$E)(i),{length:t}=(0,r.nN)(o);return{length:t,cols:n,bindCols:e}}},9838:(e,n,t)=>{"use strict";t.d(n,{H6:()=>f,Jr:()=>h,nN:()=>b,wn:()=>m,$E:()=>g,NB:()=>y,V$:()=>w,hO:()=>k,Mc:()=>z});var r=t(4825),i=t(7875),o=t(641),a=t(8442),l=["collect","clear"];function s(e,n,t,r,i,o,a){try{var l=e[o](a),s=l.value}catch(e){return void t(e)}l.done?n(s):Promise.resolve(s).then(r,i)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){s(o,r,i,a,l,"next",e)}function l(e){s(o,r,i,a,l,"throw",e)}a(void 0)}))}}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){v(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e,n){return Array.isArray(n)?n.reduce(((n,t)=>(n[t]=e[t],n)),{}):e[n]}function h(e,n={},t={}){var o={setup:()=>()=>(0,i.h)(e,p(p({},n),t))},{unmount:a}=function(e){var n=(0,r.ri)(e),t=document.createElement("div");return document.body.appendChild(t),{instance:n.mount(t),unmount(){n.unmount(),document.body.removeChild(t)}}}(o);return{unmountInstance:a}}function b(e){var n=(0,o.qj)([]),t=(0,i.FN)();return(0,i.JJ)(e,{collect:e=>{var r;n.push(e),r=function(e){var n=[],t=e=>{null!=e&&e.component?t(null==e?void 0:e.component.subTree):Array.isArray(null==e?void 0:e.children)&&e.children.forEach((e=>{(0,i.lA)(e)&&(n.push(e),t(e))}))};return t(e),n}(t.subTree),n.sort(((e,n)=>r.indexOf(e.vnode)-r.indexOf(n.vnode)))},clear:e=>{(0,a.cl)(n,e)},instances:n}),{length:(0,i.Fl)((()=>n.length))}}function m(e){if(!x(e))return{index:null};var n=(0,i.f3)(e),{collect:t,clear:r,instances:o}=n,a=(0,i.FN)();return(0,i.bv)((()=>{(0,i.Y3)().then((()=>t(a)))})),(0,i.Ah)((()=>{(0,i.Y3)().then((()=>r(a)))})),{index:(0,i.Fl)((()=>o.indexOf(a)))}}function g(e){var n=[],t=e=>{n.push(e)},r=e=>{(0,a.cl)(n,e)};return{childProviders:n,bindChildren:n=>{(0,i.JJ)(e,p({collect:t,clear:r},n))}}}function y(e){if(!x(e))return{parentProvider:null,bindParent:null};var n=(0,i.f3)(e),{collect:t,clear:r}=n;return{parentProvider:u(n,l),bindParent:e=>{(0,i.bv)((()=>t(e))),(0,i.Jd)((()=>r(e)))}}}function x(e){return e in(0,i.FN)().provides}function w(){var e=(0,o.iH)(""),n=function(){var n=c((function*(n,t,r){return!(0,a.kJ)(n)||!n.length||!(yield Promise.all(n.map((e=>e(t,r))))).some((n=>!0!==n&&(e.value=String(n),!0)))}));return function(e,t,r){return n.apply(this,arguments)}}(),t=function(){var t=c((function*(t,r,i,o,a){t.includes(r)&&(yield n(i,o,a))&&(e.value="")}));return function(e,n,r,i,o){return t.apply(this,arguments)}}();return{errorMessage:e,validate:n,resetValidation:()=>{e.value=""},validateWithTrigger:t}}function k(e){(0,i.bv)((()=>{window.addEventListener("hashchange",e),window.addEventListener("popstate",e)})),(0,i.Ah)((()=>{window.removeEventListener("hashchange",e),window.removeEventListener("popstate",e)}))}function z(){var e=(0,o.iH)(!1);return(0,i.dl)((()=>{e.value=!1})),(0,i.se)((()=>{e.value=!0})),{disabled:e}}},526:(e,n,t)=>{"use strict";var r=t(2609),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".var-ripple {\n  position: absolute;\n  transition: transform 0.2s cubic-bezier(0.68, 0.01, 0.62, 0.6), opacity 0.08s linear;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  opacity: 0;\n  will-change: transform, opacity;\n  pointer-events: none;\n  z-index: 100;\n}\n",""]),n.Z=i},4352:(e,n,t)=>{"use strict";var r=t(2609),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n",""]),n.Z=i},8630:(e,n,t)=>{"use strict";var r=t(2609),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-ripple {\n  position: absolute;\n  transition: transform 0.2s cubic-bezier(0.68, 0.01, 0.62, 0.6), opacity 0.08s linear;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  opacity: 0;\n  will-change: transform, opacity;\n  pointer-events: none;\n  z-index: 100;\n}\n.var-image {\n  overflow: hidden;\n}\n.var-image__image {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n",""]),n.Z=i},3610:(e,n,t)=>{"use strict";var r=t(2609),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".fit-item[data-v-94f093ee] {\n  color: #888;\n  text-align: center;\n  margin-right: 11px;\n  margin-bottom: 11px;\n}\n.fit-item div[data-v-94f093ee] {\n  margin-bottom: 5px;\n}\n",""]),n.Z=i},4640:(e,n,t)=>{"use strict";var r=t(2609),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-row {\n  display: flex;\n  flex-wrap: wrap;\n}\n",""]),n.Z=i},1943:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>D});var r=t(7875),i=t(349),o=(0,r.HX)("data-v-94f093ee");(0,r.dD)("data-v-94f093ee");var a={class:"fit-item"},l=(0,r.Wm)("div",null,"fill",-1),s={class:"fit-item"},c=(0,r.Wm)("div",null,"cover",-1),u={class:"fit-item"},d=(0,r.Wm)("div",null,"contain",-1),p={class:"fit-item"},v=(0,r.Wm)("div",null,"none",-1),f={class:"fit-item"},h=(0,r.Wm)("div",null,"scale-down",-1);(0,r.Cn)();var b=o(((e,n,t,b,m,g)=>{var y=(0,r.up)("app-type"),x=(0,r.up)("var-image"),w=(0,r.up)("var-row");return(0,r.wg)(),(0,r.j4)(r.HY,null,[(0,r.Wm)(y,null,{default:o((()=>[(0,r.Uk)((0,i.zw)(b.pack.basicUsage),1)])),_:1}),(0,r.Wm)(x,{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),(0,r.Wm)(y,null,{default:o((()=>[(0,r.Uk)((0,i.zw)(b.pack.fitMode),1)])),_:1}),(0,r.Wm)(w,null,{default:o((()=>[(0,r.Wm)("div",a,[(0,r.Wm)(x,{width:"85px",height:"85px",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),l]),(0,r.Wm)("div",s,[(0,r.Wm)(x,{width:"85px",height:"85px",fit:"cover",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),c]),(0,r.Wm)("div",u,[(0,r.Wm)(x,{width:"85px",height:"85px",fit:"contain",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),d]),(0,r.Wm)("div",p,[(0,r.Wm)(x,{width:"85px",height:"85px",fit:"none",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),v]),(0,r.Wm)("div",f,[(0,r.Wm)(x,{width:"85px",height:"85px",fit:"scale-down",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),h])])),_:1}),(0,r.Wm)(y,null,{default:o((()=>[(0,r.Uk)((0,i.zw)(b.pack.setRadius),1)])),_:1}),(0,r.Wm)(w,null,{default:o((()=>[(0,r.Wm)(x,{width:"85px",height:"85px",fit:"cover",radius:10,src:"https://varlet.gitee.io/varlet-ui/cat.jpg",style:{"margin-right":"10px"}}),(0,r.Wm)(x,{width:"85px",height:"85px",fit:"cover",radius:"50%",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})])),_:1}),(0,r.Wm)(y,null,{default:o((()=>[(0,r.Uk)((0,i.zw)(b.pack.useRipple),1)])),_:1}),(0,r.Wm)(x,{ripple:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),(0,r.Wm)(y,null,{default:o((()=>[(0,r.Uk)((0,i.zw)(b.pack.useLazyLoad),1)])),_:1}),(0,r.Wm)(x,{lazy:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})],64)})),m=t(2986),g=t(3121),y={src:{type:String},fit:{type:String,validator:function(e){return["fill","contain","cover","none","scale-down"].includes(e)},default:"fill"},alt:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:{type:Function},onLoad:{type:Function},onError:{type:Function}},x=t(4268),w=(0,r.aZ)({name:"VarImage",directives:{Lazy:g.ZP,Ripple:m.Z},props:y,setup:e=>({toSizeUnit:x.gI,handleLoad:n=>{var t=n.currentTarget,{lazy:r,onLoad:i,onError:o}=e;r?("success"===t._lazy.state&&(null==i||i(n)),"error"===t._lazy.state&&(null==o||o(n))):null==i||i(n)},handleError:n=>{var{lazy:t,onError:r}=e;!t&&(null==r||r(n))}})}),k=t(6062),z=t.n(k),O=t(8630);z()(O.Z,{insert:"head",singleton:!1}),O.Z.locals,w.render=function(e,n,t,i,o,a){var l=(0,r.Q2)("lazy"),s=(0,r.Q2)("ripple");return(0,r.wy)(((0,r.wg)(),(0,r.j4)("div",{class:["var-image var--box",[e.block?null:"var--inline-block"]],style:{width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)}},[e.lazy?(0,r.wy)(((0,r.wg)(),(0,r.j4)("img",{key:0,class:"var-image__image",alt:e.alt,"lazy-error":e.error,"lazy-loading":e.loading,style:{objectFit:e.fit},onLoad:n[1]||(n[1]=(...n)=>e.handleLoad&&e.handleLoad(...n)),onError:n[2]||(n[2]=(...n)=>e.handleError&&e.handleError(...n)),onClick:n[3]||(n[3]=(...n)=>e.onClick&&e.onClick(...n))},null,44,["alt","lazy-error","lazy-loading"])),[[l,e.src]]):((0,r.wg)(),(0,r.j4)("img",{key:1,class:"var-image__image",alt:e.alt,style:{objectFit:e.fit},src:e.src,onLoad:n[4]||(n[4]=(...n)=>e.handleLoad&&e.handleLoad(...n)),onError:n[5]||(n[5]=(...n)=>e.handleError&&e.handleError(...n)),onClick:n[6]||(n[6]=(...n)=>e.onClick&&e.onClick(...n))},null,44,["alt","src"]))],6)),[[s,{disabled:!e.ripple}]])};var j=w;j.install=function(e){e.component(j.name,j)};var E=j,_=t(9524),P=t(9978),L=t(6125),C=t(8732),W=t(7245),S=t(9486),{add:Z,use:F,pack:R,packs:U,merge:N}=(0,S.bU)(),I=e=>{(0,S.D$)(e),F(e)};(0,S.IH)("zh-CN",C.Z),(0,S.IH)("en-US",W.Z),Z("zh-CN",{basicUsage:"基本使用",fitMode:"填充模式",setRadius:"设置圆角",useRipple:"开启水波",useLazyLoad:"开启懒加载"}),Z("en-US",{basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"});var A={name:"ImageExample",components:{[E.name]:E,[P.Z.name]:P.Z,AppType:_.Z},setup:()=>((0,L.jS)(I),{pack:R})},T=t(3610);z()(T.Z,{insert:"head",singleton:!1}),T.Z.locals,A.render=b,A.__scopeId="data-v-94f093ee";var D=A}}]);