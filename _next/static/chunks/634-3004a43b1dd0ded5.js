(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,r=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,l=e.unoptimized,c=void 0!==l&&l,p=e.priority,h=void 0!==p&&p,w=e.loading,I=e.lazyRoot,x=void 0===I?null:I,E=e.lazyBoundary,_=e.className,O=e.quality,R=e.width,C=e.height,L=e.style,M=e.objectFit,Z=e.objectPosition,q=e.onLoadingComplete,N=e.placeholder,P=void 0===N?"empty":N,W=e.blurDataURL,B=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=u.useContext(m.ImageConfigContext),U=u.useMemo((function(){var e=y||D||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[D]),V=B,F=n?"responsive":"intrinsic";"layout"in V&&(V.layout&&(F=V.layout),delete V.layout);var H=j;if("loader"in V){if(V.loader){var T=V.loader;H=function(e){e.config;var t=s(e,["config"]);return T(t)}}delete V.loader}var G="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var J=S(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(W=W||J.blurDataURL,G=J.src,(!F||"fill"!==F)&&(C=C||J.height,R=R||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var Q=!h&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(c=!0,Q=!1);v.has(t)&&(Q=!1);U.unoptimized&&(c=!0);var $,K=r(u.useState(!1),2),X=K[0],Y=K[1],ee=r(g.useIntersection({rootRef:x,rootMargin:E||"200px",disabled:!Q}),3),te=ee[0],ne=ee[1],ie=ee[2],re=!Q||ne,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:Z},se=A(R),ue=A(C),de=A(O);0;var fe=Object.assign({},L,ce),ge="blur"!==P||X?{}:{backgroundSize:M||"cover",backgroundPosition:Z||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===F)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof se&&"undefined"!==typeof ue){var me=ue/se,pe=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===F?(oe.display="block",oe.position="relative",le=!0,ae.paddingTop=pe):"intrinsic"===F?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",le=!0,ae.maxWidth="100%",$="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(se,"%27%20height=%27").concat(ue,"%27/%3e")):"fixed"===F&&(oe.display="inline-block",oe.position="relative",oe.width=se,oe.height=ue)}else 0;var he={src:b,srcSet:void 0,sizes:void 0};re&&(he=z({config:U,src:t,unoptimized:c,layout:F,width:se,quality:de,sizes:n,loader:H}));var ye=t;0;var ve,be="imagesrcset",we="imagesizes";be="imageSrcSet",we="imageSizes";var Se=(i(ve={},be,he.srcSet),i(ve,we,he.sizes),i(ve,"crossOrigin",V.crossOrigin),ve),ze=u.default.useLayoutEffect,Ae=u.useRef(q),je=u.useRef(t);u.useEffect((function(){Ae.current=q}),[q]),ze((function(){je.current!==t&&(ie(),je.current=t)}),[ie,t]);var Ie=a({isLazy:Q,imgAttributes:he,heightInt:ue,widthInt:se,qualityInt:de,layout:F,className:_,imgStyle:fe,blurStyle:ge,loading:w,config:U,unoptimized:c,placeholder:P,loader:H,srcString:ye,onLoadingCompleteRef:Ae,setBlurComplete:Y,setIntersection:te,isVisible:re,noscriptSizes:n},V);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:oe},le?u.default.createElement("span",{style:ae},$?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:$}):null):null,u.default.createElement(k,Object.assign({},Ie))),h?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+he.src+he.srcSet+he.sizes,rel:"preload",as:"image",href:he.srcSet?void 0:he.src},Se))):null)};var a=n(6495).Z,l=n(2648).Z,c=n(1598).Z,s=n(7273).Z,u=c(n(7294)),d=l(n(5443)),f=n(9309),g=n(7190),m=n(9977),p=(n(3794),n(2392));function h(e){return"/"===e[0]?e.slice(1):e}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"./",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1},v=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(h(n))),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString()),o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(h(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(h(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function z(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,l=e.quality,c=e.sizes,s=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(i);l)s.push(parseInt(l[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,o(s));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,c),d=u.widths,f=u.kind,g=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,i){return"".concat(s({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:l,width:d[g]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=w.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function I(e,t,n,i,r,o){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,o=e.className,l=e.imgStyle,c=e.blurStyle,d=e.isLazy,f=e.placeholder,g=e.loading,m=e.srcString,p=e.config,h=e.unoptimized,y=e.loader,v=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,S=e.onLoad,A=e.onError,j=(e.isVisible,e.noscriptSizes),k=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=d?"lazy":g,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},k,t,{decoding:"async","data-nimg":r,className:o,style:a({},l,c),ref:u.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&I(e,m,0,f,v,b)}),[w,m,r,f,v,b]),onLoad:function(e){I(e.currentTarget,m,0,f,v,b),S&&S(e)},onError:function(e){"blur"===f&&b(!0),A&&A(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},k,z({config:p,src:m,unoptimized:h,layout:r,width:n,quality:i,sizes:j,loader:y}),{decoding:"async","data-nimg":r,style:l,className:o,loading:g}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,u=i(r.useState(!1),2),d=u[0],f=u[1],g=i(r.useState(null),2),m=g[0],p=g[1];r.useEffect((function(){if(a){if(s||d)return;if(m&&m.tagName){var e=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=l.get(i)))return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:r},c.push(n),l.set(n,t),t}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(r);var t=c.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&c.splice(t,1)}}}(m,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var i=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(i)}}}),[m,s,n,t,d]);var h=r.useCallback((function(){f(!1)}),[]);return[p,d,h]};var r=n(7294),o=n(9311),a="function"===typeof IntersectionObserver,l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,n){e.exports=n(8045)},943:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}n.d(t,{Z:function(){return i}})},3375:function(e,t,n){"use strict";function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return i}})},9815:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(943);var r=n(3375);var o=n(1566);function a(e){return function(e){if(Array.isArray(e))return(0,i.Z)(e)}(e)||(0,r.Z)(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(943);function r(e,t){if(e){if("string"===typeof e)return(0,i.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,i.Z)(e,t):void 0}}}}]);