(function(e){function t(t){for(var o,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-18852eae":"3d70fe62","chunk-31e5cafb":"14951461","chunk-85f3c0fc":"d35ddad8","chunk-c28d3eb4":"34aa1e01","chunk-bf22b29c":"4d2a2820","chunk-056461ed":"90087e44","chunk-4816f193":"66f60ef2","chunk-52da12c4":"40be66a6"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-31e5cafb":1,"chunk-85f3c0fc":1,"chunk-c28d3eb4":1,"chunk-bf22b29c":1,"chunk-056461ed":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-18852eae":"31d6cfe0","chunk-31e5cafb":"ad94d5ba","chunk-85f3c0fc":"cbce1390","chunk-c28d3eb4":"0e67e475","chunk-bf22b29c":"ad94d5ba","chunk-056461ed":"4d89c7f2","chunk-4816f193":"31d6cfe0","chunk-52da12c4":"31d6cfe0"}[e]+".css",r=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===o||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"49f8":function(e,t,n){var o={"./en.json":"edd4","./ko.json":"dd11"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="49f8"},"4b69":function(e){e.exports=JSON.parse('{"kind":"DeleteOptions","apiVersion":"v1","propagationPolicy":"Foreground"}')},"547a":function(e){e.exports=JSON.parse('{"apiVersion":"project.openshift.io/v1","kind":"ProjectRequest","metadata":{"name":""},"displayName":"","description":""}')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},i=[],c={name:"app"},s=c,u=(n("5c0b"),n("2877")),l=Object(u["a"])(s,r,i,!1,null,null,null),d=l.exports,f=(n("d3b7"),n("8c4f")),m=n("2f62"),p=(n("c740"),n("a434"),n("b0c0"),n("a4d3"),n("e01a"),n("bc3a")),g=n.n(p),h=n("db49"),v={NONE:99,DEBUG:5,ERR:4,WARN:3,INFO:2,LOG:1},b=v.WARN,y=function(){o.groupCollapsed("logger test",b),o.time("test 'TIME') END::"),o.trace("...'TRACE'"),o.log("'LOG'"),o.info("'INFO'",window,P(v.INFO)),o.warn("'WARN'",P(v.WARN)),o.error("'ERROR'",P(v.ERR)),o.timeEnd("test 'TIME' END time: "),o.groupEnd("logger test")},P=function(e){return e>=b&&"undefined"!==typeof console},C=function(){a["default"].prototype.$log=o,y()},w=o={clear:P(v.LOG)?console.clear:function(){},error:P(v.ERR)?console.error:function(){},warn:P(v.LOG)?console.warn:function(){},info:P(v.INFO)?console.info:function(){},log:P(v.LOG)?console.log:function(){},trace:P(v.LOG)?console.trace:function(){},count:P(v.LOG)?console.count:function(){},countReset:P(v.LOG)?console.countReset:function(){},group:P(v.LOG)?console.group:function(){},groupCollapsed:P(v.LOG)?console.groupCollapsed:function(){},groupEnd:P(v.LOG)?console.groupEnd:function(){},time:P(v.LOG)?console.time:function(){},timeLog:P(v.LOG)?console.timeLog:function(){},timeEnd:P(v.LOG)?console.timeEnd:function(){}},L=n("547a"),j=n("4b69");g.a.defaults.headers.common["Authorization"]=h["a"].testToken;var N="".concat(h["a"].apiServer,"/apis/project.openshift.io/v1"),k={getProjectList:function(e){if(h["a"].useDummyData);else{var t="".concat(N,"/projects");g.a.get(t,{}).then((function(t){w.log("[project]getProjectList",t),e(!0,t.data)})).catch((function(t){w.error("[project]fail getProjectList",t.response),e(!1,t.response.data)}))}},addProject:function(e,t){if(h["a"].useDummyData)setTimeout((function(){t(!0)}),500);else{var n="".concat(N,"/projectrequests"),o=L;o.metadata.name=e.name,o.displayName=e.display,o.description=e.description,g.a.post(n,o).then((function(e){w.log("[project]addProject",e),t(!0,e.data)})).catch((function(e){w.error("[project]fail addProject",e.response),t(!1,e.response.data)}))}},deleteProject:function(e,t){if(h["a"].useDummyData)setTimeout((function(){t(!0)}),500);else{var n="".concat(N,"/projects/")+e;g.a.delete(n,{data:j}).then((function(e){w.log("[project]deleteProject",e),t(!0)})).catch((function(e){w.error("[project]fail deleteProject",e.response),t(!1,e.response.data)}))}}},B={projectList:{items:[]},currentProject:"",currentPackage:""},D={getProjectCount:function(e){return e.projectList.items.length}},T={getProjectList:function(e){var t=e.commit;return new Promise((function(e,n){k.getProjectList((function(o,a){a&&!0===o?(t("setProjectList",a),e(a)):n(a.message)}))}))},setCurrentProject:function(e,t){var n=e.commit;this.dispatch("build/watchBuild",t),this.dispatch("deploy/watchDeploy",t),n("updateCurrentProject",t)},addProject:function(e,t){var n=e.commit;return new Promise((function(e,o){k.addProject(t,(function(t,a){a&&!0===t?(n("setProject",a),e(a)):o(a.message)}))}))},deleteProject:function(e,t){var n=e.commit;return new Promise((function(e,o){k.deleteProject(t,(function(a,r){a?(n("delProject",t),e()):o(r.message)}))}))},setCurrentPackage:function(e,t){var n=e.commit;n("setPackage",t)}},S={updateCurrentProject:function(e,t){e.currentProject=t},setProjectList:function(e,t){e.projectList=t,""===e.currentPackage&&t.items[0]&&(e.currentProject=t.items[0].metadata.name)},setProject:function(e,t){e.projectList.items.push({metadata:t.metadata,sepc:t.spec,status:t.status})},setPackage:function(e,t){e.currentPackage=t},delProject:function(e,t){var n=e.projectList.items.findIndex((function(e){return e.metadata.name===t}));e.projectList.items.splice(n,1)}},O={namespaced:!0,state:B,getters:D,actions:T,mutations:S};n("4160"),n("159b");function A(e){var t=document.createElement("html");t.innerHTML=e;var n=t.getElementsByTagName("form"),o="",a="";return n.forEach((function(e){w.log(e.method),w.log(e.action),w.log(e.csrf.value),w.log(e.then.value),a=e.csrf.value,o="then="+e.then.value,o+="&csrf="+e.csrf.value,o+="&username=admin^&password=admin",g.a.defaults.headers.common["X-CSRF-TOKEN"]=e.csrf.value,g.a.defaults.headers.common["then"]=e.then.value,g.a.defaults.headers.common["content-type"]="application/x-www-form-urlencoded"})),g.a.post("".concat(h["a"].apiServer,"/login"),o,{headers:{"X-Csrf-Token":a,"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,POST,PUT,DELETE,OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization, Content-Length, X-Requested-With"}}).then((function(e){w.log("response : ",JSON.stringify(e,null,2))})).catch((function(e){w.log("failed",e)})),"token"}g.a.defaults.withCredentials=!1;var E={login:function(e,t){var n="".concat(h["a"].apiServer),o="&https://www.rosdev.io:8443/oauth/token/display",a=n+"/oauth/authorize?response_type=code&client_id=ros2-webui"+o;g.a.get(a,{},{headers:{"X-Csrf-Token":"1","content-type":"application/x-www-form-urlencoded"}}).then((function(e){var n=A(e.data);w.log("[user]login",n),t(!0,n)})).catch((function(e){w.error("[user]fail login",e),t(!1,e)}))},logout:function(e){},getCurrentUser:function(e){}},x={user:{usrNm:"admin",user_pwd:"admin"},isAuth:!1,error:null},R={},I={login:function(e,t){var n=e.commit;return new Promise((function(e,o){E.login(t,(function(t,a){w.log("login store",t,a),t&&"C000"===t.code?(n("setIsAuth",!0),n("setError",null),e(!0)):(n("setIsAuth",!1),n("setError",a),o(a))}))}))},getUser:function(e){var t=e.commit;return new Promise((function(e,n){E.getCurrentUser((function(n,o){w.log("login store",n,o),e(n),t("setLoginUser",n)}))}))},logout:function(e){var t=e.commit;return new Promise((function(e,n){E.logout((function(){e(null),t("setLoginUser",null)}))}))}},W={setLoginUser:function(e,t){e.user=t},setIsAuth:function(e,t){e.isAuth=t},setError:function(e,t){e.error=t}},z={namespaced:!0,state:x,getters:R,actions:I,mutations:W},M=(n("ace4"),n("4ec9"),n("3ca3"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a9"),n("72f7"),n("ddb0"),n("96cf"),n("7f29")),U="".concat(h["a"].apiServer,"/apis/build.openshift.io/v1");g.a.defaults.headers.common["Authorization"]=h["a"].testToken;var G=new Map,_={getBuildConfigList:function(e,t){var n="".concat(U,"/namespaces/")+e+"/buildconfigs";g.a.get(n,{}).then((function(e){w.log("[build]getBuildConfigList",e),t(!0,e.data)})).catch((function(e){w.error("[build]fail getBuildConfigList",e.response),t(!1,e.response.data)}))},createBuildConfig:function(e,t,n){var o="".concat(U,"/namespaces/")+e+"/buildconfigs";g.a.post(o,t).then((function(e){w.log("[build]createBuildConfig",e),n(!0,e.data)})).catch((function(e){w.error("[build]fail createBuildConfig",e.response),n(!1,e.response.data)}))},deleteBuildConfig:function(e,t,n){var o="".concat(U,"/namespaces/")+e+"/buildconfigs/"+t;g.a.delete(o,{}).then((function(e){w.log("[build]deleteBuildConfig",e),n(!0,e.data)})).catch((function(e){w.error("[build]fail deleteBuildConfig",e.response),n(!1,e.response.data)}))},instantBuild:function(e,t,n){var o="".concat(U,"/namespaces/")+e+"/buildconfigs/"+t+"/instantiate";M.metadata.name=t,g.a.post(o,M).then((function(e){w.log("[build]instantBuild",e),n(!0,e.data)})).catch((function(e){w.error("[build]fail instantBuild",e.response),n(!1,e.response.data)}))},abortWatchBuild:function(e){var t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:try{t=G.get(e),t&&t.abort()}catch(o){}case 1:case"end":return n.stop()}}))},watchBuild:function(e,t){var n="".concat(U,"/watch/namespaces/")+e+"/builds",o=new AbortController;G.set(e,o);var a=new Headers;a.append("Authorization",h["a"].testToken),fetch(n,{method:"get",headers:a,signal:o.signal}).then((function(e){var n="",o=e.body.getReader(),a=new TextDecoder;return r();function r(){return o.read().then(i)}function i(e){var o=a.decode(e.value||new Uint8Array,{stream:!e.done});return n+=o,e.done?(t(!0,"done"),n):(t(!0,n),n="",r())}})).then((function(e){w.log("[build]watchBuild, done",e)})).catch((function(e){w.error("[build]fail watchBuild",e)}))},getBuildList:function(e,t){var n="".concat(U,"/namespaces/")+e+"/builds";g.a.get(n,{}).then((function(e){w.log("[build]getBuildList",e),t(!0,e.data)})).catch((function(e){w.error("[build]fail getBuildList",e.response),t(!1,e.response.data)}))},deleteBuild:function(e,t,n){var o="".concat(U,"/namespaces/")+e+"/builds/"+t;g.a.delete(o,{}).then((function(e){w.log("[build]deleteBuild",e),n(!0,e.data)})).catch((function(e){w.error("[build]fail deleteBuild",e.response),n(!1,e.response.data)}))},getBuildLog:function(e,t,n){var o="".concat(U,"/namespaces/")+e+"/builds/"+t+"/log";g.a.get(o,{}).then((function(e){w.log("[build]getBuildLog",e),n(!0,e.data)})).catch((function(e){w.error("[build]fail getBuildLog",e.response),n(!1,e.response.data)}))},deleteBuildAllInNamespace:function(e,t){var n="".concat(U,"/namespaces/")+e+"/builds";g.a.delete(n,{}).then((function(e){w.log("[build]deleteBuildAllInNamespace",e),t(!0,e.data)})).catch((function(e){w.error("[build]fail deleteBuildAllInNamespace",e.response),t(!1,e.response.data)}))}},V={buildConfigs:{items:[]},buildList:{items:[]}},F={getBuildConfigCount:function(e){return e.buildConfigs.items.length},getBuildCount:function(e){return e.buildConfigs.items.length}},q={getBuildConfigList:function(e,t){var n=e.commit;return new Promise((function(e,o){_.getBuildConfigList(t,(function(t,a){a&&!0===t?(n("setBuildConfigList",a),e(a)):o(a.message)}))}))},createBuildConfig:function(e,t){e.commit;var n=t.projectName,o=t.form;return new Promise((function(e,t){_.createBuildConfig(n,o,(function(n,o){o&&!0===n?e(o):t(o.message)}))}))},deleteBuildConfig:function(e,t){var n=e.commit,o=t.projectName,a=t.configName;return new Promise((function(e,t){_.deleteBuildConfig(o,a,(function(o,a){a&&!0===o?(n("delBuildConifgFromList",a),e(a)):t(a.message)}))}))},instantBuild:function(e,t){e.commit;var n=t.projectName,o=t.buildName;return new Promise((function(e,t){_.instantBuild(n,o,(function(n,o){o&&!0===n?e(o):t(o.message)}))}))},watchBuild:function(e,t){e.commit;var n=e.dispatch;return new Promise((function(e,o){w.log("try abortWatchBuild="+t),_.abortWatchBuild(t).then((function(a){_.watchBuild(t,(function(a,r){r&&!0===a?(w.log("watchBuild="+t),n("getBuildList",t),e(r)):o("")}))}))}))},abortWatchBuild:function(e,t){e.commit;w.log("abortWatchBuild="+t),_.abortWatchBuild(t)},getBuildList:function(e,t){var n=e.commit;return new Promise((function(e,o){_.getBuildList(t,(function(t,a){a&&!0===t?(n("setBuildList",a),e(a)):o(a.message)}))}))},deleteBuild:function(e,t){var n=e.commit,o=t.projectName,a=t.buildName;return new Promise((function(e,t){_.deleteBuild(o,a,(function(o,a){a&&!0===o?(n("delBuildFromList",a),e(a)):t(a.message)}))}))},getBuildLog:function(e,t){e.commit;var n=t.projectName,o=t.buildName;return new Promise((function(e,t){_.getBuildLog(n,o,(function(n,o){o&&!0===n?e(o):t(o.message)}))}))},deleteBuildAllInNamespace:function(e,t){var n=e.commit;return new Promise((function(e,o){_.deleteBuildAllInNamespace(t,(function(t,a){a&&!0===t?(n("setBuildList",{items:[]}),e(a)):o(a.message)}))}))}},J={setBuildConfigList:function(e,t){e.buildConfigs=t},setBuildList:function(e,t){e.buildList=t},updateWatch:function(e,t,n){e.buildWatch.enable=t,e.buildWatch.version=n},delBuildFromList:function(e,t){var n=e.buildList.items.findIndex((function(e){return e.metadata.name===t.details.name}));e.buildList.items.splice(n,1)},delBuildConifgFromList:function(e,t){var n=e.buildConfigs.items.findIndex((function(e){return e.metadata.name===t.details.name}));e.buildConfigs.items.splice(n,1)}},H={namespaced:!0,state:V,getters:F,actions:q,mutations:J},K=n("6b59"),X="".concat(h["a"].apiServer,"/apis/apps.openshift.io/v1");"".concat(h["a"].apiServer,"/api/v1");g.a.defaults.headers.common["Authorization"]=h["a"].testToken;var $=new Map,Z={getDeployConfigList:function(e,t){var n="".concat(X,"/namespaces/")+e+"/deploymentconfigs";g.a.get(n,{}).then((function(e){w.log("[deploy]getDeployConfigList",e),t(!0,e.data)})).catch((function(e){w.error("[deploy]fail getDeployConfigList",e.response),t(!1,e.response.data)}))},createDeployConfig:function(e,t,n){var o="".concat(X,"/namespaces/")+e+"/deploymentconfigs";g.a.post(o,t).then((function(e){w.log("[deploy]createDeployConfig",e),n(!0,e.data)})).catch((function(e){w.error("[deploy]fail createDeployConfig",e.response),n(!1,e.response.data)}))},instantDeploy:function(e,t,n){var o="".concat(X,"/namespaces/")+e+"/deploymentconfigs/"+t+"/instantiate";K.name=t,g.a.post(o,K).then((function(e){w.log("[deploy]instantDeploy",e),n(!0,e.data)})).catch((function(e){w.error("[deploy]fail instantDeploy",e.response),n(!1,e.response.data)}))},getDeployConfig:function(e,t,n){var o="".concat(X,"/namespaces/")+e+"/deploymentconfigs/"+t;g.a.get(o,{}).then((function(e){w.log("[deploy]getDeployConfig",e),n(!0,e.data)})).catch((function(e){w.error("[deploy]fail getDeployConfig",e.response),n(!1,e.response.data)}))},editDeployConfig:function(e,t,n,o){var a="".concat(X,"/namespaces/")+e+"/deploymentconfigs/"+t;g.a.put(a,n).then((function(e){w.log("[deploy]editDeployConfig",e),o(!0,e.data)})).catch((function(e){w.error("[deploy]fail editDeployConfig",e.response),o(!1,e.response.data)}))},deleteBuildConfig:function(e,t,n){var o="".concat(X,"/namespaces/")+e+"/deploymentconfigs/"+t;g.a.delete(o,{}).then((function(e){w.log("[deploy]deleteBuildConfig",e),n(!0,e.data)})).catch((function(e){w.error("[deploy]fail deleteBuildConfig",e.response),n(!1,e.response.data)}))},abortWatchDeploy:function(e){var t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:try{t=$.get(e),t&&t.abort()}catch(o){}case 1:case"end":return n.stop()}}))},watchDeploy:function(e,t){var n="".concat(X,"/watch/namespaces/")+e+"/deploymentconfigs",o=new AbortController;$.set(e,o);var a=new Headers;a.append("Authorization",h["a"].testToken),fetch(n,{method:"get",headers:a,signal:o.signal}).then((function(e){var n="",o=e.body.getReader(),a=new TextDecoder;return r();function r(){return o.read().then(i)}function i(e){var o=a.decode(e.value||new Uint8Array,{stream:!e.done});return n+=o,e.done?(t(!0,"done"),n):(t(!0,n),n="",r())}})).then((function(e){w.log("[deploy]watchDeploy, done",e)})).catch((function(e){w.error("[deploy]fail watchDeploy",e)}))}},Q={deployConfigs:{items:[]}},Y={getDeployConfigCount:function(e){return e.deployConfigs.items.length}},ee={getDeployConfigList:function(e,t){var n=e.commit;return new Promise((function(e,o){Z.getDeployConfigList(t,(function(t,a){a&&!0===t?(n("setDeployConfigList",a),e(a)):o(a.message)}))}))},createDeployConfig:function(e,t){e.commit;var n=t.projectName,o=t.form;return new Promise((function(e,t){Z.createDeployConfig(n,o,(function(n,o){o&&!0===n?e(o):t(o.message)}))}))},instantDeploy:function(e,t){e.commit;var n=t.projectName,o=t.buildName;return new Promise((function(e,t){Z.instantDeploy(n,o,(function(n,o){o&&!0===n?e(o):t(o.message)}))}))},editDeployConfig:function(e,t){e.commit,e.state;var n=t.projectName,o=t.buildName,a=t.paused,r=t.form;return new Promise((function(e,t){r.spec.paused=a,r.status.latestVersion+=1,Z.editDeployConfig(n,o,r,(function(n,o){o&&!0===n?e(o):t(o.message)}))}))},getDeployConfig:function(e,t){e.commit;var n=t.projectName,o=t.buildName;return new Promise((function(e,t){Z.getDeployConfig(n,o,(function(n,o){o&&!0===n?e(o):t(o.message)}))}))},deleteDeployConfig:function(e,t){var n=e.commit,o=t.projectName,a=t.configName;return new Promise((function(e,t){Z.deleteBuildConfig(o,a,(function(o,a){a&&!0===o?(n("delDeployConfig",a),e(a)):t(a.message)}))}))},deleteReplicationController:function(e,t){e.commit;var n=t.projectName,o=t.deployName;return new Promise((function(e,t){Z.deleteReplicationController(n,o,(function(n,o){o&&!0===n?e(o):t(o.message)}))}))},watchDeploy:function(e,t){e.commit;var n=e.dispatch;return new Promise((function(e,o){w.log("try abortWatchDeploy="+t),Z.abortWatchDeploy(t).then((function(a){Z.watchDeploy(t,(function(a,r){r&&!0===a?(w.log("watchDeploy="+t),n("getDeployConfigList",t),e(r)):o("")}))}))}))}},te={setDeployConfigList:function(e,t){e.deployConfigs=t},delDeployConfig:function(e,t){var n=e.deployConfigs.items.findIndex((function(e){return e.metadata.name===t.details.name}));e.deployConfigs.items.splice(n,1)}},ne={namespaced:!0,state:Q,getters:Y,actions:ee,mutations:te},oe="".concat(h["a"].apiServer,"/api/v1");g.a.defaults.headers.common["Authorization"]=h["a"].testToken;var ae=new Map,re={getPodList:function(e,t){var n="".concat(oe,"/namespaces/")+e+"/pods";g.a.get(n,{}).then((function(e){w.log("[pod]getPodList",e),t(!0,e.data)})).catch((function(e){w.error("[pod]fail getPodList",e.response),t(!1,e.response.data)}))},watchPod:function(e,t){var n="".concat(oe,"/watch/namespaces/")+e+"/pods",o=new AbortController;ae.set(e,o);var a=new Headers;a.append("Authorization",h["a"].testToken),fetch(n,{method:"get",headers:a,signal:o.signal}).then((function(e){var n="",o=e.body.getReader(),a=new TextDecoder;return r();function r(){return o.read().then(i)}function i(e){var o=a.decode(e.value||new Uint8Array,{stream:!e.done});return n+=o,e.done?(t(!0,"done"),n):(t(!0,n),n="",r())}})).then((function(e){w.log("[pod]watchPod, done",e)})).catch((function(e){w.error("[pod]fail watchPod",e)}))},abortWatchPod:function(e){var t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:try{t=ae.get(e),t&&t.abort()}catch(o){}case 1:case"end":return n.stop()}}))},getPodLog:function(e,t,n){var o="".concat(oe,"/namespaces/")+e+"/pods/"+t+"/log";g.a.get(o,{}).then((function(e){w.log("[pod]getPodLog",e),n(!0,e.data)})).catch((function(e){w.error("[pod]fail getPodLog",e.response),n(!1,e.response.data)}))},deletePod:function(e,t,n){var o="".concat(oe,"/namespaces/")+e+"/pods/"+t;g.a.delete(o,{}).then((function(e){w.log("[pod]deletePod",e),n(!0,e.data)})).catch((function(e){w.error("[pod]fail deletePod",e.response),n(!1,e.response.data)}))}},ie={podList:{items:[]}},ce={getPodCount:function(e){return e.podList.items.length}},se={getPodList:function(e,t){var n=e.commit;return new Promise((function(e,o){re.getPodList(t,(function(t,a){a&&!0===t?(n("setPodList",a),e(a)):o(a.message)}))}))},watchPod:function(e,t){e.commit,e.dispatch;return new Promise((function(e,n){w.log("try abortWatchPod="+t),re.abortWatchPod(t).then((function(o){re.watchPod(t,(function(o,a){a&&!0===o?(w.log("watchPod="+t),e(a)):n("")}))}))}))},getPodLog:function(e,t){e.commit;var n=t.projectName,o=t.podName;return new Promise((function(e,t){re.getPodLog(n,o,(function(n,o){o&&!0===n?e(o):t(o.message)}))}))},deletePod:function(e,t){e.commit;var n=t.projectName,o=t.podName;return new Promise((function(e,t){re.deletePod(n,o,(function(n,o){o&&!0===n?e(o):t(o.message)}))}))}},ue={setPodList:function(e,t){e.podList=t}},le={namespaced:!0,state:ie,getters:ce,actions:se,mutations:ue},de="".concat(h["a"].apiServer,"/apis/template.openshift.io/v1/namespaces/openshift/templates");g.a.defaults.headers.common["Authorization"]=h["a"].testToken;var fe={getTemplateList:function(e){var t=de;g.a.get(t,{}).then((function(t){w.log("[template]getTemplateList",t),e(!0,t.data)})).catch((function(t){w.error("[template]fail getTemplateList",t.response),e(!1,t.response.data)}))},getTemplate:function(e,t){var n=de+"/"+e;g.a.get(n,{}).then((function(e){w.log("[template]getTemplate",e),t(!0,e.data)})).catch((function(e){w.error("[template]fail getTemplate",e.response),t(!1,e.response.data)}))}},me={templateList:{items:[]}},pe={getTemplateCount:function(e){return e.templateList.items.length}},ge={getTemplateList:function(e){var t=e.commit;return new Promise((function(e,n){fe.getTemplateList((function(o,a){a&&!0===o?(t("setTemplateList",a),e(a)):n(a.message)}))}))},getTemplate:function(e,t){e.commit;return new Promise((function(e,n){fe.getTemplate(t,(function(t,o){o&&!0===t?e(o):n(o.message)}))}))}},he={setTemplateList:function(e,t){e.templateList=t}},ve={namespaced:!0,state:me,getters:pe,actions:ge,mutations:he},be=n("b239"),ye="".concat(h["a"].apiServer,"/api/v1");g.a.defaults.headers.common["Authorization"]=h["a"].testToken;var Pe={addStorage:function(e,t,n,o){var a="".concat(ye,"/namespaces/")+e+"/persistentvolumeclaims";be.metadata.name=t,be.spec.resources.requests.storage=n,g.a.post(a,be).then((function(e){w.log("[storage]addStorage",e),o(!0,e.data)})).catch((function(e){w.error("[storage]fail addStorage",e.response),o(!1,e.response.data)}))},getStorageList:function(e,t){var n="".concat(ye,"/namespaces/")+e+"/persistentvolumeclaims";g.a.get(n,{}).then((function(e){w.log("[storage]getStorageList",e),t(!0,e.data)})).catch((function(e){w.error("[storage]fail getStorageList",e.response),t(!1,e.response.data)}))}},Ce={storageList:new Map},we={},Le={addStorage:function(e,t){e.commit;var n=t.projectName,o=t.storageName,a=t.storageSize;return new Promise((function(e,t){Pe.addStorage(n,o,a,(function(n,o){o&&!0===n?e(o):t(o.message)}))}))},getStorageList:function(e,t){var n=e.commit;return new Promise((function(e,o){Pe.getStorageList(t,(function(a,r){r&&!0===a?(n("setStorageList",{projectName:t,data:r}),e(r)):o(r.message)}))}))}},je={setStorageList:function(e,t){var n=t.projectName,o=t.data;e.storageList.set(n,o)}},Ne={namespaced:!0,state:Ce,getters:we,actions:Le,mutations:je},ke="".concat(h["a"].apiServer,"/apis/image.openshift.io/v1");g.a.defaults.headers.common["Authorization"]=h["a"].testToken;var Be={createImageStream:function(e,t,n){var o="".concat(ke,"/namespaces/")+e+"/imagestreams";g.a.post(o,t).then((function(e){w.log("[image]createImageStream",e),n(!0,e.data)})).catch((function(e){w.error("[image]fail createImageStream",e.response),n(!1,e.response.data)}))},getImageStream:function(e,t,n){var o="".concat(ke,"/namespaces/")+e+"/imagestreams/"+t;g.a.get(o,{}).then((function(e){w.log("[imagestream]getImageStream",e),n(!0,e.data)})).catch((function(e){w.error("[imagestream]fail getImageStream",e.response),n(!1,e.response.data)}))}},De={},Te={},Se={createImageStream:function(e,t){e.commit;var n=t.projectName,o=t.form;return new Promise((function(e,t){Be.createImageStream(n,o,(function(n,o){o&&!0===n?e(o):t(o.message)}))}))},getImageStream:function(e,t){e.commit;var n=t.projectName,o=t.buildName;return new Promise((function(e,t){Be.getImageStream(n,o,(function(n,o){o&&!0===n?e(o):t(o.message)}))}))}},Oe={},Ae={namespaced:!0,state:De,getters:Te,actions:Se,mutations:Oe},Ee="".concat(h["a"].apiServer,"/api/v1");g.a.defaults.headers.common["Authorization"]=h["a"].testToken;var xe={getControllerList:function(e,t){var n="".concat(Ee,"/namespaces/")+e+"/replicationcontrollers";g.a.get(n,{}).then((function(e){w.log("[controller]getControllerList",e),t(!0,e.data)})).catch((function(e){w.error("[controller]fail getControllerList",e.response),t(!1,e.response.data)}))},getController:function(e,t,n){var o="".concat(Ee,"/namespaces/")+e+"/replicationcontrollers/"+t;g.a.get(o,{}).then((function(e){w.log("[controller]getController",e),n(!0,e.data)})).catch((function(e){w.error("[controller]fail getController",e.response),n(!1,e.response.data)}))},deleteReplicationController:function(e,t,n){var o="".concat(Ee,"/namespaces/")+e+"/replicationcontrollers/"+t;g.a.delete(o,{}).then((function(e){w.log("[controller]deleteReplicationController",e),n(!0,e.data)})).catch((function(e){e&&e.response&&(w.error("[controller]fail deleteReplicationController",e.response),n(!1,e.response.data))}))},getControllerLog:function(e,t,n){var o="".concat(Ee,"/namespaces/")+e+"/replicationcontrollers/"+t+"/log";g.a.get(o,{}).then((function(e){w.log("[controller]getControllerLog",e),n(!0,e.data)})).catch((function(e){w.error("[controller]fail getControllerLog",e.response),n(!1,e.response.data)}))}},Re={controllerList:{items:[]}},Ie={},We={getControllerList:function(e,t){var n=e.commit;return new Promise((function(e,o){xe.getControllerList(t,(function(t,a){a&&!0===t?(n("setControllerList",a),e(a)):o(a.message)}))}))},getController:function(e,t){var n=e.commit,o=t.projectName,a=t.deployName;return new Promise((function(e,t){xe.getController(o,a,(function(o,a){a&&!0===o?(n("setController",a),e(a)):t(a.message)}))}))},deleteReplicationController:function(e,t){var n=e.commit,o=t.projectName,a=t.deployName;return new Promise((function(e,t){xe.deleteReplicationController(o,a,(function(o,a){a&&!0===o?(n("delController",a),e(a)):t(a.message)}))}))},getControllerLog:function(e,t){e.commit;var n=t.projectName,o=t.deployName;return new Promise((function(e,t){xe.getControllerLog(n,o,(function(n,o){o&&!0===n?e(o):t(o.message)}))}))}},ze={setControllerList:function(e,t){e.controllerList=t},setController:function(e,t){e.controllerList.items.push(t)},delController:function(e,t){var n=e.controllerList.items.findIndex((function(e){return e.metadata.name===t.details.name}));e.controllerList.items.splice(n,1)}},Me={namespaced:!0,state:Re,getters:Ie,actions:We,mutations:ze};a["default"].use(m["a"]);var Ue=new m["a"].Store({modules:{project:O,user:z,build:H,deploy:ne,pod:le,template:ve,storage:Ne,imagestream:Ae,controller:Me}});a["default"].use(f["a"]);var Ge=[{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-31e5cafb"),n.e("chunk-85f3c0fc")]).then(n.bind(null,"a55b"))}},{path:"/",redirect:"/dashboard",name:"HOME",component:function(){return Promise.all([n.e("chunk-31e5cafb"),n.e("chunk-c28d3eb4")]).then(n.bind(null,"f382"))},beforeEnter:function(e,t,n){if(Ue.state.user.isAuth)return n();n("/login")},children:[{path:"Dashboard",name:"",component:function(){return Promise.all([n.e("chunk-bf22b29c"),n.e("chunk-056461ed")]).then(n.bind(null,"7277"))}},{path:":projectName",name:"main",redirect:"/main/:projectName",meta:{label:""},component:{render:function(e){return e("router-view")}},props:!0,children:[{path:":projectName",name:"",meta:{label:""},component:function(){return Promise.all([n.e("chunk-bf22b29c"),n.e("chunk-52da12c4")]).then(n.bind(null,"5bbe"))},props:!0},{path:":packageName",name:"detail",meta:{label:""},component:function(){return Promise.all([n.e("chunk-bf22b29c"),n.e("chunk-4816f193")]).then(n.bind(null,"58a1"))},props:!0}]},{path:"apitest/:projectName",name:"REST API Test",component:function(){return n.e("chunk-18852eae").then(n.bind(null,"a57b"))},props:!0}]}],_e=new f["a"]({mode:"history",base:"/",routes:Ge}),Ve=_e,Fe=(n("ac1f"),n("466d"),n("a925"));function qe(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var o=n.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){var a=o[1];t[a]=e(n)}})),t}a["default"].use(Fe["a"]);var Je=new Fe["a"]({locale:"ko",fallbackLocale:"en",messages:qe()}),He=n("5f5b");a["default"].config.productionTip=!1,a["default"].use(He["a"]),C(),new a["default"]({router:Ve,store:Ue,i18n:Je,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"6b59":function(e){e.exports=JSON.parse('{"kind":"DeploymentRequest","apiVersion":"apps.openshift.io/v1","name":""}')},"7f29":function(e){e.exports=JSON.parse('{"kind":"BuildRequest","apiVersion":"build.openshift.io/v1","metadata":{"name":""}}')},"9c0c":function(e,t,n){},b239:function(e){e.exports=JSON.parse('{"kind":"PersistentVolumeClaim","apiVersion":"v1","metadata":{"name":"","labels":{},"annotations":{}},"spec":{"resources":{"requests":{"storage":"10Gi"}},"accessModes":["ReadWriteMany"]}}')},db49:function(e,t,n){"use strict";n("dca8");var o="192.168.1.3:8443",a=!1;t["a"]=Object.freeze({apiServer:"https://".concat(o),useDummyData:a,defaultSheet:"utteranceList",actionType:{ADD:"add",EDIT:"edit",DEL:"delete",DOWNLOAD:"download"},importType:{excel:{text:"Excel",value:"excel"},version:{text:"Copy to Old Version",value:"ver"}},ProStatus:{O:{value:"O",text:"Open",badgeVariant:"warning"},C:{value:"C",text:"Closed",badgeVariant:"secondary"}},VerStatus:{W:{value:"W",text:"Working",badgeVariant:"warning"},C:{value:"C",text:"Completed",badgeVariant:"secondary"}},UserType:{siteManager:{code:"S",label:"사이트 관리자"},projectManager:{code:"P",label:"프로젝트 관리자"},user:{code:"U",label:"일반 사용자"}},testToken:"Bearer Dj2tzDaPaF4ihcMzoE3UrywOOhjKRh3FqsKWkS3zKsU",defaultStorageSize:"1Gi"})},dd11:function(e){e.exports=JSON.parse('{"common":{"search":"검색","create":"생성","delete":"삭제","complete":"완료","save":"저장","confirm":"확인","ok":"확인","cancel":"취소","add":"생성","edit":"변경","modify":"수정","recovery":"복구","close":"닫기","recoveryIs":"복구가","clear":"초기화"},"login":{"userID":"사용자 ID","email":"이메일","password":"비밀번호","passwordCheck":"비밀번호 확인","login":"로그인","editPassword":"PW 재발급","register":"가입 요청","name":"이름","department":"부서"},"popup":{"project":"프로젝트","addProjectTitle":"프로젝트 생성","delProjectTitle":"프로젝트 삭제","addPackageTitle":"패키지 생성","delPackageTitle":"패키지 삭제","startPodTitle":"패키지 배포","stopPodTitle":"패키지 배포 정지","startBuild":"패키지 빌드","startPodUnknownError":"구동 중인 POD가 없습니다.","delProjectConfirm":"정말 [{projectName}] 프로젝트를 삭제하시겠습니까?","modalTitle":"{itemType} {modalType}","modalConfirm":"정말 [{name}] 프로젝트를 <br />{modalType}하시겠습니까?","modalWarnning":"{modalType} 후 데이터 {active} 불가능 합니다."},"dashboard":{"dashboardPlaceholder":"프로젝트명으로 검색"},"addProject":{"addProject":"Add Project","proNameNullValidate":"프로젝트 이름은 필수 입력사항입니다.","proNameTrimValidate":"-를 이용해 연결하거나 공백을 제거해주세요","proNameEnValidation":"프로젝트 이름은 영문 소문자로 작성해주세요","proNamePlaceholder":"my-project","proDisplayNamePlaceholder":"My Project","proDescPlaceholder":"A short description"}}')},edd4:function(e){e.exports=JSON.parse('{"common":{},"popup":{},"dashboard":{},"mgt.project":{},"mgt.version":{},"mgt.utterance":{}}')}});
//# sourceMappingURL=app.0389a9c3.js.map