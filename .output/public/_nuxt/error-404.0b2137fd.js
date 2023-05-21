import{y as _,s as k,V as T,G as S,bD as q,z as w,T as P,J as A,S as C,q as I,bE as R,bF as z,bG as B,bH as E,h as L,a as V,b as j,o as U,e as D,f as v,t as x,l as H,W as M,p as O,aV as F,aT as $}from"./entry.1f9f5688.js";const y=globalThis.requestIdleCallback||(e=>{const a=Date.now(),s={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{e(s)},1)}),G=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),J=e=>{const a=_();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{y(e)}):y(e)};async function N(e,a=k()){const{path:s,matched:t}=a.resolve(e);if(!t.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(s)))return;const r=a._preloadPromises=a._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>N(e,a));a._routePreloaded.add(s);const o=t.map(n=>{var l;return(l=n.components)==null?void 0:l.default}).filter(n=>typeof n=="function");for(const n of o){const l=Promise.resolve(n()).catch(()=>{}).finally(()=>r.splice(r.indexOf(l)));r.push(l)}await Promise.all(r)}const Q=(...e)=>e.find(a=>a!==void 0),W="noopener noreferrer";function X(e){const a=e.componentName||"NuxtLink",s=(t,r)=>{if(!t||e.trailingSlash!=="append"&&e.trailingSlash!=="remove")return t;const o=e.trailingSlash==="append"?B:E;if(typeof t=="string")return o(t,!0);const n="path"in t?t.path:r(t).path;return{...t,name:void 0,path:o(n,!0)}};return T({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:r}){const o=k(),n=S(()=>{const i=t.to||t.href||"";return s(i,o.resolve)}),l=S(()=>t.external||t.target&&t.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||q(n.value,{acceptRelative:!0})),f=w(!1),d=w(null);if(t.prefetch!==!1&&t.noPrefetch!==!0&&t.target!=="_blank"&&!Z()){const m=_();let h,c=null;P(()=>{const g=Y();J(()=>{h=y(()=>{var p;(p=d==null?void 0:d.value)!=null&&p.tagName&&(c=g.observe(d.value,async()=>{c==null||c(),c=null;const u=typeof n.value=="string"?n.value:o.resolve(n.value).fullPath;await Promise.all([m.hooks.callHook("link:prefetch",u).catch(()=>{}),!l.value&&N(n.value,o).catch(()=>{})]),f.value=!0}))})})}),A(()=>{h&&G(h),c==null||c(),c=null})}return()=>{var g,p;if(!l.value){const u={ref:b=>{d.value=b==null?void 0:b.$el},to:n.value,activeClass:t.activeClass||e.activeClass,exactActiveClass:t.exactActiveClass||e.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom};return t.custom||(f.value&&(u.class=t.prefetchedClass||e.prefetchedClass),u.rel=t.rel),C(I("RouterLink"),u,r.default)}const i=typeof n.value=="object"?((g=o.resolve(n.value))==null?void 0:g.href)??null:n.value||null,m=t.target||null,h=t.noRel?null:Q(t.rel,e.externalRelAttribute,i?W:"")||null,c=()=>L(i,{replace:t.replace});return t.custom?r.default?r.default({href:i,navigate:c,get route(){if(!i)return;const u=R(i);return{path:u.pathname,fullPath:u.pathname,get query(){return z(u.search)},hash:u.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:i}},rel:h,target:m,isExternal:l.value,isActive:!1,isExactActive:!1}):null:C("a",{ref:d,href:i,rel:h,target:m},(p=r.default)==null?void 0:p.call(r))}}})}const K=X({componentName:"NuxtLink"});function Y(){const e=_();if(e._observer)return e._observer;let a=null;const s=new Map,t=(o,n)=>(a||(a=new IntersectionObserver(l=>{for(const f of l){const d=s.get(f.target);(f.isIntersecting||f.intersectionRatio>0)&&d&&d()}})),s.set(o,n),a.observe(o),()=>{s.delete(o),a.unobserve(o),s.size===0&&(a.disconnect(),a=null)});return e._observer={observe:t}}function Z(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const ee=e=>(F("data-v-30d2164e"),e=e(),$(),e),te={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},ae=ee(()=>v("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),ne={class:"max-w-520px text-center z-20"},re=["textContent"],oe=["textContent"],se={class:"w-full flex items-center justify-center"},le={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(e){const a=e;return j({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(s,t)=>{const r=K;return U(),D("div",te,[ae,v("div",ne,[v("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:x(e.statusCode)},null,8,re),v("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:x(e.description)},null,8,oe),v("div",se,[H(r,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:M(()=>[O(x(e.backHome),1)]),_:1})])])])}}},ce=V(le,[["__scopeId","data-v-30d2164e"]]);export{ce as default};
