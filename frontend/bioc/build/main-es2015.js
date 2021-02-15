(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shivam97/nodeProjects/biobrix/bioc/frontend/bioc/src/main.ts */"zUnb");


/***/ }),

/***/ "0Pcf":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/products.const */ "yt3l");
/* harmony import */ var src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/http/product-api.service */ "9hIC");
/* harmony import */ var src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/utility.service */ "qeeY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/footer/footer.component */ "LmEr");
/* harmony import */ var src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/secondary-header/secondary-header.component */ "jl70");
/* harmony import */ var src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/primary-header/primary-header.component */ "Zy6U");
/* harmony import */ var src_app_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/drawer/drawer.component */ "LcY4");
/* harmony import */ var src_app_components_floater_floater_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/floater/floater.component */ "cTwt");












const _c0 = ["appDrawer"];
function HomeComponent_app_secondary_header_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-secondary-header", 6);
} }
function HomeComponent_app_primary_header_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-primary-header", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categoryList", ctx_r1.categoryList)("squeeze", ctx_r1.scrollOffset > 100 && ctx_r1.screenWidth > 767);
} }
function HomeComponent_app_drawer_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-drawer", 8, 9);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categoryList", ctx_r2.categoryList);
} }
function HomeComponent_app_floater_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-floater");
} }
class HomeComponent {
    //@ViewChild(HederPlaceholderDirective,{static:false}) primaryHeader : HederPlaceholderDirective
    constructor(productService, utilityService, changeDetection) {
        this.productService = productService;
        this.utilityService = utilityService;
        this.changeDetection = changeDetection;
        this.scrollOffset = 0;
        this.isLoading = false;
        this.screenWidth = 0;
        this.drawerOpen = false;
        this.onScroll = _ => this.scrollOffset = window.pageYOffset;
        this.onResize = _ => this.screenWidth = window.innerWidth;
    }
    ngOnInit() {
        this.screenWidth = window.innerWidth;
        this.utilityService.showLoader.subscribe({
            next: (status) => {
                this.isLoading = status;
                this.changeDetection.detectChanges();
            }
        });
        this.getCategoryList();
    }
    getCategoryList() {
        this.productService.getCategoryList().subscribe({ next: (data) => {
                this.categoryList = data;
                this.categoryList.push(src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__["DefaultCategory"]);
            }
        });
    }
    outsideClicked() {
        console.log(this.appDrawer);
        if (this.appDrawer !== undefined)
            this.appDrawer.outsideClick();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_2__["ProductApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appDrawer = _t.first);
    } }, hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("resize", function HomeComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 8, vars: 4, consts: [[1, "navbar-container"], ["style", "animation: moveInTop .3s ease-out  0s;", 4, "ngIf"], [3, "categoryList", "squeeze", 4, "ngIf"], [3, "categoryList", 4, "ngIf"], [3, "click"], [4, "ngIf"], [2, "animation", "moveInTop .3s ease-out  0s"], [3, "categoryList", "squeeze"], [3, "categoryList"], ["appDrawer", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_app_secondary_header_1_Template, 1, 0, "app-secondary-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_app_primary_header_2_Template, 1, 2, "app-primary-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_app_drawer_3_Template, 2, 1, "app-drawer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_4_listener() { return ctx.outsideClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_app_floater_7_Template, 1, 0, "app-floater", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scrollOffset < 100 && ctx.screenWidth > 767);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenWidth > 767);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenWidth <= 767);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenWidth > 767);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__["SecondaryHeaderComponent"], src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_8__["PrimaryHeaderComponent"], src_app_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_9__["DrawerComponent"], src_app_components_floater_floater_component__WEBPACK_IMPORTED_MODULE_10__["FloaterComponent"]], styles: [".navbar-container[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 100;\n  position: fixed;\n}\n\n.secondary_header[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  transform: scale(1.3);\n}\n\n.show_secondary[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.hide_secondary[_ngcontent-%COMP%] {\n  transform: translateX(100vw);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFHQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLHdCQUFBO0FBQUY7O0FBRUE7RUFDRSw0QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcblxufVxuXG4uc2Vjb25kYXJ5X2hlYWRlciB7XG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuLnNob3dfc2Vjb25kYXJ5IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLmhpZGVfc2Vjb25kYXJ5IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHZ3KTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_2__["ProductApiService"] }, { type: src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { appDrawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['appDrawer']
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "1lc2":
/*!*******************************************************************!*\
  !*** ./src/app/shared/main-container/main-container.component.ts ***!
  \*******************************************************************/
/*! exports provided: MainContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainerComponent", function() { return MainContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class MainContainerComponent {
    constructor() {
        this.title = '';
    }
}
MainContainerComponent.ɵfac = function MainContainerComponent_Factory(t) { return new (t || MainContainerComponent)(); };
MainContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainContainerComponent, selectors: [["app-main-container"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 5, vars: 1, consts: [[1, "main-container"], [1, "primary-heading"], [1, "primary-heading-text"]], template: function MainContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.primary-heading[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  background-color: #f1f1f1;\n}\n.primary-heading-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9fY29tbW9uLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvX2FuaW1hdGlvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQSxlQUFBO0FBSUEsbUJBQUE7QUFHQSxrQkFBQTtBQ3JCQTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNJRjtBREZFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0lKO0FEQUE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNHRjtBRERFO0VBRUUsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkRBQUE7RUFDQSxtS0FBQTtFQUVBLDJCQUFBO0FDQ0o7QURHRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsNENBQUE7RUFBMEMsZ0NBQUE7QUNEOUM7QURNQTtFQUNFO0lBQ0UsVUFBQTtFQ0hGO0VETUE7SUFDRSxVQUFBO0VDSkY7QUFDRjtBRE9BO0VBQ0U7SUFDRSxVQUFBO0VDTEY7RURRQTtJQUNFLFVBQUE7RUNORjtBQUNGO0FEU0E7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsbUJBQUE7RUNQRjtFRFVBO0lBQ0UsK0JBQUE7RUNSRjtBQUNGO0FEQUE7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsbUJBQUE7RUNQRjtFRFVBO0lBQ0UsK0JBQUE7RUNSRjtBQUNGO0FEV0E7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0FDVEY7QURZQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUNURjtBRFlBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUNURjtBRFlBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDVEY7QURZQTtFQUNFLGlCQUFBO0FDVEY7QURZQTtFQUVBO0lBQ0UsaUJBQUE7RUNWQTtBQUNGO0FEYUE7RUFFQTtJQUNFLGlCQUFBO0VDWkE7QUFDRjtBQzdHQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VEK0dKO0FBQ0Y7QUN2SEE7RUFDRTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFRCtHSjtFQzdHQTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFRCtHSjtBQUNGO0FDN0dBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7QUFDRjtBQ3ZIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0FBQ0Y7QUFoSUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFrSUY7QUFqSUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFtSUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS13ZWJzaXRlLWNvbG9yOiAjMDc1YWM5O1xuJHByaW1hcnktd2Vic2l0ZS1jb2xvci1saWdodDogIzlmYzBlYztcbiRzZWNvbmRhcnktd2Vic2l0ZS1jb2xvcjogIzA4NGNhNTtcbiR0ZXJ0aWFyeS13ZWJzaXRlLWNvbG9yOiByZ2JhKDI1NSwyNTUsMCwxKTtcbiRwcmltYXJ5LXRleHQ6ICM0NDQ0NDQ7XG5cbiRzZWNvbmRhcnktYmc6ICNmY2ZjZmM7XG4kc2Vjb25kYXJ5LWJvcmRlcjogI2U5ZWNlZjtcblxuJHByaW1hcnktcmVkOiAjZjUyYjJiO1xuJHByaW1hcnktcmVkLWxpZ2h0OiAjZWVhNGE0O1xuXG5cblxuLyogSW5mbyBCYXNlZCAqL1xuJGNvbG9yLW5vdGlmeTogI2ZmYzEwNztcbiRjb2xvci1pbmZvOiAjMzVjN2RmO1xuXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuLyoqIEdyYXkgU2hhZGVzICoqL1xuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcbiRncmV5LXNoYWRlLTI6ICNjZWNlY2U7XG4kZ3JleS1zaGFkZS0zOiAjZmVmZWZlO1xuJGZhLWZvbnQtcGF0aDogXCJ+Zm9udC1hd2Vzb21lL2ZvbnRzL1wiO1xuIiwiLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAuMXJlbSBzb2xpZCBibGFjaztcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxLjJyZW0gM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMHJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuXG4gICY6aG92ZXJ7XG5cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMS4ycmVtIDNyZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDFweCAycHggMXB4IHRyYW5zcGFyZW50IGluc2V0LFxuICAgIDAgMThweCAzMnB4IC0ycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcblxuICB9XG5cbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgfVxuXG4gICY6YWN0aXZlLCY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCkgc2NhbGUoMC45Nik7XG4gICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoYmxhY2ssIC4yKTsgLyooZGlyZWN0aW9uIHNoYWRvdyBibHVyIGNvbG9yKSovXG4gIH1cblxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMDAlLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuLnNsaWRlSW5Eb3duIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xufVxuXG4uZmFkZUluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmFsZXJ0LW1zZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xuICB0b3A6IDEzcmVtO1xuICB6LWluZGV4OiAxMDA7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA3cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDhyZW07XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xufVxufVxuIiwiQGltcG9ydCBcInNyYy9zdHlsZXMvaW1wb3J0c1wiO1xuXG4ucHJpbWFyeS1oZWFkaW5nIHtcbiAgcGFkZGluZzogMnJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAmLXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iLCJcbkBrZXlmcmFtZXMgbW92ZUluQm90dG9tIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZUluVG9wIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-container',
                templateUrl: './main-container.component.html',
                styleUrls: ['./main-container.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "393e":
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

/***/ "4wW7":
/*!***********************************************************!*\
  !*** ./src/app/modules/home/contact/contact.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_http_contact_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/http/contact-us.service */ "xPrH");
/* harmony import */ var _shared_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/main-container/main-container.component */ "1lc2");





class ContactComponent {
    constructor(contactUsService) {
        this.contactUsService = contactUsService;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.isLoading = false;
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_http_contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 36, vars: 0, consts: [["title", "CONTACT US"], [1, "contact-us-container"], [2, "color", "#075ac9", "text-align", "center"], [1, "content"], [1, "content__item"], [1, "icon"], [1, "fa", "fa-map-marker"], [1, "title"], [1, "data"], [1, "data__heading"], [1, "data__body"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-main-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WE ARE HERE TO HELP YOU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Bioc ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 733, Gaur global village, Crossing republik, Ghaziabad, UP, 201016 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Call ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Telephone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " 9536016862 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " E-mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " info@bioc.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_3__["MainContainerComponent"]], styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.contact-us-container[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.contact-us-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-top: 6rem;\n}\n.contact-us-container[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 2rem 8rem;\n}\n.contact-us-container[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 3rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 70px;\n  background-color: white;\n  border: 0.4rem solid #075ac9;\n}\n.contact-us-container[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #075ac9;\n}\n.contact-us-container[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 3rem;\n  color: #387ad3;\n}\n.contact-us-container[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.contact-us-container[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .data__heading[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.contact-us-container[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]   .data__body[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.contact-us-container[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  background-color: #075ac9;\n}\n.contact-us-container[_ngcontent-%COMP%]   .content__item[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9fY29tbW9uLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL19hbmltYXRpb25zLnNjc3MiLCJzcmMvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQSxlQUFBO0FBSUEsbUJBQUE7QUFHQSxrQkFBQTtBQ3JCQTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNJRjtBREZFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0lKO0FEQUE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNHRjtBRERFO0VBRUUsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkRBQUE7RUFDQSxtS0FBQTtFQUVBLDJCQUFBO0FDQ0o7QURHRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsNENBQUE7RUFBMEMsZ0NBQUE7QUNEOUM7QURNQTtFQUNFO0lBQ0UsVUFBQTtFQ0hGO0VETUE7SUFDRSxVQUFBO0VDSkY7QUFDRjtBRE9BO0VBQ0U7SUFDRSxVQUFBO0VDTEY7RURRQTtJQUNFLFVBQUE7RUNORjtBQUNGO0FEU0E7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsbUJBQUE7RUNQRjtFRFVBO0lBQ0UsK0JBQUE7RUNSRjtBQUNGO0FEQUE7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsbUJBQUE7RUNQRjtFRFVBO0lBQ0UsK0JBQUE7RUNSRjtBQUNGO0FEV0E7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0FDVEY7QURZQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUNURjtBRFlBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUNURjtBRFlBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDVEY7QURZQTtFQUNFLGlCQUFBO0FDVEY7QURZQTtFQUVBO0lBQ0UsaUJBQUE7RUNWQTtBQUNGO0FEYUE7RUFFQTtJQUNFLGlCQUFBO0VDWkE7QUFDRjtBQzdHQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VEK0dKO0FBQ0Y7QUN2SEE7RUFDRTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFRCtHSjtFQzdHQTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFRCtHSjtBQUNGO0FDN0dBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7QUFDRjtBQ3ZIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0FBQ0Y7QUFoSUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUVHQSxhQUFBO0VBQ0Esc0JGSGM7RUVPZCx1QkZOd0I7RUVPeEIsbUJGUGdDO0FBb0lsQztBQWpJRTtFRUZBLGFBQUE7RUFDQSxtQkZFZ0I7RUFDZCxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBb0lKO0FBaklJO0VBQ0UsT0FBQTtFRVZKLGFBQUE7RUFDQSxzQkZVa0I7RUVObEIsMkJGTzRCO0VFTjVCLG1CRk13QztFQUNwQyxpQkFBQTtBQXFJTjtBQW5JTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUVsQk4sYUFBQTtFQUNBLG1CRmtCb0I7RUVkcEIsdUJGZThCO0VFZDlCLG1CRmNzQztFQUNoQyxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7QUF1SVI7QUF0SVE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQXdJVjtBQXBJTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFzSVI7QUFuSU07RUVwQ0osYUFBQTtFQUNBLHNCRm9Db0I7RUVoQ3BCLHVCRmlDOEI7RUVoQzlCLG1CRmdDc0M7RUFDaEMsV0FBQTtBQXVJUjtBQXJJUTtFQUNFLGdCQUFBO0FBdUlWO0FBcElRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBc0lWO0FBaklRO0VBQ0UseUJBQUE7QUFtSVY7QUFsSVU7RUFDRSxZQUFBO0FBb0laIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LXdlYnNpdGUtY29sb3I6ICMwNzVhYzk7XG4kcHJpbWFyeS13ZWJzaXRlLWNvbG9yLWxpZ2h0OiAjOWZjMGVjO1xuJHNlY29uZGFyeS13ZWJzaXRlLWNvbG9yOiAjMDg0Y2E1O1xuJHRlcnRpYXJ5LXdlYnNpdGUtY29sb3I6IHJnYmEoMjU1LDI1NSwwLDEpO1xuJHByaW1hcnktdGV4dDogIzQ0NDQ0NDtcblxuJHNlY29uZGFyeS1iZzogI2ZjZmNmYztcbiRzZWNvbmRhcnktYm9yZGVyOiAjZTllY2VmO1xuXG4kcHJpbWFyeS1yZWQ6ICNmNTJiMmI7XG4kcHJpbWFyeS1yZWQtbGlnaHQ6ICNlZWE0YTQ7XG5cblxuXG4vKiBJbmZvIEJhc2VkICovXG4kY29sb3Itbm90aWZ5OiAjZmZjMTA3O1xuJGNvbG9yLWluZm86ICMzNWM3ZGY7XG5cbi8qIFByb3BlcnR5IEJhc2VkICovXG4kY29sb3Itd2hpdGU6IHdoaXRlO1xuXG4vKiogR3JheSBTaGFkZXMgKiovXG4kZ3JleS1zaGFkZS0xOiAjZjFmMWYxO1xuJGdyZXktc2hhZGUtMjogI2NlY2VjZTtcbiRncmV5LXNoYWRlLTM6ICNmZWZlZmU7XG4kZmEtZm9udC1wYXRoOiBcIn5mb250LWF3ZXNvbWUvZm9udHMvXCI7XG4iLCIubG9hZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogOTk7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuLnByaW1hcnktYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IC4xcmVtIHNvbGlkIGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEuMnJlbSAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAwcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XG5cbiAgJjpob3ZlcntcblxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxLjJyZW0gM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMDc1YWM5LCAjMzVjN2RmKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDJweCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsXG4gICAgMCAxOHB4IDMycHggLTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuXG4gIH1cblxuICAuZmEge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICB9XG5cbiAgJjphY3RpdmUsJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KSBzY2FsZSgwLjk2KTtcbiAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYShibGFjaywgLjIpOyAvKihkaXJlY3Rpb24gc2hhZG93IGJsdXIgY29sb3IpKi9cbiAgfVxuXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMCUsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG4uc2xpZGVJbkRvd24ge1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkRvd247XG59XG5cbi5mYWRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG59XG5cbi5hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uYWxlcnQtbXNnIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogY2FsYyg1MCUgLSAxNTBweCk7XG4gIHRvcDogMTNyZW07XG4gIHotaW5kZXg6IDEwMDtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDdyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogOHJlbTtcbn1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDRyZW07XG59XG59XG4iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy9pbXBvcnRzXCI7XG5cbi5jb250YWN0LXVzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIEBpbmNsdWRlIGZsZXgoY29sdW1uKTtcbiAgQGluY2x1ZGUgZmxleC1hbGlnbm1lbnQoY2VudGVyLCBjZW50ZXIpO1xuXG5cbiAgLmNvbnRlbnQge1xuICAgIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNnJlbTtcblxuXG4gICAgJl9faXRlbSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgQGluY2x1ZGUgZmxleChjb2x1bW4pO1xuICAgICAgQGluY2x1ZGUgZmxleC1hbGlnbm1lbnQoZmxleC1zdGFydCwgY2VudGVyKTtcbiAgICAgIG1hcmdpbjogMnJlbSA4cmVtO1xuXG4gICAgICAuaWNvbiB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICAgIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgICAgICAgQGluY2x1ZGUgZmxleC1hbGlnbm1lbnQoY2VudGVyLCBjZW50ZXIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAwLjRyZW0gc29saWQgIzA3NWFjOTtcbiAgICAgICAgaSB7XG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgIGNvbG9yOiAjMDc1YWM5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICAgICAgY29sb3I6ICMzODdhZDM7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhIHtcbiAgICAgICAgQGluY2x1ZGUgZmxleChjb2x1bW4pO1xuICAgICAgICBAaW5jbHVkZSBmbGV4LWFsaWdubWVudChjZW50ZXIsIGNlbnRlcik7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICZfX2hlYWRpbmcge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICAmX19ib2R5IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc1YWM5O1xuICAgICAgICAgIGkge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCJcbkBrZXlmcmFtZXMgbW92ZUluQm90dG9tIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZUluVG9wIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xuICB9XG59XG4iLCJAbWl4aW4gdHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbikge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZsZXgtYWxpZ25tZW50KCRtYWluLWF4aXMsICRjcm9zcy1heGlzKSB7XG4gIGp1c3RpZnktY29udGVudDogJG1haW4tYXhpcztcbiAgYWxpZ24taXRlbXM6ICRjcm9zcy1heGlzO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: src_app_core_http_contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"] }]; }, null); })();


/***/ }),

/***/ "7pSQ":
/*!***********************************************!*\
  !*** ./src/app/core/services/cart.service.ts ***!
  \***********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CartService {
    constructor() {
        this.CartUpdateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
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
    clearCart() {
        this.updateSavedCart([]);
        this.updateCartSubscriptions();
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
                return [];
            }
        }
        catch (err) {
            localStorage.removeItem('cart');
            return [];
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
    itemInCart(id) {
        if (!id) {
            return false;
        }
        const itemIds = this.getCartItems().map(item => item.product_id);
        return itemIds.includes(id);
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9hIC":
/*!**************************************************!*\
  !*** ./src/app/core/http/product-api.service.ts ***!
  \**************************************************/
/*! exports provided: ProductApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductApiService", function() { return ProductApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/api.const */ "bh//");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-error-handler.service */ "p4Ho");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utility.service */ "qeeY");



/** Constants */






