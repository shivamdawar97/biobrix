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
              _this.dataService.categoryList = data;

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
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "primary-header", "shadow-sm"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "category"], ["class", "category-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "category-item", 3, "routerLink"]],
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
      styles: [".primary-header[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  background-color: #03a9f4;\n}\n.primary-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: white;\n}\n.primary-header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n}\n.primary-header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  list-style: none;\n}\n.primary-header[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  min-width: 130px;\n  max-width: 150px;\n  text-align: center;\n  text-transform: capitalize;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 0.1rem solid #e9ecef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmltYXJ5LWhlYWRlci9MOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcQklPQ1xcYmlvY1xcZnJvbnRlbmRcXGJpb2Mvc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcmltYXJ5LWhlYWRlci9MOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcQklPQ1xcYmlvY1xcZnJvbnRlbmRcXGJpb2Mvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByaW1hcnktaGVhZGVyXFxwcmltYXJ5LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcmltYXJ5LWhlYWRlci9wcmltYXJ5LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcmltYXJ5LWhlYWRlci9MOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcQklPQ1xcYmlvY1xcZnJvbnRlbmRcXGJpb2Mvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxlQUFBO0FBSUEsbUJBQUE7QUFHQSxrQkFBQTtBQ1ZBO0VBQ0UsaUJBQUE7RUFDQSx5QkRHVztBRURiO0FEREU7RUFDRSxlQUFBO0VBQ0EsWURHVTtBRUFkO0FEQUU7RUFDRSxpQkFBQTtBQ0VKO0FEREk7RUFDRSxZREhRO0FFTWQ7QURDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFRXpCSixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUQyQkY7QURBSTtFQUNFLGVBQUE7QUNFTjtBRENJO0VBQ0Usa0NBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpbWFyeS1oZWFkZXIvcHJpbWFyeS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS10ZXh0OiAjMzQzYTQwO1xyXG5cclxuJHNlY29uZGFyeS1iZzogI2ZjZmNmYztcclxuJHNlY29uZGFyeS1ib3JkZXI6ICNlOWVjZWY7XHJcblxyXG4vKiBJbmZvIEJhc2VkICovXHJcbiRjb2xvci1ub3RpZnk6ICNmZmMxMDc7XHJcbiRjb2xvci1pbmZvOiAjMDNhOWY0O1xyXG5cclxuLyogUHJvcGVydHkgQmFzZWQgKi9cclxuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcclxuXHJcbi8qKiBHcmF5IFNoYWRlcyAqKi9cclxuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcclxuJGdyZXktc2hhZGUtMjogI2U5ZTllOTtcclxuJGdyZXktc2hhZGUtMzogI2ZlZmVmZTtcclxuIiwiQGltcG9ydCBcInNyYy9zdHlsZXMvaW1wb3J0c1wiO1xyXG5cclxuLnByaW1hcnktaGVhZGVyIHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaW5mbztcclxuICAubmF2YmFyLWJyYW5kIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubmF2LWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICYtaXRlbSB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIG1pbi13aWR0aDogMTMwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIEBpbmNsdWRlIHRydW5jYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDAuMXJlbSBzb2xpZCAkc2Vjb25kYXJ5LWJvcmRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyogSW5mbyBCYXNlZCAqL1xuLyogUHJvcGVydHkgQmFzZWQgKi9cbi8qKiBHcmF5IFNoYWRlcyAqKi9cbi5wcmltYXJ5LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWY0O1xufVxuLnByaW1hcnktaGVhZGVyIC5uYXZiYXItYnJhbmQge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wcmltYXJ5LWhlYWRlciAubmF2LWl0ZW0ge1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbn1cbi5wcmltYXJ5LWhlYWRlciAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnByaW1hcnktaGVhZGVyIC5jYXRlZ29yeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucHJpbWFyeS1oZWFkZXIgLmNhdGVnb3J5LWl0ZW0ge1xuICBwYWRkaW5nOiAxcmVtO1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5wcmltYXJ5LWhlYWRlciAuY2F0ZWdvcnkgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5wcmltYXJ5LWhlYWRlciAuY2F0ZWdvcnkgOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQ6IDAuMXJlbSBzb2xpZCAjZTllY2VmO1xufSIsIkBtaXhpbiB0cnVuY2F0ZSB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbiJdfQ== */"]
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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
      function SecondaryHeaderComponent() {
        _classCallCheck(this, SecondaryHeaderComponent);

        this.contactInfo = src_app_constants_contact_info_const__WEBPACK_IMPORTED_MODULE_1__["ContactInfo"];
        this.cartConfig = src_app_constants_header_const__WEBPACK_IMPORTED_MODULE_2__["CartConfig"];
        this.cartItemCount = 1;
      }

      _createClass(SecondaryHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SecondaryHeaderComponent;
    }();

    SecondaryHeaderComponent.ɵfac = function SecondaryHeaderComponent_Factory(t) {
      return new (t || SecondaryHeaderComponent)();
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
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".secondary-nav[_ngcontent-%COMP%] {\n  padding: 0.1rem 1rem;\n  border-bottom: 0.1rem solid #e9ecef;\n  background-color: #fcfcfc;\n  font-size: 1.6rem;\n}\n.secondary-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding: 0 2rem;\n}\n.secondary-nav[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  position: relative;\n}\n.secondary-nav[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ffc107;\n  height: 1.6rem;\n  width: 1.6rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: white;\n  position: absolute;\n  left: 1.4rem;\n  top: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWNvbmRhcnktaGVhZGVyL0w6XFxQcm9qZWN0c1xcRnJlZWxhbmNlIFByb2plY3RzXFxCSU9DXFxiaW9jXFxmcm9udGVuZFxcYmlvYy9zcmNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlY29uZGFyeS1oZWFkZXIvTDpcXFByb2plY3RzXFxGcmVlbGFuY2UgUHJvamVjdHNcXEJJT0NcXGJpb2NcXGZyb250ZW5kXFxiaW9jL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZWNvbmRhcnktaGVhZGVyXFxzZWNvbmRhcnktaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlY29uZGFyeS1oZWFkZXIvc2Vjb25kYXJ5LWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxlQUFBO0FBSUEsbUJBQUE7QUFHQSxrQkFBQTtBQ1hBO0VBQ0Usb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCREZhO0VDR2IsaUJBQUE7QUNHRjtBRERFO0VBQ0UsZUFBQTtBQ0dKO0FEQUU7RUFDRSxrQkFBQTtBQ0VKO0FEREk7RUFDRSxtQkRSUztFQ1NULGNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZRGJRO0VDY1Isa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWNvbmRhcnktaGVhZGVyL3NlY29uZGFyeS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS10ZXh0OiAjMzQzYTQwO1xyXG5cclxuJHNlY29uZGFyeS1iZzogI2ZjZmNmYztcclxuJHNlY29uZGFyeS1ib3JkZXI6ICNlOWVjZWY7XHJcblxyXG4vKiBJbmZvIEJhc2VkICovXHJcbiRjb2xvci1ub3RpZnk6ICNmZmMxMDc7XHJcbiRjb2xvci1pbmZvOiAjMDNhOWY0O1xyXG5cclxuLyogUHJvcGVydHkgQmFzZWQgKi9cclxuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcclxuXHJcbi8qKiBHcmF5IFNoYWRlcyAqKi9cclxuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcclxuJGdyZXktc2hhZGUtMjogI2U5ZTllOTtcclxuJGdyZXktc2hhZGUtMzogI2ZlZmVmZTtcclxuIiwiQGltcG9ydCBcInNyYy9zdHlsZXMvaW1wb3J0c1wiO1xyXG4uc2Vjb25kYXJ5LW5hdiB7XHJcbiAgcGFkZGluZzogMC4xcmVtIDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICRzZWNvbmRhcnktYm9yZGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmc7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcblxyXG4gIC5uYXYtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgfVxyXG5cclxuICAuY2FydCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBzcGFuIHtcclxuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLW5vdGlmeTtcclxuICAgICAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgICAgIHdpZHRoOiAxLjZyZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAxLjRyZW07XHJcbiAgICAgIHRvcDogMC40cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKiBJbmZvIEJhc2VkICovXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuLyoqIEdyYXkgU2hhZGVzICoqL1xuLnNlY29uZGFyeS1uYXYge1xuICBwYWRkaW5nOiAwLjFyZW0gMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICNlOWVjZWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuLnNlY29uZGFyeS1uYXYgLm5hdi1pdGVtIHtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuLnNlY29uZGFyeS1uYXYgLmNhcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2Vjb25kYXJ5LW5hdiAuY2FydCBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2ZmYzEwNztcbiAgaGVpZ2h0OiAxLjZyZW07XG4gIHdpZHRoOiAxLjZyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEuNHJlbTtcbiAgdG9wOiAwLjRyZW07XG59Il19 */"]
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
        return [];
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
      link: '/cart'
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
      decls: 3,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-secondary-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-primary-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }
      },
      directives: [src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_1__["SecondaryHeaderComponent"], src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_2__["PrimaryHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
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
        path: 'cart',
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


    var src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/http/product-api.service */
    "./src/app/core/http/product-api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function ProductsComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_li_6_Template_li_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var category_r5 = ctx.$implicit;
          var i_r6 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onCategoryButtonClick(category_r5.id, i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);

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

    function ProductsComponent_div_8_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add To Cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r11.product_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", product_r11.price, "");
      }
    }

    function ProductsComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsComponent_div_8_div_4_Template, 12, 3, "div", 9);

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
      function ProductsComponent(route, router, dataService, productService) {
        _classCallCheck(this, ProductsComponent);

        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.productService = productService;
      }

      _createClass(ProductsComponent, [{
        key: "getCategoryList",
        value: function getCategoryList() {
          var _this2 = this;

          this.productService.getCategoryList().subscribe({
            next: function next(data) {
              _this2.categoryList = data;
              _this2.dataService.categoryList = data;

              _this2.categoryList.unshift(src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__["DefaultCategory"]);

              _this2.setActiveCategory();
            }
          });
        }
      }, {
        key: "getProductList",
        value: function getProductList(categoryId) {
          var _this3 = this;

          var params;

          if (categoryId && categoryId !== src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__["DefaultCategory"].id) {
            params = [{
              name: 'categoryId',
              value: categoryId
            }];
          }

          this.productService.getProductList(params).subscribe({
            next: function next(data) {
              _this3.productList = Array.isArray(data) ? data : [data];
              console.log(_this3.productList);
            }
          });
        }
        /** Set Active category by finding its index in category list */

      }, {
        key: "setActiveCategory",
        value: function setActiveCategory() {
          var _this4 = this;

          if (!this.categoryList || !this.categoryList.length) {
            return;
          }

          this.selectedCategoryIndex = this.categoryList.findIndex(function (category) {
            return category.id === _this4.categoryId;
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
          var _this5 = this;

          this.getCategoryList();
          this.route.params.subscribe(function (params) {
            _this5.handleParamsChange(params);
          });
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_4__["ProductApiService"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 9,
      vars: 2,
      consts: [[1, "product-filter"], [1, "heading"], ["role", "button", 3, "click", 4, "ngFor", "ngForOf"], [1, "product-list"], ["class", "row category", 4, "ngFor", "ngForOf"], ["role", "button", 3, "click"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"], [1, "row", "category"], [1, "col-md-12", "name"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "card", "shadow-sm"], [1, "image"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "overlay"], ["type", "button", 1, "btn", "add-to-cart"], [1, "card-footer"], [1, "m-0"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductsComponent_li_6_Template, 3, 4, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductsComponent_div_8_Template, 5, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      styles: [".product-filter[_ngcontent-%COMP%] {\n  position: fixed;\n  background: #fcfcfc;\n  height: 100vh;\n  width: 250px;\n  overflow: auto;\n}\n.product-filter[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  padding: 1rem 3rem;\n  background: #03a9f4;\n  border-top: 0.2rem solid #fcfcfc;\n  color: white;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: -webkit-gradient(linear, left bottom, left top, from(#f1f1f1), color-stop(30%, #e9e9e9), to(#fefefe));\n  background: linear-gradient(to top, #f1f1f1 0%, #e9e9e9 30%, #fefefe 100%);\n  padding: 1rem 3rem;\n  list-style: none;\n  cursor: pointer;\n}\n.product-filter[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #343a40;\n  text-transform: capitalize;\n}\n.product-list[_ngcontent-%COMP%] {\n  width: calc(100% - 250px);\n  margin-left: 250px;\n  padding: 2rem;\n}\n.product-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 30rem;\n}\n.product-list[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  position: relative;\n}\n.product-list[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  height: 100%;\n  width: 100%;\n  background-color: black;\n  opacity: 0.4;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n}\n.product-list[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  left: 22%;\n  top: 70%;\n  color: white;\n  background: #ff9800;\n  font-size: 1.4rem;\n  padding: 0.4rem 4rem;\n}\n.product-list[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  display: block;\n}\n.product-list[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]:hover   .add-to-cart[_ngcontent-%COMP%] {\n  display: block;\n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  margin-bottom: 0.5rem;\n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.product-list[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3Byb2R1Y3RzL0w6XFxQcm9qZWN0c1xcRnJlZWxhbmNlIFByb2plY3RzXFxCSU9DXFxiaW9jXFxmcm9udGVuZFxcYmlvYy9zcmNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvcHJvZHVjdHMvTDpcXFByb2plY3RzXFxGcmVlbGFuY2UgUHJvamVjdHNcXEJJT0NcXGJpb2NcXGZyb250ZW5kXFxiaW9jL3NyY1xcYXBwXFxtb2R1bGVzXFxob21lXFxwcm9kdWN0c1xccHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxlQUFBO0FBSUEsbUJBQUE7QUFHQSxrQkFBQTtBQ1ZBO0VBQ0UsZUFBQTtFQUNBLG1CREZhO0VDR2IsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRUY7QURBRTtFQUNFLGtCQUFBO0VBQ0EsbUJESlM7RUNLVCxnQ0FBQTtFQUNBLFlESFU7QUVLZDtBREVJO0VBQ0UsaUJBQUE7QUNBTjtBREdJO0VBQ0UsaUhBQUE7RUFBQSwwRUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRE47QURLRTtFQUNFLGlCQUFBO0VBQ0EsY0QvQlc7RUNnQ1gsMEJBQUE7QUNISjtBRE9BO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNKRjtBRE1FO0VBQ0UsWUFBQTtBQ0pKO0FET0U7RUFDRSxrQkFBQTtBQ0xKO0FET0k7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUNMTjtBRFFJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDTk47QURVTTtFQUNFLGNBQUE7QUNSUjtBRFVNO0VBQ0UsY0FBQTtBQ1JSO0FEYUU7RUFDRSxtQkFBQTtBQ1hKO0FEYUk7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0FDWE47QURjSTtFQUNFLGlCQUFBO0FDWk47QURnQkU7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0FDZEoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS10ZXh0OiAjMzQzYTQwO1xyXG5cclxuJHNlY29uZGFyeS1iZzogI2ZjZmNmYztcclxuJHNlY29uZGFyeS1ib3JkZXI6ICNlOWVjZWY7XHJcblxyXG4vKiBJbmZvIEJhc2VkICovXHJcbiRjb2xvci1ub3RpZnk6ICNmZmMxMDc7XHJcbiRjb2xvci1pbmZvOiAjMDNhOWY0O1xyXG5cclxuLyogUHJvcGVydHkgQmFzZWQgKi9cclxuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcclxuXHJcbi8qKiBHcmF5IFNoYWRlcyAqKi9cclxuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcclxuJGdyZXktc2hhZGUtMjogI2U5ZTllOTtcclxuJGdyZXktc2hhZGUtMzogI2ZlZmVmZTtcclxuIiwiQGltcG9ydCBcInNyYy9zdHlsZXMvaW1wb3J0c1wiO1xyXG5cclxuLnByb2R1Y3QtZmlsdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1iZztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgLmhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWluZm87XHJcbiAgICBib3JkZXItdG9wOiAwLjJyZW0gc29saWQgJHNlY29uZGFyeS1iZztcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkZ3JleS1zaGFkZS0xIDAlLCAkZ3JleS1zaGFkZS0yIDMwJSwgJGdyZXktc2hhZGUtMyAxMDAlKTtcclxuICAgICAgcGFkZGluZzogMXJlbSAzcmVtO1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuLWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBjb2xvcjogJHByaW1hcnktdGV4dDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxufVxyXG5cclxuLnByb2R1Y3QtbGlzdCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1MHB4KTtcclxuICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuXHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDMwcmVtO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAub3ZlcmxheSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGQtdG8tY2FydCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMjIlO1xyXG4gICAgICB0b3A6IDcwJTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmY5ODAwO1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgcGFkZGluZzogMC40cmVtIDRyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICAuYWRkLXRvLWNhcnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkLWZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbn1cclxuIiwiLyogSW5mbyBCYXNlZCAqL1xuLyogUHJvcGVydHkgQmFzZWQgKi9cbi8qKiBHcmF5IFNoYWRlcyAqKi9cbi5wcm9kdWN0LWZpbHRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogI2ZjZmNmYztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDI1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5wcm9kdWN0LWZpbHRlciAuaGVhZGluZyB7XG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcbiAgYmFja2dyb3VuZDogIzAzYTlmNDtcbiAgYm9yZGVyLXRvcDogMC4ycmVtIHNvbGlkICNmY2ZjZmM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wcm9kdWN0LWZpbHRlciB1bCAuYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJvZHVjdC1maWx0ZXIgdWwgbGkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZjFmMWYxIDAlLCAjZTllOWU5IDMwJSwgI2ZlZmVmZSAxMDAlKTtcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvZHVjdC1maWx0ZXIgLmJ0bi1saW5rIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjMzQzYTQwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnByb2R1Y3QtbGlzdCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XG4gIG1hcmdpbi1sZWZ0OiAyNTBweDtcbiAgcGFkZGluZzogMnJlbTtcbn1cbi5wcm9kdWN0LWxpc3QgLmNhcmQge1xuICB3aWR0aDogMzByZW07XG59XG4ucHJvZHVjdC1saXN0IC5pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LWxpc3QgLmltYWdlIC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC40O1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG59XG4ucHJvZHVjdC1saXN0IC5pbWFnZSAuYWRkLXRvLWNhcnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIyJTtcbiAgdG9wOiA3MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2ZmOTgwMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSA0cmVtO1xufVxuLnByb2R1Y3QtbGlzdCAuaW1hZ2U6aG92ZXIgLm92ZXJsYXkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wcm9kdWN0LWxpc3QgLmltYWdlOmhvdmVyIC5hZGQtdG8tY2FydCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnByb2R1Y3QtbGlzdCAuY2F0ZWdvcnkge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLnByb2R1Y3QtbGlzdCAuY2F0ZWdvcnkgLm5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLnByb2R1Y3QtbGlzdCAuY2F0ZWdvcnkgaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcm9kdWN0LWxpc3QgLmNhcmQtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iXX0= */"]
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
          type: src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_4__["ProductApiService"]
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
      BASE_URL: 'http://biobrix-healthcare.herokuapp.com/'
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
    /*! L:\Projects\Freelance Projects\BIOC\bioc\frontend\bioc\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map