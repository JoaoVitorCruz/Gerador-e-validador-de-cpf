!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var r=t(1);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};t(3)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(e=n.exports=t(2)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);",""]),e.push([n.i,":root {\n  --primary-color: #115666;\n  --primary-color-darker: rgb(9, 48, 56);\n  --success: #5CA822;\n  --fail: #FF4037;\n  --warning: #FF701B;\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: #115666;\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid #115666;\n}\n\nform button {\n  border: none;\n  background: #115666;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: #082B33;\n}\n\n.fail {\n  color: var(--fail);\n}\n\n.success {\n  color: var(--success);\n}\n\n.warning {\n  color: var(--warning);\n}\n\n.title {\n  margin: 0;\n}\n\nhr {\n  width:100%\n}\n\n.container {\n  display:flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  text-align: center;\n}\n\n.btn {\n  width:100%;\n  height: 40px;\n  font-size: 18px;\n  background: #115666;\n  color:#eee;\n  border:#082B33;\n}\n\ninput {\n  height: 40px;\n  width:100%;\n  font-size: 18px;\n  margin: 15px 0;\n  border: #082B33 solid 1px;\n  text-align: center;\n  color: #082B33;\n}\n\ninput:disabled {\n  background-color: #C9E9FF;\n}",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,u,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var u=n[a];null!=u[0]&&r[u[0]]||(t&&!u[2]?u[2]=t:t&&(u[2]="(".concat(u[2],") and (").concat(t,")")),e.push(u))}},e}},function(n,e,t){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function u(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):t.push(r[a]={id:a,parts:[u]})}return t}function c(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],e))}else{for(var u=[];a<r.parts.length;a++)u.push(v(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:u}}}}function s(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var r=t.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,f=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function d(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o&&n.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var g=null,h=0;function v(n,e){var t,r,o;if(e.singleton){var i=h++;t=g||(g=s(e)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=s(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=u(n,e);return c(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var a=t[i],s=o[a.id];s&&(s.refs--,r.push(s))}n&&c(u(n,e),e);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}},function(n,e,t){"use strict";function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}t.r(e);var o=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),"string"!=typeof e&&e.toString(),Object.defineProperties(this,{cpfLimpo:{configurable:!1,writable:!1,enum:!0,value:e.replace(/\D+/g,"").slice(0,-2)},digitos:{configurable:!1,writable:!1,enum:!0,value:e.replace(/\D+/g,"").slice(-2)}})}var e,t,o;return e=n,o=[{key:"geraDigitos",value:function(n){for(var e,t,r,o=[],i=[],a=1;a<=9;a++)o.push(n[a-1]*a);r=n+(t=o.reduce((function(n,e){return n+e}),0)%11>9?0:o.reduce((function(n,e){return n+e}),0)%11);for(var u=0;u<10;u++)i.push(r[u]*u);return e=i.reduce((function(n,e){return n+e}),0)%11>=10?0:i.reduce((function(n,e){return n+e}),0)%11,"".concat(t).concat(e)}},{key:"geraCpf",value:function(){var e,t,r=(e=1e8,t=999999999,Math.round(Math.random()*(t-e)+e));return(r+n.geraDigitos(String(r))).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")}}],(t=[{key:"valida",value:function(){return n.geraDigitos(this.cpfLimpo)==this.digitos}}])&&r(e.prototype,t),o&&r(e,o),n}(),i=(t(0),document.querySelector(".gerar input")),a=document.querySelector(".gerar .btn"),u=document.querySelector(".validar input"),c=document.querySelector(".validar .btn"),s=document.querySelector(".validar .resultado");i.value=o.geraCpf(),a.addEventListener("click",(function(){i.value=o.geraCpf()})),c.addEventListener("click",(function(){var n,e=new o(u.value),t=e.valida();console.log(e),n=9===e.cpfLimpo.length&&2==e.digitos.length?t?'<h2 class="success">Valido!</h2>':'<h2 class="fail">Invalido!</h2>':"<h2 class='warning'>Confira o CPF inserido</h2>",s.innerHTML=n}))}]);
//# sourceMappingURL=bundle.js.map