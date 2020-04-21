(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-config.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-config.module.ts ***!
  \**************************************/
/*! exports provided: AppConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigModule", function() { return AppConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts");




class AppConfigModule {
}
AppConfigModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppConfigModule });
AppConfigModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppConfigModule_Factory(t) { return new (t || AppConfigModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]
        ],
        _modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppConfigModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]], exports: [_modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfigModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]
                ],
                exports: [
                    _modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'bioc';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_config_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-config.module */ "./src/app/app-config.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _app_config_module__WEBPACK_IMPORTED_MODULE_4__["AppConfigModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _app_config_module__WEBPACK_IMPORTED_MODULE_4__["AppConfigModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _app_config_module__WEBPACK_IMPORTED_MODULE_4__["AppConfigModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/primary-header/primary-header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/primary-header/primary-header.component.ts ***!
  \***********************************************************************/
/*! exports provided: PrimaryHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryHeaderComponent", function() { return PrimaryHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/products.const */ "./src/app/constants/products.const.ts");
/* harmony import */ var src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/http/product-api.service */ "./src/app/core/http/product-api.service.ts");
/* harmony import */ var src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const _c0 = function (a1) { return ["/products", a1]; };
function PrimaryHeaderComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, category_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r3.categoryName);
} }
class PrimaryHeaderComponent {
    constructor(productService, dataService) {
        this.productService = productService;
        this.dataService = dataService;
    }
    getCategoryList() {
        this.productService.getCategoryList()
            .subscribe({
            next: (data) => {
                this.categoryList = data;
                this.dataService.categoryList = data.splice(0, 2);
                this.categoryList.push(src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__["DefaultCategory"]);
            }
        });
    }
    ngOnInit() {
        this.getCategoryList();
    }
}
PrimaryHeaderComponent.ɵfac = function PrimaryHeaderComponent_Factory(t) { return new (t || PrimaryHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_2__["ProductApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
PrimaryHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrimaryHeaderComponent, selectors: [["app-primary-header"]], decls: 25, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "primary-header"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "category"], ["class", "category-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "category-item", 3, "routerLink"]], template: function PrimaryHeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 9.7rem;\n}\n.primary-heading[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  background-color: #f1f1f1;\n}\n.primary-heading-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0;\n  text-align: center;\n}\n.primary-button[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  padding: 1.2rem 2.5rem;\n  border-radius: 5rem;\n  color: white;\n  margin-top: 1rem;\n  border: 0;\n  font-size: 1.4rem;\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.primary-header[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  background-color: white;\n}\n.primary-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #444444;\n}\n.primary-header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n}\n.primary-header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #444444;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  list-style: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.primary-header[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  min-width: 130px;\n  max-width: 150px;\n  text-align: center;\n  text-transform: capitalize;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 0.1rem solid #e9ecef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL19jb21tb24uc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcmltYXJ5LWhlYWRlci9wcmltYXJ5LWhlYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvYXBwL2NvbXBvbmVudHMvcHJpbWFyeS1oZWFkZXIvcHJpbWFyeS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zaGl2YW05Ny9ub2RlUHJvamVjdHMvYmlvYnJpeC9iaW9jL2Zyb250ZW5kL2Jpb2Mvc3JjL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsZUFBQTtBQUlBLG1CQUFBO0FBR0Esa0JBQUE7QUNiQTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQ0lGO0FERkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDSUo7QURBQTtFQUNFLG1CQUFBO0FDR0Y7QURBQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0dGO0FERkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNJSjtBREFBO0VBQ0UsMkRBQUE7RUFDQSxtS0FBQTtFQUVBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZRHpCWTtFQzBCWixnQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0VGO0FEQUU7RUFDRSxpQkFBQTtBQ0VKO0FDMUNBO0VBQ0UsaUJBQUE7RUFFQSx1QkFBQTtBRDRDRjtBQzNDRTtFQUNFLGVBQUE7RUFDQSxjSFBXO0FFb0RmO0FDMUNFO0VBQ0UsaUJBQUE7QUQ0Q0o7QUMzQ0k7RUFDRSxjSGJTO0FFMERmO0FDekNFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUQyQ0o7QUN6Q0k7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUMzQkosbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FGdUVGO0FDMUNJO0VBQ0UsZUFBQTtBRDRDTjtBQ3pDSTtFQUNFLGtDQUFBO0FEMkNOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmltYXJ5LWhlYWRlci9wcmltYXJ5LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LXdlYnNpdGUtY29sb3I6ICMwNzVhYzk7XG4kcHJpbWFyeS10ZXh0OiAjNDQ0NDQ0O1xuXG4kc2Vjb25kYXJ5LWJnOiAjZmNmY2ZjO1xuJHNlY29uZGFyeS1ib3JkZXI6ICNlOWVjZWY7XG5cbi8qIEluZm8gQmFzZWQgKi9cbiRjb2xvci1ub3RpZnk6ICNmZmMxMDc7XG4kY29sb3ItaW5mbzogIzM1YzdkZjtcblxuLyogUHJvcGVydHkgQmFzZWQgKi9cbiRjb2xvci13aGl0ZTogd2hpdGU7XG5cbi8qKiBHcmF5IFNoYWRlcyAqKi9cbiRncmV5LXNoYWRlLTE6ICNmMWYxZjE7XG4kZ3JleS1zaGFkZS0yOiAjZTRlNGU0O1xuJGdyZXktc2hhZGUtMzogI2ZlZmVmZTtcbiIsIi5sb2FkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiA5OTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogOS43cmVtO1xufVxuXG4ucHJpbWFyeS1oZWFkaW5nIHtcbiAgcGFkZGluZzogMnJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAmLXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDJweCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsXG4gICAgMCAxOHB4IDMycHggLTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gIHBhZGRpbmc6IDEuMnJlbSAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG5cbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxufVxuIiwiLyogSW5mbyBCYXNlZCAqL1xuLyogUHJvcGVydHkgQmFzZWQgKi9cbi8qKiBHcmF5IFNoYWRlcyAqKi9cbi5sb2FkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiA5OTtcbn1cbi5sb2FkZXIgaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogOS43cmVtO1xufVxuXG4ucHJpbWFyeS1oZWFkaW5nIHtcbiAgcGFkZGluZzogMnJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuLnByaW1hcnktaGVhZGluZy10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByaW1hcnktYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMnB4IDFweCB0cmFuc3BhcmVudCBpbnNldCwgMCAxOHB4IDMycHggLTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gIHBhZGRpbmc6IDEuMnJlbSAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5wcmltYXJ5LWJ1dHRvbiAuZmEge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLnByaW1hcnktaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnByaW1hcnktaGVhZGVyIC5uYXZiYXItYnJhbmQge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiAjNDQ0NDQ0O1xufVxuLnByaW1hcnktaGVhZGVyIC5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xufVxuLnByaW1hcnktaGVhZGVyIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBjb2xvcjogIzQ0NDQ0NDtcbn1cbi5wcmltYXJ5LWhlYWRlciAuY2F0ZWdvcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnByaW1hcnktaGVhZGVyIC5jYXRlZ29yeS1pdGVtIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ucHJpbWFyeS1oZWFkZXIgLmNhdGVnb3J5IHNwYW4ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucHJpbWFyeS1oZWFkZXIgLmNhdGVnb3J5IDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJpZ2h0OiAwLjFyZW0gc29saWQgI2U5ZWNlZjtcbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy9pbXBvcnRzXCI7XG5cbi5wcmltYXJ5LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICAvL2NvbG9yOiAkY29sb3Itd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQ7XG4gIH1cblxuICAubmF2LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgIC5uYXYtbGluayB7XG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dDtcbiAgICB9XG4gIH1cblxuICAuY2F0ZWdvcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJi1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgQGluY2x1ZGUgdHJ1bmNhdGU7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwLjFyZW0gc29saWQgJHNlY29uZGFyeS1ib3JkZXI7XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gdHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbikge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZsZXgtYWxpZ25tZW50KCRtYWluLWF4aXMsICRjcm9zcy1heGlzKSB7XG4gIGp1c3RpZnktY29udGVudDogJG1haW4tYXhpcztcbiAgYWxpZ24taXRlbXM6ICRjcm9zcy1heGlzO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimaryHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-primary-header',
                templateUrl: './primary-header.component.html',
                styleUrls: ['./primary-header.component.scss']
            }]
    }], function () { return [{ type: src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_2__["ProductApiService"] }, { type: src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/secondary-header/secondary-header.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/secondary-header/secondary-header.component.ts ***!
  \***************************************************************************/
/*! exports provided: SecondaryHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryHeaderComponent", function() { return SecondaryHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_constants_contact_info_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/contact-info.const */ "./src/app/constants/contact-info.const.ts");
/* harmony import */ var src_app_constants_header_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/header.const */ "./src/app/constants/header.const.ts");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/cart.service */ "./src/app/core/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

/** Constants */






function SecondaryHeaderComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cartItemCount);
} }
const _c0 = function (a0) { return [a0]; };
class SecondaryHeaderComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.contactInfo = src_app_constants_contact_info_const__WEBPACK_IMPORTED_MODULE_1__["ContactInfo"];
        this.cartConfig = src_app_constants_header_const__WEBPACK_IMPORTED_MODULE_2__["CartConfig"];
        this.cartItemCount = 0;
    }
    setCartItems() {
        this.cartItemCount = this.cartService.getCartItemsCount();
        this.cartService.CartUpdateSubject.subscribe(cart => {
            this.cartItemCount = cart.count;
        });
    }
    ngOnInit() {
        this.setCartItems();
    }
}
SecondaryHeaderComponent.ɵfac = function SecondaryHeaderComponent_Factory(t) { return new (t || SecondaryHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
SecondaryHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondaryHeaderComponent, selectors: [["app-secondary-header"]], decls: 17, vars: 15, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "secondary-nav"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link"], ["aria-hidden", "true"], ["href", "#", 1, "nav-link", "email"], [1, "nav-link", "cart", 3, "routerLink"], [4, "ngIf"]], template: function SecondaryHeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 9.7rem;\n}\n.primary-heading[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  background-color: #f1f1f1;\n}\n.primary-heading-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0;\n  text-align: center;\n}\n.primary-button[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  padding: 1.2rem 2.5rem;\n  border-radius: 5rem;\n  color: white;\n  margin-top: 1rem;\n  border: 0;\n  font-size: 1.4rem;\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.secondary-nav[_ngcontent-%COMP%] {\n  padding: 0.1rem 1rem;\n  background-color: #075ac9;\n  font-size: 1.6rem;\n}\n.secondary-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding: 0 2rem;\n}\n.secondary-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.secondary-nav[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  position: relative;\n}\n.secondary-nav[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ffc107;\n  height: 1.6rem;\n  width: 1.6rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: white;\n  position: absolute;\n  left: 1.4rem;\n  top: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL19jb21tb24uc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWNvbmRhcnktaGVhZGVyL3NlY29uZGFyeS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zaGl2YW05Ny9ub2RlUHJvamVjdHMvYmlvYnJpeC9iaW9jL2Zyb250ZW5kL2Jpb2Mvc3JjL2FwcC9jb21wb25lbnRzL3NlY29uZGFyeS1oZWFkZXIvc2Vjb25kYXJ5LWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxlQUFBO0FBSUEsbUJBQUE7QUFHQSxrQkFBQTtBQ2JBO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0FDSUY7QURGRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNJSjtBREFBO0VBQ0UsbUJBQUE7QUNHRjtBREFBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FDR0Y7QURGRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0lKO0FEQUE7RUFDRSwyREFBQTtFQUNBLG1LQUFBO0VBRUEsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlEekJZO0VDMEJaLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDRUY7QURBRTtFQUNFLGlCQUFBO0FDRUo7QUMzQ0E7RUFDRSxvQkFBQTtFQUNBLHlCSEhzQjtFR0l0QixpQkFBQTtBRDhDRjtBQzVDRTtFQUNFLGVBQUE7QUQ4Q0o7QUM3Q0k7RUFDRSxZSEVRO0FFNkNkO0FDM0NFO0VBQ0Usa0JBQUE7QUQ2Q0o7QUM1Q0k7RUFDRSxtQkhUUztFR1VULGNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZSGRRO0VHZVIsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRDhDTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2Vjb25kYXJ5LWhlYWRlci9zZWNvbmRhcnktaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktd2Vic2l0ZS1jb2xvcjogIzA3NWFjOTtcbiRwcmltYXJ5LXRleHQ6ICM0NDQ0NDQ7XG5cbiRzZWNvbmRhcnktYmc6ICNmY2ZjZmM7XG4kc2Vjb25kYXJ5LWJvcmRlcjogI2U5ZWNlZjtcblxuLyogSW5mbyBCYXNlZCAqL1xuJGNvbG9yLW5vdGlmeTogI2ZmYzEwNztcbiRjb2xvci1pbmZvOiAjMzVjN2RmO1xuXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuLyoqIEdyYXkgU2hhZGVzICoqL1xuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcbiRncmV5LXNoYWRlLTI6ICNlNGU0ZTQ7XG4kZ3JleS1zaGFkZS0zOiAjZmVmZWZlO1xuIiwiLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA5LjdyZW07XG59XG5cbi5wcmltYXJ5LWhlYWRpbmcge1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICYtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLnByaW1hcnktYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMnB4IDFweCB0cmFuc3BhcmVudCBpbnNldCxcbiAgICAwIDE4cHggMzJweCAtMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSBpbnNldDtcbiAgcGFkZGluZzogMS4ycmVtIDIuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcblxuICAuZmEge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG59XG4iLCIvKiBJbmZvIEJhc2VkICovXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuLyoqIEdyYXkgU2hhZGVzICoqL1xuLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xufVxuLmxvYWRlciBpbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA5LjdyZW07XG59XG5cbi5wcmltYXJ5LWhlYWRpbmcge1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG4ucHJpbWFyeS1oZWFkaW5nLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJpbWFyeS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMDc1YWM5LCAjMzVjN2RmKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDFweCAycHggMXB4IHRyYW5zcGFyZW50IGluc2V0LCAwIDE4cHggMzJweCAtMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSBpbnNldDtcbiAgcGFkZGluZzogMS4ycmVtIDIuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLnByaW1hcnktYnV0dG9uIC5mYSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uc2Vjb25kYXJ5LW5hdiB7XG4gIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc1YWM5O1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cbi5zZWNvbmRhcnktbmF2IC5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cbi5zZWNvbmRhcnktbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2Vjb25kYXJ5LW5hdiAuY2FydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWNvbmRhcnktbmF2IC5jYXJ0IHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xuICBoZWlnaHQ6IDEuNnJlbTtcbiAgd2lkdGg6IDEuNnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMS40cmVtO1xuICB0b3A6IDAuNHJlbTtcbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy9pbXBvcnRzXCI7XG4uc2Vjb25kYXJ5LW5hdiB7XG4gIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS13ZWJzaXRlLWNvbG9yO1xuICBmb250LXNpemU6IDEuNnJlbTtcblxuICAubmF2LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICAubmF2LWxpbmsge1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICB9XG4gIH1cblxuICAuY2FydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHNwYW4ge1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLW5vdGlmeTtcbiAgICAgIGhlaWdodDogMS42cmVtO1xuICAgICAgd2lkdGg6IDEuNnJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDEuNHJlbTtcbiAgICAgIHRvcDogMC40cmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondaryHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-secondary-header',
                templateUrl: './secondary-header.component.html',
                styleUrls: ['./secondary-header.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/constants/api.const.ts":
/*!****************************************!*\
  !*** ./src/app/constants/api.const.ts ***!
  \****************************************/
/*! exports provided: CATEGORY_API, PRODUCT_API, HOMEPAGE_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_API", function() { return CATEGORY_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_API", function() { return PRODUCT_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOMEPAGE_API", function() { return HOMEPAGE_API; });
// Category List API
const CATEGORY_API = 'category/category_list/';
// Product List API
const PRODUCT_API = 'product/product_list/';
// Homepage API
const HOMEPAGE_API = 'homepage/get_homepage';


/***/ }),

/***/ "./src/app/constants/contact-info.const.ts":
/*!*************************************************!*\
  !*** ./src/app/constants/contact-info.const.ts ***!
  \*************************************************/
/*! exports provided: ContactInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfo", function() { return ContactInfo; });
const ContactInfo = {
    phone: {
        text: '+91 9988776655',
        icon: 'fa fa-phone'
    },
    email: {
        text: 'dummyemail@mail.com',
        icon: 'fa fa-envelope'
    }
};


/***/ }),

