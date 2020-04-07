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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, category_r2.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2.categoryName);
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
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "primary-header"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "category"], ["class", "category-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "category-item", 3, "routerLink"]],
      template: function PrimaryHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bioceuticals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PrimaryHeaderComponent_a_18_Template, 3, 4, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Trade Enquiry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);

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
      styles: [".main-container[_ngcontent-%COMP%] {\n  padding-top: 9.7rem;\n}\n.primary-heading[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  background-color: #f1f1f1;\n}\n.primary-heading-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0;\n  text-align: center;\n}\n.primary-header[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  color: white;\n}\n.primary-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #444444;\n}\n.primary-header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n}\n.primary-header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #444444;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  list-style: none;\n}\n.primary-header[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  min-width: 130px;\n  max-width: 150px;\n  text-align: center;\n  text-transform: capitalize;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 0.1rem solid #e9ecef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL19jb21tb24uc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcmltYXJ5LWhlYWRlci9wcmltYXJ5LWhlYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvYXBwL2NvbXBvbmVudHMvcHJpbWFyeS1oZWFkZXIvcHJpbWFyeS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zaGl2YW05Ny9ub2RlUHJvamVjdHMvYmlvYnJpeC9iaW9jL2Zyb250ZW5kL2Jpb2Mvc3JjL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsZUFBQTtBQUlBLG1CQUFBO0FBR0Esa0JBQUE7QUNiQTtFQUNFLG1CQUFBO0FDSUY7QUREQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0lGO0FESEU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNLSjtBQ2JBO0VBQ0UsaUJBQUE7RUFDQSxZSE9ZO0FFU2Q7QUNmRTtFQUNFLGVBQUE7RUFDQSxjSE5XO0FFdUJmO0FDZEU7RUFDRSxpQkFBQTtBRGdCSjtBQ2ZJO0VBQ0UsY0haUztBRTZCZjtBQ2JFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7QURlSjtBQ2JJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VDekJKLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBRnlDRjtBQ2RJO0VBQ0UsZUFBQTtBRGdCTjtBQ2JJO0VBQ0Usa0NBQUE7QURlTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpbWFyeS1oZWFkZXIvcHJpbWFyeS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS13ZWJzaXRlLWNvbG9yOiAjMDc1YWM5O1xuJHByaW1hcnktdGV4dDogIzQ0NDQ0NDtcblxuJHNlY29uZGFyeS1iZzogI2ZjZmNmYztcbiRzZWNvbmRhcnktYm9yZGVyOiAjZTllY2VmO1xuXG4vKiBJbmZvIEJhc2VkICovXG4kY29sb3Itbm90aWZ5OiAjZmZjMTA3O1xuJGNvbG9yLWluZm86ICMzNWM3ZGY7XG5cbi8qIFByb3BlcnR5IEJhc2VkICovXG4kY29sb3Itd2hpdGU6IHdoaXRlO1xuXG4vKiogR3JheSBTaGFkZXMgKiovXG4kZ3JleS1zaGFkZS0xOiAjZjFmMWYxO1xuJGdyZXktc2hhZGUtMjogI2U0ZTRlNDtcbiRncmV5LXNoYWRlLTM6ICNmZWZlZmU7XG4iLCIubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogOS43cmVtO1xufVxuXG4ucHJpbWFyeS1oZWFkaW5nIHtcbiAgcGFkZGluZzogMnJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAmLXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iLCIvKiBJbmZvIEJhc2VkICovXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuLyoqIEdyYXkgU2hhZGVzICoqL1xuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDkuN3JlbTtcbn1cblxuLnByaW1hcnktaGVhZGluZyB7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cbi5wcmltYXJ5LWhlYWRpbmctdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcmltYXJ5LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucHJpbWFyeS1oZWFkZXIgLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6ICM0NDQ0NDQ7XG59XG4ucHJpbWFyeS1oZWFkZXIgLm5hdi1pdGVtIHtcbiAgcGFkZGluZzogMCAxLjVyZW07XG59XG4ucHJpbWFyeS1oZWFkZXIgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xufVxuLnByaW1hcnktaGVhZGVyIC5jYXRlZ29yeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucHJpbWFyeS1oZWFkZXIgLmNhdGVnb3J5LWl0ZW0ge1xuICBwYWRkaW5nOiAxcmVtO1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5wcmltYXJ5LWhlYWRlciAuY2F0ZWdvcnkgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5wcmltYXJ5LWhlYWRlciAuY2F0ZWdvcnkgOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQ6IDAuMXJlbSBzb2xpZCAjZTllY2VmO1xufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzL2ltcG9ydHNcIjtcblxuLnByaW1hcnktaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBjb2xvcjogJHByaW1hcnktdGV4dDtcbiAgfVxuXG4gIC5uYXYtaXRlbSB7XG4gICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgLm5hdi1saW5rIHtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0O1xuICAgIH1cbiAgfVxuXG4gIC5jYXRlZ29yeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgJi1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgQGluY2x1ZGUgdHJ1bmNhdGU7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwLjFyZW0gc29saWQgJHNlY29uZGFyeS1ib3JkZXI7XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gdHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiJdfQ== */"]
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
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cartItemCount);
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
      styles: [".main-container[_ngcontent-%COMP%] {\n  padding-top: 9.7rem;\n}\n.primary-heading[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  background-color: #f1f1f1;\n}\n.primary-heading-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0;\n  text-align: center;\n}\n.secondary-nav[_ngcontent-%COMP%] {\n  padding: 0.1rem 1rem;\n  background-color: #075ac9;\n  font-size: 1.6rem;\n}\n.secondary-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding: 0 2rem;\n}\n.secondary-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.secondary-nav[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  position: relative;\n}\n.secondary-nav[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ffc107;\n  height: 1.6rem;\n  width: 1.6rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: white;\n  position: absolute;\n  left: 1.4rem;\n  top: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL19jb21tb24uc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWNvbmRhcnktaGVhZGVyL3NlY29uZGFyeS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zaGl2YW05Ny9ub2RlUHJvamVjdHMvYmlvYnJpeC9iaW9jL2Zyb250ZW5kL2Jpb2Mvc3JjL2FwcC9jb21wb25lbnRzL3NlY29uZGFyeS1oZWFkZXIvc2Vjb25kYXJ5LWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxlQUFBO0FBSUEsbUJBQUE7QUFHQSxrQkFBQTtBQ2JBO0VBQ0UsbUJBQUE7QUNJRjtBRERBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FDSUY7QURIRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0tKO0FDZEE7RUFDRSxvQkFBQTtFQUNBLHlCSEhzQjtFR0l0QixpQkFBQTtBRGlCRjtBQ2ZFO0VBQ0UsZUFBQTtBRGlCSjtBQ2hCSTtFQUNFLFlIRVE7QUVnQmQ7QUNkRTtFQUNFLGtCQUFBO0FEZ0JKO0FDZkk7RUFDRSxtQkhUUztFR1VULGNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZSGRRO0VHZVIsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRGlCTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2Vjb25kYXJ5LWhlYWRlci9zZWNvbmRhcnktaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktd2Vic2l0ZS1jb2xvcjogIzA3NWFjOTtcbiRwcmltYXJ5LXRleHQ6ICM0NDQ0NDQ7XG5cbiRzZWNvbmRhcnktYmc6ICNmY2ZjZmM7XG4kc2Vjb25kYXJ5LWJvcmRlcjogI2U5ZWNlZjtcblxuLyogSW5mbyBCYXNlZCAqL1xuJGNvbG9yLW5vdGlmeTogI2ZmYzEwNztcbiRjb2xvci1pbmZvOiAjMzVjN2RmO1xuXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuLyoqIEdyYXkgU2hhZGVzICoqL1xuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcbiRncmV5LXNoYWRlLTI6ICNlNGU0ZTQ7XG4kZ3JleS1zaGFkZS0zOiAjZmVmZWZlO1xuIiwiLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDkuN3JlbTtcbn1cblxuLnByaW1hcnktaGVhZGluZyB7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgJi10ZXh0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIiwiLyogSW5mbyBCYXNlZCAqL1xuLyogUHJvcGVydHkgQmFzZWQgKi9cbi8qKiBHcmF5IFNoYWRlcyAqKi9cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA5LjdyZW07XG59XG5cbi5wcmltYXJ5LWhlYWRpbmcge1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG4ucHJpbWFyeS1oZWFkaW5nLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2Vjb25kYXJ5LW5hdiB7XG4gIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc1YWM5O1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cbi5zZWNvbmRhcnktbmF2IC5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cbi5zZWNvbmRhcnktbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2Vjb25kYXJ5LW5hdiAuY2FydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWNvbmRhcnktbmF2IC5jYXJ0IHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xuICBoZWlnaHQ6IDEuNnJlbTtcbiAgd2lkdGg6IDEuNnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMS40cmVtO1xuICB0b3A6IDAuNHJlbTtcbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy9pbXBvcnRzXCI7XG4uc2Vjb25kYXJ5LW5hdiB7XG4gIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS13ZWJzaXRlLWNvbG9yO1xuICBmb250LXNpemU6IDEuNnJlbTtcblxuICAubmF2LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICAubmF2LWxpbmsge1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICB9XG4gIH1cblxuICAuY2FydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHNwYW4ge1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLW5vdGlmeTtcbiAgICAgIGhlaWdodDogMS42cmVtO1xuICAgICAgd2lkdGg6IDEuNnJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDEuNHJlbTtcbiAgICAgIHRvcDogMC40cmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"]
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

  /*! exports provided: CATEGORY_API, PRODUCT_API */

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
    }); // Category List API


    var CATEGORY_API = 'category/category_list/'; // Product List API

    var PRODUCT_API = 'product/product_list/';
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

    var UtilityService =
    /*#__PURE__*/
    function () {
      function UtilityService() {
        _classCallCheck(this, UtilityService);
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


    var src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/components/secondary-header/secondary-header.component */
    "./src/app/components/secondary-header/secondary-header.component.ts");
    /* harmony import */


    var src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/primary-header/primary-header.component */
    "./src/app/components/primary-header/primary-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 4,
      vars: 0,
      consts: [[1, "navbar-container"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-secondary-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-primary-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        }
      },
      directives: [src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_1__["SecondaryHeaderComponent"], src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_2__["PrimaryHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
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
        return [];
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

    var HomepageComponent =
    /*#__PURE__*/
    function () {
      function HomepageComponent() {
        _classCallCheck(this, HomepageComponent);
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
      return new (t || HomepageComponent)();
    };

    HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomepageComponent,
      selectors: [["app-homepage"]],
      decls: 2,
      vars: 0,
      template: function HomepageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "homepage works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
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
        return [];
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function ProductsComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_li_10_Template_li_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var category_r5 = ctx.$implicit;
          var i_r6 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onCategoryButtonClick(category_r5.id, i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r5 = ctx.$implicit;
        var i_r6 = ctx.index;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r6 === ctx_r3.selectedCategoryIndex));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r5.categoryName, " ");
      }
    }

    function ProductsComponent_div_12_div_4_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_div_12_div_4_button_10_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var product_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.addToCart(product_r11);
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
        var product_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r11.product_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r11.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !product_r11.addedToCart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r11.addedToCart);
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
        var category_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r9.category_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r9.product_list);
      }
    }

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent(route, router, dataService, cartService, productService) {
        _classCallCheck(this, ProductsComponent);

        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.cartService = cartService;
        this.productService = productService;
      }

      _createClass(ProductsComponent, [{
        key: "getCategoryList",
        value: function getCategoryList() {
          var _this3 = this;

          this.productService.getCategoryList().subscribe({
            next: function next(data) {
              _this3.categoryList = data;
              _this3.dataService.categoryList = data;

              _this3.categoryList.unshift(src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__["DefaultCategory"]);

              _this3.setActiveCategory();
            }
          });
        }
      }, {
        key: "getProductList",
        value: function getProductList(categoryId) {
          var _this4 = this;

          var params;

          if (categoryId && categoryId !== src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__["DefaultCategory"].id) {
            params = [{
              name: 'categoryId',
              value: categoryId
            }];
          }

          this.productService.getProductList(params).subscribe({
            next: function next(data) {
              // this.productList = data;
              _this4.productList = Array.isArray(data) ? data : [data];
              _this4.productList = _this4.syncProductsWithCart(_this4.productList);
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
          var _this5 = this;

          if (!this.categoryList || !this.categoryList.length) {
            return;
          }

          this.selectedCategoryIndex = this.categoryList.findIndex(function (category) {
            return category.id === _this5.categoryId;
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
          var _this6 = this;

          this.getCategoryList();
          this.route.params.subscribe(function (params) {
            _this6.handleParamsChange(params);
          });
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_5__["ProductApiService"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 13,
      vars: 2,
      consts: [[1, "main-container"], [1, "primary-heading"], [1, "primary-heading-text"], [1, "product-filter"], [1, "heading"], ["role", "button", 3, "click", 4, "ngFor", "ngForOf"], [1, "product-list"], ["class", "row category", 4, "ngFor", "ngForOf"], ["role", "button", 3, "click"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"], [1, "row", "category"], [1, "col-md-12", "name"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "shadow-0"], [1, "image"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-footer"], [1, "product-name"], [1, "product-price"], [1, "fa", "fa-inr"], ["type", "button", "class", "btn add-to-cart", 3, "click", 4, "ngIf"], ["class", "btn add-to-cart", 3, "routerLink", 4, "ngIf"], ["type", "button", 1, "btn", "add-to-cart", 3, "click"], [1, "fa", "fa-shopping-cart"], [1, "btn", "add-to-cart", 3, "routerLink"]],
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
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".main-container[_ngcontent-%COMP%] {\n  padding-top: 9.7rem;\n}\n.primary-heading[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  background-color: #f1f1f1;\n}\n.primary-heading-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n.product-filter[_ngcontent-%COMP%] {\n  position: fixed;\n  background: #fcfcfc;\n  height: 100vh;\n  width: 25rem;\n  overflow: auto;\n  padding: 2rem;\n  \n}\n.product-filter[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  padding: 1.8rem 3rem;\n  background-color: #075ac9;\n  color: white;\n  border-radius: 6rem;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 1.2rem;\n  margin-top: 2rem;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #35c7df;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1rem 3rem;\n  border-bottom: 0.1rem dashed #e4e4e4;\n  list-style: none;\n  cursor: pointer;\n  position: relative;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0.7rem;\n  height: 0.7rem;\n  border-radius: 100%;\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 2rem;\n  background-color: #35c7df;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  border: 0;\n}\n.product-filter[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #444444;\n  text-transform: capitalize;\n}\n.product-list[_ngcontent-%COMP%] {\n  width: calc(100% - 25rem);\n  margin-left: 25rem;\n  padding: 2rem;\n  \n  \n}\n.product-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 25rem;\n  margin-bottom: 2rem;\n  position: relative;\n}\n.product-list[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  position: relative;\n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  margin-bottom: 1.5rem;\n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.product-list[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: capitalize;\n  background-color: white;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.product-list[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #00889f;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n}\n.product-list[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-weight: bold;\n  font-size: 2rem;\n}\n.product-list[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 0.4rem 1rem -1rem rgba(0, 0, 0, 0.2), 0 0.4rem 0.6rem 0.1rem rgba(0, 0, 0, 0.05), 0 0.1rem 0.2rem 0.1rem transparent inset, 0 1.8rem 3.2rem -0.2rem rgba(255, 255, 255, 0.1) inset;\n  padding: 1.2rem 2.5rem;\n  border-radius: 5rem;\n  color: white;\n  margin-top: 1rem;\n  border: 0;\n  font-size: 1.4rem;\n}\n.product-list[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL19jb21tb24uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc2hpdmFtOTcvbm9kZVByb2plY3RzL2Jpb2JyaXgvYmlvYy9mcm9udGVuZC9iaW9jL3NyYy9hcHAvbW9kdWxlcy9ob21lL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLGVBQUE7QUFJQSxtQkFBQTtBQUdBLGtCQUFBO0FDYkE7RUFDRSxtQkFBQTtBQ0lGO0FEREE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNJRjtBREhFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDS0o7QUNiQSw2QkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLG1CSEZhO0VHR2IsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQVNBLHNCQUFBO0FEUUY7QUNmRTtFQUNFLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURpQko7QUNiRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QURlSjtBQ2RJO0VBQ0UsY0hmTztBRStCYjtBQ2JJO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEZU47QUNiTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCSG5DSztBRWtEYjtBQ1hJO0VBQ0UsU0FBQTtBRGFOO0FDVEU7RUFDRSxpQkFBQTtFQUNBLGNIckRXO0VHc0RYLDBCQUFBO0FEV0o7QUNQQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBWUEsc0JBQUE7RUFjQSxxQkFBQTtBRGRGO0FDVkU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRFlKO0FDVEU7RUFDRSxrQkFBQTtBRFdKO0FDUEU7RUFDRSxtQkFBQTtBRFNKO0FDUEk7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0FEU047QUNOSTtFQUNFLGlCQUFBO0FEUU47QUNIRTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkhqRlU7RUdrRlYsZ0JBQUE7RUFDQSxtQkFBQTtBREtKO0FDSEk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBREtOO0FDRkk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRElOO0FDREk7RUFDRSwyREFBQTtFQUNBLGdNQUFBO0VBRUEsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlIdkdRO0VHd0dSLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FERU47QUNBTTtFQUNFLGlCQUFBO0FERVIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS13ZWJzaXRlLWNvbG9yOiAjMDc1YWM5O1xuJHByaW1hcnktdGV4dDogIzQ0NDQ0NDtcblxuJHNlY29uZGFyeS1iZzogI2ZjZmNmYztcbiRzZWNvbmRhcnktYm9yZGVyOiAjZTllY2VmO1xuXG4vKiBJbmZvIEJhc2VkICovXG4kY29sb3Itbm90aWZ5OiAjZmZjMTA3O1xuJGNvbG9yLWluZm86ICMzNWM3ZGY7XG5cbi8qIFByb3BlcnR5IEJhc2VkICovXG4kY29sb3Itd2hpdGU6IHdoaXRlO1xuXG4vKiogR3JheSBTaGFkZXMgKiovXG4kZ3JleS1zaGFkZS0xOiAjZjFmMWYxO1xuJGdyZXktc2hhZGUtMjogI2U0ZTRlNDtcbiRncmV5LXNoYWRlLTM6ICNmZWZlZmU7XG4iLCIubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogOS43cmVtO1xufVxuXG4ucHJpbWFyeS1oZWFkaW5nIHtcbiAgcGFkZGluZzogMnJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAmLXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iLCIvKiBJbmZvIEJhc2VkICovXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuLyoqIEdyYXkgU2hhZGVzICoqL1xuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDkuN3JlbTtcbn1cblxuLnByaW1hcnktaGVhZGluZyB7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cbi5wcmltYXJ5LWhlYWRpbmctdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qKiAgUHJvZHVjdCBTaWRlYmFyIEZpbHRlciAqL1xuLnByb2R1Y3QtZmlsdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMjVyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAycmVtO1xuICAvKiogQ2F0ZWdvcnkgSGVhZGluZyAqL1xufVxuLnByb2R1Y3QtZmlsdGVyIC5oZWFkaW5nIHtcbiAgcGFkZGluZzogMS44cmVtIDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzVhYzk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNnJlbTtcbn1cbi5wcm9kdWN0LWZpbHRlciB1bCB7XG4gIHBhZGRpbmc6IDAgMS4ycmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLnByb2R1Y3QtZmlsdGVyIHVsIC5hY3RpdmUge1xuICBjb2xvcjogIzM1YzdkZjtcbn1cbi5wcm9kdWN0LWZpbHRlciB1bCBsaSB7XG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIGRhc2hlZCAjZTRlNGU0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LWZpbHRlciB1bCBsaSA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwLjdyZW07XG4gIGhlaWdodDogMC43cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1YzdkZjtcbn1cbi5wcm9kdWN0LWZpbHRlciB1bCA6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogMDtcbn1cbi5wcm9kdWN0LWZpbHRlciAuYnRuLWxpbmsge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucHJvZHVjdC1saXN0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cmVtKTtcbiAgbWFyZ2luLWxlZnQ6IDI1cmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICAvKiogQ2F0ZWdvcnkgRGV0YWlscyAqL1xuICAvKiogUHJvZHVjdCBEZXRhaWxzICovXG59XG4ucHJvZHVjdC1saXN0IC5jYXJkIHtcbiAgd2lkdGg6IDI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC1saXN0IC5pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LWxpc3QgLmNhdGVnb3J5IHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5wcm9kdWN0LWxpc3QgLmNhdGVnb3J5IC5uYW1lIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5wcm9kdWN0LWxpc3QgLmNhdGVnb3J5IGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJvZHVjdC1saXN0IC5jYXJkLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnByb2R1Y3QtbGlzdCAuY2FyZC1mb290ZXIgLnByb2R1Y3QtbmFtZSB7XG4gIGNvbG9yOiAjMDA4ODlmO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5wcm9kdWN0LWxpc3QgLmNhcmQtZm9vdGVyIC5wcm9kdWN0LXByaWNlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5wcm9kdWN0LWxpc3QgLmNhcmQtZm9vdGVyIC5hZGQtdG8tY2FydCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICBib3gtc2hhZG93OiAwIDAuNHJlbSAxcmVtIC0xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwLjRyZW0gMC42cmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDAuMXJlbSAwLjJyZW0gMC4xcmVtIHRyYW5zcGFyZW50IGluc2V0LCAwIDEuOHJlbSAzLjJyZW0gLTAuMnJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gIHBhZGRpbmc6IDEuMnJlbSAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5wcm9kdWN0LWxpc3QgLmNhcmQtZm9vdGVyIC5hZGQtdG8tY2FydCAuZmEge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy9pbXBvcnRzXCI7XG5cbi8qKiAgUHJvZHVjdCBTaWRlYmFyIEZpbHRlciAqL1xuLnByb2R1Y3QtZmlsdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWJnO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMjVyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAycmVtO1xuXG4gIC5oZWFkaW5nIHtcbiAgICBwYWRkaW5nOiAxLjhyZW0gM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc1YWM5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cmVtO1xuICB9XG5cbiAgLyoqIENhdGVnb3J5IEhlYWRpbmcgKi9cbiAgdWwge1xuICAgIHBhZGRpbmc6IDAgMS4ycmVtO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJGNvbG9yLWluZm87XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgcGFkZGluZzogMXJlbSAzcmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIGRhc2hlZCAkZ3JleS1zaGFkZS0yO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMC43cmVtO1xuICAgICAgICBoZWlnaHQ6IDAuN3JlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDJyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1pbmZvO1xuICAgICAgfVxuICAgIH1cblxuICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gIH1cblxuICAuYnRuLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG59XG5cbi5wcm9kdWN0LWxpc3Qge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVyZW0pO1xuICBtYXJnaW4tbGVmdDogMjVyZW07XG4gIHBhZGRpbmc6IDJyZW07XG5cbiAgLmNhcmQge1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLyoqIENhdGVnb3J5IERldGFpbHMgKi9cbiAgLmNhdGVnb3J5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgLm5hbWUge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG5cbiAgLyoqIFByb2R1Y3QgRGV0YWlscyAqL1xuICAuY2FyZC1mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICBjb2xvcjogIzAwODg5ZjtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuXG4gICAgLmFkZC10by1jYXJ0IHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICAgICAgYm94LXNoYWRvdzogMCAwLjRyZW0gMXJlbSAtMXJlbSByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMC40cmVtIDAuNnJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgICAgICAgMCAwLjFyZW0gMC4ycmVtIDAuMXJlbSB0cmFuc3BhcmVudCBpbnNldCwgMCAxLjhyZW0gMy4ycmVtIC0wLjJyZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICAgICAgcGFkZGluZzogMS4ycmVtIDIuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuXG4gICAgICAuZmEge1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
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