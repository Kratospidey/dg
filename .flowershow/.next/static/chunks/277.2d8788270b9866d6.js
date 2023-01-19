"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{2277:function(r,e,t){t.r(e),t.d(e,{KBarSearchProvider:function(){return q}});var a=t(7578),n=t(5893),s=t(1163),i=t.n(s),c=t(1606),o=t(7294),l=t(9284);t(1664),t(2010),t(5152),t(9008),t(8043);var d=l.s.charAt,u=a.z,h=a.t,v=Math.floor,f=u("".charAt),x=u("".replace),p=u("".slice),g=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,m=/\$([$&'`]|\d{1,2})/g,b=a.U,k=a.k,y=a.z,j=a.V,w=a.f,R=a.E,N=a.i,A=a.W,$=a.T,P=a.X,B=a.x,S=a.S,_=a.Y,K=function(r,e,t,a,n,s){var i=t+r.length,c=a.length,o=m;return void 0!==n&&(n=h(n),o=g),x(s,o,function(s,o){var l;switch(f(o,0)){case"$":return"$";case"&":return r;case"`":return p(e,0,t);case"'":return p(e,i);case"<":l=n[p(o,1,-1)];break;default:var d=+o;if(0===d)return s;if(d>c){var u=v(d/10);if(0===u)return s;if(u<=c)return void 0===a[u-1]?f(o,1):a[u-1]+f(o,1);return s}l=a[d-1]}return void 0===l?"":l})},C=a.Z,z=(0,a.w)("replace"),D=Math.max,E=Math.min,M=y([].concat),I=y([].push),U=y("".indexOf),H=y("".slice),L="$0"==="a".replace(/./,"$0"),T=!!/./[z]&&""===/./[z]("a","$0");j("replace",function(r,e,t){var a=T?"$":"$0";return[function(r,t){var a=S(this),n=A(r)?void 0:_(r,z);return n?k(n,r,a,t):k(e,B(a),r,t)},function(r,n){var s=R(this),i=B(r);if("string"==typeof n&&-1===U(n,a)&&-1===U(n,"$<")){var c=t(e,s,i,n);if(c.done)return c.value}var o=N(n);o||(n=B(n));var l=s.global;if(l){var u=s.unicode;s.lastIndex=0}for(var h=[];;){var v,f=C(s,i);if(null===f||(I(h,f),!l))break;""===B(f[0])&&(s.lastIndex=(v=P(s.lastIndex))+(u?d(i,v).length:1))}for(var x="",p=0,g=0;g<h.length;g++){for(var m,k=B((f=h[g])[0]),y=D(E($(f.index),i.length),0),j=[],w=1;w<f.length;w++)I(j,void 0===(m=f[w])?m:String(m));var A=f.groups;if(o){var S=M([k],j,y,i);void 0!==A&&I(S,A);var _=B(b(n,void 0,S))}else _=K(k,i,y,j,A,n);y>=p&&(x+=H(i,p,y)+_,p=y+k.length)}return x+H(i,p)}]},!!w(function(){var r=/./;return r.exec=function(){var r=[];return r.groups={a:"7"},r},"7"!=="".replace(r,"$<a>")})||!L||T);var W=function(r){var e=r.split("/").slice(-1)[0].replace("-"," ");return e.charAt(0).toUpperCase()+e.slice(1)},O=function(r){for(var e,t,n,s=[],c=function(r){r.url_path&&s.push({id:r.url_path,name:null!==(e=r.title)&&void 0!==e?e:W(r.url_path),keywords:null!==(t=r.description)&&void 0!==t?t:"",section:null!==(n=r.sourceDir)&&void 0!==n?n:"Page",subtitle:r.date&&(0,a.$)(r.date,"en-US"),perform:function(){return i().push("/".concat(r.url_path))}})},o=0;o<r.length;o++)c(r[o]);return s},V=function(r){var e=r.searchDocumentsPath,t=(0,o.useState)([]),s=t[0],i=t[1];return(0,o.useEffect)(function(){(0,a.a0)(void 0,void 0,void 0,function(){return(0,a.a1)(this,function(r){switch(r.label){case 0:return[4,fetch(e)];case 1:return[4,r.sent().json()];case 2:return i(O(r.sent())),[2]}})})},[e]),(0,c.useRegisterActions)(s,[s]),(0,n.jsx)(c.KBarPortal,{children:(0,n.jsx)(c.KBarPositioner,(0,a.R)({className:"bg-gray-300/50 p-4 backdrop-blur backdrop-filter dark:bg-black/50"},{children:(0,n.jsx)(c.KBarAnimator,(0,a.R)({className:"w-full max-w-xl"},{children:(0,n.jsxs)("div",(0,a.R)({className:"overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"},{children:[(0,n.jsxs)("div",(0,a.R)({className:"flex items-center space-x-4 p-4"},{children:[(0,n.jsx)("span",(0,a.R)({className:"block w-5"},{children:(0,n.jsx)("svg",(0,a.R)({className:"text-gray-400 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},{children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}))})),(0,n.jsx)(c.KBarSearch,{className:"h-8 w-full bg-transparent text-slate-600 placeholder-slate-400 focus:outline-none dark:text-slate-200 dark:placeholder-slate-500"}),(0,n.jsx)("span",(0,a.R)({className:"inline-block whitespace-nowrap rounded border border-slate-400/70 px-1.5 align-middle font-medium leading-4 tracking-wide text-slate-500 [font-size:10px] dark:border-slate-600 dark:text-slate-400"},{children:"ESC"}))]})),(0,n.jsx)(Y,{})]}))}))}))})};function X(r){var e=r.item,t=r.active;return(0,n.jsx)("div",{children:"string"==typeof e?(0,n.jsx)("div",(0,a.R)({className:"pt-3"},{children:(0,n.jsx)("div",(0,a.R)({className:"text-primary-600 block border-t border-gray-100 px-4 pt-6 pb-2 text-xs font-semibold uppercase dark:border-gray-800"},{children:e}))})):(0,n.jsxs)("div",(0,a.R)({className:"block cursor-pointer px-4 py-2 text-gray-600 dark:text-gray-200 ".concat(t?"bg-primary-600":"bg-transparent")},{children:[(null==e?void 0:e.subtitle)&&(0,n.jsx)("div",(0,a.R)({className:"".concat(t?"text-gray-200":"text-gray-400 dark:text-gray-500"," text-xs")},{children:e.subtitle})),(0,n.jsx)("div",{children:null==e?void 0:e.name})]}))})}function Y(){var r=(0,c.useMatches)().results;return r.length?(0,n.jsx)(c.KBarResults,{items:r,onRender:X}):(0,n.jsx)("div",(0,a.R)({className:"block border-t border-gray-100 px-4 py-8 text-center text-gray-400 dark:border-gray-800 dark:text-gray-600"},{children:"No results for your search..."}))}var Z=function(r){var e=r.searchDocumentsPath,t=r.startingActions,s=r.children;return(0,n.jsxs)(c.KBarProvider,(0,a.R)({actions:t},{children:[(0,n.jsx)(V,{searchDocumentsPath:e}),s]}))},q=function(r){var e=r.config,t=r.children,s=null==e?void 0:e.defaultActions,c=[{id:"homepage",name:"Homepage",keywords:"",section:"Home",perform:function(){return i().push("/")}}];return s&&Array.isArray(s)&&(c=(0,a.a2)((0,a.a2)([],c,!0),s,!0)),Z?(0,n.jsx)(Z,(0,a.R)({startingActions:c,searchDocumentsPath:"search.json"},{children:t})):t}},9284:function(r,e,t){t.d(e,{s:function(){return h}});var a=t(7578),n=a.z,s=a.T,i=a.x,c=a.S,o=n("".charAt),l=n("".charCodeAt),d=n("".slice),u=function(r){return function(e,t){var a,n,u=i(c(e)),h=s(t),v=u.length;return h<0||h>=v?r?"":void 0:(a=l(u,h))<55296||a>56319||h+1===v||(n=l(u,h+1))<56320||n>57343?r?o(u,h):a:r?d(u,h,h+2):(a-55296<<10)+(n-56320)+65536}},h={codeAt:u(!1),charAt:u(!0)}}}]);