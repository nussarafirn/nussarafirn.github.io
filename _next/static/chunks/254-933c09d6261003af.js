(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[254],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,c=e.unoptimized,l=void 0!==c&&c,m=e.priority,y=void 0!==m&&m,w=e.loading,O=e.lazyRoot,k=void 0===O?null:O,x=e.lazyBoundary,E=e.className,_=e.quality,P=e.width,Z=e.height,R=e.style,C=e.objectFit,L=e.objectPosition,M=e.onLoadingComplete,q=e.placeholder,N=void 0===q?"empty":q,D=e.blurDataURL,W=u(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),B=s.useContext(p.ImageConfigContext),U=s.useMemo((function(){var e=b||B||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[B]),V=W,F=n?"responsive":"intrinsic";"layout"in V&&(V.layout&&(F=V.layout),delete V.layout);var H=A;if("loader"in V){if(V.loader){var T=V.loader;H=function(e){e.config;var t=u(e,["config"]);return T(t)}}delete V.loader}var G="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var J=S(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(D=D||J.blurDataURL,G=J.src,(!F||"fill"!==F)&&(Z=Z||J.height,P=P||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var Q=!y&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Q=!1);h.has(t)&&(Q=!1);U.unoptimized&&(l=!0);var $,K=i(s.useState(!1),2),X=K[0],Y=K[1],ee=i(g.useIntersection({rootRef:k,rootMargin:x||"200px",disabled:!Q}),3),te=ee[0],ne=ee[1],re=ee[2],ie=!Q||ne,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:L},ue=z(P),se=z(Z),de=z(_);0;var fe=Object.assign({},R,le),ge="blur"!==N||X?{}:{backgroundSize:C||"cover",backgroundPosition:L||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===F)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof ue&&"undefined"!==typeof se){var pe=se/ue,me=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===F?(oe.display="block",oe.position="relative",ce=!0,ae.paddingTop=me):"intrinsic"===F?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",ce=!0,ae.maxWidth="100%",$="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ue,"%27%20height=%27").concat(se,"%27/%3e")):"fixed"===F&&(oe.display="inline-block",oe.position="relative",oe.width=ue,oe.height=se)}else 0;var ye={src:v,srcSet:void 0,sizes:void 0};ie&&(ye=j({config:U,src:t,unoptimized:l,layout:F,width:ue,quality:de,sizes:n,loader:H}));var be=t;0;var he,ve="imagesrcset",we="imagesizes";ve="imageSrcSet",we="imageSizes";var Se=(r(he={},ve,ye.srcSet),r(he,we,ye.sizes),r(he,"crossOrigin",V.crossOrigin),he),je=s.default.useLayoutEffect,ze=s.useRef(M),Ae=s.useRef(t);s.useEffect((function(){ze.current=M}),[M]),je((function(){Ae.current!==t&&(re(),Ae.current=t)}),[re,t]);var Oe=a({isLazy:Q,imgAttributes:ye,heightInt:se,widthInt:ue,qualityInt:de,layout:F,className:E,imgStyle:fe,blurStyle:ge,loading:w,config:U,unoptimized:l,placeholder:N,loader:H,srcString:be,onLoadingCompleteRef:ze,setBlurComplete:Y,setIntersection:te,isVisible:ie,noscriptSizes:n},V);return s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:oe},ce?s.default.createElement("span",{style:ae},$?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:$}):null):null,s.default.createElement(I,Object.assign({},Oe))),y?s.default.createElement(d.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},Se))):null)};var a=n(6495).Z,c=n(2648).Z,l=n(1598).Z,u=n(7273).Z,s=l(n(7294)),d=c(n(5443)),f=n(9309),g=n(7190),p=n(9977),m=(n(3794),n(2392));function y(e){return"/"===e[0]?e.slice(1):e}var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"./",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1},h=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(y(n))),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString()),o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(y(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(y(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function j(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,c=e.quality,l=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,u=[];c=l.exec(r);c)u.push(parseInt(c[2]));if(u.length){var s,d=.01*(s=Math).min.apply(s,o(u));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,l),d=s.widths,f=s.kind,g=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,r){return"".concat(u({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:u({config:t,src:n,quality:c,width:d[g]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=w.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function O(e,t,n,r,i,o){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(h.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var I=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,c=e.imgStyle,l=e.blurStyle,d=e.isLazy,f=e.placeholder,g=e.loading,p=e.srcString,m=e.config,y=e.unoptimized,b=e.loader,h=e.onLoadingCompleteRef,v=e.setBlurComplete,w=e.setIntersection,S=e.onLoad,z=e.onError,A=(e.isVisible,e.noscriptSizes),I=u(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=d?"lazy":g,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},I,t,{decoding:"async","data-nimg":i,className:o,style:a({},c,l),ref:s.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&O(e,p,0,f,h,v)}),[w,p,i,f,h,v]),onLoad:function(e){O(e.currentTarget,p,0,f,h,v),S&&S(e)},onError:function(e){"blur"===f&&v(!0),z&&z(e)}})),(d||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},I,j({config:m,src:p,unoptimized:y,layout:i,width:n,quality:r,sizes:A,loader:b}),{decoding:"async","data-nimg":i,style:c,className:o,loading:g}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,u=e.disabled||!a,s=r(i.useState(!1),2),d=s[0],f=s[1],g=r(i.useState(null),2),p=g[0],m=g[1];i.useEffect((function(){if(a){if(u||d)return;if(p&&p.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=c.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},l.push(n),c.set(n,t),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),c.delete(i);var t=l.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&l.splice(t,1)}}}(p,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var r=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(r)}}}),[p,u,n,t,d]);var y=i.useCallback((function(){f(!1)}),[]);return[m,d,y]};var i=n(7294),o=n(9311),a="function"===typeof IntersectionObserver,c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,n){e.exports=n(8045)},943:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},3375:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return r}})},828:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(3375);var i=n(1566);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,t)||(0,i.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},9815:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(943);var i=n(3375);var o=n(1566);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,i.Z)(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(943);function i(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);