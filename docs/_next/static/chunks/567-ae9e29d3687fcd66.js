"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[567],{5758:function(e,t,n){n.d(t,{R:function(){return i}});var r,i=((r=i||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},2217:function(e,t,n){n.d(t,{u:function(){return P}});var r,i=n(5196),o=n(6456),u=n(7558),l=n(5120),a=n(9629),s=n(4092),c=n(9410),f=n(5853),d=n(9809),m=n(2700);function v(e,...t){e&&t.length>0&&e.classList.add(...t)}function p(e,...t){e&&t.length>0&&e.classList.remove(...t)}var h=n(814),E=n(8344),g=n(4746);function b(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let w=(0,i.createContext)(null);w.displayName="TransitionContext";var y=((r=y||{}).Visible="visible",r.Hidden="hidden",r);let F=(0,i.createContext)(null);function O(e){return"children"in e?O(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function N(e,t){let n=(0,c.E)(e),r=(0,i.useRef)([]),u=(0,a.t)(),s=(0,h.G)(),f=(0,E.z)((e,t=o.l4.Hidden)=>{let i=r.current.findIndex(({el:t})=>t===e);-1!==i&&((0,l.E)(t,{[o.l4.Unmount](){r.current.splice(i,1)},[o.l4.Hidden](){r.current[i].state="hidden"}}),s.microTask(()=>{var e;!O(r)&&u.current&&(null==(e=n.current)||e.call(n))}))}),d=(0,E.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>f(e,o.l4.Unmount)}),m=(0,i.useRef)([]),v=(0,i.useRef)(Promise.resolve()),p=(0,i.useRef)({enter:[],leave:[],idle:[]}),g=(0,E.z)((e,n,r)=>{m.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{m.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(p.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?v.current=v.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),b=(0,E.z)((e,t,n)=>{Promise.all(p.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=m.current.shift())||e()}).then(()=>n(t))});return(0,i.useMemo)(()=>({children:r,register:d,unregister:f,onStart:g,onStop:b,wait:v,chains:p}),[d,f,r,g,b,p,v])}function S(){}F.displayName="NestingContext";let T=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function L(e){var t;let n={};for(let r of T)n[r]=null!=(t=e[r])?t:S;return n}let A=o.AN.RenderStrategy,k=(0,o.yV)(function(e,t){let{show:n,appear:r=!1,unmount:l=!0,...a}=e,c=(0,i.useRef)(null),m=(0,d.T)(c,t);(0,f.H)();let v=(0,u.oJ)();if(void 0===n&&null!==v&&(n=(v&u.ZM.Open)===u.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,h]=(0,i.useState)(n?"visible":"hidden"),g=N(()=>{h("hidden")}),[b,y]=(0,i.useState)(!0),S=(0,i.useRef)([n]);(0,s.e)(()=>{!1!==b&&S.current[S.current.length-1]!==n&&(S.current.push(n),y(!1))},[S,n]);let T=(0,i.useMemo)(()=>({show:n,appear:r,initial:b}),[n,r,b]);(0,i.useEffect)(()=>{if(n)h("visible");else if(O(g)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")},[n,g]);let L={unmount:l},k=(0,E.z)(()=>{var t;b&&y(!1),null==(t=e.beforeEnter)||t.call(e)}),M=(0,E.z)(()=>{var t;b&&y(!1),null==(t=e.beforeLeave)||t.call(e)});return i.createElement(F.Provider,{value:g},i.createElement(w.Provider,{value:T},(0,o.sY)({ourProps:{...L,as:i.Fragment,children:i.createElement(C,{ref:m,...L,...a,beforeEnter:k,beforeLeave:M})},theirProps:{},defaultTag:i.Fragment,features:A,visible:"visible"===p,name:"Transition"})))}),C=(0,o.yV)(function(e,t){var n,r,y;let S;let{beforeEnter:T,afterEnter:k,beforeLeave:C,afterLeave:M,enter:P,enterFrom:x,enterTo:j,entered:R,leave:H,leaveFrom:I,leaveTo:D,...z}=e,U=(0,i.useRef)(null),V=(0,d.T)(U,t),_=null==(n=z.unmount)||n?o.l4.Unmount:o.l4.Hidden,{show:Z,appear:B,initial:q}=function(){let e=(0,i.useContext)(w);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[G,W]=(0,i.useState)(Z?"visible":"hidden"),Y=function(){let e=(0,i.useContext)(F);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:$,unregister:J}=Y;(0,i.useEffect)(()=>$(U),[$,U]),(0,i.useEffect)(()=>{if(_===o.l4.Hidden&&U.current){if(Z&&"visible"!==G){W("visible");return}return(0,l.E)(G,{hidden:()=>J(U),visible:()=>$(U)})}},[G,U,$,J,Z,_]);let K=(0,c.E)({base:b(z.className),enter:b(P),enterFrom:b(x),enterTo:b(j),entered:b(R),leave:b(H),leaveFrom:b(I),leaveTo:b(D)}),X=(y={beforeEnter:T,afterEnter:k,beforeLeave:C,afterLeave:M},S=(0,i.useRef)(L(y)),(0,i.useEffect)(()=>{S.current=L(y)},[y]),S),Q=(0,f.H)();(0,i.useEffect)(()=>{if(Q&&"visible"===G&&null===U.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[U,G,Q]);let ee=B&&Z&&q,et=Q&&(!q||B)?Z?"enter":"leave":"idle",en=function(e=0){let[t,n]=(0,i.useState)(e),r=(0,a.t)(),o=(0,i.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),u=(0,i.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:o,hasFlag:u,removeFlag:(0,i.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,i.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),er=(0,E.z)(e=>(0,l.E)(e,{enter:()=>{en.addFlag(u.ZM.Opening),X.current.beforeEnter()},leave:()=>{en.addFlag(u.ZM.Closing),X.current.beforeLeave()},idle:()=>{}})),ei=(0,E.z)(e=>(0,l.E)(e,{enter:()=>{en.removeFlag(u.ZM.Opening),X.current.afterEnter()},leave:()=>{en.removeFlag(u.ZM.Closing),X.current.afterLeave()},idle:()=>{}})),eo=N(()=>{W("hidden"),J(U)},Y);!function({immediate:e,container:t,direction:n,classes:r,onStart:i,onStop:o}){let u=(0,a.t)(),f=(0,h.G)(),d=(0,c.E)(n);(0,s.e)(()=>{e&&(d.current="enter")},[e]),(0,s.e)(()=>{let e=(0,m.k)();f.add(e.dispose);let n=t.current;if(n&&"idle"!==d.current&&u.current){var a,s,c;let t,u,f,h,E,g,b;return e.dispose(),i.current(d.current),e.add((a=r.current,s="enter"===d.current,c=()=>{e.dispose(),o.current(d.current)},u=s?"enter":"leave",f=(0,m.k)(),h=void 0!==c?(t={called:!1},(...e)=>{if(!t.called)return t.called=!0,c(...e)}):()=>{},"enter"===u&&(n.removeAttribute("hidden"),n.style.display=""),E=(0,l.E)(u,{enter:()=>a.enter,leave:()=>a.leave}),g=(0,l.E)(u,{enter:()=>a.enterTo,leave:()=>a.leaveTo}),b=(0,l.E)(u,{enter:()=>a.enterFrom,leave:()=>a.leaveFrom}),p(n,...a.base,...a.enter,...a.enterTo,...a.enterFrom,...a.leave,...a.leaveFrom,...a.leaveTo,...a.entered),v(n,...a.base,...E,...b),f.nextFrame(()=>{p(n,...a.base,...E,...b),v(n,...a.base,...E,...g),function(e,t){let n=(0,m.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[o,u]=[r,i].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),l=o+u;if(0!==l){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},l),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(n,()=>(p(n,...a.base,...E),v(n,...a.base,...a.entered),h()))}),f.dispose)),e.dispose}},[n])}({immediate:ee,container:U,classes:K,direction:et,onStart:(0,c.E)(e=>{eo.onStart(U,e,er)}),onStop:(0,c.E)(e=>{eo.onStop(U,e,ei),"leave"!==e||O(eo)||(W("hidden"),J(U))})});let eu=z;return ee?eu={...eu,className:(0,g.A)(z.className,...K.current.enter,...K.current.enterFrom)}:(eu.className=(0,g.A)(z.className,null==(r=U.current)?void 0:r.className),""===eu.className&&delete eu.className),i.createElement(F.Provider,{value:eo},i.createElement(u.up,{value:(0,l.E)(G,{visible:u.ZM.Open,hidden:u.ZM.Closed})|en.flags},(0,o.sY)({ourProps:{ref:V},theirProps:eu,defaultTag:"div",features:A,visible:"visible"===G,name:"Transition.Child"})))}),M=(0,o.yV)(function(e,t){let n=null!==(0,i.useContext)(w),r=null!==(0,u.oJ)();return i.createElement(i.Fragment,null,!n&&r?i.createElement(k,{ref:t,...e}):i.createElement(C,{ref:t,...e}))}),P=Object.assign(k,{Child:M,Root:k})},814:function(e,t,n){n.d(t,{G:function(){return o}});var r=n(5196),i=n(2700);function o(){let[e]=(0,r.useState)(i.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},8344:function(e,t,n){n.d(t,{z:function(){return o}});var r=n(5196),i=n(9410);let o=function(e){let t=(0,i.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},5961:function(e,t,n){n.d(t,{M:function(){return a}});var r,i=n(5196),o=n(4092),u=n(5853),l=n(2602);let a=null!=(r=i.useId)?r:function(){let e=(0,u.H)(),[t,n]=i.useState(e?()=>l.O.nextId():null);return(0,o.e)(()=>{null===t&&n(l.O.nextId())},[t]),null!=t?""+t:void 0}},9629:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(5196),i=n(4092);function o(){let e=(0,r.useRef)(!1);return(0,i.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},4092:function(e,t,n){n.d(t,{e:function(){return o}});var r=n(5196),i=n(2602);let o=(e,t)=>{i.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},9410:function(e,t,n){n.d(t,{E:function(){return o}});var r=n(5196),i=n(4092);function o(e){let t=(0,r.useRef)(e);return(0,i.e)(()=>{t.current=e},[e]),t}},1835:function(e,t,n){n.d(t,{O:function(){return a}});var r=n(5196),i=n(2239),o=n(9410);function u(e,t,n){let i=(0,o.E)(t);(0,r.useEffect)(()=>{function t(e){i.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}var l=n(786);function a(e,t,n=!0){let o=(0,r.useRef)(!1);function a(n,r){if(!o.current||n.defaultPrevented)return;let u=r(n);if(null!==u&&u.getRootNode().contains(u)&&u.isConnected){for(let t of function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e)){if(null===t)continue;let e=t instanceof HTMLElement?t:t.current;if(null!=e&&e.contains(u)||n.composed&&n.composedPath().includes(e))return}return(0,i.sP)(u,i.tJ.Loose)||-1===u.tabIndex||n.preventDefault(),t(n,u)}}(0,r.useEffect)(()=>{requestAnimationFrame(()=>{o.current=n})},[n]);let s=(0,r.useRef)(null);u("pointerdown",e=>{var t,n;o.current&&(s.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),u("mousedown",e=>{var t,n;o.current&&(s.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),u("click",e=>{s.current&&(a(e,()=>s.current),s.current=null)},!0),u("touchend",e=>a(e,()=>e.target instanceof HTMLElement?e.target:null),!0),(0,l.s)("blur",e=>a(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}},1708:function(e,t,n){n.d(t,{f:function(){return u}});var r=n(5196),i=n(4092);function o(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function u(e,t){let[n,u]=(0,r.useState)(()=>o(e));return(0,i.e)(()=>{u(o(e))},[e.type,e.as]),(0,i.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&u("button")},[n,t]),n}},5853:function(e,t,n){n.d(t,{H:function(){return u}});var r,i=n(5196),o=n(2602);function u(){let e;let t=(e="undefined"==typeof document,(0,(r||(r=n.t(i,2))).useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[u,l]=i.useState(o.O.isHandoffComplete);return u&&!1===o.O.isHandoffComplete&&l(!1),i.useEffect(()=>{!0!==u&&l(!0)},[u]),i.useEffect(()=>o.O.handoff(),[]),!t&&u}},9809:function(e,t,n){n.d(t,{T:function(){return l},h:function(){return u}});var r=n(5196),i=n(8344);let o=Symbol();function u(e,t=!0){return Object.assign(e,{[o]:t})}function l(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,i.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[o]))?void 0:n}},786:function(e,t,n){n.d(t,{s:function(){return o}});var r=n(5196),i=n(9410);function o(e,t,n){let o=(0,i.E)(t);(0,r.useEffect)(()=>{function t(e){o.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}},7225:function(e,t,n){n.d(t,{A:function(){return o},_:function(){return u}});var r,i=n(6456),o=((r=o||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let u=(0,i.yV)(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,i.sY)({ourProps:o,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},7558:function(e,t,n){n.d(t,{ZM:function(){return u},oJ:function(){return l},up:function(){return a}});var r,i=n(5196);let o=(0,i.createContext)(null);o.displayName="OpenClosedContext";var u=((r=u||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function l(){return(0,i.useContext)(o)}function a({value:e,children:t}){return i.createElement(o.Provider,{value:e},t)}},6851:function(e,t,n){function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},4746:function(e,t,n){n.d(t,{A:function(){return r}});function r(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}},2700:function(e,t,n){n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,i)=>(e.addEventListener(t,r,i),n.add(()=>e.removeEventListener(t,r,i))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return(0,r.Y)(()=>{t.current&&e[0]()}),n.add(()=>{t.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}});var r=n(6913)},2602:function(e,t,n){n.d(t,{O:function(){return l}});var r=Object.defineProperty,i=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t,n)=>(i(e,"symbol"!=typeof t?t+"":t,n),n);class u{constructor(){o(this,"current",this.detect()),o(this,"handoffState","pending"),o(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}let l=new u},2239:function(e,t,n){n.d(t,{C5:function(){return g},GO:function(){return v},TO:function(){return f},fE:function(){return d},jA:function(){return w},sP:function(){return h},tJ:function(){return p},z2:function(){return b}});var r,i,o,u,l,a=n(5120),s=n(9099);let c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var f=((r=f||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),d=((i=d||{})[i.Error=0]="Error",i[i.Overflow=1]="Overflow",i[i.Success=2]="Success",i[i.Underflow=3]="Underflow",i),m=((o=m||{})[o.Previous=-1]="Previous",o[o.Next=1]="Next",o);function v(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(c)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var p=((u=p||{})[u.Strict=0]="Strict",u[u.Loose=1]="Loose",u);function h(e,t=0){var n;return e!==(null==(n=(0,s.r)(e))?void 0:n.body)&&(0,a.E)(t,{0:()=>e.matches(c),1(){let t=e;for(;null!==t;){if(t.matches(c))return!0;t=t.parentElement}return!1}})}var E=((l=E||{})[l.Keyboard=0]="Keyboard",l[l.Mouse=1]="Mouse",l);function g(e){null==e||e.focus({preventScroll:!0})}function b(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),i=t(n);if(null===r||null===i)return 0;let o=r.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function w(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){var o,u,l;let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?b(e):e:v(e);i.length>0&&s.length>1&&(s=s.filter(e=>!i.includes(e))),r=null!=r?r:a.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=32&t?{preventScroll:!0}:{},m=0,p=s.length,h;do{if(m>=p||m+p<=0)return 0;let e=f+m;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}null==(h=s[e])||h.focus(d),m+=c}while(h!==a.activeElement);return 6&t&&null!=(l=null==(u=null==(o=h)?void 0:o.matches)?void 0:u.call(o,"textarea,input"))&&l&&h.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0))},5120:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let i=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,r),i}},6913:function(e,t,n){n.d(t,{Y:function(){return r}});function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}},9099:function(e,t,n){n.d(t,{r:function(){return i}});var r=n(2602);function i(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},6456:function(e,t,n){n.d(t,{AN:function(){return a},l4:function(){return s},oA:function(){return v},sY:function(){return c},yV:function(){return m}});var r,i,o=n(5196),u=n(4746),l=n(5120),a=((r=a||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((i=s||{})[i.Unmount=0]="Unmount",i[i.Hidden=1]="Hidden",i);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:o=!0,name:u}){let a=d(t,e);if(o)return f(a,n,r,u);let s=null!=i?i:0;if(2&s){let{static:e=!1,...t}=a;if(e)return f(t,n,r,u)}if(1&s){let{unmount:e=!0,...t}=a;return(0,l.E)(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},n,r,u)})}return f(a,n,r,u)}function f(e,t={},n,r){let{as:i=n,children:l,refName:a="ref",...s}=p(e,["unmount","static"]),c=void 0!==e.ref?{[a]:e.ref}:{},f="function"==typeof l?l(t):l;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let m={};if(t){let e=!1,n=[];for(let[r,i]of Object.entries(t))"boolean"==typeof i&&(e=!0),!0===i&&n.push(r);e&&(m["data-headlessui-state"]=n.join(" "))}if(i===o.Fragment&&Object.keys(v(s)).length>0){if(!(0,o.isValidElement)(f)||Array.isArray(f)&&f.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=f.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,u.A)(null==e?void 0:e.className(...t),s.className):(0,u.A)(null==e?void 0:e.className,s.className);return(0,o.cloneElement)(f,Object.assign({},d(f.props,v(p(s,["ref"]))),m,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(f.ref,c.ref),t?{className:t}:{}))}return(0,o.createElement)(i,Object.assign({},p(s,["ref"]),i!==o.Fragment&&c,i!==o.Fragment&&m),f)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let i of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;i(t,...r)}}});return t}function m(e){var t;return Object.assign((0,o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function v(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function p(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}},5651:function(e,t,n){var r=n(5196);let i=r.forwardRef(function({title:e,titleId:t,...n},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"}),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"}))});t.Z=i},6040:function(e,t,n){var r=n(5196);let i=r.forwardRef(function({title:e,titleId:t,...n},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"}))});t.Z=i},965:function(e,t,n){var r=n(5196);let i=r.forwardRef(function({title:e,titleId:t,...n},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"}))});t.Z=i}}]);