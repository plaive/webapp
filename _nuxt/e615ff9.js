(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{435:function(t,e,n){var content=n(443);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("40d91bcf",content,!0,{sourceMap:!1})},437:function(t,e,n){"use strict";n.r(e);n(31);var o=n(11),r={data:function(){return{logged:!1,loading:!1}},props:["channel"],methods:{subscribe:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$axios.$post("".concat(t.$config.CHANNELS_BASE_URL,"/channel/").concat(t.channel.id,"/subscribe"));case 4:t.$emit("subscribed",t.channel),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:t.loading=!1;case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()},unsubscribe:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$axios.$post("".concat(t.$config.CHANNELS_BASE_URL,"/channel/").concat(t.channel.id,"/unsubscribe"));case 4:t.$emit("unsubscribed",t.channel),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:t.loading=!1;case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()}},mounted:function(){this.logged=sessionStorage.getItem("logged")}},l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return"true"==t.logged&&null!=t.channel.subscribed?n("div",[!1===t.channel.subscribed?n("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:t.subscribe}},[!0===t.loading?n("b-spinner",{attrs:{type:"grow",label:"Loading...",small:""}}):n("span",[t._v(t._s(t.$t("subscribe")))])],1):n("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:t.unsubscribe}},[!0===t.loading?n("b-spinner",{attrs:{type:"grow",label:"Loading...",small:""}}):n("span",[t._v(t._s(t.$t("subscribed")))])],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports},438:function(t,e,n){var map={"./af":302,"./af.js":302,"./ar":303,"./ar-dz":304,"./ar-dz.js":304,"./ar-kw":305,"./ar-kw.js":305,"./ar-ly":306,"./ar-ly.js":306,"./ar-ma":307,"./ar-ma.js":307,"./ar-sa":308,"./ar-sa.js":308,"./ar-tn":309,"./ar-tn.js":309,"./ar.js":303,"./az":310,"./az.js":310,"./be":311,"./be.js":311,"./bg":312,"./bg.js":312,"./bm":313,"./bm.js":313,"./bn":314,"./bn.js":314,"./bo":315,"./bo.js":315,"./br":316,"./br.js":316,"./bs":317,"./bs.js":317,"./ca":318,"./ca.js":318,"./cs":319,"./cs.js":319,"./cv":320,"./cv.js":320,"./cy":321,"./cy.js":321,"./da":322,"./da.js":322,"./de":323,"./de-at":324,"./de-at.js":324,"./de-ch":325,"./de-ch.js":325,"./de.js":323,"./dv":326,"./dv.js":326,"./el":327,"./el.js":327,"./en-au":328,"./en-au.js":328,"./en-ca":329,"./en-ca.js":329,"./en-gb":330,"./en-gb.js":330,"./en-ie":331,"./en-ie.js":331,"./en-il":332,"./en-il.js":332,"./en-in":333,"./en-in.js":333,"./en-nz":334,"./en-nz.js":334,"./en-sg":335,"./en-sg.js":335,"./eo":336,"./eo.js":336,"./es":337,"./es-do":338,"./es-do.js":338,"./es-us":339,"./es-us.js":339,"./es.js":337,"./et":340,"./et.js":340,"./eu":341,"./eu.js":341,"./fa":342,"./fa.js":342,"./fi":343,"./fi.js":343,"./fil":344,"./fil.js":344,"./fo":345,"./fo.js":345,"./fr":346,"./fr-ca":347,"./fr-ca.js":347,"./fr-ch":348,"./fr-ch.js":348,"./fr.js":346,"./fy":349,"./fy.js":349,"./ga":350,"./ga.js":350,"./gd":351,"./gd.js":351,"./gl":352,"./gl.js":352,"./gom-deva":353,"./gom-deva.js":353,"./gom-latn":354,"./gom-latn.js":354,"./gu":355,"./gu.js":355,"./he":356,"./he.js":356,"./hi":357,"./hi.js":357,"./hr":358,"./hr.js":358,"./hu":359,"./hu.js":359,"./hy-am":360,"./hy-am.js":360,"./id":361,"./id.js":361,"./is":362,"./is.js":362,"./it":363,"./it-ch":364,"./it-ch.js":364,"./it.js":363,"./ja":365,"./ja.js":365,"./jv":366,"./jv.js":366,"./ka":367,"./ka.js":367,"./kk":368,"./kk.js":368,"./km":369,"./km.js":369,"./kn":370,"./kn.js":370,"./ko":371,"./ko.js":371,"./ku":372,"./ku.js":372,"./ky":373,"./ky.js":373,"./lb":374,"./lb.js":374,"./lo":375,"./lo.js":375,"./lt":376,"./lt.js":376,"./lv":377,"./lv.js":377,"./me":378,"./me.js":378,"./mi":379,"./mi.js":379,"./mk":380,"./mk.js":380,"./ml":381,"./ml.js":381,"./mn":382,"./mn.js":382,"./mr":383,"./mr.js":383,"./ms":384,"./ms-my":385,"./ms-my.js":385,"./ms.js":384,"./mt":386,"./mt.js":386,"./my":387,"./my.js":387,"./nb":388,"./nb.js":388,"./ne":389,"./ne.js":389,"./nl":390,"./nl-be":391,"./nl-be.js":391,"./nl.js":390,"./nn":392,"./nn.js":392,"./oc-lnc":393,"./oc-lnc.js":393,"./pa-in":394,"./pa-in.js":394,"./pl":395,"./pl.js":395,"./pt":396,"./pt-br":397,"./pt-br.js":397,"./pt.js":396,"./ro":398,"./ro.js":398,"./ru":399,"./ru.js":399,"./sd":400,"./sd.js":400,"./se":401,"./se.js":401,"./si":402,"./si.js":402,"./sk":403,"./sk.js":403,"./sl":404,"./sl.js":404,"./sq":405,"./sq.js":405,"./sr":406,"./sr-cyrl":407,"./sr-cyrl.js":407,"./sr.js":406,"./ss":408,"./ss.js":408,"./sv":409,"./sv.js":409,"./sw":410,"./sw.js":410,"./ta":411,"./ta.js":411,"./te":412,"./te.js":412,"./tet":413,"./tet.js":413,"./tg":414,"./tg.js":414,"./th":415,"./th.js":415,"./tk":416,"./tk.js":416,"./tl-ph":417,"./tl-ph.js":417,"./tlh":418,"./tlh.js":418,"./tr":419,"./tr.js":419,"./tzl":420,"./tzl.js":420,"./tzm":421,"./tzm-latn":422,"./tzm-latn.js":422,"./tzm.js":421,"./ug-cn":423,"./ug-cn.js":423,"./uk":424,"./uk.js":424,"./ur":425,"./ur.js":425,"./uz":426,"./uz-latn":427,"./uz-latn.js":427,"./uz.js":426,"./vi":428,"./vi.js":428,"./x-pseudo":429,"./x-pseudo.js":429,"./yo":430,"./yo.js":430,"./zh-cn":431,"./zh-cn.js":431,"./zh-hk":432,"./zh-hk.js":432,"./zh-mo":433,"./zh-mo.js":433,"./zh-tw":434,"./zh-tw.js":434};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=438},442:function(t,e,n){"use strict";var o=n(435);n.n(o).a},443:function(t,e,n){(e=n(44)(!1)).push([t.i,".play-icon-btn[data-v-fcd39870]{bottom:0;height:40px;left:0;margin:auto;position:absolute;right:0;top:0;width:40px}",""]),t.exports=e},447:function(t,e,n){"use strict";n.r(e);n(300);var o={data:function(){return{videos2:[]}},props:["title","type","videos"],methods:{deleteLesson:function(t){this.videos.splice(t,1),this.$bvModal.hide("deleteLessonModal_".concat(t))}}},r=(n(442),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-block section-padding"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"main-title"},[n("h6",[t._v(t._s(t.title))])])]),t._v(" "),t._l(t.videos,(function(video,e){return n("div",{key:e,staticClass:"col-xl-3 col-sm-6 mb-3"},[n("div",{staticClass:"video-card"},[n("div",{staticClass:"video-card-image"},[n("nuxt-link",{staticClass:"play-icon",attrs:{to:video.link}},[n("font-awesome-icon",{staticClass:"play-icon-btn",attrs:{icon:["fas","play-circle"]}})],1),t._v(" "),n("nuxt-link",{attrs:{to:video.link}},[n("img",{staticClass:"img-fluid",attrs:{src:video.img,alt:""}})]),t._v(" "),!0===video.free?n("div",{staticClass:"time"},[t._v(t._s(t.$t("free")))]):t._e()],1),t._v(" "),n("div",{staticClass:"video-card-body"},[n("div",{staticClass:"video-title"},[n("nuxt-link",{attrs:{to:video.link}},[t._v(t._s(video.title))])],1),t._v(" "),n("div",{staticClass:"video-page text-success"},[t._v("\n                        "+t._s(video.category)+"\n                    ")]),t._v(" "),n("div",{staticClass:"video-view"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("font-awesome-icon",{attrs:{icon:["fas","calendar-alt"]}}),t._v(" "+t._s(video.date)+" \n                                "),n("font-awesome-icon",{staticClass:"ml-1",attrs:{icon:["fas","clock"]}}),t._v(" "+t._s(video.start)+" - "+t._s(video.end)+"\n                            ")],1),t._v(" "),"myChannelLessons"===t.type?n("div",{staticClass:"col-md-6 text-right"},[n("nuxt-link",{attrs:{to:"/lesson/"+e}},[n("font-awesome-icon",{attrs:{icon:["fas","edit"]}}),t._v(" "+t._s(t.$t("edit")))],1),t._v(" "),n("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"deleteLessonModal_"+e,expression:"`deleteLessonModal_${index}`"}],staticClass:"text-danger ml-1"},[n("font-awesome-icon",{attrs:{icon:["fas","trash"]}}),t._v(" "+t._s(t.$t("delete")))],1),t._v(" "),n("b-modal",{attrs:{id:"deleteLessonModal_"+e,centered:""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v("\n                                        "+t._s(t.$t("deleteLessonConfirmTitle"))+"\n                                    ")]},proxy:!0},{key:"modal-footer",fn:function(){return[n("button",{staticClass:"btn btn-secondary",on:{click:function(n){return t.$bvModal.hide("deleteLessonModal_"+e)}}},[t._v(t._s(t.$t("cancel")))]),t._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:function(n){return t.deleteLesson(e)}}},[t._v(t._s(t.$t("delete")))])]},proxy:!0}],null,!0)},[t._v(" "),n("div",{staticClass:"modal-body"},[t._v(t._s(t.$t("deleteLessonConfirmBody")))])])],1):t._e()])]),t._v(" "),"myChannelLessons"===t.type?n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"col text-center"},[n("button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"streamingKeys_"+e,expression:"`streamingKeys_${index}`"}],staticClass:"btn btn-link border-none",staticStyle:{color:"rgba(0, 0, 0, 0.5)"}},[t._v(t._s(t.$t("showStreamingKeys")))]),t._v(" "),n("b-modal",{attrs:{id:"streamingKeys_"+e,centered:""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v("\n                                    "+t._s(t.videos[e].title)+" "+t._s(t.$t("streamingKeys"))+"\n                                ")]},proxy:!0},{key:"modal-footer",fn:function(){return[n("button",{staticClass:"btn btn-secondary",on:{click:function(n){return t.$bvModal.hide("streamingKeys_"+e)}}},[t._v(t._s(t.$t("close")))])]},proxy:!0}],null,!0)},[t._v(" "),n("div",{staticClass:"modal-body"},[n("form",[n("div",{staticClass:"form-group"},[n("label",[t._v(t._s(t.$t("streamingServer")))]),t._v(" "),n("input",{staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.videos[e].streamingServer}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v(t._s(t.$t("streamingKey")))]),t._v(" "),n("input",{staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.videos[e].streamingKey}})])])])])],1)]):t._e()])])])}))],2)])}),[],!1,null,"fcd39870",null);e.default=component.exports},521:function(t,e,n){"use strict";n.r(e);n(31);var o=n(11),r=(n(13),n(300),{head:function(){return{title:this.channel.name+" - Plaive"}},transition:{name:"page",mode:"out-in"},data:function(){return{logged:!0,activeTab:"about",isMy:!1,lessons:[],channel:{banner:"//via.placeholder.com/1500x386",logo:"//via.placeholder.com/500x500",name:"",subscribed:null,description:""}}},methods:{getChannel:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.channel.logo="//via.placeholder.com/500x500",t.channel.banner="//via.placeholder.com/1500x386",e.next=4,t.$axios.$get("".concat(t.$config.CHANNELS_BASE_URL,"/channel/").concat(t.$route.params.id));case 4:if(""!=(n=e.sent)){e.next=10;break}return e.next=8,t.$axios.$post("".concat(t.$config.CHANNELS_BASE_URL,"/channel"));case 8:e.next=16;break;case 10:t.channel.id=n.id,t.channel.name=n.name,t.channel.description=n.description,t.channel.logo=""==n.logo?"//via.placeholder.com/500x500":n.logo,t.channel.banner=""==n.banner?"//via.placeholder.com/1500x386":n.banner,t.channel.subscribed=n.subscribed;case 16:case"end":return e.stop()}}),e)})))()},getChannelLessons:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.lessons=[],e.next=3,t.$axios.$get("".concat(t.$config.LESSONS_BASE_URL,"/lessons/channel/").concat(t.$route.params.id,"?size=50"));case 3:e.sent.data.map((function(e){t.lessons.push({img:void 0===e.banner?"//via.placeholder.com/270x169":e.banner,link:"/video/".concat(e.id),title:e.title,category:e.category,date:e.date,start:e.start,end:e.end,free:0==e.price}),console.log(t.lessons)}));case 5:case"end":return e.stop()}}),e)})))()},subscribed:function(t){this.channel.subscribed=!0,this.channel.subscribers++},unsubscribed:function(t){this.channel.subscribed=!1,this.channel.subscribers--}},mounted:function(){"my"===this.$route.params.id&&(this.isMy=!0),this.logged=sessionStorage.getItem("logged"),this.getChannel(),this.getChannelLessons()}}),l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"single-channel-image"},[n("img",{staticClass:"img-fluid",attrs:{alt:"",src:t.channel.banner}}),t._v(" "),n("div",{staticClass:"channel-profile"},[n("img",{staticClass:"channel-profile-img",attrs:{alt:"",src:t.channel.logo}})])]),t._v(" "),n("div",{staticClass:"single-channel-nav"},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[n("span",{staticClass:"channel-brand"},[t._v(t._s(t.channel.name))]),t._v(" "),n("button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.navbarSupportedContent",modifiers:{navbarSupportedContent:!0}}],staticClass:"navbar-toggler",attrs:{type:"button"}},[n("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),n("b-collapse",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{class:"about"===t.activeTab?"nav-item active":"nav-item"},[n("button",{staticClass:"btn btn-link border-none nav-link",on:{click:function(e){t.activeTab="about"}}},[t._v(t._s(t.$t("description")))])]),t._v(" "),n("li",{class:"lessons"===t.activeTab?"nav-item active":"nav-item"},[n("button",{staticClass:"btn btn-link border-none nav-link",on:{click:function(e){t.activeTab="lessons"}}},[t._v(t._s(t.$t("lessons")))])])]),t._v(" "),!1===t.isMy?n("form",{staticClass:"form-inline my-2 my-lg-0"},["lessons"===t.activeTab?n("input",{staticClass:"form-control form-control-sm mr-sm-1",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}):t._e(),t._v(" "),"lessons"===t.activeTab?n("button",{staticClass:"btn btn-outline-success btn-sm my-2 my-sm-0",attrs:{type:"submit"}},[n("font-awesome-icon",{attrs:{icon:["fas","search"]}})],1):t._e(),t._v(" \n                \n            "),n("ChannelSubscribeButton",{attrs:{channel:t.channel},on:{subscribed:t.subscribed,unsubscribed:t.unsubscribed}})],1):n("form",{staticClass:"form-inline my-2 my-lg-0"},[n("nuxt-link",{staticClass:"d-none d-md-inline-block btn btn-outline-danger btn-sm",attrs:{to:"/lesson/new",type:"button"}},[t._v(t._s(t.$t("addLesson")))]),t._v(" "),n("nuxt-link",{staticClass:"d-block d-md-none btn btn-block btn-outline-danger btn-sm",attrs:{to:"/lesson/new",type:"button"}},[t._v(t._s(t.$t("addLesson")))])],1)])],1)]),t._v(" "),n("div",{staticClass:"container-fluid",attrs:{mode:"out-in",duration:250}},[n("transition",{attrs:{name:"page"}},["about"===t.activeTab?n("div",{staticClass:"box mb-3"},[n("h6",[t._v(t._s(t.$t("description")))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.channel.description)}})]):t._e()]),t._v(" "),n("transition",{attrs:{name:"page",mode:"out-in",duration:250}},["lessons"===t.activeTab?n("VideoList",{attrs:{type:!0===t.isMy?"myChannelLessons":"",title:t.$t("lessons"),videos:t.lessons}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChannelSubscribeButton:n(437).default,VideoList:n(447).default})}}]);