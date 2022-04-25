"use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}!function(t){if("object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).ProgressBar=t()}}((function(){return function t(e,r,n){function i(a,s){if(!r[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[a]={exports:{}};e[a][0].call(l.exports,(function(t){return i(e[a][1][t]||t)}),l,l.exports,t,e,r,n)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(t,e,r){!function(t,n){"object"==_typeof(r)&&"object"==_typeof(e)?e.exports=n():"object"==_typeof(r)?r.shifty=n():t.shifty=n()}(window,(function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==_typeof(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(e){return t[e]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,r){(function(t){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t){return(i="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return _typeof(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof(t)})(t)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new b,r=e.tween(t);return r.tweenable=e,r}r.d(e,"e",(function(){return v})),r.d(e,"c",(function(){return g})),r.d(e,"b",(function(){return w})),r.d(e,"a",(function(){return b})),r.d(e,"d",(function(){return u}));var c=r(1),l="undefined"!=typeof window?window:t,f=l.requestAnimationFrame||l.webkitRequestAnimationFrame||l.oRequestAnimationFrame||l.msRequestAnimationFrame||l.mozCancelRequestAnimationFrame&&l.mozRequestAnimationFrame||setTimeout,h=function(){},p=null,d=null,y=a({},c),v=function(t,e,r,n,i,o,a){var s=t<o?0:(t-o)/i;for(var u in e){var c=a[u],l=c.call?c:y[c],f=r[u];e[u]=f+(n[u]-f)*l(s)}return e},_=function(t,e){var r=t._attachment,n=t._currentState,i=t._delay,o=t._easing,a=t._originalState,s=t._duration,u=t._step,c=t._targetState,l=t._timestamp,f=l+i+s,h=e>f?f:e,p=s-(f-h);h>=f?(u(c,r,p),t.stop(!0)):(t._applyFilter("beforeTween"),h<l+i?(h=1,s=1,l=1):l+=i,v(h,n,a,c,s,l,o),t._applyFilter("afterTween"),u(n,r,p))},g=function(){for(var t=b.now(),e=p;e;){var r=e._next;_(e,t),e=r}},w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"linear",r={},n=i(e);if("string"===n||"function"===n)for(var o in t)r[o]=e;else for(var a in t)r[a]=e[a]||"linear";return r},m=function(t){if(t===p)(p=t._next)?p._previous=null:d=null;else if(t===d)(d=t._previous)?d._next=null:p=null;else{var e=t._previous,r=t._next;e._next=r,r._previous=e}t._previous=t._next=null},b=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._currentState=e,this._configured=!1,this._filters=[],this._timestamp=null,this._next=null,this._previous=null,r&&this.setConfig(r)}var e,r;return e=t,(r=[{key:"_applyFilter",value:function(t){var e=!0,r=!1,n=void 0;try{for(var i,o=this._filters[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var a=i.value[t];a&&a(this)}}catch(t){r=!0,n=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw n}}}},{key:"tween",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,r=this._attachment,n=this._configured;return!e&&n||this.setConfig(e),this._pausedAtTime=null,this._timestamp=t.now(),this._start(this.get(),r),this.resume()}},{key:"setConfig",value:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.attachment,i=r.delay,o=void 0===i?0:i,s=r.duration,u=void 0===s?500:s,c=r.easing,l=r.from,f=r.promise,p=void 0===f?Promise:f,d=r.start,y=void 0===d?h:d,v=r.step,_=void 0===v?h:v,g=r.to;this._configured=!0,this._attachment=n,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=o,this._start=y,this._step=_,this._duration=u,this._currentState=a({},l||this.get()),this._originalState=this.get(),this._targetState=a({},g||this.get());var m=this._currentState;this._targetState=a({},m,{},this._targetState),this._easing=w(m,c);var b=t.filters;for(var S in this._filters.length=0,b)b[S].doesApply(this)&&this._filters.push(b[S]);return this._applyFilter("tweenCreated"),this._promise=new p((function(t,r){e._resolve=t,e._reject=r})),this._promise.catch(h),this}},{key:"get",value:function(){return a({},this._currentState)}},{key:"set",value:function(t){this._currentState=t}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=t.now(),this._isPlaying=!1,m(this),this}},{key:"resume",value:function(){if(null===this._timestamp)return this.tween();if(this._isPlaying)return this._promise;var e=t.now();return this._pausedAtTime&&(this._timestamp+=e-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,null===p?(p=this,d=this,function t(){p&&(f.call(l,t,1e3/60),g())}()):(this._previous=d,d._next=this,d=this),this._promise}},{key:"seek",value:function(e){e=Math.max(e,0);var r=t.now();return this._timestamp+e===0||(this._timestamp=r-e,this._isPlaying||_(this,r)),this}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this._attachment,r=this._currentState,n=this._easing,i=this._originalState,o=this._targetState;if(this._isPlaying)return this._isPlaying=!1,m(this),t?(this._applyFilter("beforeTween"),v(1,r,i,o,1,0,n),this._applyFilter("afterTween"),this._applyFilter("afterTweenEnd"),this._resolve(r,e)):this._reject(r,e),this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"setScheduleFunction",value:function(e){t.setScheduleFunction(e)}},{key:"dispose",value:function(){for(var t in this)delete this[t]}}])&&n(e.prototype,r),t}();b.setScheduleFunction=function(t){return f=t},b.formulas=y,b.filters={},b.now=Date.now||function(){return+new Date}}).call(this,r(2))},function(t,e,r){r.r(e),r.d(e,"linear",(function(){return n})),r.d(e,"easeInQuad",(function(){return i})),r.d(e,"easeOutQuad",(function(){return o})),r.d(e,"easeInOutQuad",(function(){return a})),r.d(e,"easeInCubic",(function(){return s})),r.d(e,"easeOutCubic",(function(){return u})),r.d(e,"easeInOutCubic",(function(){return c})),r.d(e,"easeInQuart",(function(){return l})),r.d(e,"easeOutQuart",(function(){return f})),r.d(e,"easeInOutQuart",(function(){return h})),r.d(e,"easeInQuint",(function(){return p})),r.d(e,"easeOutQuint",(function(){return d})),r.d(e,"easeInOutQuint",(function(){return y})),r.d(e,"easeInSine",(function(){return v})),r.d(e,"easeOutSine",(function(){return _})),r.d(e,"easeInOutSine",(function(){return g})),r.d(e,"easeInExpo",(function(){return w})),r.d(e,"easeOutExpo",(function(){return m})),r.d(e,"easeInOutExpo",(function(){return b})),r.d(e,"easeInCirc",(function(){return S})),r.d(e,"easeOutCirc",(function(){return O})),r.d(e,"easeInOutCirc",(function(){return x})),r.d(e,"easeOutBounce",(function(){return k})),r.d(e,"easeInBack",(function(){return P})),r.d(e,"easeOutBack",(function(){return T})),r.d(e,"easeInOutBack",(function(){return C})),r.d(e,"elastic",(function(){return j})),r.d(e,"swingFromTo",(function(){return E})),r.d(e,"swingFrom",(function(){return M})),r.d(e,"swingTo",(function(){return A})),r.d(e,"bounce",(function(){return F})),r.d(e,"bouncePast",(function(){return W})),r.d(e,"easeFromTo",(function(){return L})),r.d(e,"easeFrom",(function(){return q})),r.d(e,"easeTo",(function(){return I}));var n=function(t){return t},i=function(t){return Math.pow(t,2)},o=function(t){return-(Math.pow(t-1,2)-1)},a=function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},s=function(t){return Math.pow(t,3)},u=function(t){return Math.pow(t-1,3)+1},c=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},l=function(t){return Math.pow(t,4)},f=function(t){return-(Math.pow(t-1,4)-1)},h=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},p=function(t){return Math.pow(t,5)},d=function(t){return Math.pow(t-1,5)+1},y=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},v=function(t){return 1-Math.cos(t*(Math.PI/2))},_=function(t){return Math.sin(t*(Math.PI/2))},g=function(t){return-.5*(Math.cos(Math.PI*t)-1)},w=function(t){return 0===t?0:Math.pow(2,10*(t-1))},m=function(t){return 1===t?1:1-Math.pow(2,-10*t)},b=function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},S=function(t){return-(Math.sqrt(1-t*t)-1)},O=function(t){return Math.sqrt(1-Math.pow(t-1,2))},x=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},k=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},P=function(t){var e=1.70158;return t*t*((e+1)*t-e)},T=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},C=function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},j=function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},E=function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},M=function(t){var e=1.70158;return t*t*((e+1)*t-e)},A=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},F=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},W=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},L=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},q=function(t){return Math.pow(t,4)},I=function(t){return Math.pow(t,.25)}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==("undefined"==typeof window?"undefined":_typeof(window))&&(r=window)}t.exports=r},function(t,e,r){function n(t){return parseInt(t,16)}function i(t){var e=t._currentState;[e,t._originalState,t._targetState].forEach(k),t._tokenData=C(e)}function o(t){var e=t._currentState,r=t._originalState,n=t._targetState,i=t._easing,o=t._tokenData;W(i,o),[e,r,n].forEach((function(t){return j(t,o)}))}function a(t){var e=t._currentState,r=t._originalState,n=t._targetState,i=t._easing,o=t._tokenData;[e,r,n].forEach((function(t){return F(t,o)})),L(i,o)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e){var r=e.get(t);if(!r)throw new TypeError("attempted to get private field on non-instance");return r.get?r.get.call(t):r.value}r.r(e);var h={};r.r(h),r.d(h,"doesApply",(function(){return q})),r.d(h,"tweenCreated",(function(){return i})),r.d(h,"beforeTween",(function(){return o})),r.d(h,"afterTween",(function(){return a}));var p,d,y=r(0),v=/(\d|-|\.)/,_=/([^\-0-9.]+)/g,g=/[0-9.-]+/g,w=(p=g.source,d=/,\s*/.source,new RegExp("rgb\\(".concat(p).concat(d).concat(p).concat(d).concat(p,"\\)"),"g")),m=/^.*\(/,b=/#([0-9]|[a-f]){3,6}/gi,S=function(t,e){return t.map((function(t,r){return"_".concat(e,"_").concat(r)}))},O=function(t){return"rgb(".concat((e=t,3===(e=e.replace(/#/,"")).length&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]),[n(e.substr(0,2)),n(e.substr(2,2)),n(e.substr(4,2))]).join(","),")");var e},x=function(t,e,r){var n=e.match(t),i=e.replace(t,"VAL");return n&&n.forEach((function(t){return i=i.replace("VAL",r(t))})),i},k=function(t){for(var e in t){var r=t[e];"string"==typeof r&&r.match(b)&&(t[e]=x(b,r,O))}},P=function(t){var e=t.match(g).map(Math.floor);return"".concat(t.match(m)[0]).concat(e.join(","),")")},T=function(t){return t.match(g)},C=function(t){var e,r,n={};for(var i in t){var o=t[i];"string"==typeof o&&(n[i]={formatString:(e=o,r=void 0,r=e.match(_),r?(1===r.length||e.charAt(0).match(v))&&r.unshift(""):r=["",""],r.join("VAL")),chunkNames:S(T(o),i)})}return n},j=function(t,e){var r=function(r){T(t[r]).forEach((function(n,i){return t[e[r].chunkNames[i]]=+n})),delete t[r]};for(var n in e)r(n)},E=function(t,e){var r={};return e.forEach((function(e){r[e]=t[e],delete t[e]})),r},M=function(t,e){return e.map((function(e){return t[e]}))},A=function(t,e){return e.forEach((function(e){return t=t.replace("VAL",+e.toFixed(4))})),t},F=function(t,e){for(var r in e){var n=e[r],i=n.chunkNames,o=n.formatString,a=A(o,M(E(t,i),i));t[r]=x(w,a,P)}},W=function(t,e){var r=function(r){var n=e[r].chunkNames,i=t[r];if("string"==typeof i){var o=i.split(" "),a=o[o.length-1];n.forEach((function(e,r){return t[e]=o[r]||a}))}else n.forEach((function(e){return t[e]=i}));delete t[r]};for(var n in e)r(n)},L=function(t,e){for(var r in e){var n=e[r].chunkNames,i=t[n[0]];t[r]="string"==typeof i?n.map((function(e){var r=t[e];return delete t[e],r})).join(" "):i}},q=function(t){var e=t._currentState;return Object.keys(e).some((function(t){return"string"==typeof e[t]}))},I=new y.a,D=y.a.filters,B=function(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=u({},t),a=Object(y.b)(t,n);for(var s in I._filters.length=0,I.set({}),I._currentState=o,I._originalState=t,I._targetState=e,I._easing=a,D)D[s].doesApply(I)&&I._filters.push(D[s]);I._applyFilter("tweenCreated"),I._applyFilter("beforeTween");var c=Object(y.e)(r,o,t,e,1,i,a);return I._applyFilter("afterTween"),c},N=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),R.set(this,{writable:!0,value:[]});for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.forEach(this.add.bind(this))}var e,r;return e=t,(r=[{key:"add",value:function(t){return f(this,R).push(t),t}},{key:"remove",value:function(t){var e=f(this,R).indexOf(t);return~e&&f(this,R).splice(e,1),t}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return f(this,R).some((function(t){return t.isPlaying()}))}},{key:"play",value:function(){return f(this,R).forEach((function(t){return t.tween()})),this}},{key:"pause",value:function(){return f(this,R).forEach((function(t){return t.pause()})),this}},{key:"resume",value:function(){return f(this,R).forEach((function(t){return t.resume()})),this}},{key:"stop",value:function(t){return f(this,R).forEach((function(e){return e.stop(t)})),this}},{key:"tweenables",get:function(){return function(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(f(this,R))}},{key:"promises",get:function(){return f(this,R).map((function(t){return t._promise}))}}])&&l(e.prototype,r),t}(),R=new WeakMap,z=function(t,e,r,n,i){var o=function(t,e,r,n){return function(i){return function(t,e,r,n,i,o){var a,s,u,c,l,f=0,h=0,p=0,d=function(t){return((f*t+h)*t+p)*t},y=function(t){return(3*f*t+2*h)*t+p},v=function(t){return t>=0?t:0-t};return f=1-(p=3*e)-(h=3*(n-e)-p),u=1-(l=3*r)-(c=3*(i-r)-l),a=t,s=function(t){return 1/(200*t)}(o),function(t){return((u*t+c)*t+l)*t}(function(t,e){var r,n,i,o,a,s;for(i=t,s=0;s<8;s++){if(o=d(i)-t,v(o)<e)return i;if(a=y(i),v(a)<1e-6)break;i-=o/a}if((i=t)<(r=0))return r;if(i>(n=1))return n;for(;r<n;){if(o=d(i),v(o-t)<e)return i;t>o?r=i:n=i,i=.5*(n-r)+r}return i}(a,s))}(i,t,e,r,n,1)}}(e,r,n,i);return o.displayName=t,o.x1=e,o.y1=r,o.x2=n,o.y2=i,y.a.formulas[t]=o},V=function(t){return delete y.a.formulas[t]};r.d(e,"processTweens",(function(){return y.c})),r.d(e,"Tweenable",(function(){return y.a})),r.d(e,"tween",(function(){return y.d})),r.d(e,"interpolate",(function(){return B})),r.d(e,"Scene",(function(){return N})),r.d(e,"setBezierFunction",(function(){return z})),r.d(e,"unsetBezierFunction",(function(){return V})),y.a.filters.token=h}])}))},{}],2:[function(t,e,r){var n=t("./shape"),i=t("./utils"),o=function(t,e){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,n.apply(this,arguments)};(o.prototype=new n).constructor=o,o.prototype._pathString=function(t){var e=t.strokeWidth;t.trailWidth&&t.trailWidth>t.strokeWidth&&(e=t.trailWidth);var r=50-e/2;return i.render(this._pathTemplate,{radius:r,"2radius":2*r})},o.prototype._trailString=function(t){return this._pathString(t)},e.exports=o},{"./shape":7,"./utils":9}],3:[function(t,e,r){var n=t("./shape"),i=t("./utils"),o=function(t,e){this._pathTemplate=e.vertical?"M {center},100 L {center},0":"M 0,{center} L 100,{center}",n.apply(this,arguments)};(o.prototype=new n).constructor=o,o.prototype._initializeSvg=function(t,e){var r=e.vertical?"0 0 "+e.strokeWidth+" 100":"0 0 100 "+e.strokeWidth;t.setAttribute("viewBox",r),t.setAttribute("preserveAspectRatio","none")},o.prototype._pathString=function(t){return i.render(this._pathTemplate,{center:t.strokeWidth/2})},o.prototype._trailString=function(t){return this._pathString(t)},e.exports=o},{"./shape":7,"./utils":9}],4:[function(t,e,r){e.exports={Line:t("./line"),Circle:t("./circle"),SemiCircle:t("./semicircle"),Square:t("./square"),Path:t("./path"),Shape:t("./shape"),utils:t("./utils")}},{"./circle":2,"./line":3,"./path":5,"./semicircle":6,"./shape":7,"./square":8,"./utils":9}],5:[function(t,e,r){var n=t("shifty"),i=t("./utils"),o=n.Tweenable,a={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},s=function t(e,r){if(!(this instanceof t))throw new Error("Constructor was called without new keyword");var n;r=i.extend({delay:0,duration:800,easing:"linear",from:{},to:{},step:function(){}},r),n=i.isString(e)?document.querySelector(e):e,this.path=n,this._opts=r,this._tweenable=null;var o=this.path.getTotalLength();this.path.style.strokeDasharray=o+" "+o,this.set(0)};s.prototype.value=function(){var t=this._getComputedDashOffset(),e=this.path.getTotalLength();return parseFloat((1-t/e).toFixed(6),10)},s.prototype.set=function(t){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(t);var e=this._opts.step;if(i.isFunction(e)){var r=this._easing(this._opts.easing);e(this._calculateTo(t,r),this._opts.shape||this,this._opts.attachment)}},s.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},s.prototype.animate=function(t,e,r){e=e||{},i.isFunction(e)&&(r=e,e={});var n=i.extend({},e),a=i.extend({},this._opts);e=i.extend(a,e);var s=this._easing(e.easing),u=this._resolveFromAndTo(t,s,n);this.stop(),this.path.getBoundingClientRect();var c=this._getComputedDashOffset(),l=this._progressToOffset(t),f=this;this._tweenable=new o,this._tweenable.tween({from:i.extend({offset:c},u.from),to:i.extend({offset:l},u.to),duration:e.duration,delay:e.delay,easing:s,step:function(t){f.path.style.strokeDashoffset=t.offset;var r=e.shape||f;e.step(t,r,e.attachment)}}).then((function(t){i.isFunction(r)&&r()})).catch((function(t){throw console.error("Error in tweening:",t),t}))},s.prototype._getComputedDashOffset=function(){var t=window.getComputedStyle(this.path,null);return parseFloat(t.getPropertyValue("stroke-dashoffset"),10)},s.prototype._progressToOffset=function(t){var e=this.path.getTotalLength();return e-t*e},s.prototype._resolveFromAndTo=function(t,e,r){return r.from&&r.to?{from:r.from,to:r.to}:{from:this._calculateFrom(e),to:this._calculateTo(t,e)}},s.prototype._calculateFrom=function(t){return n.interpolate(this._opts.from,this._opts.to,this.value(),t)},s.prototype._calculateTo=function(t,e){return n.interpolate(this._opts.from,this._opts.to,t,e)},s.prototype._stopTween=function(){null!==this._tweenable&&(this._tweenable.stop(!0),this._tweenable=null)},s.prototype._easing=function(t){return a.hasOwnProperty(t)?a[t]:t},e.exports=s},{"./utils":9,shifty:1}],6:[function(t,e,r){var n=t("./shape"),i=t("./circle"),o=t("./utils"),a=function(t,e){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,n.apply(this,arguments)};(a.prototype=new n).constructor=a,a.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 50")},a.prototype._initializeTextContainer=function(t,e,r){t.text.style&&(r.style.top="auto",r.style.bottom="0",t.text.alignToBottom?o.setStyle(r,"transform","translate(-50%, 0)"):o.setStyle(r,"transform","translate(-50%, 50%)"))},a.prototype._pathString=i.prototype._pathString,a.prototype._trailString=i.prototype._trailString,e.exports=a},{"./circle":2,"./shape":7,"./utils":9}],7:[function(t,e,r){var n=t("./path"),i=t("./utils"),o="Object is destroyed",a=function t(e,r){if(!(this instanceof t))throw new Error("Constructor was called without new keyword");if(0!==arguments.length){this._opts=i.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},r,!0),i.isObject(r)&&void 0!==r.svgStyle&&(this._opts.svgStyle=r.svgStyle),i.isObject(r)&&i.isObject(r.text)&&void 0!==r.text.style&&(this._opts.text.style=r.text.style);var o,a=this._createSvgView(this._opts);if(!(o=i.isString(e)?document.querySelector(e):e))throw new Error("Container does not exist: "+e);this._container=o,this._container.appendChild(a.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&i.setStyles(a.svg,this._opts.svgStyle),this.svg=a.svg,this.path=a.path,this.trail=a.trail,this.text=null;var s=i.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new n(a.path,s),i.isObject(this._opts.text)&&null!==this._opts.text.value&&this.setText(this._opts.text.value)}};a.prototype.animate=function(t,e,r){if(null===this._progressPath)throw new Error(o);this._progressPath.animate(t,e,r)},a.prototype.stop=function(){if(null===this._progressPath)throw new Error(o);void 0!==this._progressPath&&this._progressPath.stop()},a.prototype.pause=function(){if(null===this._progressPath)throw new Error(o);void 0!==this._progressPath&&this._progressPath._tweenable&&this._progressPath._tweenable.pause()},a.prototype.resume=function(){if(null===this._progressPath)throw new Error(o);void 0!==this._progressPath&&this._progressPath._tweenable&&this._progressPath._tweenable.resume()},a.prototype.destroy=function(){if(null===this._progressPath)throw new Error(o);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,null!==this.text&&(this.text.parentNode.removeChild(this.text),this.text=null)},a.prototype.set=function(t){if(null===this._progressPath)throw new Error(o);this._progressPath.set(t)},a.prototype.value=function(){if(null===this._progressPath)throw new Error(o);return void 0===this._progressPath?0:this._progressPath.value()},a.prototype.setText=function(t){if(null===this._progressPath)throw new Error(o);null===this.text&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),i.isObject(t)?(i.removeChildren(this.text),this.text.appendChild(t)):this.text.innerHTML=t},a.prototype._createSvgView=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(e,t);var r=null;(t.trailColor||t.trailWidth)&&(r=this._createTrail(t),e.appendChild(r));var n=this._createPath(t);return e.appendChild(n),{svg:e,path:n,trail:r}},a.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 100")},a.prototype._createPath=function(t){var e=this._pathString(t);return this._createPathElement(e,t)},a.prototype._createTrail=function(t){var e=this._trailString(t),r=i.extend({},t);return r.trailColor||(r.trailColor="#eee"),r.trailWidth||(r.trailWidth=r.strokeWidth),r.color=r.trailColor,r.strokeWidth=r.trailWidth,r.fill=null,this._createPathElement(e,r)},a.prototype._createPathElement=function(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",t),r.setAttribute("stroke",e.color),r.setAttribute("stroke-width",e.strokeWidth),e.fill?r.setAttribute("fill",e.fill):r.setAttribute("fill-opacity","0"),r},a.prototype._createTextContainer=function(t,e){var r=document.createElement("div");r.className=t.text.className;var n=t.text.style;return n&&(t.text.autoStyleContainer&&(e.style.position="relative"),i.setStyles(r,n),n.color||(r.style.color=t.color)),this._initializeTextContainer(t,e,r),r},a.prototype._initializeTextContainer=function(t,e,r){},a.prototype._pathString=function(t){throw new Error("Override this function for each progress bar")},a.prototype._trailString=function(t){throw new Error("Override this function for each progress bar")},a.prototype._warnContainerAspectRatio=function(t){if(this.containerAspectRatio){var e=window.getComputedStyle(t,null),r=parseFloat(e.getPropertyValue("width"),10),n=parseFloat(e.getPropertyValue("height"),10);i.floatEquals(this.containerAspectRatio,r/n)||(console.warn("Incorrect aspect ratio of container","#"+t.id,"detected:",e.getPropertyValue("width")+"(width)","/",e.getPropertyValue("height")+"(height)","=",r/n),console.warn("Aspect ratio of should be",this.containerAspectRatio))}},e.exports=a},{"./path":5,"./utils":9}],8:[function(t,e,r){var n=t("./shape"),i=t("./utils"),o=function(t,e){this._pathTemplate="M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}",this._trailTemplate="M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}",n.apply(this,arguments)};(o.prototype=new n).constructor=o,o.prototype._pathString=function(t){var e=100-t.strokeWidth/2;return i.render(this._pathTemplate,{width:e,strokeWidth:t.strokeWidth,halfOfStrokeWidth:t.strokeWidth/2})},o.prototype._trailString=function(t){var e=100-t.strokeWidth/2;return i.render(this._trailTemplate,{width:e,strokeWidth:t.strokeWidth,halfOfStrokeWidth:t.strokeWidth/2,startMargin:t.strokeWidth/2-t.trailWidth/2})},e.exports=o},{"./shape":7,"./utils":9}],9:[function(t,e,r){function n(t,e,r){for(var n=t.style,o=0;o<s.length;++o)n[s[o]+i(e)]=r;n[e]=r}function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}function o(t){return!function(t){return"[object Array]"===Object.prototype.toString.call(t)}(t)&&"object"==_typeof(t)&&!!t}function a(t,e){for(var r in t){if(t.hasOwnProperty(r))e(t[r],r)}}var s="Webkit Moz O ms".split(" "),u=.001;e.exports={extend:function t(e,r,n){for(var i in e=e||{},n=n||!1,r=r||{})if(r.hasOwnProperty(i)){var a=e[i],s=r[i];n&&o(a)&&o(s)?e[i]=t(a,s,n):e[i]=s}return e},render:function(t,e){var r=t;for(var n in e)if(e.hasOwnProperty(n)){var i=e[n],o=new RegExp("\\{"+n+"\\}","g");r=r.replace(o,i)}return r},setStyle:n,setStyles:function(t,e){a(e,(function(e,r){null!=e&&(o(e)&&!0===e.prefix?n(t,r,e.value):t.style[r]=e)}))},capitalize:i,isString:function(t){return"string"==typeof t||t instanceof String},isFunction:function(t){return"function"==typeof t},isObject:o,forEachObject:a,floatEquals:function(t,e){return Math.abs(t-e)<u},removeChildren:function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}}},{}]},{},[4])(4)})),window.addEventListener("DOMContentLoaded",(function(){var t,e=(new Date).getHours();e>=5&&e<12?t="Доброе утро!":e>=12&&e<18?t="Добрый день!":e>=18&&e<24?t="Добрый вечер!":e>=0&&e<5&&(t="Доброй ночи!"),document.querySelector("#greeting").innerHTML=t,document.querySelector("#burger").addEventListener("click",(function(){document.querySelector(".nav").classList.add("is_active_nav")})),document.querySelector("#close-burger").addEventListener("click",(function(){document.querySelector(".nav").classList.remove("is_active_nav")}));new Swiper("#swiper",{loop:!0,slidesPerView:1});document.querySelectorAll(".projects__item").forEach((function(t){t.addEventListener("click",(function(e){e.target.classList.contains("push")?(t.querySelector(".reverse").classList.remove("reverse-act"),setTimeout((function(){return t.querySelectorAll(".projects__box").forEach((function(t){t.classList.remove("box-active")}))}),600)):(t.querySelectorAll(".projects__box").forEach((function(t){t.classList.add("box-active")})),setTimeout((function(){return t.querySelector(".reverse").classList.add("reverse-act")}),600))}))}));var r={color:"white",strokeWidth:0,trailWidth:5,trailColor:"black",easing:"easeInOut",from:{color:"#fa6565",width:2},to:{color:"#FF0000",width:4},text:{value:"0",className:"progress-text",style:{color:"#FF0000",position:"absolute",top:"45%",left:"42%",padding:0,margin:0,transform:null}},step:function(t,e){e.path.setAttribute("stroke",t.color),e.path.setAttribute("stroke-width",t.width),e.setText(Math.round(100*e.value())+" %")}},n=new ProgressBar.Circle("#progHTML",r),i=new ProgressBar.Circle("#progCSS",r),o=new ProgressBar.Circle("#progSCSS",r),a=new ProgressBar.Circle("#progGULP",r),s=new ProgressBar.Circle("#progGIT",r),u=new ProgressBar.Circle("#progBEM",r);n.animate(.77,{duration:3100}),i.animate(.73,{duration:2900}),o.animate(.61,{duration:2450}),a.animate(.45,{duration:1800}),s.animate(.37,{duration:1500}),u.animate(.59,{duration:2350})}));