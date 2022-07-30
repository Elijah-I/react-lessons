(()=>{"use strict";var e,r,t,n,o,a,i,c={519:(e,r,t)=>{t.d(r,{Z:()=>n});const n={user:"KTpaw9UX7e6DLDW7KoSB",user__data:"iKBPqelyqcPMeBlXoApA",todo:"fAGnvcoY8ynxvHVdPkHA",todo__create:"YwS8UrmBsAF3kdalEMpQ",todo__button:"hlmGAYteLxTJwKoj1lqQ",todo__list:"N_bpQziGXo1FLHUa7ySA",todo__item:"QuTxUXsDQ2DX1Kc_cud5",todo__value:"RDlSY7za1LhTfx61gK1g",todo__remove:"yHSJ46MKw7yCQrK6qH4H",todo__done:"UepX8XK2E1fih25AfBmS",todo__item_done:"sMVwyEyJhg7C0G71QxJw"};var o=t(134)(e.id,{locals:!0});e.hot.dispose(o)},623:(e,r,t)=>{var n,o=t(378),a=t(634),i=t(290),c=(0,i.oM)({name:"user",initialState:{firstName:"",lastName:""},reducers:{setFirstName:function(e,r){e.firstName=r.payload},setLastName:function(e,r){e.lastName=r.payload}}});const d=c.reducer;var l,s=(n=c.actions).setFirstName,u=n.setLastName,f={current:"",list:JSON.parse(localStorage.getItem("todo.list")||"[]")},p=(0,i.oM)({name:"todo",initialState:f,reducers:{storeTodo:function(e,r){e.current=r.payload},addTodo:function(e,r){e.list.push({id:Date.now(),value:r.payload,done:!1}),localStorage.setItem("todo.list",JSON.stringify(e.list))},doneTodo:function(e,r){var t=e.list.findIndex((function(e){return e.id===r.payload}));e.list[t].done=!e.list[t].done,localStorage.setItem("todo.list",JSON.stringify(e.list))},deleteTodo:function(e,r){e.list=e.list.filter((function(e){return e.id!==r.payload})),localStorage.setItem("todo.list",JSON.stringify(e.list))}}});const h=p.reducer;var m=(l=p.actions).storeTodo,v=l.addTodo,y=l.doneTodo,g=l.deleteTodo;const _=(0,i.xC)({reducer:{user:d,todo:h}});var E=t(780),b=t(519),w=function(e){var r=e.type,t=e.placeholder,n=e.action;return o.createElement("input",{type:r,placeholder:t,onChange:n})},I=E.v9,D=function(){var e=I((function(e){return e.todo.list})),r=(0,E.I0)(),t=e.map((function(e){var t={main:e.done?"".concat(b.Z.todo__item," ").concat(b.Z.todo__item_done):b.Z.todo__item,done:"".concat(b.Z.todo__button," ").concat(b.Z.todo__done),remove:"".concat(b.Z.todo__button," ").concat(b.Z.todo__remove)};return o.createElement("div",{className:t.main,key:e.id},o.createElement("div",{className:t.done,onClick:function(){return t=e.id,r(y(t));var t}},"done"),o.createElement("div",{className:b.Z.todo__value},e.value),o.createElement("div",{className:t.remove,onClick:function(){return t=e.id,r(g(t));var t}},"del"))}));return o.createElement("div",{className:b.Z.todo__list},t)},N=function(){var e=I((function(e){return e.todo.current})),r=(0,E.I0)();return o.createElement("div",{className:b.Z.todo__create},o.createElement(w,{type:"text",placeholder:"todo",action:function(e){return r(m(e.target.value))}}),o.createElement("div",{className:b.Z.todo__button,onClick:function(){return r(v(e))}},"add"))};a.s(document.getElementById("root")).render(o.createElement(o.StrictMode,null,o.createElement(E.zt,{store:_},o.createElement((function(){var e=I((function(e){return[e.user.firstName,e.user.lastName]})),r=e[0],t=e[1],n=(0,E.I0)();return o.createElement("div",{className:b.Z.user},o.createElement(w,{type:"text",placeholder:"First name",action:function(e){return n(s(e.target.value))}}),o.createElement(w,{type:"text",placeholder:"Last name",action:function(e){return n(u(e.target.value))}}),o.createElement("div",{className:b.Z.user__data},o.createElement("div",null,r),o.createElement("div",null,t)))}),null),o.createElement((function(){return o.createElement("div",{className:b.Z.todo},o.createElement(N,null),o.createElement(D,null))}),null))))}},d={};function l(e){var r=d[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var t=d[e]={id:e,exports:{}};try{var n={id:e,module:t,factory:c[e],require:l};l.i.forEach((function(e){e(n)})),t=n.module,n.factory.call(t.exports,t,t.exports,n.require)}catch(e){throw t.error=e,e}return t.exports}l.m=c,l.c=d,l.i=[],e=[],l.O=(r,t,n,o)=>{if(!t){var a=1/0;for(s=0;s<e.length;s++){for(var[t,n,o]=e[s],i=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(l.O).every((e=>l.O[e](t[c])))?t.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(s--,1);var d=n();void 0!==d&&(r=d)}}return r}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[t,n,o]},l.d=(e,r)=>{for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.hu=e=>e+"."+l.h()+".hot-update.js",l.miniCssF=e=>{},l.hmrF=()=>"app."+l.h()+".hot-update.json",l.h=()=>"39f6c6ad746c3b3ebb3a",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},l.l=(e,t,n,o)=>{if(r[e])r[e].push(t);else{var a,i;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var s=c[d];if(s.getAttribute("src")==e){a=s;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.src=e),r[e]=[t];var u=(t,n)=>{a.onerror=a.onload=null,clearTimeout(f);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),i&&document.head.appendChild(a)}},(()=>{var e,r,t,n={},o=l.c,a=[],i=[],c="idle",d=0,s=[];function u(e){c=e;for(var r=[],t=0;t<i.length;t++)r[t]=i[t].call(null,e);return Promise.all(r)}function f(){0==--d&&u("ready").then((function(){if(0===d){var e=s;s=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return u("check").then(l.hmrM).then((function(t){return t?u("prepare").then((function(){var n=[];return r=[],Promise.all(Object.keys(l.hmrC).reduce((function(e,o){return l.hmrC[o](t.c,t.r,t.m,e,r,n),e}),[])).then((function(){return r=function(){return e?m(e):u("ready").then((function(){return n}))},0===d?r():new Promise((function(e){s.push((function(){e(r())}))}));var r}))})):u(v()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+c+")")})):m(e)}function m(e){e=e||{},v();var n=r.map((function(r){return r(e)}));r=void 0;var o=n.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var a=u("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var i,c=u("apply"),d=function(e){i||(i=e)},l=[];return n.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var t=0;t<r.length;t++)l.push(r[t])}})),Promise.all([a,c]).then((function(){return i?u("fail").then((function(){throw i})):t?m(e).then((function(e){return l.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):u("idle").then((function(){return l}))}))}function v(){if(t)return r||(r=[]),Object.keys(l.hmrI).forEach((function(e){t.forEach((function(t){l.hmrI[e](t,r)}))})),t=void 0,!0}l.hmrD=n,l.i.push((function(s){var m,v,y,g,_=s.module,E=function(r,t){var n=o[t];if(!n)return r;var i=function(i){if(n.hot.active){if(o[i]){var c=o[i].parents;-1===c.indexOf(t)&&c.push(t)}else a=[t],e=i;-1===n.children.indexOf(i)&&n.children.push(i)}else console.warn("[HMR] unexpected require("+i+") from disposed module "+t),a=[];return r(i)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&"e"!==s&&Object.defineProperty(i,s,l(s));return i.e=function(e){return function(e){switch(c){case"ready":u("prepare");case"prepare":return d++,e.then(f,f),e;default:return e}}(r.e(e))},i}(s.require,s.id);_.hot=(m=s.id,v=_,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==m,_requireSelf:function(){a=v.parents.slice(),e=y?void 0:m,l(m)},active:!0,accept:function(e,r,t){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)g._acceptedDependencies[e[n]]=r||function(){},g._acceptedErrorHandlers[e[n]]=t;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=t},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,r)})),u("ready");break;case"ready":Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:p,apply:h,status:function(e){if(!e)return c;i.push(e)},addStatusHandler:function(e){i.push(e)},removeStatusHandler:function(e){var r=i.indexOf(e);r>=0&&i.splice(r,1)},data:n[m]},e=void 0,g),_.parents=a,_.children=[],a=[],s.require=E})),l.hmrC={},l.hmrI={}})(),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var r=l.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e+"../"})(),t=(e,r,t,n)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=c,o.parentNode.removeChild(o),n(d)}},o.href=r,document.head.appendChild(o),o},n=(e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}},o=[],a=[],i=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var r=o[e];r.parentNode&&r.parentNode.removeChild(r)}o.length=0},apply:()=>{for(var e=0;e<a.length;e++)a[e].rel="stylesheet";a.length=0}}),l.hmrC.miniCss=(e,r,c,d,s,u)=>{s.push(i),e.forEach((e=>{var r=l.miniCssF(e),i=l.p+r,c=n(r,i);c&&d.push(new Promise(((r,n)=>{var d=t(e,i,(()=>{d.as="style",d.rel="preload",r()}),n);o.push(c),a.push(d)})))}))},(()=>{var e,r,t,n,o,a=l.hmrS_jsonp=l.hmrS_jsonp||{143:0},i={};function c(r,t){return e=t,new Promise(((e,t)=>{i[r]=e;var n=l.p+l.hu(r),o=new Error;l.l(n,(e=>{if(i[r]){i[r]=void 0;var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+r+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,t(o)}}))}))}function d(e){function i(e){for(var r=[e],t={},n=r.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),a=o.id,i=o.chain,d=l.c[a];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(d.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var s=0;s<d.parents.length;s++){var u=d.parents[s],f=l.c[u];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([u]),moduleId:a,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[a]?(t[u]||(t[u]=[]),c(t[u],[a])):(delete t[u],r.push(u),n.push({chain:i.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}l.f&&delete l.f.jsonpHmr,r=void 0;var d={},s=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in t)if(l.o(t,p)){var h,m=t[p],v=!1,y=!1,g=!1,_="";switch((h=m?i(p):{type:"disposed",moduleId:p}).chain&&(_="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+_));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+_));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+_));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(y)for(p in u[p]=m,c(s,h.outdatedModules),h.outdatedDependencies)l.o(h.outdatedDependencies,p)&&(d[p]||(d[p]=[]),c(d[p],h.outdatedDependencies[p]));g&&(c(s,[h.moduleId]),u[p]=f)}t=void 0;for(var E,b=[],w=0;w<s.length;w++){var I=s[w],D=l.c[I];D&&(D.hot._selfAccepted||D.hot._main)&&u[I]!==f&&!D.hot._selfInvalidated&&b.push({module:I,require:D.hot._requireSelf,errorHandler:D.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete a[e]})),n=void 0;for(var r,t=s.slice();t.length>0;){var o=t.pop(),i=l.c[o];if(i){var c={},u=i.hot._disposeHandlers;for(w=0;w<u.length;w++)u[w].call(null,c);for(l.hmrD[o]=c,i.hot.active=!1,delete l.c[o],delete d[o],w=0;w<i.children.length;w++){var f=l.c[i.children[w]];f&&((e=f.parents.indexOf(o))>=0&&f.parents.splice(e,1))}}}for(var p in d)if(l.o(d,p)&&(i=l.c[p]))for(E=d[p],w=0;w<E.length;w++)r=E[w],(e=i.children.indexOf(r))>=0&&i.children.splice(e,1)},apply:function(r){for(var t in u)l.o(u,t)&&(l.m[t]=u[t]);for(var n=0;n<o.length;n++)o[n](l);for(var a in d)if(l.o(d,a)){var i=l.c[a];if(i){E=d[a];for(var c=[],f=[],p=[],h=0;h<E.length;h++){var m=E[h],v=i.hot._acceptedDependencies[m],y=i.hot._acceptedErrorHandlers[m];if(v){if(-1!==c.indexOf(v))continue;c.push(v),f.push(y),p.push(m)}}for(var g=0;g<c.length;g++)try{c[g].call(null,E)}catch(t){if("function"==typeof f[g])try{f[g](t,{moduleId:a,dependencyId:p[g]})}catch(n){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:a,dependencyId:p[g],error:n,originalError:t}),e.ignoreErrored||(r(n),r(t))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:a,dependencyId:p[g],error:t}),e.ignoreErrored||r(t)}}}for(var _=0;_<b.length;_++){var w=b[_],I=w.module;try{w.require(I)}catch(t){if("function"==typeof w.errorHandler)try{w.errorHandler(t,{moduleId:I,module:l.c[I]})}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:n,originalError:t}),e.ignoreErrored||(r(n),r(t))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:I,error:t}),e.ignoreErrored||r(t)}}return s}}}self.webpackHotUpdate=(r,n,a)=>{for(var c in n)l.o(n,c)&&(t[c]=n[c],e&&e.push(c));a&&o.push(a),i[r]&&(i[r](),i[r]=void 0)},l.hmrI.jsonp=function(e,r){t||(t={},o=[],n=[],r.push(d)),l.o(t,e)||(t[e]=l.m[e])},l.hmrC.jsonp=function(e,i,s,u,f,p){f.push(d),r={},n=i,t=s.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],e.forEach((function(e){l.o(a,e)&&void 0!==a[e]?(u.push(c(e,p)),r[e]=!0):r[e]=!1})),l.f&&(l.f.jsonpHmr=function(e,t){r&&l.o(r,e)&&!r[e]&&(t.push(c(e)),r[e]=!0)})},l.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(l.p+l.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},l.O.j=e=>0===a[e];var s=(e,r)=>{var t,n,[o,i,c]=r,d=0;if(o.some((e=>0!==a[e]))){for(t in i)l.o(i,t)&&(l.m[t]=i[t]);if(c)var s=c(l)}for(e&&e(r);d<o.length;d++)n=o[d],l.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return l.O(s)},u=self.webpackChunk=self.webpackChunk||[];u.forEach(s.bind(null,0)),u.push=s.bind(null,u.push.bind(u))})();var s=l.O(void 0,[969],(()=>l(623)));s=l.O(s)})();