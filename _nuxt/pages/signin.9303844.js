(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{507:function(e,t,r){"use strict";r.r(t);r(12),r(37);var n=r(11),o={layout:"auth",head:function(){return{title:"Sign In - Plaive"}},transition:{name:"page",mode:"out-in"},data:function(){return{loading:!1,rememberMe:!1,email:"",password:"",error:!1}},methods:{signIn:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,e.error=!1,t.prev=2,t.next=5,e.$axios.$post("/auth/signin",{email:e.email,password:e.password,rememberMe:e.rememberMe});case 5:r=t.sent,e.$axios.setToken(r.accessToken,"Bearer"),e.$router.replace("/"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),e.error=!0;case 13:e.loading=!1;case 14:case"end":return t.stop()}}),t,null,[[2,10]])})))()}}},l=r(19),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"text-center mb-5 login-main-left-header pt-4"},[r("img",{staticClass:"img-fluid",staticStyle:{"max-width":"125px"},attrs:{src:"//via.placeholder.com/500x500?text=PLAIVE_LOGO_SQUARE",alt:"LOGO"}}),e._v(" "),r("h5",{staticClass:"mt-3 mb-3"},[e._v(e._s(e.$t("welcome")))]),e._v(" "),r("p",[e._v(e._s(e.$t("welcomeMessage")))])]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.signIn(t)}}},[r("div",{staticClass:"form-group"},[r("label",[e._v(e._s(e.$t("email")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",[e._v(e._s(e.$t("password")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"custom-control custom-checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.rememberMe,expression:"rememberMe"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"chk_rememberMe"},domProps:{checked:Array.isArray(e.rememberMe)?e._i(e.rememberMe,null)>-1:e.rememberMe},on:{change:function(t){var r=e.rememberMe,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&(e.rememberMe=r.concat([null])):l>-1&&(e.rememberMe=r.slice(0,l).concat(r.slice(l+1)))}else e.rememberMe=o}}}),e._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"chk_rememberMe"}},[e._v(e._s(e.$t("rememberMe")))])]),e._v(" "),!0===e.error?r("div",{staticClass:"alert alert-danger mt-4",attrs:{role:"alert"}},[e._v("\n      "+e._s(e.$t("signInError"))+"\n    ")]):e._e(),e._v(" "),r("div",{staticClass:"mt-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("button",{staticClass:"btn btn-outline-primary btn-block btn-lg",attrs:{disabled:!0===e.loading,type:"submit"}},[!0===this.loading?r("b-spinner",{attrs:{type:"grow",label:"Loading...",variant:"success",small:""}}):r("span",[e._v(e._s(e.$t("signIn")))])],1)])])])]),e._v(" "),r("div",{staticClass:"text-center mt-5"},[r("p",{staticClass:"light-gray"},[e._v(e._s(e.$t("noAccountQuestion"))+" "),r("nuxt-link",{attrs:{to:"/signup"}},[e._v(e._s(e.$t("signUp")))])],1)]),e._v(" "),r("div",{staticClass:"text-center mt-2 mb-5"},[r("p",{staticClass:"light-gray"},[e._v(e._s(e.$t("forgotPasswrdQuestion"))+" "),r("nuxt-link",{attrs:{to:"/forgot-password"}},[e._v(e._s(e.$t("resetPasswordLink")))])],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);