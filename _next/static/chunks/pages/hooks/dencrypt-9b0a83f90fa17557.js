(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[460],{3391:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/dencrypt",function(){return r(8092)}])},8092:function(n,t,r){"use strict";r.r(t),r.d(t,{useDencrypt:function(){return c}});var e=r(1799),u=r(9815),o=r(7294),a=function(n,t,r,e,u,o){return t>n?e[t]:n>=r&&t<n-r?u[t]:function(n){return n[Math.floor(Math.random()*n.length)]}(o)},i={chars:["-",".","/","^","*","!","}","<","~","$","0","1","2","3","4","5","a","b","c","d","e","f"],interval:50},c=function(n){var t=(0,o.useState)(""),r=t[0],c=t[1],f=(0,o.useState)(""),s=f[0],l=f[1],v=(0,e.Z)({},i,n),d=v.chars,h=v.interval;return(0,o.useEffect)((function(){var n=0,t=setInterval((function(){l((function(e){if(e===r)return clearInterval(t),r;var o=e?e.length:0,i=r.length,c=Math.max(o,i);return(0,u.Z)(new Array(c)).map((function(t,u){return a(n,u,c,e,r,d)})).join("")})),n++}),h);return function(){return clearInterval(t)}}),[r,d,h]),[s,c]};t.default=c},943:function(n,t,r){"use strict";function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}r.d(t,{Z:function(){return e}})},3375:function(n,t,r){"use strict";function e(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}r.d(t,{Z:function(){return e}})},9815:function(n,t,r){"use strict";r.d(t,{Z:function(){return a}});var e=r(943);var u=r(3375);var o=r(1566);function a(n){return function(n){if(Array.isArray(n))return(0,e.Z)(n)}(n)||(0,u.Z)(n)||(0,o.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(n,t,r){"use strict";r.d(t,{Z:function(){return u}});var e=r(943);function u(n,t){if(n){if("string"===typeof n)return(0,e.Z)(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,e.Z)(n,t):void 0}}}},function(n){n.O(0,[774,888,179],(function(){return t=3391,n(n.s=t);var t}));var t=n.O();_N_E=t}]);