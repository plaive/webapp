(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{509:function(t,e,n){"use strict";n.r(e);n(12),n(13),n(14),n(31);var o=n(11),r=n(82),c=n.n(r),l=n(460),d=n.n(l),m=(n(462),{components:{VueCropper:d.a},props:["sasUrl","blobName","aspectRatio"],data:function(){return{mime_type:"",fileExtension:"",selectedFile:"",files:"",cropperElm:void 0}},methods:{saveImage:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$route.params.user_id,e.next=3,t.$axios.$get("".concat(t.sasUrl,"?n=").concat(t.blobName,"&e=").concat(t.fileExtension,"&mime_type=").concat(t.mime_type));case 3:n=e.sent,t.cropperElm.getCroppedCanvas().toBlob(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.put(n,o,{headers:{"x-amz-acl":"public-read","Content-Type":t.mime_type}});case 2:t.$emit("uploaded");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.mime_type);case 5:case"end":return e.stop()}}),e)})))()},onFileSelect:function(t){var e=this,n=t.target.files[0];if(this.mime_type=n.type,this.fileExtension=n.name.split(".").pop(),"function"==typeof FileReader){this.$bvModal.show("imageModal-".concat(this.blobName));var o=new FileReader;o.onload=function(t){e.selectedFile=t.target.result,e.$refs["cropper-".concat(e.blobName)].replace(e.selectedFile),e.cropperElm=e.$refs["cropper-".concat(e.blobName)]},o.readAsDataURL(n)}else alert("Sorry, FileReader API not supported")}}}),v=n(19),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("button",{staticClass:"btn btn-link border-none",attrs:{type:"button"},on:{click:function(e){t.$refs["FileInput-"+t.blobName].click()}}},[n("font-awesome-icon",{attrs:{icon:["fas","edit"]}})],1),t._v(" "),n("input",{ref:"FileInput-"+t.blobName,staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.onFileSelect}})]),t._v(" "),n("b-modal",{ref:"imageModal-"+t.blobName,attrs:{id:"imageModal-"+t.blobName,centered:""},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[n("button",{staticClass:"btn btn-link-secondary",on:{click:function(e){return t.$bvModal.hide("imageModal-"+t.blobName)}}},[t._v(t._s(t.$t("cancel")))]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.saveImage(),t.$bvModal.hide("imageModal-"+t.blobName)}}},[t._v(t._s(t.$t("save")))])]},proxy:!0}])},[n("div",{staticClass:"modal-body"},[n("VueCropper",{directives:[{name:"show",rawName:"v-show",value:t.selectedFile,expression:"selectedFile"}],ref:"cropper-"+t.blobName,attrs:{src:t.selectedFile,alt:"Source Image","aspect-ratio":t.aspectRatio}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports},513:function(t,e,n){"use strict";n.r(e);n(13),n(31);var o=n(11),r={middleware:["auth"],head:function(){return{title:"Account - Plaive"}},transition:{name:"page",mode:"out-in"},components:{VueEditor:n(459).a},data:function(){return{accountSaveloading:!1,passwordSaveLoading:!1,channelSaveLoading:!1,account:{name:"",nickname:"",email:""},payoutAcount:{stripeUserId:""},channel:{name:"",description:"",logo:"",banner:""}}},methods:{updateAccount:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.accountSaveloading=!0,e.prev=1,e.next=4,t.$axios.$patch("".concat(t.$config.AUTH_BASE_URL,"/user"),{name:t.account.name,nickname:t.account.nickname,email:t.account.email});case 4:t.$bvToast.toast(t.$t("accountUpdated"),{variant:"success",solid:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.$bvToast.toast(t.$t(err),{variant:"danger",solid:!0});case 10:t.accountSaveloading=!1;case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()},changePassword:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.passwordSaveLoading=!0,e.prev=1,e.next=4,t.$axios.$patch("".concat(t.$config.AUTH_BASE_URL,"/password"),{currentPassword:t.changePassword.currentPassword,newPassword:t.changePassword.newPassword});case 4:t.$bvToast.toast(t.$t("accountUpdated"),{variant:"success",solid:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.$bvToast.toast(t.$t(e.t0),{variant:"danger",solid:!0});case 10:t.passwordSaveLoading=!1;case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()},getChannel:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.channel.logo="//via.placeholder.com/500x500",t.channel.banner="//via.placeholder.com/1500x386",e.next=4,t.$axios.$get("".concat(t.$config.CHANNELS_BASE_URL,"/channel/my"));case 4:if(""!=(n=e.sent)){e.next=10;break}return e.next=8,t.$axios.$post("".concat(t.$config.CHANNELS_BASE_URL,"/channel"));case 8:e.next=14;break;case 10:t.channel.name=n.name,t.channel.description=n.description,t.channel.logo=""==n.logo?"//via.placeholder.com/500x500":n.logo,t.channel.banner=""==n.banner?"//via.placeholder.com/1500x386":n.banner;case 14:case"end":return e.stop()}}),e)})))()},saveChannel:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.channelSaveLoading=!0,e.prev=1,e.next=4,t.$axios.$patch("".concat(t.$config.CHANNELS_BASE_URL,"/channel"),{name:t.channel.name,description:t.channel.description});case 4:t.$bvToast.toast(t.$t("accountUpdated"),{variant:"success",solid:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.$bvToast.toast(t.$t(err),{variant:"danger",solid:!0});case 10:t.channelSaveLoading=!1;case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("".concat(t.$config.AUTH_BASE_URL,"/user"));case 2:n=e.sent,t.account.name=n.name,t.account.nickname=n.nickname,t.account.email=n.email,t.getChannel();case 7:case"end":return e.stop()}}),e)})))()}},c=n(19),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"main-title"},[n("h6",[t._v(t._s(t.$t("account")))])])])]),t._v(" "),n("form",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label"},[t._v(t._s(t.$t("fullName"))),n("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account.name,expression:"account.name"}],staticClass:"form-control border-form-control",attrs:{type:"text"},domProps:{value:t.account.name},on:{input:function(e){e.target.composing||t.$set(t.account,"name",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label"},[t._v(t._s(t.$t("nickname"))+" "),n("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account.nickname,expression:"account.nickname"}],staticClass:"form-control border-form-control",domProps:{value:t.account.nickname},on:{input:function(e){e.target.composing||t.$set(t.account,"nickname",e.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6",staticStyle:{"margin-top":"17px"}},[n("label",{staticClass:"control-label"},[t._v(t._s(t.$t("email")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account.email,expression:"account.email"}],staticClass:"form-control border-form-control",attrs:{type:"email"},domProps:{value:t.account.email},on:{input:function(e){e.target.composing||t.$set(t.account,"email",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("label",{staticClass:"control-label"},[t._v(t._s(t.$t("password"))+" \n              "),n("span",{staticClass:"required"},[n("a",{directives:[{name:"b-modal",rawName:"v-b-modal.changePasswordModal",modifiers:{changePasswordModal:!0}}],staticClass:"btn btn-link border-none"},[n("font-awesome-icon",{attrs:{icon:["fas","edit"]}})],1)]),t._v(" "),n("b-modal",{ref:"changePasswordModal",attrs:{id:"changePasswordModal",centered:""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v("\n                  "+t._s(t.$t("changePassword"))+"\n                ")]},proxy:!0},{key:"modal-footer",fn:function(){return[n("button",{staticClass:"btn btn-outline-secondary",on:{click:function(e){return t.$refs.changePasswordModal.hide()}}},[t._v(t._s(t.$t("cancel")))]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button",disabled:!0===t.passwordSaveLoading},on:{click:t.changePassword}},[!0===t.passwordSaveLoading?n("b-spinner",{attrs:{type:"grow",label:"Loading...",small:""}}):n("span",[t._v(t._s(t.$t("changePassword")))])],1)]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"modal-body"},[n("form",[n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label"},[t._v(t._s(t.$t("currentPassword"))+" "),n("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.changePassword.currentPassword,expression:"changePassword.currentPassword"}],staticClass:"form-control border-form-control",attrs:{type:"password"},domProps:{value:t.changePassword.currentPassword},on:{input:function(e){e.target.composing||t.$set(t.changePassword,"currentPassword",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label"},[t._v(t._s(t.$t("newPassword"))+" "),n("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.changePassword.newPassword,expression:"changePassword.newPassword"}],staticClass:"form-control border-form-control",attrs:{type:"password"},domProps:{value:t.changePassword.newPassword},on:{input:function(e){e.target.composing||t.$set(t.changePassword,"newPassword",e.target.value)}}})])])])])],1),t._v(" "),n("input",{staticClass:"form-control border-form-control",attrs:{value:"password",disabled:"",type:"password",readonly:""}})])]),t._v(" "),n("div",{staticClass:"row mt-3 mb-3"},[n("div",{staticClass:"col-sm-12 text-right"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button",disabled:!0===t.accountSaveloading},on:{click:t.updateAccount}},[!0===t.accountSaveloading?n("b-spinner",{attrs:{type:"grow",label:"Loading...",small:""}}):n("span",[t._v(t._s(t.$t("save")))])],1)])])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"main-title"},[n("h6",[t._v(t._s(t.$t("billingMethod")))])]),t._v(" "),n("p",[t._v("\n        "+t._s(t.$t("billingMethodGenericInfo"))+"\n      ")]),t._v(" "),n("button",{staticClass:"btn btn-outline-primary mb-3",attrs:{type:"button"}},[t._v(t._s(t.$t("configure")))])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"main-title"},[n("h6",[t._v(t._s(t.$t("payoutAccount")))])]),t._v(" "),n("p",[t._v("\n        "+t._s(t.$t("payoutAccountGenericInfo"))+"\n      ")]),t._v(" "),""===t.payoutAcount.stripeUserId?n("button",{staticClass:"btn btn-outline-primary mb-3",attrs:{type:"button"}},[t._v(t._s(t.$t("configure")))]):n("button",{staticClass:"btn btn-outline-primary mb-3",attrs:{type:"button"}},[t._v(t._s(t.$t("payoutDashboard")))])])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"main-title"},[n("h6",[t._v(t._s(t.$t("channel")))])])])]),t._v(" "),n("form",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label"},[t._v(t._s(t.$t("name"))+" "),n("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.channel.name,expression:"channel.name"}],staticClass:"form-control border-form-control",attrs:{type:"text"},domProps:{value:t.channel.name},on:{input:function(e){e.target.composing||t.$set(t.channel,"name",e.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("label",{staticClass:"control-label"},[t._v(t._s(t.$t("description")))]),t._v(" "),n("vue-editor",{model:{value:t.channel.description,callback:function(e){t.$set(t.channel,"description",e)},expression:"channel.description"}})],1)]),t._v(" "),n("div",{staticClass:"row mt-3 mb-3"},[n("div",{staticClass:"col-sm-12 text-right"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button",disabled:!0===t.channelSaveLoading},on:{click:t.saveChannel}},[!0===t.channelSaveLoading?n("b-spinner",{attrs:{type:"grow",label:"Loading...",small:""}}):n("span",[t._v(t._s(t.$t("save")))])],1)])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"box mb-3"},[n("h6",[t._v(t._s(t.$t("logo"))+" \n          "),n("span",{staticClass:"required"},[n("ImageUploader",{attrs:{aspectRatio:1,blobName:"logo",sasUrl:this.$config.CHANNELS_BASE_URL+"/channel/blob/sas"},on:{uploaded:t.getChannel}})],1)]),t._v(" "),n("img",{staticStyle:{width:"100%","max-width":"500px",height:"auto"},attrs:{src:t.channel.logo}})])]),t._v(" "),n("div",{staticClass:"col-sm-8"},[n("div",{staticClass:"box mb-3"},[n("h6",[t._v(t._s(t.$t("banner"))+" \n          "),n("span",{staticClass:"required"},[n("ImageUploader",{attrs:{aspectRatio:1500/386,blobName:"banner",sasUrl:this.$config.CHANNELS_BASE_URL+"/channel/blob/sas"},on:{uploaded:t.getChannel}})],1)]),t._v(" "),n("img",{staticStyle:{width:"100%",height:"auto"},attrs:{src:t.channel.banner}})])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ImageUploader:n(509).default})}}]);