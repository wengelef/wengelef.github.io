webpackJsonp([1],{"51LJ":function(t,e){},"7zck":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),o={name:"App",data:()=>({bottomNav:0}),computed:{color(){switch(this.bottomNav){case 0:return"teal";case 1:return"indigo"}}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{dark:""}},[n("div",{directives:[{name:"responsive",rawName:"v-responsive.lg.xl",modifiers:{lg:!0,xl:!0}}]},[n("v-parallax",{attrs:{src:i("lS+k"),height:"600"}},[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"","fill-height":"","align-end":""}},[n("v-card",{staticClass:"rounded-card pa-4",attrs:{color:"rgba(0, 0, 0, 0.7)"}},[n("div",[n("div",{staticClass:"display-2"},[t._v("Florian Wengelewski")]),t._v(" "),n("div",{staticClass:"display-1 pt-2"},[t._v("Software Engineer")])])])],1)],1)],1)],1),t._v(" "),n("div",{directives:[{name:"responsive",rawName:"v-responsive.md.sm.xs",modifiers:{md:!0,sm:!0,xs:!0}}]},[n("v-parallax",{attrs:{src:i("rLcc"),height:"400"}},[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"","fill-height":"","align-end":""}},[n("v-card",{staticClass:"rounded-card pa-3",attrs:{color:"rgba(0, 0, 0, 0.7)"}},[n("div",[n("div",{staticClass:"display-1"},[t._v("Florian Wengelewski")]),t._v(" "),n("div",{staticClass:"display-1"},[t._v("Android Developer")])])])],1)],1)],1)],1),t._v(" "),n("router-view"),t._v(" "),n("v-bottom-nav",{attrs:{active:t.bottomNav,value:!0,color:t.color,mandatory:"",fixed:"",shift:""},on:{"update:active":function(e){t.bottomNav=e}}},[n("v-btn",{attrs:{dark:"",to:"/"}},[n("span",[t._v("Career")]),t._v(" "),n("v-icon",[t._v("donut_large")])],1),t._v(" "),n("v-btn",{attrs:{dark:"",to:"/private"}},[n("span",[t._v("Private")]),t._v(" "),n("v-icon",[t._v("extension")])],1)],1)],1)],1)},staticRenderFns:[]};var l=i("VU/8")(o,s,!1,function(t){i("51LJ")},null,null).exports,a=i("/ocq"),r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{dark:""}},[i("v-content",[i("v-container",{attrs:{fluid:""}},[i("v-layout",[i("v-flex",{attrs:{"text-xs-center":""}},[i("v-btn",{attrs:{round:"",outline:t.outlineContact,color:"green"},on:{click:t.contactClick}},[t._v("Contact")]),t._v(" "),i("v-btn",{attrs:{round:"",outline:t.outlineSkills,color:"teal"},on:{click:t.skillsClick}},[t._v("Skills")]),t._v(" "),i("v-btn",{attrs:{round:"",outline:t.outlineCurrently,color:"red"},on:{click:t.currentlyClick}},[t._v("In Progress")]),t._v(" "),i("v-btn",{attrs:{round:"",outline:t.outlinePast,color:"orange"},on:{click:t.pastClick}},[t._v("Done")]),t._v(" "),i("v-btn",{attrs:{round:"",outline:t.outlineBacklog,color:"blue"},on:{click:t.backlogClick}},[t._v("Backlog")])],1)],1)],1),t._v(" "),i("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[i("v-expansion-panel",{attrs:{popout:"",expand:""},model:{value:t.expands,callback:function(e){t.expands=e},expression:"expands"}},[i("v-expansion-panel-content",{attrs:{readonly:""}},[i("v-flex",{staticClass:"pa-4"},[i("v-list",{attrs:{"two-line":""}},[i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{attrs:{color:"white"}},[t._v("phone")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("+49 176 648 50 30 2")]),t._v(" "),i("v-list-tile-sub-title",[t._v("Mobile")])],1)],1),t._v(" "),i("v-divider",{attrs:{inset:""}}),t._v(" "),i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{attrs:{color:"white"}},[t._v("mail")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("wengelef@gmail.com")]),t._v(" "),i("v-list-tile-sub-title",[t._v("Personal")])],1)],1),t._v(" "),i("v-divider",{attrs:{inset:""}}),t._v(" "),i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{attrs:{color:"white"}},[t._v("location_on")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Aachenerstr. 325")]),t._v(" "),i("v-list-tile-sub-title",[t._v("50931 Koeln")])],1)],1)],1)],1)],1),t._v(" "),i("v-expansion-panel-content",{attrs:{readonly:""}},[i("v-flex",{staticClass:"pa-4"},[i("ul",t._l(t.skills,function(e){return i("li",{key:e.text},[t._v("\n                  "+t._s(e.text)+"\n                ")])}),0)])],1),t._v(" "),i("v-expansion-panel-content",{attrs:{readonly:""}},[i("div",{directives:[{name:"responsive",rawName:"v-responsive.lg.xl",modifiers:{lg:!0,xl:!0}}]},[i("v-timeline",[i("v-timeline-item",{attrs:{"fill-dot":"",right:"",color:"#1de9b6"}},[i("font",{attrs:{slot:"opposite",size:"4",color:"#1de9b6"},slot:"opposite"},[t._v("since April 2019")]),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("div",[i("font",{attrs:{size:"5",color:"#1de9b6"}},[t._v("REWE Digital GmbH")])],1),t._v(" "),i("div",[i("font",{attrs:{size:"4",color:"#999999"}},[t._v("Software Engineer")])],1),t._v(" "),i("v-divider"),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("ul",t._l(t.rewe,function(e){return i("li",{key:e.text},[t._v("\n                          "+t._s(e.text)+"\n                        ")])}),0)])],1)],1)],1)],1),t._v(" "),i("div",{directives:[{name:"responsive",rawName:"v-responsive.sm.xs.md",modifiers:{sm:!0,xs:!0,md:!0}}]},[i("v-flex",{staticClass:"pa-4"},[i("div",[i("font",{attrs:{size:"3",color:"#1de9b6"}},[t._v("since April 2019")])],1),t._v(" "),i("div",[i("font",{attrs:{size:"5",color:"#1de9b6"}},[t._v("REWE Digital GmbH")])],1),t._v(" "),i("div",[i("font",{attrs:{size:"4",color:"#999999"}},[t._v("Software Engineer")])],1),t._v(" "),i("v-divider"),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("ul",t._l(t.rewe,function(e){return i("li",{key:e.text},[t._v("\n                      "+t._s(e.text)+"\n                    ")])}),0)])],1)],1)]),t._v(" "),i("v-expansion-panel-content",{attrs:{readonly:""}},[i("div",{directives:[{name:"responsive",rawName:"v-responsive.lg.xl",modifiers:{lg:!0,xl:!0}}]},[i("v-timeline",[i("v-timeline-item",{attrs:{"fill-dot":"",right:"",color:"#29B6F6"}},[i("font",{attrs:{slot:"opposite",size:"4",color:"#29B6F6"},slot:"opposite"},[t._v("January 2017 - April 2019")]),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("div",[i("font",{attrs:{size:"5",color:"#29B6F6"}},[t._v("nextmarkets GmbH")])],1),t._v(" "),i("div",[i("font",{attrs:{size:"4",color:"#999999"}},[t._v("Software Engineer")])],1),t._v(" "),i("v-divider"),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("ul",t._l(t.nextmarkets,function(e){return i("li",{key:e.text},[t._v("\n                          "+t._s(e.text)+"\n                        ")])}),0)])],1)],1),t._v(" "),i("v-timeline-item",{attrs:{"fill-dot":"",right:"",color:"#f44336"}},[i("font",{attrs:{slot:"opposite",size:"4",color:"#f44336"},slot:"opposite"},[t._v("January 2015 - January 2017")]),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("div",[i("font",{attrs:{size:"5",color:"#f44336"}},[t._v("RockAByte GmbH")])],1),t._v(" "),i("div",[i("font",{attrs:{size:"4",color:"#999999"}},[t._v("Android Developer")])],1),t._v(" "),i("v-divider"),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("ul",t._l(t.rab,function(e){return i("li",{key:e.text},[t._v("\n                          "+t._s(e.text)+"\n                        ")])}),0),t._v(" "),i("div",[t._v("Projects:")]),t._v(" "),i("ul",t._l(t.rabProjects,function(e){return i("li",{key:e.text},[t._v("\n                          "+t._s(e.text)+"\n                        ")])}),0)])],1)],1),t._v(" "),i("v-timeline-item",{attrs:{"fill-dot":"",right:"",color:"#FFEE58"}},[i("font",{attrs:{slot:"opposite",size:"4",color:"#FFEE58"},slot:"opposite"},[t._v("September 2014 - December 2014")]),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("div",[i("font",{attrs:{size:"5",color:"#FFEE58"}},[t._v("Hottgenroth Software GmbH")])],1),t._v(" "),i("div",[i("font",{attrs:{size:"4",color:"#999999"}},[t._v("Unity Development internship")])],1),t._v(" "),i("v-divider"),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("ul",t._l(t.hottgenroth,function(e){return i("li",{key:e.text},[t._v("\n                          "+t._s(e.text)+"\n                        ")])}),0)])],1)],1),t._v(" "),i("v-timeline-item",{attrs:{"fill-dot":"",right:"",color:"#0097A7"}},[i("font",{attrs:{slot:"opposite",size:"4",color:"#0097A7"},slot:"opposite"},[t._v("March 2012 - September 2013")]),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("div",[i("font",{attrs:{size:"5",color:"#0097A7"}},[t._v("Nurogames GmbH")])],1),t._v(" "),i("div",[i("font",{attrs:{size:"4",color:"#999999"}},[t._v("Android Developer")])],1),t._v(" "),i("v-divider"),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("ul",t._l(t.nurogames,function(e){return i("li",{key:e.text},[t._v("\n                          "+t._s(e.text)+"\n                        ")])}),0)])],1)],1)],1)],1),t._v(" "),i("div",{directives:[{name:"responsive",rawName:"v-responsive.md.sm.xs",modifiers:{md:!0,sm:!0,xs:!0}}]},[i("v-flex",{staticClass:"pa-4"},[i("font",{attrs:{size:"3",color:"#f44336"}},[t._v("January 2015 - January 2017")]),t._v(" "),i("div",[i("font",{attrs:{size:"5",color:"#f44336"}},[t._v("RockAByte GmbH")])],1),t._v(" "),i("div",[i("font",{attrs:{size:"4",color:"#999999"}},[t._v("Android Developer")])],1),t._v(" "),i("v-divider"),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("ul",t._l(t.rab,function(e){return i("li",{key:e.text},[t._v("\n                      "+t._s(e.text)+"\n                    ")])}),0),t._v(" "),i("div",[t._v("Projects:")]),t._v(" "),i("ul",t._l(t.rabProjects,function(e){return i("li",{key:e.text},[t._v("\n                      "+t._s(e.text)+"\n                    ")])}),0)])],1),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("font",{attrs:{size:"3",color:"#FFEE58"}},[t._v("September 2014 - December 2014")]),t._v(" "),i("div",[i("font",{attrs:{size:"5",color:"#FFEE58"}},[t._v("Hottgenroth Software GmbH")])],1),t._v(" "),i("div",[i("font",{attrs:{size:"4",color:"#999999"}},[t._v("Unity Development internship")])],1),t._v(" "),i("v-divider"),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("ul",t._l(t.hottgenroth,function(e){return i("li",{key:e.text},[t._v("\n                      "+t._s(e.text)+"\n                    ")])}),0)])],1),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("font",{attrs:{size:"3",color:"#0097A7"}},[t._v("March 2012 - September 2013")]),t._v(" "),i("div",[i("font",{attrs:{size:"5",color:"#0097A7"}},[t._v("Nurogames GmbH")])],1),t._v(" "),i("div",[i("font",{attrs:{size:"4",color:"#999999"}},[t._v("Android Developer")])],1),t._v(" "),i("v-divider"),t._v(" "),i("v-flex",{staticClass:"pa-4"},[i("ul",t._l(t.nurogames,function(e){return i("li",{key:e.text},[t._v("\n                      "+t._s(e.text)+"\n                    ")])}),0)])],1)],1)]),t._v(" "),i("v-expansion-panel-content",{attrs:{readonly:""}},[i("v-flex",{staticClass:"pa-4"},t._l(t.backlog,function(e){return i("ul",{key:e.title},[i("a",{attrs:{href:e.url}},[t._v(t._s(e.title))]),t._v(" "),i("v-flex",{staticClass:"pl-4 pb-4 pt-2"},t._l(e.texts,function(e){return i("li",{key:e},[t._v("\n                    "+t._s(e)+"\n                  ")])}),0)],1)}),0)],1)],1)],1)],1)],1)},staticRenderFns:[]};var v=i("VU/8")({name:"CV",data:()=>({outlineContact:!0,outlineSkills:!1,outlineCurrently:!1,outlinePast:!0,outlineBacklog:!0,expands:[!1,!0,!0,!1,!1],items:[{title:"Home",icon:"dashboard"},{title:"About",icon:"question_answer"}],right:null,skills:[{text:"Seasoned in using IntelliJ IDEA or Android Studio for Android Development, Android SDK’s and commonly used third-party-libraries"},{text:"Git version control system"},{text:"Understanding of the importance of code quality and continuous integration (Unit Testing, static code analysis, Jenkins CI, Fabric/Firebase)"},{text:"Broad development knowledge of Kotlin"},{text:"Enthusiastic about Material Design and Mobile User Experience"},{text:"MVVM and MVP architecture"},{text:"Functional Reactive Programming (RxJava)"},{text:"Implementing RESTful Clients has become second nature (Retrofit 2, Volley)"},{text:"ORMs and NoSQL (Realm, GreenDAO, ActiveAndroid, SQL Delight)"},{text:"Dependency injection (Dagger 2, Koin)"},{text:"Active StackOverflow community member"},{text:"Working in agile environments (Scrum, Kanban)"},{text:"Up to speed with technical advancements of Android"},{text:"Wannabe functionalist"}],rewe:[{text:"Development of the native Android Client in Kotlin for the new REWE mobile App experience"},{text:"Unit- and Integration testing"}],nextmarkets:[{text:"Development of the native Android Client in Kotlin for the CFD Trading Platform nextmarkets"},{text:"Migration of existing Java code to Kotlin"},{text:"Unit- and Integration testing"},{text:"Supporting Design and Usability Concepts"}],rab:[{text:"Hands on development of Android applications"},{text:"Working on multiple projects independently as well as in agile teams"},{text:"Maintaining stability of projects"},{text:"Improving usability and design of existing apps"},{text:"Unit- and Integration testing"},{text:"Minor C++ programming of cross-platform utility tools"},{text:"Help identify and reduce crash rates of legacy applications and improving code quality"}],rabProjects:[{text:"WaipuTV"},{text:"Grenoble MNA (event-based mobile usage statistics application, scientific purpose, closed beta only)"},{text:"RheinEnergie Heimvorteil and its BELKAW derivate"},{text:"RheinEnergie OnlineService and its BELKAW and Stadtwerke Leichlingen derivatives"},{text:"Travian: Kingdoms"},{text:"INFOnline (Library)"},{text:"SportScheck (Legacy)"}],hottgenroth:[{text:"Unity programming support for a mobile app to acquire building data on a smartphone or tablet"},{text:"Creating 3D-Models with Blender"}],nurogames:[{text:"Cross-platform mobile game development in C++ with Cocos2D-X for iOS and Android"},{text:"Expanding the internal game engine"}],backlog:[{title:"Lunch Memory",url:"https://github.com/wengelef/lunchmemory",texts:["Google Flutter SDK Test Project"]},{title:"KleanMVP",url:"https://github.com/wengelef/KleanMVP",texts:["Functional Reactive MVP Architecture Sample in Kotlin"]},{title:"RxFileUtils",url:"https://github.com/wengelef/RxFileUtils",texts:["Reactive File Utilities for the Android File System"]},{title:"Builder",url:"https://github.com/wengelef/Builder",texts:["Java Annotation (@Builder) and AnnotationProcessor","Generates Builder classes for POJO’s"]}]}),methods:{currentlyClick:function(t){this.outlineCurrently=!this.outlineCurrently,this.expands=[!this.outlineContact,!this.outlineSkills,!this.outlineCurrently,!this.outlinePast,!this.outlineBacklog]},skillsClick:function(t){this.outlineSkills=!this.outlineSkills,this.expands=[!this.outlineContact,!this.outlineSkills,!this.outlineCurrently,!this.outlinePast,!this.outlineBacklog]},pastClick:function(t){this.outlinePast=!this.outlinePast,this.expands=[!this.outlineContact,!this.outlineSkills,!this.outlineCurrently,!this.outlinePast,!this.outlineBacklog]},backlogClick:function(t){this.outlineBacklog=!this.outlineBacklog,this.expands=[!this.outlineContact,!this.outlineSkills,!this.outlineCurrently,!this.outlinePast,!this.outlineBacklog]},contactClick:function(t){this.outlineContact=!this.outlineContact,this.expands=[!this.outlineContact,!this.outlineSkills,!this.outlineCurrently,!this.outlinePast,!this.outlineBacklog]}}},r,!1,function(t){i("hLxU")},"data-v-687cb816",null).exports,c={render:function(){var t=this.$createElement;return(this._self._c||t)("v-app",{attrs:{dark:""}},[this._v("\n    Soon\n")])},staticRenderFns:[]},d=i("VU/8")({name:"Private"},c,!1,null,null,null).exports;n.default.use(a.a);var u=new a.a({routes:[{path:"/",name:"CV",component:v},{path:"/private",name:"Private",component:d}]}),p=i("3EgV"),_=i.n(p),f=i("G1oA"),m=i.n(f),x=i("KzbO");i("s6ZO"),i("7zck");n.default.config.productionTip=!1,n.default.use(_.a),n.default.use(m.a),n.default.use(x.a),new n.default({el:"#app",router:u,components:{App:l},template:"<App/>"})},hLxU:function(t,e){},"lS+k":function(t,e,i){t.exports=i.p+"static/img/avatar.42b5240.jpg"},rLcc:function(t,e,i){t.exports=i.p+"static/img/avatar_xs.c17c05d.jpg"},s6ZO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.46f28dcd16ebd5c12148.js.map