webpackJsonp([5],{"4fGa":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".__nuxt-error-page{background:#f5f7fa;font-size:14px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-align:center}.__nuxt-error-page .container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100vh;margin:0 auto;max-width:70%}.__nuxt-error-page .poweredby{text-align:center;margin-top:10%}.__nuxt-error-page a{color:#42b983!important}",""])},"FZ+f":function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},HQKa:function(t,e,n){var r=n("4fGa");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("889db7b2",r,!0)},Lvp0:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".progress[data-v-cb10784c]{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},MU8w:function(t,e,n){"use strict";t.exports=n("hKoQ").polyfill()},PPJj:function(t,e,n){var r=n("Lvp0");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("85f531e8",r,!0)},SldL:function(t,e,n){(function(e){!function(e){"use strict";function n(t,e,n,r){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),s=new d(r||[]);return a._invoke=c(t,n,s),a}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function n(e,o,i,a){var s=r(t[e],t,o);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&x.call(c,"__await")?Promise.resolve(c.__await).then(function(t){n("next",t,i,a)},function(t){n("throw",t,i,a)}):Promise.resolve(c).then(function(t){u.value=t,i(u)},a)}a(s.arg)}function o(t,e){function r(){return new Promise(function(r,o){n(t,e,r,o)})}return i=i?i.then(r,r):r()}"object"==typeof e.process&&e.process.domain&&(n=e.process.domain.bind(n));var i;this._invoke=o}function c(t,e,n){var o=k;return function(i,a){if(o===R)throw new Error("Generator is already running");if(o===L){if("throw"===i)throw a;return v()}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var u=f(s,n);if(u){if(u===j)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===k)throw o=L,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=R;var c=r(t,e,n);if("normal"===c.type){if(o=n.done?L:$,c.arg===j)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=L,n.method="throw",n.arg=c.arg)}}}function f(t,e){var n=t.iterator[e.method];if(n===m){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=m,f(t,e),"throw"===e.method))return j;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,j;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=m),e.delegate=null,j):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,j)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function h(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(x.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=m,e.done=!0,e};return r.next=r}}return{next:v}}function v(){return{value:m,done:!0}}var m,y=Object.prototype,x=y.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},w=g.iterator||"@@iterator",_=g.asyncIterator||"@@asyncIterator",b=g.toStringTag||"@@toStringTag",C="object"==typeof t,E=e.regeneratorRuntime;if(E)return void(C&&(t.exports=E));E=e.regeneratorRuntime=C?t.exports:{},E.wrap=n;var k="suspendedStart",$="suspendedYield",R="executing",L="completed",j={},T={};T[w]=function(){return this};var N=Object.getPrototypeOf,S=N&&N(N(h([])));S&&S!==y&&x.call(S,w)&&(T=S);var U=a.prototype=o.prototype=Object.create(T);i.prototype=U.constructor=a,a.constructor=i,a[b]=i.displayName="GeneratorFunction",E.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},E.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(U),t},E.awrap=function(t){return{__await:t}},s(u.prototype),u.prototype[_]=function(){return this},E.AsyncIterator=u,E.async=function(t,e,r,o){var i=new u(n(t,e,r,o));return E.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},s(U),U[b]="Generator",U[w]=function(){return this},U.toString=function(){return"[object Generator]"},E.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},E.values=h,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&x.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=m),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=x.call(o,"catchLoc"),s=x.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&x.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,j):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),j},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),p(n),j}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;p(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:h(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=m),j}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,n("DuR2"))},T23V:function(t,e,n){"use strict";function r(){return new at.default({mode:"history",base:"/vue-examples/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:ft,routes:[{path:"/",component:st,name:"index"},{path:"/services",component:ut,name:"services"},{path:"/about",component:ct,name:"about"}],fallback:!1})}function o(t){n("HQKa")}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.options.data||$t;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.options.name]),rt()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function a(t){return t.options?(t._Ctor=t,t.extendOptions=t.options):(t=q.default.extend(t),t._Ctor=t),!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t}function s(t){return[].concat.apply([],t.matched.map(function(t){return V()(t.components).map(function(e){return t.components[e]})}))}function u(t){return[].concat.apply([],t.matched.map(function(t){return V()(t.instances).map(function(e){return t.instances[e]})}))}function c(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return V()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function f(t,e){var n={isServer:!!t.isServer,isClient:!!t.isClient,isStatic:!0,isDev:!1,app:e,store:t.store,route:t.to?t.to:t.route,payload:t.payload,error:t.error,base:"/vue-examples/",env:{},hotReload:t.hotReload||!1},r=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t,e,o){t&&(n._redirected=!0,"string"!=typeof t||void 0!==e&&"object"!==(void 0===e?"undefined":S()(e))||(o=e||{},e=t,t=302),r({path:e,query:o,status:t}))},t.req&&(n.req=t.req),t.res&&(n.res=t.res),t.from&&(n.from=t.from),n.isServer&&t.beforeRenderFns&&(n.beforeNuxtRender=function(e){return t.beforeRenderFns.push(e)}),n}function l(t,e){return!t.length||e._redirected?F.a.resolve():p(t[0],e).then(function(){return l(t.slice(1),e)})}function p(t,e){var n=void 0;return n=2===t.length?new F.a(function(n){t(e,function(t,r){t&&e.error(t),r=r||{},n(r)})}):t(e),n&&(n instanceof F.a||"function"==typeof n.then)||(n=F.a.resolve(n)),n}function d(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function h(t,e){return x(v(t,e))}function v(t,e){for(var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";null!=(n=Rt.exec(t));){var u=n[0],c=n[1],f=n.index;if(a+=t.slice(i,f),i=f+u.length,c)a+=c[1];else{var l=t[i],p=n[2],d=n[3],h=n[4],v=n[5],m=n[6],y=n[7];a&&(r.push(a),a="");var x=null!=p&&null!=l&&l!==p,_="+"===m||"*"===m,b="?"===m||"*"===m,C=n[2]||s,E=h||v;r.push({name:d||o++,prefix:p||"",delimiter:C,optional:b,repeat:_,partial:x,asterisk:!!y,pattern:E?w(E):y?".*":"[^"+g(C)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function m(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function y(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function x(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===S()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},s=a.pretty?m:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var f,l=i[c.name];if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+kt()(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(f=s(l[p]),!e[u].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+kt()(f)+"`");o+=(0===p?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?y(l):s(l),!e[u].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');o+=c.prefix+f}}else o+=c}return o}}function g(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function w(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function _(t){n("PPJj")}function b(t){var e=ne(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}function E(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return n.apply(void 0,o)}return n}function k(t,e,n){var r=function(t){var r=E(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=G()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);V()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function $(t){var e=d(t.options.base);return c(t.match(e),function(t,e,n,r,o){if("function"!=typeof t||t.options){var s=a(t);return n.components[r]=s,s}return t().then(function(t){var e=a(t);return $e.serverRendered&&(i(e,$e.data[o]),$e.components&&(t.options.components=G()(e.options.components,$e.components[o])),e._Ctor=e),n.components[r]=e,e})})}function R(t,e,n){var r=this,o=[],i=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"!=typeof et[t]&&(i=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),et[t]}),!i)return l(o,e)}function L(t,e){c(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":S()(t))||t.options||(t=q.default.extend(t),t._Ctor=t,n.components[r]=t),t})}function j(t,e){var n=this;this._hashChanged||q.default.nextTick(function(){var e=u(t);be=e.map(function(t,e){if(!t)return"";if(_e[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)q.default.set(t.$data,r,n[r])}return t.constructor.options.__file}),n._hadError&&n._dateLastError===n.$options._nuxt.dateErr&&n.error();var r=n.$options._nuxt.err?Ct.layout:t.matched[0].components.default.options.layout;"function"==typeof r&&(r=r(n._context)),n.setLayout(r)})}function T(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),Ee.afterEach(function(e,n){t.$nuxt.$emit("routeChanged",e,n)})}Object.defineProperty(e,"__esModule",{value:!0});var N=n("pFYg"),S=n.n(N),U=n("Xxa5"),O=n.n(U),A=n("//Fk"),F=n.n(A),M=n("exGp"),P=n.n(M),D=n("fZjL"),V=n.n(D),I=n("woOf"),G=n.n(I),q=n("/5sW"),z=n("BO1k"),B=n.n(z),K=n("p5rU"),X=K.keys(),J={},Y=!0,Q=!1,Z=void 0;try{for(var H,W=B()(X);!(Y=(H=W.next()).done);Y=!0){var tt=H.value;J[tt.replace(/^\.\//,"").replace(/\.(js|ts)$/,"")]=function(t){var e=K(t);return e.default?e.default:e}(tt)}}catch(t){Q=!0,Z=t}finally{try{!Y&&W.return&&W.return()}finally{if(Q)throw Z}}var et=J,nt=n("Dd8w"),rt=n.n(nt),ot=(n("MU8w"),n("p3jY")),it=n.n(ot),at=n("/ocq");q.default.use(at.default);var st=function(){return n.e(0).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})},ut=function(){return n.e(2).then(n.bind(null,"682L")).then(function(t){return t.default||t})},ct=function(){return n.e(3).then(n.bind(null,"yPeL")).then(function(t){return t.default||t})},ft=function(t,e,n){if(n)return n;var r={};return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),t.hash&&(r={selector:t.hash}),r},lt=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],pt=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],dt={name:"nuxt-child",functional:!0,render:function(t,e){var n=e.parent,r=e.data;r.nuxtChild=!0;for(var o=n,i=n.$nuxt.nuxt.transitions,a=n.$nuxt.nuxt.defaultTransition,s=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&s++,n=n.$parent;r.nuxtChildDepth=s;var u=i[s]||a,c={};lt.forEach(function(t){void 0!==u[t]&&(c[t]=u[t])});var f={};return pt.forEach(function(t){"function"==typeof u[t]&&(f[t]=u[t].bind(o))}),t("transition",{props:c,on:f},[t("router-view",r)])}},ht={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},vt={name:"nuxt-error",props:["error"],head:function(){return{title:this.statusCode+" - "+this.message,link:[{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css",type:"text/css",media:"all"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css",type:"text/css",media:"all"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Nuxt Server Error"}}},mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[n("h1",[t._v(t._s(t.statusCode)+" ")]),n("h3",[t._v(" "+t._s(t.message)+" ")]),404===t.statusCode?n("p",[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e()])]),t._m(0)])])},yt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[n("div",{staticClass:"poweredby"},[n("small",[t._v(" Powered by "),n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[t._v("Nuxt.js")])])])])])}],xt={render:mt,staticRenderFns:yt},gt=xt,wt=n("VU/8"),_t=o,bt=wt(vt,gt,_t,null,null),Ct=bt.exports,Et=n("mvHQ"),kt=n.n(Et),$t=function(){return{}};window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var Rt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g"),Lt={name:"nuxt",props:["nuxtChildKey"],beforeCreate:function(){q.default.util.defineReactive(this,"nuxt",this.$root.$options._nuxt)},computed:{routerViewKey:function(){return void 0!==this.nuxtChildKey||this.$route.matched.length>1?this.nuxtChildKey||h(this.$route.matched[0].path)(this.$route.params):this.$route.fullPath.split("#")[0]}},components:{NuxtChild:dt,NuxtError:Ct}},jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.nuxt.err?n("nuxt-error",{attrs:{error:t.nuxt.err}}):n("nuxt-child",{key:t.routerViewKey})},Tt=[],Nt={render:jt,staticRenderFns:Tt},St=Nt,Ut=n("VU/8"),Ot=Ut(Lt,St,null,null,null),At=Ot.exports,Ft={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,q.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},Mt=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},Pt=[],Dt={render:Mt,staticRenderFns:Pt},Vt=Dt,It=n("VU/8"),Gt=_,qt=It(Ft,Vt,Gt,"data-v-cb10784c",null),zt=qt.exports,Bt={_default:function(){return n.e(1).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}},Kt={},Xt={head:{title:"09-nuxt-server-side-rendering",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js server-side rendenring with Vue.js"}],link:[{rel:"icon",type:"image/x-icon",href:"/vue-examples/favicon.ico"}],base:{href:"/vue-examples/"},style:[],script:[]},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){q.default.util.defineReactive(this,"nuxt",this.$options._nuxt)},created:function(){q.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&Kt["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=Kt[e],this.layout},loadLayout:function(t){var e=this;t&&(Bt["_"+t]||Kt["_"+t])||(t="default");var n="_"+t;return Kt[n]?F.a.resolve(Kt[n]):Bt[n]().then(function(t){return Kt[n]=t,delete Bt[n],Kt[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:zt}},Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"__nuxt"}},[n("nuxt-loading",{ref:"loading"}),t.layout?n(t.nuxt.err?"nuxt":t.layout,{tag:"component"}):t._e()],1)},Yt=[],Qt={render:Jt,staticRenderFns:Yt},Zt=Qt,Ht=n("VU/8"),Wt=Ht(Xt,Zt,null,null,null),te=Wt.exports,ee=n("NYxO");q.default.use(ee.default);var ne=n("kRpp"),re=ne.keys(),oe={},ie=void 0;if(re.forEach(function(t){-1!==t.indexOf("./index.")&&(ie=t)}),ie&&(oe=b(ie)),"function"!=typeof oe){oe.modules||(oe.modules={});var ae=!0,se=!1,ue=void 0;try{for(var ce,fe=B()(re);!(ae=(ce=fe.next()).done);ae=!0){var le=ce.value,pe=le.replace(/^\.\//,"").replace(/\.(js|ts)$/,"");if("index"!==pe){var de=pe.split(/\//),he=C(oe,de);pe=de.pop(),he[pe]=b(le),he[pe].namespaced=!0}}}catch(t){se=!0,ue=t}finally{try{!ae&&fe.return&&fe.return()}finally{if(se)throw ue}}}var ve=oe instanceof Function?oe:function(){return new ee.default.Store(G()({strict:!1},oe,{state:oe.state instanceof Function?oe.state():{}}))},me=function(){var t=P()(O.a.mark(function t(e){var n,o,i,a,s,u,c;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=r(),o=ve(),t.next=5;break;case 5:return window.__NUXT__&&window.__NUXT__.state&&o.replaceState(window.__NUXT__.state),i=rt()({router:n,store:o,_nuxt:{defaultTransition:ye,transitions:[ye],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?G()({},ye,{name:t}):G()({},ye,t):ye}),this.$options._nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){"string"==typeof(t=t||null)&&(t={statusCode:500,message:t});var e=this._nuxt||this.$options._nuxt;return e.dateErr=Date.now(),e.err=t,t}}},te),a=e?e.next:function(t){return i.router.push(t)},s=n.currentRoute,e||(u=d(n.options.base),s=n.resolve(u).route),c=f({isServer:!!e,isClient:!e,route:s,next:a,error:i._nuxt.error.bind(i),store:o,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0},i),t.abrupt("return",{app:i,router:n,store:o});case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();q.default.component(dt.name,dt),q.default.component(ht.name,ht),q.default.component(At.name,At),q.default.use(it.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var ye={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"},xe=function(){var t=P()(O.a.mark(function t(e,n,r){var o,i,s;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.fullPath.split("#")[0],i=e.fullPath.split("#")[0],this._hashChanged=o===i,!this._hashChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,F.a.all(c(e,function(t,e,n,r){if("function"!=typeof t||t.options){var o=a(t);return n.components[r]=o,o}return t().then(function(t){var e=a(t);return n.components[r]=e,e})}));case 7:r(),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(4),t.t0||(t.t0={}),s=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:s,message:t.t0.message}),r(!1);case 16:case"end":return t.stop()}},t,this,[[4,10]])}));return function(e,n,r){return t.apply(this,arguments)}}(),ge=function(){var t=P()(O.a.mark(function t(e,n,r){var o,a,u,c,l,d,v,m,y=this;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._hashChanged){t.next=2;break}return t.abrupt("return",r());case 2:if(o=!1,a=function(t){y.$loading.finish&&y.$loading.finish(),o||(o=!0,r(t))},u=f({to:e,from:n,store:ke,isClient:!0,next:a.bind(this),error:this.error.bind(this)},Ce),this._context=u,this._dateLastError=this.$options._nuxt.dateErr,this._hadError=!!this.$options._nuxt.err,c=s(e),c.length){t.next=23;break}return t.next=12,R.call(this,c,u);case 12:if(!u._redirected){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,this.loadLayout("function"==typeof Ct.layout?Ct.layout(u):Ct.layout);case 16:return l=t.sent,t.next=19,R.call(this,c,u,l);case 19:if(!u._redirected){t.next=21;break}return t.abrupt("return");case 21:return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",r());case 23:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(k(c,e,n)),t.prev=25,t.next=28,R.call(this,c,u);case 28:if(!u._redirected){t.next=30;break}return t.abrupt("return");case 30:return d=c[0].options.layout,"function"==typeof d&&(d=d(u)),t.next=34,this.loadLayout(d);case 34:return d=t.sent,t.next=37,R.call(this,c,u,d);case 37:if(!u._redirected){t.next=39;break}return t.abrupt("return");case 39:if(v=!0,c.forEach(function(t){v&&"function"==typeof t.options.validate&&(v=t.options.validate({params:e.params||{},query:e.query||{},store:u.store}))}),v){t.next=44;break}return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",r());case 44:return t.next=46,F.a.all(c.map(function(t,n){if(t._path=h(e.matched[n].path)(e.params),!y._hadError&&y._isMounted&&t._path===_e[n]&&n+1!==c.length)return F.a.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,s=o&&a?30:45;if(o){var f=p(t.options.asyncData,u).then(function(e){i(t,e),y.$loading.increase&&y.$loading.increase(s)});r.push(f)}if(a){var l=t.options.fetch(u);l&&(l instanceof F.a||"function"==typeof l.then)||(l=F.a.resolve(l)),l.then(function(t){y.$loading.increase&&y.$loading.increase(s)}),r.push(l)}return F.a.all(r)}));case 46:_e=c.map(function(t,n){return h(e.matched[n].path)(e.params)}),this.$loading.finish&&this.$loading.finish(),o||r(),t.next=62;break;case 51:return t.prev=51,t.t0=t.catch(25),t.t0||(t.t0={}),_e=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,m=Ct.layout,"function"==typeof m&&(m=m(u)),t.next=60,this.loadLayout(m);case 60:this.error(t.t0),r(!1);case 62:case"end":return t.stop()}},t,this,[[25,51]])}));return function(e,n,r){return t.apply(this,arguments)}}(),we=function(){var t=P()(O.a.mark(function t(e){var n,r,o,i;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Ce=e.app,Ee=e.router,ke=e.store,t.next=5,F.a.all($(Ee));case 5:return n=t.sent,r=new q.default(Ce),o=$e.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),i=function(){r.$mount("#__nuxt"),q.default.nextTick(function(){T(r)})},r.setTransitions=r.$options._nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(k(n,Ee.currentRoute)),_e=Ee.currentRoute.matched.map(function(t){return h(t.path)(Ee.currentRoute.params)}),be=n.map(function(t){return t.options.__file})),r.error=r.$options._nuxt.error.bind(r),r.$loading={},$e.error&&r.error($e.error),Ee.beforeEach(xe.bind(r)),Ee.beforeEach(ge.bind(r)),Ee.afterEach(L),Ee.afterEach(j.bind(r)),!$e.serverRendered){t.next=24;break}return i(),t.abrupt("return");case 24:ge.call(r,Ee.currentRoute,Ee.currentRoute,function(t){if(!t)return L(Ee.currentRoute,Ee.currentRoute),j.call(r,Ee.currentRoute,Ee.currentRoute),void i();var e=!1;Ee.afterEach(function(){e||(e=!0,i())}),Ee.push(t)});case 25:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),_e=[],be=[],Ce=void 0,Ee=void 0,ke=void 0,$e=window.__NUXT__||{};$e.components=window.__COMPONENTS__||null,me().then(we).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},"VU/8":function(t,e){t.exports=function(t,e,n,r,o){var i,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var f=u.functional,l=f?u.render:u.beforeCreate;f?u.render=function(t,e){return c.call(e),l(t,e)}:u.beforeCreate=l?[].concat(l,c):[c]}return{esModule:i,exports:a,options:u}}},jyFz:function(t,e,n){(function(e){var r="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("SldL"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}).call(e,n("DuR2"))},kRpp:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="kRpp"},p5rU:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="p5rU"},rjj0:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function i(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var i=d++;r=p||(p=o()),e=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n("tTVk"),f={},l=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var o=c(t,e);return r(o),function(e){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=f[a.id];s.refs--,n.push(s)}e?(o=c(t,e),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete f[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},tTVk:function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s=i[1],u=i[2],c=i[3],f={id:t+":"+o,css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}}},["T23V"]);
//# sourceMappingURL=app.c506a9a61b765e17093e.js.map