class ProductApiService {
    constructor(http, httpErrorHandlerService, utilityService) {
        this.http = http;
        this.httpErrorHandlerService = httpErrorHandlerService;
        this.utilityService = utilityService;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_URL;
    }
    getCategoryList() {
        const url = `${this.BASE_URL}${src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_3__["CATEGORY_API"]}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.httpErrorHandlerService.handleErr));
    }
    getProductList(paramsData) {
        let params = '';
        if (paramsData) {
            params = this.utilityService.setQueryParams(paramsData);
        }
        const url = `${this.BASE_URL}${src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_API"]}${params}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.httpErrorHandlerService.handleErr));
    }
    getPorductDetail(id) {
        const url = `${this.BASE_URL}${src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_DETAIL_API"]}`;
        return this.http.get(url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('product_id', id)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.httpErrorHandlerService.handleErr));
    }
    addReview(data) {
        const url = `${this.BASE_URL}${src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_3__["ADD_PRODUCT_REVIEW_API"]}`;
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.httpErrorHandlerService.handleErr));
    }
    getSimilarProducts(searchText) {
        const url = `${this.BASE_URL}${src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_SEARCH_API"]}?search=${searchText}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.httpErrorHandlerService.handleErr));
    }
}
ProductApiService.ɵfac = function ProductApiService_Factory(t) { return new (t || ProductApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"])); };
ProductApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductApiService, factory: ProductApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"] }, { type: _services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
    // BASE_URL: 'https://biobrix-healthcare.herokuapp.com/'
    BASE_URL: 'http://localhost:3000/'
};


/***/ }),

/***/ "CmCX":
/*!**********************************************!*\
  !*** ./src/app/core/models/product.model.ts ***!
  \**********************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(product_name, product_id, price, image, description, category, addedToCart, quantity, total) {
        this.product_name = product_name;
        this.product_id = product_id;
        this.price = price;
        this.image = image;
        this.description = description;
        this.category = category;
        this.addedToCart = addedToCart;
        this.quantity = quantity;
        this.total = total;
    }
}


/***/ }),

/***/ "IO1w":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home/products/product-detail/product-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_models_product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/models/product.model */ "CmCX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/http/product-api.service */ "9hIC");
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/cart.service */ "7pSQ");
/* harmony import */ var src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/utility.service */ "qeeY");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./review/review.component */ "vU5/");
/* harmony import */ var _shared_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/product-card/product-card.component */ "ZBvV");













function ProductDetailComponent_div_0_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.product.discount_percentage, "% off ");
} }
function ProductDetailComponent_div_0_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_0_a_29_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const tag_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.showProductList(tag_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r13, ", ");
} }
function ProductDetailComponent_div_0_div_30_input_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 65);
} }
function ProductDetailComponent_div_0_div_30_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0Product added to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "enabled": a0 }; };
function ProductDetailComponent_div_0_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductDetailComponent_div_0_div_30_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.addTocart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_0_div_30_input_2_Template, 1, 0, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailComponent_div_0_div_30_ng_template_3_Template, 2, 0, "ng-template", null, 63, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.qtyForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.product.addedToCart)("ngIfElse", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r3.qtyForm.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.product.addedToCart ? "Go to cart" : " Add to cart", " ");
} }
function ProductDetailComponent_div_0_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Out of stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_0_li_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ingredient_r21, "");
} }
function ProductDetailComponent_div_0_samp_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "samp", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your name!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_0_samp_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "samp", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_0_samp_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "samp", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please give your review!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_0_div_87_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-review", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("review", review_r23);
} }
function ProductDetailComponent_div_0_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailComponent_div_0_div_87_div_1_Template, 2, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.product.reviews);
} }
function ProductDetailComponent_div_0_ng_template_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Rieviews available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Be the first to review this product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_0_div_90_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-card", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r28);
} }
const _c1 = function (a0) { return { "active": a0 }; };
function ProductDetailComponent_div_0_div_90_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_0_div_90_div_4_div_2_Template, 2, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recentProduct_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, i_r26 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", recentProduct_r25);
} }
function ProductDetailComponent_div_0_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Similar Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailComponent_div_0_div_90_div_4_Template, 3, 4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.similarProducts);
} }
function ProductDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProductDetailComponent_div_0_p_18_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Category : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Tags : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProductDetailComponent_div_0_a_29_Template, 2, 1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProductDetailComponent_div_0_div_30_Template, 7, 7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProductDetailComponent_div_0_p_31_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "PRODUCT DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "INGREDIENTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ProductDetailComponent_div_0_li_44_Template, 2, 1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "REVIEWS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "form", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductDetailComponent_div_0_Template_form_ngSubmit_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Rate and write a review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Your Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Your Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ProductDetailComponent_div_0_samp_72_Template, 2, 0, "samp", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ProductDetailComponent_div_0_samp_77_Template, 2, 0, "samp", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Your Review: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "textarea", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, ProductDetailComponent_div_0_samp_82_Template, 2, 0, "samp", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Submit Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, ProductDetailComponent_div_0_div_87_Template, 2, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ProductDetailComponent_div_0_ng_template_88_Template, 5, 0, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ProductDetailComponent_div_0_div_90_Template, 13, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](89);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 19, ctx_r0.product.product_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.price + ".00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.product.discount_percentage !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.product.category, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.product.category, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.product.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.product.in_stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.product.in_stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.product.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.product.ingredients);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.form.get("reviewer_name").valid && ctx_r0.form.get("reviewer_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.form.get("email").valid && ctx_r0.form.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.form.get("review").valid && ctx_r0.form.get("review").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.product.reviews.length != 0)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.similarProducts.length !== 0);
} }
class ProductDetailComponent {
    constructor(route, productService, cartService, router, utilityService, datePipe, activeRoute) {
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
        this.utilityService = utilityService;
        this.datePipe = datePipe;
        this.activeRoute = activeRoute;
        this.similarProductTag = '';
        this.similarProducts = [];
        this.pa1 = [];
        this.pa2 = [];
        this.pa3 = [];
        this.onResize = _ => this.assembelRecentProducts();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            reviewer_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            review: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date())
        });
        this.qtyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1))
        });
    }
    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            console.log(params);
            this.productId = params.productId;
            this.utilityService.showLoader.next(true);
            this.productService.getPorductDetail(this.productId).subscribe(product => {
                this.product = product;
                this.product.addedToCart = this.cartService.itemInCart(this.productId);
                if (this.product.tags.length) {
                    this.similarProductTag = this.product.tags[0];
                    this.getSimilarProducts();
                }
                this.utilityService.showLoader.next(false);
            });
            window.scrollTo(0, 0);
        });
    }
    addTocart() {
        if (this.product.addedToCart)
            this.router.navigate(['/view-cart']);
        else if (this.qtyForm.valid) {
            const product = new _core_models_product_model__WEBPACK_IMPORTED_MODULE_2__["Product"](this.product.product_name, this.product._id, this.product.price, this.product.images[0]);
            product.quantity = this.qtyForm.value.quantity;
            product.total = product.price;
            this.cartService.addToCart(product);
            this.product.addedToCart = true;
        }
    }
    onSubmit() {
        this.utilityService.showLoader.next(true);
        const myDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.productService.addReview(Object.assign(Object.assign({}, this.form.value), { product_id: this.product._id, date: myDate })).subscribe(res => {
            this.utilityService.showLoader.next(false);
        }, err => this.utilityService.showLoader.next(false));
        this.form.reset();
    }
    getSimilarProducts() {
        if (this.similarProductTag) {
            this.productService.getSimilarProducts(this.similarProductTag).subscribe(res => {
                if (res) {
                    const recents = res;
                    for (let i = 0; i < recents.length; i = i + 4) {
                        this.pa1.push(recents.slice(i, i + 4));
                    }
                    for (let i = 0; i < recents.length; i = i + 2) {
                        this.pa2.push(recents.slice(i, i + 2));
                    }
                    recents.forEach(product => this.pa3.push([product]));
                    this.assembelRecentProducts();
                }
            });
        }
    }
    showProductList(tag) {
        this.router.navigate(['/', 'products', 'all'], { queryParams: { tag } });
    }
    assembelRecentProducts() {
        if (window.innerWidth < 700)
            this.similarProducts = this.pa3;
        else if (window.innerWidth < 1120)
            this.similarProducts = this.pa2;
        else
            this.similarProducts = this.pa1;
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_5__["ProductApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], hostBindings: function ProductDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ProductDetailComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])], decls: 1, vars: 1, consts: [["class", "product_detail main-container", 4, "ngIf"], [1, "product_detail", "main-container"], [1, "product_detail__main"], [1, "product_detail__main-container"], [1, "container"], [1, "row"], [1, "col-md-6", "col-sm-12"], [1, "product_detail__main-image", 3, "src"], [1, "col-md-1", 2, "height", "1rem"], [1, "col-md-5", "col-sm-12", 2, "margin", "0 auto"], [1, "product_detail__main-section"], [1, "product_detail__main-name"], [1, "row", "product_detail__main-price"], [1, "fa", "fa-inr"], [1, ""], ["style", "font-size: medium;", 4, "ngIf"], [1, "product_detail__main-product_meta"], ["href", "#", "rel", "tag"], ["class", "tag-list", 3, "click", 4, "ngFor", "ngForOf"], ["class", "product_detail__main-quantity", 4, "ngIf"], ["class", "product_detail__main-out", 4, "ngIf"], [1, "product_detail__main-tabs-section", "p-lg-5", "p-sm-0"], [1, "description"], [1, "product_detail__main-tabs-section-heading"], [1, "ingredients"], [1, "col-5"], [1, "list-group"], ["style", "font-weight: 700;", "class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "reviews"], [1, "card", 3, "formGroup", "ngSubmit"], [1, "card-header"], [1, "card-body"], [1, "form-group"], [1, "product_detail__rating-your"], [1, "product_detail__rating-stars"], ["type", "radio", "id", "star1", "formControlName", "rating", "name", "rating", "value", "5", 1, "product_detail__rating-input"], ["for", "star1", 1, "product_detail__rating-label"], ["type", "radio", "id", "star2", "formControlName", "rating", "name", "rating", "value", "4", 1, "product_detail__rating-input"], ["for", "star2", 1, "product_detail__rating-label"], ["type", "radio", "id", "star3", "formControlName", "rating", "name", "rating", "value", "3", 1, "product_detail__rating-input"], ["for", "star3", 1, "product_detail__rating-label"], ["type", "radio", "id", "star4", "formControlName", "rating", "name", "rating", "value", "2", 1, "product_detail__rating-input"], ["for", "star4", 1, "product_detail__rating-label"], ["type", "radio", "id", "star5", "formControlName", "rating", "name", "rating", "value", "1", 1, "product_detail__rating-input"], ["for", "star5", 1, "product_detail__rating-label"], ["for", "username"], ["formControlName", "reviewer_name", "type", "text", "id", "username", "name", "username", 1, "form-control", "form-control-lg"], ["class", "help-block", 4, "ngIf"], ["for", "email"], ["formControlName", "email", "type", "email", "id", "email", "name", "email", 1, "form-control", "form-control-lg"], ["for", "review"], ["formControlName", "review", "type", "text", "id", "review", "name", "review", "rows", "4", 1, "form-control", "form-control-lg"], [1, "flex-row"], [1, "flex-fill"], ["type", "submit", 1, "btn", "primary-button", 3, "disabled"], [4, "ngIf", "ngIfElse"], ["NoReview", ""], ["id", "recentProducts", "class", "carousel slide similar-products p-md-5 p-sm-0", "data-ride", "carousel", "data-interval", "0", 4, "ngIf"], [2, "font-size", "medium"], [1, "tag-list", 3, "click"], [1, "product_detail__main-quantity"], [1, "product_detail__main-form", 3, "formGroup", "ngSubmit"], ["formControlName", "quantity", "type", "number", "class", "form-control form-control-lg count-input", "minlength", "1", 4, "ngIf", "ngIfElse"], ["added", ""], ["type", "submit", 1, "btn", "primary-button", 3, "ngClass"], ["formControlName", "quantity", "type", "number", "minlength", "1", 1, "form-control", "form-control-lg", "count-input"], [1, "fa-check", "added_to_cart", 2, "color", "green"], [1, "product_detail__main-out"], [1, "list-group-item", 2, "font-weight", "700"], [1, "help-block"], [4, "ngFor", "ngForOf"], [3, "review"], [1, "mr-5"], ["id", "recentProducts", "data-ride", "carousel", "data-interval", "0", 1, "carousel", "slide", "similar-products", "p-md-5", "p-sm-0"], [1, "similar-products-heading"], [1, "carousel-inner", 2, "padding-top", "3rem"], ["class", "carousel-item p-md-5 p-sm-0", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#recentProducts", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#recentProducts", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-item", "p-md-5", "p-sm-0", 3, "ngClass"], [1, "similar-products__item"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [3, "product"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductDetailComponent_div_0_Template, 91, 21, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _review_review_component__WEBPACK_IMPORTED_MODULE_8__["ReviewComponent"], _shared_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__["ProductCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: ["@charset \"UTF-8\";\n\n\n\n.loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.product_detail[_ngcontent-%COMP%] {\n  -webkit-animation: moveInBottom 0.5s ease-out 0.3s;\n          animation: moveInBottom 0.5s ease-out 0.3s;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n.product_detail__main-container[_ngcontent-%COMP%] {\n  width: 95%;\n  position: relative;\n  padding-top: 5rem;\n}\n.product_detail__main-section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 2rem;\n}\n.product_detail__main-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50vw;\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  min-height: 35rem;\n}\n.product_detail__main-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 2em;\n  color: #084ca5;\n  text-align: center;\n  padding: 2rem;\n}\n.product_detail__main-name[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 2rem;\n  font-size: 3rem;\n  font-weight: 800;\n}\n.product_detail__main-out[_ngcontent-%COMP%] {\n  color: red;\n  margin: 3rem 0rem;\n}\n.product_detail__main-quantity[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 5rem;\n}\n.product_detail__main-quantity-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.product_detail__main-quantity[_ngcontent-%COMP%]   .count-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 30%;\n  text-align: center;\n  font-size: 2rem;\n  margin-right: 2rem;\n}\n.product_detail__main-quantity[_ngcontent-%COMP%]   .added_to_cart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  text-align: center;\n  font-size: 2rem;\n  margin-right: 2rem;\n}\n.product_detail__main-quantity[_ngcontent-%COMP%]   .primary-button[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.product_detail__main-tabs[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], .product_detail__main-tabs[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: none;\n}\n.product_detail__main-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 70rem;\n  margin: 2rem 10rem;\n}\n.product_detail__main-tabs-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.product_detail__main-tabs-section[_ngcontent-%COMP%] {\n  clear: both;\n}\n.product_detail__main-tabs-section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 2rem;\n  width: 100%;\n  background-color: transparent;\n  line-height: 1.5em;\n  letter-spacing: 0.5px;\n  color: #444;\n}\n.product_detail__main-tabs-section-heading[_ngcontent-%COMP%] {\n  color: red;\n  margin-bottom: 2rem;\n}\n.product_detail__rating-stars[_ngcontent-%COMP%] {\n  display: flex;\n  transform: rotateY(180deg) translateX(40%);\n  margin: 2rem 0;\n}\n.product_detail__rating-label[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  width: 30px;\n  padding-left: 10px;\n  color: pink;\n}\n.product_detail__rating-label[_ngcontent-%COMP%]:hover {\n  color: palevioletred;\n}\n.product_detail__rating-label[_ngcontent-%COMP%]:before {\n  content: \"\uF005\";\n  font-family: \"FontAwesome\";\n  font-weight: 300;\n  position: absolute;\n  top: 0;\n  display: block;\n  font-size: 30px;\n  color: pink;\n}\n.product_detail__rating-label[_ngcontent-%COMP%]:after {\n  content: \"\uF005\";\n  font-family: \"FontAwesome\";\n  font-weight: 300;\n  position: absolute;\n  font-size: 30px;\n  top: 0;\n  color: palevioletred;\n  opacity: 0;\n  transition: 0.5s;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);\n}\n.product_detail__rating-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.product_detail__rating-label[_ngcontent-%COMP%]:hover:after, .product_detail__rating-label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%]:after, .product_detail__rating-input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:after {\n  transform: skewY(12deg);\n  opacity: 1;\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.03) !important;\n  font-weight: 600;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: capitalize;\n  background-color: white;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.card-footer[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #00889f;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n}\n.card-footer[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-weight: bold;\n  font-size: 2rem;\n}\n.card-footer[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 0.4rem 1rem -1rem rgba(0, 0, 0, 0.2), 0 0.4rem 0.6rem 0.1rem rgba(0, 0, 0, 0.05), 0 0.1rem 0.2rem 0.1rem transparent inset, 0 1.8rem 3.2rem -0.2rem rgba(255, 255, 255, 0.1) inset;\n  padding: 1.2rem 2.5rem;\n  border-radius: 5rem;\n  color: white;\n  margin-top: 1rem;\n  border: 0;\n  font-size: 1.4rem;\n}\n.card-footer[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.similar-products-heading[_ngcontent-%COMP%] {\n  padding-left: 80px;\n}\n.similar-products[_ngcontent-%COMP%] {\n  background-color: #a5a0f081;\n}\n.similar-products__item[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n.similar-products[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .similar-products[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n  filter: brightness(0);\n}\n.tag-list[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.tag-list[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: #0056b3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJzcmMvc3R5bGVzL19jb21tb24uc2NzcyIsInNyYy9zdHlsZXMvX2FuaW1hdGlvbnMuc2NzcyIsInNyYy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ2NoQixlQUFBO0FBSUEsbUJBQUE7QUFHQSxrQkFBQTtBQ3JCQTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUZLRjtBRUhFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBRktKO0FFREE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUZJRjtBRUZFO0VBRUUsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkRBQUE7RUFDQSxtS0FBQTtFQUVBLDJCQUFBO0FGRUo7QUVFRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUZBSjtBRUdFO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsNENBQUE7RUFBMEMsZ0NBQUE7QUZBOUM7QUVLQTtFQUNFO0lBQ0UsVUFBQTtFRkZGO0VFS0E7SUFDRSxVQUFBO0VGSEY7QUFDRjtBRU1BO0VBQ0U7SUFDRSxVQUFBO0VGSkY7RUVPQTtJQUNFLFVBQUE7RUZMRjtBQUNGO0FFUUE7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsbUJBQUE7RUZORjtFRVNBO0lBQ0UsK0JBQUE7RUZQRjtBQUNGO0FFREE7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsbUJBQUE7RUZORjtFRVNBO0lBQ0UsK0JBQUE7RUZQRjtBQUNGO0FFVUE7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0FGUkY7QUVXQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUZSRjtBRVdBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUZSRjtBRVdBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FGUkY7QUVXQTtFQUNFLGlCQUFBO0FGUkY7QUVXQTtFQUVBO0lBQ0UsaUJBQUE7RUZUQTtBQUNGO0FFWUE7RUFFQTtJQUNFLGlCQUFBO0VGWEE7QUFDRjtBRzlHQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VIZ0hKO0VHOUdBO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VIZ0hKO0FBQ0Y7QUd4SEE7RUFDRTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFSGdISjtFRzlHQTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFSGdISjtBQUNGO0FHOUdBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUhnSEo7RUc5R0E7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUhnSEo7QUFDRjtBR3hIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VIZ0hKO0VHOUdBO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VIZ0hKO0FBQ0Y7QUFqSUE7RUFFRSxrREFBQTtVQUFBLDBDQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQWtJRjtBQS9ISTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBaUlOO0FBOUhJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWdJTjtBQTdISTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUErSE47QUEzSEk7RUl4QkYsYUFBQTtFQUNBLG1CSndCa0I7RUlwQmxCLDJCSnFCNEI7RUlwQjVCLG1CSm9Cd0M7RUFDcEMsY0FBQTtFQUNBLGNDakNvQjtFRGtDcEIsa0JBQUE7RUFDQSxhQUFBO0FBK0hOO0FBNUhJO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQThITjtBQXRISTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQXdITjtBQXJISTtFSWxERixhQUFBO0VBQ0EsbUJKa0RrQjtFSTlDbEIsMkJKK0M0QjtFSTlDNUIsbUJKOEN3QztFQUNwQyxnQkFBQTtBQXlITjtBQXZITTtFSXZESixhQUFBO0VBQ0EsbUJKdURvQjtFSW5EcEIsMkJKb0Q4QjtFSW5EOUIsbUJKbUQwQztBQTJINUM7QUF4SE07RUk1REosYUFBQTtFQUNBLG1CSjREb0I7RUl4RHBCLDJCSnlEOEI7RUl4RDlCLG1CSndEMEM7RUFDcEMsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBNEhSO0FBekhNO0VJckVKLGFBQUE7RUFDQSxtQkpxRW9CO0VJakVwQiwyQkprRThCO0VJakU5QixtQkppRTBDO0VBQ3BDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBNkhSO0FBMUhNO0VBQ0UsZ0JBQUE7QUE0SFI7QUF2SEk7RUFDRSxhQUFBO0FBeUhOO0FBdEhJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF3SE47QUF0SE07RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUF3SFI7QUFqSE07RUFFRSxXQUFBO0FBa0hSO0FBakhRO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFFQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBa0hWO0FBaEhRO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBa0hWO0FBekdJO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtBQTJHSjtBQXhHSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQTBHTjtBQXhHTTtFQUNFLG9CQUFBO0FBMEdSO0FBdkdNO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF5R1I7QUFyR007RUFDRSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBdUdSO0FBbEdJO0VBQ0UsYUFBQTtBQW9HTjtBQWpHSTtFQUlFLHVCQUFBO0VBQ0EsVUFBQTtBQWdHTjtBQXpGQTtFQUNFLHFCQUFBO0FBNEZGO0FBekZBO0VBQ0UsZ0RBQUE7RUFDQSxnQkFBQTtBQTRGRjtBQXhGQSxxQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQzVMWTtFRDZMWixnQkFBQTtFQUNBLG1CQUFBO0FBMkZGO0FBekZFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUEyRko7QUF4RkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQTBGSjtBQXZGRTtFQUNFLDJEQUFBO0VBQ0EsZ01BQUE7RUFFQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUNsTlU7RURtTlYsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUF3Rko7QUF0Rkk7RUFDRSxpQkFBQTtBQXdGTjtBQW5GQTtFQUNFLGtCQUFBO0FBc0ZGO0FBbkZBO0VBQ0UsMkJBQUE7QUFzRkY7QUFyRkU7RUFDRSxlQUFBO0VJaFBGLGFBQUE7RUFDQSxtQkpnUGdCO0VJNU9oQiw2Qko2TzBCO0VJNU8xQixtQko0T3dDO0FBeUYxQztBQXRGRTtFQUNFLHFCQUFBO0FBd0ZKO0FBcEZBO0VBQ0UsY0FBQTtBQXVGRjtBQXJGRTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQXVGSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL2ltcG9ydHNcIjtcbiRoZWFkZXItYmFja2dyb3VuZCA6IHJnYmEoMjIzLCA0MSwgNzEsIDAuOCk7XG4ucHJvZHVjdF9kZXRhaWwge1xuXG4gIGFuaW1hdGlvbjogbW92ZUluQm90dG9tIC41cyBlYXNlLW91dCAgLjNzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XG5cbiAgJl9fbWFpbiB7XG4gICAgJi1jb250YWluZXJ7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy10b3A6IDVyZW07XG4gICAgfVxuXG4gICAgJi1zZWN0aW9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgIH1cblxuICAgICYtaW1hZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDUwdnc7XG4gICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBtaW4taGVpZ2h0OiAzNXJlbTtcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItYmFja2dyb3VuZCA7XG4gICAgfVxuXG4gICAgJi1wcmljZSB7XG4gICAgICBAaW5jbHVkZSBmbGV4KHJvdyk7XG4gICAgICBAaW5jbHVkZSBmbGV4LWFsaWdubWVudChmbGV4LXN0YXJ0LCBjZW50ZXIpO1xuICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICBjb2xvcjokc2Vjb25kYXJ5LXdlYnNpdGUtY29sb3I7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgIH1cblxuICAgICYtbmFtZXtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBmb250LXdlaWdodDo4MDA7XG5cbiAgICB9XG5cbiAgICAmLXByb2R1Y3RfbWV0YXtcblxuICAgIH1cblxuICAgICYtb3V0IHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBtYXJnaW46IDNyZW0gMHJlbTtcbiAgICB9XG5cbiAgICAmLXF1YW50aXR5IHtcbiAgICAgIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgICAgIEBpbmNsdWRlIGZsZXgtYWxpZ25tZW50KGZsZXgtc3RhcnQsIGNlbnRlcik7XG4gICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuXG4gICAgICAmLWZvcm0ge1xuICAgICAgICBAaW5jbHVkZSBmbGV4KHJvdyk7XG4gICAgICAgIEBpbmNsdWRlIGZsZXgtYWxpZ25tZW50KGZsZXgtc3RhcnQsIGNlbnRlcik7XG4gICAgICB9XG5cbiAgICAgIC5jb3VudC1pbnB1dCB7XG4gICAgICAgIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgICAgICAgQGluY2x1ZGUgZmxleC1hbGlnbm1lbnQoZmxleC1zdGFydCwgY2VudGVyKTtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6MnJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgfVxuXG4gICAgICAuYWRkZWRfdG9fY2FydCB7XG4gICAgICAgIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgICAgICAgQGluY2x1ZGUgZmxleC1hbGlnbm1lbnQoZmxleC1zdGFydCwgY2VudGVyKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6MnJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgfVxuXG4gICAgICAucHJpbWFyeS1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgJi10YWJzID4gaW5wdXQsICYtdGFicyBzZWN0aW9uID4gZGl2IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJi10YWJzIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiA3MHJlbTtcbiAgICAgIG1hcmdpbjogMnJlbSAxMHJlbTtcblxuICAgICAgJi1saXN0IHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgLy8gJiBsaTpub3QoOmxhc3QtY2hpbGQpIGxhYmVsIHtcbiAgICAgICAgLy8gICBib3JkZXItcmlnaHQtd2lkdGg6MCA7XG4gICAgICAgIC8vIH1cbiAgICAgIH1cblxuICAgICAgJi1zZWN0aW9uIHtcblxuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgJiA+IGRpdiB7XG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgIH1cbiAgICAgICAgJi1oZWFkaW5nIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgJl9fcmF0aW5nIHtcbiAgICAmLXN0YXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpICB0cmFuc2xhdGVYKDQwJSk7XG4gICAgbWFyZ2luOiAycmVtIDA7XG4gICAgfVxuXG4gICAgJi1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgY29sb3I6IHBpbms7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgICAgIH1cblxuICAgICAgJjpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6ICdcXGYwMDUnO1xuICAgICAgICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGNvbG9yOiBwaW5rO1xuXG4gICAgICB9XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnXFxmMDA1JztcbiAgICAgICAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwuNSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAmLWlucHV0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJi1sYWJlbDpob3ZlcjphZnRlcixcbiAgICAmLWxhYmVsOmhvdmVyIH4gbGFiZWw6YWZ0ZXIsXG4gICAgJi1pbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXJcbiAgICB7XG4gICAgICB0cmFuc2Zvcm06IHNrZXdZKDEyZGVnKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gIH1cblxufVxuXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsIHRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCAge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMykgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuXG4vKiogUHJvZHVjdCBEZXRhaWxzICovXG4uY2FyZC1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgLnByb2R1Y3QtbmFtZSB7XG4gICAgY29sb3I6ICMwMDg4OWY7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuXG4gIC5wcm9kdWN0LXByaWNlIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIC5hZGQtdG8tY2FydCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gICAgYm94LXNoYWRvdzogMCAwLjRyZW0gMXJlbSAtMXJlbSByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMC40cmVtIDAuNnJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgICAwIDAuMXJlbSAwLjJyZW0gMC4xcmVtIHRyYW5zcGFyZW50IGluc2V0LCAwIDEuOHJlbSAzLjJyZW0gLTAuMnJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gICAgcGFkZGluZzogMS4ycmVtIDIuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG5cbiAgICAuZmEge1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgfVxuICB9XG59XG5cbi5zaW1pbGFyLXByb2R1Y3RzLWhlYWRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG59XG5cbi5zaW1pbGFyLXByb2R1Y3RzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1YTBmMDgxO1xuICAmX19pdGVtIHtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgQGluY2x1ZGUgZmxleChyb3cpO1xuICAgIEBpbmNsdWRlIGZsZXgtYWxpZ25tZW50KHNwYWNlLWFyb3VuZCwgY2VudGVyKTtcbiAgfVxuXG4gIC5jYXJvdXNlbC1jb250cm9sLXByZXYsIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKTtcbiAgfVxufVxuXG4udGFnLWxpc3Qge1xuICBjb2xvcjogIzAwN2JmZjtcblxuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzAwNTZiMztcbiAgfVxufVxuIiwiJHByaW1hcnktd2Vic2l0ZS1jb2xvcjogIzA3NWFjOTtcbiRwcmltYXJ5LXdlYnNpdGUtY29sb3ItbGlnaHQ6ICM5ZmMwZWM7XG4kc2Vjb25kYXJ5LXdlYnNpdGUtY29sb3I6ICMwODRjYTU7XG4kdGVydGlhcnktd2Vic2l0ZS1jb2xvcjogcmdiYSgyNTUsMjU1LDAsMSk7XG4kcHJpbWFyeS10ZXh0OiAjNDQ0NDQ0O1xuXG4kc2Vjb25kYXJ5LWJnOiAjZmNmY2ZjO1xuJHNlY29uZGFyeS1ib3JkZXI6ICNlOWVjZWY7XG5cbiRwcmltYXJ5LXJlZDogI2Y1MmIyYjtcbiRwcmltYXJ5LXJlZC1saWdodDogI2VlYTRhNDtcblxuXG5cbi8qIEluZm8gQmFzZWQgKi9cbiRjb2xvci1ub3RpZnk6ICNmZmMxMDc7XG4kY29sb3ItaW5mbzogIzM1YzdkZjtcblxuLyogUHJvcGVydHkgQmFzZWQgKi9cbiRjb2xvci13aGl0ZTogd2hpdGU7XG5cbi8qKiBHcmF5IFNoYWRlcyAqKi9cbiRncmV5LXNoYWRlLTE6ICNmMWYxZjE7XG4kZ3JleS1zaGFkZS0yOiAjY2VjZWNlO1xuJGdyZXktc2hhZGUtMzogI2ZlZmVmZTtcbiRmYS1mb250LXBhdGg6IFwifmZvbnQtYXdlc29tZS9mb250cy9cIjtcbiIsIi5sb2FkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiA5OTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4ucHJpbWFyeS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogLjFyZW0gc29saWQgYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMS4ycmVtIDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDByZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcblxuICAmOmhvdmVye1xuXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEuMnJlbSAzcmVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMnB4IDFweCB0cmFuc3BhcmVudCBpbnNldCxcbiAgICAwIDE4cHggMzJweCAtMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSBpbnNldDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG5cbiAgfVxuXG4gIC5mYSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIH1cblxuICAmOmFjdGl2ZSwmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpIHNjYWxlKDAuOTYpO1xuICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKGJsYWNrLCAuMik7IC8qKGRpcmVjdGlvbiBzaGFkb3cgYmx1ciBjb2xvcikqL1xuICB9XG5cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwJSwgMCk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbi5zbGlkZUluRG93biB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluRG93bjtcbn1cblxuLmZhZGVJbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbn1cblxuLmFuaW1hdGVkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5hbGVydC1tc2cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiBjYWxjKDUwJSAtIDE1MHB4KTtcbiAgdG9wOiAxM3JlbTtcbiAgei1pbmRleDogMTAwO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogN3JlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA4cmVtO1xufVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cbn1cbiIsIlxuQGtleWZyYW1lcyBtb3ZlSW5Cb3R0b20ge1xuICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlSW5Ub3Age1xuICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSk7XG4gIH1cbn1cbiIsIkBtaXhpbiB0cnVuY2F0ZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZmxleC1hbGlnbm1lbnQoJG1haW4tYXhpcywgJGNyb3NzLWF4aXMpIHtcbiAganVzdGlmeS1jb250ZW50OiAkbWFpbi1heGlzO1xuICBhbGlnbi1pdGVtczogJGNyb3NzLWF4aXM7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-detail',
                templateUrl: './product-detail.component.html',
                styleUrls: ['./product-detail.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_5__["ProductApiService"] }, { type: _core_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "KPA2":
/*!**************************************!*\
  !*** ./src/app/app-config.module.ts ***!
  \**************************************/
/*! exports provided: AppConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigModule", function() { return AppConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home/home.module */ "iydT");




class AppConfigModule {
}
AppConfigModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppConfigModule });
AppConfigModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppConfigModule_Factory(t) { return new (t || AppConfigModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]
        ], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]] });
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

/***/ "LcY4":
/*!*******************************************************!*\
  !*** ./src/app/components/drawer/drawer.component.ts ***!
  \*******************************************************/
/*! exports provided: DrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return DrawerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/secondary-header/secondary-header.component */ "jl70");





function DrawerComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const category_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onCategorySelected(category_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r1.categoryName, "");
} }
const _c0 = function (a0) { return { "slide_open": a0 }; };
class DrawerComponent {
    constructor(router) {
        this.router = router;
        this.isOpen = false;
        this.itemSelected = route => {
            this.isOpen = false;
            this.router.navigate([route]);
        };
        this.onCategorySelected = id => {
            this.isOpen = false;
            this.router.navigate(['/products', id]);
        };
    }
    outsideClick() {
        if (this.isOpen)
            this.isOpen = false;
    }
}
DrawerComponent.ɵfac = function DrawerComponent_Factory(t) { return new (t || DrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DrawerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawerComponent, selectors: [["app-drawer"]], inputs: { categoryList: "categoryList" }, decls: 24, vars: 4, consts: [[1, "sidenav", 3, "ngClass"], [1, "sidenav__a", "closebtn", 3, "click"], [1, "sidenav__a", 3, "click"], [1, "sidenav__a"], ["class", "sidenav__a products__a", 3, "click", 4, "ngFor", "ngForOf"], [1, "flex-fill"], [3, "click"], [1, "drawer_header"], [1, "drawer_header__btn", 3, "click"], ["routerLink", "", 1, "brand-logo"], ["src", "../../../assets/biobrix_circle.png"], [1, "company_name"], [1, "sidenav__a", "products__a", 3, "click"]], template: function DrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_Template_a_click_1_listener() { return ctx.isOpen = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_Template_a_click_3_listener() { return ctx.itemSelected(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_Template_a_click_5_listener() { return ctx.itemSelected("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Products \u25BC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DrawerComponent_a_9_Template, 2, 1, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_Template_a_click_10_listener() { return ctx.itemSelected("trade-enquiry"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Trade Enquiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_Template_a_click_12_listener() { return ctx.itemSelected("contact-us"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-secondary-header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_Template_app_secondary_header_click_15_listener() { return ctx.isOpen = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawerComponent_Template_span_click_17_listener() { return ctx.isOpen = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "BIOBRIX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.isOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".sidenav[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 28rem;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #313131;\n  overflow-x: hidden;\n  transition: 0.3s;\n  padding-top: 6rem;\n  transform: translateX(-28rem);\n}\n.sidenav__a[_ngcontent-%COMP%] {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 2rem;\n  color: #c5c5c5;\n  display: block;\n  transition: 0.3s;\n}\n.sidenav__a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.products__a[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n.closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 2.5rem;\n  font-size: 3.6rem;\n  margin-left: 5rem;\n}\n.drawer_header[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 1rem;\n  background-color: yellow;\n  align-items: center;\n}\n.drawer_header__btn[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  cursor: pointer;\n}\n.drawer_header[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-bottom: 0.2rem;\n}\n.drawer_header[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 4rem;\n}\n.slide_open[_ngcontent-%COMP%] {\n  transform: translateX(0rem);\n}\n.company_name[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  font-family: \"Aclonica\", sans-serif;\n  color: black;\n  max-width: 1rem;\n  font-size: 1rem;\n}\n@media screen and (max-height: 450px) {\n  .sidenav[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7QUFFRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFFQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKO0FBR0k7RUFDRSxZQUFBO0FBRE47QUFRQTtFQUNFLGlCQUFBO0FBTEY7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBTkY7QUFTQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFORjtBQU9FO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBTEo7QUFPRTtFQUlFLGlCQUFBO0VBQ0EscUJBQUE7QUFSSjtBQUlJO0VBQ0UsWUFBQTtBQUZOO0FBVUE7RUFDRSwyQkFBQTtBQVBGO0FBVUE7RUFDRSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBUEY7QUFXQTtFQUNFO0lBQVUsaUJBQUE7RUFQVjs7RUFRQTtJQUFZLGVBQUE7RUFKWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDI4cmVtO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIHBhZGRpbmctdG9wOiA2cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI4cmVtKTtcblxuXG4gICZfX2Ege1xuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiAjYzVjNWM1O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgfVxuXG4gIH1cblxufVxuXG4ucHJvZHVjdHNfX2Ege1xuICBtYXJnaW4tbGVmdDogMnJlbTtcblxufVxuXG4uY2xvc2VidG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDIuNXJlbTtcbiAgZm9udC1zaXplOiAzLjZyZW07XG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xufVxuXG4uZHJhd2VyX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDAsMSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICZfX2J0biB7XG4gICAgZm9udC1zaXplOjIuNXJlbTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuICAuYnJhbmQtbG9nbyB7XG4gICAgaW1ne1xuICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgIH1cbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuMnJlbTtcbiAgfVxuXG59XG5cbi5zbGlkZV9vcGVuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xufVxuXG4uY29tcGFueV9uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICBmb250LWZhbWlseTogJ0FjbG9uaWNhJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXgtd2lkdGg6IDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cbiAgLnNpZGVuYXYgYSB7Zm9udC1zaXplOiAxOHB4O31cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drawer',
                templateUrl: './drawer.component.html',
                styleUrls: ['./drawer.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { categoryList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_http_contact_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/http/contact-us.service */ "xPrH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function FooterComponent_button_70_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_button_70_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sending...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FooterComponent {
    constructor(contactUsService) {
        this.contactUsService = contactUsService;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.isLoading = false;
    }
    ngOnInit() {
    }
    submitForm() {
        if (this.name.valid && this.email.valid && this.message.valid) {
            this.sendMessage(this.name.value, this.email.value, this.message.value);
            this.name.reset();
            this.email.reset();
            this.message.reset();
        }
    }
    sendMessage(name, contact, message) {
        this.isLoading = true;
        this.contactUsService.sendMessage({ name, contact, message }).subscribe(send => {
            this.isLoading = false;
            this.showMessage('Your message has been sent successfully.');
            console.log(send);
        }, err => {
            this.isLoading = false;
            this.showMessage('Error in sending your message.', true);
        });
    }
    showMessage(message, error = false) {
        const msg = document.createElement('div');
        msg.innerText = message;
        msg.classList.add('alert');
        msg.classList.add(error ? 'alert-danger' : 'alert-success');
        msg.classList.add('alert-msg');
        msg.classList.add('animated');
        msg.classList.add('slideInUp');
        document.body.appendChild(msg);
        setTimeout(() => {
            document.body.removeChild(msg);
        }, 4000);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_http_contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 75, vars: 5, consts: [[1, "footer"], [1, "footer__content"], [1, "footer__content-about_us", "col"], [1, "row"], ["src", "../../../assets/biobrix_circle.png", 1, "footer__content-logo"], [1, "footer__content-company_name", 2, "margin", "auto"], [1, "footer__content-socials"], [1, "footer__content-socials-a", "fa", "fa-facebook"], [1, "footer__content-socials-a", "fa", "fa-twitter"], [1, "footer__content-socials-a", "fa", "fa-instagram"], [1, "footer__content-linkbox"], [1, "footer__content-heading"], [1, "footer__content-box"], [1, "footer__right-li"], [1, "footer__right-link"], [1, "footer__contact-us"], [1, "footer__contact-us-heading"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "placeholder", "Enter full name", 1, "form-control", "form-control-lg", 3, "formControl"], ["for", "email"], ["type", "text", "id", "email", "placeholder", "Enter email", 1, "form-control", "form-control-lg", 3, "formControl"], ["for", "message"], ["type", "text", "id", "message", "rows", "3", "placeholder", "Enter message", 1, "form-control", "form-control-lg", 3, "formControl"], ["type", "button", "class", "btn primary-button", "style", "align-self: center", 3, "click", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "footer__bottom"], ["type", "button", 1, "btn", "primary-button", 2, "align-self", "center", 3, "click"], [1, "sending"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BIOBRIX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Doctors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Trade Enquiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Hair Fall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Dry Skin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Oily Skin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Sunscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Face cream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Get in Touch with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Full name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Your message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, FooterComponent_button_70_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, FooterComponent_ng_template_71_Template, 2, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Copyright \u00A9 2021 @ Biobrix Healthcare | All Rights Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-top: 12rem;\n  background-color: #12120f;\n  padding: 0.5rem;\n  color: whitesmoke;\n  position: relative;\n  min-height: 38rem;\n  flex-wrap: wrap;\n}\n.footer__content[_ngcontent-%COMP%] {\n  flex: 2;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  padding-top: 5rem;\n  margin-bottom: 2rem;\n}\n.footer__content-company_name[_ngcontent-%COMP%] {\n  letter-spacing: 0.5rem;\n}\n.footer__content-about_us[_ngcontent-%COMP%] {\n  max-width: 22rem;\n  margin-right: 8rem;\n}\n.footer__content-linkbox[_ngcontent-%COMP%] {\n  margin: 0 2rem;\n}\n.footer__content-socials[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\n.footer__content-socials-a[_ngcontent-%COMP%] {\n  margin: 2rem;\n  cursor: pointer;\n}\n.footer__content-heading[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  border-bottom: 0.2rem solid yellow;\n}\n.footer__content-logo[_ngcontent-%COMP%] {\n  width: 6.5rem;\n  height: 6.5rem;\n}\n.footer__content-box[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.footer__content-li[_ngcontent-%COMP%] {\n  line-height: 4rem;\n}\n.footer__content-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.footer__contact-us[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 10rem;\n  padding: 0;\n  padding-bottom: 2rem;\n  width: 100%;\n  margin-right: 10rem;\n  margin-bottom: 8rem;\n  margin-top: -10rem;\n  background-color: yellow;\n  color: black;\n}\n.footer__contact-us-heading[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  width: 100%;\n  text-align: center;\n  font-size: 3rem;\n  font-family: serif;\n  margin-bottom: 2rem;\n}\n.footer__bottom[_ngcontent-%COMP%] {\n  color: white;\n  font-size: large;\n  width: 100%;\n  text-align: start;\n  padding-left: 8rem;\n  padding-bottom: 3rem;\n  padding-top: 2rem;\n}\n.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.sending[_ngcontent-%COMP%] {\n  align-self: center;\n  color: #075ac9;\n  padding: 2rem;\n}\n@media screen and (max-width: 1050px) {\n  .footer__contact-us[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 5rem;\n    max-height: 40rem;\n    min-width: 30rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9fY29tbW9uLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvX2FuaW1hdGlvbnMuc2NzcyIsInNyYy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLGVBQUE7QUFJQSxtQkFBQTtBQUdBLGtCQUFBO0FDckJBO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0lGO0FERkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDSUo7QURBQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0dGO0FEREU7RUFFRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSwyREFBQTtFQUNBLG1LQUFBO0VBRUEsMkJBQUE7QUNDSjtBREdFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSw0Q0FBQTtFQUEwQyxnQ0FBQTtBQ0Q5QztBRE1BO0VBQ0U7SUFDRSxVQUFBO0VDSEY7RURNQTtJQUNFLFVBQUE7RUNKRjtBQUNGO0FET0E7RUFDRTtJQUNFLFVBQUE7RUNMRjtFRFFBO0lBQ0UsVUFBQTtFQ05GO0FBQ0Y7QURTQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSwrQkFBQTtFQ1JGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSwrQkFBQTtFQ1JGO0FBQ0Y7QURXQTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUNURjtBRFlBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ1RGO0FEWUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ1RGO0FEWUE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNURjtBRFlBO0VBQ0UsaUJBQUE7QUNURjtBRFlBO0VBRUE7SUFDRSxpQkFBQTtFQ1ZBO0FBQ0Y7QURhQTtFQUVBO0lBQ0UsaUJBQUE7RUNaQTtBQUNGO0FDN0dBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0Esd0JBQUE7RUQrR0o7QUFDRjtBQ3ZIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VEK0dKO0FBQ0Y7QUM3R0E7RUFDRTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFRCtHSjtFQzdHQTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFRCtHSjtBQUNGO0FDdkhBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7QUFDRjtBQWhJQTtFRUtFLGFBQUE7RUFDQSxtQkZMYztFQUNkLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQW1JRjtBQWpJRTtFQUNFLE9BQUE7RUVORixhQUFBO0VBQ0EsbUJGTWdCO0VBQ2QsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQW9JSjtBQWxJSTtFQUNFLHNCQUFBO0FBb0lOO0FBaklJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQW1JTjtBQWhJSTtFQUNFLGNBQUE7QUFrSU47QUEvSEk7RUFDRSxrQkFBQTtBQWlJTjtBQWhJTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBa0lSO0FBN0hJO0VBQ0UsbUJBQUE7RUFDQSxrQ0FBQTtBQStITjtBQTVISTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBOEhOO0FBNUhJO0VBQ0UsZ0JBQUE7QUE4SE47QUEzSEk7RUFDRSxpQkFBQTtBQTZITjtBQTFISTtFQUNFLHFCQUFBO0FBNEhOO0FBdEhFO0VBQ0UsT0FBQTtFRTVERixhQUFBO0VBQ0Esc0JGNERnQjtFQUNkLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JGMUVxQjtFRTJFckIsWUFBQTtBQXlISjtBQXhISTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUEwSE47QUF0SEU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUF3SEo7QUFsSEE7RUFDRSxxQkFBQTtBQXFIRjtBQWxIQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFxSEY7QUFqSEE7RUFHSTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBa0hKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS13ZWJzaXRlLWNvbG9yOiAjMDc1YWM5O1xuJHByaW1hcnktd2Vic2l0ZS1jb2xvci1saWdodDogIzlmYzBlYztcbiRzZWNvbmRhcnktd2Vic2l0ZS1jb2xvcjogIzA4NGNhNTtcbiR0ZXJ0aWFyeS13ZWJzaXRlLWNvbG9yOiByZ2JhKDI1NSwyNTUsMCwxKTtcbiRwcmltYXJ5LXRleHQ6ICM0NDQ0NDQ7XG5cbiRzZWNvbmRhcnktYmc6ICNmY2ZjZmM7XG4kc2Vjb25kYXJ5LWJvcmRlcjogI2U5ZWNlZjtcblxuJHByaW1hcnktcmVkOiAjZjUyYjJiO1xuJHByaW1hcnktcmVkLWxpZ2h0OiAjZWVhNGE0O1xuXG5cblxuLyogSW5mbyBCYXNlZCAqL1xuJGNvbG9yLW5vdGlmeTogI2ZmYzEwNztcbiRjb2xvci1pbmZvOiAjMzVjN2RmO1xuXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuLyoqIEdyYXkgU2hhZGVzICoqL1xuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcbiRncmV5LXNoYWRlLTI6ICNjZWNlY2U7XG4kZ3JleS1zaGFkZS0zOiAjZmVmZWZlO1xuJGZhLWZvbnQtcGF0aDogXCJ+Zm9udC1hd2Vzb21lL2ZvbnRzL1wiO1xuIiwiLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAuMXJlbSBzb2xpZCBibGFjaztcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxLjJyZW0gM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMHJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuXG4gICY6aG92ZXJ7XG5cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMS4ycmVtIDNyZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDFweCAycHggMXB4IHRyYW5zcGFyZW50IGluc2V0LFxuICAgIDAgMThweCAzMnB4IC0ycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcblxuICB9XG5cbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgfVxuXG4gICY6YWN0aXZlLCY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCkgc2NhbGUoMC45Nik7XG4gICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoYmxhY2ssIC4yKTsgLyooZGlyZWN0aW9uIHNoYWRvdyBibHVyIGNvbG9yKSovXG4gIH1cblxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMDAlLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuLnNsaWRlSW5Eb3duIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xufVxuXG4uZmFkZUluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmFsZXJ0LW1zZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xuICB0b3A6IDEzcmVtO1xuICB6LWluZGV4OiAxMDA7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA3cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDhyZW07XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xufVxufVxuIiwiQGltcG9ydCBcInNyYy9zdHlsZXMvaW1wb3J0c1wiO1xuXG4uZm9vdGVyIHtcbiAgQGluY2x1ZGUgZmxleChyb3cpO1xuICBtYXJnaW4tdG9wOiAxMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOCwxOCwxNSwxKTtcbiAgcGFkZGluZzogLjVyZW07XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDM4cmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgJl9fY29udGVudCB7XG4gICAgZmxleDogMjtcbiAgICBAaW5jbHVkZSBmbGV4KHJvdyk7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgICAmLWNvbXBhbnlfbmFtZXtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAuNXJlbTtcbiAgICB9XG5cbiAgICAmLWFib3V0X3Vze1xuICAgICAgbWF4LXdpZHRoOiAyMnJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogOHJlbTtcbiAgICB9XG5cbiAgICAmLWxpbmtib3h7XG4gICAgICBtYXJnaW46IDAgMnJlbTtcbiAgICB9XG5cbiAgICAmLXNvY2lhbHMge1xuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgICAgJi1hIHtcbiAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAmLWhlYWRpbmd7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogLjJyZW0gc29saWQgJHRlcnRpYXJ5LXdlYnNpdGUtY29sb3I7XG4gICAgfVxuXG4gICAgJi1sb2dve1xuICAgICAgd2lkdGg6IDYuNXJlbTtcbiAgICAgIGhlaWdodDogNi41cmVtO1xuICAgIH1cbiAgICAmLWJveHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgJi1saXtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICAgIH1cblxuICAgICYtbGlua3tcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG5cblxuICB9XG5cbiAgJl9fY29udGFjdC11c3tcbiAgICBmbGV4OiAxO1xuICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHJlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMTByZW07XG4gICAgbWFyZ2luLWJvdHRvbTogOHJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMTByZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LXdlYnNpdGUtY29sb3I7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgICYtaGVhZGluZ3tcbiAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fYm90dG9te1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIHBhZGRpbmctbGVmdDogOHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgfVxuXG59XG5cblxuLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLnNlbmRpbmcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDc1YWM5O1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCl7XG5cbiAgLmZvb3RlcntcbiAgICAmX19jb250YWN0LXVze1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgbWF4LWhlaWdodDogNDByZW07XG4gICAgICBtaW4td2lkdGg6IDMwcmVtO1xuICAgIH1cbiAgfVxuXG59XG4iLCJcbkBrZXlmcmFtZXMgbW92ZUluQm90dG9tIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZUluVG9wIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xuICB9XG59XG4iLCJAbWl4aW4gdHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbikge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZsZXgtYWxpZ25tZW50KCRtYWluLWF4aXMsICRjcm9zcy1heGlzKSB7XG4gIGp1c3RpZnktY29udGVudDogJG1haW4tYXhpcztcbiAgYWxpZ24taXRlbXM6ICRjcm9zcy1heGlzO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: src_app_core_http_contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"] }]; }, null); })();


/***/ }),

/***/ "NhmW":
/*!***********************************************************!*\
  !*** ./src/app/modules/home/homepage/homepage.service.ts ***!
  \***********************************************************/
/*! exports provided: HomepageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageService", function() { return HomepageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_http_homepage_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/http/homepage-api.service */ "cvwo");



class HomepageService {
    constructor(homepageApiService) {
        this.homepageApiService = homepageApiService;
        this.getHomePage = new Promise((resolve, reject) => {
            if (this.homepage)
                resolve(this.homepage);
            else
                this.homepageApiService.getHomePage().subscribe(response => {
                    if (resolve)
                        resolve(response);
                    else
                        reject();
                });
        });
    }
}
HomepageService.ɵfac = function HomepageService_Factory(t) { return new (t || HomepageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_http_homepage_api_service__WEBPACK_IMPORTED_MODULE_1__["HomepageApiService"])); };
HomepageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomepageService, factory: HomepageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_core_http_homepage_api_service__WEBPACK_IMPORTED_MODULE_1__["HomepageApiService"] }]; }, null); })();


/***/ }),

/***/ "NxTq":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/homepage/homepage.component.ts ***!
  \*************************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _homepage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage.service */ "NhmW");
/* harmony import */ var src_app_core_services_contact_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/contact-info.service */ "OLBm");
/* harmony import */ var _core_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/utility.service */ "qeeY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/product-card/product-card.component */ "ZBvV");









function HomepageComponent_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-product-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", product_r5);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function HomepageComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomepageComponent_div_27_div_2_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recentProduct_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, i_r3 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", recentProduct_r2);
} }
function HomepageComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "figure", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const testimony_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, i_r7 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", testimony_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](testimony_r6.customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", testimony_r6.testimony, " ");
} }
class HomepageComponent {
    constructor(homepageService, contactService, utilityService, router) {
        this.homepageService = homepageService;
        this.contactService = contactService;
        this.utilityService = utilityService;
        this.router = router;
        this.recentProducts = [];
        this.pa1 = [];
        this.pa2 = [];
        this.pa3 = [];
        this.onResize = _ => this.assembelRecentProducts();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.utilityService.showLoader.next(true);
            this.homepage = yield this.homepageService.getHomePage;
            this.utilityService.showLoader.next(false);
            const recents = this.homepage.recentProducts;
            for (let i = 0; i < recents.length; i = i + 3) {
                this.pa1.push(recents.slice(i, i + 3));
            }
            for (let i = 0; i < recents.length; i = i + 2) {
                this.pa2.push(recents.slice(i, i + 2));
            }
            recents.forEach(product => this.pa3.push([product]));
            this.assembelRecentProducts();
            this.contactService.setContactInfo(this.homepage.contact_no, this.homepage.email);
        });
    }
    productDetail(product_id) {
        this.router.navigate(['/product', product_id]);
    }
    assembelRecentProducts() {
        if (window.innerWidth < 700)
            this.recentProducts = this.pa3;
        else if (window.innerWidth < 1120)
            this.recentProducts = this.pa2;
        else
            this.recentProducts = this.pa1;
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_homepage_service__WEBPACK_IMPORTED_MODULE_2__["HomepageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_contact_info_service__WEBPACK_IMPORTED_MODULE_3__["ContactInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], hostBindings: function HomepageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function HomepageComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 75, vars: 2, consts: [[1, "main-container"], [1, "cover-section"], [1, "cover-section__name"], [1, "cover-section__sub-name"], [1, "cover-section__subtitle"], [1, "cover-section__subtitle-span"], [1, "recent-products"], [1, "section-header"], [1, "svg_line"], ["d", "M 0 0 L 376.5347290039063 0", 1, "svg_line__path"], ["aria-hidden", "true", 1, "fa-star", "icon-star"], [1, "section-header__heading"], ["id", "recentProducts", "data-ride", "carousel", "data-interval", "0", 1, "carousel", "slide"], [1, "carousel-inner", 2, "padding", "1rem 8rem"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#recentProducts", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#recentProducts", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "product-type-section", "animated", "fadeIn"], [1, "product-type"], [1, "product-type__item"], ["src", "../../../../assets/images/dry_skin.png", 1, "product-type__item-img"], [1, "product-type__item-text"], ["src", "../../../../assets/images/oily_skin.png", 1, "product-type__item-img"], ["src", "../../../../assets/images/hair_care.png", 1, "product-type__item-img"], ["src", "../../../../assets/images/sun_screen.png", 1, "product-type__item-img"], [1, "testimonies", "fadeIn", "animated"], [1, "testimonies__tray"], ["class", "testimonies__item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "carousel-item", 3, "ngClass"], [1, "recent-products__item", "w-100"], [4, "ngFor", "ngForOf"], [3, "product"], [1, "testimonies__item", 3, "ngClass"], [1, "testimonies__item-avatar"], [1, "testimonies__item-shape"], ["alt", "First slide", 1, "testimonies__item-image", 3, "src"], [1, "heading-tertiary", "u-margin-up-small"], ["src", "../../../../assets/images/double_quotes_start.png", 1, "testimonies__item-quote_1"], [1, "testimonies__item-text"], ["src", "../../../../assets/images/double_quotes_end.png", 1, "testimonies__item-quote_2"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "BIOBRIX");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "HEALTHCARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Dermatology &");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cosmetology");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Skincare Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Our Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HomepageComponent_div_27_Template, 3, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Product Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Dry Skin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Oily Skin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Hair Care");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Sun screens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, HomepageComponent_div_74_Template, 10, 6, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.recentProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.homepage == null ? null : ctx.homepage.testimonies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _shared_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_7__["ProductCardComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Lateef&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap\");\n\n\n\n.loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.main-container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.svg_line[_ngcontent-%COMP%] {\n  height: 0.4rem;\n  padding: 0 1rem;\n}\n.svg_line__path[_ngcontent-%COMP%] {\n  fill: transparent;\n  stroke: yellow;\n  stroke-width: 0.4rem;\n  stroke-linejoin: miter;\n  stroke-linecap: butt;\n  stroke-miterlimit: 4;\n  shape-rendering: auto;\n}\n.icon-star[_ngcontent-%COMP%] {\n  color: yellow;\n  font-size: 2.5rem;\n  transform: skew(14deg);\n}\n.cover-section[_ngcontent-%COMP%] {\n  background: url('bbnew.jpg') no-repeat center center fixed;\n  background-size: cover;\n  height: 95vh;\n}\n.cover-section__name[_ngcontent-%COMP%] {\n  position: absolute;\n  color: yellow;\n  left: 10vh;\n  top: 24vh;\n  font-size: 8vh;\n  font-style: normal;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-weight: normal;\n  white-space: nowrap;\n  letter-spacing: 1.2rem;\n  overflow: visible;\n  border-bottom: 0.3rem white solid;\n  padding-bottom: 0;\n  font-stretch: expanded;\n}\n.cover-section__sub-name[_ngcontent-%COMP%] {\n  position: absolute;\n  color: yellow;\n  left: 10vh;\n  top: 36vh;\n  font-size: 6vh;\n  font-style: normal;\n  font-weight: normal;\n  white-space: nowrap;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  letter-spacing: 0.5rem;\n  font-stretch: expanded;\n}\n.cover-section__subtitle[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  font-size: 6vh;\n  left: 10vh;\n  top: 42vh;\n  font-family: Arial, Helvetica, sans-serif;\n  white-space: nowrap;\n  margin-top: 4rem;\n}\n.cover-section__subtitle-span[_ngcontent-%COMP%] {\n  margin-top: -1.6rem;\n  padding: 0%;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin: 8rem 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  font-size: 40px;\n}\n.section-header__heading[_ngcontent-%COMP%] {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  color: black;\n  margin: 0 1rem;\n  text-align: center;\n}\n.heading-secondary[_ngcontent-%COMP%] {\n  font-family: \"Baloo Tamma 2\", cursive;\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: inline-block;\n  background-image: linear-gradient(to right, #075ac9, #35c7df);\n  letter-spacing: 2px;\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  transition: all 0.2s;\n  padding-top: 5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.product-type[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 5rem 0;\n}\n.product-type__item[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 22vw;\n  transition: all 0.2s;\n  outline-offset: 0.5rem;\n  display: inline-block;\n  position: relative;\n  padding: 2rem;\n  min-width: 25rem;\n  min-height: 20rem;\n  background-image: linear-gradient(to bottom, white 70%, yellow 70%);\n}\n.product-type__item[_ngcontent-%COMP%]:hover {\n  outline: 0.7rem solid #9fc0ec;\n  transform: scale(1.05) translateY(-0.5rem);\n  z-index: 100;\n  cursor: pointer;\n}\n.product-type__item[_ngcontent-%COMP%]:hover   .product-type__item--item-hover[_ngcontent-%COMP%] {\n  visibility: visible;\n  text-align: center;\n  font-size: 2rem;\n  background: rgba(0, 0, 0, 0.2);\n}\n.product-type__item--item-hover[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  visibility: hidden;\n  cursor: pointer;\n  color: #ffffff;\n}\n.product-type__item-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 22vw;\n  min-height: 22rem;\n}\n.product-type__item-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.recent-products[_ngcontent-%COMP%] {\n  display: inline;\n}\n.recent-products__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n.recent-products[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], .recent-products[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n  filter: brightness(0);\n  width: 8rem;\n}\n.testimonies[_ngcontent-%COMP%] {\n  padding-bottom: 10rem;\n}\n.testimonies__tray[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.testimonies__item[_ngcontent-%COMP%] {\n  margin-top: 10rem;\n  width: 30vw;\n  display: flex;\n  min-width: 25rem;\n  padding: 0 1rem;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 3px;\n  background-color: yellow;\n}\n.testimonies__item-avatar[_ngcontent-%COMP%] {\n  margin-top: -6rem;\n  padding: 0;\n}\n.testimonies__item-shape[_ngcontent-%COMP%] {\n  width: 15rem;\n  height: 15rem;\n  shape-outside: circle(50% at 50% 50%);\n  -webkit-clip-path: circle(50% at 50% 50%);\n          clip-path: circle(50% at 50% 50%);\n  position: relative;\n}\n.testimonies__item-image[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.testimonies__item-text[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.testimonies__item-quote_1[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.testimonies__item-quote_2[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n.heading-tertiary[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n}\n.card[_ngcontent-%COMP%] {\n  width: 25rem;\n  margin-bottom: 2rem;\n  position: relative;\n}\n.image[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: capitalize;\n  background-color: white;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.card-footer[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #00889f;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n}\n.card-footer[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-weight: bold;\n  font-size: 2rem;\n}\n.card-footer[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 0.4rem 1rem -1rem rgba(0, 0, 0, 0.2), 0 0.4rem 0.6rem 0.1rem rgba(0, 0, 0, 0.05), 0 0.1rem 0.2rem 0.1rem transparent inset, 0 1.8rem 3.2rem -0.2rem rgba(255, 255, 255, 0.1) inset;\n  padding: 1.2rem 2.5rem;\n  border-radius: 5rem;\n  color: white;\n  margin-top: 1rem;\n  border: 0;\n  font-size: 1.4rem;\n}\n.card-footer[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.product-type-section[_ngcontent-%COMP%] {\n  background-size: cover;\n  padding-top: 3rem;\n}\n.loading-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 38vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.carousel-control-bg[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  transform: skewX(10deg);\n}\n.pager-image[_ngcontent-%COMP%] {\n  height: 35vw;\n}\n.carousel-control-next[_ngcontent-%COMP%] {\n  height: 10% !important;\n  margin: auto 0;\n}\n.carousel-control-prev[_ngcontent-%COMP%] {\n  height: 10% !important;\n  margin: auto 0;\n}\n@media screen and (max-width: 767px) {\n  .cover-section[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    align-items: flex-start;\n    padding-top: 1rem;\n    padding-left: 2rem;\n  }\n  .cover-section__name[_ngcontent-%COMP%] {\n    position: unset;\n    color: yellow;\n    letter-spacing: 1.1rem;\n    font-size: 3.5em;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n  .cover-section__sub-name[_ngcontent-%COMP%] {\n    position: unset;\n    color: yellow;\n    font-size: 2em;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    letter-spacing: 1rem;\n  }\n  .cover-section__subtitle[_ngcontent-%COMP%] {\n    position: unset;\n    margin-top: 4rem;\n    font-size: 2em;\n    background-color: #66666666;\n    padding: 0.5rem;\n    border-radius: 0.3rem;\n  }\n  .cover-section__subtitle-span[_ngcontent-%COMP%] {\n    margin-top: -0.5rem;\n    margin-bottom: -0.5rem;\n    padding: 0%;\n  }\n\n  .section-header[_ngcontent-%COMP%] {\n    margin: 4rem 0;\n    font-size: 30px;\n  }\n  .section-header__heading[_ngcontent-%COMP%] {\n    margin: 0 0.5rem;\n  }\n\n  .svg_line[_ngcontent-%COMP%] {\n    width: 7rem;\n  }\n\n  .icon-star[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJzcmMvc3R5bGVzL19jb21tb24uc2NzcyIsInNyYy9zdHlsZXMvX2FuaW1hdGlvbnMuc2NzcyIsInNyYy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSwyRUFBQTtBQUNBLCtFQUFBO0FBQ0Esa0ZBQUE7QUNXUixlQUFBO0FBSUEsbUJBQUE7QUFHQSxrQkFBQTtBQ3JCQTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUZPRjtBRUxFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBRk9KO0FFSEE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUZNRjtBRUpFO0VBRUUsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkRBQUE7RUFDQSxtS0FBQTtFQUVBLDJCQUFBO0FGSUo7QUVBRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUZFSjtBRUNFO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsNENBQUE7RUFBMEMsZ0NBQUE7QUZFOUM7QUVHQTtFQUNFO0lBQ0UsVUFBQTtFRkFGO0VFR0E7SUFDRSxVQUFBO0VGREY7QUFDRjtBRUlBO0VBQ0U7SUFDRSxVQUFBO0VGRkY7RUVLQTtJQUNFLFVBQUE7RUZIRjtBQUNGO0FFTUE7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsbUJBQUE7RUZKRjtFRU9BO0lBQ0UsK0JBQUE7RUZMRjtBQUNGO0FFSEE7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsbUJBQUE7RUZKRjtFRU9BO0lBQ0UsK0JBQUE7RUZMRjtBQUNGO0FFUUE7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0FGTkY7QUVTQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUZORjtBRVNBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUZORjtBRVNBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FGTkY7QUVTQTtFQUNFLGlCQUFBO0FGTkY7QUVTQTtFQUVBO0lBQ0UsaUJBQUE7RUZQQTtBQUNGO0FFVUE7RUFFQTtJQUNFLGlCQUFBO0VGVEE7QUFDRjtBR2hIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VIa0hKO0VHaEhBO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VIa0hKO0FBQ0Y7QUcxSEE7RUFDRTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFSGtISjtFR2hIQTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFSGtISjtBQUNGO0FHaEhBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUhrSEo7RUdoSEE7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUhrSEo7QUFDRjtBRzFIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VIa0hKO0VHaEhBO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VIa0hKO0FBQ0Y7QUFoSUE7RUFDRSx1QkFBQTtBQWtJRjtBQS9IQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBa0lGO0FBaklFO0VBQ0UsaUJBQUE7RUFDRixjQ1h1QjtFRFl2QixvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBbUlGO0FBOUhBO0VBQ0UsYUN0QnVCO0VEdUJ2QixpQkFBQTtFQUNBLHNCQUFBO0FBaUlGO0FBOUhBO0VBQ0UsMERBQUE7RUFLQSxzQkFBQTtFQUNBLFlBQUE7QUFnSUY7QUEvSEk7RUFDRSxrQkFBQTtFQUNBLGFDckNtQjtFRHNDbkIsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQWlJTjtBQS9IRztFQUNHLGtCQUFBO0VBQ0EsYUNyRG1CO0VEc0RuQixVQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBaUlOO0FBOUhFO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBZ0lOO0FBL0hNO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBaUlSO0FBM0hBO0VBQ0UsY0FBQTtFSWpGQSxhQUFBO0VBQ0EsbUJKaUZjO0VJN0VkLHVCSjhFd0I7RUk3RXhCLG1CSjZFZ0M7RUFDaEMsa0JBQUE7RUFDQSxlQUFBO0FBZ0lGO0FBOUhFO0VBQ0UscURBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZ0lKO0FBM0hBO0VBRUUscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZEQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VJN0dBLGFBQUE7RUFDQSxzQko2R2M7RUl6R2QsdUJKMEd3QjtFSXpHeEIsbUJKeUdnQztFQUNoQyxrQkFBQTtBQStIRjtBQTVIQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBK0hGO0FBN0hFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1FQUFBO0FBK0hKO0FBN0hJO0VBQ0UsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBK0hOO0FBOUhNO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQWdJUjtBQTNISTtFSW5KRixhQUFBO0VBQ0EsbUJKbUprQjtFSS9JbEIsdUJKZ0o0QjtFSS9JNUIsbUJKK0lvQztFQUNoQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQStITjtBQTdISTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUErSE47QUE3SEk7RUFDRSxpQkFBQTtBQStITjtBQXpIQTtFQUNFLGVBQUE7QUE0SEY7QUEzSEk7RUl6S0YsYUFBQTtFQUNBLG1CSjBLZ0I7RUl0S2hCLDZCSnVLMEI7RUl0SzFCLG1CSnNLd0M7QUE4SDFDO0FBM0hFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FBNkhKO0FBeEhBO0VBRUUscUJBQUE7QUEwSEY7QUF4SEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUEwSEo7QUF2SEU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkMvTXFCO0FEd1V6QjtBQXZISTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQXlITjtBQXJISTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUEscUNBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0Esa0JBQUE7QUFzSE47QUFuSEk7RUFFRSxZQUFBO0VBQWMsV0FBQTtBQXFIcEI7QUFsSEk7RUFDRSxpQkFBQTtFQUNBLDREQUFBO0FBb0hOO0FBaEhNO0VBQ0Usc0JBQUE7QUFrSFI7QUFoSE07RUFDRSxvQkFBQTtBQWtIUjtBQTNHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBOEdGO0FBM0dBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUE4R0Y7QUEzR0E7RUFDRSxrQkFBQTtBQThHRjtBQTNHQSxxQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQzNQWTtFRDRQWixnQkFBQTtFQUNBLG1CQUFBO0FBOEdGO0FBNUdFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUE4R0o7QUEzR0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQTZHSjtBQTFHRTtFQUNFLDJEQUFBO0VBQ0EsZ01BQUE7RUFFQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUNqUlU7RURrUlYsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUEyR0o7QUF6R0k7RUFDRSxpQkFBQTtBQTJHTjtBQXRHQTtFQUVFLHNCQUFBO0VBQ0EsaUJBQUE7QUF3R0Y7QUFwR0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFSWpUQSxhQUFBO0VBQ0EsbUJKaVRjO0VJN1NkLHVCSjhTd0I7RUk3U3hCLG1CSjZTZ0M7QUF5R2xDO0FBdEdBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0FBeUdGO0FBdEdBO0VBQ0UsWUFBQTtBQXlHRjtBQXRHQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtBQXlHRjtBQXZHQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtBQTBHRjtBQXZHQTtFQUVFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQXlHRjtFQXZHRTtJQUNFLGVBQUE7SUFDQSxhQ3hWbUI7SUR5Vm5CLHNCQUFBO0lBQ0EsZ0JBQUE7SUFDQSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7RUF5R0o7RUFyR0U7SUFDRSxlQUFBO0lBQ0EsYUNqV21CO0lEa1duQixjQUFBO0lBQ0EsMEJBQUE7SUFBQSx1QkFBQTtJQUFBLGtCQUFBO0lBQ0Esb0JBQUE7RUF1R0o7RUFwR0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsMkJBQUE7SUFDQSxlQUFBO0lBQ0EscUJBQUE7RUFzR0o7RUFyR0k7SUFDRSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtFQXVHTjs7RUFoR0Y7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQW1HQTtFQWxHQTtJQUNFLGdCQUFBO0VBb0dGOztFQWhHQTtJQUNFLFdBQUE7RUFtR0Y7O0VBaEdBO0lBQ0UsaUJBQUE7RUFtR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL2ltcG9ydHNcIjtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdGVlZiZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVllc2V2YStPbmUmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWxvbytUYW1tYSsyJmRpc3BsYXk9c3dhcCcpO1xuXG4ubWFpbi1jb250YWluZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc3ZnX2xpbmV7XG4gIGhlaWdodDogLjRyZW07XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgJl9fcGF0aHtcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgc3Ryb2tlOiAkdGVydGlhcnktd2Vic2l0ZS1jb2xvcjtcbiAgc3Ryb2tlLXdpZHRoOiAuNHJlbTtcbiAgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjtcbiAgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7XG4gIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XG4gIH1cblxufVxuXG4uaWNvbi1zdGFye1xuICBjb2xvcjogJHRlcnRpYXJ5LXdlYnNpdGUtY29sb3I7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICB0cmFuc2Zvcm06IHNrZXcoMTRkZWcpO1xufVxuXG4uY292ZXItc2VjdGlvbntcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvYmJuZXcuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIC8vIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2JibmV3LmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA5NXZoO1xuICAgICZfX25hbWV7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb2xvcjogJHRlcnRpYXJ5LXdlYnNpdGUtY29sb3I7XG4gICAgICBsZWZ0OiAxMHZoO1xuICAgICAgdG9wOiAyNHZoO1xuICAgICAgZm9udC1zaXplOiA4dmg7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjJyZW07XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgIGJvcmRlci1ib3R0b206IC4zcmVtIHdoaXRlIHNvbGlkO1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICBmb250LXN0cmV0Y2g6IGV4cGFuZGVkO1xuICB9XG4gICAmX19zdWItbmFtZXtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbG9yOiAkdGVydGlhcnktd2Vic2l0ZS1jb2xvcjtcbiAgICAgIGxlZnQ6IDEwdmg7XG4gICAgICB0b3A6IDM2dmg7XG4gICAgICBmb250LXNpemU6IDZ2aDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cmVtO1xuICAgICAgZm9udC1zdHJldGNoOiBleHBhbmRlZDtcbiAgfVxuXG4gICZfX3N1YnRpdGxle1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDZ2aDtcbiAgICAgIGxlZnQ6IDEwdmg7XG4gICAgICB0b3A6IDQydmg7XG4gICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgJi1zcGFue1xuICAgICAgICBtYXJnaW4tdG9wOiAtMS42cmVtO1xuICAgICAgICBwYWRkaW5nOiAwJTtcbiAgICAgIH1cbiAgfVxuXG59XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIG1hcmdpbjogOHJlbSAwO1xuICBAaW5jbHVkZSBmbGV4KHJvdyk7XG4gIEBpbmNsdWRlIGZsZXgtYWxpZ25tZW50KGNlbnRlciwgY2VudGVyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDQwcHg7XG5cbiAgJl9faGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbjogMCAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG59XG5cbi5oZWFkaW5nLXNlY29uZGFyeSB7XG5cbiAgZm9udC1mYW1pbHk6ICdCYWxvbyBUYW1tYSAyJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkcHJpbWFyeS13ZWJzaXRlLWNvbG9yLCRjb2xvci1pbmZvKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgQGluY2x1ZGUgZmxleChjb2x1bW4pO1xuICBAaW5jbHVkZSBmbGV4LWFsaWdubWVudChjZW50ZXIsIGNlbnRlcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtdHlwZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmcgOiAgNXJlbSAwO1xuXG4gICZfX2l0ZW0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjJ2dztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAuNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgbWluLXdpZHRoOiAyNXJlbTtcbiAgICBtaW4taGVpZ2h0OiAyMHJlbTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHdoaXRlIDcwJSwkdGVydGlhcnktd2Vic2l0ZS1jb2xvciA3MCUgKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgb3V0bGluZTogLjdyZW0gc29saWQgJHByaW1hcnktd2Vic2l0ZS1jb2xvci1saWdodDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgdHJhbnNsYXRlWSgtLjVyZW0pO1xuICAgICAgei1pbmRleDogMTAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgLnByb2R1Y3QtdHlwZV9faXRlbS0taXRlbS1ob3ZlciB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZShibGFjaywuOCk7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1pdGVtLWhvdmVyIHtcbiAgICAgIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgICAgIEBpbmNsdWRlIGZsZXgtYWxpZ25tZW50KGNlbnRlciwgY2VudGVyKTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgICAmLWltZ3tcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyMnZ3O1xuICAgICAgbWluLWhlaWdodDogMjJyZW07XG4gICAgfVxuICAgICYtdGV4dHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuXG59XG5cbi5yZWNlbnQtcHJvZHVjdHMge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgJl9faXRlbSB7XG5cbiAgICBAaW5jbHVkZSBmbGV4KHJvdyk7XG4gICAgQGluY2x1ZGUgZmxleC1hbGlnbm1lbnQoc3BhY2UtYXJvdW5kLCBjZW50ZXIpO1xuICB9XG5cbiAgLmNhcm91c2VsLWNvbnRyb2wtcHJldiwuY2Fyb3VzZWwtY29udHJvbC1uZXh0e1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKTtcbiAgICB3aWR0aDogOHJlbTtcbiAgfVxufVxuXG5cbi50ZXN0aW1vbmllcyB7XG5cbiAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xuXG4gICZfX3RyYXl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuXG4gICZfX2l0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDEwcmVtO1xuICAgIHdpZHRoOiAzMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiAyNXJlbTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOndoaXRlLCAkYWxwaGE6IC42KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LXdlYnNpdGUtY29sb3I7XG5cbiAgICAmLWF2YXRhciB7XG4gICAgICBtYXJnaW4tdG9wOiAtNnJlbTtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICB9XG5cbiAgICAmLXNoYXBlIHtcbiAgICAgIHdpZHRoOiAxNXJlbTtcbiAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICAvL1JhZGl1cyAvL2FsaWduIGNlbmVyXG4gICAgICBzaGFwZS1vdXRzaWRlOiBjaXJjbGUoNTAlIGF0IDUwJSA1MCUpO1xuICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNTAlIGF0IDUwJSA1MCUpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICYtaW1hZ2V7XG5cbiAgICAgIGhlaWdodDogMTAwJTsgd2lkdGg6ICAxMDAlOyAvLyBvZiBwYXJlbnRcbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgfVxuXG4gICAgJi1xdW90ZXtcbiAgICAgICZfMXtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIH1cbiAgICAgICZfMntcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuLmhlYWRpbmctdGVydGlhcnkge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiogUHJvZHVjdCBEZXRhaWxzICovXG4uY2FyZC1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgLnByb2R1Y3QtbmFtZSB7XG4gICAgY29sb3I6ICMwMDg4OWY7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuXG4gIC5wcm9kdWN0LXByaWNlIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIC5hZGQtdG8tY2FydCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gICAgYm94LXNoYWRvdzogMCAwLjRyZW0gMXJlbSAtMXJlbSByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMC40cmVtIDAuNnJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgICAwIDAuMXJlbSAwLjJyZW0gMC4xcmVtIHRyYW5zcGFyZW50IGluc2V0LCAwIDEuOHJlbSAzLjJyZW0gLTAuMnJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gICAgcGFkZGluZzogMS4ycmVtIDIuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG5cbiAgICAuZmEge1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgfVxuICB9XG59XG5cbi5wcm9kdWN0LXR5cGUtc2VjdGlvbiB7XG4gLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2NhdGVnb3J5X2JhY2tncm91bmQuanBnXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZy10b3A6IDNyZW07XG59XG5cblxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDM4dnc7XG4gIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgQGluY2x1ZGUgZmxleC1hbGlnbm1lbnQoY2VudGVyLCBjZW50ZXIpO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1iZyB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgdHJhbnNmb3JtOiBza2V3WCgxMGRlZyk7XG59XG5cbi5wYWdlci1pbWFnZSB7XG4gIGhlaWdodDogMzV2dztcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIGhlaWdodDogMTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0byAwO1xufVxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gIGhlaWdodDogMTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0byAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXG4gIC5jb3Zlci1zZWN0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuXG4gICAgJl9fbmFtZXtcbiAgICAgIHBvc2l0aW9uOiB1bnNldDtcbiAgICAgIGNvbG9yOiAkdGVydGlhcnktd2Vic2l0ZS1jb2xvcjtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjFyZW07XG4gICAgICBmb250LXNpemU6IDMuNWVtO1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgfVxuXG4gICAgJl9fc3ViLW5hbWV7XG4gICAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgICBjb2xvcjogJHRlcnRpYXJ5LXdlYnNpdGUtY29sb3I7XG4gICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcmVtO1xuICAgIH1cblxuICAgICZfX3N1YnRpdGxle1xuICAgICAgcG9zaXRpb246IHVuc2V0O1xuICAgICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjY2O1xuICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcbiAgICAgICYtc3BhbntcbiAgICAgICAgbWFyZ2luLXRvcDogLS41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtLjVyZW07XG4gICAgICAgIHBhZGRpbmc6IDAlO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgbWFyZ2luOiA0cmVtIDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgJl9faGVhZGluZyB7XG4gICAgbWFyZ2luOiAwIC41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5zdmdfbGluZXtcbiAgICB3aWR0aDogN3JlbTtcbiAgfVxuXG4gIC5pY29uLXN0YXJ7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG5cbiAgfVxuXG59XG4iLCIkcHJpbWFyeS13ZWJzaXRlLWNvbG9yOiAjMDc1YWM5O1xuJHByaW1hcnktd2Vic2l0ZS1jb2xvci1saWdodDogIzlmYzBlYztcbiRzZWNvbmRhcnktd2Vic2l0ZS1jb2xvcjogIzA4NGNhNTtcbiR0ZXJ0aWFyeS13ZWJzaXRlLWNvbG9yOiByZ2JhKDI1NSwyNTUsMCwxKTtcbiRwcmltYXJ5LXRleHQ6ICM0NDQ0NDQ7XG5cbiRzZWNvbmRhcnktYmc6ICNmY2ZjZmM7XG4kc2Vjb25kYXJ5LWJvcmRlcjogI2U5ZWNlZjtcblxuJHByaW1hcnktcmVkOiAjZjUyYjJiO1xuJHByaW1hcnktcmVkLWxpZ2h0OiAjZWVhNGE0O1xuXG5cblxuLyogSW5mbyBCYXNlZCAqL1xuJGNvbG9yLW5vdGlmeTogI2ZmYzEwNztcbiRjb2xvci1pbmZvOiAjMzVjN2RmO1xuXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuLyoqIEdyYXkgU2hhZGVzICoqL1xuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcbiRncmV5LXNoYWRlLTI6ICNjZWNlY2U7XG4kZ3JleS1zaGFkZS0zOiAjZmVmZWZlO1xuJGZhLWZvbnQtcGF0aDogXCJ+Zm9udC1hd2Vzb21lL2ZvbnRzL1wiO1xuIiwiLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAuMXJlbSBzb2xpZCBibGFjaztcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxLjJyZW0gM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMHJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuXG4gICY6aG92ZXJ7XG5cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMS4ycmVtIDNyZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDFweCAycHggMXB4IHRyYW5zcGFyZW50IGluc2V0LFxuICAgIDAgMThweCAzMnB4IC0ycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcblxuICB9XG5cbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgfVxuXG4gICY6YWN0aXZlLCY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCkgc2NhbGUoMC45Nik7XG4gICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoYmxhY2ssIC4yKTsgLyooZGlyZWN0aW9uIHNoYWRvdyBibHVyIGNvbG9yKSovXG4gIH1cblxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMDAlLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuLnNsaWRlSW5Eb3duIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xufVxuXG4uZmFkZUluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmFsZXJ0LW1zZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xuICB0b3A6IDEzcmVtO1xuICB6LWluZGV4OiAxMDA7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA3cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDhyZW07XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xufVxufVxuIiwiXG5Aa2V5ZnJhbWVzIG1vdmVJbkJvdHRvbSB7XG4gIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVJblRvcCB7XG4gIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcbiAgfVxufVxuIiwiQG1peGluIHRydW5jYXRlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb24pIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmbGV4LWFsaWdubWVudCgkbWFpbi1heGlzLCAkY3Jvc3MtYXhpcykge1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRtYWluLWF4aXM7XG4gIGFsaWduLWl0ZW1zOiAkY3Jvc3MtYXhpcztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss']
            }]
    }], function () { return [{ type: _homepage_service__WEBPACK_IMPORTED_MODULE_2__["HomepageService"] }, { type: src_app_core_services_contact_info_service__WEBPACK_IMPORTED_MODULE_3__["ContactInfoService"] }, { type: _core_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "OLBm":
/*!*******************************************************!*\
  !*** ./src/app/core/services/contact-info.service.ts ***!
  \*******************************************************/
/*! exports provided: ContactInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoService", function() { return ContactInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ContactInfomation {
    constructor(phone, email) {
        this.phone = phone;
        this.email = email;
    }
}
class ContactInfoService {
    constructor() {
        this.contactInfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.phone = '+91 93130 17818';
        this.email = 'info@biobrix.com';
    }
    setContactInfo(phone, email) {
        this.phone = phone;
        this.email = email;
        this.contactInfo.next(new ContactInfomation(phone, email));
    }
}
ContactInfoService.ɵfac = function ContactInfoService_Factory(t) { return new (t || ContactInfoService)(); };
ContactInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactInfoService, factory: ContactInfoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactInfoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-input/search-input.component */ "lbjL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-card/product-card.component */ "ZBvV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-container/main-container.component */ "1lc2");








const declarationsAndExports = [
    _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_1__["SearchInputComponent"],
    _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__["ProductCardComponent"],
    _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_6__["MainContainerComponent"]
];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_1__["SearchInputComponent"],
        _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__["ProductCardComponent"],
        _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_6__["MainContainerComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_1__["SearchInputComponent"],
        _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__["ProductCardComponent"],
        _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_6__["MainContainerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [...declarationsAndExports],
                imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
                exports: [...declarationsAndExports]
            }]
    }], null, null); })();


/***/ }),

/***/ "PVyf":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/products/products.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants_products_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/products.const */ "yt3l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/data.service */ "cplz");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/cart.service */ "7pSQ");
/* harmony import */ var src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/http/product-api.service */ "9hIC");
/* harmony import */ var src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/utility.service */ "qeeY");
/* harmony import */ var _shared_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/main-container/main-container.component */ "1lc2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/product-card/product-card.component */ "ZBvV");
/* harmony import */ var src_app_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/loading-spinner/loading-spinner.component */ "nk+c");












const _c0 = function (a0) { return { "active": a0 }; };
function ProductsComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const category_r4 = ctx.$implicit; const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onCategoryButtonClick(category_r4.id, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r5 === ctx_r0.selectedCategoryIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r4.categoryName, " ");
} }
function ProductsComponent_div_9_ng_container_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r13);
} }
function ProductsComponent_div_9_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsComponent_div_9_ng_container_1_div_1_div_4_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r11.category_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r11.product_list);
} }
function ProductsComponent_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_div_9_ng_container_1_div_1_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.productList);
} }
function ProductsComponent_div_9_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r15);
} }
function ProductsComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_div_9_div_2_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.productList);
} }
function ProductsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_div_9_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_div_9_div_2_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tag);
} }
function ProductsComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductsComponent {
    constructor(route, router, dataService, cartService, productService, utilityService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.cartService = cartService;
        this.productService = productService;
        this.utilityService = utilityService;
        this.isLoading = false;
    }
    getCategoryList() {
        this.productService.getCategoryList().subscribe({
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
        //this.utilityService.showLoader.next(true);
        this.isLoading = true;
        this.productService.getProductList(params).subscribe({
            next: (data) => {
                this.productList = Array.isArray(data) ? data : [data];
                // this.utilityService.showLoader.next(false);
                this.isLoading = false;
            }
        });
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
        this.tag = '';
        this.selectedCategoryIndex = selectedCategoryIndex;
        this.router.navigate(['/products', categoryId]);
        window.scroll(0, 0);
    }
    handleParamsChange(params) {
        if (!params.categoryId) {
            return;
        }
        this.categoryId = params.categoryId;
        if (!!this.tag) {
            this.getTagsProducts();
        }
        else {
            this.getProductList(params.categoryId);
        }
        this.setActiveCategory();
    }
    ngOnInit() {
        this.getCategoryList();
        this.tag = this.route.snapshot.queryParamMap.get('tag');
        this.route.params.subscribe(p => this.handleParamsChange(p));
        this.route.queryParams.subscribe(p => this.handleQueryParamsChange(p));
    }
    getTagsProducts() {
        //this.utilityService.showLoader.next(true);
        this.isLoading = true;
        if (this.tag) {
            this.productService.getSimilarProducts(this.tag).subscribe(res => {
                if (res) {
                    this.productList = Array.isArray(res) ? res : [res];
                    //this.utilityService.showLoader.next(false);
                    this.isLoading = false;
                }
            }, err => this.isLoading = false);
            //}, err => this.utilityService.showLoader.next(false));
        }
        else {
            this.getProductList('all');
        }
    }
    handleQueryParamsChange(queryParams) {
        this.tag = queryParams.search;
        this.getTagsProducts();
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_5__["ProductApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 12, vars: 3, consts: [["title", "PRODUCTS"], [1, "flex_container"], [1, "product-filter"], [1, "heading"], ["role", "button", 3, "click", 4, "ngFor", "ngForOf"], ["class", "product-list", 4, "ngIf", "ngIfElse"], ["loading_circular", ""], ["role", "button", 3, "click"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"], [1, "product-list"], [4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row category", 4, "ngFor", "ngForOf"], [1, "row", "category"], [1, "col-md-12", "name"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [3, "product"], [1, "row"], [1, "spinner"], [1, "spinner__circle"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-main-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductsComponent_li_8_Template, 3, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductsComponent_div_9_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductsComponent_ng_template_10_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r2);
    } }, directives: [_shared_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_7__["MainContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _shared_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__["ProductCardComponent"], src_app_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__["LoadingSpinnerComponent"]], styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n\n.product-filter[_ngcontent-%COMP%] {\n  position: fixed;\n  background: #f1f1f1;\n  height: 100vh;\n  width: 25rem;\n  overflow: auto;\n  padding: 2rem;\n  \n}\n.product-filter[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  padding: 1.8rem 3rem;\n  background-color: #075ac9;\n  color: white;\n  border-radius: 1rem;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 1.2rem;\n  margin-top: 2rem;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #35c7df;\n  font-weight: 800;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1rem 3rem;\n  border-bottom: 0.1rem dashed #cecece;\n  list-style: none;\n  cursor: pointer;\n  position: relative;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0.7rem;\n  height: 0.7rem;\n  border-radius: 100%;\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 2rem;\n  background-color: #35c7df;\n}\n.product-filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  border: 0;\n}\n.product-filter[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #444444;\n  text-transform: capitalize;\n}\n.product-list[_ngcontent-%COMP%] {\n  margin-left: 25rem;\n  padding: 2rem;\n  min-height: 50rem;\n  \n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  margin-bottom: 1.5rem;\n}\n.product-list[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.spinner[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 50%;\n  height: 50vh;\n  position: relative;\n  min-height: 50rem;\n}\n.spinner__circle[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n@media screen and (max-width: 767px) {\n  .flex_container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap-reverse;\n  }\n\n  .product-filter[_ngcontent-%COMP%] {\n    height: auto;\n    position: unset;\n    background: transparent;\n    margin: auto;\n  }\n\n  .product-list[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9fY29tbW9uLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvX2FuaW1hdGlvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQSxlQUFBO0FBSUEsbUJBQUE7QUFHQSxrQkFBQTtBQ3JCQTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNJRjtBREZFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0lKO0FEQUE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNHRjtBRERFO0VBRUUsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkRBQUE7RUFDQSxtS0FBQTtFQUVBLDJCQUFBO0FDQ0o7QURHRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsNENBQUE7RUFBMEMsZ0NBQUE7QUNEOUM7QURNQTtFQUNFO0lBQ0UsVUFBQTtFQ0hGO0VETUE7SUFDRSxVQUFBO0VDSkY7QUFDRjtBRE9BO0VBQ0U7SUFDRSxVQUFBO0VDTEY7RURRQTtJQUNFLFVBQUE7RUNORjtBQUNGO0FEU0E7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsbUJBQUE7RUNQRjtFRFVBO0lBQ0UsK0JBQUE7RUNSRjtBQUNGO0FEQUE7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsbUJBQUE7RUNQRjtFRFVBO0lBQ0UsK0JBQUE7RUNSRjtBQUNGO0FEV0E7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0FDVEY7QURZQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUNURjtBRFlBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUNURjtBRFlBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDVEY7QURZQTtFQUNFLGlCQUFBO0FDVEY7QURZQTtFQUVBO0lBQ0UsaUJBQUE7RUNWQTtBQUNGO0FEYUE7RUFFQTtJQUNFLGlCQUFBO0VDWkE7QUFDRjtBQzdHQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VEK0dKO0FBQ0Y7QUN2SEE7RUFDRTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFRCtHSjtFQzdHQTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFRCtHSjtBQUNGO0FDN0dBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7QUFDRjtBQ3ZIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0FBQ0Y7QUFoSUEsNkJBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFRQSxzQkFBQTtBQTJIRjtBQWxJRTtFQUNFLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFvSUo7QUFoSUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBa0lKO0FBaklJO0VBQ0UsY0ZOTztFRU9QLGdCQUFBO0FBbUlOO0FBaElJO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBa0lOO0FBaElNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJGM0JLO0FFNkpiO0FBOUhJO0VBQ0UsU0FBQTtBQWdJTjtBQTVIRTtFQUNFLGlCQUFBO0VBQ0EsY0ZsRFc7RUVtRFgsMEJBQUE7QUE4SEo7QUExSEE7RUFFRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBNEhGO0FBM0hFO0VBQ0UsbUJBQUE7QUE2SEo7QUEzSEk7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0FBNkhOO0FBMUhJO0VBQ0UsaUJBQUE7QUE0SE47QUF2SEE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7RUFBZSxrQkFBQTtFQUMzQixpQkFBQTtBQTRIRjtBQTNIRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUE2SEo7QUF6SEE7RUFFSTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBMkhOOztFQXhIRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0VBMkhKOztFQXhIRTtJQUNFLGNBQUE7RUEySEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LXdlYnNpdGUtY29sb3I6ICMwNzVhYzk7XG4kcHJpbWFyeS13ZWJzaXRlLWNvbG9yLWxpZ2h0OiAjOWZjMGVjO1xuJHNlY29uZGFyeS13ZWJzaXRlLWNvbG9yOiAjMDg0Y2E1O1xuJHRlcnRpYXJ5LXdlYnNpdGUtY29sb3I6IHJnYmEoMjU1LDI1NSwwLDEpO1xuJHByaW1hcnktdGV4dDogIzQ0NDQ0NDtcblxuJHNlY29uZGFyeS1iZzogI2ZjZmNmYztcbiRzZWNvbmRhcnktYm9yZGVyOiAjZTllY2VmO1xuXG4kcHJpbWFyeS1yZWQ6ICNmNTJiMmI7XG4kcHJpbWFyeS1yZWQtbGlnaHQ6ICNlZWE0YTQ7XG5cblxuXG4vKiBJbmZvIEJhc2VkICovXG4kY29sb3Itbm90aWZ5OiAjZmZjMTA3O1xuJGNvbG9yLWluZm86ICMzNWM3ZGY7XG5cbi8qIFByb3BlcnR5IEJhc2VkICovXG4kY29sb3Itd2hpdGU6IHdoaXRlO1xuXG4vKiogR3JheSBTaGFkZXMgKiovXG4kZ3JleS1zaGFkZS0xOiAjZjFmMWYxO1xuJGdyZXktc2hhZGUtMjogI2NlY2VjZTtcbiRncmV5LXNoYWRlLTM6ICNmZWZlZmU7XG4kZmEtZm9udC1wYXRoOiBcIn5mb250LWF3ZXNvbWUvZm9udHMvXCI7XG4iLCIubG9hZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogOTk7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuLnByaW1hcnktYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IC4xcmVtIHNvbGlkIGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEuMnJlbSAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAwcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XG5cbiAgJjpob3ZlcntcblxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxLjJyZW0gM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMDc1YWM5LCAjMzVjN2RmKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDJweCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsXG4gICAgMCAxOHB4IDMycHggLTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuXG4gIH1cblxuICAuZmEge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICB9XG5cbiAgJjphY3RpdmUsJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KSBzY2FsZSgwLjk2KTtcbiAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYShibGFjaywgLjIpOyAvKihkaXJlY3Rpb24gc2hhZG93IGJsdXIgY29sb3IpKi9cbiAgfVxuXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMCUsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG4uc2xpZGVJbkRvd24ge1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkRvd247XG59XG5cbi5mYWRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG59XG5cbi5hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uYWxlcnQtbXNnIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogY2FsYyg1MCUgLSAxNTBweCk7XG4gIHRvcDogMTNyZW07XG4gIHotaW5kZXg6IDEwMDtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDdyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogOHJlbTtcbn1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDRyZW07XG59XG59XG4iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy9pbXBvcnRzXCI7XG5cbi8qKiAgUHJvZHVjdCBTaWRlYmFyIEZpbHRlciAqL1xuLnByb2R1Y3QtZmlsdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMjVyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAycmVtO1xuICAuaGVhZGluZyB7XG4gICAgcGFkZGluZzogMS44cmVtIDNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3NWFjOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgfVxuXG4gIC8qKiBDYXRlZ29yeSBIZWFkaW5nICovXG4gIHVsIHtcbiAgICBwYWRkaW5nOiAwIDEuMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIC5hY3RpdmUge1xuICAgICAgY29sb3I6ICRjb2xvci1pbmZvO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gZGFzaGVkICRncmV5LXNoYWRlLTI7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICA6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAwLjdyZW07XG4gICAgICAgIGhlaWdodDogMC43cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMnJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWluZm87XG4gICAgICB9XG4gICAgfVxuXG4gICAgOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tbGluayB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbn1cblxuLnByb2R1Y3QtbGlzdCB7XG5cbiAgbWFyZ2luLWxlZnQ6IDI1cmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICBtaW4taGVpZ2h0OiA1MHJlbTtcbiAgLyoqIENhdGVnb3J5IERldGFpbHMgKi9cbiAgLmNhdGVnb3J5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgLm5hbWUge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59XG5cbi5zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTAlOyBoZWlnaHQ6IDUwdmg7ICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDUwcmVtO1xuICAmX19jaXJjbGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG5cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbiAgICAuZmxleF9jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWZpbHRlciB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICAucHJvZHVjdC1saXN0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxufVxuIiwiXG5Aa2V5ZnJhbWVzIG1vdmVJbkJvdHRvbSB7XG4gIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVJblRvcCB7XG4gIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }, { type: src_app_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_5__["ProductApiService"] }, { type: src_app_core_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



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

/***/ "UVrD":
/*!***********************************************************************!*\
  !*** ./src/app/modules/home/trade-enquiry/trade-enquiry.component.ts ***!
  \***********************************************************************/
/*! exports provided: TradeEnquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeEnquiryComponent", function() { return TradeEnquiryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_http_contact_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/http/contact-us.service */ "xPrH");
/* harmony import */ var _shared_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/main-container/main-container.component */ "1lc2");






class TradeEnquiryComponent {
    constructor(contactUsService) {
        this.contactUsService = contactUsService;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            reference: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            associated: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            exposure: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            profile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    submit() {
        if (!this.form.valid) {
            this.showMessage('Please fill all the required fields', true);
            return;
        }
        this.showMessage('Sending...', false);
        console.log(this.form.value);
        this.contactUsService.sendEnquiry(this.form.value).subscribe(send => {
            this.form.reset();
            this.showMessage('Your query has been submitted. Thank you', false);
        }, _ => this.showMessage('Sending falied!!', true));
    }
    showMessage(message, error) {
        const msg = document.createElement('div');
        msg.innerText = message;
        msg.classList.add('alert');
        msg.classList.add(error ? 'alert-danger' : 'alert-success');
        msg.classList.add('alert-msg');
        msg.classList.add('animated');
        msg.classList.add('slideInDown');
        document.body.appendChild(msg);
        setTimeout(() => {
            document.body.removeChild(msg);
        }, 3000);
    }
}
TradeEnquiryComponent.ɵfac = function TradeEnquiryComponent_Factory(t) { return new (t || TradeEnquiryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_http_contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"])); };
TradeEnquiryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TradeEnquiryComponent, selectors: [["app-trade-enquiry"]], decls: 63, vars: 1, consts: [["title", "TRADE ENQUIRY"], [1, "trade-enquiry-container", 3, "formGroup"], [1, "trade-enquiry-container__section"], [1, "form-group"], ["for", "name"], ["type", "text", "formControlName", "name", "id", "name", "aria-describedby", "nameHelp", "placeholder", "Enter full name", 1, "form-control", "form-control-lg"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control", "form-control-lg"], ["for", "mobile"], ["type", "text", "id", "mobile", "formControlName", "mobile", "aria-describedby", "mobileHelp", "placeholder", "Enter mobile", 1, "form-control", "form-control-lg"], ["for", "city"], ["type", "text", "id", "city", "formControlName", "city", "aria-describedby", "cityHelp", "placeholder", "Enter city", 1, "form-control", "form-control-lg"], ["for", "state"], ["type", "text", "id", "state", "formControlName", "state", "aria-describedby", "emailHelp", "placeholder", "Enter state", 1, "form-control", "form-control-lg"], ["for", "country"], ["type", "text", "id", "country", "formControlName", "country", "aria-describedby", "countryHelp", "placeholder", "Enter country", 1, "form-control", "form-control-lg"], ["for", "age"], ["type", "text", "id", "age", "formControlName", "age", "aria-describedby", "ageHelp", "placeholder", "Enter age", 1, "form-control", "form-control-lg"], ["for", "companyName"], ["type", "text", "id", "companyName", "formControlName", "company", "aria-describedby", "companyNameHelp", "placeholder", "Enter company name", 1, "form-control", "form-control-lg"], ["for", "reference"], ["type", "text", "id", "reference", "formControlName", "reference", "aria-describedby", "companyNameHelp", "placeholder", "Enter company name", 1, "form-control", "form-control-lg"], ["for", "associated"], ["type", "text", "id", "associated", "formControlName", "associated", "aria-describedby", "companyNameHelp", "placeholder", "Enter company name", 1, "form-control", "form-control-lg"], ["for", "exposure"], ["type", "text", "id", "exposure", "formControlName", "exposure", "aria-describedby", "companyNameHelp", "placeholder", "Enter company name", 1, "form-control", "form-control-lg"], ["for", "address"], ["type", "text", "id", "address", "formControlName", "address", "aria-describedby", "companyNameHelp", "placeholder", "Enter company name", "rows", "5", 1, "form-control", "form-control-lg"], ["for", "profile"], ["type", "text", "id", "profile", "formControlName", "profile", "aria-describedby", "companyNameHelp", "placeholder", "Enter company name", 1, "form-control", "form-control-lg"], ["for", "comments"], ["type", "text", "id", "comments", "formControlName", "comments", "aria-describedby", "companyNameHelp", "placeholder", "Enter company name", "rows", "5", 1, "form-control", "form-control-lg"], [1, "submit-btn"], ["type", "button", 1, "btn", "primary-button", 3, "click"]], template: function TradeEnquiryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-main-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Full name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mobile*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "City*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "State*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Country*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Company name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Our reference you got from*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Since How Long associated With Pharma Field*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Any exposure in derma products ?*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Address*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Current profile*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Enquiry/Comments*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TradeEnquiryComponent_Template_button_click_61_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_shared_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_3__["MainContainerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.trade-enquiry-container[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n  padding: 0 8rem 4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.trade-enquiry-container__section[_ngcontent-%COMP%] {\n  min-width: 35%;\n  flex: 1;\n  margin: 0 4rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n@media screen and (max-width: 800px) {\n  .trade-enquiry-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9fY29tbW9uLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS90cmFkZS1lbnF1aXJ5L3RyYWRlLWVucXVpcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL19hbmltYXRpb25zLnNjc3MiLCJzcmMvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQSxlQUFBO0FBSUEsbUJBQUE7QUFHQSxrQkFBQTtBQ3JCQTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNJRjtBREZFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0lKO0FEQUE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNHRjtBRERFO0VBRUUsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkRBQUE7RUFDQSxtS0FBQTtFQUVBLDJCQUFBO0FDQ0o7QURHRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsNENBQUE7RUFBMEMsZ0NBQUE7QUNEOUM7QURNQTtFQUNFO0lBQ0UsVUFBQTtFQ0hGO0VETUE7SUFDRSxVQUFBO0VDSkY7QUFDRjtBRE9BO0VBQ0U7SUFDRSxVQUFBO0VDTEY7RURRQTtJQUNFLFVBQUE7RUNORjtBQUNGO0FEU0E7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsbUJBQUE7RUNQRjtFRFVBO0lBQ0UsK0JBQUE7RUNSRjtBQUNGO0FEQUE7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsbUJBQUE7RUNQRjtFRFVBO0lBQ0UsK0JBQUE7RUNSRjtBQUNGO0FEV0E7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0FDVEY7QURZQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUNURjtBRFlBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUNURjtBRFlBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDVEY7QURZQTtFQUNFLGlCQUFBO0FDVEY7QURZQTtFQUVBO0lBQ0UsaUJBQUE7RUNWQTtBQUNGO0FEYUE7RUFFQTtJQUNFLGlCQUFBO0VDWkE7QUFDRjtBQzdHQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VEK0dKO0FBQ0Y7QUN2SEE7RUFDRTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFRCtHSjtFQzdHQTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFRCtHSjtBQUNGO0FDN0dBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7QUFDRjtBQ3ZIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0FBQ0Y7QUFoSUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFRU9BLDhCRk53QjtFRU94Qix1QkZQdUM7RUFDdkMsZUFBQTtBQW1JRjtBQWxJRztFQUNHLGNBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtBQW9JTjtBQWhJQTtFQUNFLG1CQUFBO0FBbUlGO0FBaElBO0VFWkUsYUFBQTtFQUNBLG1CRlljO0VFUmQsdUJGU3dCO0VFUnhCLG1CRlFnQztFQUNoQyxtQkFBQTtBQXFJRjtBQW5JQTtFQUNFO0lBQ0UsVUFBQTtFQXNJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL3RyYWRlLWVucXVpcnkvdHJhZGUtZW5xdWlyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LXdlYnNpdGUtY29sb3I6ICMwNzVhYzk7XG4kcHJpbWFyeS13ZWJzaXRlLWNvbG9yLWxpZ2h0OiAjOWZjMGVjO1xuJHNlY29uZGFyeS13ZWJzaXRlLWNvbG9yOiAjMDg0Y2E1O1xuJHRlcnRpYXJ5LXdlYnNpdGUtY29sb3I6IHJnYmEoMjU1LDI1NSwwLDEpO1xuJHByaW1hcnktdGV4dDogIzQ0NDQ0NDtcblxuJHNlY29uZGFyeS1iZzogI2ZjZmNmYztcbiRzZWNvbmRhcnktYm9yZGVyOiAjZTllY2VmO1xuXG4kcHJpbWFyeS1yZWQ6ICNmNTJiMmI7XG4kcHJpbWFyeS1yZWQtbGlnaHQ6ICNlZWE0YTQ7XG5cblxuXG4vKiBJbmZvIEJhc2VkICovXG4kY29sb3Itbm90aWZ5OiAjZmZjMTA3O1xuJGNvbG9yLWluZm86ICMzNWM3ZGY7XG5cbi8qIFByb3BlcnR5IEJhc2VkICovXG4kY29sb3Itd2hpdGU6IHdoaXRlO1xuXG4vKiogR3JheSBTaGFkZXMgKiovXG4kZ3JleS1zaGFkZS0xOiAjZjFmMWYxO1xuJGdyZXktc2hhZGUtMjogI2NlY2VjZTtcbiRncmV5LXNoYWRlLTM6ICNmZWZlZmU7XG4kZmEtZm9udC1wYXRoOiBcIn5mb250LWF3ZXNvbWUvZm9udHMvXCI7XG4iLCIubG9hZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogOTk7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuLnByaW1hcnktYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IC4xcmVtIHNvbGlkIGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEuMnJlbSAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAwcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XG5cbiAgJjpob3ZlcntcblxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxLjJyZW0gM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMDc1YWM5LCAjMzVjN2RmKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDJweCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsXG4gICAgMCAxOHB4IDMycHggLTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuXG4gIH1cblxuICAuZmEge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICB9XG5cbiAgJjphY3RpdmUsJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KSBzY2FsZSgwLjk2KTtcbiAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYShibGFjaywgLjIpOyAvKihkaXJlY3Rpb24gc2hhZG93IGJsdXIgY29sb3IpKi9cbiAgfVxuXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMCUsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG4uc2xpZGVJbkRvd24ge1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkRvd247XG59XG5cbi5mYWRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG59XG5cbi5hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uYWxlcnQtbXNnIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogY2FsYyg1MCUgLSAxNTBweCk7XG4gIHRvcDogMTNyZW07XG4gIHotaW5kZXg6IDEwMDtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDdyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogOHJlbTtcbn1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDRyZW07XG59XG59XG4iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy9pbXBvcnRzXCI7XG5cbi50cmFkZS1lbnF1aXJ5LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIHBhZGRpbmc6IDAgOHJlbSA0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBAaW5jbHVkZSBmbGV4LWFsaWdubWVudChzcGFjZS1iZXR3ZWVuLCBmbGV4LXN0YXJ0KTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAgJl9fc2VjdGlvbiB7XG4gICAgICBtaW4td2lkdGg6IDM1JTtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXJnaW46IDAgNHJlbTtcbiAgICB9XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBAaW5jbHVkZSBmbGV4KHJvdyk7XG4gIEBpbmNsdWRlIGZsZXgtYWxpZ25tZW50KGNlbnRlciwgY2VudGVyKTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC50cmFkZS1lbnF1aXJ5LWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4iLCJcbkBrZXlmcmFtZXMgbW92ZUluQm90dG9tIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZUluVG9wIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xuICB9XG59XG4iLCJAbWl4aW4gdHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbikge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZsZXgtYWxpZ25tZW50KCRtYWluLWF4aXMsICRjcm9zcy1heGlzKSB7XG4gIGp1c3RpZnktY29udGVudDogJG1haW4tYXhpcztcbiAgYWxpZ24taXRlbXM6ICRjcm9zcy1heGlzO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TradeEnquiryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trade-enquiry',
                templateUrl: './trade-enquiry.component.html',
                styleUrls: ['./trade-enquiry.component.scss']
            }]
    }], function () { return [{ type: src_app_core_http_contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_config_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-config.module */ "KPA2");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _app_config_module__WEBPACK_IMPORTED_MODULE_3__["AppConfigModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _app_config_module__WEBPACK_IMPORTED_MODULE_3__["AppConfigModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _app_config_module__WEBPACK_IMPORTED_MODULE_3__["AppConfigModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZBvV":
/*!***************************************************************!*\
  !*** ./src/app/shared/product-card/product-card.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/cart.service */ "7pSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ProductCardComponent_div_0_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2713 Added to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductCardComponent_div_0_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardComponent_div_0_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addToCart(ctx_r4.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add To Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/view-cart"]; };
function ProductCardComponent_div_0_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Go To Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function ProductCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardComponent_div_0_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.productDetail(ctx_r6.product.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductCardComponent_div_0_i_9_Template, 2, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductCardComponent_div_0_button_10_Template, 3, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductCardComponent_div_0_a_11_Template, 3, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx_r0.product.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.inCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.inCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.inCart);
} }
class ProductCardComponent {
    constructor(router, cartService) {
        this.router = router;
        this.cartService = cartService;
        this.inCart = false;
        this.productDetail = (id) => this.router.navigate(['/product', id]).then(r => console.log(r));
    }
    ngOnInit() {
        this.inCart = this.cartService.itemInCart(this.product.product_id);
    }
    addToCart(product) {
        if (!product) {
            return;
        }
        product.quantity = 1;
        product.total = product.price;
        this.cartService.addToCart(product);
        this.inCart = this.cartService.itemInCart(this.product.product_id);
    }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
ProductCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, decls: 1, vars: 1, consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "image"], ["alt", "...", 1, "card-img-top", 3, "src", "click"], [1, "card-footer"], [1, "product-name"], [1, "product-price"], [1, "add_to_cart"], [4, "ngIf"], ["type", "button", "class", "btn primary-button", 3, "click", 4, "ngIf"], ["class", "btn primary-button", 3, "routerLink", 4, "ngIf"], ["type", "button", 1, "btn", "primary-button", 3, "click"], [1, "fa", "fa-shopping-cart"], [1, "btn", "primary-button", 3, "routerLink"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductCardComponent_div_0_Template, 12, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product == null ? null : ctx.product.product_id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  min-width: 25rem;\n  width: 25vw;\n  position: relative;\n  border: transparent 0rem;\n  transition: all 0.2s;\n  background-image: linear-gradient(to bottom, white 40%, yellow 30%);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.image[_ngcontent-%COMP%] {\n  display: block;\n  width: 80%;\n  height: 40rem;\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 2rem 2rem 0;\n  height: 100%;\n  width: 100%;\n}\n.card-footer[_ngcontent-%COMP%] {\n  z-index: 100;\n  text-align: center;\n  text-transform: capitalize;\n  border-top: none;\n  margin-bottom: 1rem;\n  background: transparent;\n}\n.card-footer[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  color: #414344;\n  margin-top: 1rem;\n  font-size: 2rem;\n  font-weight: 500;\n}\n.card-footer[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 300;\n}\n.add_to_cart[_ngcontent-%COMP%] {\n  color: blue;\n  margin: 0.5rem 0;\n}\n@media screen and (max-width: 767px) {\n  .image[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9fY29tbW9uLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9fYW5pbWF0aW9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLGVBQUE7QUFJQSxtQkFBQTtBQUdBLGtCQUFBO0FDckJBO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0lGO0FERkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDSUo7QURBQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0dGO0FEREU7RUFFRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSwyREFBQTtFQUNBLG1LQUFBO0VBRUEsMkJBQUE7QUNDSjtBREdFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSw0Q0FBQTtFQUEwQyxnQ0FBQTtBQ0Q5QztBRE1BO0VBQ0U7SUFDRSxVQUFBO0VDSEY7RURNQTtJQUNFLFVBQUE7RUNKRjtBQUNGO0FET0E7RUFDRTtJQUNFLFVBQUE7RUNMRjtFRFFBO0lBQ0UsVUFBQTtFQ05GO0FBQ0Y7QURTQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSwrQkFBQTtFQ1JGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSwrQkFBQTtFQ1JGO0FBQ0Y7QURXQTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUNURjtBRFlBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ1RGO0FEWUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ1RGO0FEWUE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNURjtBRFlBO0VBQ0UsaUJBQUE7QUNURjtBRFlBO0VBRUE7SUFDRSxpQkFBQTtFQ1ZBO0FBQ0Y7QURhQTtFQUVBO0lBQ0UsaUJBQUE7RUNaQTtBQUNGO0FDN0dBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0Esd0JBQUE7RUQrR0o7QUFDRjtBQ3ZIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VEK0dKO0FBQ0Y7QUM3R0E7RUFDRTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFRCtHSjtFQzdHQTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFRCtHSjtBQUNGO0FDdkhBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7QUFDRjtBQWhJQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1FQUFBO0FBa0lGO0FBaElFO0VBQ0Usc0JBQUE7QUFrSUo7QUFySEE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBd0hGO0FBdkhFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBeUhKO0FBckhBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF3SEY7QUF2SEU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF5SEo7QUF0SEU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBd0hKO0FBcEhBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBdUhGO0FBbkhBO0VBQ0U7SUFDRSxVQUFBO0VBc0hGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LXdlYnNpdGUtY29sb3I6ICMwNzVhYzk7XG4kcHJpbWFyeS13ZWJzaXRlLWNvbG9yLWxpZ2h0OiAjOWZjMGVjO1xuJHNlY29uZGFyeS13ZWJzaXRlLWNvbG9yOiAjMDg0Y2E1O1xuJHRlcnRpYXJ5LXdlYnNpdGUtY29sb3I6IHJnYmEoMjU1LDI1NSwwLDEpO1xuJHByaW1hcnktdGV4dDogIzQ0NDQ0NDtcblxuJHNlY29uZGFyeS1iZzogI2ZjZmNmYztcbiRzZWNvbmRhcnktYm9yZGVyOiAjZTllY2VmO1xuXG4kcHJpbWFyeS1yZWQ6ICNmNTJiMmI7XG4kcHJpbWFyeS1yZWQtbGlnaHQ6ICNlZWE0YTQ7XG5cblxuXG4vKiBJbmZvIEJhc2VkICovXG4kY29sb3Itbm90aWZ5OiAjZmZjMTA3O1xuJGNvbG9yLWluZm86ICMzNWM3ZGY7XG5cbi8qIFByb3BlcnR5IEJhc2VkICovXG4kY29sb3Itd2hpdGU6IHdoaXRlO1xuXG4vKiogR3JheSBTaGFkZXMgKiovXG4kZ3JleS1zaGFkZS0xOiAjZjFmMWYxO1xuJGdyZXktc2hhZGUtMjogI2NlY2VjZTtcbiRncmV5LXNoYWRlLTM6ICNmZWZlZmU7XG4kZmEtZm9udC1wYXRoOiBcIn5mb250LWF3ZXNvbWUvZm9udHMvXCI7XG4iLCIubG9hZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogOTk7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuLnByaW1hcnktYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IC4xcmVtIHNvbGlkIGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEuMnJlbSAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAwcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XG5cbiAgJjpob3ZlcntcblxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxLjJyZW0gM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMDc1YWM5LCAjMzVjN2RmKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDJweCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsXG4gICAgMCAxOHB4IDMycHggLTJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuXG4gIH1cblxuICAuZmEge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICB9XG5cbiAgJjphY3RpdmUsJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KSBzY2FsZSgwLjk2KTtcbiAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYShibGFjaywgLjIpOyAvKihkaXJlY3Rpb24gc2hhZG93IGJsdXIgY29sb3IpKi9cbiAgfVxuXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMCUsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG4uc2xpZGVJbkRvd24ge1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkRvd247XG59XG5cbi5mYWRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG59XG5cbi5hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uYWxlcnQtbXNnIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogY2FsYyg1MCUgLSAxNTBweCk7XG4gIHRvcDogMTNyZW07XG4gIHotaW5kZXg6IDEwMDtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDdyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogOHJlbTtcbn1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDRyZW07XG59XG59XG4iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy9pbXBvcnRzXCI7XG5cbi5jYXJkIHtcbiAgbWluLXdpZHRoOiAyNXJlbTtcbiAgd2lkdGg6IDI1dnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudCAwcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHdoaXRlIDQwJSwkdGVydGlhcnktd2Vic2l0ZS1jb2xvciAzMCUgKTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICB9XG5cbn1cblxuLy8gLmNhcmRfX2Jne1xuLy8gICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS13ZWJzaXRlLWNvbG9yO1xuLy8gICBtYXJnaW4tdG9wOiA1MCU7XG4vLyB9XG5cbi5pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDQwcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMnJlbSAycmVtIDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIHotaW5kZXg6IDEwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC5wcm9kdWN0LW5hbWUge1xuICAgIGNvbG9yOiAjNDE0MzQ0O1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAucHJvZHVjdC1wcmljZSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxufVxuXG4uYWRkX3RvX2NhcnQge1xuICBjb2xvcjogYmx1ZTtcbiAgbWFyZ2luOiAuNXJlbSAwO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5pbWFnZXtcbiAgICB3aWR0aDogOTUlO1xuICB9XG59XG4iLCJcbkBrZXlmcmFtZXMgbW92ZUluQm90dG9tIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZUluVG9wIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-card',
                templateUrl: './product-card.component.html',
                styleUrls: ['./product-card.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Zy6U":
/*!***********************************************************************!*\
  !*** ./src/app/components/primary-header/primary-header.component.ts ***!
  \***********************************************************************/
/*! exports provided: PrimaryHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryHeaderComponent", function() { return PrimaryHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a1) { return ["/products", a1]; };
function PrimaryHeaderComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, category_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.categoryName);
} }
const _c1 = function (a0) { return { "squeeze": a0 }; };
const _c2 = function () { return { exact: true }; };
const _c3 = function (a0) { return { "active": a0 }; };
class PrimaryHeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    isProductRoute() {
        const url = this.router.url;
        return url.indexOf('/products') > -1 || url.indexOf('/product') > -1;
    }
}
PrimaryHeaderComponent.ɵfac = function PrimaryHeaderComponent_Factory(t) { return new (t || PrimaryHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PrimaryHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrimaryHeaderComponent, selectors: [["app-primary-header"]], inputs: { categoryList: "categoryList", squeeze: "squeeze" }, decls: 29, vars: 9, consts: [[1, "navbar", "navbar-expand", "navbar-light", "primary-header", 3, "ngClass"], ["href", "/", 1, "brand-logo"], ["src", "../../../assets/biobrix_circle.png"], [1, "name_div"], [1, "company_name"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active", "routerLink", "/about", 1, "nav-link"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "products_btn", 2, "cursor", "pointer", 3, "ngClass"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "animated-menu"], [1, "category"], ["class", "category-item", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLink", "/trade-enquiry", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/contact-us", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/doctors", "routerLinkActive", "active", 1, "nav-link"], [1, "category-item", 3, "routerLink"]], template: function PrimaryHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BIOBRIX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PrimaryHeaderComponent_a_19_Template, 3, 4, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Trade Enquiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Doctors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.squeeze));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx.isProductRoute()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.primary-header[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  background-color: yellow;\n  border-bottom: #b8b8b8;\n  padding-right: 6rem;\n}\n.primary-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #444444;\n}\n.primary-header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding: 0 2rem;\n  height: 100%;\n  align-self: stretch;\n}\n.primary-header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #444444;\n  transition: all 0.3s;\n  height: 100%;\n  font-family: \"Playfair Display\";\n}\n.primary-header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .primary-header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: red;\n  transform: scale(1.1);\n}\n.primary-header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  border-bottom: 0.2rem white solid;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n}\n.primary-header[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {\n  text-align: start;\n  font-size: 3rem;\n  max-height: 5rem;\n  font-weight: 300;\n  color: #444444;\n  padding: 1rem 2rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  background-image: linear-gradient(120deg, transparent 50%, transparent 0%, #ffcccc 50%);\n  background-size: 250%;\n  transition: all 0.6s;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.primary-header[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:hover, .primary-header[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:active {\n  background-position: 100%;\n  color: red;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.primary-header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 0.1rem solid #e9ecef;\n}\n.dropdown[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n.dropdown-menu[_ngcontent-%COMP%]:hover    > .nav-link[_ngcontent-%COMP%] {\n  color: red;\n  transform: scale(1.1);\n}\n.brand-logo[_ngcontent-%COMP%] {\n  position: relative;\n  left: 2%;\n}\n.brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 4rem;\n}\n.name_div[_ngcontent-%COMP%] {\n  position: relative;\n  left: 3%;\n  top: 0%;\n}\n.name_div[_ngcontent-%COMP%]   .company_name[_ngcontent-%COMP%] {\n  position: absolute;\n  color: black;\n  letter-spacing: 0.4rem;\n  transform: translateY(-50%);\n}\n.name_div[_ngcontent-%COMP%]   .company_name__red[_ngcontent-%COMP%] {\n  color: red;\n}\n.animated-menu[_ngcontent-%COMP%] {\n  -webkit-animation: moveInTop 0.3s ease-out 0s;\n          animation: moveInTop 0.3s ease-out 0s;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n.search[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10%;\n}\n@media screen and (max-width: 1050px) {\n  .primary-header[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  .primary-header[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  .brand-logo[_ngcontent-%COMP%] {\n    left: 1%;\n  }\n\n  .name_div[_ngcontent-%COMP%] {\n    left: 1.5%;\n  }\n  .name_div[_ngcontent-%COMP%]   .company_name[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.squeeze[_ngcontent-%COMP%]   .name_div[_ngcontent-%COMP%]   .company_name[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9fY29tbW9uLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJpbWFyeS1oZWFkZXIvcHJpbWFyeS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL19hbmltYXRpb25zLnNjc3MiLCJzcmMvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQSxlQUFBO0FBSUEsbUJBQUE7QUFHQSxrQkFBQTtBQ3JCQTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNJRjtBREZFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0lKO0FEQUE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNHRjtBRERFO0VBRUUsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkRBQUE7RUFDQSxtS0FBQTtFQUVBLDJCQUFBO0FDQ0o7QURHRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsNENBQUE7RUFBMEMsZ0NBQUE7QUNEOUM7QURNQTtFQUNFO0lBQ0UsVUFBQTtFQ0hGO0VETUE7SUFDRSxVQUFBO0VDSkY7QUFDRjtBRE9BO0VBQ0U7SUFDRSxVQUFBO0VDTEY7RURRQTtJQUNFLFVBQUE7RUNORjtBQUNGO0FEU0E7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsbUJBQUE7RUNQRjtFRFVBO0lBQ0UsK0JBQUE7RUNSRjtBQUNGO0FEQUE7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsbUJBQUE7RUNQRjtFRFVBO0lBQ0UsK0JBQUE7RUNSRjtBQUNGO0FEV0E7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0FDVEY7QURZQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUNURjtBRFlBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUNURjtBRFlBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDVEY7QURZQTtFQUNFLGlCQUFBO0FDVEY7QURZQTtFQUVBO0lBQ0UsaUJBQUE7RUNWQTtBQUNGO0FEYUE7RUFFQTtJQUNFLGlCQUFBO0VDWkE7QUFDRjtBQzdHQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VEK0dKO0FBQ0Y7QUN2SEE7RUFDRTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFRCtHSjtFQzdHQTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFRCtHSjtBQUNGO0FDN0dBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7QUFDRjtBQ3ZIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0FBQ0Y7QUFoSUE7RUFDRSxpQkFBQTtFQUdBLHdCRkh1QjtFRUl2QixzQkFBQTtFQUNBLG1CQUFBO0FBZ0lGO0FBOUhFO0VBQ0UsZUFBQTtFQUNBLGNGUlc7QUV3SWY7QUE3SEU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBK0hKO0FBOUhJO0VBQ0UsY0ZoQlM7RUVpQlQsb0JBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUFnSU47QUE5SE07RUFDRSxVQUFBO0VBQ0EscUJBQUE7QUFnSVI7QUE3SE07RUFDRSxpQ0FBQTtBQStIUjtBQXpIRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBMkhKO0FBekhJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNGM0NTO0VFNENULGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVGQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFRXBESixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUZnTEY7QUEzSE07RUFDRSx5QkFBQTtFQUNBLFVBQUE7QUE2SFI7QUF4SEk7RUFDRSxlQUFBO0FBMEhOO0FBdkhJO0VBQ0Usa0NBQUE7QUF5SE47QUFwSEE7RUFDRSxjQUFBO0FBdUhGO0FBcEhBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBdUhGO0FBcEhBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBdUhGO0FBdEhFO0VBQ0UsWUFBQTtBQXdISjtBQW5IQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QUFzSEY7QUFySEU7RUFDRSxrQkFBQTtFQUdBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBcUhKO0FBbkhJO0VBQ0UsVUFBQTtBQXFITjtBQTlHQTtFQUNFLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FBaUhGO0FBOUdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBaUhGO0FBOUdBO0VBRUU7SUFDRSxnQkFBQTtFQWdIRjtFQS9HRTtJQUNFLGFBQUE7RUFpSEo7O0VBN0dBO0lBQ0UsUUFBQTtFQWdIRjs7RUE3R0E7SUFDRSxVQUFBO0VBZ0hGO0VBL0dFO0lBQ0UsZUFBQTtFQWlISjtBQUNGO0FBekdJO0VBQ0UsZUFBQTtBQTJHTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpbWFyeS1oZWFkZXIvcHJpbWFyeS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS13ZWJzaXRlLWNvbG9yOiAjMDc1YWM5O1xuJHByaW1hcnktd2Vic2l0ZS1jb2xvci1saWdodDogIzlmYzBlYztcbiRzZWNvbmRhcnktd2Vic2l0ZS1jb2xvcjogIzA4NGNhNTtcbiR0ZXJ0aWFyeS13ZWJzaXRlLWNvbG9yOiByZ2JhKDI1NSwyNTUsMCwxKTtcbiRwcmltYXJ5LXRleHQ6ICM0NDQ0NDQ7XG5cbiRzZWNvbmRhcnktYmc6ICNmY2ZjZmM7XG4kc2Vjb25kYXJ5LWJvcmRlcjogI2U5ZWNlZjtcblxuJHByaW1hcnktcmVkOiAjZjUyYjJiO1xuJHByaW1hcnktcmVkLWxpZ2h0OiAjZWVhNGE0O1xuXG5cblxuLyogSW5mbyBCYXNlZCAqL1xuJGNvbG9yLW5vdGlmeTogI2ZmYzEwNztcbiRjb2xvci1pbmZvOiAjMzVjN2RmO1xuXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuLyoqIEdyYXkgU2hhZGVzICoqL1xuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcbiRncmV5LXNoYWRlLTI6ICNjZWNlY2U7XG4kZ3JleS1zaGFkZS0zOiAjZmVmZWZlO1xuJGZhLWZvbnQtcGF0aDogXCJ+Zm9udC1hd2Vzb21lL2ZvbnRzL1wiO1xuIiwiLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAuMXJlbSBzb2xpZCBibGFjaztcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxLjJyZW0gM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMHJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuXG4gICY6aG92ZXJ7XG5cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMS4ycmVtIDNyZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDFweCAycHggMXB4IHRyYW5zcGFyZW50IGluc2V0LFxuICAgIDAgMThweCAzMnB4IC0ycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcblxuICB9XG5cbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgfVxuXG4gICY6YWN0aXZlLCY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCkgc2NhbGUoMC45Nik7XG4gICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoYmxhY2ssIC4yKTsgLyooZGlyZWN0aW9uIHNoYWRvdyBibHVyIGNvbG9yKSovXG4gIH1cblxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMDAlLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuLnNsaWRlSW5Eb3duIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xufVxuXG4uZmFkZUluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmFsZXJ0LW1zZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xuICB0b3A6IDEzcmVtO1xuICB6LWluZGV4OiAxMDA7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA3cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDhyZW07XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xufVxufVxuIiwiQGltcG9ydCBcInNyYy9zdHlsZXMvaW1wb3J0c1wiO1xuXG4ucHJpbWFyeS1oZWFkZXIge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgLy9jb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS13ZWJzaXRlLWNvbG9yO1xuICBib3JkZXItYm90dG9tOiByZ2IoMTg0LCAxODQsIDE4NCk7XG4gIHBhZGRpbmctcmlnaHQ6IDZyZW07XG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0O1xuICB9XG5cbiAgLm5hdi1pdGVtIHtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgLm5hdi1saW5rIHtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheSc7XG5cbiAgICAgICY6aG92ZXIsICYuYWN0aXZle1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZle1xuICAgICAgICBib3JkZXItYm90dG9tOiAuMnJlbSB3aGl0ZSBzb2xpZDtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIC5jYXRlZ29yeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAmLWl0ZW0ge1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBtYXgtaGVpZ2h0OiA1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0O1xuICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHRyYW5zcGFyZW50IDUwJSAsIHRyYW5zcGFyZW50IDAlLCBsaWdodGVuKHJlZCw0MCkgNTAlKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMjUwJTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNnM7XG4gICAgICBAaW5jbHVkZSB0cnVuY2F0ZTtcblxuICAgICAgJjpob3ZlciwmOmFjdGl2ZXtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIGJvcmRlci1yaWdodDogMC4xcmVtIHNvbGlkICRzZWNvbmRhcnktYm9yZGVyO1xuICAgIH1cbiAgfVxufVxuXG4uZHJvcGRvd246aG92ZXI+IC5kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1tZW51OmhvdmVyPiAubmF2LWxpbmsge1xuICBjb2xvcjogcmVkO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5icmFuZC1sb2dvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyJTtcbiAgaW1ne1xuICAgIGhlaWdodDogNHJlbTtcbiAgfVxuXG59XG5cbi5uYW1lX2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMyU7XG4gIHRvcDogMCU7XG4gIC5jb21wYW55X25hbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIC8vIGZvbnQtZmFtaWx5OiAnQWNsb25pY2EnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBsZXR0ZXItc3BhY2luZzogLjRyZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXG4gICAgJl9fcmVkIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuXG4gIH1cblxufVxuXG4uYW5pbWF0ZWQtbWVudSB7XG4gIGFuaW1hdGlvbjogbW92ZUluVG9wIC4zcyBlYXNlLW91dCAgMHM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcbn1cblxuLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KXtcblxuICAucHJpbWFyeS1oZWFkZXJ7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAubmF2LWl0ZW17XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIC5icmFuZC1sb2dvIHtcbiAgICBsZWZ0OiAxJTtcbiAgfVxuXG4gIC5uYW1lX2RpdiB7XG4gICAgbGVmdDogMS41JTtcbiAgICAuY29tcGFueV9uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIH1cbn1cblxuXG4uc3F1ZWV6ZSB7XG5cbiAgLm5hbWVfZGl2IHtcbiAgICAuY29tcGFueV9uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG5cbiAgfVxuXG59XG4iLCJcbkBrZXlmcmFtZXMgbW92ZUluQm90dG9tIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZUluVG9wIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xuICB9XG59XG4iLCJAbWl4aW4gdHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbikge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZsZXgtYWxpZ25tZW50KCRtYWluLWF4aXMsICRjcm9zcy1heGlzKSB7XG4gIGp1c3RpZnktY29udGVudDogJG1haW4tYXhpcztcbiAgYWxpZ24taXRlbXM6ICRjcm9zcy1heGlzO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimaryHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-primary-header',
                templateUrl: './primary-header.component.html',
                styleUrls: ['./primary-header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { categoryList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], squeeze: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "bh//":
/*!****************************************!*\
  !*** ./src/app/constants/api.const.ts ***!
  \****************************************/
/*! exports provided: CATEGORY_API, PRODUCT_API, HOMEPAGE_API, PRODUCT_DETAIL_API, ADD_PRODUCT_REVIEW_API, PRODUCT_SEARCH_API, CREATE_ORDER_API, GET_OTP, VERIFY_OTP, UPDATE_ORDER_API, ORDER_DETAILS_API, GET_ORDERS_API, GET_ALL_ORDERS_API, UPDATE_STATUS_API, DELETE_ORDER_API, GET_PAGER_API, PAGER_PRODUCT_API, GET_TESTIMONIES_API, ADD_TESTIMONY_API, DELETE_TESTIMONIES_API, GET_REVIEWS_API, ACKNOWLEDGE_REVIEW_API, DELETE_REVIEW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_API", function() { return CATEGORY_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_API", function() { return PRODUCT_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOMEPAGE_API", function() { return HOMEPAGE_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_DETAIL_API", function() { return PRODUCT_DETAIL_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT_REVIEW_API", function() { return ADD_PRODUCT_REVIEW_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_SEARCH_API", function() { return PRODUCT_SEARCH_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ORDER_API", function() { return CREATE_ORDER_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_OTP", function() { return GET_OTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_OTP", function() { return VERIFY_OTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ORDER_API", function() { return UPDATE_ORDER_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_DETAILS_API", function() { return ORDER_DETAILS_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ORDERS_API", function() { return GET_ORDERS_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_ORDERS_API", function() { return GET_ALL_ORDERS_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STATUS_API", function() { return UPDATE_STATUS_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ORDER_API", function() { return DELETE_ORDER_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PAGER_API", function() { return GET_PAGER_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGER_PRODUCT_API", function() { return PAGER_PRODUCT_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TESTIMONIES_API", function() { return GET_TESTIMONIES_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TESTIMONY_API", function() { return ADD_TESTIMONY_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TESTIMONIES_API", function() { return DELETE_TESTIMONIES_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_REVIEWS_API", function() { return GET_REVIEWS_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACKNOWLEDGE_REVIEW_API", function() { return ACKNOWLEDGE_REVIEW_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_REVIEW", function() { return DELETE_REVIEW; });
// Category List API
const CATEGORY_API = 'category/category_list/';
// Product List API
const PRODUCT_API = 'product/product_list/';
// Homepage API
const HOMEPAGE_API = 'homepage/get_homepage';
// Product Detail API
const PRODUCT_DETAIL_API = 'product/product_detail/';
const ADD_PRODUCT_REVIEW_API = 'review/submit_review';
const PRODUCT_SEARCH_API = 'product/search';
// Cart API
const CREATE_ORDER_API = 'order/verify_cart';
const GET_OTP = 'phone/send_otp';
const VERIFY_OTP = 'phone/verify';
const UPDATE_ORDER_API = 'order/update_details/';
const ORDER_DETAILS_API = 'order/get_details/';
const GET_ORDERS_API = 'order/get_orders/';
//order admin api
const GET_ALL_ORDERS_API = 'order/get_all_orders';
const UPDATE_STATUS_API = 'order/update_status/';
const DELETE_ORDER_API = 'order/';
// Admin API
const GET_PAGER_API = 'homepage/get_pager_products';
const PAGER_PRODUCT_API = 'homepage/pager_product';
const GET_TESTIMONIES_API = 'homepage/get_all_testimonies';
const ADD_TESTIMONY_API = 'homepage/add_testimony';
const DELETE_TESTIMONIES_API = 'homepage/delete_testimony/';
const GET_REVIEWS_API = 'review/get_all_reviews';
const ACKNOWLEDGE_REVIEW_API = 'review/acknowledge_review';
const DELETE_REVIEW = 'review/delete/';


/***/ }),

/***/ "cR01":
/*!*****************************************!*\
  !*** ./src/app/core/pipes/safe.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'safe' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "cTwt":
/*!*********************************************************!*\
  !*** ./src/app/components/floater/floater.component.ts ***!
  \*********************************************************/
/*! exports provided: FloaterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloaterComponent", function() { return FloaterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_http_contact_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/http/contact-us.service */ "xPrH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/loading-spinner/loading-spinner.component */ "nk+c");







function FloaterComponent_div_5_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " *Your message has been sent.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FloaterComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FloaterComponent_div_5_p_8_Template, 3, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FloaterComponent_div_5_Template_input_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isMessageSend);
} }
function FloaterComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-spinner", 16);
} }
const _c0 = function (a0) { return { "open": a0 }; };
class FloaterComponent {
    constructor(contactUsService) {
        this.contactUsService = contactUsService;
        this.isExpanded = false;
        this.isLoading = false;
        this.isMessageSend = false;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.expand = () => this.isExpanded = !this.isExpanded;
    }
    ngOnInit() {
    }
    submitForm() {
        this.isMessageSend = false;
        if (this.name.valid && this.email.valid && this.message.valid) {
            this.sendMessage(this.name.value, this.email.value, this.message.value);
            this.name.reset();
            this.email.reset();
            this.message.reset();
        }
    }
    sendMessage(name, contact, message) {
        this.isLoading = true;
        this.contactUsService.sendMessage({ name, contact, message }).subscribe(_ => this.isLoading = false, _ => this.isLoading = false);
    }
}
FloaterComponent.ɵfac = function FloaterComponent_Factory(t) { return new (t || FloaterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_http_contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"])); };
FloaterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FloaterComponent, selectors: [["app-floater"]], decls: 10, vars: 5, consts: [["id", "myDIV", 1, "form-box", 3, "ngClass"], [1, "login-header"], [1, "far", "fa-comment-dots", "icon"], ["class", "test", 4, "ngIf", "ngIfElse"], ["spinner", ""], [1, "floating-btn", 3, "click"], [1, "fas", "fa-comments", 2, "font-size", "2rem"], [1, "test"], [1, "formInput"], [1, "form-group"], ["type", "text", "required", "", "id", "test", "placeholder", "Name", 3, "formControl"], ["type", "tel", "id", "numberText", "required", "", "placeholder", "Email or Phone", 3, "formControl"], ["type", "text", "required", "", "placeholder", "Message", 3, "formControl"], ["style", "color: blue;", 4, "ngIf"], ["type", "submit", "value", "Send", "id", "submitButt", 1, "active", 3, "click"], [2, "color", "blue"], [1, "loader-center"]], template: function FloaterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We'll reach you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FloaterComponent_div_5_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FloaterComponent_ng_template_6_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FloaterComponent_Template_button_click_8_listener() { return ctx.isExpanded = !ctx.isExpanded; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.isExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], src_app_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadingSpinnerComponent"]], styles: ["@import 'https://fonts.googleapis.com/css?family=Noto+Sans';\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  background: skyblue;\n  font: 12px/16px \"Noto Sans\", sans-serif;\n}\ninput[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.floating-btn[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n  text-decoration: none;\n  border-radius: 50%;\n  font-size: 2rem;\n  color: #ffffff;\n  font-size: 40px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  transition: background-color 0.25s ease-out, box-shadow 0.25s ease-out;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  background: -webkit-linear-gradient(-45deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n.floating-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2), 0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n.floating-btn.clicked[_ngcontent-%COMP%] {\n  background-color: #4169cc;\n}\n.floating-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.floating-btn.clicked[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: rotate(315deg);\n}\n.icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  opacity: 0.5;\n  font-size: 21px;\n}\n#iconPhoto[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  opacity: 0.7;\n  font-size: 18px;\n}\n.form-box[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border-radius: 9px;\n  position: fixed;\n  opacity: 0;\n  overflow: hidden;\n  bottom: 0;\n  right: 10px;\n  transform: translate(-50%, -50%);\n  width: 0rem;\n  height: 0rem;\n  background: -webkit-linear-gradient(-45deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  background-color: #f5f5f7;\n  transition: all 0.25s ease-in-out;\n}\n.open[_ngcontent-%COMP%] {\n  transform: translate(10px, -70px);\n  height: 490px;\n  width: 366px;\n  opacity: 1;\n}\n.test[_ngcontent-%COMP%] {\n  padding: 2rem;\n  margin: 4rem 3rem;\n  border-radius: 2rem;\n}\n.login-header[_ngcontent-%COMP%] {\n  border-top-left-radius: 9px;\n  border-top-right-radius: 9px;\n  background: #4169cc;\n  padding: 23px;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  color: #fff;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.form-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  margin-bottom: 3rem;\n}\n.form-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: none;\n  outline: none;\n  box-sizing: border-box;\n  border: none;\n  cursor: text;\n  border-bottom: 1px solid #dcdcdc;\n  transition: 0.3s width ease-in-out;\n  margin: none;\n  padding: 1rem;\n}\n.form-box[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border-bottom: none;\n  cursor: pointer;\n  background: #4169cc;\n  color: #fff;\n  margin-bottom: 0;\n}\n.form-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: relative;\n}\n.active[_ngcontent-%COMP%] {\n  opacity: 0.7 !important;\n}\n.form-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-box[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-box[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:valid, .form-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid {\n  width: 100%;\n  border-bottom: 2px solid #4c76e0;\n}\n.loader-center[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbG9hdGVyL2Zsb2F0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkRBQUE7QUFjUjtFQUNJLHNCQUFBO0FBWko7QUFlQTtFQUNJLG1CQUFBO0VBQ0EsdUNBQUE7QUFaSjtBQWNBO0VBQ0UsYUFBQTtBQVhGO0FBY0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwrR0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0VBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFuQ0UsMkdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FBMEJKO0FBV0U7RUFDRSxxSEFBQTtBQVRKO0FBWUU7RUFDRSx5QkFBQTtBQVZKO0FBYUU7RUFDRSx3REFBQTtBQVhKO0FBY0U7RUFDRSx5QkFBQTtBQVpKO0FBaUJBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWRGO0FBaUJBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWRGO0FBaUJBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQS9FRSwyR0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUErRUYsb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtBQVhGO0FBZUE7RUFDRSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQVpGO0FBZUE7RUFFRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWJGO0FBZ0JBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBYkY7QUFnQkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFiRjtBQWdCQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBYkY7QUFnQkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWJGO0FBZ0JBO0VBQ0Usa0JBQUE7QUFiRjtBQWdCQTtFQUNFLHVCQUFBO0FBYkY7QUFnQkE7Ozs7RUFJRSxXQUFBO0VBQ0EsZ0NBQUE7QUFiRjtBQWdCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQWJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbG9hdGVyL2Zsb2F0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Tm90bytTYW5zJztcbi8vIFZhcmlhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRzY3JvbGxiYXItd2lkdGg6IDVweDtcbiRkZWZhdWx0LXNoYWRvdy1jb2xvcjogcmdiKDAsIDAsIDApO1xuLy8gTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGZhbmN5LWJhY2tncm91bmQoKSB7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMTgzODUwIDAsICMxODM4NTAgMjUlLCAjMTkyQzQ2IDUwJSwgIzIyMjU0QyA3NSUsICMyMjI1NEMgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMTgzODUwIDAsICMxODM4NTAgMjUlLCAjMTkyQzQ2IDUwJSwgIzIyMjU0QyA3NSUsICMyMjI1NEMgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xuICAgIGZvbnQ6IDEycHgvMTZweCAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcbn1cbmlucHV0W3R5cGU9XCJmaWxlXCJde1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmxvYXRpbmctYnRuIHtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMTIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2Utb3V0LCBib3gtc2hhZG93IDAuMjVzIGVhc2Utb3V0O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcblxuICBAaW5jbHVkZSBmYW5jeS1iYWNrZ3JvdW5kO1xuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDdweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksIDAgMnB4IDE2cHggMXB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgfVxuXG4gICYuY2xpY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNjljYztcbiAgfVxuXG4gIGkge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKTtcbiAgfVxuXG4gICYuY2xpY2tlZCBpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xuICB9XG5cbn1cblxuLmljb257XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuI2ljb25QaG90b3tcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZm9ybS1ib3gge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAxMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICB3aWR0aDowcmVtO1xuICBoZWlnaHQ6MHJlbTtcbiAgQGluY2x1ZGUgZmFuY3ktYmFja2dyb3VuZDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNztcbiAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XG5cbn1cblxuLm9wZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtNzBweCk7XG4gIGhlaWdodDogNDkwcHg7XG4gIHdpZHRoOiAzNjZweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRlc3R7XG5cbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luOiA0cmVtIDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG5cbi5sb2dpbi1oZWFkZXIge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA5cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQ6ICM0MTY5Y2M7XG4gIHBhZGRpbmc6IDIzcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmZvcm0tYm94IGlucHV0e1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5mb3JtLWJveCBpbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcbiAgdHJhbnNpdGlvbjogLjNzIHdpZHRoIGVhc2UtaW4tb3V0O1xuICBtYXJnaW46IG5vbmU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5mb3JtLWJveCBpbnB1dFt0eXBlPVwic3VibWl0XCJde1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICM0MTY5Y2M7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZm9ybS1ib3ggZm9ybSBkaXZ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFjdGl2ZXtcbiAgb3BhY2l0eTogMC43ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWJveCBpbnB1dDpmb2N1cyxcbi5mb3JtLWJveCB0ZXh0YXJlYTpmb2N1cyxcbi5mb3JtLWJveCB0ZXh0YXJlYTp2YWxpZCxcbi5mb3JtLWJveCBpbnB1dDp2YWxpZHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoNzYsIDExOCwgMjI0KTtcbn1cblxuLmxvYWRlci1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FloaterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-floater',
                templateUrl: './floater.component.html',
                styleUrls: ['./floater.component.scss']
            }]
    }], function () { return [{ type: src_app_core_http_contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"] }]; }, null); })();


/***/ }),

/***/ "cplz":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DataService {
    constructor() { }
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

/***/ "cvwo":
/*!***************************************************!*\
  !*** ./src/app/core/http/homepage-api.service.ts ***!
  \***************************************************/
/*! exports provided: HomepageApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageApiService", function() { return HomepageApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_constants_api_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/api.const */ "bh//");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-error-handler.service */ "p4Ho");


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

/***/ "iydT":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "0Pcf");
/* harmony import */ var src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/secondary-header/secondary-header.component */ "jl70");
/* harmony import */ var src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/primary-header/primary-header.component */ "Zy6U");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "NxTq");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.component */ "PVyf");
/* harmony import */ var _trade_enquiry_trade_enquiry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trade-enquiry/trade-enquiry.component */ "UVrD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "4wW7");
/* harmony import */ var _products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/product-detail/product-detail.component */ "IO1w");
/* harmony import */ var _products_product_detail_review_review_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/product-detail/review/review.component */ "vU5/");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payment/payment.component */ "xLMi");
/* harmony import */ var _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/pipes/safe.pipe */ "cR01");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "ucGs");
/* harmony import */ var src_app_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/components/loading-spinner/loading-spinner.component */ "nk+c");
/* harmony import */ var src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/components/footer/footer.component */ "LmEr");
/* harmony import */ var src_app_components_floater_floater_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/components/floater/floater.component */ "cTwt");
/* harmony import */ var src_app_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/components/drawer/drawer.component */ "LcY4");























const routes = [
    {
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
            { path: 'view-cart', loadChildren: () => Promise.all(/*! import() | src-app-modules-cart-cart-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-modules-cart-cart-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/cart/cart.module */ "GcBr")).then(m => m.CartModule) },
            { path: 'track-order', loadChildren: () => Promise.all(/*! import() | src-app-modules-track-order-track-order-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-modules-track-order-track-order-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/track-order/track-order.module */ "2SsE")).then(m => m.TrackOrderModule) },
            { path: 'private-path/admin', loadChildren: () => __webpack_require__.e(/*! import() | src-app-modules-admin-admin-module */ "src-app-modules-admin-admin-module").then(__webpack_require__.bind(null, /*! src/app/modules/admin/admin.module */ "13Ib")).then(m => m.AdminModule) },
            { path: 'products/:categoryId', component: _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"] },
            { path: 'trade-enquiry', component: _trade_enquiry_trade_enquiry_component__WEBPACK_IMPORTED_MODULE_8__["TradeEnquiryComponent"] },
            { path: 'contact-us', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] },
            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"] },
            { path: 'product/:productId', component: _products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailComponent"] }
        ]
    }
];
class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_4__["SecondaryHeaderComponent"],
        src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_5__["PrimaryHeaderComponent"],
        src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
        _trade_enquiry_trade_enquiry_component__WEBPACK_IMPORTED_MODULE_8__["TradeEnquiryComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailComponent"],
        _products_product_detail_review_review_component__WEBPACK_IMPORTED_MODULE_12__["ReviewComponent"],
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_14__["PaymentComponent"],
        _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_15__["SafePipe"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
        src_app_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_17__["LoadingSpinnerComponent"],
        src_app_components_floater_floater_component__WEBPACK_IMPORTED_MODULE_19__["FloaterComponent"],
        src_app_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_20__["DrawerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_15__["SafePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    src_app_components_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_4__["SecondaryHeaderComponent"],
                    src_app_components_primary_header_primary_header_component__WEBPACK_IMPORTED_MODULE_5__["PrimaryHeaderComponent"],
                    src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                    _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
                    _trade_enquiry_trade_enquiry_component__WEBPACK_IMPORTED_MODULE_8__["TradeEnquiryComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                    _products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailComponent"],
                    _products_product_detail_review_review_component__WEBPACK_IMPORTED_MODULE_12__["ReviewComponent"],
                    _payment_payment_component__WEBPACK_IMPORTED_MODULE_14__["PaymentComponent"],
                    _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_15__["SafePipe"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                    src_app_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_17__["LoadingSpinnerComponent"],
                    src_app_components_floater_floater_component__WEBPACK_IMPORTED_MODULE_19__["FloaterComponent"],
                    src_app_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_20__["DrawerComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_15__["SafePipe"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jl70":
/*!***************************************************************************!*\
  !*** ./src/app/components/secondary-header/secondary-header.component.ts ***!
  \***************************************************************************/
/*! exports provided: SecondaryHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryHeaderComponent", function() { return SecondaryHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants_header_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/header.const */ "393e");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/cart.service */ "7pSQ");
/* harmony import */ var src_app_core_services_contact_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/contact-info.service */ "OLBm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");

/** Constants */







function SecondaryHeaderComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cartItemCount);
} }
class SecondaryHeaderComponent {
    constructor(cartService, contactService) {
        this.cartService = cartService;
        this.contactService = contactService;
        this.cartConfig = src_app_constants_header_const__WEBPACK_IMPORTED_MODULE_1__["CartConfig"];
        this.cartItemCount = 0;
        this.phone = '';
        this.email = '';
    }
    setCartItems() {
        this.cartItemCount = this.cartService.getCartItemsCount();
        this.cartService.CartUpdateSubject.subscribe(cart => {
            this.cartItemCount = cart.count;
        });
    }
    ngOnInit() {
        this.setCartItems();
        this.phone = this.contactService.phone;
        this.email = this.contactService.email;
        this.subscription = this.contactService.contactInfo.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(info => {
            this.email = info.email;
            this.phone = info.phone;
            this.subscription.unsubscribe();
        });
    }
}
SecondaryHeaderComponent.ɵfac = function SecondaryHeaderComponent_Factory(t) { return new (t || SecondaryHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_contact_info_service__WEBPACK_IMPORTED_MODULE_4__["ContactInfoService"])); };
SecondaryHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondaryHeaderComponent, selectors: [["app-secondary-header"]], decls: 15, vars: 3, consts: [[1, "secondary-nav"], ["href", "#", 1, "nav-link"], ["aria-hidden", "true", 1, "fa", "fa-phone"], ["href", "#", 1, "nav-link", "email"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["routerLink", "/track-order", 1, "nav-link"], ["aria-hidden", "true", 1, "fa-truck"], ["routerLinkActive", "active", "routerLink", "/view-cart", 1, "nav-link", "cart"], [4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"]], template: function SecondaryHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Track Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SecondaryHeaderComponent_span_12_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.phone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItemCount);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.secondary-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap-reverse;\n  background-color: #c0bdbd;\n  font-size: 1.4rem;\n  padding-right: 5rem;\n  justify-content: flex-end;\n}\n.secondary-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0 1rem;\n  padding: 0rem 3rem;\n}\n.secondary-nav[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  position: relative;\n}\n.secondary-nav[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ffc107;\n  height: 1.6rem;\n  width: 1.6rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: white;\n  position: absolute;\n  left: 1.4rem;\n  top: 0.4rem;\n}\n.active[_ngcontent-%COMP%] {\n  color: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9fY29tbW9uLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2Vjb25kYXJ5LWhlYWRlci9zZWNvbmRhcnktaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9fYW5pbWF0aW9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLGVBQUE7QUFJQSxtQkFBQTtBQUdBLGtCQUFBO0FDckJBO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0lGO0FERkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDSUo7QURBQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0dGO0FEREU7RUFFRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSwyREFBQTtFQUNBLG1LQUFBO0VBRUEsMkJBQUE7QUNDSjtBREdFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSw0Q0FBQTtFQUEwQyxnQ0FBQTtBQ0Q5QztBRE1BO0VBQ0U7SUFDRSxVQUFBO0VDSEY7RURNQTtJQUNFLFVBQUE7RUNKRjtBQUNGO0FET0E7RUFDRTtJQUNFLFVBQUE7RUNMRjtFRFFBO0lBQ0UsVUFBQTtFQ05GO0FBQ0Y7QURTQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSwrQkFBQTtFQ1JGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSwrQkFBQTtFQ1JGO0FBQ0Y7QURXQTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUNURjtBRFlBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ1RGO0FEWUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ1RGO0FEWUE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNURjtBRFlBO0VBQ0UsaUJBQUE7QUNURjtBRFlBO0VBRUE7SUFDRSxpQkFBQTtFQ1ZBO0FBQ0Y7QURhQTtFQUVBO0lBQ0UsaUJBQUE7RUNaQTtBQUNGO0FDN0dBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0Esd0JBQUE7RUQrR0o7QUFDRjtBQ3ZIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VEK0dKO0FBQ0Y7QUM3R0E7RUFDRTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFRCtHSjtFQzdHQTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFRCtHSjtBQUNGO0FDdkhBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7QUFDRjtBQWpJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFtSUY7QUFqSUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBbUlKO0FBaElFO0VBQ0Usa0JBQUE7QUFrSUo7QUFqSUk7RUFDRSxtQkZKUztFRUtULGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZRlRRO0VFVVIsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQW1JTjtBQS9IQTtFQUNFLHFCQUFBO0FBa0lGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWNvbmRhcnktaGVhZGVyL3NlY29uZGFyeS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS13ZWJzaXRlLWNvbG9yOiAjMDc1YWM5O1xuJHByaW1hcnktd2Vic2l0ZS1jb2xvci1saWdodDogIzlmYzBlYztcbiRzZWNvbmRhcnktd2Vic2l0ZS1jb2xvcjogIzA4NGNhNTtcbiR0ZXJ0aWFyeS13ZWJzaXRlLWNvbG9yOiByZ2JhKDI1NSwyNTUsMCwxKTtcbiRwcmltYXJ5LXRleHQ6ICM0NDQ0NDQ7XG5cbiRzZWNvbmRhcnktYmc6ICNmY2ZjZmM7XG4kc2Vjb25kYXJ5LWJvcmRlcjogI2U5ZWNlZjtcblxuJHByaW1hcnktcmVkOiAjZjUyYjJiO1xuJHByaW1hcnktcmVkLWxpZ2h0OiAjZWVhNGE0O1xuXG5cblxuLyogSW5mbyBCYXNlZCAqL1xuJGNvbG9yLW5vdGlmeTogI2ZmYzEwNztcbiRjb2xvci1pbmZvOiAjMzVjN2RmO1xuXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuLyoqIEdyYXkgU2hhZGVzICoqL1xuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcbiRncmV5LXNoYWRlLTI6ICNjZWNlY2U7XG4kZ3JleS1zaGFkZS0zOiAjZmVmZWZlO1xuJGZhLWZvbnQtcGF0aDogXCJ+Zm9udC1hd2Vzb21lL2ZvbnRzL1wiO1xuIiwiLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAuMXJlbSBzb2xpZCBibGFjaztcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxLjJyZW0gM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMHJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuXG4gICY6aG92ZXJ7XG5cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMS4ycmVtIDNyZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDFweCAycHggMXB4IHRyYW5zcGFyZW50IGluc2V0LFxuICAgIDAgMThweCAzMnB4IC0ycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcblxuICB9XG5cbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgfVxuXG4gICY6YWN0aXZlLCY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCkgc2NhbGUoMC45Nik7XG4gICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoYmxhY2ssIC4yKTsgLyooZGlyZWN0aW9uIHNoYWRvdyBibHVyIGNvbG9yKSovXG4gIH1cblxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMDAlLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuLnNsaWRlSW5Eb3duIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xufVxuXG4uZmFkZUluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmFsZXJ0LW1zZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xuICB0b3A6IDEzcmVtO1xuICB6LWluZGV4OiAxMDA7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA3cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDhyZW07XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xufVxufVxuIiwiQGltcG9ydCBcInNyYy9zdHlsZXMvaW1wb3J0c1wiO1xuLnNlY29uZGFyeS1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMTg5LCAxODkpO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZy1yaWdodDogNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAubmF2LWxpbmsge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IDAgMXJlbTtcbiAgICBwYWRkaW5nOiAwcmVtIDNyZW07XG4gIH1cblxuICAuY2FydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHNwYW4ge1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLW5vdGlmeTtcbiAgICAgIGhlaWdodDogMS42cmVtO1xuICAgICAgd2lkdGg6IDEuNnJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDEuNHJlbTtcbiAgICAgIHRvcDogMC40cmVtO1xuICAgIH1cbiAgfVxufVxuLmFjdGl2ZSB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cbiIsIlxuQGtleWZyYW1lcyBtb3ZlSW5Cb3R0b20ge1xuICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlSW5Ub3Age1xuICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSk7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondaryHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-secondary-header',
                templateUrl: './secondary-header.component.html',
                styleUrls: ['./secondary-header.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }, { type: src_app_core_services_contact_info_service__WEBPACK_IMPORTED_MODULE_4__["ContactInfoService"] }]; }, null); })();


/***/ }),

/***/ "lbjL":
/*!***************************************************************!*\
  !*** ./src/app/shared/search-input/search-input.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0) { return { "search-expanded": a0 }; };
class SearchInputComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.searchInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.paramKeyword = '';
        this.placeholder = 'Search';
        this.searchChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subscription = null;
    }
    ngOnInit() {
        if (this.paramKeyword) {
            const param = this.activatedRoute.snapshot.queryParamMap.get(this.paramKeyword);
            if (this.searchInput.value !== param) {
                this.searchInput.patchValue(param);
            }
        }
        this.subscription = this.activatedRoute.queryParams.subscribe(res => {
            this.searchChanged.emit(res[this.paramKeyword]);
        });
    }
    navigate(val) {
        this.activatedRoute.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(res => {
            // getting all the params
            const newParams = Object.assign(Object.assign({}, res), val);
            // remove empty params
            const updatedParams = Object.keys(newParams).filter(key => !!newParams[key]).reduce((pre, key) => {
                return Object.assign(Object.assign({}, pre), { [key]: newParams[key] });
            }, {});
            this.router.navigate(['/products/all'], { queryParams: updatedParams });
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    searchNext(value) {
        if (value !== '') {
            this.navigate({ [this.paramKeyword]: value });
        }
    }
    searchButtonClicked(search) {
        if (!this.searchInput.value) {
            search.focus();
        }
        else {
            this.searchNext(this.searchInput.value);
        }
    }
    onEnterPressed(event) {
        if (event.keyCode === 13) {
            this.searchNext(this.searchInput.value);
        }
    }
}
SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) { return new (t || SearchInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SearchInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchInputComponent, selectors: [["app-search-input"]], inputs: { paramKeyword: "paramKeyword" }, outputs: { searchChanged: "searchChanged" }, decls: 5, vars: 5, consts: [[1, "search-input"], ["type", "text", "aria-label", "search", "aria-describedby", "search", 1, "form-control", "form-control-lg", 3, "ngClass", "placeholder", "formControl", "keydown"], ["search", ""], ["id", "search", 1, "input-group-text", "search-icon", 3, "click"], [1, "fa", "fa-search"]], template: function SearchInputComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function SearchInputComponent_Template_input_keydown_1_listener($event) { return ctx.onEnterPressed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.searchButtonClicked(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !!ctx.searchInput.value))("placeholder", ctx.placeholder)("formControl", ctx.searchInput);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]], styles: [".search-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  border-right: none;\n  width: 3rem;\n  transition: width 250ms ease-in-out;\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus {\n  width: 18rem;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 30.75px;\n  width: 3rem;\n}\n\n.search-expanded[_ngcontent-%COMP%] {\n  width: 18rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUFERjs7QUFHRTtFQUNFLFlBQUE7QUFESjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0UsdUJBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5zZWFyY2gtaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIHdpZHRoOiAzcmVtO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAyNTBtcyBlYXNlLWluLW91dDtcblxuICAmOmZvY3VzIHtcbiAgICB3aWR0aDogMThyZW07XG4gIH1cbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDMwLjc1cHg7XG4gIHdpZHRoOiAzcmVtO1xufVxuXG4uc2VhcmNoLWV4cGFuZGVkIHtcbiAgd2lkdGg6IDE4cmVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-input',
                templateUrl: './search-input.component.html',
                styleUrls: ['./search-input.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { paramKeyword: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "nk+c":
/*!*************************************************************************!*\
  !*** ./src/app/components/loading-spinner/loading-spinner.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingSpinnerComponent {
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 5, vars: 0, consts: [[1, "lds-ring"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lds-ring[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border: 8px solid rgb(62, 78, 226);\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: rgb(62, 78, 226) transparent transparent transparent;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n@-webkit-keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsc0VBQThEO1VBQTlELDhEQUE4RDtFQUM5RCxrRUFBa0U7QUFDcEU7QUFDQTtFQUNFLCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQVBBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGRzLXJpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5sZHMtcmluZyBkaXYge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyOiA4cHggc29saWQgcmdiKDYyLCA3OCwgMjI2KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNjIsIDc4LCAyMjYpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcbn1cbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcbn1cbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNXM7XG59XG5Aa2V5ZnJhbWVzIGxkcy1yaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-spinner',
                template: '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
                styleUrls: ['./loading-spinner.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "p4Ho":
/*!*********************************************************!*\
  !*** ./src/app/core/http/http-error-handler.service.ts ***!
  \*********************************************************/
/*! exports provided: HttpErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandlerService", function() { return HttpErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class HttpErrorHandlerService {
    constructor() { }
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

/***/ "qeeY":
/*!**************************************************!*\
  !*** ./src/app/core/services/utility.service.ts ***!
  \**************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



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

/***/ "ucGs":
/*!*******************************************************!*\
  !*** ./src/app/modules/home/about/about.component.ts ***!
  \*******************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/main-container/main-container.component */ "1lc2");



class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 38, vars: 0, consts: [["title", "ABOUT US"], [1, "about-us", 2, "background", "url('../../../assets/category_background_1.jpg')", "background-size", "cover"], [1, "about-us__item"], [1, "text"], [1, "text__heading"], [1, "text__heading--underline"], [1, "text__content"], [1, "picture"], ["src", "https://zilliongamer.com/uploads/codm/guides/character-list/all/special-ops-5-cod-mobile-character-small.jpg"], [1, "about-us__item", "gray"], [1, "picture", "picture-right"], ["src", "https://zilliongamer.com/uploads/codm/guides/character-list/all/marc-3-winter-cod-mobile-small.jpg"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-main-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Ethan Hunt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Winter Soldier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Ethan Hunt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Winter Soldier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_1__["MainContainerComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&family=Comfortaa&display=swap\");\n.about-us[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.about-us__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 3rem 10%;\n}\n.about-us__item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem;\n  font-size: 1.5rem;\n  min-width: 60%;\n}\n.about-us__item[_ngcontent-%COMP%]   .text__heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Comfortaa\", cursive;\n}\n.about-us__item[_ngcontent-%COMP%]   .text__heading--underline[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  width: 80%;\n}\n.about-us__item[_ngcontent-%COMP%]   .text__content[_ngcontent-%COMP%] {\n  font-family: \"Comfortaa\", cursive;\n  text-align: justify;\n}\n.about-us__item[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  padding: 1rem;\n  justify-content: center;\n}\n.about-us[_ngcontent-%COMP%]   .gray[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG1HQUFBO0FBRVI7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUk7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQU47QUFFTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUFBUjtBQUNRO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0FBQ1Y7QUFHTTtFQUNFLGlDQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUtJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUhOO0FBUUU7RUFDRSx5QkFBQTtBQU5KIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFsb28rVGFtbWErMiZmYW1pbHk9Q29tZm9ydGFhJmRpc3BsYXk9c3dhcCcpO1xuXG4uYWJvdXQtdXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICZfX2l0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmc6IDNyZW0gMTAlO1xuXG4gICAgLnRleHQge1xuICAgICAgZmxleDogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIG1pbi13aWR0aDogNjAlO1xuXG4gICAgICAmX19oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XG4gICAgICAgICYtLXVuZGVybGluZSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmX19jb250ZW50IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5waWN0dXJlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgfVxuXG4gIC5ncmF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vU5/":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/home/products/product-detail/review/review.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ReviewComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 4);
} }
function ReviewComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function ReviewComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 4);
} }
function ReviewComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function ReviewComponent_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 4);
} }
function ReviewComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function ReviewComponent_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 4);
} }
function ReviewComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
class ReviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReviewComponent.ɵfac = function ReviewComponent_Factory(t) { return new (t || ReviewComponent)(); };
ReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewComponent, selectors: [["app-review"]], inputs: { review: "review" }, decls: 24, vars: 11, consts: [[1, "review"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "fa", "fa-star", "review-filled"], ["class", "fa fa-star review-filled", 4, "ngIf", "ngIfElse"], ["un2", ""], ["un3", ""], ["un4", ""], ["un5", ""], [1, "card-subtitle"], [1, "uk-margin-top", "mb-2", "text-muted"], [1, "card-text", "mr-5"], [1, "fa", "fa-star", "review-unfilled"]], template: function ReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReviewComponent_i_5_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReviewComponent_ng_template_6_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReviewComponent_i_8_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ReviewComponent_ng_template_9_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReviewComponent_i_11_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ReviewComponent_ng_template_12_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReviewComponent_i_14_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReviewComponent_ng_template_15_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.review.rating > 1)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.review.rating > 2)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.review.rating > 3)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.review.rating > 4)("ngIfElse", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.review.reviewer_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.review.review, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.review.date);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".review[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  border-bottom: 1px black;\n}\n.review-unfilled[_ngcontent-%COMP%] {\n  font-family: \"FontAwesome\";\n  float: left;\n  font-weight: 300;\n  display: block;\n  font-size: 20px;\n  color: pink;\n}\n.review-filled[_ngcontent-%COMP%] {\n  font-family: \"FontAwesome\";\n  font-weight: 300;\n  font-size: 20px;\n  display: block;\n  float: left;\n  color: palevioletred;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlsL3Jldmlldy9yZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFFRSxjQUFBO0VBb0JBLHdCQUFBO0FBcEJKO0FBQ0k7RUFFRSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUFOO0FBR0k7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFETiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbC9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5yZXZpZXcge1xuXG4gICAgbWFyZ2luOiAycmVtIDA7XG4gICAgJi11bmZpbGxlZHtcblxuICAgICAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGNvbG9yOiBwaW5rO1xuICAgIH1cblxuICAgICYtZmlsbGVkIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBjb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgICB9XG5cbiAgICBib3JkZXItYm90dG9tOiAxcHggYmxhY2s7XG5cbiAgfVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-review',
                templateUrl: './review.component.html',
                styleUrls: ['./review.component.scss']
            }]
    }], function () { return []; }, { review: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xLMi":
/*!***********************************************************!*\
  !*** ./src/app/modules/home/payment/payment.component.ts ***!
  \***********************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/pipes/safe.pipe */ "cR01");





function PaymentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "iframe", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function PaymentComponent_div_0_Template_iframe_load_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.pageLoaded($event, ctx_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
class PaymentComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.baseUrl = 'https://biobrix-healthcare.herokuapp.com/paytm/initiatePayment?';
        this.url = '';
        this.order_id = this.route.snapshot.queryParamMap.get('order_id');
        this.email = this.route.snapshot.queryParamMap.get('email');
        this.amount = this.route.snapshot.queryParamMap.get('amount');
        this.phone = this.route.snapshot.queryParamMap.get('phone');
        this.router.navigate([], { queryParams: null });
        if (!this.order_id || !this.email || !this.amount || !this.phone) {
            console.log('error, this should not happen');
        }
        else {
            this.url = this.baseUrl + `order_id=${this.order_id}&email=${this.email}&amount=${this.amount}&phone=${this.phone}`;
        }
        console.log(this.order_id, this.email, this.phone, this.amount);
    }
    ngOnInit() {
    }
    pageLoaded(event, instance) {
        console.log('page loaded', event);
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], decls: 1, vars: 1, consts: [["class", "payment", 4, "ngIf"], [1, "payment"], [3, "src", "load"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaymentComponent_div_0_Template, 3, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.url);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]], styles: [".payment[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5wYXltZW50LCBpZnJhbWUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment',
                templateUrl: './payment.component.html',
                styleUrls: ['./payment.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "xPrH":
/*!*************************************************!*\
  !*** ./src/app/core/http/contact-us.service.ts ***!
  \*************************************************/
/*! exports provided: ContactUsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsService", function() { return ContactUsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-error-handler.service */ "p4Ho");






class ContactUsService {
    constructor(http, httpErrorHandlerService) {
        this.http = http;
        this.httpErrorHandlerService = httpErrorHandlerService;
        this.CONTACT_US_API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL}contacy_us`;
        this.ENQUIRY_API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL}trade_enquiry`;
        this.sendMessage = messagebody => this.http.post(this.CONTACT_US_API, messagebody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.httpErrorHandlerService.handleErr));
        this.sendEnquiry = enquirybody => this.http.post(this.ENQUIRY_API, enquirybody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.httpErrorHandlerService.handleErr));
    }
}
ContactUsService.ɵfac = function ContactUsService_Factory(t) { return new (t || ContactUsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"])); };
ContactUsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactUsService, factory: ContactUsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"] }]; }, null); })();


/***/ }),

/***/ "yt3l":
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

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map