(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"713b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"hHh LpR fFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n        "+e._s(e.barTitle)+"\n      ")]),a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"refresh"},on:{click:function(t){return e.reload()}}})],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("div",{staticClass:"column",staticStyle:{height:"100vh"}},[a("div",{staticClass:"col"},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("Menu")]),a("q-item",{attrs:{clickable:"",to:"/dashboard"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"home"}})],1),a("q-item-section",[a("q-item-label",[e._v("Dashboard")])],1)],1),e._l(e.essentialLinks,(function(t,s){return[a("q-item",{key:"menu"+s,attrs:{clickable:"",to:t.to},on:{click:function(a){return e.changeHeader(t.title)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"thumbs_up_down"}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t.title))])],1)],1)]}))],2)],1),a("div",{staticClass:"col full-height full-width"})])]),a("q-page-container",[a("router-view",{key:e.watcher,ref:"contentPage"})],1),a("q-dialog",{attrs:{persistent:""},model:{value:e.isDialog,callback:function(t){e.isDialog=t},expression:"isDialog"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-form",{staticClass:"q-gutter-md",staticStyle:{width:"95%"},on:{submit:function(t){return e.changePassword()}}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Change Password")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-input",{attrs:{dense:"",label:"Input Password",autofocus:"",type:"password",rules:[function(e){return e&&e.length>0||"Please input Password"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("q-input",{attrs:{dense:"",label:"Re-InputPassword",type:"password",rules:[function(t){return t==e.password||"Confirm password must be same with password"}]},model:{value:e.repassword,callback:function(t){e.repassword=t},expression:"repassword"}})],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),a("q-btn",{attrs:{flat:"",label:"Save",type:"submit"}})],1)],1)],1)],1)],1)},n=[],r=a("2b0e"),o={name:"MainLayout",mixins:[r["a"].prototype.$mixinStore],data:function(){return{watcher:0,leftDrawerOpen:!0,essentialLinks:[{title:"Koneksi",icon:"code",link:"koneksi",to:{name:"koneksi-page"}},{title:"Generate Report",icon:"code",link:"generate-report",to:{name:"generate-report-page"}}],password:"",repassword:"",isDialog:!1}},watch:{reloadPage:function(e){this.watcher=e}},methods:{changeHeader:function(e){this.setBarTitle(e)},reload:function(){this.doReloadPage()}}},i=o,l=a("2877"),c=a("eebe"),d=a.n(c),u=a("4d5a"),p=a("e359"),w=a("65c6"),f=a("9c40"),m=a("6ac5"),b=a("9404"),h=a("1c1c"),q=a("0170"),g=a("66e5"),v=a("4074"),k=a("0016"),Q=a("09e3"),C=a("24e8"),y=a("f09f"),D=a("0378"),_=a("a370"),x=a("27f9"),P=a("4b7e"),I=a("7f67"),L=Object(l["a"])(i,s,n,!1,null,null,null);t["default"]=L.exports;d()(L,"components",{QLayout:u["a"],QHeader:p["a"],QToolbar:w["a"],QBtn:f["a"],QToolbarTitle:m["a"],QDrawer:b["a"],QList:h["a"],QItemLabel:q["a"],QItem:g["a"],QItemSection:v["a"],QIcon:k["a"],QPageContainer:Q["a"],QDialog:C["a"],QCard:y["a"],QForm:D["a"],QCardSection:_["a"],QInput:x["a"],QCardActions:P["a"]}),d()(L,"directives",{ClosePopup:I["a"]})}}]);