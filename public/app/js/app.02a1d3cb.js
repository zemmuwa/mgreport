(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{0:function(e,t){},"0047":function(e,t,n){},"0f8f":function(e,t){},1:function(e,t,n){e.exports=n("2f39")},"120c":function(e,t){},2:function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"setIdentity",(function(){return _}));var r={};n.r(r),n.d(r,"post",(function(){return W}));var o={};n.r(o),n.d(o,"setBarTitle",(function(){return L})),n.d(o,"doReloadPage",(function(){return N}));var i=n("967e"),c=n.n(i),u=(n("a481"),n("96cf"),n("fa84")),s=n.n(u),l=(n("5c7d"),n("7d6e"),n("e54f"),n("985d"),n("0047"),n("2b0e")),p=n("1f91"),f=n("42d2"),d=n("b05d"),b=n("714f"),m=n("7f67"),h=n("2a19"),v=n("a639"),g=n("f508"),w=n("18d6");l["a"].use(d["a"],{config:{},lang:p["a"],iconSet:f["a"],directives:{Ripple:b["a"],ClosePopup:m["a"]},plugins:{Notify:h["a"],SessionStorage:v["a"],Loading:g["a"],LocalStorage:w["a"]}});var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},O=[],k={name:"App"},D=k,x=n("2877"),j=Object(x["a"])(D,y,O,!1,null,null,null),S=j.exports,P=n("4bde"),Y=n("2f62"),C={token:"",user:""},V=n("120c");function _(e,t){var n=t.token,a=t.user;e.token=n,e.user=a}n("551c"),n("06db");var T=n("4328"),E=n.n(T),G=n("bc3a"),R=n.n(G);function W(e,t){var n=t.url,a=t.data,r=void 0===a?{}:a,o=t.headers,i=void 0===o?{"Content-Type":"application/x-www-form-urlencoded"}:o,c=t.formData,u=void 0===c?null:c,s=t.loading,l=void 0===s||s;return new Promise((function(e,t){var a;a=u||E.a.stringify(r),l&&g["a"].show({spinnerColor:"primary"}),R.a.post(n,a,{headers:i}).then((function(t){g["a"].hide(),e(t.data)})).catch((function(t){g["a"].hide(),e(t)}))}))}var $={namespaced:!0,state:C,getters:V,mutations:a,actions:r},M={baseURL:"localhost:8080"!==window.location.host?"".concat(window.location.host,"/mgreport/api/"):"http://mgreport.test/api/",reloadPage:1,barTitle:""},q=n("d2b2");function L(e,t){e.barTitle=t}function N(e){e.reloadPage+=1}var A=n("0f8f"),I={namespaced:!0,state:M,getters:q,mutations:o,actions:A},K=Object(P["store"])((function({Vue:e}){e.use(Y["a"]);const t=new Y["a"].Store({modules:{WebService:$,GlobalData:I},strict:!1});return t})),B=n("8c4f");const F=[{path:"/",redirect:"/dashboard",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"dashboard",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"8b24")),name:"dashboard-page"}]},{path:"/koneksi",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"9ba9")),name:"koneksi-page"},{path:"new",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"66d3")),name:"koneksi-insert-page",props:e=>({paramID:0})},{path:":id",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"66d3")),name:"koneksi-edit-page",props:e=>({paramID:e.params.id})}]},{path:"/generate-report",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"ba9e")),name:"generate-report-page"}]}];F.push({path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))});var J=F,H=Object(P["route"])((function({Vue:e}){e.use(B["a"]);const t=new B["a"]({scrollBehavior:()=>({x:0,y:0}),routes:J,mode:"history",base:"/mgreport/app/"});return t})),U=function(){return z.apply(this,arguments)};function z(){return z=s()(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof K){e.next=6;break}return e.next=3,K({Vue:l["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=K;case 7:if(t=e.t0,"function"!==typeof H){e.next=14;break}return e.next=11,H({Vue:l["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=H;case 15:return n=e.t1,t.$router=n,a={el:"#q-app",router:n,store:t,render:function(e){return e(S)}},e.abrupt("return",{app:a,store:t,router:n});case 19:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}var Q=n("750b"),X=Object(P["boot"])(({Vue:e})=>{e.use(Q["b"])}),Z={failed:"Action failed",success:"Action was successful"},ee={"en-us":Z},te=n("a925");l["a"].use(te["a"]);const ne=new te["a"]({locale:"en-us",fallbackLocale:"en-us",messages:ee});var ae=Object(P["boot"])(({app:e})=>{e.i18n=ne}),re=Object(P["boot"])(({Vue:e})=>{e.prototype.$axios=R.a}),oe=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("456d"),n("7f7f"),n("c5f6"),n("6b54"),n("28a5"),n("c47a")),ie=n.n(oe),ce=(n("6762"),n("2fdb"),n("3b2b"),n("c698"),n("bd4c")),ue=n("7937"),se=n("a357"),le=n("cdde"),pe=n("1146"),fe=n.n(pe);function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){ie()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=ue["c"].capitalize,he=function(e){var t=e.Vue,n=e.store;function a(e,t){var a;return"state"!==e&&"_mutations"!==e?a=Reflect.ownKeys(n[e]).map((function(e){return e.replace(new RegExp(t+"/","g"),"")})):"_mutations"===e?(a=Reflect.ownKeys(n[e]).filter((function(e){return e.includes(t)})),a=a.map((function(e){return e.replace(new RegExp(t+"/","g"),"")}))):(a=Reflect.ownKeys(n[e][t]),a.pop()),a}var r={methods:be({},Object(Y["b"])("GlobalData",a("_actions","GlobalData")),{},Object(Y["b"])("WebService",a("_actions","WebService")),{},Object(Y["d"])("WebService",a("_mutations","WebService")),{},Object(Y["d"])("GlobalData",a("_mutations","GlobalData")),{showNotif:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Gagal Saat Request",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"red";this.$q.notify({message:e,color:t,position:"top"})},formatDateTime:function(e,t){return ce["b"].formatDate(e,t)},formatCapital:function(e){return e?me(e):""},formatCurrency:function(e){return"number"!==typeof e&&(e=parseFloat(e)),isNaN(e)?0:(e=e.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"),e)},getFormatedData:function(e,t){var n;switch(t){case"date":n=this.formatDateTime(e,"DD/MM/YYYY");break;case"datetime":n=this.formatDateTime(e,"DD/MM/YYYY HH:mm:ss");break;case"number":n=this.formatCurrency(e);break;default:n=e;break}return n},dataToSelect:function(e,t,n){var a=[];return e.forEach((function(e){a.push({label:e[n],value:e[t]})})),a},filterArrayObject:function(e,t,n){var a=e.filter((function(e){return n.indexOf(e[t])>-1}));return a},differenceOf2Arrays:function(e,t){var n=[];for(var a in e=e.toString().split(",").map(Number),t=t.toString().split(",").map(Number),e)t.includes(e[a])||n.push(e[a]);for(a in t)e.includes(t[a])||n.push(t[a]);return n.sort((function(e,t){return e-t}))},compareData:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"LIKE",a=!1;switch("number"===typeof e&&(e=e.toString()),n){case"LIKE":a=e.toUpperCase().includes(t);break;default:break}return a},wrapCsvValue:function(e,t){console.log(e,t);var n=void 0!==t?t(e):e;return n=void 0===n||null===n?"":String(n),"".concat(n)},exportExcelOld:function(e,t,n){var a=this,r=[e.map((function(e){return a.wrapCsvValue(e.label)})).join("\t")].concat(t.map((function(t){return e.map((function(e){return a.wrapCsvValue("function"===typeof e.field?e.field(t):t[void 0===e.field?e.name:e.field],e.format)})).join("\t")}))).join("\r\n");console.log(r);var o=Object(se["a"])("".concat(n,"-").concat(a.formatDateTime(Date.now(),"DD-MM-YYYY")),r,"application/vnd.ms-excel");!0!==o&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})},exportExcel:function(e,t,n){var a=this,r=[e.map((function(e){return a.wrapCsvValue(e.label)}))];t.map((function(t){return r.push(e.map((function(e){return a.wrapCsvValue("function"===typeof e.field?e.field(t):t[void 0===e.field?e.name:e.field],e.format)})))}));var o=fe.a.utils.aoa_to_sheet(r),i=fe.a.utils.book_new();fe.a.utils.book_append_sheet(i,o,"SheetJS"),fe.a.writeFile(i,"".concat(n,"-").concat(a.formatDateTime(Date.now(),"DD-MM-YYYY"),".xlsx"))},copyText:function(e){var t=this;Object(le["a"])(e).then((function(){t.$q.notify({message:"Data berhasil diCopy",color:"primary"})})).catch((function(){t.$q.notify({message:"Data gagal diCopy",color:"red"})}))}}),computed:be({},Object(Y["e"])("GlobalData",a("state","GlobalData")),{},Object(Y["c"])("GlobalData",a("getters","GlobalData")),{},Object(Y["e"])("WebService",a("state","WebService")),{},Object(Y["c"])("WebService",a("getters","WebService")),{getBgTheme:function(){return{"background-color":this.theme}}})};t.prototype.$mixinStore=r};function ve(){return ge.apply(this,arguments)}function ge(){return ge=s()(c.a.mark((function e(){var t,n,a,r,o,i,u,s,p;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,n=t.app,a=t.store,r=t.router,o=!0,i=function(e){o=!1,window.location.href=e},u=window.location.href.replace(window.location.origin,""),s=[X,ae,re,he],p=0;case 11:if(!(!0===o&&p<s.length)){e.next=29;break}if("function"===typeof s[p]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,s[p]({app:n,router:r,store:a,Vue:l["a"],ssrContext:null,redirect:i,urlPath:u});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:p++,e.next=11;break;case 29:if(!1!==o){e.next=31;break}return e.abrupt("return");case 31:new l["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),ge.apply(this,arguments)}ve()},3:function(e,t){},d2b2:function(e,t){}},[[1,4,0]]]);