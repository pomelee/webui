(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85f3c0fc"],{"0618":function(t,e,r){"use strict";var s=r("d375"),o=r.n(s);o.a},a55b:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app"},[r("AppHeader",{attrs:{fixed:""}},[r("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[r("img",{staticClass:"navbar-brand-full",attrs:{src:"img/lg-logo.png",width:"89",height:"25",alt:"LG Logo"}}),r("img",{staticClass:"navbar-brand-minimized",attrs:{src:"img/lg-logo-sm.png",width:"30",height:"30",alt:"LG Logo"}})])],1),r("div",{staticClass:"app-body flex-row align-items-center pace-done footer-fixed no-sidebar"},[r("b-container",[r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{md:"7",lg:"5"}},[r("b-card",{attrs:{header:"Dark","header-bg-variant":"dark","header-text-variant":"white"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h4",{staticClass:"pt-1 pb-1 mb-0"},[t._v("로그인")])]},proxy:!0}])},[r("b-form",{ref:"loginForm",on:{submit:function(e){return e.preventDefault(),t.handleLogin(e)}}},[r("b-input-group",{staticClass:"mb-3"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("i",{staticClass:"fa fa-user"})]),r("b-form-input",{attrs:{type:"text",id:"userID",placeholder:t.$t("login.userID"),autocomplete:"scms-userID",autofocus:"",required:""},model:{value:t.userID,callback:function(e){t.userID=e},expression:"userID"}})],1),r("b-input-group",{staticClass:"mb-3"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("i",{staticClass:"fa fa-unlock-alt"})]),r("b-form-input",{attrs:{type:"password",id:"userPWD",placeholder:t.$t("login.password"),autocomplete:"scms-password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),r("b-form-checkbox",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[t._v("Remember me")]),r("hr",{staticClass:"my-4"}),r("b-row",{staticClass:"pr-3 pl-3"},[r("b-col",{staticClass:"pr-1 pl-1"},[r("b-button",{attrs:{block:"",variant:"secondary"},on:{click:t.gotoRePW}},[t._v(" "+t._s(t.$t("login.editPassword"))+" ")])],1),r("b-col",{staticClass:"pr-1 pl-1"},[r("b-button",{attrs:{block:"",variant:"secondary"},on:{click:t.gotoRegister}},[t._v(" "+t._s(t.$t("login.register"))+" ")])],1),r("b-col",{staticClass:"pr-1 pl-1"},[r("b-button",{attrs:{block:"",variant:"dark",type:"submit"}},[t._v(" "+t._s(t.$t("login.login"))+" ")])],1)],1)],1)],1)],1)],1)],1)],1),r("TheFooter",[r("div",[r("span",{staticClass:"ml-1"},[t._v("SCMS")])]),r("div",{staticClass:"ml-auto"},[r("span",{staticClass:"mr-1"},[t._v("Copyright © 2019 LG Electronics. All Rights Reserved.")])])]),r("one-button-alert",{ref:"loginFail"})],1)},o=[],i=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("5319"),r("159b"),r("96cf"),r("2fa7")),n=r("2f62"),a=r("1564"),c=r("f1fb");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={name:"Login",components:{AppHeader:c["c"],TheFooter:c["b"],OneButtonAlert:a["a"]},data:function(){return{userID:"site_admin",password:"Secudium!@#",isWorking:!1}},created:function(){},methods:u({},Object(n["b"])("user",["login","getUser"]),{handleLogin:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:this.isWorking||(this.isWorking=!0,this.login({username:this.userID,password:this.password}).then((function(e){t.$log.log("login.vue",e),t.getUser().then((function(e){t.$log.log("login.vue",e),t.isWorking=!1,t.$router.replace({path:"/"})}))})).catch((function(e){t.$log.info("login fail",e),void 0!==e.response?(t.$refs.loginFail.show({title:"실패",text:"로그인 중 에러가 발생했습니다. 관리자에게 문의 주세요 [error code : "+e.response+"]",confirm:!1}),t.isWorking=!1):("C012"===e?(t.$refs.loginFail.show({title:"실패",text:"존재하지 않는 아이디입니다. 다시 확인해 주세요.",confirm:!1}),t.$refs.loginForm.userID.focus()):"C010"===e?(t.$refs.loginFail.show({title:"실패",text:"비밀번호가 틀렸습니다. 다시 확인해 주세요.",confirm:!1}),t.$refs.loginForm.userPWD.focus()):t.$refs.loginFail.show({title:"실패",text:"로그인 중 에러가 발생했습니다. 관리자에게 문의 주세요 [error code : "+e+"]",confirm:!1}),t.isWorking=!1)})));case 1:case"end":return e.stop()}}),null,this)},gotoRegister:function(){this.$router.push({path:"/register"})},gotoRePW:function(){this.$router.push({path:"/reissuePW"})}})},b=p,g=(r("0618"),r("2877")),d=Object(g["a"])(b,s,o,!1,null,"2a7e5098",null);e["default"]=d.exports},d375:function(t,e,r){}}]);
//# sourceMappingURL=chunk-85f3c0fc.d35ddad8.js.map