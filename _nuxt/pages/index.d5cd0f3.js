(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{263:function(t,e,n){var content=n(265);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("4309ecce",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";var o=n(263);n.n(o).a},265:function(t,e,n){(e=n(38)(!1)).push([t.i,".play-icon-btn[data-v-677a27d1]{bottom:0;height:40px;left:0;margin:auto;position:absolute;right:0;top:0;width:40px}",""]),t.exports=e},269:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{videos:[{img:"//via.placeholder.com/270x169",link:"/video/1",time:"3:50",title:"There are many variations of passages of Lorem",category:"Education"},{img:"//via.placeholder.com/270x169",link:"/video/1",time:"3:50",title:"There are many variations of passages of Lorem",category:"Education"},{img:"//via.placeholder.com/270x169",link:"/video/1",time:"3:50",title:"There are many variations of passages of Lorem",category:"Education"},{img:"//via.placeholder.com/270x169",link:"/video/1",time:"3:50",title:"There are many variations of passages of Lorem",category:"Education"},{img:"//via.placeholder.com/270x169",link:"/video/1",time:"3:50",title:"There are many variations of passages of Lorem",category:"Education"},{img:"//via.placeholder.com/270x169",link:"/video/1",time:"3:50",title:"There are many variations of passages of Lorem",category:"Education"},{img:"//via.placeholder.com/270x169",link:"/video/1",time:"3:50",title:"There are many variations of passages of Lorem",category:"Education"},{img:"//via.placeholder.com/270x169",link:"/video/1",time:"3:50",title:"There are many variations of passages of Lorem",category:"Education"}]}}},l=(n(264),n(24)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-block section-padding"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),t._l(t.videos,(function(video,e){return n("div",{key:e,staticClass:"col-xl-3 col-sm-6 mb-3"},[n("div",{staticClass:"video-card"},[n("div",{staticClass:"video-card-image"},[n("nuxt-link",{staticClass:"play-icon",attrs:{to:video.link}},[n("font-awesome-icon",{staticClass:"play-icon-btn",attrs:{icon:["fas","play-circle"]}})],1),t._v(" "),n("nuxt-link",{attrs:{to:video.link}},[n("img",{staticClass:"img-fluid",attrs:{src:video.img,alt:""}})]),t._v(" "),n("div",{staticClass:"time"},[t._v(t._s(video.time))])],1),t._v(" "),n("div",{staticClass:"video-card-body"},[n("div",{staticClass:"video-title"},[n("nuxt-link",{attrs:{to:video.link}},[t._v(t._s(video.title))])],1),t._v(" "),n("div",{staticClass:"video-page text-success"},[t._v("\n                        "+t._s(video.category)+"\n                    ")]),t._v(" "),n("div",{staticClass:"video-view"},[t._v("\n                        1.8M views  "),n("font-awesome-icon",{attrs:{icon:["fas","calendar-alt"]}}),t._v(" 11 Months ago\n                    ")],1)])])])}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"main-title"},[e("h6",[this._v("Featured Videos")])])])}],!1,null,"677a27d1",null);e.default=component.exports},270:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{popularChannels:[{link:"#",logo:"//via.placeholder.com/130x130",name:"Channels Name",subscribers:"382.323",subscribed:!1},{link:"#",logo:"//via.placeholder.com/130x130",name:"Channels Name",subscribers:"382.323",subscribed:!1},{link:"#",logo:"//via.placeholder.com/130x130",name:"Channels Name",subscribers:"382.323",subscribed:!0},{link:"#",logo:"//via.placeholder.com/130x130",name:"Channels Name",subscribers:"382.323",subscribed:!1}]}}},l=n(24),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-block section-padding"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),t._l(t.popularChannels,(function(e,o){return n("div",{key:o,staticClass:"col-xl-3 col-sm-6 mb-3"},[n("div",{staticClass:"channels-card"},[n("div",{staticClass:"channels-card-image"},[n("nuxt-link",{attrs:{to:e.link}},[n("img",{staticClass:"img-fluid",attrs:{src:e.logo,alt:""}})]),t._v(" "),n("div",{staticClass:"channels-card-image-btn"},[!1===e.subscribed?n("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"}},[t._v("Subscribe")]):n("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"}},[t._v("Subscribed")])])],1),t._v(" "),n("div",{staticClass:"channels-card-body"},[n("div",{staticClass:"channels-title"},[n("nuxt-link",{attrs:{to:e.link}},[t._v(t._s(e.name))])],1),t._v(" "),n("div",{staticClass:"channels-view"},[t._v("\n                        "+t._s(e.subscribers)+"\n                    ")])])])])}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"main-title"},[e("h6",[this._v("Popular Channels")])])])}],!1,null,null,null);e.default=component.exports},274:function(t,e,n){"use strict";n.r(e);var o=n(24),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("FeaturedVideos"),this._v(" "),e("hr",{staticClass:"mt-0"}),this._v(" "),e("PopularChannels")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FeaturedVideos:n(269).default,PopularChannels:n(270).default})}}]);