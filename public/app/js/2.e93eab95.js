(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"66d3":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"flex justify-center"},[t("q-card",{staticClass:"my-card"},[t("q-card-section",{staticClass:"text-center"},[t("div",{staticClass:"text-h6"},[e._v("\n        "+e._s(e.pageTitle)+"\n      ")])]),t("q-card-section",[t("q-form",{staticClass:"q-gutter-md",on:{submit:e.saveData}},[t("q-input",{attrs:{label:"Nama *","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Nama tidak boleh kosong"}]},model:{value:e.field.Nama,callback:function(a){e.$set(e.field,"Nama",a)},expression:"field.Nama"}}),t("q-input",{attrs:{label:"Host *","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Host tidak boleh kosong"}]},model:{value:e.field.Host,callback:function(a){e.$set(e.field,"Host",a)},expression:"field.Host"}}),t("q-input",{attrs:{label:"User *","lazy-rules":"",rules:[function(e){return e&&e.length>0||"User tidak boleh kosong"}]},model:{value:e.field.User,callback:function(a){e.$set(e.field,"User",a)},expression:"field.User"}}),t("q-input",{attrs:{label:"Password *",type:"password","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Password tidak boleh kosong"}]},model:{value:e.field.Password,callback:function(a){e.$set(e.field,"Password",a)},expression:"field.Password"}}),t("q-input",{attrs:{label:"Port *","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Port tidak boleh kosong"}]},model:{value:e.field.Port,callback:function(a){e.$set(e.field,"Port",a)},expression:"field.Port"}}),t("q-input",{attrs:{label:"Database *","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Database tidak boleh kosong"}]},model:{value:e.field.Database,callback:function(a){e.$set(e.field,"Database",a)},expression:"field.Database"}}),t("div",{staticClass:"text-right q-mt-lg"},[t("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}})],1)],1)],1)],1)],1)},n=[],r=t("967e"),o=t.n(r),l=(t("a481"),t("96cf"),t("fa84")),i=t.n(l),u=(t("c5f6"),t("2b0e")),c={mixins:[u["a"].prototype.$mixinStore],name:"PageIndex",props:{paramID:{type:Number,default:0}},data:function(){return{isShowPage:!1,pageTitle:"",field:{Nama:"",Host:"",User:"",Password:"",Port:"",Database:""}}},computed:{},methods:{saveData:function(){var e=this;return i()(o.a.mark((function a(){var t,s,n,r;return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(n in t=e,s=new FormData,e.field)s.append(n,e.field[n]);return e.paramID&&s.append("ID",e.paramID),a.next=6,e.post({url:"".concat(t.baseURL,"insertKoneksi"),formData:s,headers:{"Content-Type":"multipart/form-data"}});case 6:r=a.sent,"success"===r.info?e.$router.replace({name:"koneksi-page"}):e.showNotif();case 8:case"end":return a.stop()}}),a)})))()},loadData:function(){var e=this;return i()(o.a.mark((function a(){var t,s,n,r,l,i,u,c,d;return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t=e,a.next=3,e.post({url:"".concat(t.baseURL,"getKoneksi"),data:{filter:{ID:t.paramID}},loading:!1});case 3:s=a.sent,"success"===s.info?(n=s.data[0],r=n.Nama,l=n.Host,i=n.User,u=n.Password,c=n.Port,d=n.Database,console.log({Nama:r,Host:l,User:i,Password:u,Port:c,Database:d}),e.field.Nama=r,e.field.Host=l,e.field.User=i,e.field.Password=u,e.field.Port=c,e.field.Database=d):e.showNotif();case 5:case"end":return a.stop()}}),a)})))()}},mounted:function(){this.setBarTitle("Koneksi"),0===this.paramID?this.pageTitle="Koneksi Baru":(this.pageTitle="Edit Koneksi",this.loadData())}},d=c,f=(t("f241"),t("2877")),p=t("eebe"),m=t.n(p),b=t("9989"),h=t("f09f"),k=t("a370"),g=t("0378"),w=t("27f9"),D=t("9c40"),P=Object(f["a"])(d,s,n,!1,null,"735b63dc",null);a["default"]=P.exports;m()(P,"components",{QPage:b["a"],QCard:h["a"],QCardSection:k["a"],QForm:g["a"],QInput:w["a"],QBtn:D["a"]})},dad6:function(e,a,t){},f241:function(e,a,t){"use strict";var s=t("dad6"),n=t.n(s);n.a}}]);