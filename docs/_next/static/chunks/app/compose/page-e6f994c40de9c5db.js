(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[107],{5356:function(e,t,n){Promise.resolve().then(n.bind(n,2066))},4080:function(e,t,n){"use strict";n.d(t,{Ae:function(){return s},_N:function(){return l},fz:function(){return a}});var r=n(897),i=n(7684);i.Z.defaults.headers.post["Content-Type"]="application/json";let o=i.Z.create({baseURL:"/api/v1/",timeout:1e3,headers:{}});function l(){return(0,r.ZP)(o.baseURL+"/articles.json",()=>o({url:"/articles.json"}))}function a(e){return(0,r.ZP)(o.baseURL+"/".concat(e,".json"),()=>o({url:"/".concat(e,".json")}))}function s(e){return o({url:"/articles",method:"POST",data:e})}o.interceptors.request.use(...[function(e){return e},function(e){return Promise.reject(e)}]),o.interceptors.response.use(...[function(e){return e},function(e){return Promise.reject(e)}])},2066:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return en}});var r,i,o,l,a,s=n(6771),u=n(7560),c=n.n(u),d=n(5196),p=n(814),f=n(5961),v=n(4092),b=n(9410);function x(e,t){let[n,r]=(0,d.useState)(e),i=(0,b.E)(e);return(0,v.e)(()=>r(i.current),[i,r,...t]),n}var g=n(9809),m=n(6456),h=n(5120),R=n(2700),y=n(5758),O=((r=O||{})[r.First=0]="First",r[r.Previous=1]="Previous",r[r.Next=2]="Next",r[r.Last=3]="Last",r[r.Specific=4]="Specific",r[r.Nothing=5]="Nothing",r),w=n(6851),S=n(2239),L=n(7558),I=n(1708),j=n(1835),T=n(7225);function E(e,t){return e?e+"["+t+"]":t}var D=n(9099),k=n(8344);function P(e){return[e.screenX,e.screenY]}let C=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function z(e){var t,n;let r=null!=(t=e.innerText)?t:"",i=e.cloneNode(!0);if(!(i instanceof HTMLElement))return r;let o=!1;for(let e of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))e.remove(),o=!0;let l=o?null!=(n=i.innerText)?n:"":r;return C.test(l)&&(l=l.replace(C,"")),l}var F=((i=F||{})[i.Open=0]="Open",i[i.Closed=1]="Closed",i),N=((o=N||{})[o.Single=0]="Single",o[o.Multi=1]="Multi",o),M=((l=M||{})[l.Pointer=0]="Pointer",l[l.Other=1]="Other",l),A=((a=A||{})[a.OpenListbox=0]="OpenListbox",a[a.CloseListbox=1]="CloseListbox",a[a.GoToOption=2]="GoToOption",a[a.Search=3]="Search",a[a.ClearSearch=4]="ClearSearch",a[a.RegisterOption=5]="RegisterOption",a[a.UnregisterOption=6]="UnregisterOption",a[a.RegisterLabel=7]="RegisterLabel",a);function Z(e,t=e=>e){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=(0,S.z2)(t(e.options.slice()),e=>e.dataRef.current.domRef.current),i=n?r.indexOf(n):null;return -1===i&&(i=null),{options:r,activeOptionIndex:i}}let q={1:e=>e.dataRef.current.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.dataRef.current.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex(e=>n(e.dataRef.current.value));return -1!==r&&(t=r),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||1===e.listboxState)return e;let r=Z(e),i=function(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),i=null!=r?r:-1,o=(()=>{switch(e.focus){case 0:return n.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=n.slice().reverse().findIndex((e,n,r)=>(-1===i||!(r.length-n-1>=i))&&!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 2:return n.findIndex((e,n)=>!(n<=i)&&!t.resolveDisabled(e));case 3:{let e=n.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 4:return n.findIndex(n=>t.resolveId(n)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===o?r:o}(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:i,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{if(e.dataRef.current.disabled||1===e.listboxState)return e;let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),i=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))}),o=i?e.options.indexOf(i):-1;return -1===o||o===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:o,activationTrigger:1}},4:e=>e.dataRef.current.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},5:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},r=Z(e,e=>[...e,n]);return null===e.activeOptionIndex&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},6:(e,t)=>{let n=Z(e,e=>{let n=e.findIndex(e=>e.id===t.id);return -1!==n&&e.splice(n,1),e});return{...e,...n,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},B=(0,d.createContext)(null);function U(e){let t=(0,d.useContext)(B);if(null===t){let t=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,U),t}return t}B.displayName="ListboxActionsContext";let Q=(0,d.createContext)(null);function V(e){let t=(0,d.useContext)(Q);if(null===t){let t=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,V),t}return t}function _(e,t){return(0,h.E)(t.type,q,e,t)}Q.displayName="ListboxDataContext";let $=d.Fragment,G=m.AN.RenderStrategy|m.AN.Static,H=Object.assign((0,m.yV)(function(e,t){let{value:n,defaultValue:r,form:i,name:o,onChange:l,by:a=(e,t)=>e===t,disabled:s=!1,horizontal:u=!1,multiple:c=!1,...f}=e,b=u?"horizontal":"vertical",x=(0,g.T)(t),[R=c?[]:void 0,y]=function(e,t,n){let[r,i]=(0,d.useState)(n),o=void 0!==e,l=(0,d.useRef)(o),a=(0,d.useRef)(!1),s=(0,d.useRef)(!1);return!o||l.current||a.current?o||!l.current||s.current||(s.current=!0,l.current=o,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(a.current=!0,l.current=o,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[o?e:r,(0,k.z)(e=>(o||i(e),null==t?void 0:t(e)))]}(n,l,r),[w,I]=(0,d.useReducer)(_,{dataRef:(0,d.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),D=(0,d.useRef)({static:!1,hold:!1}),P=(0,d.useRef)(null),C=(0,d.useRef)(null),z=(0,d.useRef)(null),F=(0,k.z)("string"==typeof a?(e,t)=>(null==e?void 0:e[a])===(null==t?void 0:t[a]):a),N=(0,d.useCallback)(e=>(0,h.E)(M.mode,{1:()=>R.some(t=>F(t,e)),0:()=>F(R,e)}),[R]),M=(0,d.useMemo)(()=>({...w,value:R,disabled:s,mode:c?1:0,orientation:b,compare:F,isSelected:N,optionsPropsRef:D,labelRef:P,buttonRef:C,optionsRef:z}),[R,s,c,w]);(0,v.e)(()=>{w.dataRef.current=M},[M]),(0,j.O)([M.buttonRef,M.optionsRef],(e,t)=>{var n;I({type:1}),(0,S.sP)(t,S.tJ.Loose)||(e.preventDefault(),null==(n=M.buttonRef.current)||n.focus())},0===M.listboxState);let A=(0,d.useMemo)(()=>({open:0===M.listboxState,disabled:s,value:R}),[M,s,R]),Z=(0,k.z)(e=>{let t=M.options.find(t=>t.id===e);t&&K(t.dataRef.current.value)}),q=(0,k.z)(()=>{if(null!==M.activeOptionIndex){let{dataRef:e,id:t}=M.options[M.activeOptionIndex];K(e.current.value),I({type:2,focus:O.Specific,id:t})}}),U=(0,k.z)(()=>I({type:0})),V=(0,k.z)(()=>I({type:1})),G=(0,k.z)((e,t,n)=>e===O.Specific?I({type:2,focus:O.Specific,id:t,trigger:n}):I({type:2,focus:e,trigger:n})),H=(0,k.z)((e,t)=>(I({type:5,id:e,dataRef:t}),()=>I({type:6,id:e}))),Y=(0,k.z)(e=>(I({type:7,id:e}),()=>I({type:7,id:null}))),K=(0,k.z)(e=>(0,h.E)(M.mode,{0:()=>null==y?void 0:y(e),1(){let t=M.value.slice(),n=t.findIndex(t=>F(t,e));return -1===n?t.push(e):t.splice(n,1),null==y?void 0:y(t)}})),J=(0,k.z)(e=>I({type:3,value:e})),W=(0,k.z)(()=>I({type:4})),X=(0,d.useMemo)(()=>({onChange:K,registerOption:H,registerLabel:Y,goToOption:G,closeListbox:V,openListbox:U,selectActiveOption:q,selectOption:Z,search:J,clearSearch:W}),[]),ee=(0,d.useRef)(null),et=(0,p.G)();return(0,d.useEffect)(()=>{ee.current&&void 0!==r&&et.addEventListener(ee.current,"reset",()=>{null==y||y(r)})},[ee,y]),d.createElement(B.Provider,{value:X},d.createElement(Q.Provider,{value:M},d.createElement(L.up,{value:(0,h.E)(M.listboxState,{0:L.ZM.Open,1:L.ZM.Closed})},null!=o&&null!=R&&(function e(t={},n=null,r=[]){for(let[i,o]of Object.entries(t))!function t(n,r,i){if(Array.isArray(i))for(let[e,o]of i.entries())t(n,E(r,e.toString()),o);else i instanceof Date?n.push([r,i.toISOString()]):"boolean"==typeof i?n.push([r,i?"1":"0"]):"string"==typeof i?n.push([r,i]):"number"==typeof i?n.push([r,`${i}`]):null==i?n.push([r,""]):e(i,r,n)}(r,E(n,i),o);return r})({[o]:R}).map(([e,t],n)=>d.createElement(T._,{features:T.A.Hidden,ref:0===n?e=>{var t;ee.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,m.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,name:e,value:t})})),(0,m.sY)({ourProps:{ref:x},theirProps:f,slot:A,defaultTag:$,name:"Listbox"}))))}),{Button:(0,m.yV)(function(e,t){var n;let r=(0,f.M)(),{id:i=`headlessui-listbox-button-${r}`,...o}=e,l=V("Listbox.Button"),a=U("Listbox.Button"),s=(0,g.T)(l.buttonRef,t),u=(0,p.G)(),c=(0,k.z)(e=>{switch(e.key){case y.R.Space:case y.R.Enter:case y.R.ArrowDown:e.preventDefault(),a.openListbox(),u.nextFrame(()=>{l.value||a.goToOption(O.First)});break;case y.R.ArrowUp:e.preventDefault(),a.openListbox(),u.nextFrame(()=>{l.value||a.goToOption(O.Last)})}}),v=(0,k.z)(e=>{e.key===y.R.Space&&e.preventDefault()}),b=(0,k.z)(e=>{if((0,w.P)(e.currentTarget))return e.preventDefault();0===l.listboxState?(a.closeListbox(),u.nextFrame(()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(e.preventDefault(),a.openListbox())}),h=x(()=>{if(l.labelId)return[l.labelId,i].join(" ")},[l.labelId,i]),R=(0,d.useMemo)(()=>({open:0===l.listboxState,disabled:l.disabled,value:l.value}),[l]),S={ref:s,id:i,type:(0,I.f)(e,l.buttonRef),"aria-haspopup":"listbox","aria-controls":null==(n=l.optionsRef.current)?void 0:n.id,"aria-expanded":0===l.listboxState,"aria-labelledby":h,disabled:l.disabled,onKeyDown:c,onKeyUp:v,onClick:b};return(0,m.sY)({ourProps:S,theirProps:o,slot:R,defaultTag:"button",name:"Listbox.Button"})}),Label:(0,m.yV)(function(e,t){let n=(0,f.M)(),{id:r=`headlessui-listbox-label-${n}`,...i}=e,o=V("Listbox.Label"),l=U("Listbox.Label"),a=(0,g.T)(o.labelRef,t);(0,v.e)(()=>l.registerLabel(r),[r]);let s=(0,k.z)(()=>{var e;return null==(e=o.buttonRef.current)?void 0:e.focus({preventScroll:!0})}),u=(0,d.useMemo)(()=>({open:0===o.listboxState,disabled:o.disabled}),[o]);return(0,m.sY)({ourProps:{ref:a,id:r,onClick:s},theirProps:i,slot:u,defaultTag:"label",name:"Listbox.Label"})}),Options:(0,m.yV)(function(e,t){var n;let r=(0,f.M)(),{id:i=`headlessui-listbox-options-${r}`,...o}=e,l=V("Listbox.Options"),a=U("Listbox.Options"),s=(0,g.T)(l.optionsRef,t),u=(0,p.G)(),c=(0,p.G)(),v=(0,L.oJ)(),b=null!==v?(v&L.ZM.Open)===L.ZM.Open:0===l.listboxState;(0,d.useEffect)(()=>{var e;let t=l.optionsRef.current;t&&0===l.listboxState&&t!==(null==(e=(0,D.r)(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})},[l.listboxState,l.optionsRef]);let w=(0,k.z)(e=>{switch(c.dispose(),e.key){case y.R.Space:if(""!==l.searchQuery)return e.preventDefault(),e.stopPropagation(),a.search(e.key);case y.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==l.activeOptionIndex){let{dataRef:e}=l.options[l.activeOptionIndex];a.onChange(e.current.value)}0===l.mode&&(a.closeListbox(),(0,R.k)().nextFrame(()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case(0,h.E)(l.orientation,{vertical:y.R.ArrowDown,horizontal:y.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),a.goToOption(O.Next);case(0,h.E)(l.orientation,{vertical:y.R.ArrowUp,horizontal:y.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),a.goToOption(O.Previous);case y.R.Home:case y.R.PageUp:return e.preventDefault(),e.stopPropagation(),a.goToOption(O.First);case y.R.End:case y.R.PageDown:return e.preventDefault(),e.stopPropagation(),a.goToOption(O.Last);case y.R.Escape:return e.preventDefault(),e.stopPropagation(),a.closeListbox(),u.nextFrame(()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})});case y.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(a.search(e.key),c.setTimeout(()=>a.clearSearch(),350))}}),S=x(()=>{var e,t,n;return null!=(n=null==(e=l.labelRef.current)?void 0:e.id)?n:null==(t=l.buttonRef.current)?void 0:t.id},[l.labelRef.current,l.buttonRef.current]),I=(0,d.useMemo)(()=>({open:0===l.listboxState}),[l]),j={"aria-activedescendant":null===l.activeOptionIndex||null==(n=l.options[l.activeOptionIndex])?void 0:n.id,"aria-multiselectable":1===l.mode||void 0,"aria-labelledby":S,"aria-orientation":l.orientation,id:i,onKeyDown:w,role:"listbox",tabIndex:0,ref:s};return(0,m.sY)({ourProps:j,theirProps:o,slot:I,defaultTag:"ul",features:G,visible:b,name:"Listbox.Options"})}),Option:(0,m.yV)(function(e,t){let n,r,i;let o=(0,f.M)(),{id:l=`headlessui-listbox-option-${o}`,disabled:a=!1,value:s,...u}=e,c=V("Listbox.Option"),p=U("Listbox.Option"),x=null!==c.activeOptionIndex&&c.options[c.activeOptionIndex].id===l,h=c.isSelected(s),y=(0,d.useRef)(null),w=(n=(0,d.useRef)(""),r=(0,d.useRef)(""),(0,k.z)(()=>{let e=y.current;if(!e)return"";let t=e.innerText;if(n.current===t)return r.current;let i=(function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let e=n.split(" ").map(e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():z(t).trim()}return null}).filter(Boolean);if(e.length>0)return e.join(", ")}return z(e).trim()})(e).trim().toLowerCase();return n.current=t,r.current=i,i})),S=(0,b.E)({disabled:a,value:s,domRef:y,get textValue(){return w()}}),L=(0,g.T)(t,y);(0,v.e)(()=>{if(0!==c.listboxState||!x||0===c.activationTrigger)return;let e=(0,R.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=y.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[y,x,c.listboxState,c.activationTrigger,c.activeOptionIndex]),(0,v.e)(()=>p.registerOption(l,S),[S,l]);let I=(0,k.z)(e=>{if(a)return e.preventDefault();p.onChange(s),0===c.mode&&(p.closeListbox(),(0,R.k)().nextFrame(()=>{var e;return null==(e=c.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))}),j=(0,k.z)(()=>{if(a)return p.goToOption(O.Nothing);p.goToOption(O.Specific,l)}),T=(i=(0,d.useRef)([-1,-1]),{wasMoved(e){let t=P(e);return(i.current[0]!==t[0]||i.current[1]!==t[1])&&(i.current=t,!0)},update(e){i.current=P(e)}}),E=(0,k.z)(e=>T.update(e)),D=(0,k.z)(e=>{T.wasMoved(e)&&(a||x||p.goToOption(O.Specific,l,0))}),C=(0,k.z)(e=>{T.wasMoved(e)&&(a||x&&p.goToOption(O.Nothing))}),F=(0,d.useMemo)(()=>({active:x,selected:h,disabled:a}),[x,h,a]);return(0,m.sY)({ourProps:{id:l,ref:L,role:"option",tabIndex:!0===a?void 0:-1,"aria-disabled":!0===a||void 0,"aria-selected":h,disabled:void 0,onClick:I,onFocus:j,onPointerEnter:E,onMouseEnter:E,onPointerMove:D,onMouseMove:D,onPointerLeave:C,onMouseLeave:C},theirProps:u,slot:F,defaultTag:"li",name:"Listbox.Option"})})});var Y=n(2217);let K=d.forwardRef(function({title:e,titleId:t,...n},r){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?d.createElement("title",{id:t},e):null,d.createElement("path",{fillRule:"evenodd",d:"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",clipRule:"evenodd"}))}),J=d.forwardRef(function({title:e,titleId:t,...n},r){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?d.createElement("title",{id:t},e):null,d.createElement("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",clipRule:"evenodd"}))});var W=n(9083),X=n(4080);function ee(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}var et=[["bold","italic","underline","strike"],["link","image"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]],en=function(){let e=(0,d.useRef)(null),t=(0,d.useRef)(null),n=(0,d.useRef)(null),[r,i]=(0,d.useState)(W.D[0]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("link",{href:"https://cdn.quilljs.com/1.3.6/quill.snow.css",rel:"stylesheet"}),(0,s.jsxs)("div",{className:"flex w-full gap-6 justify-between items-center mb-6",children:[(0,s.jsx)(H,{value:r,onChange:i,children:e=>{let{open:t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)(H.Button,{className:"relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6",children:[(0,s.jsx)("span",{className:"flex items-center",children:(0,s.jsx)("span",{className:"ml-3 block truncate",children:r.label})}),(0,s.jsx)("span",{className:"pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2",children:(0,s.jsx)(K,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),(0,s.jsx)(Y.u,{show:t,as:d.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)(H.Options,{className:"absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:W.D.map(e=>(0,s.jsx)(H.Option,{className:e=>{let{active:t}=e;return ee(t?"bg-indigo-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9")},value:e,children:t=>{let{selected:n,active:r}=t;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsx)("span",{className:ee(n?"font-semibold":"font-normal","ml-3 block truncate"),children:e.label})}),n?(0,s.jsx)("span",{className:ee(r?"text-white":"text-indigo-600","absolute inset-y-0 right-0 flex items-center pr-4"),children:(0,s.jsx)(J,{className:"h-5 w-5","aria-hidden":"true"})}):null]})}},e.value))})})]})})}}),(0,s.jsx)("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",children:(0,s.jsx)("input",{ref:n,type:"text",name:"title",id:"title",autoComplete:"标题",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:"请输入标题"})}),(0,s.jsx)("button",{type:"submit",className:"flex w-64 justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:()=>{(0,X.Ae)({title:n.current.value,content:e.current.getContents(),desc:e.current.getText().slice(0,100),type:r.value})},children:"保存"})]}),(0,s.jsx)("div",{id:"toolbar"}),(0,s.jsx)("div",{id:"editor",style:{"min-height":"18rem"},children:(0,s.jsx)("p",{children:"Hello World!"})}),(0,s.jsx)("input",{ref:t,type:"file",style:{display:"none"}}),(0,s.jsx)(c(),{src:"https://cdn.quilljs.com/1.3.6/quill.js",onReady:()=>{let n=new Quill("#editor",{modules:{toolbar:et},theme:"snow"});var r=n.getModule("toolbar");r.addHandler("link",function(e){if(e){var t=prompt("Enter the URL");this.quill.format("link",t)}else this.quill.format("link",!1)}),t.current.addEventListener("change",e=>{let t=new FormData;t.append("file",e.target.files[0]),t.append("name","xxxx")}),r.addHandler("image",function(e){e?t.current.click():this.quill.format("image",!1)}),e.current=n}})]})}},9083:function(e,t,n){"use strict";n.d(t,{D:function(){return l}});var r=n(5651),i=n(965),o=n(6040);let l=[{label:"前端开发",description:"一入前端深似海",value:"frontend",icon:r.Z},{label:"后端开发",description:"而今迈步从头越",value:"backend",icon:i.Z},{label:"算法",description:"衣带渐宽终不悔",value:"algorithm",icon:o.Z},{label:"杂谈",description:"惯看秋月春风",value:"misc",icon:o.Z},{label:"诗歌",description:"老骥伏枥，志在千里",value:"poetry",icon:r.Z}]}},function(e){e.O(0,[160,560,567,579,304,744],function(){return e(e.s=5356)}),_N_E=e.O()}]);