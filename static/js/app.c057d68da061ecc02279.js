webpackJsonp([1],{

/***/ "7zck":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JEb1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'App',
  data() {
    return {
      bottomNav: 0
    };
  },

  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return 'teal';
        case 1:
          return 'indigo';
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-782fb668","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('v-app',{attrs:{"dark":""}},[_c('div',{directives:[{name:"responsive",rawName:"v-responsive.lg.xl",modifiers:{"lg":true,"xl":true}}]},[_c('v-parallax',{attrs:{"src":__webpack_require__("lS+k"),"height":"600"}},[_c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","fill-height":"","align-end":""}},[_c('v-card',{staticClass:"rounded-card pa-4",attrs:{"color":"rgba(0, 0, 0, 0.7)"}},[_c('div',[_c('div',{staticClass:"display-2"},[_vm._v("Florian Wengelewski")]),_vm._v(" "),_c('div',{staticClass:"display-1 pt-2"},[_vm._v("Software Engineer")])])])],1)],1)],1)],1),_vm._v(" "),_c('div',{directives:[{name:"responsive",rawName:"v-responsive.md.sm.xs",modifiers:{"md":true,"sm":true,"xs":true}}]},[_c('v-parallax',{attrs:{"src":__webpack_require__("rLcc"),"height":"400"}},[_c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","fill-height":"","align-end":""}},[_c('v-card',{staticClass:"rounded-card pa-3",attrs:{"color":"rgba(0, 0, 0, 0.7)"}},[_c('div',[_c('div',{staticClass:"display-1"},[_vm._v("Florian Wengelewski")]),_vm._v(" "),_c('div',{staticClass:"display-1"},[_vm._v("Software Engineer")])])])],1)],1)],1)],1),_vm._v(" "),_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("JEb1")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/CV.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CV = ({
  name: 'CV',
  data: () => ({
    outlineContact: true,
    outlineSkills: false,
    outlineCurrently: false,
    outlinePast: false,
    outlineBacklog: true,
    expands: [false, true, true, true, false],
    items: [{ title: 'Home', icon: 'dashboard' }, { title: 'About', icon: 'question_answer' }],
    right: null,
    skills: [{ text: 'Seasoned in using IntelliJ IDEA or Android Studio for Android Development, Android SDK’s and commonly used third-party-libraries' }, { text: 'Git version control system' }, { text: 'Understanding of the importance of code quality and continuous integration (Unit Testing, static code analysis, Jenkins CI, Fabric/Firebase)' }, { text: 'Broad development knowledge of Kotlin' }, { text: 'Enthusiastic about Material Design and Mobile User Experience' }, { text: 'MVVM and MVP architecture' }, { text: 'Clean Architecture and Design Patterns' }, { text: 'Functional Reactive Programming (RxJava)' }, { text: 'Implementing RESTful Clients is second nature (Retrofit 2, Volley)' }, { text: 'ORMs and NoSQL (Realm, GreenDAO, ActiveAndroid, SQL Delight)' }, { text: 'Dependency injection (Dagger 2, Koin)' }, { text: 'Active StackOverflow community member' }, { text: 'Working in agile environments (Scrum, Kanban)' }, { text: 'Up to speed with technical advancements of Android' }, { text: 'Wannabe functionalist' }],
    rewe: [{ text: 'Development of the native Android Client in Kotlin for the new REWE mobile App experience' }, { text: 'Maintenance of the legacy REWE Android App' }, { text: 'Creating mobile service endpoints' }, { text: 'Unit- and Integration testing' }],
    nextmarkets: [{ text: 'Development of the native Android Client in Kotlin for the CFD Trading Platform nextmarkets' }, { text: 'Migration of existing Java code to Kotlin' }, { text: 'Unit- and Integration testing' }, { text: 'Supporting Design and Usability Concepts' }],
    rab: [{ text: 'Hands on development of Android applications' }, { text: 'Working on multiple projects independently as well as in agile teams' }, { text: 'Maintaining stability of projects' }, { text: 'Improving usability and design of existing apps' }, { text: 'Unit- and Integration testing' }, { text: 'Minor C++ programming of cross-platform utility tools' }, { text: 'Help identify and reduce crash rates of legacy applications and improving code quality' }],
    rabProjects: [{ text: 'WaipuTV' }, { text: 'Grenoble MNA (event-based mobile usage statistics application, scientific purpose, closed beta only)' }, { text: 'RheinEnergie Heimvorteil and its BELKAW derivate' }, { text: 'RheinEnergie OnlineService and its BELKAW and Stadtwerke Leichlingen derivatives' }, { text: 'Travian: Kingdoms' }, { text: 'INFOnline (Library)' }, { text: 'SportScheck (Legacy)' }],
    hottgenroth: [{ text: 'Unity programming support for a mobile app to acquire building data on a smartphone or tablet' }, { text: 'Creating 3D-Models with Blender' }],
    nurogames: [{ text: 'Cross-platform mobile game development in C++ with Cocos2D-X for iOS and Android' }, { text: 'Expanding the internal game engine' }],
    backlog: [{
      title: 'Validate',
      url: 'https://github.com/wengelef/validate',
      texts: ['Validation DSL for Kotlin Objects']
    }, {
      title: 'Functional Android',
      url: 'https://github.com/wengelef/FunctionalAndroid',
      texts: ['Android Sample Application using Clean Architecture and FunctionalProgramming Paradigms']
    }, {
      title: 'Ktor mobile push gateway',
      url: 'https://github.com/wengelef/ktor_pushgw',
      texts: ['Push gateway for iOS and Android using Firebase']
    }, {
      title: 'RxFileUtils',
      url: 'https://github.com/wengelef/RxFileUtils',
      texts: ['Reactive File Utilities for the Android File System']
    }, {
      title: 'Builder',
      url: 'https://github.com/wengelef/Builder',
      texts: ['Java Annotation (@Builder) and AnnotationProcessor', 'Generates Builder classes for POJO’s']
    }]
  }),
  methods: {
    currentlyClick: function (event) {
      this.outlineCurrently = !this.outlineCurrently;
      this.expands = [!this.outlineContact, !this.outlineSkills, !this.outlineCurrently, !this.outlinePast, !this.outlineBacklog];
    },
    skillsClick: function (event) {
      this.outlineSkills = !this.outlineSkills;
      this.expands = [!this.outlineContact, !this.outlineSkills, !this.outlineCurrently, !this.outlinePast, !this.outlineBacklog];
    },
    pastClick: function (event) {
      this.outlinePast = !this.outlinePast;
      this.expands = [!this.outlineContact, !this.outlineSkills, !this.outlineCurrently, !this.outlinePast, !this.outlineBacklog];
    },
    backlogClick: function (event) {
      this.outlineBacklog = !this.outlineBacklog;
      this.expands = [!this.outlineContact, !this.outlineSkills, !this.outlineCurrently, !this.outlinePast, !this.outlineBacklog];
    },
    contactClick: function (event) {
      this.outlineContact = !this.outlineContact;
      this.expands = [!this.outlineContact, !this.outlineSkills, !this.outlineCurrently, !this.outlinePast, !this.outlineBacklog];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-eca41152","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/CV.vue
var CV_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"dark":""}},[_c('v-content',[_c('v-container',{attrs:{"fluid":""}},[_c('v-layout',[_c('v-flex',{attrs:{"text-xs-center":""}},[_c('v-btn',{attrs:{"round":"","outline":_vm.outlineContact,"color":"green"},on:{"click":_vm.contactClick}},[_vm._v("Contact")]),_vm._v(" "),_c('v-btn',{attrs:{"round":"","outline":_vm.outlineSkills,"color":"teal"},on:{"click":_vm.skillsClick}},[_vm._v("Skills")]),_vm._v(" "),_c('v-btn',{attrs:{"round":"","outline":_vm.outlineCurrently,"color":"red"},on:{"click":_vm.currentlyClick}},[_vm._v("In Progress")]),_vm._v(" "),_c('v-btn',{attrs:{"round":"","outline":_vm.outlinePast,"color":"orange"},on:{"click":_vm.pastClick}},[_vm._v("Done")]),_vm._v(" "),_c('v-btn',{attrs:{"round":"","outline":_vm.outlineBacklog,"color":"blue"},on:{"click":_vm.backlogClick}},[_vm._v("Backlog")])],1)],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","sm8":"","offset-sm2":""}},[_c('v-expansion-panel',{attrs:{"popout":"","expand":""},model:{value:(_vm.expands),callback:function ($$v) {_vm.expands=$$v},expression:"expands"}},[_c('v-expansion-panel-content',{attrs:{"readonly":""}},[_c('v-flex',{staticClass:"pa-4"},[_c('v-list',{attrs:{"two-line":""}},[_c('v-list-tile',[_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"white"}},[_vm._v("phone")])],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("+49 176 648 50 30 2")]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("Mobile")])],1)],1),_vm._v(" "),_c('v-divider',{attrs:{"inset":""}}),_vm._v(" "),_c('v-list-tile',[_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"white"}},[_vm._v("mail")])],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("wengelef@gmail.com")]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("Personal")])],1)],1),_vm._v(" "),_c('v-divider',{attrs:{"inset":""}}),_vm._v(" "),_c('v-list-tile',[_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"white"}},[_vm._v("location_on")])],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("Bertha-von-Suttner Straße 1")]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("53840 Troisdorf")])],1)],1)],1)],1)],1),_vm._v(" "),_c('v-expansion-panel-content',{attrs:{"readonly":""}},[_c('v-flex',{staticClass:"pa-4"},[_c('ul',_vm._l((_vm.skills),function(item){return _c('li',{key:item.text},[_vm._v("\n                  "+_vm._s(item.text)+"\n                ")])}),0)])],1),_vm._v(" "),_c('v-expansion-panel-content',{attrs:{"readonly":""}},[_c('div',{directives:[{name:"responsive",rawName:"v-responsive.lg.xl",modifiers:{"lg":true,"xl":true}}]},[_c('v-timeline',[_c('v-timeline-item',{attrs:{"fill-dot":"","right":"","color":"#1de9b6"}},[_c('font',{attrs:{"slot":"opposite","size":"4","color":"#1de9b6"},slot:"opposite"},[_vm._v("since April 2019")]),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('div',[_c('font',{attrs:{"size":"5","color":"#1de9b6"}},[_vm._v("REWE Digital GmbH")])],1),_vm._v(" "),_c('div',[_c('font',{attrs:{"size":"4","color":"#999999"}},[_vm._v("Software Engineer")])],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('ul',_vm._l((_vm.rewe),function(item){return _c('li',{key:item.text},[_vm._v("\n                          "+_vm._s(item.text)+"\n                        ")])}),0)])],1)],1)],1)],1),_vm._v(" "),_c('div',{directives:[{name:"responsive",rawName:"v-responsive.sm.xs.md",modifiers:{"sm":true,"xs":true,"md":true}}]},[_c('v-flex',{staticClass:"pa-4"},[_c('div',[_c('font',{attrs:{"size":"3","color":"#1de9b6"}},[_vm._v("since April 2019")])],1),_vm._v(" "),_c('div',[_c('font',{attrs:{"size":"5","color":"#1de9b6"}},[_vm._v("REWE Digital GmbH")])],1),_vm._v(" "),_c('div',[_c('font',{attrs:{"size":"4","color":"#999999"}},[_vm._v("Software Engineer")])],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('ul',_vm._l((_vm.rewe),function(item){return _c('li',{key:item.text},[_vm._v("\n                      "+_vm._s(item.text)+"\n                    ")])}),0)])],1)],1)]),_vm._v(" "),_c('v-expansion-panel-content',{attrs:{"readonly":""}},[_c('div',{directives:[{name:"responsive",rawName:"v-responsive.lg.xl",modifiers:{"lg":true,"xl":true}}]},[_c('v-timeline',[_c('v-timeline-item',{attrs:{"fill-dot":"","right":"","color":"#29B6F6"}},[_c('font',{attrs:{"slot":"opposite","size":"4","color":"#29B6F6"},slot:"opposite"},[_vm._v("January 2017 - April 2019")]),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('div',[_c('font',{attrs:{"size":"5","color":"#29B6F6"}},[_vm._v("nextmarkets GmbH")])],1),_vm._v(" "),_c('div',[_c('font',{attrs:{"size":"4","color":"#999999"}},[_vm._v("Software Engineer")])],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('ul',_vm._l((_vm.nextmarkets),function(item){return _c('li',{key:item.text},[_vm._v("\n                          "+_vm._s(item.text)+"\n                        ")])}),0)])],1)],1),_vm._v(" "),_c('v-timeline-item',{attrs:{"fill-dot":"","right":"","color":"#f44336"}},[_c('font',{attrs:{"slot":"opposite","size":"4","color":"#f44336"},slot:"opposite"},[_vm._v("January 2015 - January 2017")]),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('div',[_c('font',{attrs:{"size":"5","color":"#f44336"}},[_vm._v("RockAByte GmbH")])],1),_vm._v(" "),_c('div',[_c('font',{attrs:{"size":"4","color":"#999999"}},[_vm._v("Android Developer")])],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('ul',_vm._l((_vm.rab),function(item){return _c('li',{key:item.text},[_vm._v("\n                          "+_vm._s(item.text)+"\n                        ")])}),0),_vm._v(" "),_c('div',[_vm._v("Projects:")]),_vm._v(" "),_c('ul',_vm._l((_vm.rabProjects),function(item){return _c('li',{key:item.text},[_vm._v("\n                          "+_vm._s(item.text)+"\n                        ")])}),0)])],1)],1),_vm._v(" "),_c('v-timeline-item',{attrs:{"fill-dot":"","right":"","color":"#FFEE58"}},[_c('font',{attrs:{"slot":"opposite","size":"4","color":"#FFEE58"},slot:"opposite"},[_vm._v("September 2014 - December 2014")]),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('div',[_c('font',{attrs:{"size":"5","color":"#FFEE58"}},[_vm._v("Hottgenroth Software GmbH")])],1),_vm._v(" "),_c('div',[_c('font',{attrs:{"size":"4","color":"#999999"}},[_vm._v("Unity Development internship")])],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('ul',_vm._l((_vm.hottgenroth),function(item){return _c('li',{key:item.text},[_vm._v("\n                          "+_vm._s(item.text)+"\n                        ")])}),0)])],1)],1),_vm._v(" "),_c('v-timeline-item',{attrs:{"fill-dot":"","right":"","color":"#0097A7"}},[_c('font',{attrs:{"slot":"opposite","size":"4","color":"#0097A7"},slot:"opposite"},[_vm._v("March 2012 - September 2013")]),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('div',[_c('font',{attrs:{"size":"5","color":"#0097A7"}},[_vm._v("Nurogames GmbH")])],1),_vm._v(" "),_c('div',[_c('font',{attrs:{"size":"4","color":"#999999"}},[_vm._v("Android Developer")])],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('ul',_vm._l((_vm.nurogames),function(item){return _c('li',{key:item.text},[_vm._v("\n                          "+_vm._s(item.text)+"\n                        ")])}),0)])],1)],1)],1)],1),_vm._v(" "),_c('div',{directives:[{name:"responsive",rawName:"v-responsive.md.sm.xs",modifiers:{"md":true,"sm":true,"xs":true}}]},[_c('v-flex',{staticClass:"pa-4"},[_c('font',{attrs:{"size":"3","color":"#f44336"}},[_vm._v("January 2015 - January 2017")]),_vm._v(" "),_c('div',[_c('font',{attrs:{"size":"5","color":"#f44336"}},[_vm._v("RockAByte GmbH")])],1),_vm._v(" "),_c('div',[_c('font',{attrs:{"size":"4","color":"#999999"}},[_vm._v("Android Developer")])],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('ul',_vm._l((_vm.rab),function(item){return _c('li',{key:item.text},[_vm._v("\n                      "+_vm._s(item.text)+"\n                    ")])}),0),_vm._v(" "),_c('div',[_vm._v("Projects:")]),_vm._v(" "),_c('ul',_vm._l((_vm.rabProjects),function(item){return _c('li',{key:item.text},[_vm._v("\n                      "+_vm._s(item.text)+"\n                    ")])}),0)])],1),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('font',{attrs:{"size":"3","color":"#FFEE58"}},[_vm._v("September 2014 - December 2014")]),_vm._v(" "),_c('div',[_c('font',{attrs:{"size":"5","color":"#FFEE58"}},[_vm._v("Hottgenroth Software GmbH")])],1),_vm._v(" "),_c('div',[_c('font',{attrs:{"size":"4","color":"#999999"}},[_vm._v("Unity Development internship")])],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('ul',_vm._l((_vm.hottgenroth),function(item){return _c('li',{key:item.text},[_vm._v("\n                      "+_vm._s(item.text)+"\n                    ")])}),0)])],1),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('font',{attrs:{"size":"3","color":"#0097A7"}},[_vm._v("March 2012 - September 2013")]),_vm._v(" "),_c('div',[_c('font',{attrs:{"size":"5","color":"#0097A7"}},[_vm._v("Nurogames GmbH")])],1),_vm._v(" "),_c('div',[_c('font',{attrs:{"size":"4","color":"#999999"}},[_vm._v("Android Developer")])],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-flex',{staticClass:"pa-4"},[_c('ul',_vm._l((_vm.nurogames),function(item){return _c('li',{key:item.text},[_vm._v("\n                      "+_vm._s(item.text)+"\n                    ")])}),0)])],1)],1)]),_vm._v(" "),_c('v-expansion-panel-content',{attrs:{"readonly":""}},[_c('v-flex',{staticClass:"pa-4"},_vm._l((_vm.backlog),function(item){return _c('ul',{key:item.title},[_c('a',{attrs:{"href":item.url}},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('v-flex',{staticClass:"pl-4 pb-4 pt-2"},_vm._l((item.texts),function(text){return _c('li',{key:text},[_vm._v("\n                    "+_vm._s(text)+"\n                  ")])}),0)],1)}),0)],1)],1)],1)],1)],1)}
var CV_staticRenderFns = []
var CV_esExports = { render: CV_render, staticRenderFns: CV_staticRenderFns }
/* harmony default export */ var components_CV = (CV_esExports);
// CONCATENATED MODULE: ./src/components/CV.vue
function CV_injectStyle (ssrContext) {
  __webpack_require__("jPrd")
}
var CV_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var CV___vue_template_functional__ = false
/* styles */
var CV___vue_styles__ = CV_injectStyle
/* scopeId */
var CV___vue_scopeId__ = "data-v-eca41152"
/* moduleIdentifier (server only) */
var CV___vue_module_identifier__ = null
var CV_Component = CV_normalizeComponent(
  CV,
  components_CV,
  CV___vue_template_functional__,
  CV___vue_styles__,
  CV___vue_scopeId__,
  CV___vue_module_identifier__
)

/* harmony default export */ var src_components_CV = (CV_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js



//import Private from '@/components/Private'

vue_esm["default"].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  routes: [{ path: '*', name: 'catchAll', component: src_components_CV }, { path: '/', name: 'CV', component: src_components_CV }]
}));
// EXTERNAL MODULE: ./node_modules/vuetify/dist/vuetify.js
var vuetify = __webpack_require__("3EgV");
var vuetify_default = /*#__PURE__*/__webpack_require__.n(vuetify);

// EXTERNAL MODULE: ./node_modules/vue2-smooth-scroll/dist/vue-smooth-scroll.min.js
var vue_smooth_scroll_min = __webpack_require__("G1oA");
var vue_smooth_scroll_min_default = /*#__PURE__*/__webpack_require__.n(vue_smooth_scroll_min);

// EXTERNAL MODULE: ./node_modules/vue-responsive/src/index.js
var src = __webpack_require__("KzbO");

// EXTERNAL MODULE: ./node_modules/vuetify/src/stylus/app.styl
var app = __webpack_require__("s6ZO");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: ./node_modules/vuetify/dist/vuetify.min.css
var vuetify_min = __webpack_require__("7zck");
var vuetify_min_default = /*#__PURE__*/__webpack_require__.n(vuetify_min);

// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.









vue_esm["default"].config.productionTip = false;

vue_esm["default"].use(vuetify_default.a);
vue_esm["default"].use(vue_smooth_scroll_min_default.a);
vue_esm["default"].use(src["a" /* default */]);

/* eslint-disable no-new */
new vue_esm["default"]({
  el: '#app',
  router: router,
  components: { App: src_App },
  template: '<App/>'
});

/***/ }),

/***/ "jPrd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lS+k":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/avatar.42b5240.jpg";

/***/ }),

/***/ "rLcc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/avatar_xs.c17c05d.jpg";

/***/ }),

/***/ "s6ZO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.c057d68da061ecc02279.js.map