function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-config.module.ts":
  /*!**************************************!*\
    !*** ./src/app/app-config.module.ts ***!
    \**************************************/

  /*! exports provided: AppConfigModule */

  /***/
  function srcAppAppConfigModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfigModule", function () {
      return AppConfigModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modules/home/home.module */
    "./src/app/modules/home/home.module.ts");

    var AppConfigModule = function AppConfigModule() {
      _classCallCheck(this, AppConfigModule);
    };

    AppConfigModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppConfigModule
    });
    AppConfigModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppConfigModule_Factory(t) {
        return new (t || AppConfigModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppConfigModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]],
        exports: [_modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfigModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]],
          exports: [_modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'bioc';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_config_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-config.module */
    "./src/app/app-config.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _app_config_module__WEBPACK_IMPORTED_MODULE_4__["AppConfigModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _app_config_module__WEBPACK_IMPORTED_MODULE_4__["AppConfigModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _app_config_module__WEBPACK_IMPORTED_MODULE_4__["AppConfigModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/primary-header/primary-header.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/primary-header/primary-header.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PrimaryHeaderComponent */

  /***/
  function srcAppComponentsPrimaryHeaderPrimaryHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrimaryHeaderComponent", function () {
      return PrimaryHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/constants/products.const */
    "./src/app/constants/products.const.ts");
    /* harmony import */


    var src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/http/product-api.service */
    "./src/app/core/http/product-api.service.ts");
    /* harmony import */


    var src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/data.service */
    "./src/app/core/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/products", a1];
    };

    function PrimaryHeaderComponent_a_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, category_r3.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r3.categoryName);
      }
    }

    var PrimaryHeaderComponent =
    /*#__PURE__*/
    function () {
      function PrimaryHeaderComponent(productService, dataService) {
        _classCallCheck(this, PrimaryHeaderComponent);

        this.productService = productService;
        this.dataService = dataService;
      }

      _createClass(PrimaryHeaderComponent, [{
        key: "getCategoryList",
        value: function getCategoryList() {
          var _this = this;

          this.productService.getCategoryList().subscribe({
            next: function next(data) {
              _this.categoryList = data;
              _this.dataService.categoryList = data.splice(0, 2);

              _this.categoryList.push(src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__["DefaultCategory"]);
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategoryList();
        }
      }]);

      return PrimaryHeaderComponent;
    }();

    PrimaryHeaderComponent.ɵfac = function PrimaryHeaderComponent_Factory(t) {
      return new (t || PrimaryHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_2__["ProductApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
    };

    PrimaryHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrimaryHeaderComponent,
      selectors: [["app-primary-header"]],
      decls: 25,
      vars: 1,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "primary-header"], ["href", "/", 1, "brand-logo"], ["src", "../../../assets/BIOBRIX_LOGO.svg", "height", "80"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "category"], ["class", "category-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "category-item", 3, "routerLink"]],
      template: function PrimaryHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PrimaryHeaderComponent_a_18_Template, 3, 4, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Trade Enquiry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 13.1rem;\n}\n.primary-heading[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  background-color: #f1f1f1;\n}\n.primary-heading-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0;\n  text-align: center;\n}\n.primary-button[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  padding: 1.2rem 2.5rem;\n  border-radius: 5rem;\n  color: white;\n  margin-top: 1rem;\n  border: 0;\n  font-size: 1.4rem;\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.primary-header[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  background-color: white;\n}\n.primary-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #444444;\n}\n.primary-header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n}\n.primary-header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #444444;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  list-style: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.primary-header[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  min-width: 130px;\n  max-width: 150px;\n  text-align: center;\n  text-transform: capitalize;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 0.1rem solid #e9ecef;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  position: relative;\n  left: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL19jb21tb24uc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcmltYXJ5LWhlYWRlci9wcmltYXJ5LWhlYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvYXBwL2NvbXBvbmVudHMvcHJpbWFyeS1oZWFkZXIvcHJpbWFyeS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zaGl2YW05Ny9ub2RlUHJvamVjdHMvYmlvYnJpeC9iaW9jL2Zyb250ZW5kL2Jpb2Mvc3JjL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsZUFBQTtBQUlBLG1CQUFBO0FBR0Esa0JBQUE7QUNiQTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQ0lGO0FERkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDSUo7QURBQTtFQUNFLG9CQUFBO0FDR0Y7QURBQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0dGO0FERkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNJSjtBREFBO0VBQ0UsMkRBQUE7RUFDQSxtS0FBQTtFQUVBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZRHpCWTtFQzBCWixnQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0VGO0FEQUU7RUFDRSxpQkFBQTtBQ0VKO0FERUE7RUFDRTtJQUNFLFVBQUE7RUNDRjtFREVBO0lBQ0UsVUFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFO0lBQ0UsVUFBQTtFQ0RGO0VESUE7SUFDRSxVQUFBO0VDRkY7QUFDRjtBREtBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ0hGO0FETUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ0hGO0FDdEVBO0VBQ0UsaUJBQUE7RUFFQSx1QkFBQTtBRHdFRjtBQ3ZFRTtFQUNFLGVBQUE7RUFDQSxjSFBXO0FFZ0ZmO0FDdEVFO0VBQ0UsaUJBQUE7QUR3RUo7QUN2RUk7RUFDRSxjSGJTO0FFc0ZmO0FDckVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUR1RUo7QUNyRUk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUMzQkosbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FGbUdGO0FDdEVJO0VBQ0UsZUFBQTtBRHdFTjtBQ3JFSTtFQUNFLGtDQUFBO0FEdUVOO0FDbEVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FEcUVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmltYXJ5LWhlYWRlci9wcmltYXJ5LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LXdlYnNpdGUtY29sb3I6ICMwNzVhYzk7XG4kcHJpbWFyeS10ZXh0OiAjNDQ0NDQ0O1xuXG4kc2Vjb25kYXJ5LWJnOiAjZmNmY2ZjO1xuJHNlY29uZGFyeS1ib3JkZXI6ICNlOWVjZWY7XG5cbi8qIEluZm8gQmFzZWQgKi9cbiRjb2xvci1ub3RpZnk6ICNmZmMxMDc7XG4kY29sb3ItaW5mbzogIzM1YzdkZjtcblxuLyogUHJvcGVydHkgQmFzZWQgKi9cbiRjb2xvci13aGl0ZTogd2hpdGU7XG5cbi8qKiBHcmF5IFNoYWRlcyAqKi9cbiRncmV5LXNoYWRlLTE6ICNmMWYxZjE7XG4kZ3JleS1zaGFkZS0yOiAjZTRlNGU0O1xuJGdyZXktc2hhZGUtMzogI2ZlZmVmZTtcbiIsIi5sb2FkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiA5OTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTMuMXJlbTtcbn1cblxuLnByaW1hcnktaGVhZGluZyB7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgJi10ZXh0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4ucHJpbWFyeS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMDc1YWM5LCAjMzVjN2RmKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDFweCAycHggMXB4IHRyYW5zcGFyZW50IGluc2V0LFxuICAgIDAgMThweCAzMnB4IC0ycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICBwYWRkaW5nOiAxLjJyZW0gMi41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuXG4gIC5mYSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uZmFkZUluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cbiIsIi8qIEluZm8gQmFzZWQgKi9cbi8qIFByb3BlcnR5IEJhc2VkICovXG4vKiogR3JheSBTaGFkZXMgKiovXG4ubG9hZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogOTk7XG59XG4ubG9hZGVyIGltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEzLjFyZW07XG59XG5cbi5wcmltYXJ5LWhlYWRpbmcge1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG4ucHJpbWFyeS1oZWFkaW5nLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJpbWFyeS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMDc1YWM5LCAjMzVjN2RmKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDFweCAycHggMXB4IHRyYW5zcGFyZW50IGluc2V0LCAwIDE4cHggMzJweCAtMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSBpbnNldDtcbiAgcGFkZGluZzogMS4ycmVtIDIuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLnByaW1hcnktYnV0dG9uIC5mYSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZmFkZUluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLnByaW1hcnktaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnByaW1hcnktaGVhZGVyIC5uYXZiYXItYnJhbmQge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiAjNDQ0NDQ0O1xufVxuLnByaW1hcnktaGVhZGVyIC5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xufVxuLnByaW1hcnktaGVhZGVyIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBjb2xvcjogIzQ0NDQ0NDtcbn1cbi5wcmltYXJ5LWhlYWRlciAuY2F0ZWdvcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnByaW1hcnktaGVhZGVyIC5jYXRlZ29yeS1pdGVtIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ucHJpbWFyeS1oZWFkZXIgLmNhdGVnb3J5IHNwYW4ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucHJpbWFyeS1oZWFkZXIgLmNhdGVnb3J5IDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJpZ2h0OiAwLjFyZW0gc29saWQgI2U5ZWNlZjtcbn1cblxuLmJyYW5kLWxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDIwJTtcbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy9pbXBvcnRzXCI7XG5cbi5wcmltYXJ5LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICAvL2NvbG9yOiAkY29sb3Itd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQ7XG4gIH1cblxuICAubmF2LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgIC5uYXYtbGluayB7XG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dDtcbiAgICB9XG4gIH1cblxuICAuY2F0ZWdvcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJi1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgQGluY2x1ZGUgdHJ1bmNhdGU7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwLjFyZW0gc29saWQgJHNlY29uZGFyeS1ib3JkZXI7XG4gICAgfVxuICB9XG59XG5cbi5icmFuZC1sb2dvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyMCU7XG59XG4iLCJAbWl4aW4gdHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbikge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZsZXgtYWxpZ25tZW50KCRtYWluLWF4aXMsICRjcm9zcy1heGlzKSB7XG4gIGp1c3RpZnktY29udGVudDogJG1haW4tYXhpcztcbiAgYWxpZ24taXRlbXM6ICRjcm9zcy1heGlzO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimaryHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-primary-header',
          templateUrl: './primary-header.component.html',
          styleUrls: ['./primary-header.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_2__["ProductApiService"]
        }, {
          type: src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/secondary-header/secondary-header.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/secondary-header/secondary-header.component.ts ***!
    \***************************************************************************/

  /*! exports provided: SecondaryHeaderComponent */

  /***/
  function srcAppComponentsSecondaryHeaderSecondaryHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondaryHeaderComponent", function () {
      return SecondaryHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_constants_contact_info_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/constants/contact-info.const */
    "./src/app/constants/contact-info.const.ts");
    /* harmony import */


    var src_app_constants_header_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/constants/header.const */
    "./src/app/constants/header.const.ts");
    /* harmony import */


    var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/cart.service */
    "./src/app/core/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /** Constants */


    function SecondaryHeaderComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cartItemCount);
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    var SecondaryHeaderComponent =
    /*#__PURE__*/
    function () {
      function SecondaryHeaderComponent(cartService) {
        _classCallCheck(this, SecondaryHeaderComponent);

        this.cartService = cartService;
        this.contactInfo = src_app_constants_contact_info_const__WEBPACK_IMPORTED_MODULE_1__["ContactInfo"];
        this.cartConfig = src_app_constants_header_const__WEBPACK_IMPORTED_MODULE_2__["CartConfig"];
        this.cartItemCount = 0;
      }

      _createClass(SecondaryHeaderComponent, [{
        key: "setCartItems",
        value: function setCartItems() {
          var _this2 = this;

          this.cartItemCount = this.cartService.getCartItemsCount();
          this.cartService.CartUpdateSubject.subscribe(function (cart) {
            _this2.cartItemCount = cart.count;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setCartItems();
        }
      }]);

      return SecondaryHeaderComponent;
    }();

    SecondaryHeaderComponent.ɵfac = function SecondaryHeaderComponent_Factory(t) {
      return new (t || SecondaryHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]));
    };

    SecondaryHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SecondaryHeaderComponent,
      selectors: [["app-secondary-header"]],
      decls: 17,
      vars: 15,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "secondary-nav"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link"], ["aria-hidden", "true"], ["href", "#", 1, "nav-link", "email"], [1, "nav-link", "cart", 3, "routerLink"], [4, "ngIf"]],
      template: function SecondaryHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SecondaryHeaderComponent_span_15_Template, 2, 1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.contactInfo.phone.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contactInfo.phone.text, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.contactInfo.email.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contactInfo.email.text, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.cartConfig.link));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItemCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.cartConfig.icon);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 13.1rem;\n}\n.primary-heading[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  background-color: #f1f1f1;\n}\n.primary-heading-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0;\n  text-align: center;\n}\n.primary-button[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  padding: 1.2rem 2.5rem;\n  border-radius: 5rem;\n  color: white;\n  margin-top: 1rem;\n  border: 0;\n  font-size: 1.4rem;\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.secondary-nav[_ngcontent-%COMP%] {\n  padding: 0.1rem 1rem;\n  background-color: #075ac9;\n  font-size: 1.6rem;\n}\n.secondary-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding: 0 2rem;\n}\n.secondary-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.secondary-nav[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  position: relative;\n}\n.secondary-nav[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ffc107;\n  height: 1.6rem;\n  width: 1.6rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: white;\n  position: absolute;\n  left: 1.4rem;\n  top: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL19jb21tb24uc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWNvbmRhcnktaGVhZGVyL3NlY29uZGFyeS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zaGl2YW05Ny9ub2RlUHJvamVjdHMvYmlvYnJpeC9iaW9jL2Zyb250ZW5kL2Jpb2Mvc3JjL2FwcC9jb21wb25lbnRzL3NlY29uZGFyeS1oZWFkZXIvc2Vjb25kYXJ5LWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxlQUFBO0FBSUEsbUJBQUE7QUFHQSxrQkFBQTtBQ2JBO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0FDSUY7QURGRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNJSjtBREFBO0VBQ0Usb0JBQUE7QUNHRjtBREFBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FDR0Y7QURGRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0lKO0FEQUE7RUFDRSwyREFBQTtFQUNBLG1LQUFBO0VBRUEsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlEekJZO0VDMEJaLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDRUY7QURBRTtFQUNFLGlCQUFBO0FDRUo7QURFQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0VERUE7SUFDRSxVQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0U7SUFDRSxVQUFBO0VDREY7RURJQTtJQUNFLFVBQUE7RUNGRjtBQUNGO0FES0E7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0FDSEY7QURNQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDSEY7QUN2RUE7RUFDRSxvQkFBQTtFQUNBLHlCSEhzQjtFR0l0QixpQkFBQTtBRDBFRjtBQ3hFRTtFQUNFLGVBQUE7QUQwRUo7QUN6RUk7RUFDRSxZSEVRO0FFeUVkO0FDdkVFO0VBQ0Usa0JBQUE7QUR5RUo7QUN4RUk7RUFDRSxtQkhUUztFR1VULGNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZSGRRO0VHZVIsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRDBFTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2Vjb25kYXJ5LWhlYWRlci9zZWNvbmRhcnktaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktd2Vic2l0ZS1jb2xvcjogIzA3NWFjOTtcbiRwcmltYXJ5LXRleHQ6ICM0NDQ0NDQ7XG5cbiRzZWNvbmRhcnktYmc6ICNmY2ZjZmM7XG4kc2Vjb25kYXJ5LWJvcmRlcjogI2U5ZWNlZjtcblxuLyogSW5mbyBCYXNlZCAqL1xuJGNvbG9yLW5vdGlmeTogI2ZmYzEwNztcbiRjb2xvci1pbmZvOiAjMzVjN2RmO1xuXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuLyoqIEdyYXkgU2hhZGVzICoqL1xuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcbiRncmV5LXNoYWRlLTI6ICNlNGU0ZTQ7XG4kZ3JleS1zaGFkZS0zOiAjZmVmZWZlO1xuIiwiLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMy4xcmVtO1xufVxuXG4ucHJpbWFyeS1oZWFkaW5nIHtcbiAgcGFkZGluZzogMnJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAmLXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDJweCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsXG4gICAgMCAxOHB4IDMycHggLTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gIHBhZGRpbmc6IDEuMnJlbSAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG5cbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5mYWRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG59XG5cbi5hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuIiwiLyogSW5mbyBCYXNlZCAqL1xuLyogUHJvcGVydHkgQmFzZWQgKi9cbi8qKiBHcmF5IFNoYWRlcyAqKi9cbi5sb2FkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiA5OTtcbn1cbi5sb2FkZXIgaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTMuMXJlbTtcbn1cblxuLnByaW1hcnktaGVhZGluZyB7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cbi5wcmltYXJ5LWhlYWRpbmctdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDJweCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsIDAgMThweCAzMnB4IC0ycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICBwYWRkaW5nOiAxLjJyZW0gMi41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG4ucHJpbWFyeS1idXR0b24gLmZhIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5mYWRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG59XG5cbi5hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uc2Vjb25kYXJ5LW5hdiB7XG4gIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc1YWM5O1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cbi5zZWNvbmRhcnktbmF2IC5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cbi5zZWNvbmRhcnktbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2Vjb25kYXJ5LW5hdiAuY2FydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWNvbmRhcnktbmF2IC5jYXJ0IHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xuICBoZWlnaHQ6IDEuNnJlbTtcbiAgd2lkdGg6IDEuNnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMS40cmVtO1xuICB0b3A6IDAuNHJlbTtcbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy9pbXBvcnRzXCI7XG4uc2Vjb25kYXJ5LW5hdiB7XG4gIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS13ZWJzaXRlLWNvbG9yO1xuICBmb250LXNpemU6IDEuNnJlbTtcblxuICAubmF2LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICAubmF2LWxpbmsge1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICB9XG4gIH1cblxuICAuY2FydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHNwYW4ge1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLW5vdGlmeTtcbiAgICAgIGhlaWdodDogMS42cmVtO1xuICAgICAgd2lkdGg6IDEuNnJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDEuNHJlbTtcbiAgICAgIHRvcDogMC40cmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondaryHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-secondary-header',
          templateUrl: './secondary-header.component.html',
          styleUrls: ['./secondary-header.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/constants/api.const.ts":
  /*!****************************************!*\
    !*** ./src/app/constants/api.const.ts ***!
    \****************************************/

  /*! exports provided: CATEGORY_API, PRODUCT_API, HOMEPAGE_API */

  /***/
  function srcAppConstantsApiConstTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CATEGORY_API", function () {
      return CATEGORY_API;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PRODUCT_API", function () {
      return PRODUCT_API;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HOMEPAGE_API", function () {
      return HOMEPAGE_API;
    }); // Category List API


    var CATEGORY_API = 'category/category_list/'; // Product List API

    var PRODUCT_API = 'product/product_list/'; // Homepage API

    var HOMEPAGE_API = 'homepage/get_homepage';
    /***/
  },

  /***/
  "./src/app/constants/contact-info.const.ts":
  /*!*************************************************!*\
    !*** ./src/app/constants/contact-info.const.ts ***!
    \*************************************************/

  /*! exports provided: ContactInfo */

  /***/
  function srcAppConstantsContactInfoConstTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactInfo", function () {
      return ContactInfo;
    });

    var ContactInfo = {
      phone: {
        text: '+91 9988776655',
        icon: 'fa fa-phone'
      },
      email: {
        text: 'dummyemail@mail.com',
        icon: 'fa fa-envelope'
      }
    };
    /***/
  },

  /***/
  "./src/app/constants/header.const.ts":
  /*!*******************************************!*\
    !*** ./src/app/constants/header.const.ts ***!
    \*******************************************/

  /*! exports provided: CartConfig */

  /***/
  function srcAppConstantsHeaderConstTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartConfig", function () {
      return CartConfig;
    });

    var CartConfig = {
      icon: 'fa fa-shopping-cart',
      link: '/view-cart'
    };
    /***/
  },

  /***/
  "./src/app/constants/products.const.ts":
  /*!*********************************************!*\
    !*** ./src/app/constants/products.const.ts ***!
    \*********************************************/

  /*! exports provided: DefaultCategory */

  /***/
  function srcAppConstantsProductsConstTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultCategory", function () {
      return DefaultCategory;
    });

    var DefaultCategory = {
      categoryName: 'All',
      id: 'all'
    };
    /***/
  },

  /***/
  "./src/app/core/http/homepage-api.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/http/homepage-api.service.ts ***!
    \***************************************************/

  /*! exports provided: HomepageApiService */

  /***/
  function srcAppCoreHttpHomepageApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageApiService", function () {
      return HomepageApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/constants/api.const */
    "./src/app/constants/api.const.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./http-error-handler.service */
    "./src/app/core/http/http-error-handler.service.ts");
    /** Constants */


    var HomepageApiService =
    /*#__PURE__*/
    function () {
      function HomepageApiService(http, httpErrorHandlerService) {
        _classCallCheck(this, HomepageApiService);

        this.http = http;
        this.httpErrorHandlerService = httpErrorHandlerService;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL;
      }

      _createClass(HomepageApiService, [{
        key: "getHomePage",
        value: function getHomePage() {
          var url = "".concat(this.BASE_URL).concat(src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_2__["HOMEPAGE_API"]);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.httpErrorHandlerService.handleErr));
        }
      }]);

      return HomepageApiService;
    }();

    HomepageApiService.ɵfac = function HomepageApiService_Factory(t) {
      return new (t || HomepageApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"]));
    };

    HomepageApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HomepageApiService,
      factory: HomepageApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/http/http-error-handler.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/http/http-error-handler.service.ts ***!
    \*********************************************************/

  /*! exports provided: HttpErrorHandlerService */

  /***/
  function srcAppCoreHttpHttpErrorHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorHandlerService", function () {
      return HttpErrorHandlerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var HttpErrorHandlerService =
    /*#__PURE__*/
    function () {
      function HttpErrorHandlerService() {
        _classCallCheck(this, HttpErrorHandlerService);
      }

      _createClass(HttpErrorHandlerService, [{
        key: "handleErr",
        value: function handleErr(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }
      }]);

      return HttpErrorHandlerService;
    }();

    HttpErrorHandlerService.ɵfac = function HttpErrorHandlerService_Factory(t) {
      return new (t || HttpErrorHandlerService)();
    };

    HttpErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpErrorHandlerService,
      factory: HttpErrorHandlerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/http/product-api.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/http/product-api.service.ts ***!
    \**************************************************/

  /*! exports provided: ProductApiService */

  /***/
  function srcAppCoreHttpProductApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductApiService", function () {
      return ProductApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/constants/api.const */
    "./src/app/constants/api.const.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./http-error-handler.service */
    "./src/app/core/http/http-error-handler.service.ts");
    /* harmony import */


    var _services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/utility.service */
    "./src/app/core/services/utility.service.ts");
    /** Constants */


    var ProductApiService =
    /*#__PURE__*/
    function () {
      function ProductApiService(http, httpErrorHandlerService, utilityService) {
        _classCallCheck(this, ProductApiService);

        this.http = http;
        this.httpErrorHandlerService = httpErrorHandlerService;
        this.utilityService = utilityService;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL;
      }

      _createClass(ProductApiService, [{
        key: "getCategoryList",
        value: function getCategoryList() {
          var url = "".concat(this.BASE_URL).concat(src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_2__["CATEGORY_API"]);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.httpErrorHandlerService.handleErr));
        }
      }, {
        key: "getProductList",
        value: function getProductList(paramsData) {
          var params = '';

          if (paramsData) {
            params = this.utilityService.setQueryParams(paramsData);
          }

          var url = "".concat(this.BASE_URL).concat(src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_2__["PRODUCT_API"]).concat(params);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.httpErrorHandlerService.handleErr));
        }
      }]);

      return ProductApiService;
    }();

    ProductApiService.ɵfac = function ProductApiService_Factory(t) {
      return new (t || ProductApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]));
    };

    ProductApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductApiService,
      factory: ProductApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"]
        }, {
          type: _services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/cart.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/services/cart.service.ts ***!
    \***********************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppCoreServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CartService =
    /*#__PURE__*/
    function () {
      function CartService() {
        _classCallCheck(this, CartService);

        this.CartUpdateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(CartService, [{
        key: "addToCart",
        value: function addToCart(product) {
          var saved = this.saveCart(product);

          if (saved) {
            this.updateCartSubscriptions();
            return product;
          }

          return false;
        }
      }, {
        key: "removeFromCart",
        value: function removeFromCart(product) {
          var cartItems = this.getCartItems();
          var itemIndex = cartItems.findIndex(function (item) {
            return item.product_id === product.product_id;
          });

          if (itemIndex !== -1) {
            cartItems.splice(itemIndex, 1);
            this.updateSavedCart(cartItems);
            this.updateCartSubscriptions();
          }
        }
      }, {
        key: "updateCartSubscriptions",
        value: function updateCartSubscriptions() {
          var cartItems = this.getCartItems();

          if (cartItems) {
            this.CartUpdateSubject.next({
              count: cartItems.length,
              items: cartItems
            });
          } else {
            this.CartUpdateSubject.next({
              count: 0,
              items: null
            });
          }
        }
        /**
         * Return list of cart items;
         */

      }, {
        key: "getCartItems",
        value: function getCartItems() {
          var savedItems = localStorage.getItem('cart');

          try {
            if (savedItems) {
              return JSON.parse(savedItems);
            } else {
              return null;
            }
          } catch (err) {
            localStorage.removeItem('cart');
            return null;
          }
        }
        /**
         * Returns hashmap of cart items
         */

      }, {
        key: "getCartHashMap",
        value: function getCartHashMap() {
          var cartHashMap = {};
          var cartItems = this.getCartItems();

          if (!cartItems) {
            return {};
          }

          cartItems.forEach(function (item) {
            cartHashMap[item.product_id] = item;
          });
          return cartHashMap;
        }
        /**
         * Return total cart items
         */

      }, {
        key: "getCartItemsCount",
        value: function getCartItemsCount() {
          console.log('getting cart count');
          var cartItems = this.getCartItems();

          if (cartItems) {
            return cartItems.length;
          }
        }
        /**
         * Save cart to storage
         */

      }, {
        key: "saveCart",
        value: function saveCart(product) {
          var cartItems = this.getCartItems() || [];

          if (cartItems.length) {
            /** Find Product Index */
            var itemIndex = cartItems.findIndex(function (item) {
              return item.product_id === product.product_id;
            });
            /** Check if product quantity has been updated  */

            if (itemIndex === -1) {
              cartItems.push(product);
            } else if (product.quantity !== cartItems[itemIndex].quantity) {
              cartItems[itemIndex] = product;
            }
          } else {
            cartItems.push(product);
          }

          return this.updateSavedCart(cartItems);
        }
        /** Update Cart in local storage */

      }, {
        key: "updateSavedCart",
        value: function updateSavedCart(cartItems) {
          try {
            if (cartItems.length) {
              localStorage.removeItem('cart');
              localStorage.setItem('cart', JSON.stringify(cartItems));
            } else {
              localStorage.removeItem('cart');
            }

            return true;
          } catch (err) {
            localStorage.removeItem('cart');
            return false;
          }
        }
      }]);

      return CartService;
    }();

    CartService.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)();
    };

    CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/data.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/services/data.service.ts ***!
    \***********************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppCoreServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService() {
        _classCallCheck(this, DataService);
      }

      _createClass(DataService, [{
        key: "categoryList",
        set: function set(data) {
          this._categoryList = data;
        },
        get: function get() {
          return this._categoryList;
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)();
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/utility.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/services/utility.service.ts ***!
    \**************************************************/

  /*! exports provided: UtilityService */

  /***/
  function srcAppCoreServicesUtilityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
      return UtilityService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UtilityService =
    /*#__PURE__*/
    function () {
      function UtilityService() {
        _classCallCheck(this, UtilityService);

        this.showLoader = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
      }

      _createClass(UtilityService, [{
        key: "setQueryParams",
        value: function setQueryParams(paramsData) {
          var params = '';
          paramsData.forEach(function (data) {
            params = params + "?".concat(data.name, "=").concat(data.value);
          });
          return params;
        }
      }]);

      return UtilityService;
    }();

    UtilityService.ɵfac = function UtilityService_Factory(t) {
      return new (t || UtilityService)();
    };

    UtilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UtilityService,
      factory: UtilityService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/home.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/home/home.component.ts ***!
    \************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppModulesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core/services/utility.service */
    "./src/app/core/services/utility.service.ts");
    /* harmony import */


    var src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/secondary-header/secondary-header.component */
    "./src/app/components/secondary-header/secondary-header.component.ts");
    /* harmony import */


    var src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/primary-header/primary-header.component */
    "./src/app/components/primary-header/primary-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return {
        "loader": a0
      };
    };

    function HomeComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.isLoading));
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(utilityService, changeDetection) {
        _classCallCheck(this, HomeComponent);

        this.utilityService = utilityService;
        this.changeDetection = changeDetection;
        this.isLoading = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.utilityService.showLoader.subscribe({
            next: function next(status) {
              _this3.isLoading = status;

              _this3.changeDetection.detectChanges();
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 6,
      vars: 1,
      consts: [[1, "navbar-container"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["src", "assets/images/loader.gif", "alt", ""]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-secondary-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-primary-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 2, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      directives: [src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_2__["SecondaryHeaderComponent"], src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_3__["PrimaryHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      styles: [".navbar-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDtcbn1cbiIsIi5uYXZiYXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/home.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/modules/home/home.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppModulesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/modules/home/home.component.ts");
    /* harmony import */


    var src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/secondary-header/secondary-header.component */
    "./src/app/components/secondary-header/secondary-header.component.ts");
    /* harmony import */


    var src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/primary-header/primary-header.component */
    "./src/app/components/primary-header/primary-header.component.ts");
    /* harmony import */


    var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./homepage/homepage.component */
    "./src/app/modules/home/homepage/homepage.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/modules/home/products/products.component.ts");

    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      children: [{
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"]
      }, {
        path: 'view-cart',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | src-app-modules-cart-cart-module */
          "src-app-modules-cart-cart-module").then(__webpack_require__.bind(null,
          /*! src/app/modules/cart/cart.module */
          "./src/app/modules/cart/cart.module.ts")).then(function (m) {
            return m.CartModule;
          });
        }
      }, {
        path: 'products/:categoryId',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"]
      }]
    }];

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_4__["SecondaryHeaderComponent"], src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_5__["PrimaryHeaderComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_4__["SecondaryHeaderComponent"], src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_5__["PrimaryHeaderComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/homepage/homepage.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/home/homepage/homepage.component.ts ***!
    \*************************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppModulesHomeHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_http_homepage_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../core/http/homepage-api.service */
    "./src/app/core/http/homepage-api.service.ts");
    /* harmony import */


    var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/services/cart.service */
    "./src/app/core/services/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HomepageComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function HomepageComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r10 = ctx.$implicit;
        var i_r11 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r11 === 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", page_r10.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomepageComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomepageComponent_div_37_div_2_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_div_37_div_2_button_10_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var product_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.addToCart(product_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add To Cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return ["/view-cart"];
    };

    function HomepageComponent_div_37_div_2_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Go To Cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function HomepageComponent_div_37_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomepageComponent_div_37_div_2_button_10_Template, 3, 0, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomepageComponent_div_37_div_2_a_11_Template, 3, 2, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r15.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r15.product_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r15.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !product_r15.addedToCart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r15.addedToCart);
      }
    }

    function HomepageComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomepageComponent_div_37_div_2_Template, 12, 5, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recentProduct_r12 = ctx.$implicit;
        var i_r13 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r13 === 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", recentProduct_r12);
      }
    }

    function HomepageComponent_div_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomepageComponent_div_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var testimony_r21 = ctx.$implicit;
        var i_r22 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, i_r22 === 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", testimony_r21.testimony, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", testimony_r21.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](testimony_r21.customer_name);
      }
    }

    var HomepageComponent =
    /*#__PURE__*/
    function () {
      function HomepageComponent(homepageApiService, cartService) {
        _classCallCheck(this, HomepageComponent);

        this.homepageApiService = homepageApiService;
        this.cartService = cartService;
        this.recentProducts = [];
        this.dataloading = true;
      }
      /**
       * If Product are added to cart then mark "addedToCart" as true
       */


      _createClass(HomepageComponent, [{
        key: "syncProductsWithCart",
        value: function syncProductsWithCart(products) {
          console.log(products);
          var cartHashMap = this.cartService.getCartHashMap();
          console.log(cartHashMap);
          products.forEach(function (product) {
            if (cartHashMap[product.product_id]) {
              product.addedToCart = true;
            }
          });
          return products;
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          if (product.quantity) {
            product.quantity = product.quantity + 1;
            product.total = product.total + product.price;
          } else {
            product.quantity = 1;
            product.total = product.price;
          }

          var addedItem = this.cartService.addToCart(product);

          if (addedItem) {
            addedItem.addedToCart = true;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.dataloading = true;
          this.homepageApiService.getHomePage().subscribe(function (res) {
            _this4.homepage = res;

            if (res) {
              _this4.dataloading = false;

              var recents = _this4.syncProductsWithCart(res.recentProducts);

              for (var i = 0; i < recents.length; i = i + 4) {
                _this4.recentProducts.push(res.recentProducts.slice(i, i + 4));
              }
            }
          });
        }
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
      return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_homepage_api_service__WEBPACK_IMPORTED_MODULE_1__["HomepageApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]));
    };

    HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomepageComponent,
      selectors: [["app-homepage"]],
      decls: 63,
      vars: 6,
      consts: [[1, "main-container"], ["id", "pagerProducts fadeIn animated", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "loading-container carousel-item active", 4, "ngIf"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#pagerProducts", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#pagerProducts", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "product-type-section", "animated", "fadeIn"], [1, "section-header"], [1, "product-type"], [1, "product-type__item", "dry-skin"], [1, "product-type__item--item-hover"], [1, "product-type__item", "oily-skin"], [1, "product-type__item", "hair-care"], [1, "product-type__item", "sun-protection"], [1, "recent-products", "fadeIn", "animated"], [1, "section-header__heading"], [1, "section-header__underline"], ["id", "recentProducts", "data-ride", "carousel", "data-interval", "0", 1, "carousel", "slide"], ["href", "#recentProducts", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#recentProducts", "role", "button", "data-slide", "next", 1, "carousel-control-next"], [1, "testimonies", "fadeIn", "animated"], ["id", "testimonies", "data-ride", "carousel", "data-interval", "0", 1, "carousel", "slide"], ["href", "#testimonies", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#testimonies", "role", "button", "data-slide", "next", 1, "carousel-control-next"], [1, "loading-container", "carousel-item", "active"], ["role", "status", 1, "spinner-grow", "text-primary", 2, "width", "6rem", "height", "6rem"], [1, "carousel-item", 3, "ngClass"], ["alt", "First slide", 1, "d-block", "w-100", 3, "src"], [1, "recent-products__item", "w-100"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "shadow-0"], [1, "image"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-footer"], [1, "product-name"], [1, "product-price"], [1, "fa", "fa-inr"], ["type", "button", "class", "btn add-to-cart", 3, "click", 4, "ngIf"], ["class", "btn add-to-cart", 3, "routerLink", 4, "ngIf"], ["type", "button", 1, "btn", "add-to-cart", 3, "click"], [1, "fa", "fa-shopping-cart"], [1, "btn", "add-to-cart", 3, "routerLink"], [1, "testimonies__item"], [1, "testimony"], [1, "customer"], ["alt", "First slide", "width", "50", "height", "50", 3, "src"], [1, "customer__name"]],
      template: function HomepageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomepageComponent_div_3_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomepageComponent_div_4_Template, 2, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " ALL TYPE OF BODY CARE PRODUCTS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Dry skin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Oily skin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Hair care ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Sun protection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "RECENT PRODUCTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HomepageComponent_div_36_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HomepageComponent_div_37_Template, 3, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Testimonials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, HomepageComponent_div_53_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, HomepageComponent_div_54_Template, 8, 6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataloading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.homepage == null ? null : ctx.homepage.pagerProducts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataloading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recentProducts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataloading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.homepage == null ? null : ctx.homepage.testimonies);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 13.1rem;\n}\n.primary-heading[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  background-color: #f1f1f1;\n}\n.primary-heading-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0;\n  text-align: center;\n}\n.primary-button[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  padding: 1.2rem 2.5rem;\n  border-radius: 5rem;\n  color: white;\n  margin-top: 1rem;\n  border: 0;\n  font-size: 1.4rem;\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.section-header[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 35px;\n}\n.section-header__heading[_ngcontent-%COMP%] {\n  line-height: 36px;\n}\n.section-header__underline[_ngcontent-%COMP%] {\n  height: 3px;\n  background-color: black;\n  width: 10%;\n  padding: 0;\n  margin: 0 0 35px 0;\n}\n.product-type[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.product-type__item[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  background: black center;\n  background-size: cover;\n}\n.product-type__item[_ngcontent-%COMP%]:hover   .product-type__item--item-hover[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.product-type__item--item-hover[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  visibility: hidden;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: #ffffff;\n}\n.recent-products[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  padding-bottom: 20px;\n}\n.recent-products__item[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.recent-products[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .recent-products[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n  -webkit-filter: brightness(0);\n          filter: brightness(0);\n}\n.testimonies[_ngcontent-%COMP%] {\n  background-color: #ffb6c1;\n}\n.testimonies__item[_ngcontent-%COMP%] {\n  padding: 50px 100px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.testimonies__item[_ngcontent-%COMP%]   .testimony[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  min-height: 150px;\n  border: 1px solid white;\n  margin-bottom: 20px;\n  padding: 25px;\n}\n.testimonies__item[_ngcontent-%COMP%]   .customer[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border: 1px solid white;\n}\n.testimonies__item[_ngcontent-%COMP%]   .customer__name[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n.dry-skin[_ngcontent-%COMP%] {\n  background-image: url(\"https://biobrix-files.s3.ap-south-1.amazonaws.com/images/dry-skin-tips.png\");\n}\n.oily-skin[_ngcontent-%COMP%] {\n  background-image: url(\"https://biobrix-files.s3.ap-south-1.amazonaws.com/images/oily_face.webp\");\n}\n.hair-care[_ngcontent-%COMP%] {\n  background-image: url(\"https://biobrix-files.s3.ap-south-1.amazonaws.com/images/hair_care.jpg\");\n}\n.sun-protection[_ngcontent-%COMP%] {\n  background-image: url(\"https://biobrix-files.s3.ap-south-1.amazonaws.com/images/sun-protection.jpg\");\n}\n.card[_ngcontent-%COMP%] {\n  width: 25rem;\n  margin-bottom: 2rem;\n  position: relative;\n}\n.image[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: capitalize;\n  background-color: white;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.card-footer[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #00889f;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n}\n.card-footer[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-weight: bold;\n  font-size: 2rem;\n}\n.card-footer[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 0.4rem 1rem -1rem rgba(0, 0, 0, 0.2), 0 0.4rem 0.6rem 0.1rem rgba(0, 0, 0, 0.05), 0 0.1rem 0.2rem 0.1rem transparent inset, 0 1.8rem 3.2rem -0.2rem rgba(255, 255, 255, 0.1) inset;\n  padding: 1.2rem 2.5rem;\n  border-radius: 5rem;\n  color: white;\n  margin-top: 1rem;\n  border: 0;\n  font-size: 1.4rem;\n}\n.card-footer[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.product-type-section[_ngcontent-%COMP%] {\n  background: url('category_background.jpg') center;\n  background-size: cover;\n}\n.loading-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 38vw;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL19jb21tb24uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc2hpdmFtOTcvbm9kZVByb2plY3RzL2Jpb2JyaXgvYmlvYy9mcm9udGVuZC9iaW9jL3NyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc2hpdmFtOTcvbm9kZVByb2plY3RzL2Jpb2JyaXgvYmlvYy9mcm9udGVuZC9iaW9jL3NyYy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLGVBQUE7QUFJQSxtQkFBQTtBQUdBLGtCQUFBO0FDYkE7RUFDRSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7QUNJRjtBREZFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0lKO0FEQUE7RUFDRSxvQkFBQTtBQ0dGO0FEQUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNHRjtBREZFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSUo7QURBQTtFQUNFLDJEQUFBO0VBQ0EsbUtBQUE7RUFFQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUR6Qlk7RUMwQlosZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNFRjtBREFFO0VBQ0UsaUJBQUE7QUNFSjtBREVBO0VBQ0U7SUFDRSxVQUFBO0VDQ0Y7RURFQTtJQUNFLFVBQUE7RUNBRjtBQUNGO0FER0E7RUFDRTtJQUNFLFVBQUE7RUNERjtFRElBO0lBQ0UsVUFBQTtFQ0ZGO0FBQ0Y7QURLQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUNIRjtBRE1BO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUNIRjtBQ3RFQTtFQUNFLGlCQUFBO0VDSUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJESmM7RUNJZCw2QkRKYztVQ0lkLHNCREpjO0VDUWQsd0JEUHdCO1VDT3hCLHVCRFB3QjtFQ1F4Qix5QkRSZ0M7VUNRaEMsbUJEUmdDO0VBQ2hDLGVBQUE7QUQyRUY7QUN6RUU7RUFDRSxpQkFBQTtBRDJFSjtBQ3hFRTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUQwRUo7QUN0RUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQ2hCQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkRnQmM7RUNoQmQsNkJEZ0JjO1VDaEJkLG1CRGdCYztFQ1pkLDZCRGF3QjtFQ1p4Qix5QkRZc0M7VUNadEMsbUJEWXNDO0FEMkV4QztBQ3pFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBRDJFSjtBQ3hFTTtFQUNFLG1CQUFBO0FEMEVSO0FDdEVJO0VDaENGLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCRGdDa0I7RUNoQ2xCLDZCRGdDa0I7VUNoQ2xCLG1CRGdDa0I7RUM1QmxCLHdCRDZCNEI7VUM3QjVCLHVCRDZCNEI7RUM1QjVCLHlCRDRCb0M7VUM1QnBDLG1CRDRCb0M7RUFDaEMsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBRDBFTjtBQ3JFQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUR3RUY7QUN0RUU7RUFDRSxlQUFBO0VDakRGLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCRGlEZ0I7RUNqRGhCLDZCRGlEZ0I7VUNqRGhCLG1CRGlEZ0I7RUM3Q2hCLDZCRDhDMEI7RUM3QzFCLHlCRDZDd0M7VUM3Q3hDLG1CRDZDd0M7QUQwRTFDO0FDdkVFO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBRHlFSjtBQ25FQTtFQUNFLHlCQUFBO0FEc0VGO0FDcEVFO0VBQ0UsbUJBQUE7RUNqRUYsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJEaUVnQjtFQ2pFaEIsNkJEaUVnQjtVQ2pFaEIsc0JEaUVnQjtFQzdEaEIsd0JEOEQwQjtVQzlEMUIsdUJEOEQwQjtFQzdEMUIseUJENkRrQztVQzdEbEMsbUJENkRrQztBRHdFcEM7QUN0RUk7RUNyRUYsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJEcUVrQjtFQ3JFbEIsNkJEcUVrQjtVQ3JFbEIsbUJEcUVrQjtFQ2pFbEIsd0JEa0U0QjtVQ2xFNUIsdUJEa0U0QjtFQ2pFNUIseUJEaUVvQztVQ2pFcEMsbUJEaUVvQztFQUNoQyxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FEMEVOO0FDdkVJO0VDOUVGLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCRDhFa0I7RUM5RWxCLDZCRDhFa0I7VUM5RWxCLG1CRDhFa0I7RUMxRWxCLHdCRDJFNEI7VUMzRTVCLHVCRDJFNEI7RUMxRTVCLHlCRDBFb0M7VUMxRXBDLG1CRDBFb0M7RUFDaEMsdUJBQUE7QUQyRU47QUN6RU07RUFDRSxlQUFBO0FEMkVSO0FDcEVBO0VBQ0UsbUdBQUE7QUR1RUY7QUNwRUE7RUFDRSxnR0FBQTtBRHVFRjtBQ3BFQTtFQUNFLCtGQUFBO0FEdUVGO0FDcEVBO0VBQ0Usb0dBQUE7QUR1RUY7QUNwRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRHVFRjtBQ3BFQTtFQUNFLGtCQUFBO0FEdUVGO0FDcEVBLHFCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJIckhZO0VHc0haLGdCQUFBO0VBQ0EsbUJBQUE7QUR1RUY7QUNyRUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRHVFSjtBQ3BFRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEc0VKO0FDbkVFO0VBQ0UsMkRBQUE7RUFDQSxnTUFBQTtFQUVBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZSDNJVTtFRzRJVixnQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBRG9FSjtBQ2xFSTtFQUNFLGlCQUFBO0FEb0VOO0FDL0RBO0VBQ0UsaURBQUE7RUFDQSxzQkFBQTtBRGtFRjtBQzlEQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VDbEtBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCRGtLYztFQ2xLZCw2QkRrS2M7VUNsS2QsbUJEa0tjO0VDOUpkLHdCRCtKd0I7VUMvSnhCLHVCRCtKd0I7RUM5SnhCLHlCRDhKZ0M7VUM5SmhDLG1CRDhKZ0M7QURtRWxDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktd2Vic2l0ZS1jb2xvcjogIzA3NWFjOTtcbiRwcmltYXJ5LXRleHQ6ICM0NDQ0NDQ7XG5cbiRzZWNvbmRhcnktYmc6ICNmY2ZjZmM7XG4kc2Vjb25kYXJ5LWJvcmRlcjogI2U5ZWNlZjtcblxuLyogSW5mbyBCYXNlZCAqL1xuJGNvbG9yLW5vdGlmeTogI2ZmYzEwNztcbiRjb2xvci1pbmZvOiAjMzVjN2RmO1xuXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuLyoqIEdyYXkgU2hhZGVzICoqL1xuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcbiRncmV5LXNoYWRlLTI6ICNlNGU0ZTQ7XG4kZ3JleS1zaGFkZS0zOiAjZmVmZWZlO1xuIiwiLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMy4xcmVtO1xufVxuXG4ucHJpbWFyeS1oZWFkaW5nIHtcbiAgcGFkZGluZzogMnJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAmLXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDJweCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsXG4gICAgMCAxOHB4IDMycHggLTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gIHBhZGRpbmc6IDEuMnJlbSAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG5cbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5mYWRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG59XG5cbi5hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuIiwiLyogSW5mbyBCYXNlZCAqL1xuLyogUHJvcGVydHkgQmFzZWQgKi9cbi8qKiBHcmF5IFNoYWRlcyAqKi9cbi5sb2FkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiA5OTtcbn1cbi5sb2FkZXIgaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTMuMXJlbTtcbn1cblxuLnByaW1hcnktaGVhZGluZyB7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cbi5wcmltYXJ5LWhlYWRpbmctdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDJweCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsIDAgMThweCAzMnB4IC0ycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICBwYWRkaW5nOiAxLjJyZW0gMi41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG4ucHJpbWFyeS1idXR0b24gLmZhIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5mYWRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG59XG5cbi5hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbi5zZWN0aW9uLWhlYWRlcl9faGVhZGluZyB7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xufVxuLnNlY3Rpb24taGVhZGVyX191bmRlcmxpbmUge1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAwIDM1cHggMDtcbn1cblxuLnByb2R1Y3QtdHlwZSB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9kdWN0LXR5cGVfX2l0ZW0ge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5wcm9kdWN0LXR5cGVfX2l0ZW06aG92ZXIgLnByb2R1Y3QtdHlwZV9faXRlbS0taXRlbS1ob3ZlciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ucHJvZHVjdC10eXBlX19pdGVtLS1pdGVtLWhvdmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5yZWNlbnQtcHJvZHVjdHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5yZWNlbnQtcHJvZHVjdHNfX2l0ZW0ge1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlY2VudC1wcm9kdWN0cyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LCAucmVjZW50LXByb2R1Y3RzIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCk7XG59XG5cbi50ZXN0aW1vbmllcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI2YzE7XG59XG4udGVzdGltb25pZXNfX2l0ZW0ge1xuICBwYWRkaW5nOiA1MHB4IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50ZXN0aW1vbmllc19faXRlbSAudGVzdGltb255IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMjVweDtcbn1cbi50ZXN0aW1vbmllc19faXRlbSAuY3VzdG9tZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG4udGVzdGltb25pZXNfX2l0ZW0gLmN1c3RvbWVyX19uYW1lIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4uZHJ5LXNraW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2Jpb2JyaXgtZmlsZXMuczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltYWdlcy9kcnktc2tpbi10aXBzLnBuZ1wiKTtcbn1cblxuLm9pbHktc2tpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYmlvYnJpeC1maWxlcy5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1hZ2VzL29pbHlfZmFjZS53ZWJwXCIpO1xufVxuXG4uaGFpci1jYXJlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9iaW9icml4LWZpbGVzLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWFnZXMvaGFpcl9jYXJlLmpwZ1wiKTtcbn1cblxuLnN1bi1wcm90ZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9iaW9icml4LWZpbGVzLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWFnZXMvc3VuLXByb3RlY3Rpb24uanBnXCIpO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAyNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qKiBQcm9kdWN0IERldGFpbHMgKi9cbi5jYXJkLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmNhcmQtZm9vdGVyIC5wcm9kdWN0LW5hbWUge1xuICBjb2xvcjogIzAwODg5ZjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG4uY2FyZC1mb290ZXIgLnByb2R1Y3QtcHJpY2Uge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLmNhcmQtZm9vdGVyIC5hZGQtdG8tY2FydCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICBib3gtc2hhZG93OiAwIDAuNHJlbSAxcmVtIC0xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwLjRyZW0gMC42cmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDAuMXJlbSAwLjJyZW0gMC4xcmVtIHRyYW5zcGFyZW50IGluc2V0LCAwIDEuOHJlbSAzLjJyZW0gLTAuMnJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gIHBhZGRpbmc6IDEuMnJlbSAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5jYXJkLWZvb3RlciAuYWRkLXRvLWNhcnQgLmZhIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5wcm9kdWN0LXR5cGUtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9jYXRlZ29yeV9iYWNrZ3JvdW5kLmpwZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAzOHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy9pbXBvcnRzXCI7XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBAaW5jbHVkZSBmbGV4KGNvbHVtbik7XG4gIEBpbmNsdWRlIGZsZXgtYWxpZ25tZW50KGNlbnRlciwgY2VudGVyKTtcbiAgZm9udC1zaXplOiAzNXB4O1xuXG4gICZfX2hlYWRpbmcge1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICB9XG5cbiAgJl9fdW5kZXJsaW5lIHtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMTAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIDAgMzVweCAwO1xuICB9XG59XG5cbi5wcm9kdWN0LXR5cGUge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgQGluY2x1ZGUgZmxleChyb3cpO1xuICBAaW5jbHVkZSBmbGV4LWFsaWdubWVudChzcGFjZS1hcm91bmQsIGNlbnRlcik7XG5cbiAgJl9faXRlbSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZDogYmxhY2sgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5wcm9kdWN0LXR5cGVfX2l0ZW0tLWl0ZW0taG92ZXIge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtLWl0ZW0taG92ZXIge1xuICAgICAgQGluY2x1ZGUgZmxleChyb3cpO1xuICAgICAgQGluY2x1ZGUgZmxleC1hbGlnbm1lbnQoY2VudGVyLCBjZW50ZXIpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG5cbi5yZWNlbnQtcHJvZHVjdHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcblxuICAmX19pdGVtIHtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgQGluY2x1ZGUgZmxleChyb3cpO1xuICAgIEBpbmNsdWRlIGZsZXgtYWxpZ25tZW50KHNwYWNlLWFyb3VuZCwgY2VudGVyKTtcbiAgfVxuXG4gIC5jYXJvdXNlbC1jb250cm9sLXByZXYsIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKTtcbiAgfVxuXG5cbn1cblxuLnRlc3RpbW9uaWVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjZjMTtcblxuICAmX19pdGVtIHtcbiAgICBwYWRkaW5nOiA1MHB4IDEwMHB4O1xuICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uKTtcbiAgICBAaW5jbHVkZSBmbGV4LWFsaWdubWVudChjZW50ZXIsIGNlbnRlcik7XG5cbiAgICAudGVzdGltb255IHtcbiAgICAgIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgICAgIEBpbmNsdWRlIGZsZXgtYWxpZ25tZW50KGNlbnRlciwgY2VudGVyKTtcbiAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgcGFkZGluZzogMjVweDtcbiAgICB9XG5cbiAgICAuY3VzdG9tZXIge1xuICAgICAgQGluY2x1ZGUgZmxleChyb3cpO1xuICAgICAgQGluY2x1ZGUgZmxleC1hbGlnbm1lbnQoY2VudGVyLCBjZW50ZXIpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cbiAgICAgICZfX25hbWUge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLmRyeS1za2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9iaW9icml4LWZpbGVzLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWFnZXMvZHJ5LXNraW4tdGlwcy5wbmdcIik7XG59XG5cbi5vaWx5LXNraW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2Jpb2JyaXgtZmlsZXMuczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltYWdlcy9vaWx5X2ZhY2Uud2VicFwiKTtcbn1cblxuLmhhaXItY2FyZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYmlvYnJpeC1maWxlcy5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1hZ2VzL2hhaXJfY2FyZS5qcGdcIik7XG59XG5cbi5zdW4tcHJvdGVjdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYmlvYnJpeC1maWxlcy5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1hZ2VzL3N1bi1wcm90ZWN0aW9uLmpwZ1wiKTtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiogUHJvZHVjdCBEZXRhaWxzICovXG4uY2FyZC1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgLnByb2R1Y3QtbmFtZSB7XG4gICAgY29sb3I6ICMwMDg4OWY7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuXG4gIC5wcm9kdWN0LXByaWNlIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIC5hZGQtdG8tY2FydCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gICAgYm94LXNoYWRvdzogMCAwLjRyZW0gMXJlbSAtMXJlbSByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMC40cmVtIDAuNnJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgICAwIDAuMXJlbSAwLjJyZW0gMC4xcmVtIHRyYW5zcGFyZW50IGluc2V0LCAwIDEuOHJlbSAzLjJyZW0gLTAuMnJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gICAgcGFkZGluZzogMS4ycmVtIDIuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG5cbiAgICAuZmEge1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgfVxuICB9XG59XG5cbi5wcm9kdWN0LXR5cGUtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9jYXRlZ29yeV9iYWNrZ3JvdW5kLmpwZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDM4dnc7XG4gIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgQGluY2x1ZGUgZmxleC1hbGlnbm1lbnQoY2VudGVyLCBjZW50ZXIpO1xufVxuIiwiQG1peGluIHRydW5jYXRlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb24pIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmbGV4LWFsaWdubWVudCgkbWFpbi1heGlzLCAkY3Jvc3MtYXhpcykge1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRtYWluLWF4aXM7XG4gIGFsaWduLWl0ZW1zOiAkY3Jvc3MtYXhpcztcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-homepage',
          templateUrl: './homepage.component.html',
          styleUrls: ['./homepage.component.scss']
        }]
      }], function () {
        return [{
          type: _core_http_homepage_api_service__WEBPACK_IMPORTED_MODULE_1__["HomepageApiService"]
        }, {
          type: _core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/products/products.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/home/products/products.component.ts ***!
    \*************************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppModulesHomeProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/constants/products.const */
    "./src/app/constants/products.const.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/data.service */
    "./src/app/core/services/data.service.ts");
    /* harmony import */


    var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/cart.service */
    "./src/app/core/services/cart.service.ts");
    /* harmony import */


    var src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/http/product-api.service */
    "./src/app/core/http/product-api.service.ts");
    /* harmony import */


    var src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/services/utility.service */
    "./src/app/core/services/utility.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function ProductsComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_li_10_Template_li_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var category_r25 = ctx.$implicit;
          var i_r26 = ctx.index;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.onCategoryButtonClick(category_r25.id, i_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r25 = ctx.$implicit;
        var i_r26 = ctx.index;

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r26 === ctx_r23.selectedCategoryIndex));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r25.categoryName, " ");
      }
    }

    function ProductsComponent_div_12_div_4_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_div_12_div_4_button_10_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var product_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r34.addToCart(product_r31);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add To Cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return ["/view-cart"];
    };

    function ProductsComponent_div_12_div_4_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Go To Cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function ProductsComponent_div_12_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductsComponent_div_12_div_4_button_10_Template, 3, 0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductsComponent_div_12_div_4_a_11_Template, 3, 2, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r31.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r31.product_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r31.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !product_r31.addedToCart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r31.addedToCart);
      }
    }

    function ProductsComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsComponent_div_12_div_4_Template, 12, 5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r29.category_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r29.product_list);
      }
    }

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent(route, router, dataService, cartService, productService, utilityService) {
        _classCallCheck(this, ProductsComponent);

        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.cartService = cartService;
        this.productService = productService;
        this.utilityService = utilityService;
      }

      _createClass(ProductsComponent, [{
        key: "getCategoryList",
        value: function getCategoryList() {
          var _this5 = this;

          this.productService.getCategoryList().subscribe({
            next: function next(data) {
              _this5.categoryList = data;
              _this5.dataService.categoryList = data;

              _this5.categoryList.unshift(src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__["DefaultCategory"]);

              _this5.setActiveCategory();
            }
          });
        }
      }, {
        key: "getProductList",
        value: function getProductList(categoryId) {
          var _this6 = this;

          var params;

          if (categoryId && categoryId !== src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__["DefaultCategory"].id) {
            params = [{
              name: 'categoryId',
              value: categoryId
            }];
          }

          this.utilityService.showLoader.next(true);
          this.productService.getProductList(params).subscribe({
            next: function next(data) {
              _this6.productList = Array.isArray(data) ? data : [data];
              _this6.productList = _this6.syncProductsWithCart(_this6.productList);

              _this6.utilityService.showLoader.next(false);
            }
          });
        }
        /**
         * If Product are added to cart then mark "addedToCart" as true
         */

      }, {
        key: "syncProductsWithCart",
        value: function syncProductsWithCart(categoryWiseProducts) {
          console.log(categoryWiseProducts);
          var cartHashMap = this.cartService.getCartHashMap();
          console.log(cartHashMap);
          categoryWiseProducts.forEach(function (category) {
            category.product_list.forEach(function (product) {
              if (cartHashMap[product.product_id]) {
                product.addedToCart = true;
              }
            });
          });
          return this.productList;
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          if (product.quantity) {
            product.quantity = product.quantity + 1;
            product.total = product.total + product.price;
          } else {
            product.quantity = 1;
            product.total = product.price;
          }

          var addedItem = this.cartService.addToCart(product);

          if (addedItem) {
            addedItem.addedToCart = true;
          }
        }
        /** Set Active category by finding its index in category list */

      }, {
        key: "setActiveCategory",
        value: function setActiveCategory() {
          var _this7 = this;

          if (!this.categoryList || !this.categoryList.length) {
            return;
          }

          this.selectedCategoryIndex = this.categoryList.findIndex(function (category) {
            return category.id === _this7.categoryId;
          });
        }
        /**
         * @param categoryId
         * On Category click just change the route and everything will be handled itself on activated route subscription
         */

      }, {
        key: "onCategoryButtonClick",
        value: function onCategoryButtonClick(categoryId, selectedCategoryIndex) {
          this.selectedCategoryIndex = selectedCategoryIndex;
          this.router.navigate(['/products', categoryId]);
        }
      }, {
        key: "handleParamsChange",
        value: function handleParamsChange(params) {
          if (!params.categoryId) {
            return;
          }

          this.categoryId = params.categoryId;
          this.getProductList(params.categoryId);
          this.setActiveCategory();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.getCategoryList();
          this.route.params.subscribe(function (params) {
            _this8.handleParamsChange(params);
          });
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_5__["ProductApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 13,
      vars: 2,
      consts: [[1, "main-container"], [1, "primary-heading"], [1, "primary-heading-text"], [1, "product-filter"], [1, "heading"], ["role", "button", 3, "click", 4, "ngFor", "ngForOf"], [1, "product-list"], ["class", "row category", 4, "ngFor", "ngForOf"], ["role", "button", 3, "click"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"], [1, "row", "category"], [1, "col-md-12", "name"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "shadow-0"], [1, "image"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-footer"], [1, "product-name"], [1, "product-price"], [1, "fa", "fa-inr"], ["type", "button", "class", "btn primary-button", 3, "click", 4, "ngIf"], ["class", "btn primary-button", 3, "routerLink", 4, "ngIf"], ["type", "button", 1, "btn", "primary-button", 3, "click"], [1, "fa", "fa-shopping-cart"], [1, "btn", "primary-button", 3, "routerLink"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PRODUCTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductsComponent_li_10_Template, 3, 4, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductsComponent_div_12_Template, 5, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 13.1rem;\n}\n.primary-heading[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  background-color: #f1f1f1;\n}\n.primary-heading-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0;\n  text-align: center;\n}\n.primary-button[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  padding: 1.2rem 2.5rem;\n  border-radius: 5rem;\n  color: white;\n  margin-top: 1rem;\n  border: 0;\n  font-size: 1.4rem;\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.product-filter[_ngcontent-%COMP%] {\n  position: fixed;\n  background: #fcfcfc;\n  height: 100vh;\n  width: 25rem;\n  overflow: auto;\n  padding: 2rem;\n  \n}\n.product-filter[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  padding: 1.8rem 3rem;\n  background-color: #075ac9;\n  color: white;\n  border-radius: 6rem;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 1.2rem;\n  margin-top: 2rem;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #35c7df;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1rem 3rem;\n  border-bottom: 0.1rem dashed #e4e4e4;\n  list-style: none;\n  cursor: pointer;\n  position: relative;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0.7rem;\n  height: 0.7rem;\n  border-radius: 100%;\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 2rem;\n  background-color: #35c7df;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  border: 0;\n}\n.product-filter[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #444444;\n  text-transform: capitalize;\n}\n.product-list[_ngcontent-%COMP%] {\n  width: calc(100% - 25rem);\n  margin-left: 25rem;\n  padding: 2rem;\n  \n  \n}\n.product-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 25rem;\n  margin-bottom: 2rem;\n  position: relative;\n}\n.product-list[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  position: relative;\n}\n.product-list[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  margin-bottom: 1.5rem;\n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.product-list[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: capitalize;\n  background-color: white;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.product-list[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #00c5e6;\n  margin-top: 1rem;\n  font-size: 1.6rem;\n}\n.product-list[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL19jb21tb24uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc2hpdmFtOTcvbm9kZVByb2plY3RzL2Jpb2JyaXgvYmlvYy9mcm9udGVuZC9iaW9jL3NyYy9hcHAvbW9kdWxlcy9ob21lL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLGVBQUE7QUFJQSxtQkFBQTtBQUdBLGtCQUFBO0FDYkE7RUFDRSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7QUNJRjtBREZFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0lKO0FEQUE7RUFDRSxvQkFBQTtBQ0dGO0FEQUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNHRjtBREZFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSUo7QURBQTtFQUNFLDJEQUFBO0VBQ0EsbUtBQUE7RUFFQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUR6Qlk7RUMwQlosZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNFRjtBREFFO0VBQ0UsaUJBQUE7QUNFSjtBREVBO0VBQ0U7SUFDRSxVQUFBO0VDQ0Y7RURFQTtJQUNFLFVBQUE7RUNBRjtBQUNGO0FER0E7RUFDRTtJQUNFLFVBQUE7RUNERjtFRElBO0lBQ0UsVUFBQTtFQ0ZGO0FBQ0Y7QURLQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUNIRjtBRE1BO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUNIRjtBQ3RFQSw2QkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLG1CSEZhO0VHR2IsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQVNBLHNCQUFBO0FEaUVGO0FDeEVFO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRDBFSjtBQ3RFRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUR3RUo7QUN2RUk7RUFDRSxjSGZPO0FFd0ZiO0FDdEVJO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEd0VOO0FDdEVNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJIbkNLO0FFMkdiO0FDcEVJO0VBQ0UsU0FBQTtBRHNFTjtBQ2xFRTtFQUNFLGlCQUFBO0VBQ0EsY0hyRFc7RUdzRFgsMEJBQUE7QURvRUo7QUNoRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQWVBLHNCQUFBO0VBY0EscUJBQUE7QUR3Q0Y7QUNuRUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRHFFSjtBQ2xFRTtFQUNFLGtCQUFBO0FEb0VKO0FDbkVJO0VBQ0UsYUFBQTtBRHFFTjtBQ2hFRTtFQUNFLG1CQUFBO0FEa0VKO0FDaEVJO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtBRGtFTjtBQy9ESTtFQUNFLGlCQUFBO0FEaUVOO0FDNURFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCSHBGVTtFR3FGVixnQkFBQTtFQUNBLG1CQUFBO0FEOERKO0FDNURJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUQ4RE47QUMzREk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUQ2RE4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS13ZWJzaXRlLWNvbG9yOiAjMDc1YWM5O1xuJHByaW1hcnktdGV4dDogIzQ0NDQ0NDtcblxuJHNlY29uZGFyeS1iZzogI2ZjZmNmYztcbiRzZWNvbmRhcnktYm9yZGVyOiAjZTllY2VmO1xuXG4vKiBJbmZvIEJhc2VkICovXG4kY29sb3Itbm90aWZ5OiAjZmZjMTA3O1xuJGNvbG9yLWluZm86ICMzNWM3ZGY7XG5cbi8qIFByb3BlcnR5IEJhc2VkICovXG4kY29sb3Itd2hpdGU6IHdoaXRlO1xuXG4vKiogR3JheSBTaGFkZXMgKiovXG4kZ3JleS1zaGFkZS0xOiAjZjFmMWYxO1xuJGdyZXktc2hhZGUtMjogI2U0ZTRlNDtcbiRncmV5LXNoYWRlLTM6ICNmZWZlZmU7XG4iLCIubG9hZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogOTk7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEzLjFyZW07XG59XG5cbi5wcmltYXJ5LWhlYWRpbmcge1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICYtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLnByaW1hcnktYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMnB4IDFweCB0cmFuc3BhcmVudCBpbnNldCxcbiAgICAwIDE4cHggMzJweCAtMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSBpbnNldDtcbiAgcGFkZGluZzogMS4ycmVtIDIuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcblxuICAuZmEge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmZhZGVJbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbn1cblxuLmFuaW1hdGVkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG4iLCIvKiBJbmZvIEJhc2VkICovXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuLyoqIEdyYXkgU2hhZGVzICoqL1xuLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xufVxuLmxvYWRlciBpbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMy4xcmVtO1xufVxuXG4ucHJpbWFyeS1oZWFkaW5nIHtcbiAgcGFkZGluZzogMnJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuLnByaW1hcnktaGVhZGluZy10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByaW1hcnktYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMnB4IDFweCB0cmFuc3BhcmVudCBpbnNldCwgMCAxOHB4IDMycHggLTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gIHBhZGRpbmc6IDEuMnJlbSAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5wcmltYXJ5LWJ1dHRvbiAuZmEge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmZhZGVJbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbn1cblxuLmFuaW1hdGVkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi8qKiAgUHJvZHVjdCBTaWRlYmFyIEZpbHRlciAqL1xuLnByb2R1Y3QtZmlsdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMjVyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAycmVtO1xuICAvKiogQ2F0ZWdvcnkgSGVhZGluZyAqL1xufVxuLnByb2R1Y3QtZmlsdGVyIC5oZWFkaW5nIHtcbiAgcGFkZGluZzogMS44cmVtIDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzVhYzk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNnJlbTtcbn1cbi5wcm9kdWN0LWZpbHRlciB1bCB7XG4gIHBhZGRpbmc6IDAgMS4ycmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLnByb2R1Y3QtZmlsdGVyIHVsIC5hY3RpdmUge1xuICBjb2xvcjogIzM1YzdkZjtcbn1cbi5wcm9kdWN0LWZpbHRlciB1bCBsaSB7XG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIGRhc2hlZCAjZTRlNGU0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LWZpbHRlciB1bCBsaSA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwLjdyZW07XG4gIGhlaWdodDogMC43cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1YzdkZjtcbn1cbi5wcm9kdWN0LWZpbHRlciB1bCA6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogMDtcbn1cbi5wcm9kdWN0LWZpbHRlciAuYnRuLWxpbmsge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucHJvZHVjdC1saXN0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cmVtKTtcbiAgbWFyZ2luLWxlZnQ6IDI1cmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICAvKiogQ2F0ZWdvcnkgRGV0YWlscyAqL1xuICAvKiogUHJvZHVjdCBEZXRhaWxzICovXG59XG4ucHJvZHVjdC1saXN0IC5jYXJkIHtcbiAgd2lkdGg6IDI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC1saXN0IC5pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LWxpc3QgLmltYWdlIGltZyB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4ucHJvZHVjdC1saXN0IC5jYXRlZ29yeSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4ucHJvZHVjdC1saXN0IC5jYXRlZ29yeSAubmFtZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4ucHJvZHVjdC1saXN0IC5jYXRlZ29yeSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByb2R1Y3QtbGlzdCAuY2FyZC1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5wcm9kdWN0LWxpc3QgLmNhcmQtZm9vdGVyIC5wcm9kdWN0LW5hbWUge1xuICBjb2xvcjogIzAwYzVlNjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG4ucHJvZHVjdC1saXN0IC5jYXJkLWZvb3RlciAucHJvZHVjdC1wcmljZSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy9pbXBvcnRzXCI7XG5cbi8qKiAgUHJvZHVjdCBTaWRlYmFyIEZpbHRlciAqL1xuLnByb2R1Y3QtZmlsdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWJnO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMjVyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAycmVtO1xuXG4gIC5oZWFkaW5nIHtcbiAgICBwYWRkaW5nOiAxLjhyZW0gM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc1YWM5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cmVtO1xuICB9XG5cbiAgLyoqIENhdGVnb3J5IEhlYWRpbmcgKi9cbiAgdWwge1xuICAgIHBhZGRpbmc6IDAgMS4ycmVtO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJGNvbG9yLWluZm87XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgcGFkZGluZzogMXJlbSAzcmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIGRhc2hlZCAkZ3JleS1zaGFkZS0yO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMC43cmVtO1xuICAgICAgICBoZWlnaHQ6IDAuN3JlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDJyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1pbmZvO1xuICAgICAgfVxuICAgIH1cblxuICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gIH1cblxuICAuYnRuLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG59XG5cbi5wcm9kdWN0LWxpc3Qge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVyZW0pO1xuICBtYXJnaW4tbGVmdDogMjVyZW07XG4gIHBhZGRpbmc6IDJyZW07XG5cbiAgLmNhcmQge1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGltZyB7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDYXRlZ29yeSBEZXRhaWxzICovXG4gIC5jYXRlZ29yeSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAgIC5uYW1lIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBQcm9kdWN0IERldGFpbHMgKi9cbiAgLmNhcmQtZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgY29sb3I6ICMwMGM1ZTY7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
        }, {
          type: src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_5__["ProductApiService"]
        }, {
          type: src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false,
      BASE_URL: 'https://biobrix-healthcare.herokuapp.com/'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/shivam97/nodeProjects/biobrix/bioc/frontend/bioc/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map