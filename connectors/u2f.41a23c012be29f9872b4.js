!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1330)}({1330:function(e,r,t){"use strict";t.r(r);var n=t(449);document.addEventListener("DOMContentLoaded",(function(e){var r;s(),window.addEventListener("message",(function(e){e.origin&&""!==e.origin&&e.origin===a&&("stop"===e.data?i=!0:"start"===e.data&&i&&s())}),!1),r="ready",parent.postMessage("info|"+r,o)}));var o=null,a=null,i=!1,u=!1;function s(){if(u=!1,n.isSupported){var e=f("data");if(e)if(o=f("parent")){var r=document.createElement("a");r.href=o,a=r.origin;var t=f("v");if(t){try{parseInt(t);var s=(p=e,decodeURIComponent(Array.prototype.map.call(atob(p),(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""))),l=JSON.parse(s)}catch(v){return void d("Cannot parse data.")}var p;l.appId&&l.challenge&&l.keys&&l.keys.length?(i=!1,c(l)):d("Invalid data parameters.")}else d("No version.")}else d("No parent.");else d("No data.")}else d("U2F is not supported in this browser.")}function c(e){i||n.sign(e.appId,e.challenge,e.keys,(function(r){r.errorCode?5!==r.errorCode?(d("U2F Error: "+r.errorCode),setTimeout((function(){c(e)}),1e3)):c(e):function(e){if(u)return;var r=JSON.stringify(e);parent.postMessage("success|"+r,o),u=!0}(r)}),10)}function d(e){parent.postMessage("error|"+e,o)}function f(e){var r=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(r);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null}},449:function(e,r){e.exports=u2f}});
//# sourceMappingURL=u2f.41a23c012be29f9872b4.js.map