/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{439:function(t,e,n){var map={"./af":304,"./af.js":304,"./ar":305,"./ar-dz":306,"./ar-dz.js":306,"./ar-kw":307,"./ar-kw.js":307,"./ar-ly":308,"./ar-ly.js":308,"./ar-ma":309,"./ar-ma.js":309,"./ar-sa":310,"./ar-sa.js":310,"./ar-tn":311,"./ar-tn.js":311,"./ar.js":305,"./az":312,"./az.js":312,"./be":313,"./be.js":313,"./bg":314,"./bg.js":314,"./bm":315,"./bm.js":315,"./bn":316,"./bn.js":316,"./bo":317,"./bo.js":317,"./br":318,"./br.js":318,"./bs":319,"./bs.js":319,"./ca":320,"./ca.js":320,"./cs":321,"./cs.js":321,"./cv":322,"./cv.js":322,"./cy":323,"./cy.js":323,"./da":324,"./da.js":324,"./de":325,"./de-at":326,"./de-at.js":326,"./de-ch":327,"./de-ch.js":327,"./de.js":325,"./dv":328,"./dv.js":328,"./el":329,"./el.js":329,"./en-au":330,"./en-au.js":330,"./en-ca":331,"./en-ca.js":331,"./en-gb":332,"./en-gb.js":332,"./en-ie":333,"./en-ie.js":333,"./en-il":334,"./en-il.js":334,"./en-in":335,"./en-in.js":335,"./en-nz":336,"./en-nz.js":336,"./en-sg":337,"./en-sg.js":337,"./eo":338,"./eo.js":338,"./es":339,"./es-do":340,"./es-do.js":340,"./es-us":341,"./es-us.js":341,"./es.js":339,"./et":342,"./et.js":342,"./eu":343,"./eu.js":343,"./fa":344,"./fa.js":344,"./fi":345,"./fi.js":345,"./fil":346,"./fil.js":346,"./fo":347,"./fo.js":347,"./fr":348,"./fr-ca":349,"./fr-ca.js":349,"./fr-ch":350,"./fr-ch.js":350,"./fr.js":348,"./fy":351,"./fy.js":351,"./ga":352,"./ga.js":352,"./gd":353,"./gd.js":353,"./gl":354,"./gl.js":354,"./gom-deva":355,"./gom-deva.js":355,"./gom-latn":356,"./gom-latn.js":356,"./gu":357,"./gu.js":357,"./he":358,"./he.js":358,"./hi":359,"./hi.js":359,"./hr":360,"./hr.js":360,"./hu":361,"./hu.js":361,"./hy-am":362,"./hy-am.js":362,"./id":363,"./id.js":363,"./is":364,"./is.js":364,"./it":365,"./it-ch":366,"./it-ch.js":366,"./it.js":365,"./ja":367,"./ja.js":367,"./jv":368,"./jv.js":368,"./ka":369,"./ka.js":369,"./kk":370,"./kk.js":370,"./km":371,"./km.js":371,"./kn":372,"./kn.js":372,"./ko":373,"./ko.js":373,"./ku":374,"./ku.js":374,"./ky":375,"./ky.js":375,"./lb":376,"./lb.js":376,"./lo":377,"./lo.js":377,"./lt":378,"./lt.js":378,"./lv":379,"./lv.js":379,"./me":380,"./me.js":380,"./mi":381,"./mi.js":381,"./mk":382,"./mk.js":382,"./ml":383,"./ml.js":383,"./mn":384,"./mn.js":384,"./mr":385,"./mr.js":385,"./ms":386,"./ms-my":387,"./ms-my.js":387,"./ms.js":386,"./mt":388,"./mt.js":388,"./my":389,"./my.js":389,"./nb":390,"./nb.js":390,"./ne":391,"./ne.js":391,"./nl":392,"./nl-be":393,"./nl-be.js":393,"./nl.js":392,"./nn":394,"./nn.js":394,"./oc-lnc":395,"./oc-lnc.js":395,"./pa-in":396,"./pa-in.js":396,"./pl":397,"./pl.js":397,"./pt":398,"./pt-br":399,"./pt-br.js":399,"./pt.js":398,"./ro":400,"./ro.js":400,"./ru":401,"./ru.js":401,"./sd":402,"./sd.js":402,"./se":403,"./se.js":403,"./si":404,"./si.js":404,"./sk":405,"./sk.js":405,"./sl":406,"./sl.js":406,"./sq":407,"./sq.js":407,"./sr":408,"./sr-cyrl":409,"./sr-cyrl.js":409,"./sr.js":408,"./ss":410,"./ss.js":410,"./sv":411,"./sv.js":411,"./sw":412,"./sw.js":412,"./ta":413,"./ta.js":413,"./te":414,"./te.js":414,"./tet":415,"./tet.js":415,"./tg":416,"./tg.js":416,"./th":417,"./th.js":417,"./tk":418,"./tk.js":418,"./tl-ph":419,"./tl-ph.js":419,"./tlh":420,"./tlh.js":420,"./tr":421,"./tr.js":421,"./tzl":422,"./tzl.js":422,"./tzm":423,"./tzm-latn":424,"./tzm-latn.js":424,"./tzm.js":423,"./ug-cn":425,"./ug-cn.js":425,"./uk":426,"./uk.js":426,"./ur":427,"./ur.js":427,"./uz":428,"./uz-latn":429,"./uz-latn.js":429,"./uz.js":428,"./vi":430,"./vi.js":430,"./x-pseudo":431,"./x-pseudo.js":431,"./yo":432,"./yo.js":432,"./zh-cn":433,"./zh-cn.js":433,"./zh-hk":434,"./zh-hk.js":434,"./zh-mo":435,"./zh-mo.js":435,"./zh-tw":436,"./zh-tw.js":436};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=439},445:function(t,e,n){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,n(3).default)("6223ff68",i,!0,{})},function(t,e,n){var i=n(8);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,n(3).default)("27f0e51f",i,!0,{})},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,r=t[1]||"",i=t[3];if(!i)return r;if(e&&"function"==typeof btoa){var a=(n=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),o=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[r].concat(o).concat([a]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(i[r]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},a=0;a<e.length;a++){var r=e[a],o=r[0],s={id:t+":"+a,css:r[1],media:r[2],sourceMap:r[3]};i[o]?i[o].parts.push(s):n.push(i[o]={id:o,parts:[s]})}return n}n.r(e),n.d(e,"default",(function(){return f}));var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},o=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,d=!1,c=function(){},u=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t,e,n,a){d=n,u=a||{};var o=i(t,e);return b(o),function(e){for(var n=[],a=0;a<o.length;a++){var s=o[a];(l=r[s.id]).refs--,n.push(l)}for(e?b(o=i(t,e)):o=[],a=0;a<n.length;a++){var l;if(0===(l=n[a]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete r[l.id]}}}}function b(t){for(var e=0;e<t.length;e++){var n=t[e],i=r[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(m(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(m(n.parts[a]));r[n.id]={id:n.id,refs:1,parts:o}}}}function h(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function m(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(d)return c;i.parentNode.removeChild(i)}if(p){var a=l++;i=s||(s=h()),e=y.bind(null,i,a,!1),n=y.bind(null,i,a,!0)}else i=h(),e=w.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var g,v=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function y(t,e,n,i){var a=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=v(e,a);else{var r=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function w(t,e){var n=e.css,i=e.media,a=e.sourceMap;if(i&&t.setAttribute("media",i),u.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=a.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,'.loading-wave-dots[data-v-46b20d22]{position:relative}.loading-wave-dots[data-v-46b20d22] .wave-item{position:absolute;top:50%;left:50%;display:inline-block;margin-top:-4px;width:8px;height:8px;border-radius:50%;-webkit-animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite;animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite}.loading-wave-dots[data-v-46b20d22] .wave-item:first-child{margin-left:-36px}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(2){margin-left:-20px;-webkit-animation-delay:.14s;animation-delay:.14s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(3){margin-left:-4px;-webkit-animation-delay:.28s;animation-delay:.28s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(4){margin-left:12px;-webkit-animation-delay:.42s;animation-delay:.42s}.loading-wave-dots[data-v-46b20d22] .wave-item:last-child{margin-left:28px;-webkit-animation-delay:.56s;animation-delay:.56s}@-webkit-keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}@keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}.loading-circles[data-v-46b20d22] .circle-item{width:5px;height:5px;-webkit-animation:loading-circles-data-v-46b20d22 linear .75s infinite;animation:loading-circles-data-v-46b20d22 linear .75s infinite}.loading-circles[data-v-46b20d22] .circle-item:first-child{margin-top:-14.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){margin-top:-11.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){margin-top:-2.5px;margin-left:9.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){margin-top:6.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){margin-top:9.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){margin-top:6.26px;margin-left:-11.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){margin-top:-2.5px;margin-left:-14.5px}.loading-circles[data-v-46b20d22] .circle-item:last-child{margin-top:-11.26px;margin-left:-11.26px}@-webkit-keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}@keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}.loading-bubbles[data-v-46b20d22] .bubble-item{background:#666;-webkit-animation:loading-bubbles-data-v-46b20d22 linear .75s infinite;animation:loading-bubbles-data-v-46b20d22 linear .75s infinite}.loading-bubbles[data-v-46b20d22] .bubble-item:first-child{margin-top:-12.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2){margin-top:-9.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3){margin-top:-.5px;margin-left:11.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4){margin-top:8.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5){margin-top:11.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6){margin-top:8.26px;margin-left:-9.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7){margin-top:-.5px;margin-left:-12.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child{margin-top:-9.26px;margin-left:-9.26px}@-webkit-keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}@keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}.loading-default[data-v-46b20d22]{position:relative;border:1px solid #999;-webkit-animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite;animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite}.loading-default[data-v-46b20d22]:before{content:"";position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[data-v-46b20d22]{border:2px solid #777;border-right-color:transparent;-webkit-animation:loading-rotating-data-v-46b20d22 linear .85s infinite;animation:loading-rotating-data-v-46b20d22 linear .85s infinite}@-webkit-keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loading-bubbles[data-v-46b20d22],.loading-circles[data-v-46b20d22]{position:relative}.loading-bubbles[data-v-46b20d22] .bubble-item,.loading-circles[data-v-46b20d22] .circle-item{position:absolute;top:50%;left:50%;display:inline-block;border-radius:50%}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2),.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){-webkit-animation-delay:93ms;animation-delay:93ms}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3),.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){-webkit-animation-delay:.186s;animation-delay:.186s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4),.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){-webkit-animation-delay:.279s;animation-delay:.279s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5),.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){-webkit-animation-delay:.372s;animation-delay:.372s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6),.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){-webkit-animation-delay:.465s;animation-delay:.465s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7),.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){-webkit-animation-delay:.558s;animation-delay:.558s}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child,.loading-circles[data-v-46b20d22] .circle-item:last-child{-webkit-animation-delay:.651s;animation-delay:.651s}',""])},function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e.default=a.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".infinite-loading-container[data-v-644ea9c9]{clear:both;text-align:center}.infinite-loading-container[data-v-644ea9c9] [class^=loading-]{display:inline-block;margin:5px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.btn-try-infinite[data-v-644ea9c9]{margin-top:5px;padding:5px 10px;color:#999;font-size:14px;line-height:1;background:transparent;border:1px solid #ccc;border-radius:3px;outline:none;cursor:pointer}.btn-try-infinite[data-v-644ea9c9]:not(:active):hover{opacity:.8}",""])},function(t,e,n){"use strict";n.r(e);var i={throttleLimit:50,loopCheckTimeout:1e3,loopCheckMaxCalls:10},a=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){return t={passive:!0},!0}});window.addEventListener("testpassive",e,e),window.remove("testpassive",e,e)}catch(t){}return t}(),r={STATE_CHANGER:["emit `loaded` and `complete` event through component instance of `$refs` may cause error, so it will be deprecated soon, please use the `$state` argument instead (`$state` just the special `$event` variable):","\ntemplate:",'<infinite-loading @infinite="infiniteHandler"></infinite-loading>',"\nscript:\n...\ninfiniteHandler($state) {\n  ajax('https://www.example.com/api/news')\n    .then((res) => {\n      if (res.data.length) {\n        $state.loaded();\n      } else {\n        $state.complete();\n      }\n    });\n}\n...","","more details: https://github.com/PeachScript/vue-infinite-loading/issues/57#issuecomment-324370549"].join("\n"),INFINITE_EVENT:"`:on-infinite` property will be deprecated soon, please use `@infinite` event instead.",IDENTIFIER:"the `reset` event will be deprecated soon, please reset this component by change the `identifier` property."},o={INFINITE_LOOP:["executed the callback function more than ".concat(i.loopCheckMaxCalls," times for a short time, it looks like searched a wrong scroll wrapper that doest not has fixed height or maximum height, please check it. If you want to force to set a element as scroll wrapper ranther than automatic searching, you can do this:"),'\n\x3c!-- add a special attribute for the real scroll wrapper --\x3e\n<div infinite-wrapper>\n  ...\n  \x3c!-- set force-use-infinite-wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper></infinite-loading>\n</div>\nor\n<div class="infinite-wrapper">\n  ...\n  \x3c!-- set force-use-infinite-wrapper as css selector of the real scroll wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper=".infinite-wrapper"></infinite-loading>\n</div>\n    ',"more details: https://github.com/PeachScript/vue-infinite-loading/issues/55#issuecomment-316934169"].join("\n")},s={READY:0,LOADING:1,COMPLETE:2,ERROR:3},l={color:"#666",fontSize:"14px",padding:"10px 0"},d={mode:"development",props:{spinner:"default",distance:100,forceUseInfiniteWrapper:!1},system:i,slots:{noResults:"No results :(",noMore:"No more data :)",error:"Opps, something went wrong :(",errorBtnText:"Retry",spinner:""},WARNINGS:r,ERRORS:o,STATUS:s},c=n(4),u=n.n(c),p={BUBBLES:{render:function(t){return t("span",{attrs:{class:"loading-bubbles"}},Array.apply(Array,Array(8)).map((function(){return t("span",{attrs:{class:"bubble-item"}})})))}},CIRCLES:{render:function(t){return t("span",{attrs:{class:"loading-circles"}},Array.apply(Array,Array(8)).map((function(){return t("span",{attrs:{class:"circle-item"}})})))}},DEFAULT:{render:function(t){return t("i",{attrs:{class:"loading-default"}})}},SPIRAL:{render:function(t){return t("i",{attrs:{class:"loading-spiral"}})}},WAVEDOTS:{render:function(t){return t("span",{attrs:{class:"loading-wave-dots"}},Array.apply(Array,Array(5)).map((function(){return t("span",{attrs:{class:"wave-item"}})})))}}};function f(t,e,n,i,a,r,o,s){var l,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=l):a&&(l=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(t,e){return l.call(e),c(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:d}}var b=f({name:"Spinner",computed:{spinnerView:function(){return p[(this.$attrs.spinner||"").toUpperCase()]||this.spinnerInConfig},spinnerInConfig:function(){return d.slots.spinner&&"string"==typeof d.slots.spinner?{render:function(){return this._v(d.slots.spinner)}}:"object"===u()(d.slots.spinner)?d.slots.spinner:p[d.props.spinner.toUpperCase()]||p.DEFAULT}}},(function(){var t=this.$createElement;return(this._self._c||t)(this.spinnerView,{tag:"component"})}),[],!1,(function(t){var e=n(5);e.__inject__&&e.__inject__(t)}),"46b20d22",null).exports;function h(t){"production"!==d.mode&&console.warn("[Vue-infinite-loading warn]: ".concat(t))}var g={timers:[],caches:[],throttle:function(t){var e=this;-1===this.caches.indexOf(t)&&(this.caches.push(t),this.timers.push(setTimeout((function(){t(),e.caches.splice(e.caches.indexOf(t),1),e.timers.shift()}),d.system.throttleLimit)))},reset:function(){this.timers.forEach((function(t){clearTimeout(t)})),this.timers.length=0,this.caches=[]}},m={isChecked:!1,timer:null,times:0,track:function(){var t=this;this.times+=1,clearTimeout(this.timer),this.timer=setTimeout((function(){t.isChecked=!0}),d.system.loopCheckTimeout),this.times>d.system.loopCheckMaxCalls&&(function(t){console.error("[Vue-infinite-loading error]: ".concat(t))}(o.INFINITE_LOOP),this.isChecked=!0)}},v={key:"_infiniteScrollHeight",getScrollElm:function(t){return t===window?document.documentElement:t},save:function(t){var e=this.getScrollElm(t);e[this.key]=e.scrollHeight},restore:function(t){var e=this.getScrollElm(t);"number"==typeof e[this.key]&&(e.scrollTop=e.scrollHeight-e[this.key]+e.scrollTop),this.remove(e)},remove:function(t){void 0!==t[this.key]&&delete t[this.key]}};function y(t){return t.offsetWidth+t.offsetHeight>0}var w=f({name:"InfiniteLoading",data:function(){return{scrollParent:null,scrollHandler:null,isFirstLoad:!0,status:s.READY,slots:d.slots}},components:{Spinner:b},computed:{isShowSpinner:function(){return this.status===s.LOADING},isShowError:function(){return this.status===s.ERROR},isShowNoResults:function(){return this.status===s.COMPLETE&&this.isFirstLoad},isShowNoMore:function(){return this.status===s.COMPLETE&&!this.isFirstLoad},slotStyles:function(){var t=this,e={};return Object.keys(d.slots).forEach((function(n){var i=function(t){return t.replace(/[A-Z]/g,(function(t){return"-".concat(t.toLowerCase())}))}(n);(!t.$slots[i]&&!d.slots[n].render||t.$slots[i]&&!t.$slots[i][0].tag)&&(e[n]=l)})),e}},props:{distance:{type:Number,default:d.props.distance},spinner:String,direction:{type:String,default:"bottom"},forceUseInfiniteWrapper:{type:[Boolean,String],default:d.props.forceUseInfiniteWrapper},identifier:{default:+new Date},onInfinite:Function},watch:{identifier:function(){this.stateChanger.reset()}},mounted:function(){var t=this;this.$watch("forceUseInfiniteWrapper",(function(){t.scrollParent=t.getScrollParent()}),{immediate:!0}),this.scrollHandler=function(e){t.status===s.READY&&(e&&e.constructor===Event&&y(t.$el)?g.throttle(t.attemptLoad):t.attemptLoad())},setTimeout((function(){t.scrollHandler(),t.scrollParent.addEventListener("scroll",t.scrollHandler,a)}),1),this.$on("$InfiniteLoading:loaded",(function(e){t.isFirstLoad=!1,"top"===t.direction&&t.$nextTick((function(){v.restore(t.scrollParent)})),t.status===s.LOADING&&t.$nextTick(t.attemptLoad.bind(null,!0)),e&&e.target===t||h(r.STATE_CHANGER)})),this.$on("$InfiniteLoading:complete",(function(e){t.status=s.COMPLETE,t.$nextTick((function(){t.$forceUpdate()})),t.scrollParent.removeEventListener("scroll",t.scrollHandler,a),e&&e.target===t||h(r.STATE_CHANGER)})),this.$on("$InfiniteLoading:reset",(function(e){t.status=s.READY,t.isFirstLoad=!0,v.remove(t.scrollParent),t.scrollParent.addEventListener("scroll",t.scrollHandler,a),setTimeout((function(){g.reset(),t.scrollHandler()}),1),e&&e.target===t||h(r.IDENTIFIER)})),this.stateChanger={loaded:function(){t.$emit("$InfiniteLoading:loaded",{target:t})},complete:function(){t.$emit("$InfiniteLoading:complete",{target:t})},reset:function(){t.$emit("$InfiniteLoading:reset",{target:t})},error:function(){t.status=s.ERROR,g.reset()}},this.onInfinite&&h(r.INFINITE_EVENT)},deactivated:function(){this.status===s.LOADING&&(this.status=s.READY),this.scrollParent.removeEventListener("scroll",this.scrollHandler,a)},activated:function(){this.scrollParent.addEventListener("scroll",this.scrollHandler,a)},methods:{attemptLoad:function(t){var e=this;this.status!==s.COMPLETE&&y(this.$el)&&this.getCurrentDistance()<=this.distance?(this.status=s.LOADING,"top"===this.direction&&this.$nextTick((function(){v.save(e.scrollParent)})),"function"==typeof this.onInfinite?this.onInfinite.call(null,this.stateChanger):this.$emit("infinite",this.stateChanger),!t||this.forceUseInfiniteWrapper||m.isChecked||m.track()):this.status===s.LOADING&&(this.status=s.READY)},getCurrentDistance:function(){return"top"===this.direction?"number"==typeof this.scrollParent.scrollTop?this.scrollParent.scrollTop:this.scrollParent.pageYOffset:this.$el.getBoundingClientRect().top-(this.scrollParent===window?window.innerHeight:this.scrollParent.getBoundingClientRect().bottom)},getScrollParent:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$el;return"string"==typeof this.forceUseInfiniteWrapper&&(t=document.querySelector(this.forceUseInfiniteWrapper)),t||("BODY"===e.tagName?t=window:(!this.forceUseInfiniteWrapper&&["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1||e.hasAttribute("infinite-wrapper")||e.hasAttribute("data-infinite-wrapper"))&&(t=e)),t||this.getScrollParent(e.parentNode)}},destroyed:function(){!this.status!==s.COMPLETE&&(g.reset(),v.remove(this.scrollParent),this.scrollParent.removeEventListener("scroll",this.scrollHandler,a))}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"infinite-loading-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowSpinner,expression:"isShowSpinner"}],staticClass:"infinite-status-prompt",style:t.slotStyles.spinner},[t._t("spinner",[n("spinner",{attrs:{spinner:t.spinner}})])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowNoResults,expression:"isShowNoResults"}],staticClass:"infinite-status-prompt",style:t.slotStyles.noResults},[t._t("no-results",[t.slots.noResults.render?n(t.slots.noResults,{tag:"component"}):[t._v(t._s(t.slots.noResults))]])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowNoMore,expression:"isShowNoMore"}],staticClass:"infinite-status-prompt",style:t.slotStyles.noMore},[t._t("no-more",[t.slots.noMore.render?n(t.slots.noMore,{tag:"component"}):[t._v(t._s(t.slots.noMore))]])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowError,expression:"isShowError"}],staticClass:"infinite-status-prompt",style:t.slotStyles.error},[t._t("error",[t.slots.error.render?n(t.slots.error,{tag:"component",attrs:{trigger:t.attemptLoad}}):[t._v("\n        "+t._s(t.slots.error)+"\n        "),n("br"),t._v(" "),n("button",{staticClass:"btn-try-infinite",domProps:{textContent:t._s(t.slots.errorBtnText)},on:{click:t.attemptLoad}})]],{trigger:t.attemptLoad})],2)])}),[],!1,(function(t){var e=n(7);e.__inject__&&e.__inject__(t)}),"644ea9c9",null).exports;function x(t){d.mode=t.config.productionTip?"development":"production"}Object.defineProperty(w,"install",{configurable:!1,enumerable:!1,value:function(t,e){Object.assign(d.props,e&&e.props),Object.assign(d.slots,e&&e.slots),Object.assign(d.system,e&&e.system),t.component("infinite-loading",w),x(t)}}),"undefined"!=typeof window&&window.Vue&&(window.Vue.component("infinite-loading",w),x(window.Vue)),e.default=w}])},449:function(t,e,n){var content=n(496);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("2151c9e7",content,!0,{sourceMap:!1})},452:function(t,e){},495:function(t,e,n){"use strict";var r=n(449);n.n(r).a},496:function(t,e,n){(e=n(44)(!1)).push([t.i,".full-height[data-v-02716392]{height:100vh}.chat-toggle[data-v-02716392]{position:absolute;left:-40px;width:40px;background:#fff}.chat-typing-area[data-v-02716392]{position:relative}.text-small[data-v-02716392]{font-size:.9rem}.chat-box[data-v-02716392],.messages-box[data-v-02716392]{height:calc(100vh - 48px);overflow-y:scroll}.rounded-lg[data-v-02716392]{border-radius:.5rem}input[data-v-02716392]::-moz-placeholder{font-size:.9rem;color:#999}input[data-v-02716392]:-ms-input-placeholder{font-size:.9rem;color:#999}input[data-v-02716392]::placeholder{font-size:.9rem;color:#999}.dot[data-v-02716392]{height:10px;width:10px;background-color:red;border-radius:50%;display:inline-block}.video-overlay[data-v-02716392]{position:absolute;width:100%;z-index:999990;background:transparent;padding:0 35px;color:#fff}.video-overlay a[data-v-02716392]{color:#fff;font-size:20px}.video-overlay span[data-v-02716392]{color:#fff;line-height:20px}.video-overlay-top[data-v-02716392]{top:-35px;left:0}",""]),t.exports=e},516:function(t,e,n){"use strict";n.r(e);n(12);var r=n(0),o=n(302),l=n.n(o),d=n(462),c=n(445),f={layout:"fullscreen-video",head:function(){return{title:this.video.title+" - Plaive"}},components:{InfiniteLoading:n.n(c).a},data:function(){return{showChat:!0,page:1,chatScrollPosition:null,typedMessage:"",player:null,videoOptions:Object(r.a)({autoplay:!1,controls:!0,techOrder:["AmazonIVS"],fluid:!0,liveui:!0},"controls",!1),video:{title:"Contrary to popular belief, Lorem Ipsum (2020) is not.",category:"Education",date:l()().format("DD/MM/YYYY"),start:"14:30",end:"16:00",playbackUrl:"https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8",purchased:!0},chatMessages:[]}},methods:{infiniteHandler:function(t){this.page+=1;for(var i=35;i>0;i--)this.chatMessages.push({nickname:"username",message:"Test which is a new approach all solutions",timestamp:l()().add(-i,"minutes").format("HH:mm:ss")});this.chatMessages.unshift([]),t.loaded()},onFullScreenChange:function(){void 0===(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)&&this.$router.replace("/video/1").catch((function(){})),!1===(document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen)&&this.$router.replace("/video/1").catch((function(){}))},sendMessage:function(){var t=this;this.chatMessages.push({nickname:"username",message:this.typedMessage,timestamp:l()().format("HH:mm:ss")}),this.typedMessage="",this.$nextTick((function(){t.$refs.chatBoxEnd.scrollIntoView()}))},showChatBox:function(){var t=this;this.showChat=!0,this.$nextTick((function(){t.$refs.chatBoxEnd.scrollIntoView()}))}},beforeMount:function(){document.addEventListener("fullscreenchange",this.onFullScreenChange),document.addEventListener("webkitfullscreenchange",this.onFullScreenChange),document.addEventListener("mozfullscreenchange",this.onFullScreenChange)},beforeDestroy:function(){document.removeEventListener("fullscreenchange",self.onFullScreenChange),document.removeEventListener("webkitfullscreenchange",self.onFullScreenChange),document.removeEventListener("mozfullscreenchange",self.onFullScreenChange)},mounted:function(){var t=this,e=this.video.playbackUrl;registerIVSTech(d.a),this.player=Object(d.a)(this.$refs.videoPlayer,this.videoOptions,(function(){this.src(e)})),this.$refs.videoContainer.requestFullscreen();for(var i=35;i>0;i--)this.chatMessages.push({nickname:"username",message:"Test which is a new approach all solutions",timestamp:l()().add(-i,"minutes").format("HH:mm:ss")});!0===this.showChat&&this.$nextTick((function(){t.$refs.chatBoxEnd.scrollIntoView()}))}},h=(n(495),n(19)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"videoContainer"},[n("div",{staticClass:"row no-gutters"},[n("div",{class:!0===t.showChat?"col-10":"col-12 full-height"},[n("div",{staticStyle:{position:"relative",top:"50%",transform:"translateY(-50%)"}},[n("div",{staticClass:"video-overlay video-overlay-top"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-2"},[n("nuxt-link",{attrs:{to:"/video/1"}},[n("font-awesome-icon",{attrs:{icon:["fas","arrow-left"]}})],1)],1),t._v(" "),n("div",{staticClass:"col-8 text-center"},[n("span",{staticStyle:{"font-size":"20px"}},[t._v(t._s(t.video.title))])]),t._v(" "),n("div",{staticClass:"col-2 text-right"},[n("span",{staticClass:"dot mr-2"}),t._v(" "),n("span",[t._v("LIVE")]),t._v(" "),!1===t.showChat?n("button",{staticClass:"btn btn-link border-none",staticStyle:{color:"#fff","font-size":"20px"},on:{click:t.showChatBox}},[n("font-awesome-icon",{attrs:{icon:["fas","comment"]}})],1):t._e()])])]),t._v(" "),n("video",{ref:"videoPlayer",staticClass:"video-js vjs-16-9 vjs-big-play-centered",attrs:{controls:"",autoplay:"",playsinline:""}})])]),t._v(" "),!0===t.showChat?n("div",{staticClass:"col-2"},[n("div",{staticClass:"chat-toggle"},[!0===t.showChat?n("button",{staticClass:"btn btn-link text-danger border-none",staticStyle:{"font-size":"20px"},on:{click:function(e){t.showChat=!1}}},[n("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1):t._e()]),t._v(" "),n("div",{staticClass:"px-2 py-2 chat-box bg-white"},[n("infinite-loading",{attrs:{direction:"top"},on:{infinite:t.infiniteHandler}}),t._v(" "),t._l(t.chatMessages,(function(e,r){return n("div",{key:r,staticClass:"media mb-2"},[n("img",{staticClass:"rounded-circle",attrs:{src:"https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg",alt:"user",width:"25"}}),t._v(" "),n("div",{staticClass:"media-body ml-1"},[n("div",{staticClass:"bg-light rounded py-1 px-1 mb-1"},[n("p",{staticClass:"text-small mb-0 text-muted"},[t._v(t._s(e.message))]),t._v(" "),n("p",{staticClass:"small text-muted mb-0"},[t._v(t._s(e.nickname)+" @"+t._s(e.timestamp))])])])])})),t._v(" "),n("div",{ref:"chatBoxEnd",staticStyle:{height:"55px"}})],2),t._v(" "),n("div",{staticClass:"chat-typing-area"},[n("form",{staticClass:"bg-light",on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.typedMessage,expression:"typedMessage"}],staticClass:"form-control rounded-0 border-0 py-4 bg-light",attrs:{type:"text",placeholder:"Type a message"},domProps:{value:t.typedMessage},on:{input:function(e){e.target.composing||(t.typedMessage=e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-link text-success",attrs:{type:"submit"}},[n("font-awesome-icon",{attrs:{icon:["fas","paper-plane"]}})],1)])])])])]):t._e()])])}),[],!1,null,"02716392",null);e.default=component.exports}}]);