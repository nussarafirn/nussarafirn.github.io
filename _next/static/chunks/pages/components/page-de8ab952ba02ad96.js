(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1],{935:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/page",function(){return t(5469)}])},1796:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var r=t(3375);var s=t(1566);function a(n,e){return function(n){if(Array.isArray(n))return n}(n)||(0,r.Z)(n,e)||(0,s.Z)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=t(5893),c=t(7294),l=t(5675),o=t.n(l),u=t(8092),f=["Firn","Nussara Tieanklin","\u0e19\u0e38\u0e2a\u0e23\u0e32 \u0e40\u0e15\u0e35\u0e49\u0e22\u0e19\u0e01\u0e25\u0e34\u0e48\u0e19","\u0e40\u0e1f\u0e34\u0e23\u0e4c\u0e19"];var h=function(){var n=a((0,u.default)(),2),e=n[0],t=n[1];return(0,c.useEffect)((function(){var n=0,e=function(){t(f[n]),n=(n+1)%f.length};e();var r=setInterval(e,5500);return function(){return clearInterval(r)}}),[t]),(0,i.jsx)("div",{className:"home-button button",children:(0,i.jsxs)("a",{href:".",children:[(0,i.jsx)(o(),{src:"img/fern.png",alt:"fern",width:20,height:20}),e]})})}},9741:function(n,e,t){"use strict";t.r(e);var r=t(5893),s=(t(7294),t(1796)),a=t(2582);e.default=function(){return(0,r.jsxs)("div",{className:"nav-bar",children:[(0,r.jsx)(s.default,{}),(0,r.jsx)("div",{className:"nav-menu",children:(0,r.jsx)(a.default,{href:"./cv",children:"CV"})})]})}},2582:function(n,e,t){"use strict";t.r(e);var r=t(5893);t(7294);e.default=function(n){var e=n.href,t=n.children;return(0,r.jsx)("nav",{className:"button",children:(0,r.jsx)("a",{className:"button link",href:e,children:t})})}},5469:function(n,e,t){"use strict";t.r(e);var r=t(5893),s=t(9008),a=t.n(s),i=(t(7294),t(9741)),c=t(2383);e.default=function(n){var e=n.title,t=n.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=DM+Serif+Display:ital@0;1&family=DM+Serif+Text:ital@0;1&display=swap",rel:"stylesheet"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/@coreui/icons/css/brand.min.css"})]}),(0,r.jsxs)("div",{className:"App",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(c.default,{}),t]})]})}},2383:function(n,e,t){"use strict";t.r(e);var r=t(5893);t(7294);e.default=function(){return(0,r.jsxs)("div",{className:"social-wrapper",children:[(0,r.jsxs)("a",{href:"https://twitter.com/nussarafirn",className:"icon twitter",children:[(0,r.jsx)("div",{className:"tooltip",children:"Twitter"}),(0,r.jsx)("span",{children:(0,r.jsx)("i",{className:"fab fa-twitter"})})]}),(0,r.jsxs)("a",{href:"https://github.com/nussarafirn",className:"icon github",children:[(0,r.jsx)("div",{className:"tooltip",children:"Github"}),(0,r.jsx)("span",{children:(0,r.jsx)("i",{className:"fab fa-github"})})]}),(0,r.jsxs)("a",{href:"https://www.linkedin.com/in/nussarafirn",className:"icon linkedin",children:[(0,r.jsx)("div",{className:"tooltip",children:"LinkedIn"}),(0,r.jsx)("span",{children:(0,r.jsx)("i",{className:"fab fa-linkedin-in"})})]}),(0,r.jsxs)("a",{href:"https://scholar.google.com/citations?hl=en&user=OT49rjwAAAAJ",className:"icon google-scholar",children:[(0,r.jsx)("div",{className:"tooltip",children:"Google Scholar"}),(0,r.jsxs)("span",{children:[" ",(0,r.jsx)("i",{className:"fab cib-googles-cholar"})]})]})]})}},8092:function(n,e,t){"use strict";t.r(e),t.d(e,{useDencrypt:function(){return l}});var r=t(1799),s=t(9815),a=t(7294),i=function(n,e,t,r,s,a){return e>n?r[e]:n>=t&&e<n-t?s[e]:function(n){return n[Math.floor(Math.random()*n.length)]}(a)},c={chars:["-",".","/","^","*","!","}","<","~","$","0","1","2","3","4","5","a","b","c","d","e","f"],interval:50},l=function(n){var e=(0,a.useState)(""),t=e[0],l=e[1],o=(0,a.useState)(""),u=o[0],f=o[1],h=(0,r.Z)({},c,n),d=h.chars,m=h.interval;return(0,a.useEffect)((function(){var n=0,e=setInterval((function(){f((function(r){if(r===t)return clearInterval(e),t;var a=r?r.length:0,c=t.length,l=Math.max(a,c);return(0,s.Z)(new Array(l)).map((function(e,s){return i(n,s,l,r,t,d)})).join("")})),n++}),m);return function(){return clearInterval(e)}}),[t,d,m]),[u,l]};e.default=l},9008:function(n,e,t){n.exports=t(5443)}},function(n){n.O(0,[634,774,888,179],(function(){return e=935,n(n.s=e);var e}));var e=n.O();_N_E=e}]);