/***/ "./src/app/constants/header.const.ts":
/*!*******************************************!*\
  !*** ./src/app/constants/header.const.ts ***!
  \*******************************************/
/*! exports provided: CartConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartConfig", function() { return CartConfig; });
const CartConfig = {
    icon: 'fa fa-shopping-cart',
    link: '/view-cart'
};


/***/ }),

/***/ "./src/app/constants/products.const.ts":
/*!*********************************************!*\
  !*** ./src/app/constants/products.const.ts ***!
  \*********************************************/
/*! exports provided: DefaultCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultCategory", function() { return DefaultCategory; });
const DefaultCategory = {
    categoryName: 'All',
    id: 'all',
};


/***/ }),

/***/ "./src/app/core/http/homepage-api.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/http/homepage-api.service.ts ***!
  \***************************************************/
/*! exports provided: HomepageApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageApiService", function() { return HomepageApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/api.const */ "./src/app/constants/api.const.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/core/http/http-error-handler.service.ts");


/** Constants */





class HomepageApiService {
    constructor(http, httpErrorHandlerService) {
        this.http = http;
        this.httpErrorHandlerService = httpErrorHandlerService;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL;
    }
    getHomePage() {
        const url = `${this.BASE_URL}${src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_2__["HOMEPAGE_API"]}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.httpErrorHandlerService.handleErr));
    }
}
HomepageApiService.ɵfac = function HomepageApiService_Factory(t) { return new (t || HomepageApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"])); };
HomepageApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomepageApiService, factory: HomepageApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/http/http-error-handler.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/http/http-error-handler.service.ts ***!
  \*********************************************************/
/*! exports provided: HttpErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandlerService", function() { return HttpErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class HttpErrorHandlerService {
    constructor() {
    }
    handleErr(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
}
HttpErrorHandlerService.ɵfac = function HttpErrorHandlerService_Factory(t) { return new (t || HttpErrorHandlerService)(); };
HttpErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpErrorHandlerService, factory: HttpErrorHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/http/product-api.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/http/product-api.service.ts ***!
  \**************************************************/
/*! exports provided: ProductApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductApiService", function() { return ProductApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/api.const */ "./src/app/constants/api.const.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/core/http/http-error-handler.service.ts");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utility.service */ "./src/app/core/services/utility.service.ts");


/** Constants */






class ProductApiService {
    constructor(http, httpErrorHandlerService, utilityService) {
        this.http = http;
        this.httpErrorHandlerService = httpErrorHandlerService;
        this.utilityService = utilityService;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL;
    }
    getCategoryList() {
        const url = `${this.BASE_URL}${src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_2__["CATEGORY_API"]}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.httpErrorHandlerService.handleErr));
    }
    getProductList(paramsData) {
        let params = '';
        if (paramsData) {
            params = this.utilityService.setQueryParams(paramsData);
        }
        const url = `${this.BASE_URL}${src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_2__["PRODUCT_API"]}${params}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.httpErrorHandlerService.handleErr));
    }
}
ProductApiService.ɵfac = function ProductApiService_Factory(t) { return new (t || ProductApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"])); };
ProductApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductApiService, factory: ProductApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"] }, { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/cart.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/cart.service.ts ***!
  \***********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class CartService {
    constructor() {
        this.CartUpdateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    addToCart(product) {
        const saved = this.saveCart(product);
        if (saved) {
            this.updateCartSubscriptions();
            return product;
        }
        return false;
    }
    removeFromCart(product) {
        const cartItems = this.getCartItems();
        const itemIndex = cartItems.findIndex(item => {
            return item.product_id === product.product_id;
        });
        if (itemIndex !== -1) {
            cartItems.splice(itemIndex, 1);
            this.updateSavedCart(cartItems);
            this.updateCartSubscriptions();
        }
    }
    updateCartSubscriptions() {
        const cartItems = this.getCartItems();
        if (cartItems) {
            this.CartUpdateSubject.next({ count: cartItems.length, items: cartItems });
        }
        else {
            this.CartUpdateSubject.next({ count: 0, items: null });
        }
    }
    /**
     * Return list of cart items;
     */
    getCartItems() {
        const savedItems = localStorage.getItem('cart');
        try {
            if (savedItems) {
                return JSON.parse(savedItems);
            }
            else {
                return null;
            }
        }
        catch (err) {
            localStorage.removeItem('cart');
            return null;
        }
    }
    /**
     * Returns hashmap of cart items
     */
    getCartHashMap() {
        const cartHashMap = {};
        const cartItems = this.getCartItems();
        if (!cartItems) {
            return {};
        }
        cartItems.forEach(item => {
            cartHashMap[item.product_id] = item;
        });
        return cartHashMap;
    }
    /**
     * Return total cart items
     */
    getCartItemsCount() {
        console.log('getting cart count');
        const cartItems = this.getCartItems();
        if (cartItems) {
            return cartItems.length;
        }
    }
    /**
     * Save cart to storage
     */
    saveCart(product) {
        const cartItems = this.getCartItems() || [];
        if (cartItems.length) {
            /** Find Product Index */
            const itemIndex = cartItems.findIndex(item => {
                return item.product_id === product.product_id;
            });
            /** Check if product quantity has been updated  */
            if (itemIndex === -1) {
                cartItems.push(product);
            }
            else if (product.quantity !== cartItems[itemIndex].quantity) {
                cartItems[itemIndex] = product;
            }
        }
        else {
            cartItems.push(product);
        }
        return this.updateSavedCart(cartItems);
    }
    /** Update Cart in local storage */
    updateSavedCart(cartItems) {
        try {
            if (cartItems.length) {
                localStorage.removeItem('cart');
                localStorage.setItem('cart', JSON.stringify(cartItems));
            }
            else {
                localStorage.removeItem('cart');
            }
            return true;
        }
        catch (err) {
            localStorage.removeItem('cart');
            return false;
        }
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DataService {
    constructor() {
    }
    set categoryList(data) {
        this._categoryList = data;
    }
    get categoryList() {
        return this._categoryList;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/services/utility.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/utility.service.ts ***!
  \**************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class UtilityService {
    constructor() {
        this.showLoader = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
    }
    setQueryParams(paramsData) {
        let params = '';
        paramsData.forEach(data => {
            params = params + `?${data.name}=${data.value}`;
        });
        return params;
    }
}
UtilityService.ɵfac = function UtilityService_Factory(t) { return new (t || UtilityService)(); };
UtilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilityService, factory: UtilityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/utility.service */ "./src/app/core/services/utility.service.ts");
/* harmony import */ var src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/secondary-header/secondary-header.component */ "./src/app/components/secondary-header/secondary-header.component.ts");
/* harmony import */ var src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/primary-header/primary-header.component */ "./src/app/components/primary-header/primary-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const _c0 = function (a0) { return { "loader": a0 }; };
function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.isLoading));
} }
class HomeComponent {
    constructor(utilityService, changeDetection) {
        this.utilityService = utilityService;
        this.changeDetection = changeDetection;
        this.isLoading = false;
    }
    ngOnInit() {
        this.utilityService.showLoader.subscribe({
            next: (status) => {
                this.isLoading = status;
                this.changeDetection.detectChanges();
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 1, consts: [[1, "navbar-container"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["src", "assets/images/loader.gif", "alt", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-secondary-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-primary-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_2__["SecondaryHeaderComponent"], src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_3__["PrimaryHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".navbar-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDtcbn1cbiIsIi5uYXZiYXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/secondary-header/secondary-header.component */ "./src/app/components/secondary-header/secondary-header.component.ts");
/* harmony import */ var src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/primary-header/primary-header.component */ "./src/app/components/primary-header/primary-header.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/modules/home/homepage/homepage.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.component */ "./src/app/modules/home/products/products.component.ts");










const routes = [
    {
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
            { path: 'view-cart', loadChildren: () => __webpack_require__.e(/*! import() | src-app-modules-cart-cart-module */ "src-app-modules-cart-cart-module").then(__webpack_require__.bind(null, /*! src/app/modules/cart/cart.module */ "./src/app/modules/cart/cart.module.ts")).then(m => m.CartModule) },
            { path: 'products/:categoryId', component: _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"] }
        ]
    }
];
class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_4__["SecondaryHeaderComponent"],
        src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_5__["PrimaryHeaderComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_4__["SecondaryHeaderComponent"],
                    src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_5__["PrimaryHeaderComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                    _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/home/homepage/homepage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/homepage/homepage.component.ts ***!
  \*************************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_http_homepage_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/http/homepage-api.service */ "./src/app/core/http/homepage-api.service.ts");
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/cart.service */ "./src/app/core/services/cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function (a0) { return { "active": a0 }; };
function HomepageComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r9 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", page_r8.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomepageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomepageComponent_div_2_div_1_Template, 2, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.homepage.pagerProducts);
} }
function HomepageComponent_div_33_div_1_div_2_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_div_33_div_1_div_2_button_10_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.addToCart(product_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add To Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/view-cart"]; };
function HomepageComponent_div_33_div_1_div_2_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Go To Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function HomepageComponent_div_33_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomepageComponent_div_33_div_1_div_2_button_10_Template, 3, 0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomepageComponent_div_33_div_1_div_2_a_11_Template, 3, 2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r14.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r14.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r14.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !product_r14.addedToCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r14.addedToCart);
} }
function HomepageComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomepageComponent_div_33_div_1_div_2_Template, 12, 5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recentProduct_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r12 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", recentProduct_r11);
} }
function HomepageComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomepageComponent_div_33_div_1_Template, 3, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.recentProducts);
} }
function HomepageComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const testimony_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, i_r22 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", testimony_r21.testimony, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", testimony_r21.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](testimony_r21.customer_name);
} }
function HomepageComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomepageComponent_div_48_div_1_Template, 8, 6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.homepage.testimonies);
} }
class HomepageComponent {
    constructor(homepageApiService, cartService) {
        this.homepageApiService = homepageApiService;
        this.cartService = cartService;
        this.recentProducts = [];
    }
    /**
     * If Product are added to cart then mark "addedToCart" as true
     */
    syncProductsWithCart(products) {
        console.log(products);
        const cartHashMap = this.cartService.getCartHashMap();
        console.log(cartHashMap);
        products.forEach((product) => {
            if (cartHashMap[product.product_id]) {
                product.addedToCart = true;
            }
        });
        return products;
    }
    addToCart(product) {
        if (product.quantity) {
            product.quantity = product.quantity + 1;
            product.total = product.total + product.price;
        }
        else {
            product.quantity = 1;
            product.total = product.price;
        }
        const addedItem = this.cartService.addToCart(product);
        if (addedItem) {
            addedItem.addedToCart = true;
        }
    }
    ngOnInit() {
        this.homepageApiService.getHomePage().subscribe(res => {
            console.log('data is', res);
            this.homepage = res;
            if (res) {
                const recents = this.syncProductsWithCart(res.recentProducts);
                for (let i = 0; i < recents.length; i = i + 4) {
                    this.recentProducts.push(res.recentProducts.slice(i, i + 4));
                }
                console.log('recent products are ', this.recentProducts);
            }
        });
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_homepage_api_service__WEBPACK_IMPORTED_MODULE_1__["HomepageApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 57, vars: 3, consts: [[1, "main-container"], ["id", "pagerProducts", "data-ride", "carousel", 1, "carousel", "slide"], ["class", "carousel-inner", 4, "ngIf"], ["href", "#pagerProducts", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#pagerProducts", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "section-header"], [1, "product-type"], [1, "product-type__item", "dry-skin"], [1, "product-type__item--item-hover"], [1, "product-type__item", "oily-skin"], [1, "product-type__item", "hair-care"], [1, "product-type__item", "sun-protection"], [1, "recent-products"], [1, "section-header__heading"], [1, "section-header__underline"], ["id", "recentProducts", "data-ride", "carousel", "data-interval", "0", 1, "carousel", "slide"], ["href", "#recentProducts", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#recentProducts", "role", "button", "data-slide", "next", 1, "carousel-control-next"], [1, "testimonies"], ["id", "testimonies", "data-ride", "carousel", "data-interval", "0", 1, "carousel", "slide"], ["href", "#testimonies", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#testimonies", "role", "button", "data-slide", "next", 1, "carousel-control-next"], [1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "carousel-item", 3, "ngClass"], ["alt", "First slide", 1, "d-block", "w-100", 3, "src"], [1, "recent-products__item", "w-100"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "shadow-0"], [1, "image"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-footer"], [1, "product-name"], [1, "product-price"], [1, "fa", "fa-inr"], ["type", "button", "class", "btn add-to-cart", 3, "click", 4, "ngIf"], ["class", "btn add-to-cart", 3, "routerLink", 4, "ngIf"], ["type", "button", 1, "btn", "add-to-cart", 3, "click"], [1, "fa", "fa-shopping-cart"], [1, "btn", "add-to-cart", 3, "routerLink"], [1, "testimonies__item"], [1, "testimony"], [1, "customer"], ["alt", "First slide", "width", "50", "height", "50", 3, "src"], [1, "customer__name"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomepageComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ALL TYPE OF BODY CARE PRODUCTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Dry skin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Oily skin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Hair care ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Sun protection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "RECENT PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HomepageComponent_div_33_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, HomepageComponent_div_48_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.homepage == null ? null : ctx.homepage.pagerProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recentProducts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.homepage == null ? null : ctx.homepage.testimonies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 9.7rem;\n}\n.primary-heading[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  background-color: #f1f1f1;\n}\n.primary-heading-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0;\n  text-align: center;\n}\n.primary-button[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  padding: 1.2rem 2.5rem;\n  border-radius: 5rem;\n  color: white;\n  margin-top: 1rem;\n  border: 0;\n  font-size: 1.4rem;\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 35px;\n}\n.section-header__heading[_ngcontent-%COMP%] {\n  line-height: 36px;\n}\n.section-header__underline[_ngcontent-%COMP%] {\n  height: 3px;\n  background-color: black;\n  width: 10%;\n  padding: 0;\n  margin: 0 0 35px 0;\n}\n.product-type[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.product-type__item[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  background: black center;\n  background-size: cover;\n}\n.product-type__item[_ngcontent-%COMP%]:hover   .product-type__item--item-hover[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.product-type__item--item-hover[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  visibility: hidden;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: #ffffff;\n}\n.recent-products[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  padding-bottom: 20px;\n}\n.recent-products__item[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.recent-products[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .recent-products[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n  -webkit-filter: brightness(0);\n          filter: brightness(0);\n}\n.testimonies[_ngcontent-%COMP%] {\n  background-color: #ffb6c1;\n}\n.testimonies__item[_ngcontent-%COMP%] {\n  padding: 50px 100px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.testimonies__item[_ngcontent-%COMP%]   .testimony[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  min-height: 150px;\n  border: 1px solid white;\n  margin-bottom: 20px;\n  padding: 25px;\n}\n.testimonies__item[_ngcontent-%COMP%]   .customer[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border: 1px solid white;\n}\n.testimonies__item[_ngcontent-%COMP%]   .customer__name[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n.dry-skin[_ngcontent-%COMP%] {\n  background-image: url(\"https://biobrix-files.s3.ap-south-1.amazonaws.com/images/dry-skin-tips.png\");\n}\n.oily-skin[_ngcontent-%COMP%] {\n  background-image: url(\"https://biobrix-files.s3.ap-south-1.amazonaws.com/images/oily_face.webp\");\n}\n.hair-care[_ngcontent-%COMP%] {\n  background-image: url(\"https://biobrix-files.s3.ap-south-1.amazonaws.com/images/hair_care.jpg\");\n}\n.sun-protection[_ngcontent-%COMP%] {\n  background-image: url(\"https://biobrix-files.s3.ap-south-1.amazonaws.com/images/sun-protection.jpg\");\n}\n.card[_ngcontent-%COMP%] {\n  width: 25rem;\n  margin-bottom: 2rem;\n  position: relative;\n}\n.image[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: capitalize;\n  background-color: white;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.card-footer[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #00889f;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n}\n.card-footer[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-weight: bold;\n  font-size: 2rem;\n}\n.card-footer[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 0.4rem 1rem -1rem rgba(0, 0, 0, 0.2), 0 0.4rem 0.6rem 0.1rem rgba(0, 0, 0, 0.05), 0 0.1rem 0.2rem 0.1rem transparent inset, 0 1.8rem 3.2rem -0.2rem rgba(255, 255, 255, 0.1) inset;\n  padding: 1.2rem 2.5rem;\n  border-radius: 5rem;\n  color: white;\n  margin-top: 1rem;\n  border: 0;\n  font-size: 1.4rem;\n}\n.card-footer[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL19jb21tb24uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc2hpdmFtOTcvbm9kZVByb2plY3RzL2Jpb2JyaXgvYmlvYy9mcm9udGVuZC9iaW9jL3NyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc2hpdmFtOTcvbm9kZVByb2plY3RzL2Jpb2JyaXgvYmlvYy9mcm9udGVuZC9iaW9jL3NyYy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLGVBQUE7QUFJQSxtQkFBQTtBQUdBLGtCQUFBO0FDYkE7RUFDRSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7QUNJRjtBREZFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0lKO0FEQUE7RUFDRSxtQkFBQTtBQ0dGO0FEQUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNHRjtBREZFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSUo7QURBQTtFQUNFLDJEQUFBO0VBQ0EsbUtBQUE7RUFFQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUR6Qlk7RUMwQlosZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNFRjtBREFFO0VBQ0UsaUJBQUE7QUNFSjtBQzFDQTtFQUNFLGlCQUFBO0VDSUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJESmM7RUNJZCw2QkRKYztVQ0lkLHNCREpjO0VDUWQsd0JEUHdCO1VDT3hCLHVCRFB3QjtFQ1F4Qix5QkRSZ0M7VUNRaEMsbUJEUmdDO0VBQ2hDLGVBQUE7QUQrQ0Y7QUM3Q0U7RUFDRSxpQkFBQTtBRCtDSjtBQzVDRTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUQ4Q0o7QUMxQ0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQ2hCQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkRnQmM7RUNoQmQsNkJEZ0JjO1VDaEJkLG1CRGdCYztFQ1pkLDZCRGF3QjtFQ1p4Qix5QkRZc0M7VUNadEMsbUJEWXNDO0FEK0N4QztBQzdDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBRCtDSjtBQzVDTTtFQUNFLG1CQUFBO0FEOENSO0FDMUNJO0VDaENGLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCRGdDa0I7RUNoQ2xCLDZCRGdDa0I7VUNoQ2xCLG1CRGdDa0I7RUM1QmxCLHdCRDZCNEI7VUM3QjVCLHVCRDZCNEI7RUM1QjVCLHlCRDRCb0M7VUM1QnBDLG1CRDRCb0M7RUFDaEMsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBRDhDTjtBQ3pDQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUQ0Q0Y7QUMxQ0U7RUFDRSxlQUFBO0VDakRGLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCRGlEZ0I7RUNqRGhCLDZCRGlEZ0I7VUNqRGhCLG1CRGlEZ0I7RUM3Q2hCLDZCRDhDMEI7RUM3QzFCLHlCRDZDd0M7VUM3Q3hDLG1CRDZDd0M7QUQ4QzFDO0FDM0NFO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBRDZDSjtBQ3ZDQTtFQUNFLHlCQUFBO0FEMENGO0FDeENFO0VBQ0UsbUJBQUE7RUNqRUYsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJEaUVnQjtFQ2pFaEIsNkJEaUVnQjtVQ2pFaEIsc0JEaUVnQjtFQzdEaEIsd0JEOEQwQjtVQzlEMUIsdUJEOEQwQjtFQzdEMUIseUJENkRrQztVQzdEbEMsbUJENkRrQztBRDRDcEM7QUMxQ0k7RUNyRUYsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJEcUVrQjtFQ3JFbEIsNkJEcUVrQjtVQ3JFbEIsbUJEcUVrQjtFQ2pFbEIsd0JEa0U0QjtVQ2xFNUIsdUJEa0U0QjtFQ2pFNUIseUJEaUVvQztVQ2pFcEMsbUJEaUVvQztFQUNoQyxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FEOENOO0FDM0NJO0VDOUVGLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCRDhFa0I7RUM5RWxCLDZCRDhFa0I7VUM5RWxCLG1CRDhFa0I7RUMxRWxCLHdCRDJFNEI7VUMzRTVCLHVCRDJFNEI7RUMxRTVCLHlCRDBFb0M7VUMxRXBDLG1CRDBFb0M7RUFDaEMsdUJBQUE7QUQrQ047QUM3Q007RUFDRSxlQUFBO0FEK0NSO0FDeENBO0VBQ0UsbUdBQUE7QUQyQ0Y7QUN4Q0E7RUFDRSxnR0FBQTtBRDJDRjtBQ3hDQTtFQUNFLCtGQUFBO0FEMkNGO0FDeENBO0VBQ0Usb0dBQUE7QUQyQ0Y7QUN4Q0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRDJDRjtBQ3hDQTtFQUNFLGtCQUFBO0FEMkNGO0FDeENBLHFCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJIckhZO0VHc0haLGdCQUFBO0VBQ0EsbUJBQUE7QUQyQ0Y7QUN6Q0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRDJDSjtBQ3hDRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEMENKO0FDdkNFO0VBQ0UsMkRBQUE7RUFDQSxnTUFBQTtFQUVBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZSDNJVTtFRzRJVixnQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBRHdDSjtBQ3RDSTtFQUNFLGlCQUFBO0FEd0NOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktd2Vic2l0ZS1jb2xvcjogIzA3NWFjOTtcbiRwcmltYXJ5LXRleHQ6ICM0NDQ0NDQ7XG5cbiRzZWNvbmRhcnktYmc6ICNmY2ZjZmM7XG4kc2Vjb25kYXJ5LWJvcmRlcjogI2U5ZWNlZjtcblxuLyogSW5mbyBCYXNlZCAqL1xuJGNvbG9yLW5vdGlmeTogI2ZmYzEwNztcbiRjb2xvci1pbmZvOiAjMzVjN2RmO1xuXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuLyoqIEdyYXkgU2hhZGVzICoqL1xuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcbiRncmV5LXNoYWRlLTI6ICNlNGU0ZTQ7XG4kZ3JleS1zaGFkZS0zOiAjZmVmZWZlO1xuIiwiLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA5LjdyZW07XG59XG5cbi5wcmltYXJ5LWhlYWRpbmcge1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICYtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLnByaW1hcnktYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMnB4IDFweCB0cmFuc3BhcmVudCBpbnNldCxcbiAgICAwIDE4cHggMzJweCAtMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSBpbnNldDtcbiAgcGFkZGluZzogMS4ycmVtIDIuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcblxuICAuZmEge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG59XG4iLCIvKiBJbmZvIEJhc2VkICovXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuLyoqIEdyYXkgU2hhZGVzICoqL1xuLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xufVxuLmxvYWRlciBpbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA5LjdyZW07XG59XG5cbi5wcmltYXJ5LWhlYWRpbmcge1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG4ucHJpbWFyeS1oZWFkaW5nLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJpbWFyeS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMDc1YWM5LCAjMzVjN2RmKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDFweCAycHggMXB4IHRyYW5zcGFyZW50IGluc2V0LCAwIDE4cHggMzJweCAtMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSBpbnNldDtcbiAgcGFkZGluZzogMS4ycmVtIDIuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLnByaW1hcnktYnV0dG9uIC5mYSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbi5zZWN0aW9uLWhlYWRlcl9faGVhZGluZyB7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xufVxuLnNlY3Rpb24taGVhZGVyX191bmRlcmxpbmUge1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAwIDM1cHggMDtcbn1cblxuLnByb2R1Y3QtdHlwZSB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9kdWN0LXR5cGVfX2l0ZW0ge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5wcm9kdWN0LXR5cGVfX2l0ZW06aG92ZXIgLnByb2R1Y3QtdHlwZV9faXRlbS0taXRlbS1ob3ZlciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ucHJvZHVjdC10eXBlX19pdGVtLS1pdGVtLWhvdmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5yZWNlbnQtcHJvZHVjdHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5yZWNlbnQtcHJvZHVjdHNfX2l0ZW0ge1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlY2VudC1wcm9kdWN0cyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LCAucmVjZW50LXByb2R1Y3RzIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCk7XG59XG5cbi50ZXN0aW1vbmllcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI2YzE7XG59XG4udGVzdGltb25pZXNfX2l0ZW0ge1xuICBwYWRkaW5nOiA1MHB4IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50ZXN0aW1vbmllc19faXRlbSAudGVzdGltb255IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMjVweDtcbn1cbi50ZXN0aW1vbmllc19faXRlbSAuY3VzdG9tZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG4udGVzdGltb25pZXNfX2l0ZW0gLmN1c3RvbWVyX19uYW1lIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4uZHJ5LXNraW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2Jpb2JyaXgtZmlsZXMuczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltYWdlcy9kcnktc2tpbi10aXBzLnBuZ1wiKTtcbn1cblxuLm9pbHktc2tpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYmlvYnJpeC1maWxlcy5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1hZ2VzL29pbHlfZmFjZS53ZWJwXCIpO1xufVxuXG4uaGFpci1jYXJlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9iaW9icml4LWZpbGVzLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWFnZXMvaGFpcl9jYXJlLmpwZ1wiKTtcbn1cblxuLnN1bi1wcm90ZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9iaW9icml4LWZpbGVzLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWFnZXMvc3VuLXByb3RlY3Rpb24uanBnXCIpO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAyNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qKiBQcm9kdWN0IERldGFpbHMgKi9cbi5jYXJkLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmNhcmQtZm9vdGVyIC5wcm9kdWN0LW5hbWUge1xuICBjb2xvcjogIzAwODg5ZjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG4uY2FyZC1mb290ZXIgLnByb2R1Y3QtcHJpY2Uge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLmNhcmQtZm9vdGVyIC5hZGQtdG8tY2FydCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICBib3gtc2hhZG93OiAwIDAuNHJlbSAxcmVtIC0xcmVtIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwLjRyZW0gMC42cmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDAuMXJlbSAwLjJyZW0gMC4xcmVtIHRyYW5zcGFyZW50IGluc2V0LCAwIDEuOHJlbSAzLjJyZW0gLTAuMnJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gIHBhZGRpbmc6IDEuMnJlbSAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5jYXJkLWZvb3RlciAuYWRkLXRvLWNhcnQgLmZhIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59IiwiQGltcG9ydCBcInNyYy9zdHlsZXMvaW1wb3J0c1wiO1xuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgQGluY2x1ZGUgZmxleChjb2x1bW4pO1xuICBAaW5jbHVkZSBmbGV4LWFsaWdubWVudChjZW50ZXIsIGNlbnRlcik7XG4gIGZvbnQtc2l6ZTogMzVweDtcblxuICAmX19oZWFkaW5nIHtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgfVxuXG4gICZfX3VuZGVybGluZSB7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCAwIDM1cHggMDtcbiAgfVxufVxuXG4ucHJvZHVjdC10eXBlIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgQGluY2x1ZGUgZmxleC1hbGlnbm1lbnQoc3BhY2UtYXJvdW5kLCBjZW50ZXIpO1xuXG4gICZfX2l0ZW0ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6IGJsYWNrIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAucHJvZHVjdC10eXBlX19pdGVtLS1pdGVtLWhvdmVyIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1pdGVtLWhvdmVyIHtcbiAgICAgIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgICAgIEBpbmNsdWRlIGZsZXgtYWxpZ25tZW50KGNlbnRlciwgY2VudGVyKTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuXG4ucmVjZW50LXByb2R1Y3RzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgJl9faXRlbSB7XG4gICAgcGFkZGluZzogMCA1MHB4O1xuICAgIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgICBAaW5jbHVkZSBmbGV4LWFsaWdubWVudChzcGFjZS1hcm91bmQsIGNlbnRlcik7XG4gIH1cblxuICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCk7XG4gIH1cblxuXG59XG5cbi50ZXN0aW1vbmllcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI2YzE7XG5cbiAgJl9faXRlbSB7XG4gICAgcGFkZGluZzogNTBweCAxMDBweDtcbiAgICBAaW5jbHVkZSBmbGV4KGNvbHVtbik7XG4gICAgQGluY2x1ZGUgZmxleC1hbGlnbm1lbnQoY2VudGVyLCBjZW50ZXIpO1xuXG4gICAgLnRlc3RpbW9ueSB7XG4gICAgICBAaW5jbHVkZSBmbGV4KHJvdyk7XG4gICAgICBAaW5jbHVkZSBmbGV4LWFsaWdubWVudChjZW50ZXIsIGNlbnRlcik7XG4gICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgfVxuXG4gICAgLmN1c3RvbWVyIHtcbiAgICAgIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgICAgIEBpbmNsdWRlIGZsZXgtYWxpZ25tZW50KGNlbnRlciwgY2VudGVyKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuXG4gICAgICAmX19uYW1lIHtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi5kcnktc2tpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYmlvYnJpeC1maWxlcy5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1hZ2VzL2RyeS1za2luLXRpcHMucG5nXCIpO1xufVxuXG4ub2lseS1za2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9iaW9icml4LWZpbGVzLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWFnZXMvb2lseV9mYWNlLndlYnBcIik7XG59XG5cbi5oYWlyLWNhcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2Jpb2JyaXgtZmlsZXMuczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltYWdlcy9oYWlyX2NhcmUuanBnXCIpO1xufVxuXG4uc3VuLXByb3RlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2Jpb2JyaXgtZmlsZXMuczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltYWdlcy9zdW4tcHJvdGVjdGlvbi5qcGdcIik7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyoqIFByb2R1Y3QgRGV0YWlscyAqL1xuLmNhcmQtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gIC5wcm9kdWN0LW5hbWUge1xuICAgIGNvbG9yOiAjMDA4ODlmO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cblxuICAucHJvZHVjdC1wcmljZSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICAuYWRkLXRvLWNhcnQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICAgIGJveC1zaGFkb3c6IDAgMC40cmVtIDFyZW0gLTFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAuNHJlbSAwLjZyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC4wNSksXG4gICAgMCAwLjFyZW0gMC4ycmVtIDAuMXJlbSB0cmFuc3BhcmVudCBpbnNldCwgMCAxLjhyZW0gMy4ycmVtIC0wLjJyZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICAgIHBhZGRpbmc6IDEuMnJlbSAyLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuXG4gICAgLmZhIHtcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIHRydW5jYXRlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb24pIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmbGV4LWFsaWdubWVudCgkbWFpbi1heGlzLCAkY3Jvc3MtYXhpcykge1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRtYWluLWF4aXM7XG4gIGFsaWduLWl0ZW1zOiAkY3Jvc3MtYXhpcztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss']
            }]
    }], function () { return [{ type: _core_http_homepage_api_service__WEBPACK_IMPORTED_MODULE_1__["HomepageApiService"] }, { type: _core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/products/products.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/products/products.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/products.const */ "./src/app/constants/products.const.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/cart.service */ "./src/app/core/services/cart.service.ts");
/* harmony import */ var src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/http/product-api.service */ "./src/app/core/http/product-api.service.ts");
/* harmony import */ var src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/utility.service */ "./src/app/core/services/utility.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = function (a0) { return { "active": a0 }; };
function ProductsComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_li_10_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const category_r25 = ctx.$implicit; const i_r26 = ctx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onCategoryButtonClick(category_r25.id, i_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r26 === ctx_r23.selectedCategoryIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r25.categoryName, " ");
} }
function ProductsComponent_div_12_div_4_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_div_12_div_4_button_10_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const product_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.addToCart(product_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add To Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/view-cart"]; };
function ProductsComponent_div_12_div_4_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Go To Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function ProductsComponent_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const product_r31 = ctx.$implicit;
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
} }
function ProductsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsComponent_div_12_div_4_Template, 12, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r29.category_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r29.product_list);
} }
class ProductsComponent {
    constructor(route, router, dataService, cartService, productService, utilityService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.cartService = cartService;
        this.productService = productService;
        this.utilityService = utilityService;
    }
    getCategoryList() {
        this.productService.getCategoryList()
            .subscribe({
            next: (data) => {
                this.categoryList = data;
                this.dataService.categoryList = data;
                this.categoryList.unshift(src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__["DefaultCategory"]);
                this.setActiveCategory();
            }
        });
    }
    getProductList(categoryId) {
        let params;
        if (categoryId && categoryId !== src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__["DefaultCategory"].id) {
            params = [{ name: 'categoryId', value: categoryId }];
        }
        this.utilityService.showLoader.next(true);
        this.productService.getProductList(params).subscribe({
            next: (data) => {
                this.productList = Array.isArray(data) ? data : [data];
                this.productList = this.syncProductsWithCart(this.productList);
                this.utilityService.showLoader.next(false);
            }
        });
    }
    /**
     * If Product are added to cart then mark "addedToCart" as true
     */
    syncProductsWithCart(categoryWiseProducts) {
        console.log(categoryWiseProducts);
        const cartHashMap = this.cartService.getCartHashMap();
        console.log(cartHashMap);
        categoryWiseProducts.forEach(category => {
            category.product_list.forEach((product) => {
                if (cartHashMap[product.product_id]) {
                    product.addedToCart = true;
                }
            });
        });
        return this.productList;
    }
    addToCart(product) {
        if (product.quantity) {
            product.quantity = product.quantity + 1;
            product.total = product.total + product.price;
        }
        else {
            product.quantity = 1;
            product.total = product.price;
        }
        const addedItem = this.cartService.addToCart(product);
        if (addedItem) {
            addedItem.addedToCart = true;
        }
    }
    /** Set Active category by finding its index in category list */
    setActiveCategory() {
        if (!this.categoryList || !this.categoryList.length) {
            return;
        }
        this.selectedCategoryIndex = this.categoryList.findIndex((category) => category.id === this.categoryId);
    }
    /**
     * @param categoryId
     * On Category click just change the route and everything will be handled itself on activated route subscription
     */
    onCategoryButtonClick(categoryId, selectedCategoryIndex) {
        this.selectedCategoryIndex = selectedCategoryIndex;
        this.router.navigate(['/products', categoryId]);
    }
    handleParamsChange(params) {
        if (!params.categoryId) {
            return;
        }
        this.categoryId = params.categoryId;
        this.getProductList(params.categoryId);
        this.setActiveCategory();
    }
    ngOnInit() {
        this.getCategoryList();
        this.route.params.subscribe(params => {
            this.handleParamsChange(params);
        });
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_5__["ProductApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 13, vars: 2, consts: [[1, "main-container"], [1, "primary-heading"], [1, "primary-heading-text"], [1, "product-filter"], [1, "heading"], ["role", "button", 3, "click", 4, "ngFor", "ngForOf"], [1, "product-list"], ["class", "row category", 4, "ngFor", "ngForOf"], ["role", "button", 3, "click"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"], [1, "row", "category"], [1, "col-md-12", "name"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "shadow-0"], [1, "image"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-footer"], [1, "product-name"], [1, "product-price"], [1, "fa", "fa-inr"], ["type", "button", "class", "btn primary-button", 3, "click", 4, "ngIf"], ["class", "btn primary-button", 3, "routerLink", 4, "ngIf"], ["type", "button", 1, "btn", "primary-button", 3, "click"], [1, "fa", "fa-shopping-cart"], [1, "btn", "primary-button", 3, "routerLink"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 9.7rem;\n}\n.primary-heading[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  background-color: #f1f1f1;\n}\n.primary-heading-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0;\n  text-align: center;\n}\n.primary-button[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  padding: 1.2rem 2.5rem;\n  border-radius: 5rem;\n  color: white;\n  margin-top: 1rem;\n  border: 0;\n  font-size: 1.4rem;\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n\n.product-filter[_ngcontent-%COMP%] {\n  position: fixed;\n  background: #fcfcfc;\n  height: 100vh;\n  width: 25rem;\n  overflow: auto;\n  padding: 2rem;\n  \n}\n.product-filter[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  padding: 1.8rem 3rem;\n  background-color: #075ac9;\n  color: white;\n  border-radius: 6rem;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 1.2rem;\n  margin-top: 2rem;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #35c7df;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1rem 3rem;\n  border-bottom: 0.1rem dashed #e4e4e4;\n  list-style: none;\n  cursor: pointer;\n  position: relative;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0.7rem;\n  height: 0.7rem;\n  border-radius: 100%;\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 2rem;\n  background-color: #35c7df;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  border: 0;\n}\n.product-filter[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #444444;\n  text-transform: capitalize;\n}\n.product-list[_ngcontent-%COMP%] {\n  width: calc(100% - 25rem);\n  margin-left: 25rem;\n  padding: 2rem;\n  \n  \n}\n.product-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 25rem;\n  margin-bottom: 2rem;\n  position: relative;\n}\n.product-list[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  position: relative;\n}\n.product-list[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  margin-bottom: 1.5rem;\n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.product-list[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: capitalize;\n  background-color: white;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.product-list[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #00c5e6;\n  margin-top: 1rem;\n  font-size: 1.6rem;\n}\n.product-list[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3NoaXZhbTk3L25vZGVQcm9qZWN0cy9iaW9icml4L2Jpb2MvZnJvbnRlbmQvYmlvYy9zcmMvc3R5bGVzL19jb21tb24uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc2hpdmFtOTcvbm9kZVByb2plY3RzL2Jpb2JyaXgvYmlvYy9mcm9udGVuZC9iaW9jL3NyYy9hcHAvbW9kdWxlcy9ob21lL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLGVBQUE7QUFJQSxtQkFBQTtBQUdBLGtCQUFBO0FDYkE7RUFDRSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7QUNJRjtBREZFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0lKO0FEQUE7RUFDRSxtQkFBQTtBQ0dGO0FEQUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNHRjtBREZFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSUo7QURBQTtFQUNFLDJEQUFBO0VBQ0EsbUtBQUE7RUFFQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUR6Qlk7RUMwQlosZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNFRjtBREFFO0VBQ0UsaUJBQUE7QUNFSjtBQzFDQSw2QkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLG1CSEZhO0VHR2IsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQVNBLHNCQUFBO0FEcUNGO0FDNUNFO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRDhDSjtBQzFDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUQ0Q0o7QUMzQ0k7RUFDRSxjSGZPO0FFNERiO0FDMUNJO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FENENOO0FDMUNNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJIbkNLO0FFK0ViO0FDeENJO0VBQ0UsU0FBQTtBRDBDTjtBQ3RDRTtFQUNFLGlCQUFBO0VBQ0EsY0hyRFc7RUdzRFgsMEJBQUE7QUR3Q0o7QUNwQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQWVBLHNCQUFBO0VBY0EscUJBQUE7QURZRjtBQ3ZDRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEeUNKO0FDdENFO0VBQ0Usa0JBQUE7QUR3Q0o7QUN2Q0k7RUFDRSxhQUFBO0FEeUNOO0FDcENFO0VBQ0UsbUJBQUE7QURzQ0o7QUNwQ0k7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0FEc0NOO0FDbkNJO0VBQ0UsaUJBQUE7QURxQ047QUNoQ0U7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJIcEZVO0VHcUZWLGdCQUFBO0VBQ0EsbUJBQUE7QURrQ0o7QUNoQ0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRGtDTjtBQy9CSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBRGlDTiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LXdlYnNpdGUtY29sb3I6ICMwNzVhYzk7XG4kcHJpbWFyeS10ZXh0OiAjNDQ0NDQ0O1xuXG4kc2Vjb25kYXJ5LWJnOiAjZmNmY2ZjO1xuJHNlY29uZGFyeS1ib3JkZXI6ICNlOWVjZWY7XG5cbi8qIEluZm8gQmFzZWQgKi9cbiRjb2xvci1ub3RpZnk6ICNmZmMxMDc7XG4kY29sb3ItaW5mbzogIzM1YzdkZjtcblxuLyogUHJvcGVydHkgQmFzZWQgKi9cbiRjb2xvci13aGl0ZTogd2hpdGU7XG5cbi8qKiBHcmF5IFNoYWRlcyAqKi9cbiRncmV5LXNoYWRlLTE6ICNmMWYxZjE7XG4kZ3JleS1zaGFkZS0yOiAjZTRlNGU0O1xuJGdyZXktc2hhZGUtMzogI2ZlZmVmZTtcbiIsIi5sb2FkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiA5OTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogOS43cmVtO1xufVxuXG4ucHJpbWFyeS1oZWFkaW5nIHtcbiAgcGFkZGluZzogMnJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAmLXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDJweCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsXG4gICAgMCAxOHB4IDMycHggLTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gIHBhZGRpbmc6IDEuMnJlbSAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG5cbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxufVxuIiwiLyogSW5mbyBCYXNlZCAqL1xuLyogUHJvcGVydHkgQmFzZWQgKi9cbi8qKiBHcmF5IFNoYWRlcyAqKi9cbi5sb2FkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiA5OTtcbn1cbi5sb2FkZXIgaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogOS43cmVtO1xufVxuXG4ucHJpbWFyeS1oZWFkaW5nIHtcbiAgcGFkZGluZzogMnJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuLnByaW1hcnktaGVhZGluZy10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByaW1hcnktYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMnB4IDFweCB0cmFuc3BhcmVudCBpbnNldCwgMCAxOHB4IDMycHggLTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gIHBhZGRpbmc6IDEuMnJlbSAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5wcmltYXJ5LWJ1dHRvbiAuZmEge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLyoqICBQcm9kdWN0IFNpZGViYXIgRmlsdGVyICovXG4ucHJvZHVjdC1maWx0ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICNmY2ZjZmM7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAyNXJlbTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDJyZW07XG4gIC8qKiBDYXRlZ29yeSBIZWFkaW5nICovXG59XG4ucHJvZHVjdC1maWx0ZXIgLmhlYWRpbmcge1xuICBwYWRkaW5nOiAxLjhyZW0gM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3NWFjOTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA2cmVtO1xufVxuLnByb2R1Y3QtZmlsdGVyIHVsIHtcbiAgcGFkZGluZzogMCAxLjJyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG4ucHJvZHVjdC1maWx0ZXIgdWwgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzVjN2RmO1xufVxuLnByb2R1Y3QtZmlsdGVyIHVsIGxpIHtcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xuICBib3JkZXItYm90dG9tOiAwLjFyZW0gZGFzaGVkICNlNGU0ZTQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2R1Y3QtZmlsdGVyIHVsIGxpIDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDAuN3JlbTtcbiAgaGVpZ2h0OiAwLjdyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVjN2RmO1xufVxuLnByb2R1Y3QtZmlsdGVyIHVsIDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiAwO1xufVxuLnByb2R1Y3QtZmlsdGVyIC5idG4tbGluayB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5wcm9kdWN0LWxpc3Qge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVyZW0pO1xuICBtYXJnaW4tbGVmdDogMjVyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIC8qKiBDYXRlZ29yeSBEZXRhaWxzICovXG4gIC8qKiBQcm9kdWN0IERldGFpbHMgKi9cbn1cbi5wcm9kdWN0LWxpc3QgLmNhcmQge1xuICB3aWR0aDogMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LWxpc3QgLmltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2R1Y3QtbGlzdCAuaW1hZ2UgaW1nIHtcbiAgcGFkZGluZzogMnJlbTtcbn1cbi5wcm9kdWN0LWxpc3QgLmNhdGVnb3J5IHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5wcm9kdWN0LWxpc3QgLmNhdGVnb3J5IC5uYW1lIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5wcm9kdWN0LWxpc3QgLmNhdGVnb3J5IGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJvZHVjdC1saXN0IC5jYXJkLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnByb2R1Y3QtbGlzdCAuY2FyZC1mb290ZXIgLnByb2R1Y3QtbmFtZSB7XG4gIGNvbG9yOiAjMDBjNWU2O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cbi5wcm9kdWN0LWxpc3QgLmNhcmQtZm9vdGVyIC5wcm9kdWN0LXByaWNlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzL2ltcG9ydHNcIjtcblxuLyoqICBQcm9kdWN0IFNpZGViYXIgRmlsdGVyICovXG4ucHJvZHVjdC1maWx0ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktYmc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAyNXJlbTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDJyZW07XG5cbiAgLmhlYWRpbmcge1xuICAgIHBhZGRpbmc6IDEuOHJlbSAzcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzVhYzk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZyZW07XG4gIH1cblxuICAvKiogQ2F0ZWdvcnkgSGVhZGluZyAqL1xuICB1bCB7XG4gICAgcGFkZGluZzogMCAxLjJyZW07XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAkY29sb3ItaW5mbztcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gZGFzaGVkICRncmV5LXNoYWRlLTI7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICA6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAwLjdyZW07XG4gICAgICAgIGhlaWdodDogMC43cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMnJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWluZm87XG4gICAgICB9XG4gICAgfVxuXG4gICAgOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tbGluayB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbn1cblxuLnByb2R1Y3QtbGlzdCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXJlbSk7XG4gIG1hcmdpbi1sZWZ0OiAyNXJlbTtcbiAgcGFkZGluZzogMnJlbTtcblxuICAuY2FyZCB7XG4gICAgd2lkdGg6IDI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaW1nIHtcbiAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgfVxuICB9XG5cbiAgLyoqIENhdGVnb3J5IERldGFpbHMgKi9cbiAgLmNhdGVnb3J5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgLm5hbWUge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG5cbiAgLyoqIFByb2R1Y3QgRGV0YWlscyAqL1xuICAuY2FyZC1mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICBjb2xvcjogIzAwYzVlNjtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }, { type: src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_5__["ProductApiService"] }, { type: src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    BASE_URL: 'https://biobrix-healthcare.herokuapp.com/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shivam97/nodeProjects/biobrix/bioc/frontend/bioc/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map