(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{438:function(n,t,e){"use strict";e.r(t);e(33);var c=e(11),r={data:function(){return{logged:!1,loading:!1}},props:["channel"],methods:{subscribe:function(){var n=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.loading=!0,t.prev=1,t.next=4,n.$axios.$post("".concat(n.$config.CHANNELS_BASE_URL,"/channel/").concat(n.channel.id,"/subscribe"));case 4:n.$emit("subscribed",n.channel),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:n.loading=!1;case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()},unsubscribe:function(){var n=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.loading=!0,t.prev=1,t.next=4,n.$axios.$post("".concat(n.$config.CHANNELS_BASE_URL,"/channel/").concat(n.channel.id,"/unsubscribe"));case 4:n.$emit("unsubscribed",n.channel),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:n.loading=!1;case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}},mounted:function(){this.logged=sessionStorage.getItem("logged")}},l=e(19),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return"true"==n.logged&&null!=n.channel.subscribed?e("div",[!1===n.channel.subscribed?e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:n.subscribe}},[!0===n.loading?e("b-spinner",{attrs:{type:"grow",label:"Loading...",small:""}}):e("span",[n._v(n._s(n.$t("subscribe")))])],1):e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:n.unsubscribe}},[!0===n.loading?e("b-spinner",{attrs:{type:"grow",label:"Loading...",small:""}}):e("span",[n._v(n._s(n.$t("subscribed")))])],1)]):n._e()}),[],!1,null,null,null);t.default=component.exports},452:function(n,t,e){"use strict";e.r(t);e(46);var c={data:function(){return{logged:!1}},props:["title","channels"],methods:{subscribed:function(n){var t=this.channels.find((function(t){return t.id==n.id}));t.subscribed=!0,t.subscribers++},unsubscribed:function(n){var t=this.channels.find((function(t){return t.id==n.id}));t.subscribed=!1,t.subscribers--}},mounted:function(){this.logged=sessionStorage.getItem("logged")}},r=e(19),component=Object(r.a)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"video-block section-padding"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"main-title"},[e("h6",[n._v(n._s(n.title))])])]),n._v(" "),n._l(n.channels,(function(t,c){return e("div",{key:c,staticClass:"col-xl-3 col-sm-6 mb-3"},[e("div",{staticClass:"channels-card"},[e("div",{staticClass:"channels-card-image"},[e("nuxt-link",{attrs:{to:t.link}},[e("img",{staticClass:"img-fluid",attrs:{src:t.logo,alt:""}})]),n._v(" "),e("ChannelSubscribeButton",{attrs:{channel:t},on:{subscribed:n.subscribed,unsubscribed:n.unsubscribed}})],1),n._v(" "),e("div",{staticClass:"channels-card-body"},[e("div",{staticClass:"channels-title"},[e("nuxt-link",{attrs:{to:t.link}},[n._v(n._s(t.name))])],1),n._v(" "),e("div",{staticClass:"channels-view"},[n._v("\n                        "+n._s(t.subscribers)+"\n                    ")])])])])}))],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ChannelSubscribeButton:e(438).default})},516:function(n,t,e){"use strict";e.r(t);e(13),e(33);var c=e(11),r={head:function(){return{title:"Channels - Plaive"}},transition:{name:"page",mode:"out-in"},data:function(){return{channels:[]}},mounted:function(){var n=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$axios.$get("".concat(n.$config.CHANNELS_BASE_URL,"/channels?size=12"));case 2:e=t.sent,n.channels=[],e.data.map((function(t){n.channels.push({id:t.id,link:"/channel/".concat(t.id),logo:""==t.logo?"//via.placeholder.com/130x130?text=".concat(t.name):t.logo,name:t.name,subscribers:t.subscribers,subscribed:t.subscribed})}));case 5:case"end":return t.stop()}}),t)})))()}},l=e(19),component=Object(l.a)(r,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("ChannelList",{attrs:{title:this.$t("channels"),channels:this.channels}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ChannelList:e(452).default})}}]);