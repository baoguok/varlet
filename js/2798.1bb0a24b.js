(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[2798],{5495:(n,e,a)=>{"use strict";var t=a(2609),o=a.n(t)()((function(n){return n[1]}));o.push([n.id,"\n.btn-container[data-v-46a712db] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n.block[data-v-46a712db] {\n  background: #ff9f00;\n  color: white;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.colon[data-v-46a712db] {\n  margin: 0 5px;\n  font-size: 18px;\n  font-weight: 500;\n}\n",""]),e.Z=o},9917:(n,e,a)=>{"use strict";var t=a(2609),o=a.n(t)()((function(n){return n[1]}));o.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n",""]),e.Z=o},2798:(n,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>B});var t=a(7875),o=a(349),l=(0,t.HX)("data-v-46a712db");(0,t.dD)("data-v-46a712db");var s={class:"block"},i=(0,t.Wm)("span",{class:"colon"},":",-1),r={class:"block"},u=(0,t.Wm)("span",{class:"colon"},":",-1),c={class:"block"},m={class:"btn-container"};(0,t.Cn)();var d=l(((n,e,a,d,p,f)=>{var v=(0,t.up)("app-type"),b=(0,t.up)("var-countdown"),w=(0,t.up)("var-button");return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)("div",null,[(0,t.Wm)(v,null,{default:l((()=>[(0,t.Uk)((0,o.zw)(d.pack.basicUsage),1)])),_:1}),(0,t.Wm)(b,{time:"108000000"})]),(0,t.Wm)("div",null,[(0,t.Wm)(v,null,{default:l((()=>[(0,t.Uk)((0,o.zw)(d.pack.customFormat),1)])),_:1}),(0,t.Wm)(b,{time:"108000000",format:d.pack.format},null,8,["format"])]),(0,t.Wm)("div",null,[(0,t.Wm)(v,null,{default:l((()=>[(0,t.Uk)((0,o.zw)(d.pack.showMillisecond),1)])),_:1}),(0,t.Wm)(b,{time:"108000000",format:"HH : mm : ss : SS"})]),(0,t.Wm)("div",null,[(0,t.Wm)(v,null,{default:l((()=>[(0,t.Uk)((0,o.zw)(d.pack.customStyle),1)])),_:1}),(0,t.Wm)(b,{time:"108000000"},{default:l((n=>[(0,t.Wm)("span",s,(0,o.zw)(n.hours),1),i,(0,t.Wm)("span",r,(0,o.zw)(n.minutes),1),u,(0,t.Wm)("span",c,(0,o.zw)(n.seconds),1)])),_:1})]),(0,t.Wm)("div",null,[(0,t.Wm)(v,null,{default:l((()=>[(0,t.Uk)((0,o.zw)(d.pack.manualControl),1)])),_:1}),(0,t.Wm)(b,{time:d.time,ref:"countdown","auto-start":!1,format:"ss : SSS",onEnd:d.end,onChange:d.change},null,8,["time","onEnd","onChange"]),(0,t.Wm)("div",m,[(0,t.Wm)(w,{type:"primary",onClick:e[1]||(e[1]=e=>n.$refs.countdown.start())},{default:l((()=>[(0,t.Uk)((0,o.zw)(d.pack.startText),1)])),_:1}),(0,t.Wm)(w,{onClick:e[2]||(e[2]=e=>n.$refs.countdown.pause())},{default:l((()=>[(0,t.Uk)((0,o.zw)(d.pack.pauseText),1)])),_:1}),(0,t.Wm)(w,{onClick:e[3]||(e[3]=e=>n.$refs.countdown.reset())},{default:l((()=>[(0,t.Uk)((0,o.zw)(d.pack.resetText),1)])),_:1})])])],64)})),p=a(9524),f={class:"var-countdown"},v=a(641),b={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}},w=a(4268),k=a(8442),h=36e5,x=24*h,g=(0,t.aZ)({name:"VarCountdown",props:b,setup(n){var e=(0,v.iH)(0),a=(0,v.iH)(!1),o=(0,v.iH)(""),l=(0,v.iH)(0),s=(0,v.iH)(0),i=(0,v.iH)({}),r=()=>{var{time:t,onEnd:u,autoStart:c}=n,m=Date.now();e.value||(e.value=m+(0,k.He)(t));var d=e.value-m;d<0&&(d=0),s.value=d,(e=>{var a,t={days:Math.floor(e/x),hours:Math.floor(e%x/h),minutes:Math.floor(e%h/6e4),seconds:Math.floor(e%6e4/1e3),milliseconds:Math.floor(e%1e3)};i.value=t,null===(a=n.onChange)||void 0===a||a.call(n,i.value),o.value=(0,k.Ou)(n.format,t)})(d),0!==d?(c||a.value)&&(l.value=(0,w.U7)(r)):null==u||u()},u=()=>{e.value=0,a.value=!1,(0,w.Wx)(l.value),r()};return(0,t.YP)((()=>n.time),(()=>u()),{immediate:!0}),{showTime:o,timeData:i,start:()=>{a.value||(a.value=!0,e.value=Date.now()+(s.value||(0,k.He)(n.time)),r())},pause:()=>{a.value=!1},reset:u}}}),y=a(6062),z=a.n(y),W=a(9917);z()(W.Z,{insert:"head",singleton:!1}),W.Z.locals,g.render=function(n,e,a,l,s,i){return(0,t.wg)(),(0,t.j4)("div",f,[(0,t.WI)(n.$slots,"default",n.timeData,(()=>[(0,t.Uk)((0,o.zw)(n.showTime),1)]))])};var H=g;H.install=function(n){n.component(H.name,H)};var C=H,S=a(6544),U=a(4733),_=a(8732),Z=a(7245),T=a(9486),{add:D,use:M,pack:F,packs:j,merge:E}=(0,T.bU)(),$=n=>{(0,T.D$)(n),M(n)};(0,T.IH)("zh-CN",_.Z),(0,T.IH)("en-US",Z.Z),D("zh-CN",{basicUsage:"基本使用",customFormat:"自定义格式",showMillisecond:"显示毫秒",customStyle:"自定义样式",manualControl:"手动控制",format:"DD 天 HH 时 mm 分 ss 秒",startText:"开始",pauseText:"暂停",resetText:"重置"}),D("en-US",{basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"});var I=a(6125),N={name:"CountdownExample",components:{[C.name]:C,[U.Z.name]:U.Z,AppType:p.Z},setup(){var n=(0,v.iH)(null),e=(0,v.iH)(3e3);return(0,I.jS)($),{time:e,pack:F,end:()=>{S.ZP.info("end!")},countdown:n,change:()=>{}}}},P=a(5495);z()(P.Z,{insert:"head",singleton:!1}),P.Z.locals,N.render=d,N.__scopeId="data-v-46a712db";var B=N}}]);