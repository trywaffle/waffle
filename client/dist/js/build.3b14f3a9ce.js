(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var options={};options=function(e){return e}({}),options.render=function(e){return e("div",{attrs:{class:"full-screen container center text-center m-scope-1daewt1nbe74q"}},{shouldRender:!0},[e("#text",{shouldRender:!0},"\n    "),e("router-link",{attrs:{to:"/",class:"m-scope-1daewt1nbe74q"}},{shouldRender:!0},[e("h1",{attrs:{class:"m-scope-1daewt1nbe74q"}},{shouldRender:!1},[e("#text",{shouldRender:!1},"waffle")])]),e("#text",{shouldRender:!0},"\n    "),e("p",{attrs:{class:"m-scope-1daewt1nbe74q"}},{shouldRender:!1},[e("#text",{shouldRender:!1},"the simplest way to leverage your community")]),e("#text",{shouldRender:!0},"\n    "),e("iframe",{attrs:{src:"https://www.youtube.com/embed/TAtB8fupP3w",frameborder:"0",allowfullscreen:"",id:"video",class:"m-scope-1daewt1nbe74q"}},{shouldRender:!1},[]),e("#text",{shouldRender:!0},"\n    "),e("button",{attrs:{href:"https://feathrd.typeform.com/to/mGMMXR",class:"typeform-share m-scope-1daewt1nbe74q","data-mode":"popup"}},{shouldRender:!1},[e("#text",{shouldRender:!1},"create yours")]),e("#text",{shouldRender:!0},"\n  ")])},module.exports=function(e){e.component("home",options)};

},{}],2:[function(require,module,exports){
var Moon=require("moonjs"),MoonRouter=require("moon-router");require("./components/home.moon")(Moon),Moon.use(MoonRouter);var router=new MoonRouter({default:"/",map:{"/":"home"}});new Moon({el:"#app",router:router});

},{"./components/home.moon":1,"moon-router":3,"moonjs":4}],3:[function(require,module,exports){
/**
 * Moon Router v0.1.3
 * Copyright 2016-2017 Kabir Shah
 * Released under the MIT License
 * https://github.com/KingPixil/moon-router
 */
!function(t,n){"object"==typeof module&&module.exports?module.exports=n():t.MoonRouter=n()}(this,function(){function t(t){this.instance=null,r(this,"base",t.base,""),r(this,"default",t.default,"/");var e=t.map;void 0===e?this.map={}:this.map=l(e),this.route={},r(this,"activeClass",t.activeClass,"router-link-active"),u(this,n),s(this,t.mode)}var n=null,e="*",i="?",o=":",a="@",r=function(t,n,e,i){void 0===e?t[n]=i:t[n]=e},s=function(t,n){var e=null,i=null,o=!1;void 0===n?(e=function(){var t=window.location.hash.slice(1);return 0===t.length&&(t="/"),t},i=function(n){window.location.hash=n,c(t,n)},window.addEventListener("hashchange",function(){t.navigate(t.getPath())})):"history"===n&&(e=function(){var n=window.location.pathname.substring(t.base.length);return 0===n.length&&(n="/"),n},i=function(n){history.pushState(null,null,t.base+n),c(t,n)},o=!0,window.addEventListener("popstate",function(){c(t,t.getPath())}));var a=e();t.current={path:a,component:null},t.getPath=e,t.navigate=i,t.custom=o,i(a)},u=function(t,n){n.component("router-view",{functional:!0,render:function(n){return n(t.current.component,{attrs:{route:t.route}},{shouldRender:!0},[])}}),n.component("router-link",{functional:!0,render:function(n,e){var i=e.data,o=i.to,a={shouldRender:!0},r=t.current.path===o;return t.custom===!0?(i.href=t.base+o,a.eventListeners={click:[function(n){n.preventDefault(),r===!1&&t.navigate(o)}]}):i.href="#"+o,delete i.to,r===!0&&(void 0===i.class?i.class=t.activeClass:i.class+=" "+t.activeClass),n("a",{attrs:i},a,e.slots.default)}})},l=function(t){var n={};for(var e in t){for(var i=n,a=e.slice(1).split("/"),r=0;r<a.length;r++){var s=a[r];if(":"===s[0]){var u=i[o];void 0===u?i[o]={name:s.slice(1)}:u.name=s.slice(1),i=i[o]}else void 0===i[s]&&(i[s]={}),i=i[s]}i["@"]=t[e]}return n},c=function(t,n){for(var r=n.slice(1).split("/"),s=t.map,u={query:{},params:{}},l=0;l<r.length;l++){var h=r[l];if(h.indexOf(i)!==-1){var v=h.split(i);h=v.shift();for(var f=0;f<v.length;f++){var d=v[f].split("=");u.query[d[0]]=d[1]}}if(void 0===s[h]){var p=null;void 0!==s[e]?h=e:void 0!==(p=s[o])&&(u.params[p.name]=h,h=o)}if(s=s[h],void 0===s)return c(t,t.default),!1}return void 0===s[a]?(c(t,t.default),!1):(t.current={path:n,component:s[a]},t.route=u,null!==t.instance&&t.instance.build(),!0)};return t.prototype.install=function(t){this.instance=t},t.init=function(t){n=t;var e=n.prototype.init;n.prototype.init=function(){void 0!==this.$options.router&&(this.$router=this.$options.router,this.$router.install(this)),e.apply(this,arguments)}},t});
},{}],4:[function(require,module,exports){
/**
 * Moon v0.11.0
 * Copyright 2016-2017 Kabir Shah
 * Released under the MIT License
 * http://moonjs.ga
 */
!function(e,t){"object"==typeof module&&module.exports?module.exports=t():e.Moon=t()}(this,function(){"use strict";function e(e){this.instance=e,this.cache={},this.setters={},this.clear={},this.target=null,this.map={}}function t(t){void 0===t&&(t={}),this.$options=t,b(this,"$name",t.name,"root");var n=t.data;this.$data=void 0===n?{}:"function"==typeof n?n():n,b(this,"$render",t.render,x),b(this,"$hooks",t.hooks,{});var r=t.methods;void 0!==r&&l(this,r),this.$events={},this.$dom={},this.$observer=new e(this),this.$queued=!1;var i=t.computed;void 0!==i&&s(this,i),this.init()}var n={},r={},i={},o={stop:"event.stopPropagation();",prevent:"event.preventDefault();",ctrl:"if(event.ctrlKey === false) {return null;};",shift:"if(event.shiftKey === false) {return null;};",alt:"if(event.altKey === false) {return null;};",enter:"if(event.keyCode !== 13) {return null;};"},a={},l=function(e,t){var n=e.$data;for(var r in t)!function(t,r){n[t]=function(){return r.apply(e,arguments)}}(r,t[r])},s=function(e,t){for(var n in t)!function(n){var r=e.$observer;r.observe(n),Object.defineProperty(e.$data,n,{get:function(){var i=null;return void 0===r.cache[n]?(r.target=n,i=t[n].get.call(e),r.target=null,r.cache[n]=i):i=r.cache[n],i},set:x});var i=null;void 0!==(i=t[n].set)&&(r.setters[n]=i)}(n)};e.prototype.observe=function(e){var t=this;this.clear[e]=function(){t.cache[e]=void 0}},e.prototype.notify=function(e){var t=this,n=null;if(void 0!==(n=this.map[e]))for(var r=0;r<n.length;r++)t.notify(n[r]);var i=null;void 0!==(i=this.clear[e])&&i()};var u=/\[(\w+)\]/g,c=/(?:(?:&(?:lt|gt|quot|amp);)|"|\\|\n)/g,v={"&lt;":"<","&gt;":">","&quot;":'\\"',"&amp;":"&","\\":"\\\\",'"':'\\"',"\n":"\\n"},d=function(e){!1===t.config.silent&&console.log(e)},f=function(e){!1===t.config.silent&&console.error("[Moon] ERROR: "+e)},p=function(e){!1===e.$queued&&(e.$queued=!0,setTimeout(function(){e.build(),e.$queued=!1,m(e,"updated")},0))},h=function(e,t,n,r){for(var i=(n=n.replace(u,".$1")).split("."),o=0;o<i.length-1;o++)t=t[i[o]];return t[i[o]]=r,i[0]},m=function(e,t){var n=e.$hooks[t];void 0!==n&&n.call(e)},g=function(e){var t={};if(t.default=[],0===e.length)return t;for(var n=0;n<e.length;n++){var r=e[n],i=r.props.attrs,o="",a=null;void 0!==(o=i.slot)?(void 0===(a=t[o])?t[o]=[r]:a.push(r),delete i.slot):t.default.push(r)}return t},y=function(e,t){for(var n in t)e[n]=t[n];return e},b=function(e,t,n,r){e[t]=void 0===n?r:n},$=function(e){return e.replace(c,function(e){return v[e]})},x=function(){},k=function(e){for(var t={},n=e.attributes,r=n.length;r--;)t[n[r].name]=n[r].value;return t},A=function(e,t,n){var r=function(e){for(var t=r.handlers,n=0;n<t.length;n++)t[n](e)};r.handlers=n[t],n[t]=r,e.addEventListener(t,r)},_=function(e,t){for(var n in t)A(e,n,t)},w=function(e){var t=e.type,n=e.meta,r=null;if("#text"===t)r=document.createTextNode(e.val);else{var i=e.children;r=n.isSVG?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);var o=i[0];if(1===i.length&&"#text"===o.type)r.textContent=o.val,o.meta.el=r.firstChild;else for(var a=0;a<i.length;a++){var l=i[a];C(w(l),l,r)}var s=null;void 0!==(s=n.eventListeners)&&_(r,s)}return E(r,{},e,e.props),e.meta.el=r,r},C=function(e,t,n){n.appendChild(e);var r=null;void 0!==(r=t.meta.component)&&T(e,t,r)},O=function(e,t){var n=null;void 0!==(n=e.__moon__)&&n.destroy(),t.removeChild(e)},R=function(e,t,n,r){var i=null;void 0!==(i=e.__moon__)&&i.destroy(),r.replaceChild(t,e);var o=null;void 0!==(o=n.meta.component)&&T(t,n,o)},L=function(e,t,n){var r=n.meta,i=r.eventListeners;void 0===i&&(i=r.eventListeners={});var o=i[e];void 0===o?i[e]=[t]:o.push(t)},G=function(e,t,n,r,i){return{type:e,val:t,props:n,children:i,meta:r||{shouldRender:!1}}},M=function(e,t,n){var r=n.options,i=e.attrs,o=r.data;void 0===o&&(o={});var a=r.props;if(void 0===a)o=i;else for(var l=0;l<a.length;l++){var s=a[l];o[s]=i[s]}return n.options.render(S,{data:o,slots:g(t)})},S=function(e,t,n,r){var o=null;if("#text"===e)return G("#text",n,{attrs:{}},t,[]);if(void 0!==(o=i[e])){if(!0===o.options.functional)return M(t,r,o);n.component=o}return G(e,"",t,n,r)};S.renderClass=function(e){if("string"==typeof e)return e;var t="";if(Array.isArray(e))for(var n=0;n<e.length;n++)t+=S.renderClass(e[n])+" ";else if("object"==typeof e)for(var r in e)e[r]&&(t+=r+" ");return t=t.slice(0,-1)},S.renderLoop=function(e,t){var n=null;if(Array.isArray(e)){n=new Array(e.length);for(var r=0;r<e.length;r++)n[r]=t(e[r],r)}else if("object"==typeof e){n=[];for(var i in e)n.push(t(e[i],i))}else if("number"==typeof e){n=new Array(e);for(var o=0;o<e;o++)n[o]=t(o+1,o)}return n},S.renderEventModifier=function(e,t){return e===a[t]};var T=function(e,t,n){for(var r=new n.CTor,i=r.$props,o=r.$data,a=t.props.attrs,l=0;l<i.length;l++){var s=i[l];o[s]=a[s]}var u=t.meta.eventListeners;return void 0!==u&&y(r.$events,u),r.$slots=g(t.children),r.$el=e,r.build(),m(r,"mounted"),t.meta.el=r.$el,r.$el},q=function(e,t,n){for(var r in t)void 0===n[r]?A(e,r,t):n[r].handlers=t[r]},E=function(e,t,r,i){var o=i.attrs;for(var a in o){var l=o[a],s=t[a];void 0===l||!1===l||null===l||void 0!==s&&!1!==s&&null!==s&&l===s||(10===a.length&&"xlink:href"===a?e.setAttributeNS("http://www.w3.org/1999/xlink","href",l):e.setAttribute(a,!0===l?"":l))}for(var u in t){var c=o[u];void 0!==c&&!1!==c&&null!==c||e.removeAttribute(u)}var v=null;if(void 0!==(v=i.directives))for(var d in v){var f=null;void 0!==(f=n[d])&&f(e,v[d],r)}var p=null;if(void 0!==(p=i.dom))for(var h in p){var m=p[h];e[h]!==m&&(e[h]=m)}},j=function(e,t){if(void 0===e.__moon__)T(e,t,t.meta.component);else{for(var n=e.__moon__,r=!1,i=n.$props,o=n.$data,a=t.props.attrs,l=0;l<i.length;l++){var s=i[l];o[s]!==a[s]&&(o[s]=a[s],r=!0)}0!==t.children.length&&(n.$slots=g(t.children),r=!0),!0===r&&(n.build(),m(n,"updated"))}},N=function(e,t,n){var r=null!==e?e.nodeName.toLowerCase():null,i=t.meta;if(r!==t.type){var o=w(t);return R(e,o,t,n),o}if("#text"!==t.type){if(void 0!==i.component)return j(e,t),e;i.el=e;var a=t.props;E(e,k(e),t,a);var l=null;void 0!==(l=i.eventListeners)&&_(e,l);var s=a.dom;if(void 0===s||void 0===s.innerHTML)for(var u=t.children,c=u.length,v=0,d=e.firstChild,f=0!==c?u[0]:null,p=null;null!==f||null!==d;)p=null,null===d?C(w(f),f,e):(p=d.nextSibling,null===f?O(d,e):N(d,f,e)),f=++v<c?u[v]:null,d=p;return e}e.textContent!==t.val&&(e.textContent=t.val),i.el=e},D=function(e,t,n,r,i,o){var a=e.meta,l=n.meta;if(e.type!==n.type)t[i]=n,R(a.el,w(n),n,o);else if(!0===l.shouldRender)if("#text"===n.type){var s=n.val;e.val!==s&&(e.val=s,a.el.textContent=s)}else if(void 0!==l.component)j(a.el,n);else{var u=a.el,c=e.props,v=n.props;E(u,c.attrs,n,v),c.attrs=v.attrs;var d=null;void 0!==(d=l.eventListeners)&&q(u,d,a.eventListeners);var f=v.dom;if(void 0===f||void 0===f.innerHTML){var p=n.children,h=e.children,m=p.length,g=h.length;if(0===m&&0!==g){for(var y=null;null!==(y=u.firstChild);)O(y,u);e.children=[]}else if(0===g){for(var b=null,$=0;$<m;$++)b=p[$],C(w(b),b,u);e.children=p}else for(var x=m>g?m:g,k=null,A=null,_=0;_<x;_++)_>=m?O(h.pop().meta.el,u):_>=g?(A=p[_],C(w(A),A,u),h.push(A)):(k=h[_])!==(A=p[_])&&D(k,h,A,p,_,u)}}},z=/\{\{/,H=/\s*\}\}/,P=/\s/,V=/"[^"]*"|'[^']*'|\.\w*[a-zA-Z$_]\w*|\w*[a-zA-Z$_]\w*:|(\w*[a-zA-Z$_]\w*)/g,Z=["true","false","undefined","null","NaN","typeof","in"],K=function(e,t,n){var r={current:0,template:e,output:"",exclude:t,dependencies:n};return I(r),r.output},I=function(e){for(var t=e.template.length;e.current<t;){var n=B(e,z);if(0!==n.length&&(e.output+=$(n)),e.current===t)break;e.current+=2,J(e);var r=B(e,H);if(e.current===t)break;0!==r.length&&(F(r,e.exclude,e.dependencies),r='" + '+r+' + "',e.output+=r),J(e),e.current+=2}},F=function(e,t,n){for(var r=null,i=null;null!==(i=V.exec(e));)void 0!==(r=i[1])&&-1===n.indexOf(r)&&-1===t.indexOf(r)&&n.push(r);return n},B=function(e,t){var n=e.template.substring(e.current),r=n.search(t),i="";switch(r){case-1:i=n;break;case 0:i="";break;default:i=n.substring(0,r)}return e.current+=i.length,i},J=function(e){for(var t=e.template,n=t[e.current];!0===P.test(n);)n=t[++e.current]},Q=/<\/?(?:[A-Za-z]+\w*)|<!--/,U=function(e){var t={input:e,current:0,tokens:[]};return W(t),t.tokens},W=function(e){for(var t=e.input,n=t.length;e.current<n;)"<"===t.charAt(e.current)?"\x3c!--"!==t.substr(e.current,4)?ee(e):Y(e):X(e)},X=function(e){var t=e.current,n=e.input,r=n.substring(t).search(Q);if(-1===r)return e.tokens.push({type:"text",value:n.slice(t)}),void(e.current=n.length);0!==r&&(r+=t,e.tokens.push({type:"text",value:n.slice(t,r)}),e.current=r)},Y=function(e){var t=e.current,n=e.input,r=n.length;t+=4;var i=n.indexOf("--\x3e",t);-1===i?(e.tokens.push({type:"comment",value:n.slice(t)}),e.current=r):(e.tokens.push({type:"comment",value:n.slice(t,i)}),e.current=i+3)},ee=function(e){var t=e.input,n="/"===t.charAt(e.current+1);e.current+=!0===n?2:1;var r=te(e);ne(r,e);var i="/"===t.charAt(e.current);e.current+=!0===i?2:1,!0===n&&(r.closeStart=!0),!0===i&&(r.closeEnd=!0)},te=function(e){for(var t=e.input,n=t.length,r=e.current,i="";r<n;){var o=t.charAt(r);if("/"===o||">"===o||" "===o)break;i+=o,r++}var a={type:"tag",value:i};return e.tokens.push(a),e.current=r,a},ne=function(e,t){for(var n=t.input,r=n.length,i=t.current,o=n.charAt(i),a=n.charAt(i+1),l=function(){i++,o=n.charAt(i),a=n.charAt(i+1)},s={};i<r&&">"!==o&&("/"!==o||">"!==a);)if(" "!==o){for(var u="",c=!1;i<r&&"="!==o;){if(" "===o||">"===o||"/"===o&&">"===a){c=!0;break}u+=o,l()}var v={name:u,value:"",meta:{}};if(!0!==c){l();var d=" ";for("'"!==o&&'"'!==o||(d=o,l());i<r&&o!==d;)v.value+=o,l();if(l(),-1!==u.indexOf(":")){var f=u.split(":");v.name=f[0],v.meta.arg=f[1]}s[u]=v}else s[u]=v}else l();t.current=i,e.attributes=s},re=function(e){for(var t={type:"ROOT",children:[]},n={current:0,tokens:e};n.current<e.length;){var r=se(n);r&&t.children.push(r)}return t},ie=["address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","hgroup","nav","section","div","dd","dl","dt","figcaption","figure","picture","li","main","ol","p","pre","ul","a","b","abbr","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","samp","small","span","strong","sub","sup","time","u","var","audio","map","video","object","canvas","del","ins","caption","col","colgroup","table","thead","tbody","td","th","tr","button","datalist","fieldset","form","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","menu","menuitem","summary","content","element","shadow","template","blockquote","iframe","tfoot"],oe=["area","base","br","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],ae=["svg","animate","circle","clippath","cursor","defs","desc","ellipse","filter","font-face","foreignObject","g","glyph","image","line","marker","mask","missing-glyph","path","pattern","polygon","polyline","rect","switch","symbol","text","textpath","tspan","use","view"],le=function(e,t,n){return{type:e,props:t,children:n}},se=function(e){var t=e.tokens[e.current],n=e.tokens[e.current-1],r=function(r){e.current+=void 0===r?1:r,t=e.tokens[e.current],n=e.tokens[e.current-1]};if("text"===t.type)return r(),n.value;if("comment"===t.type)return r(),null;if("tag"===t.type){var i=t.value,o=t.closeStart,a=t.closeEnd,l=-1!==ae.indexOf(i),s=-1!==oe.indexOf(i)||!0===a,u=le(i,t.attributes,[]);if(r(),!0===l&&(u.isSVG=!0),!0===s)return u;if(!0===o)return null;if(void 0!==t){for(-1===ie.indexOf(i)&&(u.custom=!0);"tag"!==t.type||"tag"===t.type&&(void 0===t.closeStart&&void 0===t.closeEnd||t.value!==i);){var c=se(e);if(null!==c&&u.children.push(c),r(0),void 0===t)break}r()}return u}r()},ue=function(e,t,n){var i=e.props;e.props={attrs:i};var o=!1,a=[],l=!1,s={},u=null,c=null,v="{attrs: {",d=null;for(u in i){var f=i[u],p=f.name;void 0!==(c=r[p])&&void 0!==(d=c.beforeGenerate)&&d(f,e,t,n)}var h=null,m=null;for(u in i){var g=i[u],y=g.name;if(void 0!==(c=r[y]))void 0!==(h=c.afterGenerate)&&(s[y]={prop:g,afterGenerate:h},l=!0),void 0!==(m=c.duringPropGenerate)&&(!1===n.hasAttrs&&(n.hasAttrs=!0),v+=m(g,e,n)),e.meta.shouldRender=!0;else if("m"===y[0]&&"-"===y[1])a.push(g),o=!0,e.meta.shouldRender=!0;else{var b=g.value,$=K(b,n.exclude,n.dependencies);b!==$&&(e.meta.shouldRender=!0),!1===n.hasAttrs&&(n.hasAttrs=!0),v+='"'+u+'": "'+$+'", '}}if(!0===n.hasAttrs?(v=v.substring(0,v.length-2)+"}",n.hasAttrs=!1):v+="}",!0===o){v+=", directives: {";for(var x=null,k=null,A=0;A<a.length;A++)k=(x=a[A]).value,F(k,n.exclude,n.dependencies),v+='"'+x.name+'": '+(0===k.length?'""':k)+", ";v=v.substring(0,v.length-2)+"}"}!0===l&&(n.specialDirectivesAfter=s);var _=e.props.dom;if(void 0!==_){v+=", dom: {";for(var w in _)v+='"'+w+'": '+_[w]+", ";v=v.substring(0,v.length-2)+"}"}return v+="}, "},ce=function(e){var t='"eventListeners": {';for(var n in e){var r=e[n];t+='"'+n+'": [';for(var i=0;i<r.length;i++)t+=r[i]+", ";t=t.substring(0,t.length-2)+"], "}return t=t.substring(0,t.length-2)+"}, "},ve=function(e){var t="{";for(var n in e)t+="eventListeners"===n?ce(e[n]):'"'+n+'": '+e[n]+", ";return t=t.substring(0,t.length-2)+"}, "},de=function(e,t,n){if("string"==typeof e){var r=K(e,n.exclude,n.dependencies),i={shouldRender:!1};return e!==r&&(i.shouldRender=!0,t.meta.shouldRender=!0),'m("#text", '+ve(i)+'"'+r+'")'}if("slot"===e.type){t.meta.shouldRender=!0,t.deep=!0;var o=e.props.name;return'instance.$slots["'+(void 0===o?"default":o.value)+'"]'}var a='m("'+e.type+'", ',l={shouldRender:!1};e.meta=l,!0===e.custom&&(l.shouldRender=!0),!0===e.isSVG&&(l.isSVG=!0);var s=ue(e,t,n),u=n.specialDirectivesAfter;null!==u&&(n.specialDirectivesAfter=null);var c=e.children,v="[";if(0===c.length)v+="]";else{for(var d=0;d<c.length;d++)v+=de(c[d],e,n)+", ";v=v.substring(0,v.length-2)+"]"}if(!0===e.deep&&(v="[].concat.apply([], "+v+")"),!0===l.shouldRender&&void 0!==t&&(t.meta.shouldRender=!0),a+=s,a+=ve(l),a+=v,a+=")",null!==u){var f;for(var p in u)a=(f=u[p]).afterGenerate(f.prop,a,e,n)}return a},fe=function(e){for(var t=e.children[0],n={hasAttrs:!1,specialDirectivesAfter:null,exclude:Z,dependencies:[]},r=de(t,void 0,n),i=n.dependencies,o="",a=0;a<i.length;a++){var l=i[a];o+="var "+l+' = instance.get("'+l+'"); '}var s="var instance = this; "+o+"return "+r+";";try{return new Function("m",s)}catch(e){return f("Could not create render function"),x}},pe=function(e){var t=U(e),n=re(t);return fe(n)};t.prototype.get=function(e){var t=this.$observer,n=null;return null!==(n=t.target)&&(void 0===t.map[e]?t.map[e]=[n]:-1===t.map[e].indexOf(n)&&t.map[e].push(n)),this.$data[e]},t.prototype.set=function(e,t){var n=this.$observer,r=h(0,this.$data,e,t),i=null;void 0!==(i=n.setters[r])&&i.call(this,t),n.notify(r),p(this)},t.prototype.destroy=function(){this.off(),this.$el=null,this.$queued=!0,m(this,"destroyed")},t.prototype.callMethod=function(e,t){return t=t||[],this.$data[e].apply(this,t)},t.prototype.on=function(e,t){var n=this.$events[e];void 0===n?this.$events[e]=[t]:n.push(t)},t.prototype.off=function(e,t){if(void 0===e)this.$events={};else if(void 0===t)this.$events[e]=[];else{var n=this.$events[e],r=n.indexOf(t);n.splice(r,1)}},t.prototype.emit=function(e,t){var n=t||{};n.type=e;var r=this.$events[e],i=this.$events["*"],o=0;if(void 0!==r)for(o=0;o<r.length;o++)r[o](n);if(void 0!==i)for(o=0;o<i.length;o++)i[o](n)},t.prototype.mount=function(e){this.$el="string"==typeof e?document.querySelector(e):e,this.$destroyed=!1,this.$el.__moon__=this,b(this,"$template",this.$options.template,this.$el.outerHTML),this.$render===x&&(this.$render=t.compile(this.$template)),this.build(),m(this,"mounted")},t.prototype.render=function(){return this.$render(S)},t.prototype.patch=function(e,t,n){if(void 0!==e.meta)if(t.type!==e.type){var r=w(t);R(e.meta.el,r,t,n),r.__moon__=this,this.$el=r}else D(e,[],t,[],0,n);else e instanceof Node&&N(e,t,n)!==e&&(this.$el=t.meta.el,this.$el.__moon__=this)},t.prototype.build=function(){var e=this.render(),t=null;void 0!==this.$dom.meta?t=this.$dom:(t=this.$el,this.$dom=e),this.patch(t,e,this.$el.parentNode)},t.prototype.init=function(){d("======= Moon ======="),m(this,"init");var e=this.$options.el;void 0!==e&&this.mount(e)},t.config={silent:!0,keyCodes:function(e){y(a,e)}},t.version="0.11.0",t.util={noop:x,error:f,log:d,extend:y,m:S},t.use=function(e,n){e.init(t,n)},t.compile=function(e){return pe(e)},t.nextTick=function(e){setTimeout(e,0)},t.directive=function(e,t){n["m-"+e]=t},t.component=function(e,n){function r(){t.call(this,n)}var o=this;return void 0!==n.name?e=n.name:n.name=e,void 0!==n.data&&"function"!=typeof n.data&&f("In components, data must be a function returning an object"),r.prototype=Object.create(o.prototype),r.prototype.constructor=r,r.prototype.init=function(){m(this,"init");var e=this.$options;this.$destroyed=!1,b(this,"$props",e.props,[]);var n=e.template;this.$template=n,this.$render===x&&(this.$render=t.compile(n))},i[e]={CTor:r,options:n},r};var he='m("#text", '+ve({shouldRender:!1})+'"")';return r["m-if"]={afterGenerate:function(e,t,n,r){var i=e.value;return F(i,r.exclude,r.dependencies),i+" ? "+t+" : "+he}},r["m-for"]={beforeGenerate:function(e,t,n,r){n.deep=!0;var i=e.value.split(" in "),o=i[0],a=i[1],l=r.exclude;r.exclude=l.concat(o.split(",")),F(a,l,r.dependencies);var s=e.meta;s.iteratable=a,s.aliases=o,s.exclude=l},afterGenerate:function(e,t,n,r){var i=e.meta;return r.exclude=i.exclude,"m.renderLoop("+i.iteratable+", function("+i.aliases+") { return "+t+"; })"}},r["m-on"]={beforeGenerate:function(e,t,n,r){var i=e.meta.arg.split("."),a=i.shift(),l=e.value,s="event",u=l.indexOf("(");if(-1!==u){var c=l.lastIndexOf(")");s=l.substring(u+1,c),l=l.substring(0,u),F(s,r.exclude.concat(["event"]),r.dependencies)}for(var v="",d=0;d<i.length;d++){var f=i[d],p=o[f];v+=void 0===p?'if(m.renderEventModifier(event.keyCode, "'+f+'") === false) {return null;};':p}L(a,"function(event) {"+v+'instance.callMethod("'+l+'", ['+s+"])}",t)}},r["m-model"]={beforeGenerate:function(e,t,n,r){var i=e.value,o=t.props.attrs,a=r.exclude,l=r.dependencies;F(i,a,l);var s="input",u="value",c=i,v=i,d="event.target."+u,f=o.type;if(void 0!==f){var p=!1;if("checkbox"===(f=f.value)||"radio"===f&&(p=!0))if(s="change",u="checked",!0===p){var h=o.value,m=null,g="null";void 0!==h?g='"'+K(h.value,a,l)+'"':(m=o["m-literal:value"])&&(g=""+K(m.value,a,l)),c=c+" === "+g,d=g}else d="event.target."+u}var y=v.indexOf("["),b=v.indexOf("."),$=-1;-1===y&&-1===b||($=-1===y?b:-1===b?y:y<b?y:b,v=i.substring(0,$)+i.substring($).replace(V,function(e,t){return void 0!==t?'" + '+t+' + "':e})),L(s,'function(event) {instance.set("'+v+'", '+d+")}",t);var x=t.props.dom;void 0===x&&(t.props.dom=x={}),x[u]=c}},r["m-literal"]={duringPropGenerate:function(e,t,n){var r=e.meta.arg,i=e.value;return F(i,n.exclude,n.dependencies),"class"===r?'"class": m.renderClass('+i+"), ":'"'+r+'": '+i+", "}},r["m-html"]={beforeGenerate:function(e,t,n,r){var i=e.value,o=t.props.dom;void 0===o&&(t.props.dom=o={}),F(i,r.exclude,r.dependencies),o.innerHTML=""+i}},r["m-mask"]={},n["m-show"]=function(e,t,n){e.style.display=t?"":"none"},t});
},{}]},{},[2]);