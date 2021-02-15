(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-admin-module"], {
    /***/
    "+NnO":
    /*!*************************************************************!*\
      !*** ./src/app/modules/admin/admin-products/filter.pipe.ts ***!
      \*************************************************************/

    /*! exports provided: FilterPipe */

    /***/
    function NnO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
        return FilterPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FilterPipe = function FilterPipe() {
        _classCallCheck(this, FilterPipe);

        this.transform = function (value, filterString) {
          return value === undefined ? value : value.filter(function (p) {
            return p.product_name.toLowerCase().match(filterString.toLowerCase());
          });
        };
      };

      FilterPipe.ɵfac = function FilterPipe_Factory(t) {
        return new (t || FilterPipe)();
      };

      FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filter",
        type: FilterPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filter'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "13Ib":
    /*!***********************************************!*\
      !*** ./src/app/modules/admin/admin.module.ts ***!
      \***********************************************/

    /*! exports provided: AdminModule */

    /***/
    function Ib(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
        return AdminModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _admiin_component_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admiin-component/admin.component */
      "5KoX");
      /* harmony import */


      var _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./admin-products/admin-products.component */
      "xYpa");
      /* harmony import */


      var _admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-orders/admin-orders.component */
      "PvvA");
      /* harmony import */


      var _admin_slideshow_admin_slideshow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-slideshow/admin-slideshow.component */
      "1STh");
      /* harmony import */


      var _admin_testimonies_admin_testimonies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./admin-testimonies/admin-testimonies.component */
      "t+Z7");
      /* harmony import */


      var _admin_reviews_admin_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./admin-reviews/admin-reviews.component */
      "yT3b");
      /* harmony import */


      var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./admin-login/admin-login.component */
      "y1ZC");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _admin_products_admin_products_add_admin_products_add_Component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./admin-products/admin-products-add/admin-products-add.Component */
      "S9I8");
      /* harmony import */


      var _admin_products_admin_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./admin-products/admin-product.service */
      "VCJp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./auth-interceptor.service */
      "PdwG");
      /* harmony import */


      var _admin_products_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./admin-products/filter.pipe */
      "+NnO");
      /* harmony import */


      var _admin_orders_admin_order_details_admin_order_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./admin-orders/admin-order-details/admin-order-details.component */
      "Crn5");
      /* harmony import */


      var _admin_orders_admin_order_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./admin-orders/admin-order.service */
      "COMa");
      /* harmony import */


      var _admin_slideshow_admin_slideshow_add_admin_slideshow_add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./admin-slideshow/admin-slideshow-add/admin-slideshow-add.component */
      "dqQ8");
      /* harmony import */


      var _admin_testimonies_add_testimonies_add_testimonies_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./admin-testimonies/add-testimonies/add-testimonies.component */
      "jzG7");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _firebase_storage_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./firebase-storage.service */
      "AXPk");
      /* harmony import */


      var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./loading-spinner/loading-spinner.component */
      "Fx1/");

      var fireConfig = {
        apiKey: 'AIzaSyBPzOGjeRRrGLc-VCNonR6jCf7C7QWmYHg',
        authDomain: 'biobrix-0.firebaseapp.com',
        projectId: 'biobrix-0',
        appId: "1:191952306992:web:f9481d8075cb1bfaf13ef5",
        measurementId: "G-YG5X7TP89G",
        storageBucket: 'biobrix-0.appspot.com'
      };
      var routes = [{
        path: '',
        component: _admiin_component_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [{
          path: '',
          redirectTo: 'administration'
        }, {
          path: 'administration',
          component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__["AdminLoginComponent"]
        }, {
          path: 'products',
          component: _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_4__["AdminProductsComponent"]
        }, {
          path: 'products/add',
          component: _admin_products_admin_products_add_admin_products_add_Component__WEBPACK_IMPORTED_MODULE_11__["AdminProductsAddComponent"]
        }, {
          path: 'products/:id',
          component: _admin_products_admin_products_add_admin_products_add_Component__WEBPACK_IMPORTED_MODULE_11__["AdminProductsAddComponent"]
        }, {
          path: 'orders',
          component: _admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_5__["AdminOrdersComponent"]
        }, {
          path: 'orders/:id',
          component: _admin_orders_admin_order_details_admin_order_details_component__WEBPACK_IMPORTED_MODULE_16__["AdminOrderDetailsComponent"]
        }, {
          path: 'slideshow',
          component: _admin_slideshow_admin_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["AdminSlideshowComponent"]
        }, {
          path: 'slideshow/add',
          component: _admin_slideshow_admin_slideshow_add_admin_slideshow_add_component__WEBPACK_IMPORTED_MODULE_18__["AdminSlideshowAddComponent"]
        }, {
          path: 'testimonies',
          component: _admin_testimonies_admin_testimonies_component__WEBPACK_IMPORTED_MODULE_7__["AdminTestimoniesComponent"]
        }, {
          path: 'testimonies/add',
          component: _admin_testimonies_add_testimonies_add_testimonies_component__WEBPACK_IMPORTED_MODULE_19__["AddTestimoniesComponent"]
        }, {
          path: 'pending_reviews',
          component: _admin_reviews_admin_reviews_component__WEBPACK_IMPORTED_MODULE_8__["AdminReviewsComponent"]
        }]
      }];

      var AdminModule = function AdminModule() {
        _classCallCheck(this, AdminModule);
      };

      AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AdminModule
      });
      AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AdminModule_Factory(t) {
          return new (t || AdminModule)();
        },
        providers: [_admin_products_admin_product_service__WEBPACK_IMPORTED_MODULE_12__["AdminProductService"], _admin_orders_admin_order_service__WEBPACK_IMPORTED_MODULE_17__["AdminOrderService"], _firebase_storage_service__WEBPACK_IMPORTED_MODULE_22__["FirebaseStorageService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
          useClass: _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptorService"],
          multi: true
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(fireConfig), _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
          declarations: [_admiin_component_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_4__["AdminProductsComponent"], _admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_5__["AdminOrdersComponent"], _admin_slideshow_admin_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["AdminSlideshowComponent"], _admin_testimonies_admin_testimonies_component__WEBPACK_IMPORTED_MODULE_7__["AdminTestimoniesComponent"], _admin_reviews_admin_reviews_component__WEBPACK_IMPORTED_MODULE_8__["AdminReviewsComponent"], _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__["AdminLoginComponent"], _admin_products_admin_products_add_admin_products_add_Component__WEBPACK_IMPORTED_MODULE_11__["AdminProductsAddComponent"], _admin_products_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"], _admin_orders_admin_order_details_admin_order_details_component__WEBPACK_IMPORTED_MODULE_16__["AdminOrderDetailsComponent"], _admin_slideshow_admin_slideshow_add_admin_slideshow_add_component__WEBPACK_IMPORTED_MODULE_18__["AdminSlideshowAddComponent"], _admin_testimonies_add_testimonies_add_testimonies_component__WEBPACK_IMPORTED_MODULE_19__["AddTestimoniesComponent"], _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_23__["LoadingSpinnerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_admiin_component_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_4__["AdminProductsComponent"], _admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_5__["AdminOrdersComponent"], _admin_slideshow_admin_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["AdminSlideshowComponent"], _admin_testimonies_admin_testimonies_component__WEBPACK_IMPORTED_MODULE_7__["AdminTestimoniesComponent"], _admin_reviews_admin_reviews_component__WEBPACK_IMPORTED_MODULE_8__["AdminReviewsComponent"], _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__["AdminLoginComponent"], _admin_products_admin_products_add_admin_products_add_Component__WEBPACK_IMPORTED_MODULE_11__["AdminProductsAddComponent"], _admin_products_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"], _admin_orders_admin_order_details_admin_order_details_component__WEBPACK_IMPORTED_MODULE_16__["AdminOrderDetailsComponent"], _admin_slideshow_admin_slideshow_add_admin_slideshow_add_component__WEBPACK_IMPORTED_MODULE_18__["AdminSlideshowAddComponent"], _admin_testimonies_add_testimonies_add_testimonies_component__WEBPACK_IMPORTED_MODULE_19__["AddTestimoniesComponent"], _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_23__["LoadingSpinnerComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(fireConfig), _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"]],
            providers: [_admin_products_admin_product_service__WEBPACK_IMPORTED_MODULE_12__["AdminProductService"], _admin_orders_admin_order_service__WEBPACK_IMPORTED_MODULE_17__["AdminOrderService"], _firebase_storage_service__WEBPACK_IMPORTED_MODULE_22__["FirebaseStorageService"], {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
              useClass: _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptorService"],
              multi: true
            }],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "1STh":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/admin/admin-slideshow/admin-slideshow.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AdminSlideshowComponent */

    /***/
    function STh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminSlideshowComponent", function () {
        return AdminSlideshowComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_http_slideshow_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/http/slideshow-api.service */
      "yTGm");
      /* harmony import */


      var _core_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/services/utility.service */
      "qeeY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function AdminSlideshowComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminSlideshowComponent_div_1_Template_span_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var slideshow_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onModalClick(slideshow_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slideshow_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slideshow_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var AdminSlideshowComponent = /*#__PURE__*/function () {
        function AdminSlideshowComponent(slidshowApiService, utilityService) {
          _classCallCheck(this, AdminSlideshowComponent);

          this.slidshowApiService = slidshowApiService;
          this.utilityService = utilityService;
          this.list = [];
          this.currentId = '';
        }

        _createClass(AdminSlideshowComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetchList();
          }
        }, {
          key: "onModalClick",
          value: function onModalClick(id) {
            this.currentId = id;
          }
        }, {
          key: "onDelete",
          value: function onDelete() {
            var _this2 = this;

            this.utilityService.showLoader.next(true);
            this.slidshowApiService.deleteSlide(this.currentId).subscribe(function (res) {
              console.log('product deleted');

              _this2.utilityService.showLoader.next(false);

              _this2.fetchList();
            }, function (err) {
              return _this2.utilityService.showLoader.next(false);
            });
          }
        }, {
          key: "fetchList",
          value: function fetchList() {
            var _this3 = this;

            this.utilityService.showLoader.next(true);
            this.slidshowApiService.getSlideshows().subscribe(function (res) {
              if (res.length) {
                _this3.list = res;
              }

              _this3.utilityService.showLoader.next(false);
            }, function (err) {
              return _this3.utilityService.showLoader.next(false);
            });
          }
        }]);

        return AdminSlideshowComponent;
      }();

      AdminSlideshowComponent.ɵfac = function AdminSlideshowComponent_Factory(t) {
        return new (t || AdminSlideshowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_slideshow_api_service__WEBPACK_IMPORTED_MODULE_1__["SlideshowApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]));
      };

      AdminSlideshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminSlideshowComponent,
        selectors: [["admin-slideshow"]],
        decls: 21,
        vars: 1,
        consts: [[1, "slideshow"], ["class", "item", 4, "ngFor", "ngForOf"], ["id", "confirmationModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "add-button"], ["routerLink", "add", 1, "btn", "primary-button"], [1, "item"], ["height", "250", 3, "src"], [1, "overlay"], ["data-toggle", "modal", "data-target", "#confirmationModal", 1, "icon", 3, "click"], [1, "fa", "fa-trash"]],
        template: function AdminSlideshowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminSlideshowComponent_div_1_Template, 5, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Confirm deletion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Do you want to delete ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminSlideshowComponent_Template_button_click_16_listener() {
              return ctx.onDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Add new slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.slideshow[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 3rem;\n}\n.slideshow[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 20px;\n  position: relative;\n}\n.slideshow[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%], .slideshow[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.slideshow[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  width: calc(100% - 40px);\n  height: calc(100% - 40px);\n  margin: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  visibility: hidden;\n  box-sizing: border-box;\n}\n.slideshow[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25px;\n  right: 25px;\n  width: 25px;\n  font-size: 25px;\n  height: 25px;\n  color: red;\n  visibility: hidden;\n  cursor: pointer;\n}\n.add-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 4rem;\n  right: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9fY29tbW9uLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW4tc2xpZGVzaG93L2FkbWluLXNsaWRlc2hvdy5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvX2FuaW1hdGlvbnMuc2NzcyIsInNyYy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLGVBQUE7QUFJQSxtQkFBQTtBQUdBLGtCQUFBO0FDckJBO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0lGO0FERkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDSUo7QURBQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0dGO0FEREU7RUFFRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSwyREFBQTtFQUNBLG1LQUFBO0VBRUEsMkJBQUE7QUNDSjtBREdFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSw0Q0FBQTtFQUEwQyxnQ0FBQTtBQ0Q5QztBRE1BO0VBQ0U7SUFDRSxVQUFBO0VDSEY7RURNQTtJQUNFLFVBQUE7RUNKRjtBQUNGO0FET0E7RUFDRTtJQUNFLFVBQUE7RUNMRjtFRFFBO0lBQ0UsVUFBQTtFQ05GO0FBQ0Y7QURTQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSwrQkFBQTtFQ1JGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSwrQkFBQTtFQ1JGO0FBQ0Y7QURXQTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUNURjtBRFlBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ1RGO0FEWUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ1RGO0FEWUE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNURjtBRFlBO0VBQ0UsaUJBQUE7QUNURjtBRFlBO0VBRUE7SUFDRSxpQkFBQTtFQ1ZBO0FBQ0Y7QURhQTtFQUVBO0lBQ0UsaUJBQUE7RUNaQTtBQUNGO0FDN0dBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0Esd0JBQUE7RUQrR0o7QUFDRjtBQ3ZIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VEK0dKO0FBQ0Y7QUM3R0E7RUFDRTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFRCtHSjtFQzdHQTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFRCtHSjtBQUNGO0FDdkhBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7QUFDRjtBQS9IQTtFRUlFLGFBQUE7RUFDQSxtQkZKYztFQUNkLGVBQUE7RUFDQSxhQUFBO0FBa0lGO0FBaElFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFrSUo7QUEvSE07RUFDRSxtQkFBQTtBQWlJUjtBQTVIRTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQThISjtBQTNIRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBNkhKO0FBekhBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBNEhGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZG1pbi1zbGlkZXNob3cvYWRtaW4tc2xpZGVzaG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktd2Vic2l0ZS1jb2xvcjogIzA3NWFjOTtcbiRwcmltYXJ5LXdlYnNpdGUtY29sb3ItbGlnaHQ6ICM5ZmMwZWM7XG4kc2Vjb25kYXJ5LXdlYnNpdGUtY29sb3I6ICMwODRjYTU7XG4kdGVydGlhcnktd2Vic2l0ZS1jb2xvcjogcmdiYSgyNTUsMjU1LDAsMSk7XG4kcHJpbWFyeS10ZXh0OiAjNDQ0NDQ0O1xuXG4kc2Vjb25kYXJ5LWJnOiAjZmNmY2ZjO1xuJHNlY29uZGFyeS1ib3JkZXI6ICNlOWVjZWY7XG5cbiRwcmltYXJ5LXJlZDogI2Y1MmIyYjtcbiRwcmltYXJ5LXJlZC1saWdodDogI2VlYTRhNDtcblxuXG5cbi8qIEluZm8gQmFzZWQgKi9cbiRjb2xvci1ub3RpZnk6ICNmZmMxMDc7XG4kY29sb3ItaW5mbzogIzM1YzdkZjtcblxuLyogUHJvcGVydHkgQmFzZWQgKi9cbiRjb2xvci13aGl0ZTogd2hpdGU7XG5cbi8qKiBHcmF5IFNoYWRlcyAqKi9cbiRncmV5LXNoYWRlLTE6ICNmMWYxZjE7XG4kZ3JleS1zaGFkZS0yOiAjY2VjZWNlO1xuJGdyZXktc2hhZGUtMzogI2ZlZmVmZTtcbiRmYS1mb250LXBhdGg6IFwifmZvbnQtYXdlc29tZS9mb250cy9cIjtcbiIsIi5sb2FkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiA5OTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4ucHJpbWFyeS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogLjFyZW0gc29saWQgYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMS4ycmVtIDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDByZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcblxuICAmOmhvdmVye1xuXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEuMnJlbSAzcmVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMnB4IDFweCB0cmFuc3BhcmVudCBpbnNldCxcbiAgICAwIDE4cHggMzJweCAtMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSBpbnNldDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG5cbiAgfVxuXG4gIC5mYSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIH1cblxuICAmOmFjdGl2ZSwmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpIHNjYWxlKDAuOTYpO1xuICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKGJsYWNrLCAuMik7IC8qKGRpcmVjdGlvbiBzaGFkb3cgYmx1ciBjb2xvcikqL1xuICB9XG5cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwJSwgMCk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbi5zbGlkZUluRG93biB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluRG93bjtcbn1cblxuLmZhZGVJbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbn1cblxuLmFuaW1hdGVkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5hbGVydC1tc2cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiBjYWxjKDUwJSAtIDE1MHB4KTtcbiAgdG9wOiAxM3JlbTtcbiAgei1pbmRleDogMTAwO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogN3JlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA4cmVtO1xufVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cbn1cbiIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzL2ltcG9ydHNcIjtcblxuXG4uc2xpZGVzaG93IHtcbiAgQGluY2x1ZGUgZmxleChyb3cpO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDNyZW07XG5cbiAgLml0ZW0ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5vdmVybGF5LCAuaWNvbiB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm92ZXJsYXkge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLmljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1cHg7XG4gICAgcmlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmFkZC1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNHJlbTtcbiAgcmlnaHQ6IDRyZW07XG59XG4iLCJcbkBrZXlmcmFtZXMgbW92ZUluQm90dG9tIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZUluVG9wIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xuICB9XG59XG4iLCJAbWl4aW4gdHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbikge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZsZXgtYWxpZ25tZW50KCRtYWluLWF4aXMsICRjcm9zcy1heGlzKSB7XG4gIGp1c3RpZnktY29udGVudDogJG1haW4tYXhpcztcbiAgYWxpZ24taXRlbXM6ICRjcm9zcy1heGlzO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminSlideshowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'admin-slideshow',
            templateUrl: './admin-slideshow.component.html',
            styleUrls: ['./admin-slideshow.component.scss']
          }]
        }], function () {
          return [{
            type: _core_http_slideshow_api_service__WEBPACK_IMPORTED_MODULE_1__["SlideshowApiService"]
          }, {
            type: _core_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "30Go":
    /*!********************************************************************!*\
      !*** ./node_modules/@firebase/app/node_modules/tslib/tslib.es6.js ***!
      \********************************************************************/

    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

    /***/
    function Go(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__extends", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__rest", function () {
        return __rest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__decorate", function () {
        return __decorate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__param", function () {
        return __param;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__metadata", function () {
        return __metadata;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
        return __awaiter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__generator", function () {
        return __generator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
        return __exportStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__values", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__read", function () {
        return __read;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spread", function () {
        return __spread;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
        return __spreadArrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__await", function () {
        return __await;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
        return __asyncGenerator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
        return __asyncDelegator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
        return __asyncValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
        return __makeTemplateObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importStar", function () {
        return __importStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
        return __importDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
        return __classPrivateFieldGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
        return __classPrivateFieldSet;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
      
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
      
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      function __exportStar(m, exports) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(__read(arguments[i]));
        }

        return ar;
      }

      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      ;

      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    },

    /***/
    "5KoX":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/admin/admiin-component/admin.component.ts ***!
      \*******************************************************************/

    /*! exports provided: AdminComponent */

    /***/
    function KoX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth.service */
      "JD6w");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AdminComponent_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminComponent_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Slideshow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminComponent_a_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Testimonies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminComponent_a_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pending Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent(authService, router) {
          _classCallCheck(this, AdminComponent);

          this.authService = authService;
          this.router = router;
          this.isAuthenticated = false;
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            console.log('admin component loaded');
            this.authService.autoLogin();
            this.userSubs = this.authService.userSubject.subscribe(function (user) {
              return _this4.changeAuthStatus(user);
            });
          }
        }, {
          key: "changeAuthStatus",
          value: function changeAuthStatus(user) {
            this.isAuthenticated = !!user;
          }
        }]);

        return AdminComponent;
      }();

      AdminComponent.ɵfac = function AdminComponent_Factory(t) {
        return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminComponent,
        selectors: [["admin-component"]],
        decls: 13,
        vars: 5,
        consts: [[1, "main-container", "admin-body"], [1, "sidebar"], [1, "bar-heading"], ["routerLink", "administration", "routerLinkActive", "active", 1, "sidebar__a"], ["class", "sidebar__a", "routerLink", "products", "routerLinkActive", "active", 4, "ngIf"], ["class", "sidebar__a", "routerLink", "orders", "routerLinkActive", "active", 4, "ngIf"], ["class", "sidebar__a", "routerLink", "slideshow", "routerLinkActive", "active", 4, "ngIf"], ["class", "sidebar__a", "routerLink", "testimonies", "routerLinkActive", "active", 4, "ngIf"], ["class", "sidebar__a", "routerLink", "pending_reviews", "routerLinkActive", "active", 4, "ngIf"], [1, "content"], ["routerLink", "products", "routerLinkActive", "active", 1, "sidebar__a"], ["routerLink", "orders", "routerLinkActive", "active", 1, "sidebar__a"], ["routerLink", "slideshow", "routerLinkActive", "active", 1, "sidebar__a"], ["routerLink", "testimonies", "routerLinkActive", "active", 1, "sidebar__a"], ["routerLink", "pending_reviews", "routerLinkActive", "active", 1, "sidebar__a"]],
        template: function AdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Biobrix Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Administration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminComponent_a_6_Template, 2, 0, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminComponent_a_7_Template, 2, 0, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminComponent_a_8_Template, 2, 0, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminComponent_a_9_Template, 2, 0, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdminComponent_a_10_Template, 2, 0, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".admin-body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Lato\", sans-serif;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 200px;\n  background-color: #f1f1f1;\n  position: fixed;\n  overflow: auto;\n}\n\n.sidebar__a[_ngcontent-%COMP%] {\n  display: block;\n  color: black;\n  padding: 16px;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.sidebar__a.active[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.sidebar__a[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #555;\n  color: white;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-left: 200px;\n  padding: 1px 16px;\n  min-height: 50rem;\n}\n\n@media screen and (max-width: 700px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    position: relative;\n  }\n  .sidebar__a[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  .sidebar__a[_ngcontent-%COMP%] {\n    text-align: center;\n    float: none;\n  }\n}\n\n.bar-heading[_ngcontent-%COMP%] {\n  display: block;\n  color: black;\n  padding: 16px;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZG1paW4tY29tcG9uZW50L2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUNOOztBQUVJO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBQU47O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFKRjs7QUFPQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQUpGO0VBTUU7SUFDRSxXQUFBO0VBSko7O0VBU0E7SUFDRSxjQUFBO0VBTkY7QUFDRjs7QUFTQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VBUEY7QUFDRjs7QUFVQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBUkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2FkbWlpbi1jb21wb25lbnQvYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uc2lkZWJhciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gICZfX2Ege1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICY6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cblxufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgcGFkZGluZzogMXB4IDE2cHg7XG4gIG1pbi1oZWlnaHQ6IDUwcmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuc2lkZWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICZfX2Ege1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuXG4gIH1cblxuICAuY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnNpZGViYXJfX2Ege1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxufVxuXG4uYmFyLWhlYWRpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'admin-component',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss']
          }]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AXPk":
    /*!***********************************************************!*\
      !*** ./src/app/modules/admin/firebase-storage.service.ts ***!
      \***********************************************************/

    /*! exports provided: FirebaseStorageService */

    /***/
    function AXPk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseStorageService", function () {
        return FirebaseStorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");

      var FirebaseStorageService = /*#__PURE__*/function () {
        function FirebaseStorageService(storage) {
          _classCallCheck(this, FirebaseStorageService);

          this.storage = storage;
        }

        _createClass(FirebaseStorageService, [{
          key: "uploadFile",
          value: function uploadFile(file) {
            var _this5 = this;

            var folderName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'product_images';
            return new Promise(function (resolve, reject) {
              var id = "".concat(Math.random().toString(36).substring(2), "_").concat(Date.now());

              var ref = _this5.storage.ref(folderName).child(id);

              var task = ref.put(file);
              task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var downloadURL;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return ref.getDownloadURL().toPromise();

                        case 2:
                          downloadURL = _context.sent;
                          console.log(downloadURL);
                          resolve(downloadURL);

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (_) {
                return reject;
              })).subscribe();
            });
          }
        }]);

        return FirebaseStorageService;
      }();

      FirebaseStorageService.ɵfac = function FirebaseStorageService_Factory(t) {
        return new (t || FirebaseStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]));
      };

      FirebaseStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FirebaseStorageService,
        factory: FirebaseStorageService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirebaseStorageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AZ++":
    /*!*************************************************!*\
      !*** ./src/app/core/http/review-api.service.ts ***!
      \*************************************************/

    /*! exports provided: ReviewApiService */

    /***/
    function AZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewApiService", function () {
        return ReviewApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _constants_api_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../constants/api.const */
      "bh//");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./http-error-handler.service */
      "p4Ho");
      /* harmony import */


      var _modules_admin_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../modules/admin/auth.service */
      "JD6w");

      var ReviewApiService = /*#__PURE__*/function () {
        function ReviewApiService(http, httpErrorHandlerService, authService) {
          _classCallCheck(this, ReviewApiService);

          this.http = http;
          this.httpErrorHandlerService = httpErrorHandlerService;
          this.authService = authService;
          this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL;
        }

        _createClass(ReviewApiService, [{
          key: "getReviews",
          value: function getReviews() {
            var url = "".concat(this.BASE_URL).concat(_constants_api_const__WEBPACK_IMPORTED_MODULE_3__["GET_REVIEWS_API"]);
            return this.http.get(url, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.authService.userSubject.value.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }, {
          key: "acknowlegdeReview",
          value: function acknowlegdeReview(data) {
            var url = "".concat(this.BASE_URL).concat(_constants_api_const__WEBPACK_IMPORTED_MODULE_3__["ACKNOWLEDGE_REVIEW_API"]);
            return this.http.post(url, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.authService.userSubject.value.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }]);

        return ReviewApiService;
      }();

      ReviewApiService.ɵfac = function ReviewApiService_Factory(t) {
        return new (t || ReviewApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_modules_admin_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
      };

      ReviewApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ReviewApiService,
        factory: ReviewApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"]
          }, {
            type: _modules_admin_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "COMa":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/admin/admin-orders/admin-order.service.ts ***!
      \*******************************************************************/

    /*! exports provided: AdminOrderService */

    /***/
    function COMa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminOrderService", function () {
        return AdminOrderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _constants_api_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../constants/api.const */
      "bh//");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/compiler/src/util */
      "Yoyx");
      /* harmony import */


      var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _core_http_http_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/http/http-error-handler.service */
      "p4Ho");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../auth.service */
      "JD6w");

      var AdminOrderService = /*#__PURE__*/function () {
        function AdminOrderService(http, httpErrorHandlerService, authService) {
          _classCallCheck(this, AdminOrderService);

          this.http = http;
          this.httpErrorHandlerService = httpErrorHandlerService;
          this.authService = authService;
          this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_URL;
          this.token = this.authService.userSubject.value.token;
        }

        _createClass(AdminOrderService, [{
          key: "getorder",
          value: function getorder(id) {
            var order = this.orders.find(function (order) {
              return order._id === id;
            });
            return order ? order : Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__["error"])('No order found');
          }
        }, {
          key: "getAllOrders",
          value: function getAllOrders() {
            var url = "".concat(this.BASE_URL).concat(_constants_api_const__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_ORDERS_API"]);
            return this.http.get(url, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(id, status) {
            var url = "".concat(this.BASE_URL).concat(_constants_api_const__WEBPACK_IMPORTED_MODULE_1__["UPDATE_STATUS_API"]).concat(id);
            return this.http.patch(url, {
              status: status
            }, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }, {
          key: "deleteOrder",
          value: function deleteOrder(id) {
            var url = "".concat(this.BASE_URL).concat(_constants_api_const__WEBPACK_IMPORTED_MODULE_1__["DELETE_ORDER_API"]).concat(id);
            return this.http["delete"](url, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }]);

        return AdminOrderService;
      }();

      AdminOrderService.ɵfac = function AdminOrderService_Factory(t) {
        return new (t || AdminOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_http_http_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["HttpErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]));
      };

      AdminOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AdminOrderService,
        factory: AdminOrderService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminOrderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _core_http_http_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["HttpErrorHandlerService"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Crn5":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/admin/admin-orders/admin-order-details/admin-order-details.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: AdminOrderDetailsComponent */

    /***/
    function Crn5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminOrderDetailsComponent", function () {
        return AdminOrderDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _admin_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../admin-order.service */
      "COMa");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../auth.service */
      "JD6w");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../loading-spinner/loading-spinner.component */
      "Fx1/");

      function AdminOrderDetailsComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PID \xA0 \xA0 : \xA0 \xA0 ", item_r4.product_id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name \xA0 \xA0 : \xA0 \xA0 ", item_r4.product_name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Quantity \xA0 \xA0 : \xA0 \xA0 ", item_r4.quantity, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price \xA0 \xA0 : \xA0 \xA0 ", item_r4.price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total \xA0 \xA0 : \xA0 \xA0 ", item_r4.total, "");
        }
      }

      function AdminOrderDetailsComponent_div_75_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminOrderDetailsComponent_div_75_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.updateStatus("dispatched");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order dispatched ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminOrderDetailsComponent_div_75_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminOrderDetailsComponent_div_75_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.updateStatus("delivered");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order delivered ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminOrderDetailsComponent_div_75_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminOrderDetailsComponent_div_75_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.updateStatus("cancelled");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel this order ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminOrderDetailsComponent_div_75_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminOrderDetailsComponent_div_75_button_1_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminOrderDetailsComponent_div_75_button_2_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminOrderDetailsComponent_div_75_button_3_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminOrderDetailsComponent_div_75_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.deleteOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Delete this order ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.order.order_status === "placed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.order.order_status === "dispatched");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.order.order_status !== "cancel");
        }
      }

      function AdminOrderDetailsComponent_ng_template_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AdminOrderDetailsComponent = /*#__PURE__*/function () {
        function AdminOrderDetailsComponent(orderService, route, authSerive, router) {
          var _this6 = this;

          _classCallCheck(this, AdminOrderDetailsComponent);

          this.orderService = orderService;
          this.route = route;
          this.authSerive = authSerive;
          this.router = router;
          this.isLoading = false;

          this.updateStatus = function (status) {
            _this6.isLoading = true;

            _this6.orderService.updateStatus(_this6.id, status).subscribe(function (data) {
              return _this6.onCancel(data);
            });
          };

          this.deleteOrder = function () {
            _this6.isLoading = true;

            _this6.orderService.deleteOrder(_this6.id).subscribe(function (deleted) {
              return _this6.onCancel(deleted);
            });
          };
        }

        _createClass(AdminOrderDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.paramMap.get('id');
            this.order = this.orderService.getorder(this.id);
          }
        }, {
          key: "onCancel",
          value: function onCancel(data) {
            this.isLoading = false;
            console.log(data);
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
          }
        }]);

        return AdminOrderDetailsComponent;
      }();

      AdminOrderDetailsComponent.ɵfac = function AdminOrderDetailsComponent_Factory(t) {
        return new (t || AdminOrderDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_order_service__WEBPACK_IMPORTED_MODULE_1__["AdminOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AdminOrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminOrderDetailsComponent,
        selectors: [["app-admin-order-details"]],
        decls: 78,
        vars: 16,
        consts: [[1, "mr-3"], [1, "heading"], [1, "modal-content"], [1, "modal-body"], [1, "container"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-xs-6"], ["type", "none"], [1, "left"], ["type", "none", 1, "right"], [1, "right"], [4, "ngIf", "ngIfElse"], ["loading_circular", ""], [1, "col"], [1, "img-fluid", 2, "height", "20rem", "width", "10rem", 3, "src"], [1, "col-xs-6", 2, "padding-top", "2vh"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [2, "text-align", "center"]],
        template: function AdminOrderDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Order Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Items Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminOrderDetailsComponent_div_8_Template, 15, 6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Order ID:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Transaction ID:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Date:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Total Amount:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Order Status:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Payment Status:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Customer Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Customer Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Phone Number:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Address:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "City :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "State:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Zip code:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AdminOrderDetailsComponent_div_75_Template, 6, 3, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, AdminOrderDetailsComponent_ng_template_76_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.order.products);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order._id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.transaction_id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.updatedAt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.total);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.order_status.toUpperCase());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.payment_status);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.user_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.phone_number);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.address);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.city);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.zip_code);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r2);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__["LoadingSpinnerComponent"]],
        styles: ["*[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(\"https://res.cloudinary.com/dxfq3iotg/raw/upload/v1585021315/Roboto-Regular.ttf\");\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: blue;\n  font-family: Roboto, serif;\n}\n\n.mt-100[_ngcontent-%COMP%] {\n  margin-top: 150px;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 0.7rem;\n}\n\n@media (width: 1024px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 700px;\n  }\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 3vh;\n  font-weight: bold;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: none;\n  text-align: center;\n  padding-bottom: 0;\n}\n\nh6[_ngcontent-%COMP%] {\n  color: #0237e6;\n  margin-top: 2vh;\n  margin-bottom: 0;\n  font-size: 2vh;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 2vh;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: none;\n  justify-content: center;\n  padding-top: 0;\n}\n\n.row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 2vh 0 2vh 0;\n  justify-content: start;\n  flex-wrap: unset;\n  margin: 0;\n}\n\n.row-l[_ngcontent-%COMP%] {\n  padding: 2vh 0 2vh 0;\n  justify-content: start;\n  flex-wrap: unset;\n  margin: 0;\n}\n\nul[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 2vh;\n  font-weight: bold;\n  line-height: 4vh;\n}\n\n.left[_ngcontent-%COMP%] {\n  float: left;\n  font-weight: normal;\n  color: #7e7b7b;\n}\n\n.right[_ngcontent-%COMP%] {\n  float: right;\n  text-align: right;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n@media (min-width: 1025px) {\n  img[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n\n.openmodal[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  width: 30vw;\n}\n\n[_ngcontent-%COMP%]:-moz-any-link:focus {\n  outline: none;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: medium;\n  margin: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZG1pbi1vcmRlcnMvYWRtaW4tb3JkZXItZGV0YWlscy9hZG1pbi1vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSwwRkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLGdCQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQURGOztBQUtBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNFLFVBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtBQUhGOztBQU1BO0VBRUUsaUJBQUE7RUFDQSxZQUFBO0FBSkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2FkbWluLW9yZGVycy9hZG1pbi1vcmRlci1kZXRhaWxzL2FkbWluLW9yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgb3V0bGluZTogbm9uZVxufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgc3JjOiB1cmwoJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R4ZnEzaW90Zy9yYXcvdXBsb2FkL3YxNTg1MDIxMzE1L1JvYm90by1SZWd1bGFyLnR0ZicpXG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzZXJpZlxufVxuXG4ubXQtMTAwIHtcbiAgbWFyZ2luLXRvcDogMTUwcHhcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzOiAwLjdyZW1cbn1cblxuQG1lZGlhKHdpZHRoOjEwMjRweCkge1xuICAubW9kYWwtZGlhbG9nIHtcbiAgICBtYXgtd2lkdGg6IDcwMHB4XG4gIH1cbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDN2aDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cblxuaDQge1xuICBtYXJnaW4tbGVmdDogYXV0b1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMFxufVxuXG5oNiB7XG4gIGNvbG9yOiByZ2IoMiwgNTUsIDIzMCk7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAydmhcbn1cblxuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAydmhcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMFxufVxuXG4ucm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpO1xuICBwYWRkaW5nOiAydmggMCAydmggMDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgZmxleC13cmFwOiB1bnNldDtcbiAgbWFyZ2luOiAwXG5cbn1cbi5yb3ctbCB7XG4gIHBhZGRpbmc6IDJ2aCAwIDJ2aCAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBmbGV4LXdyYXA6IHVuc2V0O1xuICBtYXJnaW46IDBcblxufVxuXG51bCB7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXG59XG5cbnVsIGxpIHtcbiAgZm9udC1zaXplOiAydmg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNHZoXG59XG5cbi5sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiByZ2IoMTI2LCAxMjMsIDEyMylcbn1cblxuLnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodFxufVxuXG4uY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAwXG59XG5cbkBtZWRpYShtaW4td2lkdGg6MTAyNXB4KSB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDcwJVxuICB9XG59XG5cbi5vcGVubW9kYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMzB2d1xufVxuXG46LW1vei1hbnktbGluazpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmVcbn1cblxuLmJ0biB7XG5cbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIG1hcmdpbjogMnJlbTtcblxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminOrderDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin-order-details',
            templateUrl: './admin-order-details.component.html',
            styleUrls: ['./admin-order-details.component.scss']
          }]
        }], function () {
          return [{
            type: _admin_order_service__WEBPACK_IMPORTED_MODULE_1__["AdminOrderService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "DPmF":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/admin/admin-products/admin-products-add/mime-type.validator.ts ***!
      \****************************************************************************************/

    /*! exports provided: mimeType */

    /***/
    function DPmF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mimeType", function () {
        return mimeType;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var mimeType = function mimeType(control) {
        var isUrl = typeof control.value === "string";
        var fileReader = new FileReader();
        var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
          if (isUrl) {
            observer.next(null);
            observer.complete();
          } else fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = '';
            var isValid;

            for (var i = 0; i < arr.length; i++) {
              header += arr[i].toString(16);
            } //concert this to a hexadecimal string


            switch (header) {
              case "89504e47":
                isValid = true;
                break;

              case "ffd8ffe0":
              case "ffd8ffe1":
              case "ffd8ffe2":
              case "ffd8ffe3":
              case "ffd8ffe8":
                isValid = true;
                break;

              default:
                isValid = false; // Or you can use the blob.type as fallback

                break;
            }

            if (isValid) observer.next(null);else observer.next({
              invalidMimeType: true
            });
            observer.complete();
          });

          if (!isUrl) {
            var file = control.value;
            fileReader.readAsArrayBuffer(file);
          }
        });
        return frObs;
      };
      /***/

    },

    /***/
    "Fx1/":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/admin/loading-spinner/loading-spinner.component.ts ***!
      \****************************************************************************/

    /*! exports provided: LoadingSpinnerComponent */

    /***/
    function Fx1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function () {
        return LoadingSpinnerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoadingSpinnerComponent = function LoadingSpinnerComponent() {
        _classCallCheck(this, LoadingSpinnerComponent);
      };

      LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) {
        return new (t || LoadingSpinnerComponent)();
      };

      LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoadingSpinnerComponent,
        selectors: [["app-loading-spinner"]],
        decls: 5,
        vars: 0,
        consts: [[1, "lds-ring"]],
        template: function LoadingSpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".lds-ring[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border: 8px solid rgb(62, 78, 226);\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: rgb(62, 78, 226) transparent transparent transparent;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n@-webkit-keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsc0VBQThEO1VBQTlELDhEQUE4RDtFQUM5RCxrRUFBa0U7QUFDcEU7QUFDQTtFQUNFLCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQVBBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGRzLXJpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5sZHMtcmluZyBkaXYge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyOiA4cHggc29saWQgcmdiKDYyLCA3OCwgMjI2KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNjIsIDc4LCAyMjYpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcbn1cbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcbn1cbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNXM7XG59XG5Aa2V5ZnJhbWVzIGxkcy1yaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-loading-spinner',
            template: '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
            styleUrls: ['./loading-spinner.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "GPNb":
    /*!*************************************************!*\
      !*** ./node_modules/@angular/compiler/src sync ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function GPNb(module, exports) {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      webpackEmptyContext.keys = function () {
        return [];
      };

      webpackEmptyContext.resolve = webpackEmptyContext;
      module.exports = webpackEmptyContext;
      webpackEmptyContext.id = "GPNb";
      /***/
    },

    /***/
    "JD6w":
    /*!***********************************************!*\
      !*** ./src/app/modules/admin/auth.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthService */

    /***/
    function JD6w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user.model */
      "RH3D");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthService = /*#__PURE__*/function () {
        /**
         * The BehaviorSubject has the characteristic that it stores the “current” value.
         * This means that you can always directly get the last emitted value from the BehaviorSubject.
         */
        function AuthService(http, router) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
          this.apiKey = 'AIzaSyBPzOGjeRRrGLc-VCNonR6jCf7C7QWmYHg';
          this.api = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp';
          this.logInApi = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword';
          this.userDataKey = 'userData';
          this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(email, password) {
            return this.http.post("".concat(this.logInApi, "?key=").concat(this.apiKey), {
              email: email,
              password: password,
              returnSecureToken: true
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(this.saveUser.bind(this)));
          }
        }, {
          key: "handleError",
          value: function handleError(errorRes) {
            var errorMessage = 'An unknown error occured!';
            if (!errorRes.error || !errorRes.error.error) return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);

            switch (errorRes.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'Email already exists';
                break;

              case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email not found';
                break;

              case 'INVALID_PASSWORD':
                errorMessage = 'Invalid password';
                break;

              case 'USER_DISABLED':
                errorMessage = 'User has been diabled';
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
          }
        }, {
          key: "autoLogout",
          value: function autoLogout(expirationDuration) {
            var _this7 = this;

            this.timer = setTimeout(function () {
              return _this7.logout();
            }, expirationDuration);
          }
        }, {
          key: "saveUser",
          value: function saveUser(data) {
            var expiresDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
            var user = new _user_model__WEBPACK_IMPORTED_MODULE_3__["User"](data.email, data.localId, data.idToken, expiresDate);
            this.userSubject.next(user);
            this.autoLogout(+data.expiresIn * 1000);
            localStorage.setItem(this.userDataKey, JSON.stringify(user));
          }
        }, {
          key: "autoLogin",
          value: function autoLogin() {
            var savedUserData = localStorage.getItem(this.userDataKey);
            if (!savedUserData) return;
            var userData = JSON.parse(savedUserData);

            var user = _user_model__WEBPACK_IMPORTED_MODULE_3__["User"].formJSON(userData);

            if (user.token) {
              // it will run olny if it is a valid token
              this.userSubject.next(user);
              var exiprationDate = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
              this.autoLogout(exiprationDate);
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.userSubject.next(null);
            this.router.navigate(['/auth']);
            localStorage.removeItem(this.userDataKey);
            if (this.timer) clearTimeout(this.timer);
            this.timer = null; //localStorage.clear() //clear all the data
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LmZi":
    /*!**********************************************************!*\
      !*** ./node_modules/@firebase/storage/dist/index.esm.js ***!
      \**********************************************************/

    /*! exports provided: registerStorage */

    /***/
    function LmZi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerStorage", function () {
        return registerStorage;
      });
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/app */
      "wj3C");
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      "30Go");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @firebase/component */
      "S+S0");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_2__);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @fileoverview Constants used in the Firebase Storage library.
       */

      /**
       * Domain name for firebase storage.
       */


      var DEFAULT_HOST = 'firebasestorage.googleapis.com';
      /**
       * The key in Firebase config json for the storage bucket.
       */

      var CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
      /**
       * 2 minutes
       *
       * The timeout for all operations except upload.
       */

      var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
      /**
       * 10 minutes
       *
       * The timeout for upload.
       */

      var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;
      /**
       * This is the value of Number.MIN_SAFE_INTEGER, which is not well supported
       * enough for us to use it directly.
       */

      var MIN_SAFE_INTEGER = -9007199254740991;
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var FirebaseStorageError =
      /** @class */
      function () {
        function FirebaseStorageError(code, message) {
          this.code_ = prependCode(code);
          this.message_ = 'Firebase Storage: ' + message;
          this.serverResponse_ = null;
          this.name_ = 'FirebaseError';
        }

        FirebaseStorageError.prototype.codeProp = function () {
          return this.code;
        };

        FirebaseStorageError.prototype.codeEquals = function (code) {
          return prependCode(code) === this.codeProp();
        };

        FirebaseStorageError.prototype.serverResponseProp = function () {
          return this.serverResponse_;
        };

        FirebaseStorageError.prototype.setServerResponseProp = function (serverResponse) {
          this.serverResponse_ = serverResponse;
        };

        Object.defineProperty(FirebaseStorageError.prototype, "name", {
          get: function get() {
            return this.name_;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(FirebaseStorageError.prototype, "code", {
          get: function get() {
            return this.code_;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(FirebaseStorageError.prototype, "message", {
          get: function get() {
            return this.message_;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
          get: function get() {
            return this.serverResponse_;
          },
          enumerable: true,
          configurable: true
        });
        return FirebaseStorageError;
      }();

      var Code = {
        // Shared between all platforms
        UNKNOWN: 'unknown',
        OBJECT_NOT_FOUND: 'object-not-found',
        BUCKET_NOT_FOUND: 'bucket-not-found',
        PROJECT_NOT_FOUND: 'project-not-found',
        QUOTA_EXCEEDED: 'quota-exceeded',
        UNAUTHENTICATED: 'unauthenticated',
        UNAUTHORIZED: 'unauthorized',
        RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
        INVALID_CHECKSUM: 'invalid-checksum',
        CANCELED: 'canceled',
        // JS specific
        INVALID_EVENT_NAME: 'invalid-event-name',
        INVALID_URL: 'invalid-url',
        INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
        NO_DEFAULT_BUCKET: 'no-default-bucket',
        CANNOT_SLICE_BLOB: 'cannot-slice-blob',
        SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
        NO_DOWNLOAD_URL: 'no-download-url',
        INVALID_ARGUMENT: 'invalid-argument',
        INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
        APP_DELETED: 'app-deleted',
        INVALID_ROOT_OPERATION: 'invalid-root-operation',
        INVALID_FORMAT: 'invalid-format',
        INTERNAL_ERROR: 'internal-error'
      };

      function prependCode(code) {
        return 'storage/' + code;
      }

      function unknown() {
        var message = 'An unknown error occurred, please check the error payload for ' + 'server response.';
        return new FirebaseStorageError(Code.UNKNOWN, message);
      }

      function objectNotFound(path) {
        return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
      }

      function quotaExceeded(bucket) {
        return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" + bucket + "' exceeded, please view quota on " + 'https://firebase.google.com/pricing/.');
      }

      function unauthenticated() {
        var message = 'User is not authenticated, please authenticate using Firebase ' + 'Authentication and try again.';
        return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
      }

      function unauthorized(path) {
        return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
      }

      function retryLimitExceeded() {
        return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
      }

      function canceled() {
        return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
      }

      function invalidUrl(url) {
        return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
      }

      function invalidDefaultBucket(bucket) {
        return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
      }

      function cannotSliceBlob() {
        return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
      }

      function serverFileWrongSize() {
        return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
      }

      function noDownloadURL() {
        return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
      }

      function invalidArgument(index, fnName, message) {
        return new FirebaseStorageError(Code.INVALID_ARGUMENT, 'Invalid argument in `' + fnName + '` at index ' + index + ': ' + message);
      }

      function invalidArgumentCount(argMin, argMax, fnName, real) {
        var countPart;
        var plural;

        if (argMin === argMax) {
          countPart = argMin;
          plural = argMin === 1 ? 'argument' : 'arguments';
        } else {
          countPart = 'between ' + argMin + ' and ' + argMax;
          plural = 'arguments';
        }

        return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, 'Invalid argument count in `' + fnName + '`: Expected ' + countPart + ' ' + plural + ', received ' + real + '.');
      }

      function appDeleted() {
        return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
      }
      /**
       * @param name The name of the operation that was invalid.
       */


      function invalidRootOperation(name) {
        return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" + name + "' cannot be performed on a root reference, create a non-root " + "reference using child, such as .child('file.png').");
      }
      /**
       * @param format The format that was not valid.
       * @param message A message describing the format violation.
       */


      function invalidFormat(format, message) {
        return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
      }
      /**
       * @param message A message describing the internal error.
       */


      function internalError(message) {
        throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var StringFormat = {
        RAW: 'raw',
        BASE64: 'base64',
        BASE64URL: 'base64url',
        DATA_URL: 'data_url'
      };

      function formatValidator(stringFormat) {
        switch (stringFormat) {
          case StringFormat.RAW:
          case StringFormat.BASE64:
          case StringFormat.BASE64URL:
          case StringFormat.DATA_URL:
            return;

          default:
            throw 'Expected one of the event types: [' + StringFormat.RAW + ', ' + StringFormat.BASE64 + ', ' + StringFormat.BASE64URL + ', ' + StringFormat.DATA_URL + '].';
        }
      }
      /**
       * @struct
       */


      var StringData =
      /** @class */
      function () {
        function StringData(data, contentType) {
          this.data = data;
          this.contentType = contentType || null;
        }

        return StringData;
      }();

      function dataFromString(format, stringData) {
        switch (format) {
          case StringFormat.RAW:
            return new StringData(utf8Bytes_(stringData));

          case StringFormat.BASE64:
          case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, stringData));

          case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
          // do nothing
        } // assert(false);


        throw unknown();
      }

      function utf8Bytes_(value) {
        var b = [];

        for (var i = 0; i < value.length; i++) {
          var c = value.charCodeAt(i);

          if (c <= 127) {
            b.push(c);
          } else {
            if (c <= 2047) {
              b.push(192 | c >> 6, 128 | c & 63);
            } else {
              if ((c & 64512) === 55296) {
                // The start of a surrogate pair.
                var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;

                if (!valid) {
                  // The second surrogate wasn't there.
                  b.push(239, 191, 189);
                } else {
                  var hi = c;
                  var lo = value.charCodeAt(++i);
                  c = 65536 | (hi & 1023) << 10 | lo & 1023;
                  b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
                }
              } else {
                if ((c & 64512) === 56320) {
                  // Invalid low surrogate.
                  b.push(239, 191, 189);
                } else {
                  b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
                }
              }
            }
          }
        }

        return new Uint8Array(b);
      }

      function percentEncodedBytes_(value) {
        var decoded;

        try {
          decoded = decodeURIComponent(value);
        } catch (e) {
          throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
        }

        return utf8Bytes_(decoded);
      }

      function base64Bytes_(format, value) {
        switch (format) {
          case StringFormat.BASE64:
            {
              var hasMinus = value.indexOf('-') !== -1;
              var hasUnder = value.indexOf('_') !== -1;

              if (hasMinus || hasUnder) {
                var invalidChar = hasMinus ? '-' : '_';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
              }

              break;
            }

          case StringFormat.BASE64URL:
            {
              var hasPlus = value.indexOf('+') !== -1;
              var hasSlash = value.indexOf('/') !== -1;

              if (hasPlus || hasSlash) {
                var invalidChar = hasPlus ? '+' : '/';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
              }

              value = value.replace(/-/g, '+').replace(/_/g, '/');
              break;
            }
          // do nothing
        }

        var bytes;

        try {
          bytes = atob(value);
        } catch (e) {
          throw invalidFormat(format, 'Invalid character found');
        }

        var array = new Uint8Array(bytes.length);

        for (var i = 0; i < bytes.length; i++) {
          array[i] = bytes.charCodeAt(i);
        }

        return array;
      }
      /**
       * @struct
       */


      var DataURLParts =
      /** @class */
      function () {
        function DataURLParts(dataURL) {
          this.base64 = false;
          this.contentType = null;
          var matches = dataURL.match(/^data:([^,]+)?,/);

          if (matches === null) {
            throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
          }

          var middle = matches[1] || null;

          if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64 ? middle.substring(0, middle.length - ';base64'.length) : middle;
          }

          this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
        }

        return DataURLParts;
      }();

      function dataURLBytes_(dataUrl) {
        var parts = new DataURLParts(dataUrl);

        if (parts.base64) {
          return base64Bytes_(StringFormat.BASE64, parts.rest);
        } else {
          return percentEncodedBytes_(parts.rest);
        }
      }

      function dataURLContentType_(dataUrl) {
        var parts = new DataURLParts(dataUrl);
        return parts.contentType;
      }

      function endsWith(s, end) {
        var longEnough = s.length >= end.length;

        if (!longEnough) {
          return false;
        }

        return s.substring(s.length - end.length) === end;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var TaskEvent = {
        /** Triggered whenever the task changes or progress is updated. */
        STATE_CHANGED: 'state_changed'
      };
      var InternalTaskState = {
        RUNNING: 'running',
        PAUSING: 'pausing',
        PAUSED: 'paused',
        SUCCESS: 'success',
        CANCELING: 'canceling',
        CANCELED: 'canceled',
        ERROR: 'error'
      };
      var TaskState = {
        /** The task is currently transferring data. */
        RUNNING: 'running',

        /** The task was paused by the user. */
        PAUSED: 'paused',

        /** The task completed successfully. */
        SUCCESS: 'success',

        /** The task was canceled. */
        CANCELED: 'canceled',

        /** The task failed with an error. */
        ERROR: 'error'
      };

      function taskStateFromInternalTaskState(state) {
        switch (state) {
          case InternalTaskState.RUNNING:
          case InternalTaskState.PAUSING:
          case InternalTaskState.CANCELING:
            return TaskState.RUNNING;

          case InternalTaskState.PAUSED:
            return TaskState.PAUSED;

          case InternalTaskState.SUCCESS:
            return TaskState.SUCCESS;

          case InternalTaskState.CANCELED:
            return TaskState.CANCELED;

          case InternalTaskState.ERROR:
            return TaskState.ERROR;

          default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @return False if the object is undefined or null, true otherwise.
       */


      function isDef(p) {
        return p != null;
      }

      function isJustDef(p) {
        return p !== void 0;
      }

      function isFunction(p) {
        return typeof p === 'function';
      }

      function isObject(p) {
        return typeof p === 'object';
      }

      function isNonNullObject(p) {
        return isObject(p) && p !== null;
      }

      function isNonArrayObject(p) {
        return isObject(p) && !Array.isArray(p);
      }

      function isString(p) {
        return typeof p === 'string' || p instanceof String;
      }

      function isInteger(p) {
        return isNumber(p) && Number.isInteger(p);
      }

      function isNumber(p) {
        return typeof p === 'number' || p instanceof Number;
      }

      function isNativeBlob(p) {
        return isNativeBlobDefined() && p instanceof Blob;
      }

      function isNativeBlobDefined() {
        return typeof Blob !== 'undefined';
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @enum{number}
       */


      var ErrorCode;

      (function (ErrorCode) {
        ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
        ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
        ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
      })(ErrorCode || (ErrorCode = {}));
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
       * doesn't work in React Native on Android.
       */


      var NetworkXhrIo =
      /** @class */
      function () {
        function NetworkXhrIo() {
          var _this = this;

          this.sent_ = false;
          this.xhr_ = new XMLHttpRequest();
          this.errorCode_ = ErrorCode.NO_ERROR;
          this.sendPromise_ = new Promise(function (resolve) {
            _this.xhr_.addEventListener('abort', function () {
              _this.errorCode_ = ErrorCode.ABORT;
              resolve(_this);
            });

            _this.xhr_.addEventListener('error', function () {
              _this.errorCode_ = ErrorCode.NETWORK_ERROR;
              resolve(_this);
            });

            _this.xhr_.addEventListener('load', function () {
              resolve(_this);
            });
          });
        }
        /**
         * @override
         */


        NetworkXhrIo.prototype.send = function (url, method, body, headers) {
          if (this.sent_) {
            throw internalError('cannot .send() more than once');
          }

          this.sent_ = true;
          this.xhr_.open(method, url, true);

          if (isDef(headers)) {
            for (var key in headers) {
              if (headers.hasOwnProperty(key)) {
                this.xhr_.setRequestHeader(key, headers[key].toString());
              }
            }
          }

          if (isDef(body)) {
            this.xhr_.send(body);
          } else {
            this.xhr_.send();
          }

          return this.sendPromise_;
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.getErrorCode = function () {
          if (!this.sent_) {
            throw internalError('cannot .getErrorCode() before sending');
          }

          return this.errorCode_;
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.getStatus = function () {
          if (!this.sent_) {
            throw internalError('cannot .getStatus() before sending');
          }

          try {
            return this.xhr_.status;
          } catch (e) {
            return -1;
          }
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.getResponseText = function () {
          if (!this.sent_) {
            throw internalError('cannot .getResponseText() before sending');
          }

          return this.xhr_.responseText;
        };
        /**
         * Aborts the request.
         * @override
         */


        NetworkXhrIo.prototype.abort = function () {
          this.xhr_.abort();
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.getResponseHeader = function (header) {
          return this.xhr_.getResponseHeader(header);
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
          if (isDef(this.xhr_.upload)) {
            this.xhr_.upload.addEventListener('progress', listener);
          }
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
          if (isDef(this.xhr_.upload)) {
            this.xhr_.upload.removeEventListener('progress', listener);
          }
        };

        return NetworkXhrIo;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Factory-like class for creating XhrIo instances.
       */


      var XhrIoPool =
      /** @class */
      function () {
        function XhrIoPool() {}

        XhrIoPool.prototype.createXhrIo = function () {
          return new NetworkXhrIo();
        };

        return XhrIoPool;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function getBlobBuilder() {
        if (typeof BlobBuilder !== 'undefined') {
          return BlobBuilder;
        } else if (typeof WebKitBlobBuilder !== 'undefined') {
          return WebKitBlobBuilder;
        } else {
          return undefined;
        }
      }
      /**
       * Concatenates one or more values together and converts them to a Blob.
       *
       * @param args The values that will make up the resulting blob.
       * @return The blob.
       */


      function getBlob() {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var BlobBuilder = getBlobBuilder();

        if (BlobBuilder !== undefined) {
          var bb = new BlobBuilder();

          for (var i = 0; i < args.length; i++) {
            bb.append(args[i]);
          }

          return bb.getBlob();
        } else {
          if (isNativeBlobDefined()) {
            return new Blob(args);
          } else {
            throw Error("This browser doesn't seem to support creating Blobs");
          }
        }
      }
      /**
       * Slices the blob. The returned blob contains data from the start byte
       * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
       *
       * @param blob The blob to be sliced.
       * @param start Index of the starting byte.
       * @param end Index of the ending byte.
       * @return The blob slice or null if not supported.
       */


      function sliceBlob(blob, start, end) {
        if (blob.webkitSlice) {
          return blob.webkitSlice(start, end);
        } else if (blob.mozSlice) {
          return blob.mozSlice(start, end);
        } else if (blob.slice) {
          return blob.slice(start, end);
        }

        return null;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @param opt_elideCopy If true, doesn't copy mutable input data
       *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
       *     modified after this blob's construction.
       */


      var FbsBlob =
      /** @class */
      function () {
        function FbsBlob(data, elideCopy) {
          var size = 0;
          var blobType = '';

          if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
          } else if (data instanceof ArrayBuffer) {
            if (elideCopy) {
              this.data_ = new Uint8Array(data);
            } else {
              this.data_ = new Uint8Array(data.byteLength);
              this.data_.set(new Uint8Array(data));
            }

            size = this.data_.length;
          } else if (data instanceof Uint8Array) {
            if (elideCopy) {
              this.data_ = data;
            } else {
              this.data_ = new Uint8Array(data.length);
              this.data_.set(data);
            }

            size = data.length;
          }

          this.size_ = size;
          this.type_ = blobType;
        }

        FbsBlob.prototype.size = function () {
          return this.size_;
        };

        FbsBlob.prototype.type = function () {
          return this.type_;
        };

        FbsBlob.prototype.slice = function (startByte, endByte) {
          if (isNativeBlob(this.data_)) {
            var realBlob = this.data_;
            var sliced = sliceBlob(realBlob, startByte, endByte);

            if (sliced === null) {
              return null;
            }

            return new FbsBlob(sliced);
          } else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
          }
        };

        FbsBlob.getBlob = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (isNativeBlobDefined()) {
            var blobby = args.map(function (val) {
              if (val instanceof FbsBlob) {
                return val.data_;
              } else {
                return val;
              }
            });
            return new FbsBlob(getBlob.apply(null, blobby));
          } else {
            var uint8Arrays = args.map(function (val) {
              if (isString(val)) {
                return dataFromString(StringFormat.RAW, val).data;
              } else {
                // Blobs don't exist, so this has to be a Uint8Array.
                return val.data_;
              }
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function (array) {
              finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function (array) {
              for (var i = 0; i < array.length; i++) {
                merged_1[index_1++] = array[i];
              }
            });
            return new FbsBlob(merged_1, true);
          }
        };

        FbsBlob.prototype.uploadData = function () {
          return this.data_;
        };

        return FbsBlob;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @struct
       */


      var Location =
      /** @class */
      function () {
        function Location(bucket, path) {
          this.bucket = bucket;
          this.path_ = path;
        }

        Object.defineProperty(Location.prototype, "path", {
          get: function get() {
            return this.path_;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Location.prototype, "isRoot", {
          get: function get() {
            return this.path.length === 0;
          },
          enumerable: true,
          configurable: true
        });

        Location.prototype.fullServerUrl = function () {
          var encode = encodeURIComponent;
          return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
        };

        Location.prototype.bucketOnlyServerUrl = function () {
          var encode = encodeURIComponent;
          return '/b/' + encode(this.bucket) + '/o';
        };

        Location.makeFromBucketSpec = function (bucketString) {
          var bucketLocation;

          try {
            bucketLocation = Location.makeFromUrl(bucketString);
          } catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
          }

          if (bucketLocation.path === '') {
            return bucketLocation;
          } else {
            throw invalidDefaultBucket(bucketString);
          }
        };

        Location.makeFromUrl = function (url) {
          var location = null;
          var bucketDomain = '([A-Za-z0-9.\\-_]+)';

          function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
              loc.path_ = loc.path_.slice(0, -1);
            }
          }

          var gsPath = '(/(.*))?$';
          var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
          var gsIndices = {
            bucket: 1,
            path: 3
          };

          function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
          }

          var version = 'v[A-Za-z0-9_]+';
          var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, '\\.');
          var firebaseStoragePath = '(/([^?#]*).*)?$';
          var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version + "/b/" + bucketDomain + "/o" + firebaseStoragePath, 'i');
          var firebaseStorageIndices = {
            bucket: 1,
            path: 3
          };
          var cloudStorageHost = '(?:storage.googleapis.com|storage.cloud.google.com)';
          var cloudStoragePath = '([^?#]*)';
          var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, 'i');
          var cloudStorageIndices = {
            bucket: 1,
            path: 2
          };
          var groups = [{
            regex: gsRegex,
            indices: gsIndices,
            postModify: gsModify
          }, {
            regex: firebaseStorageRegExp,
            indices: firebaseStorageIndices,
            postModify: httpModify
          }, {
            regex: cloudStorageRegExp,
            indices: cloudStorageIndices,
            postModify: httpModify
          }];

          for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var captures = group.regex.exec(url);

            if (captures) {
              var bucketValue = captures[group.indices.bucket];
              var pathValue = captures[group.indices.path];

              if (!pathValue) {
                pathValue = '';
              }

              location = new Location(bucketValue, pathValue);
              group.postModify(location);
              break;
            }
          }

          if (location == null) {
            throw invalidUrl(url);
          }

          return location;
        };

        return Location;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns the Object resulting from parsing the given JSON, or null if the
       * given string does not represent a JSON object.
       */


      function jsonObjectOrNull(s) {
        var obj;

        try {
          obj = JSON.parse(s);
        } catch (e) {
          return null;
        }

        if (isNonArrayObject(obj)) {
          return obj;
        } else {
          return null;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @fileoverview Contains helper methods for manipulating paths.
       */

      /**
       * @return Null if the path is already at the root.
       */


      function parent(path) {
        if (path.length === 0) {
          return null;
        }

        var index = path.lastIndexOf('/');

        if (index === -1) {
          return '';
        }

        var newPath = path.slice(0, index);
        return newPath;
      }

      function child(path, childPath) {
        var canonicalChildPath = childPath.split('/').filter(function (component) {
          return component.length > 0;
        }).join('/');

        if (path.length === 0) {
          return canonicalChildPath;
        } else {
          return path + '/' + canonicalChildPath;
        }
      }
      /**
       * Returns the last component of a path.
       * '/foo/bar' -> 'bar'
       * '/foo/bar/baz/' -> 'baz/'
       * '/a' -> 'a'
       */


      function lastComponent(path) {
        var index = path.lastIndexOf('/', path.length - 2);

        if (index === -1) {
          return path;
        } else {
          return path.slice(index + 1);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function makeUrl(urlPart) {
        return "https://" + DEFAULT_HOST + "/v0" + urlPart;
      }

      function makeQueryString(params) {
        var encode = encodeURIComponent;
        var queryPart = '?';

        for (var key in params) {
          if (params.hasOwnProperty(key)) {
            // @ts-ignore TODO: remove once typescript is upgraded to 3.5.x
            var nextPart = encode(key) + '=' + encode(params[key]);
            queryPart = queryPart + nextPart + '&';
          }
        } // Chop off the extra '&' or '?' on the end


        queryPart = queryPart.slice(0, -1);
        return queryPart;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function noXform_(metadata, value) {
        return value;
      }
      /**
       * @struct
       */


      var Mapping =
      /** @class */
      function () {
        function Mapping(server, local, writable, xform) {
          this.server = server;
          this.local = local || server;
          this.writable = !!writable;
          this.xform = xform || noXform_;
        }

        return Mapping;
      }();

      var mappings_ = null;

      function xformPath(fullPath) {
        if (!isString(fullPath) || fullPath.length < 2) {
          return fullPath;
        } else {
          return lastComponent(fullPath);
        }
      }

      function getMappings() {
        if (mappings_) {
          return mappings_;
        }

        var mappings = [];
        mappings.push(new Mapping('bucket'));
        mappings.push(new Mapping('generation'));
        mappings.push(new Mapping('metageneration'));
        mappings.push(new Mapping('name', 'fullPath', true));

        function mappingsXformPath(_metadata, fullPath) {
          return xformPath(fullPath);
        }

        var nameMapping = new Mapping('name');
        nameMapping.xform = mappingsXformPath;
        mappings.push(nameMapping);
        /**
         * Coerces the second param to a number, if it is defined.
         */

        function xformSize(_metadata, size) {
          if (isDef(size)) {
            return Number(size);
          } else {
            return size;
          }
        }

        var sizeMapping = new Mapping('size');
        sizeMapping.xform = xformSize;
        mappings.push(sizeMapping);
        mappings.push(new Mapping('timeCreated'));
        mappings.push(new Mapping('updated'));
        mappings.push(new Mapping('md5Hash', null, true));
        mappings.push(new Mapping('cacheControl', null, true));
        mappings.push(new Mapping('contentDisposition', null, true));
        mappings.push(new Mapping('contentEncoding', null, true));
        mappings.push(new Mapping('contentLanguage', null, true));
        mappings.push(new Mapping('contentType', null, true));
        mappings.push(new Mapping('metadata', 'customMetadata', true));
        mappings_ = mappings;
        return mappings_;
      }

      function addRef(metadata, authWrapper) {
        function generateRef() {
          var bucket = metadata['bucket'];
          var path = metadata['fullPath'];
          var loc = new Location(bucket, path);
          return authWrapper.makeStorageReference(loc);
        }

        Object.defineProperty(metadata, 'ref', {
          get: generateRef
        });
      }

      function fromResource(authWrapper, resource, mappings) {
        var metadata = {};
        metadata['type'] = 'file';
        var len = mappings.length;

        for (var i = 0; i < len; i++) {
          var mapping = mappings[i];
          metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
        }

        addRef(metadata, authWrapper);
        return metadata;
      }

      function fromResourceString(authWrapper, resourceString, mappings) {
        var obj = jsonObjectOrNull(resourceString);

        if (obj === null) {
          return null;
        }

        var resource = obj;
        return fromResource(authWrapper, resource, mappings);
      }

      function downloadUrlFromResourceString(metadata, resourceString) {
        var obj = jsonObjectOrNull(resourceString);

        if (obj === null) {
          return null;
        }

        if (!isString(obj['downloadTokens'])) {
          // This can happen if objects are uploaded through GCS and retrieved
          // through list, so we don't want to throw an Error.
          return null;
        }

        var tokens = obj['downloadTokens'];

        if (tokens.length === 0) {
          return null;
        }

        var encode = encodeURIComponent;
        var tokensList = tokens.split(',');
        var urls = tokensList.map(function (token) {
          var bucket = metadata['bucket'];
          var path = metadata['fullPath'];
          var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
          var base = makeUrl(urlPart);
          var queryString = makeQueryString({
            alt: 'media',
            token: token
          });
          return base + queryString;
        });
        return urls[0];
      }

      function toResourceString(metadata, mappings) {
        var resource = {};
        var len = mappings.length;

        for (var i = 0; i < len; i++) {
          var mapping = mappings[i];

          if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
          }
        }

        return JSON.stringify(resource);
      }

      function metadataValidator(p) {
        if (!isObject(p) || !p) {
          throw 'Expected Metadata object.';
        }

        for (var key in p) {
          if (p.hasOwnProperty(key)) {
            var val = p[key];

            if (key === 'customMetadata') {
              if (!isObject(val)) {
                throw 'Expected object for \'customMetadata\' mapping.';
              }
            } else {
              if (isNonNullObject(val)) {
                throw "Mapping for '" + key + "' cannot be an object.";
              }
            }
          }
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var MAX_RESULTS_KEY = 'maxResults';
      var MAX_MAX_RESULTS = 1000;
      var PAGE_TOKEN_KEY = 'pageToken';
      var PREFIXES_KEY = 'prefixes';
      var ITEMS_KEY = 'items';

      function fromBackendResponse(authWrapper, bucket, resource) {
        var listResult = {
          prefixes: [],
          items: [],
          nextPageToken: resource['nextPageToken']
        };

        if (resource[PREFIXES_KEY]) {
          for (var _i = 0, _a = resource[PREFIXES_KEY]; _i < _a.length; _i++) {
            var path = _a[_i];
            var pathWithoutTrailingSlash = path.replace(/\/$/, '');
            var reference = authWrapper.makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
            listResult.prefixes.push(reference);
          }
        }

        if (resource[ITEMS_KEY]) {
          for (var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++) {
            var item = _c[_b];
            var reference = authWrapper.makeStorageReference(new Location(bucket, item['name']));
            listResult.items.push(reference);
          }
        }

        return listResult;
      }

      function fromResponseString(authWrapper, bucket, resourceString) {
        var obj = jsonObjectOrNull(resourceString);

        if (obj === null) {
          return null;
        }

        var resource = obj;
        return fromBackendResponse(authWrapper, bucket, resource);
      }

      function listOptionsValidator(p) {
        if (!isObject(p) || !p) {
          throw 'Expected ListOptions object.';
        }

        for (var key in p) {
          if (key === MAX_RESULTS_KEY) {
            if (!isInteger(p[MAX_RESULTS_KEY]) || p[MAX_RESULTS_KEY] <= 0) {
              throw 'Expected maxResults to be a positive number.';
            }

            if (p[MAX_RESULTS_KEY] > 1000) {
              throw "Expected maxResults to be less than or equal to " + MAX_MAX_RESULTS + ".";
            }
          } else if (key === PAGE_TOKEN_KEY) {
            if (p[PAGE_TOKEN_KEY] && !isString(p[PAGE_TOKEN_KEY])) {
              throw 'Expected pageToken to be string.';
            }
          } else {
            throw 'Unknown option: ' + key;
          }
        }
      }

      var RequestInfo =
      /** @class */
      function () {
        function RequestInfo(url, method,
        /**
         * Returns the value with which to resolve the request's promise. Only called
         * if the request is successful. Throw from this function to reject the
         * returned Request's promise with the thrown error.
         * Note: The XhrIo passed to this function may be reused after this callback
         * returns. Do not keep a reference to it in any way.
         */
        handler, timeout) {
          this.url = url;
          this.method = method;
          this.handler = handler;
          this.timeout = timeout;
          this.urlParams = {};
          this.headers = {};
          this.body = null;
          this.errorHandler = null;
          /**
           * Called with the current number of bytes uploaded and total size (-1 if not
           * computable) of the request body (i.e. used to report upload progress).
           */

          this.progressCallback = null;
          this.successCodes = [200];
          this.additionalRetryCodes = [];
        }

        return RequestInfo;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Throws the UNKNOWN FirebaseStorageError if cndn is false.
       */


      function handlerCheck(cndn) {
        if (!cndn) {
          throw unknown();
        }
      }

      function metadataHandler(authWrapper, mappings) {
        function handler(xhr, text) {
          var metadata = fromResourceString(authWrapper, text, mappings);
          handlerCheck(metadata !== null);
          return metadata;
        }

        return handler;
      }

      function listHandler(authWrapper, bucket) {
        function handler(xhr, text) {
          var listResult = fromResponseString(authWrapper, bucket, text);
          handlerCheck(listResult !== null);
          return listResult;
        }

        return handler;
      }

      function downloadUrlHandler(authWrapper, mappings) {
        function handler(xhr, text) {
          var metadata = fromResourceString(authWrapper, text, mappings);
          handlerCheck(metadata !== null);
          return downloadUrlFromResourceString(metadata, text);
        }

        return handler;
      }

      function sharedErrorHandler(location) {
        function errorHandler(xhr, err) {
          var newErr;

          if (xhr.getStatus() === 401) {
            newErr = unauthenticated();
          } else {
            if (xhr.getStatus() === 402) {
              newErr = quotaExceeded(location.bucket);
            } else {
              if (xhr.getStatus() === 403) {
                newErr = unauthorized(location.path);
              } else {
                newErr = err;
              }
            }
          }

          newErr.setServerResponseProp(err.serverResponseProp());
          return newErr;
        }

        return errorHandler;
      }

      function objectErrorHandler(location) {
        var shared = sharedErrorHandler(location);

        function errorHandler(xhr, err) {
          var newErr = shared(xhr, err);

          if (xhr.getStatus() === 404) {
            newErr = objectNotFound(location.path);
          }

          newErr.setServerResponseProp(err.serverResponseProp());
          return newErr;
        }

        return errorHandler;
      }

      function getMetadata(authWrapper, location, mappings) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'GET';
        var timeout = authWrapper.maxOperationRetryTime();
        var requestInfo = new RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
      }

      function list(authWrapper, location, delimiter, pageToken, maxResults) {
        var urlParams = {};

        if (location.isRoot) {
          urlParams['prefix'] = '';
        } else {
          urlParams['prefix'] = location.path + '/';
        }

        if (delimiter && delimiter.length > 0) {
          urlParams['delimiter'] = delimiter;
        }

        if (pageToken) {
          urlParams['pageToken'] = pageToken;
        }

        if (maxResults) {
          urlParams['maxResults'] = maxResults;
        }

        var urlPart = location.bucketOnlyServerUrl();
        var url = makeUrl(urlPart);
        var method = 'GET';
        var timeout = authWrapper.maxOperationRetryTime();
        var requestInfo = new RequestInfo(url, method, listHandler(authWrapper, location.bucket), timeout);
        requestInfo.urlParams = urlParams;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }

      function getDownloadUrl(authWrapper, location, mappings) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'GET';
        var timeout = authWrapper.maxOperationRetryTime();
        var requestInfo = new RequestInfo(url, method, downloadUrlHandler(authWrapper, mappings), timeout);
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
      }

      function updateMetadata(authWrapper, location, metadata, mappings) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'PATCH';
        var body = toResourceString(metadata, mappings);
        var headers = {
          'Content-Type': 'application/json; charset=utf-8'
        };
        var timeout = authWrapper.maxOperationRetryTime();
        var requestInfo = new RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
        requestInfo.headers = headers;
        requestInfo.body = body;
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
      }

      function deleteObject(authWrapper, location) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'DELETE';
        var timeout = authWrapper.maxOperationRetryTime();

        function handler(_xhr, _text) {}

        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.successCodes = [200, 204];
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
      }

      function determineContentType_(metadata, blob) {
        return metadata && metadata['contentType'] || blob && blob.type() || 'application/octet-stream';
      }

      function metadataForUpload_(location, blob, metadata) {
        var metadataClone = Object.assign({}, metadata);
        metadataClone['fullPath'] = location.path;
        metadataClone['size'] = blob.size();

        if (!metadataClone['contentType']) {
          metadataClone['contentType'] = determineContentType_(null, blob);
        }

        return metadataClone;
      }

      function multipartUpload(authWrapper, location, mappings, blob, metadata) {
        var urlPart = location.bucketOnlyServerUrl();
        var headers = {
          'X-Goog-Upload-Protocol': 'multipart'
        };

        function genBoundary() {
          var str = '';

          for (var i = 0; i < 2; i++) {
            str = str + Math.random().toString().slice(2);
          }

          return str;
        }

        var boundary = genBoundary();
        headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
        var metadata_ = metadataForUpload_(location, blob, metadata);
        var metadataString = toResourceString(metadata_, mappings);
        var preBlobPart = '--' + boundary + '\r\n' + 'Content-Type: application/json; charset=utf-8\r\n\r\n' + metadataString + '\r\n--' + boundary + '\r\n' + 'Content-Type: ' + metadata_['contentType'] + '\r\n\r\n';
        var postBlobPart = '\r\n--' + boundary + '--';
        var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);

        if (body === null) {
          throw cannotSliceBlob();
        }

        var urlParams = {
          name: metadata_['fullPath']
        };
        var url = makeUrl(urlPart);
        var method = 'POST';
        var timeout = authWrapper.maxUploadRetryTime();
        var requestInfo = new RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
        requestInfo.urlParams = urlParams;
        requestInfo.headers = headers;
        requestInfo.body = body.uploadData();
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }
      /**
       * @param current The number of bytes that have been uploaded so far.
       * @param total The total number of bytes in the upload.
       * @param opt_finalized True if the server has finished the upload.
       * @param opt_metadata The upload metadata, should
       *     only be passed if opt_finalized is true.
       * @struct
       */


      var ResumableUploadStatus =
      /** @class */
      function () {
        function ResumableUploadStatus(current, total, finalized, metadata) {
          this.current = current;
          this.total = total;
          this.finalized = !!finalized;
          this.metadata = metadata || null;
        }

        return ResumableUploadStatus;
      }();

      function checkResumeHeader_(xhr, allowed) {
        var status = null;

        try {
          status = xhr.getResponseHeader('X-Goog-Upload-Status');
        } catch (e) {
          handlerCheck(false);
        }

        var allowedStatus = allowed || ['active'];
        handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
        return status;
      }

      function createResumableUpload(authWrapper, location, mappings, blob, metadata) {
        var urlPart = location.bucketOnlyServerUrl();
        var metadataForUpload = metadataForUpload_(location, blob, metadata);
        var urlParams = {
          name: metadataForUpload['fullPath']
        };
        var url = makeUrl(urlPart);
        var method = 'POST';
        var headers = {
          'X-Goog-Upload-Protocol': 'resumable',
          'X-Goog-Upload-Command': 'start',
          'X-Goog-Upload-Header-Content-Length': blob.size(),
          'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
          'Content-Type': 'application/json; charset=utf-8'
        };
        var body = toResourceString(metadataForUpload, mappings);
        var timeout = authWrapper.maxUploadRetryTime();

        function handler(xhr) {
          checkResumeHeader_(xhr);
          var url;

          try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
          } catch (e) {
            handlerCheck(false);
          }

          handlerCheck(isString(url));
          return url;
        }

        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.urlParams = urlParams;
        requestInfo.headers = headers;
        requestInfo.body = body;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }
      /**
       * @param url From a call to fbs.requests.createResumableUpload.
       */


      function getResumableUploadStatus(authWrapper, location, url, blob) {
        var headers = {
          'X-Goog-Upload-Command': 'query'
        };

        function handler(xhr) {
          var status = checkResumeHeader_(xhr, ['active', 'final']);
          var sizeString = null;

          try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
          } catch (e) {
            handlerCheck(false);
          }

          if (!sizeString) {
            // null or empty string
            handlerCheck(false);
          }

          var size = Number(sizeString);
          handlerCheck(!isNaN(size));
          return new ResumableUploadStatus(size, blob.size(), status === 'final');
        }

        var method = 'POST';
        var timeout = authWrapper.maxUploadRetryTime();
        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.headers = headers;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }
      /**
       * Any uploads via the resumable upload API must transfer a number of bytes
       * that is a multiple of this number.
       */


      var resumableUploadChunkSize = 256 * 1024;
      /**
       * @param url From a call to fbs.requests.createResumableUpload.
       * @param chunkSize Number of bytes to upload.
       * @param status The previous status.
       *     If not passed or null, we start from the beginning.
       * @throws fbs.Error If the upload is already complete, the passed in status
       *     has a final size inconsistent with the blob, or the blob cannot be sliced
       *     for upload.
       */

      function continueResumableUpload(location, authWrapper, url, blob, chunkSize, mappings, status, progressCallback) {
        // TODO(andysoto): standardize on internal asserts
        // assert(!(opt_status && opt_status.finalized));
        var status_ = new ResumableUploadStatus(0, 0);

        if (status) {
          status_.current = status.current;
          status_.total = status.total;
        } else {
          status_.current = 0;
          status_.total = blob.size();
        }

        if (blob.size() !== status_.total) {
          throw serverFileWrongSize();
        }

        var bytesLeft = status_.total - status_.current;
        var bytesToUpload = bytesLeft;

        if (chunkSize > 0) {
          bytesToUpload = Math.min(bytesToUpload, chunkSize);
        }

        var startByte = status_.current;
        var endByte = startByte + bytesToUpload;
        var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
        var headers = {
          'X-Goog-Upload-Command': uploadCommand,
          'X-Goog-Upload-Offset': status_.current
        };
        var body = blob.slice(startByte, endByte);

        if (body === null) {
          throw cannotSliceBlob();
        }

        function handler(xhr, text) {
          // TODO(andysoto): Verify the MD5 of each uploaded range:
          // the 'x-range-md5' header comes back with status code 308 responses.
          // We'll only be able to bail out though, because you can't re-upload a
          // range that you previously uploaded.
          var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
          var newCurrent = status_.current + bytesToUpload;
          var size = blob.size();
          var metadata;

          if (uploadStatus === 'final') {
            metadata = metadataHandler(authWrapper, mappings)(xhr, text);
          } else {
            metadata = null;
          }

          return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
        }

        var method = 'POST';
        var timeout = authWrapper.maxUploadRetryTime();
        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.headers = headers;
        requestInfo.body = body.uploadData();
        requestInfo.progressCallback = progressCallback || null;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @struct
       */


      var Observer =
      /** @class */
      function () {
        function Observer(nextOrObserver, error, complete) {
          var asFunctions = isFunction(nextOrObserver) || isDef(error) || isDef(complete);

          if (asFunctions) {
            this.next = nextOrObserver;
            this.error = error || null;
            this.complete = complete || null;
          } else {
            var observer = nextOrObserver;
            this.next = observer.next || null;
            this.error = observer.error || null;
            this.complete = observer.complete || null;
          }
        }

        return Observer;
      }();

      var UploadTaskSnapshot =
      /** @class */
      function () {
        function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
          this.bytesTransferred = bytesTransferred;
          this.totalBytes = totalBytes;
          this.state = state;
          this.metadata = metadata;
          this.task = task;
          this.ref = ref;
        }

        return UploadTaskSnapshot;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @param name Name of the function.
       * @param specs Argument specs.
       * @param passed The actual arguments passed to the function.
       * @throws {fbs.Error} If the arguments are invalid.
       */


      function validate(name, specs, passed) {
        var minArgs = specs.length;
        var maxArgs = specs.length;

        for (var i = 0; i < specs.length; i++) {
          if (specs[i].optional) {
            minArgs = i;
            break;
          }
        }

        var validLength = minArgs <= passed.length && passed.length <= maxArgs;

        if (!validLength) {
          throw invalidArgumentCount(minArgs, maxArgs, name, passed.length);
        }

        for (var i = 0; i < passed.length; i++) {
          try {
            specs[i].validator(passed[i]);
          } catch (e) {
            if (e instanceof Error) {
              throw invalidArgument(i, name, e.message);
            } else {
              throw invalidArgument(i, name, e);
            }
          }
        }
      }
      /**
       * @struct
       */


      var ArgSpec =
      /** @class */
      function () {
        function ArgSpec(validator, optional) {
          var self = this;

          this.validator = function (p) {
            if (self.optional && !isJustDef(p)) {
              return;
            }

            validator(p);
          };

          this.optional = !!optional;
        }

        return ArgSpec;
      }();

      function and_(v1, v2) {
        return function (p) {
          v1(p);
          v2(p);
        };
      }

      function stringSpec(validator, optional) {
        function stringValidator(p) {
          if (!isString(p)) {
            throw 'Expected string.';
          }
        }

        var chainedValidator;

        if (validator) {
          chainedValidator = and_(stringValidator, validator);
        } else {
          chainedValidator = stringValidator;
        }

        return new ArgSpec(chainedValidator, optional);
      }

      function uploadDataSpec() {
        function validator(p) {
          var valid = p instanceof Uint8Array || p instanceof ArrayBuffer || isNativeBlobDefined() && p instanceof Blob;

          if (!valid) {
            throw 'Expected Blob or File.';
          }
        }

        return new ArgSpec(validator);
      }

      function metadataSpec(optional) {
        return new ArgSpec(metadataValidator, optional);
      }

      function listOptionSpec(optional) {
        return new ArgSpec(listOptionsValidator, optional);
      }

      function nonNegativeNumberSpec() {
        function validator(p) {
          var valid = isNumber(p) && p >= 0;

          if (!valid) {
            throw 'Expected a number 0 or greater.';
          }
        }

        return new ArgSpec(validator);
      }

      function looseObjectSpec(validator, optional) {
        function isLooseObjectValidator(p) {
          var isLooseObject = p === null || isDef(p) && p instanceof Object;

          if (!isLooseObject) {
            throw 'Expected an Object.';
          }

          if (validator !== undefined && validator !== null) {
            validator(p);
          }
        }

        return new ArgSpec(isLooseObjectValidator, optional);
      }

      function nullFunctionSpec(optional) {
        function validator(p) {
          var valid = p === null || isFunction(p);

          if (!valid) {
            throw 'Expected a Function.';
          }
        }

        return new ArgSpec(validator, optional);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns a function that invokes f with its arguments asynchronously as a
       * microtask, i.e. as soon as possible after the current script returns back
       * into browser code.
       */


      function async(f) {
        return function () {
          var argsToForward = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            argsToForward[_i] = arguments[_i];
          } // eslint-disable-next-line @typescript-eslint/no-floating-promises


          Promise.resolve().then(function () {
            return f.apply(void 0, argsToForward);
          });
        };
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Represents a blob being uploaded. Can be used to pause/resume/cancel the
       * upload and manage callbacks for various events.
       */


      var UploadTask =
      /** @class */
      function () {
        /**
         * @param ref The firebaseStorage.Reference object this task came
         *     from, untyped to avoid cyclic dependencies.
         * @param blob The blob to upload.
         */
        function UploadTask(ref, authWrapper, location, mappings, blob, metadata) {
          var _this = this;

          if (metadata === void 0) {
            metadata = null;
          }

          this.transferred_ = 0;
          this.needToFetchStatus_ = false;
          this.needToFetchMetadata_ = false;
          this.observers_ = [];
          this.error_ = null;
          this.uploadUrl_ = null;
          this.request_ = null;
          this.chunkMultiplier_ = 1;
          this.resolve_ = null;
          this.reject_ = null;
          this.ref_ = ref;
          this.authWrapper_ = authWrapper;
          this.location_ = location;
          this.blob_ = blob;
          this.metadata_ = metadata;
          this.mappings_ = mappings;
          this.resumable_ = this.shouldDoResumable_(this.blob_);
          this.state_ = InternalTaskState.RUNNING;

          this.errorHandler_ = function (error) {
            _this.request_ = null;
            _this.chunkMultiplier_ = 1;

            if (error.codeEquals(Code.CANCELED)) {
              _this.needToFetchStatus_ = true;

              _this.completeTransitions_();
            } else {
              _this.error_ = error;

              _this.transition_(InternalTaskState.ERROR);
            }
          };

          this.metadataErrorHandler_ = function (error) {
            _this.request_ = null;

            if (error.codeEquals(Code.CANCELED)) {
              _this.completeTransitions_();
            } else {
              _this.error_ = error;

              _this.transition_(InternalTaskState.ERROR);
            }
          };

          this.promise_ = new Promise(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;

            _this.start_();
          }); // Prevent uncaught rejections on the internal promise from bubbling out
          // to the top level with a dummy handler.

          this.promise_.then(null, function () {});
        }

        UploadTask.prototype.makeProgressCallback_ = function () {
          var _this = this;

          var sizeBefore = this.transferred_;
          return function (loaded) {
            return _this.updateProgress_(sizeBefore + loaded);
          };
        };

        UploadTask.prototype.shouldDoResumable_ = function (blob) {
          return blob.size() > 256 * 1024;
        };

        UploadTask.prototype.start_ = function () {
          if (this.state_ !== InternalTaskState.RUNNING) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
          }

          if (this.request_ !== null) {
            return;
          }

          if (this.resumable_) {
            if (this.uploadUrl_ === null) {
              this.createResumable_();
            } else {
              if (this.needToFetchStatus_) {
                this.fetchStatus_();
              } else {
                if (this.needToFetchMetadata_) {
                  // Happens if we miss the metadata on upload completion.
                  this.fetchMetadata_();
                } else {
                  this.continueUpload_();
                }
              }
            }
          } else {
            this.oneShotUpload_();
          }
        };

        UploadTask.prototype.resolveToken_ = function (callback) {
          var _this = this; // eslint-disable-next-line @typescript-eslint/no-floating-promises


          this.authWrapper_.getAuthToken().then(function (authToken) {
            switch (_this.state_) {
              case InternalTaskState.RUNNING:
                callback(authToken);
                break;

              case InternalTaskState.CANCELING:
                _this.transition_(InternalTaskState.CANCELED);

                break;

              case InternalTaskState.PAUSING:
                _this.transition_(InternalTaskState.PAUSED);

                break;
            }
          });
        }; // TODO(andysoto): assert false


        UploadTask.prototype.createResumable_ = function () {
          var _this = this;

          this.resolveToken_(function (authToken) {
            var requestInfo = createResumableUpload(_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);

            var createRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);

            _this.request_ = createRequest;
            createRequest.getPromise().then(function (url) {
              _this.request_ = null;
              _this.uploadUrl_ = url;
              _this.needToFetchStatus_ = false;

              _this.completeTransitions_();
            }, _this.errorHandler_);
          });
        };

        UploadTask.prototype.fetchStatus_ = function () {
          var _this = this; // TODO(andysoto): assert(this.uploadUrl_ !== null);


          var url = this.uploadUrl_;
          this.resolveToken_(function (authToken) {
            var requestInfo = getResumableUploadStatus(_this.authWrapper_, _this.location_, url, _this.blob_);

            var statusRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);

            _this.request_ = statusRequest;
            statusRequest.getPromise().then(function (status) {
              status = status;
              _this.request_ = null;

              _this.updateProgress_(status.current);

              _this.needToFetchStatus_ = false;

              if (status.finalized) {
                _this.needToFetchMetadata_ = true;
              }

              _this.completeTransitions_();
            }, _this.errorHandler_);
          });
        };

        UploadTask.prototype.continueUpload_ = function () {
          var _this = this;

          var chunkSize = resumableUploadChunkSize * this.chunkMultiplier_;
          var status = new ResumableUploadStatus(this.transferred_, this.blob_.size()); // TODO(andysoto): assert(this.uploadUrl_ !== null);

          var url = this.uploadUrl_;
          this.resolveToken_(function (authToken) {
            var requestInfo;

            try {
              requestInfo = continueResumableUpload(_this.location_, _this.authWrapper_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
            } catch (e) {
              _this.error_ = e;

              _this.transition_(InternalTaskState.ERROR);

              return;
            }

            var uploadRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);

            _this.request_ = uploadRequest;
            uploadRequest.getPromise().then(function (newStatus) {
              _this.increaseMultiplier_();

              _this.request_ = null;

              _this.updateProgress_(newStatus.current);

              if (newStatus.finalized) {
                _this.metadata_ = newStatus.metadata;

                _this.transition_(InternalTaskState.SUCCESS);
              } else {
                _this.completeTransitions_();
              }
            }, _this.errorHandler_);
          });
        };

        UploadTask.prototype.increaseMultiplier_ = function () {
          var currentSize = resumableUploadChunkSize * this.chunkMultiplier_; // Max chunk size is 32M.

          if (currentSize < 32 * 1024 * 1024) {
            this.chunkMultiplier_ *= 2;
          }
        };

        UploadTask.prototype.fetchMetadata_ = function () {
          var _this = this;

          this.resolveToken_(function (authToken) {
            var requestInfo = getMetadata(_this.authWrapper_, _this.location_, _this.mappings_);

            var metadataRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);

            _this.request_ = metadataRequest;
            metadataRequest.getPromise().then(function (metadata) {
              _this.request_ = null;
              _this.metadata_ = metadata;

              _this.transition_(InternalTaskState.SUCCESS);
            }, _this.metadataErrorHandler_);
          });
        };

        UploadTask.prototype.oneShotUpload_ = function () {
          var _this = this;

          this.resolveToken_(function (authToken) {
            var requestInfo = multipartUpload(_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);

            var multipartRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);

            _this.request_ = multipartRequest;
            multipartRequest.getPromise().then(function (metadata) {
              _this.request_ = null;
              _this.metadata_ = metadata;

              _this.updateProgress_(_this.blob_.size());

              _this.transition_(InternalTaskState.SUCCESS);
            }, _this.errorHandler_);
          });
        };

        UploadTask.prototype.updateProgress_ = function (transferred) {
          var old = this.transferred_;
          this.transferred_ = transferred; // A progress update can make the "transferred" value smaller (e.g. a
          // partial upload not completed by server, after which the "transferred"
          // value may reset to the value at the beginning of the request).

          if (this.transferred_ !== old) {
            this.notifyObservers_();
          }
        };

        UploadTask.prototype.transition_ = function (state) {
          if (this.state_ === state) {
            return;
          }

          switch (state) {
            case InternalTaskState.CANCELING:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.RUNNING ||
              //        this.state_ === InternalTaskState.PAUSING);
              this.state_ = state;

              if (this.request_ !== null) {
                this.request_.cancel();
              }

              break;

            case InternalTaskState.PAUSING:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.RUNNING);
              this.state_ = state;

              if (this.request_ !== null) {
                this.request_.cancel();
              }

              break;

            case InternalTaskState.RUNNING:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.PAUSED ||
              //        this.state_ === InternalTaskState.PAUSING);
              var wasPaused = this.state_ === InternalTaskState.PAUSED;
              this.state_ = state;

              if (wasPaused) {
                this.notifyObservers_();
                this.start_();
              }

              break;

            case InternalTaskState.PAUSED:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.PAUSING);
              this.state_ = state;
              this.notifyObservers_();
              break;

            case InternalTaskState.CANCELED:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.PAUSED ||
              //        this.state_ === InternalTaskState.CANCELING);
              this.error_ = canceled();
              this.state_ = state;
              this.notifyObservers_();
              break;

            case InternalTaskState.ERROR:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.RUNNING ||
              //        this.state_ === InternalTaskState.PAUSING ||
              //        this.state_ === InternalTaskState.CANCELING);
              this.state_ = state;
              this.notifyObservers_();
              break;

            case InternalTaskState.SUCCESS:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.RUNNING ||
              //        this.state_ === InternalTaskState.PAUSING ||
              //        this.state_ === InternalTaskState.CANCELING);
              this.state_ = state;
              this.notifyObservers_();
              break;
          }
        };

        UploadTask.prototype.completeTransitions_ = function () {
          switch (this.state_) {
            case InternalTaskState.PAUSING:
              this.transition_(InternalTaskState.PAUSED);
              break;

            case InternalTaskState.CANCELING:
              this.transition_(InternalTaskState.CANCELED);
              break;

            case InternalTaskState.RUNNING:
              this.start_();
              break;
          }
        };

        Object.defineProperty(UploadTask.prototype, "snapshot", {
          get: function get() {
            var externalState = taskStateFromInternalTaskState(this.state_);
            return new UploadTaskSnapshot(this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
          },
          enumerable: true,
          configurable: true
        });
        /**
         * Adds a callback for an event.
         * @param type The type of event to listen for.
         */

        UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
          function typeValidator() {
            if (type !== TaskEvent.STATE_CHANGED) {
              throw "Expected one of the event types: [" + TaskEvent.STATE_CHANGED + "].";
            }
          }

          var nextOrObserverMessage = 'Expected a function or an Object with one of ' + '`next`, `error`, `complete` properties.';
          var nextValidator = nullFunctionSpec(true).validator;
          var observerValidator = looseObjectSpec(null, true).validator; // eslint-disable-next-line @typescript-eslint/no-explicit-any

          function nextOrObserverValidator(p) {
            try {
              nextValidator(p);
              return;
            } catch (e) {}

            try {
              observerValidator(p);
              var anyDefined = isJustDef(p['next']) || isJustDef(p['error']) || isJustDef(p['complete']);

              if (!anyDefined) {
                throw '';
              }

              return;
            } catch (e) {
              throw nextOrObserverMessage;
            }
          }

          var specs = [stringSpec(typeValidator), looseObjectSpec(nextOrObserverValidator, true), nullFunctionSpec(true), nullFunctionSpec(true)];
          validate('on', specs, arguments);
          var self = this;

          function makeBinder(specs) {
            function binder(nextOrObserver, error, complete) {
              if (specs !== null) {
                validate('on', specs, arguments);
              }

              var observer = new Observer(nextOrObserver, error, completed);
              self.addObserver_(observer);
              return function () {
                self.removeObserver_(observer);
              };
            }

            return binder;
          }

          function binderNextOrObserverValidator(p) {
            if (p === null) {
              throw nextOrObserverMessage;
            }

            nextOrObserverValidator(p);
          }

          var binderSpecs = [looseObjectSpec(binderNextOrObserverValidator), nullFunctionSpec(true), nullFunctionSpec(true)];
          var typeOnly = !(isJustDef(nextOrObserver) || isJustDef(error) || isJustDef(completed));

          if (typeOnly) {
            return makeBinder(binderSpecs);
          } else {
            return makeBinder(null)(nextOrObserver, error, completed);
          }
        };
        /**
         * This object behaves like a Promise, and resolves with its snapshot data
         * when the upload completes.
         * @param onFulfilled The fulfillment callback. Promise chaining works as normal.
         * @param onRejected The rejection callback.
         */


        UploadTask.prototype.then = function (onFulfilled, onRejected) {
          // These casts are needed so that TypeScript can infer the types of the
          // resulting Promise.
          return this.promise_.then(onFulfilled, onRejected);
        };
        /**
         * Equivalent to calling `then(null, onRejected)`.
         */


        UploadTask.prototype["catch"] = function (onRejected) {
          return this.then(null, onRejected);
        };
        /**
         * Adds the given observer.
         */


        UploadTask.prototype.addObserver_ = function (observer) {
          this.observers_.push(observer);
          this.notifyObserver_(observer);
        };
        /**
         * Removes the given observer.
         */


        UploadTask.prototype.removeObserver_ = function (observer) {
          var i = this.observers_.indexOf(observer);

          if (i !== -1) {
            this.observers_.splice(i, 1);
          }
        };

        UploadTask.prototype.notifyObservers_ = function () {
          var _this = this;

          this.finishPromise_();
          var observers = this.observers_.slice();
          observers.forEach(function (observer) {
            _this.notifyObserver_(observer);
          });
        };

        UploadTask.prototype.finishPromise_ = function () {
          if (this.resolve_ !== null) {
            var triggered = true;

            switch (taskStateFromInternalTaskState(this.state_)) {
              case TaskState.SUCCESS:
                async(this.resolve_.bind(null, this.snapshot))();
                break;

              case TaskState.CANCELED:
              case TaskState.ERROR:
                var toCall = this.reject_;
                async(toCall.bind(null, this.error_))();
                break;

              default:
                triggered = false;
                break;
            }

            if (triggered) {
              this.resolve_ = null;
              this.reject_ = null;
            }
          }
        };

        UploadTask.prototype.notifyObserver_ = function (observer) {
          var externalState = taskStateFromInternalTaskState(this.state_);

          switch (externalState) {
            case TaskState.RUNNING:
            case TaskState.PAUSED:
              if (observer.next) {
                async(observer.next.bind(observer, this.snapshot))();
              }

              break;

            case TaskState.SUCCESS:
              if (observer.complete) {
                async(observer.complete.bind(observer))();
              }

              break;

            case TaskState.CANCELED:
            case TaskState.ERROR:
              if (observer.error) {
                async(observer.error.bind(observer, this.error_))();
              }

              break;

            default:
              // TODO(andysoto): assert(false);
              if (observer.error) {
                async(observer.error.bind(observer, this.error_))();
              }

          }
        };
        /**
         * Resumes a paused task. Has no effect on a currently running or failed task.
         * @return True if the operation took effect, false if ignored.
         */


        UploadTask.prototype.resume = function () {
          validate('resume', [], arguments);
          var valid = this.state_ === InternalTaskState.PAUSED || this.state_ === InternalTaskState.PAUSING;

          if (valid) {
            this.transition_(InternalTaskState.RUNNING);
          }

          return valid;
        };
        /**
         * Pauses a currently running task. Has no effect on a paused or failed task.
         * @return True if the operation took effect, false if ignored.
         */


        UploadTask.prototype.pause = function () {
          validate('pause', [], arguments);
          var valid = this.state_ === InternalTaskState.RUNNING;

          if (valid) {
            this.transition_(InternalTaskState.PAUSING);
          }

          return valid;
        };
        /**
         * Cancels a currently running or paused task. Has no effect on a complete or
         * failed task.
         * @return True if the operation took effect, false if ignored.
         */


        UploadTask.prototype.cancel = function () {
          validate('cancel', [], arguments);
          var valid = this.state_ === InternalTaskState.RUNNING || this.state_ === InternalTaskState.PAUSING;

          if (valid) {
            this.transition_(InternalTaskState.CANCELING);
          }

          return valid;
        };

        return UploadTask;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Provides methods to interact with a bucket in the Firebase Storage service.
       * @param location An fbs.location, or the URL at
       *     which to base this object, in one of the following forms:
       *         gs://<bucket>/<object-path>
       *         http[s]://firebasestorage.googleapis.com/
       *                     <api-version>/b/<bucket>/o/<object-path>
       *     Any query or fragment strings will be ignored in the http[s]
       *     format. If no value is passed, the storage object will use a URL based on
       *     the project ID of the base firebase.App instance.
       */


      var Reference =
      /** @class */
      function () {
        function Reference(authWrapper, location) {
          this.authWrapper = authWrapper;

          if (location instanceof Location) {
            this.location = location;
          } else {
            this.location = Location.makeFromUrl(location);
          }
        }
        /**
         * @return The URL for the bucket and path this object references,
         *     in the form gs://<bucket>/<object-path>
         * @override
         */


        Reference.prototype.toString = function () {
          validate('toString', [], arguments);
          return 'gs://' + this.location.bucket + '/' + this.location.path;
        };

        Reference.prototype.newRef = function (authWrapper, location) {
          return new Reference(authWrapper, location);
        };

        Reference.prototype.mappings = function () {
          return getMappings();
        };
        /**
         * @return A reference to the object obtained by
         *     appending childPath, removing any duplicate, beginning, or trailing
         *     slashes.
         */


        Reference.prototype.child = function (childPath) {
          validate('child', [stringSpec()], arguments);
          var newPath = child(this.location.path, childPath);
          var location = new Location(this.location.bucket, newPath);
          return this.newRef(this.authWrapper, location);
        };

        Object.defineProperty(Reference.prototype, "parent", {
          /**
           * @return A reference to the parent of the
           *     current object, or null if the current object is the root.
           */
          get: function get() {
            var newPath = parent(this.location.path);

            if (newPath === null) {
              return null;
            }

            var location = new Location(this.location.bucket, newPath);
            return this.newRef(this.authWrapper, location);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "root", {
          /**
           * @return An reference to the root of this
           *     object's bucket.
           */
          get: function get() {
            var location = new Location(this.location.bucket, '');
            return this.newRef(this.authWrapper, location);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "bucket", {
          get: function get() {
            return this.location.bucket;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "fullPath", {
          get: function get() {
            return this.location.path;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "name", {
          get: function get() {
            return lastComponent(this.location.path);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "storage", {
          get: function get() {
            return this.authWrapper.service();
          },
          enumerable: true,
          configurable: true
        });
        /**
         * Uploads a blob to this object's location.
         * @param data The blob to upload.
         * @return An UploadTask that lets you control and
         *     observe the upload.
         */

        Reference.prototype.put = function (data, metadata) {
          if (metadata === void 0) {
            metadata = null;
          }

          validate('put', [uploadDataSpec(), metadataSpec(true)], arguments);
          this.throwIfRoot_('put');
          return new UploadTask(this, this.authWrapper, this.location, this.mappings(), new FbsBlob(data), metadata);
        };
        /**
         * Uploads a string to this object's location.
         * @param value The string to upload.
         * @param format The format of the string to upload.
         * @return An UploadTask that lets you control and
         *     observe the upload.
         */


        Reference.prototype.putString = function (value, format, metadata) {
          if (format === void 0) {
            format = StringFormat.RAW;
          }

          validate('putString', [stringSpec(), stringSpec(formatValidator, true), metadataSpec(true)], arguments);
          this.throwIfRoot_('putString');
          var data = dataFromString(format, value);
          var metadataClone = Object.assign({}, metadata);

          if (!isDef(metadataClone['contentType']) && isDef(data.contentType)) {
            metadataClone['contentType'] = data.contentType;
          }

          return new UploadTask(this, this.authWrapper, this.location, this.mappings(), new FbsBlob(data.data, true), metadataClone);
        };
        /**
         * Deletes the object at this location.
         * @return A promise that resolves if the deletion succeeds.
         */


        Reference.prototype["delete"] = function () {
          var _this = this;

          validate('delete', [], arguments);
          this.throwIfRoot_('delete');
          return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = deleteObject(_this.authWrapper, _this.location);
            return _this.authWrapper.makeRequest(requestInfo, authToken).getPromise();
          });
        };
        /**
         * List all items (files) and prefixes (folders) under this storage reference.
         *
         * This is a helper method for calling list() repeatedly until there are
         * no more results. The default pagination size is 1000.
         *
         * Note: The results may not be consistent if objects are changed while this
         * operation is running.
         *
         * Warning: listAll may potentially consume too many resources if there are
         * too many results.
         *
         * @return A Promise that resolves with all the items and prefixes under
         *      the current storage reference. `prefixes` contains references to
         *      sub-directories and `items` contains references to objects in this
         *      folder. `nextPageToken` is never returned.
         */


        Reference.prototype.listAll = function () {
          validate('listAll', [], arguments);
          var accumulator = {
            prefixes: [],
            items: []
          };
          return this.listAllHelper(accumulator).then(function () {
            return accumulator;
          });
        };

        Reference.prototype.listAllHelper = function (accumulator, pageToken) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var opt, nextPage;

            var _a, _b;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_c) {
              switch (_c.label) {
                case 0:
                  opt = {
                    // maxResults is 1000 by default.
                    pageToken: pageToken
                  };
                  return [4
                  /*yield*/
                  , this.list(opt)];

                case 1:
                  nextPage = _c.sent();

                  (_a = accumulator.prefixes).push.apply(_a, nextPage.prefixes);

                  (_b = accumulator.items).push.apply(_b, nextPage.items);

                  if (!(nextPage.nextPageToken != null)) return [3
                  /*break*/
                  , 3];
                  return [4
                  /*yield*/
                  , this.listAllHelper(accumulator, nextPage.nextPageToken)];

                case 2:
                  _c.sent();

                  _c.label = 3;

                case 3:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };
        /**
         * List items (files) and prefixes (folders) under this storage reference.
         *
         * List API is only available for Firebase Rules Version 2.
         *
         * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
         * delimited folder structure.
         * Refer to GCS's List API if you want to learn more.
         *
         * To adhere to Firebase Rules's Semantics, Firebase Storage does not
         * support objects whose paths end with "/" or contain two consecutive
         * "/"s. Firebase Storage List API will filter these unsupported objects.
         * list() may fail if there are too many unsupported objects in the bucket.
         *
         * @param options See ListOptions for details.
         * @return A Promise that resolves with the items and prefixes.
         *      `prefixes` contains references to sub-folders and `items`
         *      contains references to objects in this folder. `nextPageToken`
         *      can be used to get the rest of the results.
         */


        Reference.prototype.list = function (options) {
          validate('list', [listOptionSpec(true)], arguments);
          var self = this;
          return this.authWrapper.getAuthToken().then(function (authToken) {
            var op = options || {};
            var requestInfo = list(self.authWrapper, self.location,
            /*delimiter= */
            '/', op.pageToken, op.maxResults);
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
          });
        };
        /**
         *     A promise that resolves with the metadata for this object. If this
         *     object doesn't exist or metadata cannot be retreived, the promise is
         *     rejected.
         */


        Reference.prototype.getMetadata = function () {
          var _this = this;

          validate('getMetadata', [], arguments);
          this.throwIfRoot_('getMetadata');
          return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = getMetadata(_this.authWrapper, _this.location, _this.mappings());
            return _this.authWrapper.makeRequest(requestInfo, authToken).getPromise();
          });
        };
        /**
         * Updates the metadata for this object.
         * @param metadata The new metadata for the object.
         *     Only values that have been explicitly set will be changed. Explicitly
         *     setting a value to null will remove the metadata.
         * @return A promise that resolves
         *     with the new metadata for this object.
         *     @see firebaseStorage.Reference.prototype.getMetadata
         */


        Reference.prototype.updateMetadata = function (metadata) {
          var _this = this;

          validate('updateMetadata', [metadataSpec()], arguments);
          this.throwIfRoot_('updateMetadata');
          return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = updateMetadata(_this.authWrapper, _this.location, metadata, _this.mappings());
            return _this.authWrapper.makeRequest(requestInfo, authToken).getPromise();
          });
        };
        /**
         * @return A promise that resolves with the download
         *     URL for this object.
         */


        Reference.prototype.getDownloadURL = function () {
          var _this = this;

          validate('getDownloadURL', [], arguments);
          this.throwIfRoot_('getDownloadURL');
          return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = getDownloadUrl(_this.authWrapper, _this.location, _this.mappings());
            return _this.authWrapper.makeRequest(requestInfo, authToken).getPromise().then(function (url) {
              if (url === null) {
                throw noDownloadURL();
              }

              return url;
            });
          });
        };

        Reference.prototype.throwIfRoot_ = function (name) {
          if (this.location.path === '') {
            throw invalidRootOperation(name);
          }
        };

        return Reference;
      }();
      /**
       * A request whose promise always fails.
       * @struct
       * @template T
       */


      var FailRequest =
      /** @class */
      function () {
        function FailRequest(error) {
          this.promise_ = Promise.reject(error);
        }
        /** @inheritDoc */


        FailRequest.prototype.getPromise = function () {
          return this.promise_;
        };
        /** @inheritDoc */


        FailRequest.prototype.cancel = function (_appDelete) {};

        return FailRequest;
      }();

      var RequestMap =
      /** @class */
      function () {
        function RequestMap() {
          this.map = new Map();
          this.id = MIN_SAFE_INTEGER;
        }
        /**
         * Registers the given request with this map.
         * The request is unregistered when it completes.
         *
         * @param request The request to register.
         */


        RequestMap.prototype.addRequest = function (request) {
          var _this = this;

          var id = this.id;
          this.id++;
          this.map.set(id, request);
          request.getPromise().then(function () {
            return _this.map["delete"](id);
          }, function () {
            return _this.map["delete"](id);
          });
        };
        /**
         * Cancels all registered requests.
         */


        RequestMap.prototype.clear = function () {
          this.map.forEach(function (v) {
            v && v.cancel(true);
          });
          this.map.clear();
        };

        return RequestMap;
      }();
      /**
       * @param app If null, getAuthToken always resolves with null.
       * @param service The storage service associated with this auth wrapper.
       *     Untyped to avoid circular type dependencies.
       * @struct
       */


      var AuthWrapper =
      /** @class */
      function () {
        function AuthWrapper(app, authProvider, maker, requestMaker, service, pool) {
          var _a;

          this.bucket_ = null;
          this.appId_ = null;
          this.deleted_ = false;
          this.app_ = app;

          if (this.app_ !== null) {
            var options = this.app_.options;

            if (isDef(options)) {
              this.bucket_ = AuthWrapper.extractBucket_(options);
              this.appId_ = (_a = options.appId) !== null && _a !== void 0 ? _a : null;
            }
          }

          this.authProvider_ = authProvider;
          this.storageRefMaker_ = maker;
          this.requestMaker_ = requestMaker;
          this.pool_ = pool;
          this.service_ = service;
          this.maxOperationRetryTime_ = DEFAULT_MAX_OPERATION_RETRY_TIME;
          this.maxUploadRetryTime_ = DEFAULT_MAX_UPLOAD_RETRY_TIME;
          this.requestMap_ = new RequestMap();
        }

        AuthWrapper.extractBucket_ = function (config) {
          var bucketString = config[CONFIG_STORAGE_BUCKET_KEY] || null;

          if (bucketString == null) {
            return null;
          }

          var loc = Location.makeFromBucketSpec(bucketString);
          return loc.bucket;
        };

        AuthWrapper.prototype.getAuthToken = function () {
          var auth = this.authProvider_.getImmediate({
            optional: true
          });

          if (auth) {
            return auth.getToken().then(function (response) {
              if (response !== null) {
                return response.accessToken;
              } else {
                return null;
              }
            }, function () {
              return null;
            });
          } else {
            return Promise.resolve(null);
          }
        };

        AuthWrapper.prototype.bucket = function () {
          if (this.deleted_) {
            throw appDeleted();
          } else {
            return this.bucket_;
          }
        };
        /**
         * The service associated with this auth wrapper. Untyped to avoid circular
         * type dependencies.
         */


        AuthWrapper.prototype.service = function () {
          return this.service_;
        };
        /**
         * Returns a new firebaseStorage.Reference object referencing this AuthWrapper
         * at the given Location.
         * @param loc The Location.
         * @return Actually a firebaseStorage.Reference, typing not allowed
         *     because of circular dependency problems.
         */


        AuthWrapper.prototype.makeStorageReference = function (loc) {
          return this.storageRefMaker_(this, loc);
        };

        AuthWrapper.prototype.makeRequest = function (requestInfo, authToken) {
          if (!this.deleted_) {
            var request = this.requestMaker_(requestInfo, this.appId_, authToken, this.pool_);
            this.requestMap_.addRequest(request);
            return request;
          } else {
            return new FailRequest(appDeleted());
          }
        };
        /**
         * Stop running requests and prevent more from being created.
         */


        AuthWrapper.prototype.deleteApp = function () {
          this.deleted_ = true;
          this.app_ = null;
          this.requestMap_.clear();
        };

        AuthWrapper.prototype.maxUploadRetryTime = function () {
          return this.maxUploadRetryTime_;
        };

        AuthWrapper.prototype.setMaxUploadRetryTime = function (time) {
          this.maxUploadRetryTime_ = time;
        };

        AuthWrapper.prototype.maxOperationRetryTime = function () {
          return this.maxOperationRetryTime_;
        };

        AuthWrapper.prototype.setMaxOperationRetryTime = function (time) {
          this.maxOperationRetryTime_ = time;
        };

        return AuthWrapper;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @param f May be invoked
       *     before the function returns.
       * @param callback Get all the arguments passed to the function
       *     passed to f, including the initial boolean.
       */


      function start(f, callback, timeout) {
        // TODO(andysoto): make this code cleaner (probably refactor into an actual
        // type instead of a bunch of functions with state shared in the closure)
        var waitSeconds = 1; // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
        // TODO: find a way to exclude Node type definition for storage because storage only works in browser
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        var timeoutId = null;
        var hitTimeout = false;
        var cancelState = 0;

        function canceled() {
          return cancelState === 2;
        }

        var triggeredCallback = false; // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
        // the no-explicit-any rule when ESlint releases it.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        function triggerCallback() {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, args);
          }
        }

        function callWithDelay(millis) {
          timeoutId = setTimeout(function () {
            timeoutId = null;
            f(handler, canceled());
          }, millis);
        } // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
        // the no-explicit-any rule when ESlint releases it.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any


        function handler(success) {
          var args = [];

          for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
          }

          if (triggeredCallback) {
            return;
          }

          if (success) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
          }

          var mustStop = canceled() || hitTimeout;

          if (mustStop) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
          }

          if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
          }

          var waitMillis;

          if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
          } else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
          }

          callWithDelay(waitMillis);
        }

        var stopped = false;

        function stop(wasTimeout) {
          if (stopped) {
            return;
          }

          stopped = true;

          if (triggeredCallback) {
            return;
          }

          if (timeoutId !== null) {
            if (!wasTimeout) {
              cancelState = 2;
            }

            clearTimeout(timeoutId);
            callWithDelay(0);
          } else {
            if (!wasTimeout) {
              cancelState = 1;
            }
          }
        }

        callWithDelay(0);
        setTimeout(function () {
          hitTimeout = true;
          stop(true);
        }, timeout);
        return stop;
      }
      /**
       * Stops the retry loop from repeating.
       * If the function is currently "in between" retries, it is invoked immediately
       * with the second parameter as "true". Otherwise, it will be invoked once more
       * after the current invocation finishes iff the current invocation would have
       * triggered another retry.
       */


      function stop(id) {
        id(false);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @struct
       * @template T
       */


      var NetworkRequest =
      /** @class */
      function () {
        function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
          var _this = this;

          this.pendingXhr_ = null;
          this.backoffId_ = null;
          this.resolve_ = null;
          this.reject_ = null;
          this.canceled_ = false;
          this.appDelete_ = false;
          this.url_ = url;
          this.method_ = method;
          this.headers_ = headers;
          this.body_ = body;
          this.successCodes_ = successCodes.slice();
          this.additionalRetryCodes_ = additionalRetryCodes.slice();
          this.callback_ = callback;
          this.errorCallback_ = errorCallback;
          this.progressCallback_ = progressCallback;
          this.timeout_ = timeout;
          this.pool_ = pool;
          this.promise_ = new Promise(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;

            _this.start_();
          });
        }
        /**
         * Actually starts the retry loop.
         */


        NetworkRequest.prototype.start_ = function () {
          var self = this;

          function doTheRequest(backoffCallback, canceled) {
            if (canceled) {
              backoffCallback(false, new RequestEndStatus(false, null, true));
              return;
            }

            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;

            function progressListener(progressEvent) {
              var loaded = progressEvent.loaded;
              var total = progressEvent.lengthComputable ? progressEvent.total : -1;

              if (self.progressCallback_ !== null) {
                self.progressCallback_(loaded, total);
              }
            }

            if (self.progressCallback_ !== null) {
              xhr.addUploadProgressListener(progressListener);
            } // eslint-disable-next-line @typescript-eslint/no-floating-promises


            xhr.send(self.url_, self.method_, self.body_, self.headers_).then(function (xhr) {
              if (self.progressCallback_ !== null) {
                xhr.removeUploadProgressListener(progressListener);
              }

              self.pendingXhr_ = null;
              xhr = xhr;
              var hitServer = xhr.getErrorCode() === ErrorCode.NO_ERROR;
              var status = xhr.getStatus();

              if (!hitServer || self.isRetryStatusCode_(status)) {
                var wasCanceled = xhr.getErrorCode() === ErrorCode.ABORT;
                backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                return;
              }

              var successCode = self.successCodes_.indexOf(status) !== -1;
              backoffCallback(true, new RequestEndStatus(successCode, xhr));
            });
          }
          /**
           * @param requestWentThrough True if the request eventually went
           *     through, false if it hit the retry limit or was canceled.
           */


          function backoffDone(requestWentThrough, status) {
            var resolve = self.resolve_;
            var reject = self.reject_;
            var xhr = status.xhr;

            if (status.wasSuccessCode) {
              try {
                var result = self.callback_(xhr, xhr.getResponseText());

                if (isJustDef(result)) {
                  resolve(result);
                } else {
                  resolve();
                }
              } catch (e) {
                reject(e);
              }
            } else {
              if (xhr !== null) {
                var err = unknown();
                err.setServerResponseProp(xhr.getResponseText());

                if (self.errorCallback_) {
                  reject(self.errorCallback_(xhr, err));
                } else {
                  reject(err);
                }
              } else {
                if (status.canceled) {
                  var err = self.appDelete_ ? appDeleted() : canceled();
                  reject(err);
                } else {
                  var err = retryLimitExceeded();
                  reject(err);
                }
              }
            }
          }

          if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
          } else {
            this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
          }
        };
        /** @inheritDoc */


        NetworkRequest.prototype.getPromise = function () {
          return this.promise_;
        };
        /** @inheritDoc */


        NetworkRequest.prototype.cancel = function (appDelete) {
          this.canceled_ = true;
          this.appDelete_ = appDelete || false;

          if (this.backoffId_ !== null) {
            stop(this.backoffId_);
          }

          if (this.pendingXhr_ !== null) {
            this.pendingXhr_.abort();
          }
        };

        NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
          // The codes for which to retry came from this page:
          // https://cloud.google.com/storage/docs/exponential-backoff
          var isFiveHundredCode = status >= 500 && status < 600;
          var extraRetryCodes = [// Request Timeout: web server didn't receive full request in time.
          408, // Too Many Requests: you're getting rate-limited, basically.
          429];
          var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
          var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
          return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
        };

        return NetworkRequest;
      }();
      /**
       * A collection of information about the result of a network request.
       * @param opt_canceled Defaults to false.
       * @struct
       */


      var RequestEndStatus =
      /** @class */
      function () {
        function RequestEndStatus(wasSuccessCode, xhr, canceled) {
          this.wasSuccessCode = wasSuccessCode;
          this.xhr = xhr;
          this.canceled = !!canceled;
        }

        return RequestEndStatus;
      }();

      function addAuthHeader_(headers, authToken) {
        if (authToken !== null && authToken.length > 0) {
          headers['Authorization'] = 'Firebase ' + authToken;
        }
      }

      function addVersionHeader_(headers) {
        var version = typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a !== 'undefined' ? _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION : 'AppManager';
        headers['X-Firebase-Storage-Version'] = 'webjs/' + version;
      }

      function addGmpidHeader_(headers, appId) {
        if (appId) {
          headers['X-Firebase-GMPID'] = appId;
        }
      }
      /**
       * @template T
       */


      function makeRequest(requestInfo, appId, authToken, pool) {
        var queryPart = makeQueryString(requestInfo.urlParams);
        var url = requestInfo.url + queryPart;
        var headers = Object.assign({}, requestInfo.headers);
        addGmpidHeader_(headers, appId);
        addAuthHeader_(headers, authToken);
        addVersionHeader_(headers);
        return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A service that provides firebaseStorage.Reference instances.
       * @param opt_url gs:// url to a custom Storage Bucket
       *
       * @struct
       */


      var Service =
      /** @class */
      function () {
        function Service(app, authProvider, pool, url) {
          this.bucket_ = null;

          function maker(authWrapper, loc) {
            return new Reference(authWrapper, loc);
          }

          this.authWrapper_ = new AuthWrapper(app, authProvider, maker, makeRequest, this, pool);
          this.app_ = app;

          if (url != null) {
            this.bucket_ = Location.makeFromBucketSpec(url);
          } else {
            var authWrapperBucket = this.authWrapper_.bucket();

            if (authWrapperBucket != null) {
              this.bucket_ = new Location(authWrapperBucket, '');
            }
          }

          this.internals_ = new ServiceInternals(this);
        }
        /**
         * Returns a firebaseStorage.Reference for the given path in the default
         * bucket.
         */


        Service.prototype.ref = function (path) {
          function validator(path) {
            if (typeof path !== 'string') {
              throw 'Path is not a string.';
            }

            if (/^[A-Za-z]+:\/\//.test(path)) {
              throw 'Expected child path but got a URL, use refFromURL instead.';
            }
          }

          validate('ref', [stringSpec(validator, true)], arguments);

          if (this.bucket_ == null) {
            throw new Error('No Storage Bucket defined in Firebase Options.');
          }

          var ref = new Reference(this.authWrapper_, this.bucket_);

          if (path != null) {
            return ref.child(path);
          } else {
            return ref;
          }
        };
        /**
         * Returns a firebaseStorage.Reference object for the given absolute URL,
         * which must be a gs:// or http[s]:// URL.
         */


        Service.prototype.refFromURL = function (url) {
          function validator(p) {
            if (typeof p !== 'string') {
              throw 'Path is not a string.';
            }

            if (!/^[A-Za-z]+:\/\//.test(p)) {
              throw 'Expected full URL but got a child path, use ref instead.';
            }

            try {
              Location.makeFromUrl(p);
            } catch (e) {
              throw 'Expected valid full URL but got an invalid one.';
            }
          }

          validate('refFromURL', [stringSpec(validator, false)], arguments);
          return new Reference(this.authWrapper_, url);
        };

        Object.defineProperty(Service.prototype, "maxUploadRetryTime", {
          get: function get() {
            return this.authWrapper_.maxUploadRetryTime();
          },
          enumerable: true,
          configurable: true
        });

        Service.prototype.setMaxUploadRetryTime = function (time) {
          validate('setMaxUploadRetryTime', [nonNegativeNumberSpec()], arguments);
          this.authWrapper_.setMaxUploadRetryTime(time);
        };

        Service.prototype.setMaxOperationRetryTime = function (time) {
          validate('setMaxOperationRetryTime', [nonNegativeNumberSpec()], arguments);
          this.authWrapper_.setMaxOperationRetryTime(time);
        };

        Object.defineProperty(Service.prototype, "app", {
          get: function get() {
            return this.app_;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Service.prototype, "INTERNAL", {
          get: function get() {
            return this.internals_;
          },
          enumerable: true,
          configurable: true
        });
        return Service;
      }();
      /**
       * @struct
       */


      var ServiceInternals =
      /** @class */
      function () {
        function ServiceInternals(service) {
          this.service_ = service;
        }
        /**
         * Called when the associated app is deleted.
         * @see {!fbs.AuthWrapper.prototype.deleteApp}
         */


        ServiceInternals.prototype["delete"] = function () {
          this.service_.authWrapper_.deleteApp();
          return Promise.resolve();
        };

        return ServiceInternals;
      }();

      var name = "@firebase/storage";
      var version = "0.3.35";
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Type constant for Firebase Storage.
       */

      var STORAGE_TYPE = 'storage';

      function factory(container, url) {
        // Dependencies
        var app = container.getProvider('app').getImmediate();
        var authProvider = container.getProvider('auth-internal');
        return new Service(app, authProvider, new XhrIoPool(), url);
      }

      function registerStorage(instance) {
        var namespaceExports = {
          // no-inline
          TaskState: TaskState,
          TaskEvent: TaskEvent,
          StringFormat: StringFormat,
          Storage: Service,
          Reference: Reference
        };
        instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"](STORAGE_TYPE, factory, "PUBLIC"
        /* PUBLIC */
        ).setServiceProps(namespaceExports).setMultipleInstances(true));
        instance.registerVersion(name, version);
      }

      registerStorage(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceMappingURL=index.esm.js.map

      /***/
    },

    /***/
    "PdwG":
    /*!***********************************************************!*\
      !*** ./src/app/modules/admin/auth-interceptor.service.ts ***!
      \***********************************************************/

    /*! exports provided: AuthInterceptorService */

    /***/
    function PdwG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () {
        return AuthInterceptorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "JD6w");

      var AuthInterceptorService = /*#__PURE__*/function () {
        function AuthInterceptorService(authService) {
          _classCallCheck(this, AuthInterceptorService);

          this.authService = authService;
        }

        _createClass(AuthInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            var user = this.authService.userSubject.value;
            console.log('here we are');
            var modifiedReq = req.clone({
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(user.token))
            });
            return next.handle(modifiedReq);
          }
        }]);

        return AuthInterceptorService;
      }();

      AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) {
        return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthInterceptorService,
        factory: AuthInterceptorService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PvvA":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/admin/admin-orders/admin-orders.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AdminOrdersComponent */

    /***/
    function PvvA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function () {
        return AdminOrdersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _admin_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-order.service */
      "COMa");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth.service */
      "JD6w");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function AdminOrdersComponent_li_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", order_r1._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.user_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.updatedAt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.order_status.toUpperCase());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.total);
        }
      }

      var AdminOrdersComponent = /*#__PURE__*/function () {
        function AdminOrdersComponent(apiService, authService) {
          _classCallCheck(this, AdminOrdersComponent);

          this.apiService = apiService;
          this.authService = authService;
        }

        _createClass(AdminOrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.apiService.getAllOrders().subscribe(function (data) {
              _this8.orders = data;
              _this8.apiService.orders = data;
            });
          }
        }]);

        return AdminOrdersComponent;
      }();

      AdminOrdersComponent.ɵfac = function AdminOrdersComponent_Factory(t) {
        return new (t || AdminOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_order_service__WEBPACK_IMPORTED_MODULE_1__["AdminOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      AdminOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminOrdersComponent,
        selectors: [["admin-orders"]],
        decls: 19,
        vars: 1,
        consts: [[1, "mr-3"], [1, "heading"], [1, "table", "row"], [1, "table__heading", "col-2"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "row", 3, "routerLink"], [1, "col-2"]],
        template: function AdminOrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Updated On");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdminOrdersComponent_li_18_Template, 14, 7, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW4tb3JkZXJzL2FkbWluLW9yZGVycy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminOrdersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'admin-orders',
            templateUrl: './admin-orders.component.html',
            styleUrls: ['./admin-orders.component.scss']
          }]
        }], function () {
          return [{
            type: _admin_order_service__WEBPACK_IMPORTED_MODULE_1__["AdminOrderService"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RH3D":
    /*!*********************************************!*\
      !*** ./src/app/modules/admin/user.model.ts ***!
      \*********************************************/

    /*! exports provided: User */

    /***/
    function RH3D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = /*#__PURE__*/function () {
        function User(email, id, _token, _tokenExpirationDate) {
          _classCallCheck(this, User);

          this.email = email;
          this.id = id;
          this._token = _token;
          this._tokenExpirationDate = _tokenExpirationDate;
        }

        _createClass(User, [{
          key: "token",
          get: function get() {
            return !this._tokenExpirationDate || new Date() > this._tokenExpirationDate ? null : this._token;
          }
        }], [{
          key: "formJSON",
          value: function formJSON(json) {
            return new User(json.email, json.id, json._token, new Date(json._tokenExpirationDate));
          }
        }]);

        return User;
      }();
      /***/

    },

    /***/
    "S+S0":
    /*!************************************************************!*\
      !*** ./node_modules/@firebase/component/dist/index.cjs.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function SS0(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var tslib = __webpack_require__(
      /*! tslib */
      "30Go");

      var util = __webpack_require__(
      /*! @firebase/util */
      "zVF4");
      /**
       * Component for service name T, e.g. `auth`, `auth-internal`
       */


      var Component =
      /** @class */
      function () {
        /**
         *
         * @param name The public service name, e.g. app, auth, firestore, database
         * @param instanceFactory Service factory responsible for creating the public interface
         * @param type whether the service provided by the component is public or private
         */
        function Component(name, instanceFactory, type) {
          this.name = name;
          this.instanceFactory = instanceFactory;
          this.type = type;
          this.multipleInstances = false;
          /**
           * Properties to be added to the service namespace
           */

          this.serviceProps = {};
          this.instantiationMode = "LAZY"
          /* LAZY */
          ;
        }

        Component.prototype.setInstantiationMode = function (mode) {
          this.instantiationMode = mode;
          return this;
        };

        Component.prototype.setMultipleInstances = function (multipleInstances) {
          this.multipleInstances = multipleInstances;
          return this;
        };

        Component.prototype.setServiceProps = function (props) {
          this.serviceProps = props;
          return this;
        };

        return Component;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var DEFAULT_ENTRY_NAME = '[DEFAULT]';
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
       * NameServiceMapping[T] is an alias for the type of the instance
       */

      var Provider =
      /** @class */
      function () {
        function Provider(name, container) {
          this.name = name;
          this.container = container;
          this.component = null;
          this.instances = new Map();
          this.instancesDeferred = new Map();
        }
        /**
         * @param identifier A provider can provide mulitple instances of a service
         * if this.component.multipleInstances is true.
         */


        Provider.prototype.get = function (identifier) {
          if (identifier === void 0) {
            identifier = DEFAULT_ENTRY_NAME;
          } // if multipleInstances is not supported, use the default name


          var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

          if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred); // If the service instance is available, resolve the promise with it immediately

            try {
              var instance = this.getOrInitializeService(normalizedIdentifier);

              if (instance) {
                deferred.resolve(instance);
              }
            } catch (e) {// when the instance factory throws an exception during get(), it should not cause
              // a fatal error. We just return the unresolved promise in this case.
            }
          }

          return this.instancesDeferred.get(normalizedIdentifier).promise;
        };

        Provider.prototype.getImmediate = function (options) {
          var _a = tslib.__assign({
            identifier: DEFAULT_ENTRY_NAME,
            optional: false
          }, options),
              identifier = _a.identifier,
              optional = _a.optional; // if multipleInstances is not supported, use the default name


          var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

          try {
            var instance = this.getOrInitializeService(normalizedIdentifier);

            if (!instance) {
              if (optional) {
                return null;
              }

              throw Error("Service " + this.name + " is not available");
            }

            return instance;
          } catch (e) {
            if (optional) {
              return null;
            } else {
              throw e;
            }
          }
        };

        Provider.prototype.getComponent = function () {
          return this.component;
        };

        Provider.prototype.setComponent = function (component) {
          var e_1, _a;

          if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
          }

          if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
          }

          this.component = component; // if the service is eager, initialize the default instance

          if (isComponentEager(component)) {
            try {
              this.getOrInitializeService(DEFAULT_ENTRY_NAME);
            } catch (e) {// when the instance factory for an eager Component throws an exception during the eager
              // initialization, it should not cause a fatal error.
              // TODO: Investigate if we need to make it configurable, because some component may want to cause
              // a fatal error in this case?
            }
          }

          try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var _d = tslib.__read(_c.value, 2),
                  instanceIdentifier = _d[0],
                  instanceDeferred = _d[1];

              var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

              try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                var instance = this.getOrInitializeService(normalizedIdentifier);
                instanceDeferred.resolve(instance);
              } catch (e) {// when the instance factory throws an exception, it should not cause
                // a fatal error. We just leave the promise unresolved.
              }
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        };

        Provider.prototype.clearInstance = function (identifier) {
          if (identifier === void 0) {
            identifier = DEFAULT_ENTRY_NAME;
          }

          this.instancesDeferred["delete"](identifier);
          this.instances["delete"](identifier);
        }; // app.delete() will call this method on every provider to delete the services
        // TODO: should we mark the provider as deleted?


        Provider.prototype["delete"] = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var services;
            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  services = Array.from(this.instances.values());
                  return [4
                  /*yield*/
                  , Promise.all(services.filter(function (service) {
                    return 'INTERNAL' in service;
                  }) // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  .map(function (service) {
                    return service.INTERNAL["delete"]();
                  }))];

                case 1:
                  _a.sent();

                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        Provider.prototype.isComponentSet = function () {
          return this.component != null;
        };

        Provider.prototype.getOrInitializeService = function (identifier) {
          var instance = this.instances.get(identifier);

          if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
            this.instances.set(identifier, instance);
          }

          return instance || null;
        };

        Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
          if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
          } else {
            return identifier; // assume multiple instances are supported before the component is provided.
          }
        };

        return Provider;
      }(); // undefined should be passed to the service factory for the default instance


      function normalizeIdentifierForFactory(identifier) {
        return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
      }

      function isComponentEager(component) {
        return component.instantiationMode === "EAGER"
        /* EAGER */
        ;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
       */


      var ComponentContainer =
      /** @class */
      function () {
        function ComponentContainer(name) {
          this.name = name;
          this.providers = new Map();
        }
        /**
         *
         * @param component Component being added
         * @param overwrite When a component with the same name has already been registered,
         * if overwrite is true: overwrite the existing component with the new component and create a new
         * provider with the new component. It can be useful in tests where you want to use different mocks
         * for different tests.
         * if overwrite is false: throw an exception
         */


        ComponentContainer.prototype.addComponent = function (component) {
          var provider = this.getProvider(component.name);

          if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
          }

          provider.setComponent(component);
        };

        ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
          var provider = this.getProvider(component.name);

          if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers["delete"](component.name);
          }

          this.addComponent(component);
        };
        /**
         * getProvider provides a type safe interface where it can only be called with a field name
         * present in NameServiceMapping interface.
         *
         * Firebase SDKs providing services should extend NameServiceMapping interface to register
         * themselves.
         */


        ComponentContainer.prototype.getProvider = function (name) {
          if (this.providers.has(name)) {
            return this.providers.get(name);
          } // create a Provider for a service that hasn't registered with Firebase


          var provider = new Provider(name, this);
          this.providers.set(name, provider);
          return provider;
        };

        ComponentContainer.prototype.getProviders = function () {
          return Array.from(this.providers.values());
        };

        return ComponentContainer;
      }();

      exports.Component = Component;
      exports.ComponentContainer = ComponentContainer;
      exports.Provider = Provider; //# sourceMappingURL=index.cjs.js.map

      /***/
    },

    /***/
    "S9I8":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/admin/admin-products/admin-products-add/admin-products-add.Component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: AdminProductsAddComponent */

    /***/
    function S9I8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminProductsAddComponent", function () {
        return AdminProductsAddComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _mime_type_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mime-type.validator */
      "DPmF");
      /* harmony import */


      var _admin_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../admin-product.service */
      "VCJp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../loading-spinner/loading-spinner.component */
      "Fx1/");

      function AdminProductsAddComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r1.productForm.value.image);
        }
      }

      function AdminProductsAddComponent_ng_template_19_p_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No image is selected");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AdminProductsAddComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AdminProductsAddComponent_ng_template_19_p_0_Template, 2, 0, "p", 32);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.isFileSelected);
        }
      }

      function AdminProductsAddComponent_option_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "option", 34);
        }

        if (rf & 2) {
          var cat_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", cat_r12.categoryName);
        }
      }

      function AdminProductsAddComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsAddComponent_div_54_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

            var i_r14 = ctx.index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.onDeleteIngredient(i_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \xA0 X \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var control_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", control_r13);
        }
      }

      function AdminProductsAddComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsAddComponent_div_62_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var i_r18 = ctx.index;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.onDeleteTag(i_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \xA0 X \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var control_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", control_r17);
        }
      }

      function AdminProductsAddComponent_div_67_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsAddComponent_div_67_div_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r23.resetReviews();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Undo Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AdminProductsAddComponent_div_67_div_4_i_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 45);
        }
      }

      function AdminProductsAddComponent_div_67_div_4_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 55);
        }
      }

      function AdminProductsAddComponent_div_67_div_4_i_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 45);
        }
      }

      function AdminProductsAddComponent_div_67_div_4_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 55);
        }
      }

      function AdminProductsAddComponent_div_67_div_4_i_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 45);
        }
      }

      function AdminProductsAddComponent_div_67_div_4_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 55);
        }
      }

      function AdminProductsAddComponent_div_67_div_4_i_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 45);
        }
      }

      function AdminProductsAddComponent_div_67_div_4_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 55);
        }
      }

      function AdminProductsAddComponent_div_67_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AdminProductsAddComponent_div_67_div_4_i_7_Template, 1, 0, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminProductsAddComponent_div_67_div_4_ng_template_8_Template, 1, 0, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AdminProductsAddComponent_div_67_div_4_i_10_Template, 1, 0, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AdminProductsAddComponent_div_67_div_4_ng_template_11_Template, 1, 0, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AdminProductsAddComponent_div_67_div_4_i_13_Template, 1, 0, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AdminProductsAddComponent_div_67_div_4_ng_template_14_Template, 1, 0, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AdminProductsAddComponent_div_67_div_4_i_16_Template, 1, 0, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AdminProductsAddComponent_div_67_div_4_ng_template_17_Template, 1, 0, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h4", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h2", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsAddComponent_div_67_div_4_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

            var i_r26 = ctx.index;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r39.onDeleteReview(i_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " \xA0 X \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var review_r25 = ctx.$implicit;

          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r25.rating > 1)("ngIfElse", _r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r25.rating > 2)("ngIfElse", _r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r25.rating > 3)("ngIfElse", _r34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r25.rating > 4)("ngIfElse", _r37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r25.reviewer_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", review_r25.review, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r25.date);
        }
      }

      function AdminProductsAddComponent_div_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminProductsAddComponent_div_67_div_3_Template, 3, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminProductsAddComponent_div_67_div_4_Template, 30, 11, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.isReviewDirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.reviews);
        }
      }

      function AdminProductsAddComponent_div_68_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsAddComponent_div_68_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r42.deleteProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AdminProductsAddComponent_div_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AdminProductsAddComponent_div_68_button_5_Template, 3, 0, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r8.productForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.editMode ? "Update Product" : "Add Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.editMode);
        }
      }

      function AdminProductsAddComponent_ng_template_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loading-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var AdminProductsAddComponent = /*#__PURE__*/function () {
        function AdminProductsAddComponent(productService, route, router) {
          _classCallCheck(this, AdminProductsAddComponent);

          this.productService = productService;
          this.route = route;
          this.router = router;
          this.isLoading = false;
          this.isFileSelected = false;
          this.editMode = false;
          this.errorMessage = '';
          this.isReviewDirty = false;
          this.isIngredientsDirty = false;
          this.isTagsDirty = false;
        }

        _createClass(AdminProductsAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.id = this.route.snapshot.paramMap.get('id');
            if (!!this.id) this.editMode = true;
            this.categorySubs = this.productService.getCategoryList().subscribe(function (categories) {
              return _this9.categories = categories;
            });
            var productName = '';
            var category = '';
            var description = '';
            var discount = 0;
            var price = 0;
            var inStock = true;
            var isRecent = true;
            var ingredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
            var tags = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);

            if (this.editMode) {
              this.product = this.productService.getProduct(this.id);
              productName = this.product.product_name;
              category = this.product.category;
              description = this.product.description;
              discount = this.product.discount_percentage;
              price = this.product.price;
              this.imagePreview = this.product.images[0];
              inStock = this.product.in_stock;
              isRecent = this.product.is_recent;
              this.product.ingredients.forEach(function (ingredient) {
                return ingredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](ingredient, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
              });
              this.product.tags.forEach(function (tag) {
                return tags.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](tag, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
              });
            }

            this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              product_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](productName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](category, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              discount_percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](discount, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)]),
              price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](price, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.imagePreview, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_3__["mimeType"]]
              }),
              in_stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](inStock),
              is_recent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](isRecent),
              ingredients: ingredients,
              tags: tags
            });
            if (this.editMode) this.productForm.get('category').disable();
            this.reviews = this.product.reviews.slice();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this10 = this;

              var isDirty, value, imageURL, _value, _imageURL;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      isDirty = this.productForm.dirty || this.isReviewDirty || this.isIngredientsDirty || this.isTagsDirty;

                      if (!(this.productForm.valid && isDirty)) {
                        _context2.next = 23;
                        break;
                      }

                      this.isLoading = true;

                      if (this.editMode) {
                        _context2.next = 13;
                        break;
                      }

                      value = this.productForm.value;
                      _context2.next = 7;
                      return this.productService.uploadFile(value.image);

                    case 7:
                      imageURL = _context2.sent;
                      delete value.image;
                      value.images = [imageURL];
                      this.productService.addProduct(value).subscribe(function (product) {
                        return _this10.onCancel();
                      });
                      _context2.next = 21;
                      break;

                    case 13:
                      _value = this.getDirtyValues(); // @ts-ignore

                      if (!_value.image) {
                        _context2.next = 20;
                        break;
                      }

                      _context2.next = 17;
                      return this.productService.uploadFile(_value.image);

                    case 17:
                      _imageURL = _context2.sent;
                      // @ts-ignore
                      delete _value.image; // @ts-ignore

                      _value.images = [_imageURL];

                    case 20:
                      this.productService.updateProduct(this.id, _value).subscribe(function (product) {
                        return _this10.onCancel();
                      });

                    case 21:
                      _context2.next = 24;
                      break;

                    case 23:
                      this.errorMessage = 'The form is might not be valid or no changes made';

                    case 24:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.isLoading = false;
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
          }
        }, {
          key: "getDirtyValues",
          value: function getDirtyValues() {
            var dirtyValues = {};

            for (var controlsKey in this.productForm.controls) {
              var control = this.productForm.controls[controlsKey];
              if (control.dirty) dirtyValues[controlsKey] = control.value;
            }

            if (this.isReviewDirty) dirtyValues['reviews'] = this.reviews;
            if (this.isIngredientsDirty) dirtyValues['ingredients'] = this.productForm.controls['ingredients'].value;
            if (this.isTagsDirty) dirtyValues['tags'] = this.productForm.controls['tags'].value;
            return dirtyValues;
          }
        }, {
          key: "onImagePicked",
          value: function onImagePicked(event) {
            var _this11 = this;

            var file = event.target.files[0];
            this.productForm.patchValue({
              image: file
            });
            this.productForm.get('image').updateValueAndValidity();
            this.productForm.get('image').markAsDirty();
            var reader = new FileReader();

            reader.onload = function (_) {
              return _this11.imagePreview = reader.result;
            };

            reader.readAsDataURL(file);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.categorySubs.unsubscribe();
          }
        }, {
          key: "onAddIngredient",
          value: function onAddIngredient() {
            this.productForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
          }
        }, {
          key: "onAddTag",
          value: function onAddTag() {
            this.productForm.get('tags').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
          }
        }, {
          key: "onDeleteIngredient",
          value: function onDeleteIngredient(index) {
            this.productForm.get('ingredients').removeAt(index);
            this.isIngredientsDirty = true;
          }
        }, {
          key: "onDeleteTag",
          value: function onDeleteTag(index) {
            this.productForm.get('tags').removeAt(index);
            this.isTagsDirty = true;
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct() {
            var _this12 = this;

            if (confirm("Are you sure you want to delete this product " + this.product.product_name)) {
              this.isLoading = true;
              this.productService.deleteProduct(this.id).subscribe(function (deleted) {
                if (deleted) _this12.onCancel();
              });
            }
          }
        }, {
          key: "onDeleteReview",
          value: function onDeleteReview(index) {
            this.isReviewDirty = true;
            this.reviews.splice(index, 1);
          }
        }, {
          key: "resetReviews",
          value: function resetReviews() {
            this.isReviewDirty = false;
            this.reviews = this.product.reviews.slice();
          }
        }, {
          key: "ingredientControls",
          get: function get() {
            return this.productForm.get('ingredients').controls;
          }
        }, {
          key: "tagsControls",
          get: function get() {
            return this.productForm.get('tags').controls;
          }
        }]);

        return AdminProductsAddComponent;
      }();

      AdminProductsAddComponent.ɵfac = function AdminProductsAddComponent_Factory(t) {
        return new (t || AdminProductsAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_admin_product_service__WEBPACK_IMPORTED_MODULE_4__["AdminProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      AdminProductsAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AdminProductsAddComponent,
        selectors: [["app-admin-products-add"]],
        decls: 71,
        vars: 10,
        consts: [[1, "mr-3"], [1, "heading"], [1, "form-product", 3, "formGroup", "ngSubmit"], [1, "form-group", "form-product__group"], ["for", "product_name", 1, "control-label"], ["id", "product_name", "formControlName", "product_name", "type", "text", 1, "form-control", "input-md"], [1, "control-label"], ["type", "button", 1, "btn", "btn-outline-dark", "p-3", "h-100", 3, "click"], ["type", "file", 1, "input-file", 3, "change"], ["filPicker", ""], ["class", "image-preview", 4, "ngIf", "ngIfElse"], ["errorpreview", ""], ["id", "category", "formControlName", "category", "list", "categories", 1, "form-control"], ["id", "categories"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-4", "control-label"], ["id", "price", "formControlName", "price", "type", "number", 1, "form-control", "input-md"], ["id", "description", "formControlName", "description", 1, "form-control"], ["id", "discount", "formControlName", "discount_percentage", "type", "number", 1, "form-control", "input-md"], [1, "switch"], ["id", "stock", "type", "checkbox", "formControlName", "in_stock", "checked", "", 1, "form-control", "switch__input"], [1, "switch__slider", "switch__round"], ["id", "recent", "type", "checkbox", "formControlName", "is_recent", "checked", "", 1, "form-control", "switch__input"], ["formArrayName", "ingredients", 1, "form-group", "form-product__group"], ["class", "row", "style", "margin-top:10px;", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", "mr-5", 3, "click"], ["formArrayName", "tags", 1, "form-group", "form-product__group"], ["class", "form-group form-product__group", 4, "ngIf"], ["class", "form-group form-product__group", 4, "ngIf", "ngIfElse"], ["loading_circular", ""], [1, "image-preview"], [3, "src", "alt"], ["style", "color: red", 4, "ngIf"], [2, "color", "red"], [3, "value"], [1, "row", 2, "margin-top", "10px"], ["type", "text", 1, "form-control", "arrays", 3, "formControl"], [1, "btn", "btn-danger", 3, "click"], [4, "ngIf"], [1, "btn", "btn-info", 2, "font-size", "1.5rem", 3, "click"], [1, "row"], [1, "col-8"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "fa", "fa-star", "review-filled"], ["class", "fa fa-star review-filled", 4, "ngIf", "ngIfElse"], ["un2", ""], ["un3", ""], ["un4", ""], ["un5", ""], [1, "card-subtitle"], [1, "uk-margin-top", "mb-2", "text-muted"], [1, "card-text", "mr-5"], [1, "col-4"], [1, "fa", "fa-star", "review-unfilled"], [1, "col-md-4"], ["id", "singlebutton", "name", "singlebutton", 1, "btn", "btn-primary", "p-4", 3, "disabled"], ["class", "btn btn-danger p-4", "style", "margin-left: 1rem", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "p-4", 2, "margin-left", "1rem", 3, "click"], [2, "text-align", "center"]],
        template: function AdminProductsAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AdminProductsAddComponent_Template_form_ngSubmit_4_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Product Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Product Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsAddComponent_Template_button_click_14_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

              return _r0.click();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Pick Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminProductsAddComponent_Template_input_change_16_listener($event) {
              ctx.onImagePicked($event);
              return $event.stopPropagation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AdminProductsAddComponent_div_18_Template, 2, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AdminProductsAddComponent_ng_template_19_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Product Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "datalist", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AdminProductsAddComponent_option_26_Template, 1, 1, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Product Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Product Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "textarea", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Discount Percentage");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "In stock");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Add to recent product");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Ingredients");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, AdminProductsAddComponent_div_54_Template, 5, 1, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsAddComponent_Template_button_click_56_listener() {
              return ctx.onAddIngredient();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Add Ingredient");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Tags");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, AdminProductsAddComponent_div_62_Template, 5, 1, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsAddComponent_Template_button_click_64_listener() {
              return ctx.onAddTag();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Add Tag");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, AdminProductsAddComponent_div_67_Template, 5, 2, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, AdminProductsAddComponent_div_68_Template, 6, 3, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, AdminProductsAddComponent_ng_template_69_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.editMode ? "Update Product" : "Add New Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.productForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imagePreview != "" && ctx.imagePreview && ctx.productForm.get("image").value)("ngIfElse", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ingredientControls);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tagsControls);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editMode);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r9);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"]],
        styles: [".form-product__group[_ngcontent-%COMP%] {\n  margin: 3rem;\n}\n\n.control-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.arrays[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-right: 2rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 20px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-size: large;\n  font-weight: bold;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.image-preview[_ngcontent-%COMP%] {\n  height: 20rem;\n  margin: 1rem 0;\n}\n\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch__input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switch__slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.2s;\n}\n\n.switch__slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.2s;\n}\n\n.switch__input[_ngcontent-%COMP%]:checked    + .switch__slider[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n}\n\n.switch__input[_ngcontent-%COMP%]:focus    + .switch__slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #2196f3;\n}\n\n.switch__input[_ngcontent-%COMP%]:checked    + .switch__slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n}\n\n.switch__round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n\n.switch__round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n\n.review[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  border-bottom: 1px black;\n}\n\n.review-unfilled[_ngcontent-%COMP%] {\n  font-family: \"FontAwesome\", serif;\n  float: left;\n  font-weight: 300;\n  display: block;\n  font-size: 20px;\n  color: pink;\n}\n\n.review-filled[_ngcontent-%COMP%] {\n  font-family: \"FontAwesome\", serif;\n  font-weight: 300;\n  font-size: 20px;\n  display: block;\n  float: left;\n  color: palevioletred;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZG1pbi1wcm9kdWN0cy9hZG1pbi1wcm9kdWN0cy1hZGQvYWRtaW4tcHJvZHVjdHMtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQUFKOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQURGOztBQUdFO0VBQ0UsWUFBQTtBQURKOztBQUtBO0VBRUUsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEY7O0FBS0U7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFISjs7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUVBLGdCQUFBO0FBTEo7O0FBT0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQUxOOztBQVVFO0VBQ0UseUJBQUE7QUFSSjs7QUFXRTtFQUNFLDJCQUFBO0FBVEo7O0FBYUU7RUFDRSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7QUFYSjs7QUFjRTtFQUNFLG1CQUFBO0FBWko7O0FBYUk7RUFDRSxrQkFBQTtBQVhOOztBQW1CQTtFQUVFLGNBQUE7RUFtQkEsd0JBQUE7QUFuQ0Y7O0FBaUJFO0VBQ0UsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFmSjs7QUFrQkU7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFoQkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2FkbWluLXByb2R1Y3RzL2FkbWluLXByb2R1Y3RzLWFkZC9hZG1pbi1wcm9kdWN0cy1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1wcm9kdWN0IHtcbiAgJl9fZ3JvdXAge1xuICAgIG1hcmdpbjogM3JlbTtcbiAgfVxufVxuXG4uY29udHJvbC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYXJyYXlzIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVde1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5pbWFnZS1wcmV2aWV3IHtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG5cbiAgJiBpbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4uc3dpdGNoIHtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzRweDtcblxuICAmX19pbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG5cbiAgfVxuXG4gICZfX3NsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcbiAgICB0cmFuc2l0aW9uOiAuMnM7XG5cbiAgICAmOmJlZm9yZXtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICB3aWR0aDogMjZweDtcbiAgICAgIGxlZnQ6IDRweDtcbiAgICAgIGJvdHRvbTogNHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcbiAgICAgIHRyYW5zaXRpb246IC4ycztcbiAgICB9XG5cbiAgfVxuXG4gICZfX2lucHV0OmNoZWNrZWQgKyAmX19zbGlkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgfVxuXG4gICZfX2lucHV0OmZvY3VzICsgJl9fc2xpZGVye1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZmMztcbiAgfVxuXG5cbiAgJl9faW5wdXQ6Y2hlY2tlZCArICZfX3NsaWRlcjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICB9XG5cbiAgJl9fcm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gICAgJjpiZWZvcmUge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgfVxuXG5cbn1cblxuXG4ucmV2aWV3IHtcblxuICBtYXJnaW46IDJyZW0gMDtcbiAgJi11bmZpbGxlZHtcbiAgICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJywgc2VyaWY7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHBpbms7XG4gIH1cblxuICAmLWZpbGxlZCB7XG4gICAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZScsIHNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICB9XG5cbiAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrO1xuXG59XG5cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminProductsAddComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-admin-products-add',
            templateUrl: './admin-products-add.component.html',
            styleUrls: ['./admin-products-add.component.scss']
          }]
        }], function () {
          return [{
            type: _admin_product_service__WEBPACK_IMPORTED_MODULE_4__["AdminProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "VCJp":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/admin/admin-products/admin-product.service.ts ***!
      \***********************************************************************/

    /*! exports provided: AdminProductService */

    /***/
    function VCJp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminProductService", function () {
        return AdminProductService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/compiler/src/util */
      "Yoyx");
      /* harmony import */


      var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_app_core_http_http_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/http/http-error-handler.service */
      "p4Ho");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../auth.service */
      "JD6w");
      /* harmony import */


      var _firebase_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../firebase-storage.service */
      "AXPk");

      var AdminProductService = /*#__PURE__*/function () {
        function AdminProductService(http, httpErrorHandlerService, authservice, storageService) {
          _classCallCheck(this, AdminProductService);

          this.http = http;
          this.httpErrorHandlerService = httpErrorHandlerService;
          this.authservice = authservice;
          this.storageService = storageService;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL;
          this.PRODUCT_API = 'get_all_products';
          this.CATEGORY_API = 'category/category_list';
          this.PRODUCT_ADD_API = 'product/add_product';
          this.PRODUCT_UPDATE_API = 'product/update';
        }

        _createClass(AdminProductService, [{
          key: "getProductList",
          value: function getProductList() {
            var url = "".concat(this.BASE_URL).concat(this.PRODUCT_API);
            return this.http.get(url, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.authservice.userSubject.value.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }, {
          key: "getCategoryList",
          value: function getCategoryList() {
            var url = "".concat(this.BASE_URL).concat(this.CATEGORY_API);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }, {
          key: "getProduct",
          value: function getProduct(id) {
            var product = this.products.find(function (product) {
              return product._id === id;
            });
            return product ? product : Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_5__["error"])('No product found');
          }
          /*addProduct(value: any){
            const image = value.image;
            delete value.image;
            const data = JSON.stringify(value);
            const form = new FormData();
            form.append('data',data);
            form.append('image',image,'image');
            const url = `${this.BASE_URL}${this.PRODUCT_ADD_API}`;
            return this.http.post<ProductDetail>(url,form,
              {
                headers: new HttpHeaders().set('Authorization',`Bearer ${this.authservice.userSubject.value.token}`)
              }
              ).pipe(catchError(this.httpErrorHandlerService.handleErr));
          }*/

        }, {
          key: "addProduct",
          value: function addProduct(value) {
            var url = "".concat(this.BASE_URL).concat(this.PRODUCT_ADD_API);
            return this.http.post(url, value, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.authservice.userSubject.value.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }, {
          key: "updateProduct",
          value: function updateProduct(id, value) {
            var imageType = typeof value.image;
            var url = "".concat(this.BASE_URL).concat(this.PRODUCT_UPDATE_API, "/").concat(id);

            if (imageType !== "undefined" && imageType === "object") {
              var image = value.image;
              delete value.image;
              var data = JSON.stringify(value);
              var form = new FormData();
              form.append('data', data);
              form.append('image', image, 'image');
              return this.http.patch(url, form, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.authservice.userSubject.value.token))
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.httpErrorHandlerService.handleErr));
            } else return this.http.patch(url, Object.assign({}, value), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.authservice.userSubject.value.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(id) {
            var url = "".concat(this.BASE_URL, "product/delete_product/").concat(id);
            return this.http["delete"](url, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.authservice.userSubject.value.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(image) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.storageService.uploadFile(image);

                    case 2:
                      return _context3.abrupt("return", _context3.sent);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return AdminProductService;
      }();

      AdminProductService.ɵfac = function AdminProductService_Factory(t) {
        return new (t || AdminProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_core_http_http_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["HttpErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_firebase_storage_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseStorageService"]));
      };

      AdminProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AdminProductService,
        factory: AdminProductService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminProductService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: src_app_core_http_http_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["HttpErrorHandlerService"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
          }, {
            type: _firebase_storage_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseStorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Vaw3":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js ***!
      \**********************************************************************************/

    /*! exports provided: AngularFireStorage, AngularFireStorageModule, BUCKET, createStorageRef, createUploadTask, fromTask */

    /***/
    function Vaw3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFireStorage", function () {
        return AngularFireStorage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFireStorageModule", function () {
        return AngularFireStorageModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BUCKET", function () {
        return BUCKET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createStorageRef", function () {
        return createStorageRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createUploadTask", function () {
        return createUploadTask;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromTask", function () {
        return fromTask;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase/storage */
      "WI49");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} task
       * @return {?}
       */


      function fromTask(task) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](
        /**
        * @param {?} subscriber
        * @return {?}
        */
        function (subscriber) {
          /** @type {?} */
          var progress =
          /**
          * @param {?} snap
          * @return {?}
          */
          function progress(snap) {
            return subscriber.next(snap);
          };
          /** @type {?} */


          var error =
          /**
          * @param {?} e
          * @return {?}
          */
          function error(e) {
            return subscriber.error(e);
          };
          /** @type {?} */


          var complete =
          /**
          * @return {?}
          */
          function complete() {
            return subscriber.complete();
          };

          task.on('state_changed', progress, error, complete);
          return (
            /**
            * @return {?}
            */
            function () {
              return task.cancel();
            }
          );
        });
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function AngularFireUploadTask() {}

      if (false) {}
      /**
       * Create an AngularFireUploadTask from a regular UploadTask from the Storage SDK.
       * This method creates an observable of the upload and returns on object that provides
       * multiple methods for controlling and monitoring the file upload.
       * @param {?} task
       * @return {?}
       */


      function createUploadTask(task) {
        /** @type {?} */
        var inner$ = fromTask(task);
        return {
          task: task,
          then: task.then.bind(task),
          "catch": task["catch"].bind(task),
          pause: task.pause.bind(task),
          cancel: task.cancel.bind(task),
          resume: task.resume.bind(task),
          snapshotChanges:
          /**
          * @return {?}
          */
          function snapshotChanges() {
            return inner$;
          },
          percentageChanges:
          /**
          * @return {?}
          */
          function percentageChanges() {
            return inner$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.bytesTransferred / s.totalBytes * 100;
            }));
          }
        };
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function AngularFireStorageReference() {}

      if (false) {}
      /**
       * Create an AngularFire wrapped Storage Reference. This object
       * creates observable methods from promise based methods.
       * @param {?} ref
       * @param {?} schedulers
       * @param {?} keepUnstableUntilFirst
       * @return {?}
       */


      function createStorageRef(ref, schedulers, keepUnstableUntilFirst) {
        return {
          getDownloadURL:
          /**
          * @return {?}
          */
          function getDownloadURL() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              return ref.getDownloadURL();
            }), keepUnstableUntilFirst);
          },
          getMetadata:
          /**
          * @return {?}
          */
          function getMetadata() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              return ref.getMetadata();
            }), keepUnstableUntilFirst);
          },
          "delete":
          /**
          * @return {?}
          */
          function _delete() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref["delete"]());
          },
          child:
          /**
          * @param {?} path
          * @return {?}
          */
          function child(path) {
            return createStorageRef(ref.child(path), schedulers, keepUnstableUntilFirst);
          },
          updateMetadata:
          /**
          * @param {?} meta
          * @return {?}
          */
          function updateMetadata(meta) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref.updateMetadata(meta));
          },
          put:
          /**
          * @param {?} data
          * @param {?=} metadata
          * @return {?}
          */
          function put(data, metadata) {
            /** @type {?} */
            var task = ref.put(data, metadata);
            return createUploadTask(task);
          },
          putString:
          /**
          * @param {?} data
          * @param {?=} format
          * @param {?=} metadata
          * @return {?}
          */
          function putString(data, format, metadata) {
            /** @type {?} */
            var task = ref.putString(data, format, metadata);
            return createUploadTask(task);
          },
          listAll:
          /**
          * @return {?}
          */
          function listAll() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref.listAll());
          }
        };
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var BUCKET = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.storageBucket');
      /**
       * AngularFireStorage Service
       *
       * This service is the main entry point for this feature module. It provides
       * an API for uploading and downloading binary files from Cloud Storage for
       * Firebase.
       */

      var AngularFireStorage = /*#__PURE__*/function () {
        /**
         * @param {?} options
         * @param {?} nameOrConfig
         * @param {?} storageBucket
         * @param {?} platformId
         * @param {?} zone
         */
        function AngularFireStorage(options, nameOrConfig, storageBucket, platformId, zone) {
          _classCallCheck(this, AngularFireStorage);

          this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
          this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers, platformId);
          this.storage = zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);
            return app.storage(storageBucket || undefined);
          });
        }
        /**
         * @param {?} path
         * @return {?}
         */


        _createClass(AngularFireStorage, [{
          key: "ref",
          value: function ref(path) {
            return createStorageRef(this.storage.ref(path), this.schedulers, this.keepUnstableUntilFirst);
          }
          /**
           * @param {?} path
           * @param {?} data
           * @param {?=} metadata
           * @return {?}
           */

        }, {
          key: "upload",
          value: function upload(path, data, metadata) {
            /** @type {?} */
            var storageRef = this.storage.ref(path);
            /** @type {?} */

            var ref = createStorageRef(storageRef, this.schedulers, this.keepUnstableUntilFirst);
            return ref.put(data, metadata);
          }
        }]);

        return AngularFireStorage;
      }();

      AngularFireStorage.ɵfac = function AngularFireStorage_Factory(t) {
        return new (t || AngularFireStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](BUCKET, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]));
      };
      /** @nocollapse */


      AngularFireStorage.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [BUCKET]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }];
      };
      /** @nocollapse */


      AngularFireStorage.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
        factory: function AngularFireStorage_Factory() {
          return new AngularFireStorage(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(BUCKET, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]));
        },
        token: AngularFireStorage,
        providedIn: "any"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AngularFireStorage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'any'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [BUCKET]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AngularFireStorageModule = function AngularFireStorageModule() {
        _classCallCheck(this, AngularFireStorageModule);
      };

      AngularFireStorageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AngularFireStorageModule
      });
      AngularFireStorageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AngularFireStorageModule_Factory(t) {
          return new (t || AngularFireStorageModule)();
        },
        providers: [AngularFireStorage]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AngularFireStorageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            providers: [AngularFireStorage]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-fire-storage.js.map

      /***/

    },

    /***/
    "WI49":
    /*!*********************************************************!*\
      !*** ./node_modules/firebase/storage/dist/index.esm.js ***!
      \*********************************************************/

    /*! no exports provided */

    /***/
    function WI49(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/storage */
      "LmZi"); //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "WMln":
    /*!****************************************************!*\
      !*** ./src/app/core/http/testimony-api.service.ts ***!
      \****************************************************/

    /*! exports provided: TestimonyApiService */

    /***/
    function WMln(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestimonyApiService", function () {
        return TestimonyApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _constants_api_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../constants/api.const */
      "bh//");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./http-error-handler.service */
      "p4Ho");
      /* harmony import */


      var _modules_admin_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../modules/admin/auth.service */
      "JD6w");

      var TestimonyApiService = /*#__PURE__*/function () {
        function TestimonyApiService(http, httpErrorHandlerService, authService) {
          _classCallCheck(this, TestimonyApiService);

          this.http = http;
          this.httpErrorHandlerService = httpErrorHandlerService;
          this.authService = authService;
          this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL;
        }

        _createClass(TestimonyApiService, [{
          key: "getTestimonies",
          value: function getTestimonies() {
            var url = "".concat(this.BASE_URL).concat(_constants_api_const__WEBPACK_IMPORTED_MODULE_3__["GET_TESTIMONIES_API"]);
            return this.http.get(url, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.authService.userSubject.value.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }, {
          key: "deleteTestimony",
          value: function deleteTestimony(id) {
            var url = "".concat(this.BASE_URL).concat(_constants_api_const__WEBPACK_IMPORTED_MODULE_3__["DELETE_TESTIMONIES_API"]).concat(id);
            return this.http["delete"](url, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.authService.userSubject.value.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }, {
          key: "addTestimony",
          value: function addTestimony(data) {
            var url = "".concat(this.BASE_URL).concat(_constants_api_const__WEBPACK_IMPORTED_MODULE_3__["ADD_TESTIMONY_API"]);
            return this.http.post(url, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.authService.userSubject.value.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }]);

        return TestimonyApiService;
      }();

      TestimonyApiService.ɵfac = function TestimonyApiService_Factory(t) {
        return new (t || TestimonyApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_modules_admin_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
      };

      TestimonyApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TestimonyApiService,
        factory: TestimonyApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonyApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"]
          }, {
            type: _modules_admin_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Wcq6":
    /*!*****************************************************!*\
      !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function Wcq6(module, exports, __webpack_require__) {
      "use strict";

      function _interopDefault(ex) {
        return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
      }

      var firebase = _interopDefault(__webpack_require__(
      /*! @firebase/app */
      "wj3C"));

      var name = "firebase";
      var version = "7.15.0";
      /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      firebase.registerVersion(name, version, 'app');
      module.exports = firebase; //# sourceMappingURL=index.cjs.js.map

      /***/
    },

    /***/
    "Yoyx":
    /*!****************************************************!*\
      !*** ./node_modules/@angular/compiler/src/util.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function Yoyx(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * @license
      * Copyright Google LLC All Rights Reserved.
      *
      * Use of this source code is governed by an MIT-style license that can be
      * found in the LICENSE file at https://angular.io/license
      */


      (function (factory) {
        if (true && typeof module.exports === "object") {
          var v = factory(__webpack_require__("GPNb"), exports);
          if (v !== undefined) module.exports = v;
        } else if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
      })(function (require, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.partitionArray = exports.newArray = exports.global = exports.Version = exports.isPromise = exports.resolveForwardRef = exports.stringify = exports.utf8Encode = exports.escapeRegExp = exports.getParseErrors = exports.isSyntaxError = exports.syntaxError = exports.error = exports.SyncAsync = exports.ValueTransformer = exports.noUndefined = exports.isDefined = exports.visitValue = exports.splitAtPeriod = exports.splitAtColon = exports.dashCaseToCamelCase = void 0;
        var DASH_CASE_REGEXP = /-+([a-z0-9])/g;

        function dashCaseToCamelCase(input) {
          return input.replace(DASH_CASE_REGEXP, function () {
            var m = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              m[_i] = arguments[_i];
            }

            return m[1].toUpperCase();
          });
        }

        exports.dashCaseToCamelCase = dashCaseToCamelCase;

        function splitAtColon(input, defaultValues) {
          return _splitAt(input, ':', defaultValues);
        }

        exports.splitAtColon = splitAtColon;

        function splitAtPeriod(input, defaultValues) {
          return _splitAt(input, '.', defaultValues);
        }

        exports.splitAtPeriod = splitAtPeriod;

        function _splitAt(input, character, defaultValues) {
          var characterIndex = input.indexOf(character);
          if (characterIndex == -1) return defaultValues;
          return [input.slice(0, characterIndex).trim(), input.slice(characterIndex + 1).trim()];
        }

        function visitValue(value, visitor, context) {
          if (Array.isArray(value)) {
            return visitor.visitArray(value, context);
          }

          if (isStrictStringMap(value)) {
            return visitor.visitStringMap(value, context);
          }

          if (value == null || typeof value == 'string' || typeof value == 'number' || typeof value == 'boolean') {
            return visitor.visitPrimitive(value, context);
          }

          return visitor.visitOther(value, context);
        }

        exports.visitValue = visitValue;

        function isDefined(val) {
          return val !== null && val !== undefined;
        }

        exports.isDefined = isDefined;

        function noUndefined(val) {
          return val === undefined ? null : val;
        }

        exports.noUndefined = noUndefined;

        var ValueTransformer =
        /** @class */
        function () {
          function ValueTransformer() {}

          ValueTransformer.prototype.visitArray = function (arr, context) {
            var _this = this;

            return arr.map(function (value) {
              return visitValue(value, _this, context);
            });
          };

          ValueTransformer.prototype.visitStringMap = function (map, context) {
            var _this = this;

            var result = {};
            Object.keys(map).forEach(function (key) {
              result[key] = visitValue(map[key], _this, context);
            });
            return result;
          };

          ValueTransformer.prototype.visitPrimitive = function (value, context) {
            return value;
          };

          ValueTransformer.prototype.visitOther = function (value, context) {
            return value;
          };

          return ValueTransformer;
        }();

        exports.ValueTransformer = ValueTransformer;
        exports.SyncAsync = {
          assertSync: function assertSync(value) {
            if (isPromise(value)) {
              throw new Error("Illegal state: value cannot be a promise");
            }

            return value;
          },
          then: function then(value, cb) {
            return isPromise(value) ? value.then(cb) : cb(value);
          },
          all: function all(syncAsyncValues) {
            return syncAsyncValues.some(isPromise) ? Promise.all(syncAsyncValues) : syncAsyncValues;
          }
        };

        function error(msg) {
          throw new Error("Internal Error: " + msg);
        }

        exports.error = error;

        function syntaxError(msg, parseErrors) {
          var error = Error(msg);
          error[ERROR_SYNTAX_ERROR] = true;
          if (parseErrors) error[ERROR_PARSE_ERRORS] = parseErrors;
          return error;
        }

        exports.syntaxError = syntaxError;
        var ERROR_SYNTAX_ERROR = 'ngSyntaxError';
        var ERROR_PARSE_ERRORS = 'ngParseErrors';

        function isSyntaxError(error) {
          return error[ERROR_SYNTAX_ERROR];
        }

        exports.isSyntaxError = isSyntaxError;

        function getParseErrors(error) {
          return error[ERROR_PARSE_ERRORS] || [];
        }

        exports.getParseErrors = getParseErrors; // Escape characters that have a special meaning in Regular Expressions

        function escapeRegExp(s) {
          return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
        }

        exports.escapeRegExp = escapeRegExp;
        var STRING_MAP_PROTO = Object.getPrototypeOf({});

        function isStrictStringMap(obj) {
          return typeof obj === 'object' && obj !== null && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
        }

        function utf8Encode(str) {
          var encoded = '';

          for (var index = 0; index < str.length; index++) {
            var codePoint = str.charCodeAt(index); // decode surrogate
            // see https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae

            if (codePoint >= 0xd800 && codePoint <= 0xdbff && str.length > index + 1) {
              var low = str.charCodeAt(index + 1);

              if (low >= 0xdc00 && low <= 0xdfff) {
                index++;
                codePoint = (codePoint - 0xd800 << 10) + low - 0xdc00 + 0x10000;
              }
            }

            if (codePoint <= 0x7f) {
              encoded += String.fromCharCode(codePoint);
            } else if (codePoint <= 0x7ff) {
              encoded += String.fromCharCode(codePoint >> 6 & 0x1F | 0xc0, codePoint & 0x3f | 0x80);
            } else if (codePoint <= 0xffff) {
              encoded += String.fromCharCode(codePoint >> 12 | 0xe0, codePoint >> 6 & 0x3f | 0x80, codePoint & 0x3f | 0x80);
            } else if (codePoint <= 0x1fffff) {
              encoded += String.fromCharCode(codePoint >> 18 & 0x07 | 0xf0, codePoint >> 12 & 0x3f | 0x80, codePoint >> 6 & 0x3f | 0x80, codePoint & 0x3f | 0x80);
            }
          }

          return encoded;
        }

        exports.utf8Encode = utf8Encode;

        function stringify(token) {
          if (typeof token === 'string') {
            return token;
          }

          if (Array.isArray(token)) {
            return '[' + token.map(stringify).join(', ') + ']';
          }

          if (token == null) {
            return '' + token;
          }

          if (token.overriddenName) {
            return "" + token.overriddenName;
          }

          if (token.name) {
            return "" + token.name;
          }

          if (!token.toString) {
            return 'object';
          } // WARNING: do not try to `JSON.stringify(token)` here
          // see https://github.com/angular/angular/issues/23440


          var res = token.toString();

          if (res == null) {
            return '' + res;
          }

          var newLineIndex = res.indexOf('\n');
          return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
        }

        exports.stringify = stringify;
        /**
         * Lazily retrieves the reference value from a forwardRef.
         */

        function resolveForwardRef(type) {
          if (typeof type === 'function' && type.hasOwnProperty('__forward_ref__')) {
            return type();
          } else {
            return type;
          }
        }

        exports.resolveForwardRef = resolveForwardRef;
        /**
         * Determine if the argument is shaped like a Promise
         */

        function isPromise(obj) {
          // allow any Promise/A+ compliant thenable.
          // It's up to the caller to ensure that obj.then conforms to the spec
          return !!obj && typeof obj.then === 'function';
        }

        exports.isPromise = isPromise;

        var Version =
        /** @class */
        function () {
          function Version(full) {
            this.full = full;
            var splits = full.split('.');
            this.major = splits[0];
            this.minor = splits[1];
            this.patch = splits.slice(2).join('.');
          }

          return Version;
        }();

        exports.Version = Version;

        var __window = typeof window !== 'undefined' && window;

        var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self;

        var __global = typeof global !== 'undefined' && global; // Check __global first, because in Node tests both __global and __window may be defined and _global
        // should be __global in that case.


        var _global = __global || __window || __self;

        exports.global = _global;

        function newArray(size, value) {
          var list = [];

          for (var i = 0; i < size; i++) {
            list.push(value);
          }

          return list;
        }

        exports.newArray = newArray;
        /**
         * Partitions a given array into 2 arrays, based on a boolean value returned by the condition
         * function.
         *
         * @param arr Input array that should be partitioned
         * @param conditionFn Condition function that is called for each item in a given array and returns a
         * boolean value.
         */

        function partitionArray(arr, conditionFn) {
          var truthy = [];
          var falsy = [];
          arr.forEach(function (item) {
            (conditionFn(item) ? truthy : falsy).push(item);
          });
          return [truthy, falsy];
        }

        exports.partitionArray = partitionArray;
      }); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQU9ILElBQU0sZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO0lBRXpDLFNBQWdCLG1CQUFtQixDQUFDLEtBQWE7UUFDL0MsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFO1lBQUMsV0FBVztpQkFBWCxVQUFXLEVBQVgscUJBQVcsRUFBWCxJQUFXO2dCQUFYLHNCQUFXOztZQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRTtRQUFsQixDQUFrQixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUZELGtEQUVDO0lBRUQsU0FBZ0IsWUFBWSxDQUFDLEtBQWEsRUFBRSxhQUF1QjtRQUNqRSxPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFGRCxvQ0FFQztJQUVELFNBQWdCLGFBQWEsQ0FBQyxLQUFhLEVBQUUsYUFBdUI7UUFDbEUsT0FBTyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRkQsc0NBRUM7SUFFRCxTQUFTLFFBQVEsQ0FBQyxLQUFhLEVBQUUsU0FBaUIsRUFBRSxhQUF1QjtRQUN6RSxJQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELElBQUksY0FBYyxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sYUFBYSxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCxTQUFnQixVQUFVLENBQUMsS0FBVSxFQUFFLE9BQXFCLEVBQUUsT0FBWTtRQUN4RSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFRLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUF1QixLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDckU7UUFFRCxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxLQUFLLElBQUksUUFBUSxJQUFJLE9BQU8sS0FBSyxJQUFJLFFBQVE7WUFDckUsT0FBTyxLQUFLLElBQUksU0FBUyxFQUFFO1lBQzdCLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDL0M7UUFFRCxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFmRCxnQ0FlQztJQUVELFNBQWdCLFNBQVMsQ0FBQyxHQUFRO1FBQ2hDLE9BQU8sR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFGRCw4QkFFQztJQUVELFNBQWdCLFdBQVcsQ0FBSSxHQUFnQjtRQUM3QyxPQUFPLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3pDLENBQUM7SUFGRCxrQ0FFQztJQVNEO1FBQUE7UUFpQkEsQ0FBQztRQWhCQyxxQ0FBVSxHQUFWLFVBQVcsR0FBVSxFQUFFLE9BQVk7WUFBbkMsaUJBRUM7WUFEQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUksRUFBRSxPQUFPLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFDRCx5Q0FBYyxHQUFkLFVBQWUsR0FBeUIsRUFBRSxPQUFZO1lBQXRELGlCQU1DO1lBTEMsSUFBTSxNQUFNLEdBQXlCLEVBQUUsQ0FBQztZQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7Z0JBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFDRCx5Q0FBYyxHQUFkLFVBQWUsS0FBVSxFQUFFLE9BQVk7WUFDckMsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QscUNBQVUsR0FBVixVQUFXLEtBQVUsRUFBRSxPQUFZO1lBQ2pDLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNILHVCQUFDO0lBQUQsQ0FBQyxBQWpCRCxJQWlCQztJQWpCWSw0Q0FBZ0I7SUFxQmhCLFFBQUEsU0FBUyxHQUFHO1FBQ3ZCLFVBQVUsRUFBRSxVQUFJLEtBQW1CO1lBQ2pDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDN0Q7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxJQUFJLEVBQUUsVUFBTyxLQUFtQixFQUFFLEVBQThDO1lBRTFFLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNMLEdBQUcsRUFBRSxVQUFJLGVBQStCO1lBQ3RDLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBc0IsQ0FBQztRQUNqRyxDQUFDO0tBQ0YsQ0FBQztJQUVGLFNBQWdCLEtBQUssQ0FBQyxHQUFXO1FBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQW1CLEdBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFGRCxzQkFFQztJQUVELFNBQWdCLFdBQVcsQ0FBQyxHQUFXLEVBQUUsV0FBMEI7UUFDakUsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLEtBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMxQyxJQUFJLFdBQVc7WUFBRyxLQUFhLENBQUMsa0JBQWtCLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDbEUsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBTEQsa0NBS0M7SUFFRCxJQUFNLGtCQUFrQixHQUFHLGVBQWUsQ0FBQztJQUMzQyxJQUFNLGtCQUFrQixHQUFHLGVBQWUsQ0FBQztJQUUzQyxTQUFnQixhQUFhLENBQUMsS0FBWTtRQUN4QyxPQUFRLEtBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFGRCxzQ0FFQztJQUVELFNBQWdCLGNBQWMsQ0FBQyxLQUFZO1FBQ3pDLE9BQVEsS0FBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFGRCx3Q0FFQztJQUVELHVFQUF1RTtJQUN2RSxTQUFnQixZQUFZLENBQUMsQ0FBUztRQUNwQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUZELG9DQUVDO0lBRUQsSUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELFNBQVMsaUJBQWlCLENBQUMsR0FBUTtRQUNqQyxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssZ0JBQWdCLENBQUM7SUFDcEcsQ0FBQztJQUVELFNBQWdCLFVBQVUsQ0FBQyxHQUFXO1FBQ3BDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMvQyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXRDLG1CQUFtQjtZQUNuQiw0RUFBNEU7WUFDNUUsSUFBSSxTQUFTLElBQUksTUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDMUUsSUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO29CQUNsQyxLQUFLLEVBQUUsQ0FBQztvQkFDUixTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztpQkFDbkU7YUFDRjtZQUVELElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtnQkFDckIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDM0M7aUJBQU0sSUFBSSxTQUFTLElBQUksS0FBSyxFQUFFO2dCQUM3QixPQUFPLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUM3RjtpQkFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxNQUFNLENBQUMsWUFBWSxDQUMxQixDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDNUY7aUJBQU0sSUFBSSxTQUFTLElBQUksUUFBUSxFQUFFO2dCQUNoQyxPQUFPLElBQUksTUFBTSxDQUFDLFlBQVksQ0FDMUIsQ0FBQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQ3BFLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ2xFO1NBQ0Y7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBOUJELGdDQThCQztJQVNELFNBQWdCLFNBQVMsQ0FBQyxLQUFVO1FBQ2xDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3BEO1FBRUQsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQztTQUNuQjtRQUVELElBQUksS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUN4QixPQUFPLEtBQUcsS0FBSyxDQUFDLGNBQWdCLENBQUM7U0FDbEM7UUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPLEtBQUcsS0FBSyxDQUFDLElBQU0sQ0FBQztTQUN4QjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ25CLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO1FBRUQsc0RBQXNEO1FBQ3RELHNEQUFzRDtRQUN0RCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFN0IsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO1FBRUQsSUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxPQUFPLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBbkNELDhCQW1DQztJQUVEOztPQUVHO0lBQ0gsU0FBZ0IsaUJBQWlCLENBQUMsSUFBUztRQUN6QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDeEUsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQU5ELDhDQU1DO0lBRUQ7O09BRUc7SUFDSCxTQUFnQixTQUFTLENBQVUsR0FBUTtRQUN6QywyQ0FBMkM7UUFDM0MscUVBQXFFO1FBQ3JFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO0lBQ2pELENBQUM7SUFKRCw4QkFJQztJQUVEO1FBS0UsaUJBQW1CLElBQVk7WUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1lBQzdCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBQ0gsY0FBQztJQUFELENBQUMsQUFYRCxJQVdDO0lBWFksMEJBQU87SUF3QnBCLElBQU0sUUFBUSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUM7SUFDekQsSUFBTSxNQUFNLEdBQUcsT0FBTyxJQUFJLEtBQUssV0FBVyxJQUFJLE9BQU8saUJBQWlCLEtBQUssV0FBVztRQUNsRixJQUFJLFlBQVksaUJBQWlCLElBQUksSUFBSSxDQUFDO0lBQzlDLElBQU0sUUFBUSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUM7SUFFekQsb0dBQW9HO0lBQ3BHLG1DQUFtQztJQUNuQyxJQUFNLE9BQU8sR0FBMEIsUUFBUSxJQUFJLFFBQVEsSUFBSSxNQUFNLENBQUM7SUFDbkQseUJBQU07SUFJekIsU0FBZ0IsUUFBUSxDQUFJLElBQVksRUFBRSxLQUFTO1FBQ2pELElBQU0sSUFBSSxHQUFRLEVBQUUsQ0FBQztRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBTSxDQUFDLENBQUM7U0FDbkI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFORCw0QkFNQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxTQUFnQixjQUFjLENBQzFCLEdBQVEsRUFBRSxXQUErQztRQUMzRCxJQUFNLE1BQU0sR0FBUSxFQUFFLENBQUM7UUFDdkIsSUFBTSxLQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ2QsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBUkQsd0NBUUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb25zdGFudFBvb2x9IGZyb20gJy4vY29uc3RhbnRfcG9vbCc7XG5cbmltcG9ydCAqIGFzIG8gZnJvbSAnLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge1BhcnNlRXJyb3J9IGZyb20gJy4vcGFyc2VfdXRpbCc7XG5cbmNvbnN0IERBU0hfQ0FTRV9SRUdFWFAgPSAvLSsoW2EtejAtOV0pL2c7XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXNoQ2FzZVRvQ2FtZWxDYXNlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gaW5wdXQucmVwbGFjZShEQVNIX0NBU0VfUkVHRVhQLCAoLi4ubTogYW55W10pID0+IG1bMV0udG9VcHBlckNhc2UoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEF0Q29sb24oaW5wdXQ6IHN0cmluZywgZGVmYXVsdFZhbHVlczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBfc3BsaXRBdChpbnB1dCwgJzonLCBkZWZhdWx0VmFsdWVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0QXRQZXJpb2QoaW5wdXQ6IHN0cmluZywgZGVmYXVsdFZhbHVlczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBfc3BsaXRBdChpbnB1dCwgJy4nLCBkZWZhdWx0VmFsdWVzKTtcbn1cblxuZnVuY3Rpb24gX3NwbGl0QXQoaW5wdXQ6IHN0cmluZywgY2hhcmFjdGVyOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICBjb25zdCBjaGFyYWN0ZXJJbmRleCA9IGlucHV0LmluZGV4T2YoY2hhcmFjdGVyKTtcbiAgaWYgKGNoYXJhY3RlckluZGV4ID09IC0xKSByZXR1cm4gZGVmYXVsdFZhbHVlcztcbiAgcmV0dXJuIFtpbnB1dC5zbGljZSgwLCBjaGFyYWN0ZXJJbmRleCkudHJpbSgpLCBpbnB1dC5zbGljZShjaGFyYWN0ZXJJbmRleCArIDEpLnRyaW0oKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdFZhbHVlKHZhbHVlOiBhbnksIHZpc2l0b3I6IFZhbHVlVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRBcnJheSg8YW55W10+dmFsdWUsIGNvbnRleHQpO1xuICB9XG5cbiAgaWYgKGlzU3RyaWN0U3RyaW5nTWFwKHZhbHVlKSkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0U3RyaW5nTWFwKDx7W2tleTogc3RyaW5nXTogYW55fT52YWx1ZSwgY29udGV4dCk7XG4gIH1cblxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8XG4gICAgICB0eXBlb2YgdmFsdWUgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQcmltaXRpdmUodmFsdWUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZpc2l0b3IudmlzaXRPdGhlcih2YWx1ZSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RlZmluZWQodmFsOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB2YWwgIT09IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vVW5kZWZpbmVkPFQ+KHZhbDogVHx1bmRlZmluZWQpOiBUIHtcbiAgcmV0dXJuIHZhbCA9PT0gdW5kZWZpbmVkID8gbnVsbCEgOiB2YWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsdWVWaXNpdG9yIHtcbiAgdmlzaXRBcnJheShhcnI6IGFueVtdLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0U3RyaW5nTWFwKG1hcDoge1trZXk6IHN0cmluZ106IGFueX0sIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRQcmltaXRpdmUodmFsdWU6IGFueSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdE90aGVyKHZhbHVlOiBhbnksIGNvbnRleHQ6IGFueSk6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFZhbHVlVHJhbnNmb3JtZXIgaW1wbGVtZW50cyBWYWx1ZVZpc2l0b3Ige1xuICB2aXNpdEFycmF5KGFycjogYW55W10sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGFyci5tYXAodmFsdWUgPT4gdmlzaXRWYWx1ZSh2YWx1ZSwgdGhpcywgY29udGV4dCkpO1xuICB9XG4gIHZpc2l0U3RyaW5nTWFwKG1hcDoge1trZXk6IHN0cmluZ106IGFueX0sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgY29uc3QgcmVzdWx0OiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgcmVzdWx0W2tleV0gPSB2aXNpdFZhbHVlKG1hcFtrZXldLCB0aGlzLCBjb250ZXh0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHZpc2l0UHJpbWl0aXZlKHZhbHVlOiBhbnksIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZpc2l0T3RoZXIodmFsdWU6IGFueSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3luY0FzeW5jPFQ+ID0gVHxQcm9taXNlPFQ+O1xuXG5leHBvcnQgY29uc3QgU3luY0FzeW5jID0ge1xuICBhc3NlcnRTeW5jOiA8VD4odmFsdWU6IFN5bmNBc3luYzxUPik6IFQgPT4ge1xuICAgIGlmIChpc1Byb21pc2UodmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElsbGVnYWwgc3RhdGU6IHZhbHVlIGNhbm5vdCBiZSBhIHByb21pc2VgKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICB0aGVuOiA8VCwgUj4odmFsdWU6IFN5bmNBc3luYzxUPiwgY2I6ICh2YWx1ZTogVCkgPT4gUiB8IFByb21pc2U8Uj58IFN5bmNBc3luYzxSPik6XG4gICAgICBTeW5jQXN5bmM8Uj4gPT4ge1xuICAgICAgICByZXR1cm4gaXNQcm9taXNlKHZhbHVlKSA/IHZhbHVlLnRoZW4oY2IpIDogY2IodmFsdWUpO1xuICAgICAgfSxcbiAgYWxsOiA8VD4oc3luY0FzeW5jVmFsdWVzOiBTeW5jQXN5bmM8VD5bXSk6IFN5bmNBc3luYzxUW10+ID0+IHtcbiAgICByZXR1cm4gc3luY0FzeW5jVmFsdWVzLnNvbWUoaXNQcm9taXNlKSA/IFByb21pc2UuYWxsKHN5bmNBc3luY1ZhbHVlcykgOiBzeW5jQXN5bmNWYWx1ZXMgYXMgVFtdO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3IobXNnOiBzdHJpbmcpOiBuZXZlciB7XG4gIHRocm93IG5ldyBFcnJvcihgSW50ZXJuYWwgRXJyb3I6ICR7bXNnfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ludGF4RXJyb3IobXNnOiBzdHJpbmcsIHBhcnNlRXJyb3JzPzogUGFyc2VFcnJvcltdKTogRXJyb3Ige1xuICBjb25zdCBlcnJvciA9IEVycm9yKG1zZyk7XG4gIChlcnJvciBhcyBhbnkpW0VSUk9SX1NZTlRBWF9FUlJPUl0gPSB0cnVlO1xuICBpZiAocGFyc2VFcnJvcnMpIChlcnJvciBhcyBhbnkpW0VSUk9SX1BBUlNFX0VSUk9SU10gPSBwYXJzZUVycm9ycztcbiAgcmV0dXJuIGVycm9yO1xufVxuXG5jb25zdCBFUlJPUl9TWU5UQVhfRVJST1IgPSAnbmdTeW50YXhFcnJvcic7XG5jb25zdCBFUlJPUl9QQVJTRV9FUlJPUlMgPSAnbmdQYXJzZUVycm9ycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N5bnRheEVycm9yKGVycm9yOiBFcnJvcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKGVycm9yIGFzIGFueSlbRVJST1JfU1lOVEFYX0VSUk9SXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcnNlRXJyb3JzKGVycm9yOiBFcnJvcik6IFBhcnNlRXJyb3JbXSB7XG4gIHJldHVybiAoZXJyb3IgYXMgYW55KVtFUlJPUl9QQVJTRV9FUlJPUlNdIHx8IFtdO1xufVxuXG4vLyBFc2NhcGUgY2hhcmFjdGVycyB0aGF0IGhhdmUgYSBzcGVjaWFsIG1lYW5pbmcgaW4gUmVndWxhciBFeHByZXNzaW9uc1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcy5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XG59XG5cbmNvbnN0IFNUUklOR19NQVBfUFJPVE8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xuZnVuY3Rpb24gaXNTdHJpY3RTdHJpbmdNYXAob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gU1RSSU5HX01BUF9QUk9UTztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHV0ZjhFbmNvZGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgZW5jb2RlZCA9ICcnO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGxldCBjb2RlUG9pbnQgPSBzdHIuY2hhckNvZGVBdChpbmRleCk7XG5cbiAgICAvLyBkZWNvZGUgc3Vycm9nYXRlXG4gICAgLy8gc2VlIGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgIGlmIChjb2RlUG9pbnQgPj0gMHhkODAwICYmIGNvZGVQb2ludCA8PSAweGRiZmYgJiYgc3RyLmxlbmd0aCA+IChpbmRleCArIDEpKSB7XG4gICAgICBjb25zdCBsb3cgPSBzdHIuY2hhckNvZGVBdChpbmRleCArIDEpO1xuICAgICAgaWYgKGxvdyA+PSAweGRjMDAgJiYgbG93IDw9IDB4ZGZmZikge1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBjb2RlUG9pbnQgPSAoKGNvZGVQb2ludCAtIDB4ZDgwMCkgPDwgMTApICsgbG93IC0gMHhkYzAwICsgMHgxMDAwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50IDw9IDB4N2YpIHtcbiAgICAgIGVuY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDw9IDB4N2ZmKSB7XG4gICAgICBlbmNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4gNikgJiAweDFGKSB8IDB4YzAsIChjb2RlUG9pbnQgJiAweDNmKSB8IDB4ODApO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgZW5jb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAgIChjb2RlUG9pbnQgPj4gMTIpIHwgMHhlMCwgKChjb2RlUG9pbnQgPj4gNikgJiAweDNmKSB8IDB4ODAsIChjb2RlUG9pbnQgJiAweDNmKSB8IDB4ODApO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDw9IDB4MWZmZmZmKSB7XG4gICAgICBlbmNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICAgKChjb2RlUG9pbnQgPj4gMTgpICYgMHgwNykgfCAweGYwLCAoKGNvZGVQb2ludCA+PiAxMikgJiAweDNmKSB8IDB4ODAsXG4gICAgICAgICAgKChjb2RlUG9pbnQgPj4gNikgJiAweDNmKSB8IDB4ODAsIChjb2RlUG9pbnQgJiAweDNmKSB8IDB4ODApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbmNvZGVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE91dHB1dENvbnRleHQge1xuICBnZW5GaWxlUGF0aDogc3RyaW5nO1xuICBzdGF0ZW1lbnRzOiBvLlN0YXRlbWVudFtdO1xuICBjb25zdGFudFBvb2w6IENvbnN0YW50UG9vbDtcbiAgaW1wb3J0RXhwcihyZWZlcmVuY2U6IGFueSwgdHlwZVBhcmFtcz86IG8uVHlwZVtdfG51bGwsIHVzZVN1bW1hcmllcz86IGJvb2xlYW4pOiBvLkV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkodG9rZW46IGFueSk6IHN0cmluZyB7XG4gIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodG9rZW4pKSB7XG4gICAgcmV0dXJuICdbJyArIHRva2VuLm1hcChzdHJpbmdpZnkpLmpvaW4oJywgJykgKyAnXSc7XG4gIH1cblxuICBpZiAodG9rZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAnJyArIHRva2VuO1xuICB9XG5cbiAgaWYgKHRva2VuLm92ZXJyaWRkZW5OYW1lKSB7XG4gICAgcmV0dXJuIGAke3Rva2VuLm92ZXJyaWRkZW5OYW1lfWA7XG4gIH1cblxuICBpZiAodG9rZW4ubmFtZSkge1xuICAgIHJldHVybiBgJHt0b2tlbi5uYW1lfWA7XG4gIH1cblxuICBpZiAoIXRva2VuLnRvU3RyaW5nKSB7XG4gICAgcmV0dXJuICdvYmplY3QnO1xuICB9XG5cbiAgLy8gV0FSTklORzogZG8gbm90IHRyeSB0byBgSlNPTi5zdHJpbmdpZnkodG9rZW4pYCBoZXJlXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMzQ0MFxuICBjb25zdCByZXMgPSB0b2tlbi50b1N0cmluZygpO1xuXG4gIGlmIChyZXMgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJyArIHJlcztcbiAgfVxuXG4gIGNvbnN0IG5ld0xpbmVJbmRleCA9IHJlcy5pbmRleE9mKCdcXG4nKTtcbiAgcmV0dXJuIG5ld0xpbmVJbmRleCA9PT0gLTEgPyByZXMgOiByZXMuc3Vic3RyaW5nKDAsIG5ld0xpbmVJbmRleCk7XG59XG5cbi8qKlxuICogTGF6aWx5IHJldHJpZXZlcyB0aGUgcmVmZXJlbmNlIHZhbHVlIGZyb20gYSBmb3J3YXJkUmVmLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUZvcndhcmRSZWYodHlwZTogYW55KTogYW55IHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nICYmIHR5cGUuaGFzT3duUHJvcGVydHkoJ19fZm9yd2FyZF9yZWZfXycpKSB7XG4gICAgcmV0dXJuIHR5cGUoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB0aGUgYXJndW1lbnQgaXMgc2hhcGVkIGxpa2UgYSBQcm9taXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2U8VCA9IGFueT4ob2JqOiBhbnkpOiBvYmogaXMgUHJvbWlzZTxUPiB7XG4gIC8vIGFsbG93IGFueSBQcm9taXNlL0ErIGNvbXBsaWFudCB0aGVuYWJsZS5cbiAgLy8gSXQncyB1cCB0byB0aGUgY2FsbGVyIHRvIGVuc3VyZSB0aGF0IG9iai50aGVuIGNvbmZvcm1zIHRvIHRoZSBzcGVjXG4gIHJldHVybiAhIW9iaiAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbmV4cG9ydCBjbGFzcyBWZXJzaW9uIHtcbiAgcHVibGljIHJlYWRvbmx5IG1ham9yOiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkb25seSBtaW5vcjogc3RyaW5nO1xuICBwdWJsaWMgcmVhZG9ubHkgcGF0Y2g6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZnVsbDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3BsaXRzID0gZnVsbC5zcGxpdCgnLicpO1xuICAgIHRoaXMubWFqb3IgPSBzcGxpdHNbMF07XG4gICAgdGhpcy5taW5vciA9IHNwbGl0c1sxXTtcbiAgICB0aGlzLnBhdGNoID0gc3BsaXRzLnNsaWNlKDIpLmpvaW4oJy4nKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGUge1xuICBsb2cobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcbiAgd2FybihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xufVxuXG5cbmRlY2xhcmUgdmFyIFdvcmtlckdsb2JhbFNjb3BlOiBhbnk7XG4vLyBDb21tb25KUyAvIE5vZGUgaGF2ZSBnbG9iYWwgY29udGV4dCBleHBvc2VkIGFzIFwiZ2xvYmFsXCIgdmFyaWFibGUuXG4vLyBXZSBkb24ndCB3YW50IHRvIGluY2x1ZGUgdGhlIHdob2xlIG5vZGUuZC50cyB0aGlzIHRoaXMgY29tcGlsYXRpb24gdW5pdCBzbyB3ZSdsbCBqdXN0IGZha2Vcbi8vIHRoZSBnbG9iYWwgXCJnbG9iYWxcIiB2YXIgZm9yIG5vdy5cbmRlY2xhcmUgdmFyIGdsb2JhbDogYW55O1xuY29uc3QgX193aW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3c7XG5jb25zdCBfX3NlbGYgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSAmJiBzZWxmO1xuY29uc3QgX19nbG9iYWwgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWw7XG5cbi8vIENoZWNrIF9fZ2xvYmFsIGZpcnN0LCBiZWNhdXNlIGluIE5vZGUgdGVzdHMgYm90aCBfX2dsb2JhbCBhbmQgX193aW5kb3cgbWF5IGJlIGRlZmluZWQgYW5kIF9nbG9iYWxcbi8vIHNob3VsZCBiZSBfX2dsb2JhbCBpbiB0aGF0IGNhc2UuXG5jb25zdCBfZ2xvYmFsOiB7W25hbWU6IHN0cmluZ106IGFueX0gPSBfX2dsb2JhbCB8fCBfX3dpbmRvdyB8fCBfX3NlbGY7XG5leHBvcnQge19nbG9iYWwgYXMgZ2xvYmFsfTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0FycmF5PFQgPSBhbnk+KHNpemU6IG51bWJlcik6IFRbXTtcbmV4cG9ydCBmdW5jdGlvbiBuZXdBcnJheTxUPihzaXplOiBudW1iZXIsIHZhbHVlOiBUKTogVFtdO1xuZXhwb3J0IGZ1bmN0aW9uIG5ld0FycmF5PFQ+KHNpemU6IG51bWJlciwgdmFsdWU/OiBUKTogVFtdIHtcbiAgY29uc3QgbGlzdDogVFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgbGlzdC5wdXNoKHZhbHVlISk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbi8qKlxuICogUGFydGl0aW9ucyBhIGdpdmVuIGFycmF5IGludG8gMiBhcnJheXMsIGJhc2VkIG9uIGEgYm9vbGVhbiB2YWx1ZSByZXR1cm5lZCBieSB0aGUgY29uZGl0aW9uXG4gKiBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gYXJyIElucHV0IGFycmF5IHRoYXQgc2hvdWxkIGJlIHBhcnRpdGlvbmVkXG4gKiBAcGFyYW0gY29uZGl0aW9uRm4gQ29uZGl0aW9uIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGZvciBlYWNoIGl0ZW0gaW4gYSBnaXZlbiBhcnJheSBhbmQgcmV0dXJucyBhXG4gKiBib29sZWFuIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFydGl0aW9uQXJyYXk8VD4oXG4gICAgYXJyOiBUW10sIGNvbmRpdGlvbkZuOiA8SyBleHRlbmRzIFQ+KHZhbHVlOiBLKSA9PiBib29sZWFuKTogW1RbXSwgVFtdXSB7XG4gIGNvbnN0IHRydXRoeTogVFtdID0gW107XG4gIGNvbnN0IGZhbHN5OiBUW10gPSBbXTtcbiAgYXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgKGNvbmRpdGlvbkZuKGl0ZW0pID8gdHJ1dGh5IDogZmFsc3kpLnB1c2goaXRlbSk7XG4gIH0pO1xuICByZXR1cm4gW3RydXRoeSwgZmFsc3ldO1xufVxuIl19

      /***/

    },

    /***/
    "dqQ8":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/admin/admin-slideshow/admin-slideshow-add/admin-slideshow-add.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: AdminSlideshowAddComponent */

    /***/
    function dqQ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminSlideshowAddComponent", function () {
        return AdminSlideshowAddComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_http_slideshow_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/http/slideshow-api.service */
      "yTGm");
      /* harmony import */


      var _core_http_product_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/http/product-api.service */
      "9hIC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/services/utility.service */
      "qeeY");
      /* harmony import */


      var _firebase_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../firebase-storage.service */
      "AXPk");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AdminSlideshowAddComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminSlideshowAddComponent_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return _r0.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Select image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AdminSlideshowAddComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminSlideshowAddComponent_div_4_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return _r0.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.file, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function AdminSlideshowAddComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminSlideshowAddComponent_div_12_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var item_r10 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.itemSelected(item_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.product_name);
        }
      }

      function AdminSlideshowAddComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No product selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AdminSlideshowAddComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r5.selectedItem.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.selectedItem.product_name);
        }
      }

      var AdminSlideshowAddComponent = /*#__PURE__*/function () {
        function AdminSlideshowAddComponent(slidshowApiService, productApiService, router, utilityService, storageService) {
          _classCallCheck(this, AdminSlideshowAddComponent);

          this.slidshowApiService = slidshowApiService;
          this.productApiService = productApiService;
          this.router = router;
          this.utilityService = utilityService;
          this.storageService = storageService;
          this.image = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        }

        _createClass(AdminSlideshowAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProductList();
          }
        }, {
          key: "getProductList",
          value: function getProductList() {
            var _this13 = this;

            this.utilityService.showLoader.next(true);
            this.productApiService.getProductList().subscribe(function (res) {
              if (res) {
                _this13.list = res.reduce(function (prev, next) {
                  return [].concat(_toConsumableArray(prev), _toConsumableArray(next.product_list));
                }, []);
              }

              _this13.utilityService.showLoader.next(false);
            }, function (err) {
              return _this13.utilityService.showLoader.next(false);
            });
          }
        }, {
          key: "itemSelected",
          value: function itemSelected(item) {
            this.selectedItem = item;
          }
        }, {
          key: "addSlide",
          value: function addSlide() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this14 = this;

              var image_url, data;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.utilityService.showLoader.next(true);
                      _context4.next = 3;
                      return this.storageService.uploadFile(this.fileData, 'slideshow');

                    case 3:
                      image_url = _context4.sent;
                      data = {
                        image_url: image_url,
                        product_id: this.selectedItem.product_id
                      };
                      this.slidshowApiService.addSlide(data).subscribe(function (res) {
                        _this14.utilityService.showLoader.next(false);

                        _this14.router.navigate(['/', 'private-path', 'admin', 'slideshow']);
                      }, function (err) {
                        return _this14.utilityService.showLoader.next(false);
                      });

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            var _this15 = this;

            var file = event.target.files[0];
            this.fileData = file;
            var reader = new FileReader();

            reader.onload = function (_) {
              return _this15.file = reader.result;
            };

            reader.readAsDataURL(file);
          }
        }]);

        return AdminSlideshowAddComponent;
      }();

      AdminSlideshowAddComponent.ɵfac = function AdminSlideshowAddComponent_Factory(t) {
        return new (t || AdminSlideshowAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_http_slideshow_api_service__WEBPACK_IMPORTED_MODULE_3__["SlideshowApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_http_product_api_service__WEBPACK_IMPORTED_MODULE_4__["ProductApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_firebase_storage_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseStorageService"]));
      };

      AdminSlideshowAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AdminSlideshowAddComponent,
        selectors: [["app-admin-slideshow-add"]],
        decls: 19,
        vars: 7,
        consts: [[1, "slideshow-add"], ["type", "file", "accept", "image/*", "hidden", "", 3, "formControl", "change"], ["imageInput", ""], ["class", "image-holder", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "product-selection"], [1, "dropdown"], ["id", "selectProduct", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "primary-button", "dropdown-toggle"], ["aria-labelledby", "selectProduct", 1, "dropdown-menu"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "selected-item"], ["class", "selected-item__box", 4, "ngIf"], ["type", "button", 1, "btn", "primary-button", 3, "click"], [1, "image-holder", 3, "click"], ["height", "300", "alt", "selected image", 3, "src", "click"], [1, "dropdown-item", 3, "click"], ["width", "40", "height", "40", 3, "src"], [2, "margin-left", "2rem", "font-size", "18px"], [1, "selected-item__box"], ["width", "300", "height", "300", "alt", "product image", 2, "object-fit", "contain", 3, "src"], [2, "font-size", "20px", "margin-right", "3rem"]],
        template: function AdminSlideshowAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminSlideshowAddComponent_Template_input_change_1_listener($event) {
              return ctx.onChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminSlideshowAddComponent_div_3_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminSlideshowAddComponent_div_4_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Select product : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AdminSlideshowAddComponent_div_12_Template, 5, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AdminSlideshowAddComponent_div_14_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AdminSlideshowAddComponent_div_15_Template, 4, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminSlideshowAddComponent_Template_button_click_17_listener() {
              return ctx.addSlide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Add slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.image);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.file);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.file);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !!ctx.selectedItem ? "Change" : "Select", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.list);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedItem);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.slideshow-add[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n}\n.slideshow-add[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n  padding: 4rem;\n  width: 100%;\n  height: 30rem;\n  background-color: #f1f1f1;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n.slideshow-add[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 2px 5px 5px #f1f1f1;\n}\n.slideshow-add[_ngcontent-%COMP%]   .product-selection[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.slideshow-add[_ngcontent-%COMP%]   .product-selection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-right: 5rem;\n}\n.slideshow-add[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-left: 1rem;\n}\n.slideshow-add[_ngcontent-%COMP%]   .selected-item__box[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9fY29tbW9uLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW4tc2xpZGVzaG93L2FkbWluLXNsaWRlc2hvdy1hZGQvYWRtaW4tc2xpZGVzaG93LWFkZC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvX2FuaW1hdGlvbnMuc2NzcyIsInNyYy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLGVBQUE7QUFJQSxtQkFBQTtBQUdBLGtCQUFBO0FDckJBO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0lGO0FERkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDSUo7QURBQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0dGO0FEREU7RUFFRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSwyREFBQTtFQUNBLG1LQUFBO0VBRUEsMkJBQUE7QUNDSjtBREdFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSw0Q0FBQTtFQUEwQyxnQ0FBQTtBQ0Q5QztBRE1BO0VBQ0U7SUFDRSxVQUFBO0VDSEY7RURNQTtJQUNFLFVBQUE7RUNKRjtBQUNGO0FET0E7RUFDRTtJQUNFLFVBQUE7RUNMRjtFRFFBO0lBQ0UsVUFBQTtFQ05GO0FBQ0Y7QURTQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSwrQkFBQTtFQ1JGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSwrQkFBQTtFQ1JGO0FBQ0Y7QURXQTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUNURjtBRFlBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ1RGO0FEWUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ1RGO0FEWUE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNURjtBRFlBO0VBQ0UsaUJBQUE7QUNURjtBRFlBO0VBRUE7SUFDRSxpQkFBQTtFQ1ZBO0FBQ0Y7QURhQTtFQUVBO0lBQ0UsaUJBQUE7RUNaQTtBQUNGO0FDN0dBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0Esd0JBQUE7RUQrR0o7QUFDRjtBQ3ZIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VEK0dKO0FBQ0Y7QUM3R0E7RUFDRTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFRCtHSjtFQzdHQTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFRCtHSjtBQUNGO0FDdkhBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7QUFDRjtBQS9IQTtFRUlFLGFBQUE7RUFDQSxzQkZKYztFQUNkLGFBQUE7QUFrSUY7QUFoSUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFRUpGLGFBQUE7RUFDQSxtQkZJZ0I7RUVBaEIsdUJGQzBCO0VFQTFCLG1CQUFBO0VGQ0Usb0NBQUE7RUFDQSxlQUFBO0FBb0lKO0FBbElJO0VBQ0UsbUNBQUE7QUFvSU47QUFoSUU7RUFDRSxnQkFBQTtFRWhCRixhQUFBO0VBQ0EsbUJGZ0JnQjtFRVpoQiwyQkZhMEI7RUVaMUIsbUJGWXNDO0FBb0l4QztBQWxJSTtFQUNFLGtCQUFBO0FBb0lOO0FBaElFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQWtJSjtBQWhJSTtFQUNFLGFBQUE7QUFrSU4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2FkbWluLXNsaWRlc2hvdy9hZG1pbi1zbGlkZXNob3ctYWRkL2FkbWluLXNsaWRlc2hvdy1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS13ZWJzaXRlLWNvbG9yOiAjMDc1YWM5O1xuJHByaW1hcnktd2Vic2l0ZS1jb2xvci1saWdodDogIzlmYzBlYztcbiRzZWNvbmRhcnktd2Vic2l0ZS1jb2xvcjogIzA4NGNhNTtcbiR0ZXJ0aWFyeS13ZWJzaXRlLWNvbG9yOiByZ2JhKDI1NSwyNTUsMCwxKTtcbiRwcmltYXJ5LXRleHQ6ICM0NDQ0NDQ7XG5cbiRzZWNvbmRhcnktYmc6ICNmY2ZjZmM7XG4kc2Vjb25kYXJ5LWJvcmRlcjogI2U5ZWNlZjtcblxuJHByaW1hcnktcmVkOiAjZjUyYjJiO1xuJHByaW1hcnktcmVkLWxpZ2h0OiAjZWVhNGE0O1xuXG5cblxuLyogSW5mbyBCYXNlZCAqL1xuJGNvbG9yLW5vdGlmeTogI2ZmYzEwNztcbiRjb2xvci1pbmZvOiAjMzVjN2RmO1xuXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuLyoqIEdyYXkgU2hhZGVzICoqL1xuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcbiRncmV5LXNoYWRlLTI6ICNjZWNlY2U7XG4kZ3JleS1zaGFkZS0zOiAjZmVmZWZlO1xuJGZhLWZvbnQtcGF0aDogXCJ+Zm9udC1hd2Vzb21lL2ZvbnRzL1wiO1xuIiwiLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAuMXJlbSBzb2xpZCBibGFjaztcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxLjJyZW0gM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMHJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuXG4gICY6aG92ZXJ7XG5cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMS4ycmVtIDNyZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDFweCAycHggMXB4IHRyYW5zcGFyZW50IGluc2V0LFxuICAgIDAgMThweCAzMnB4IC0ycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcblxuICB9XG5cbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgfVxuXG4gICY6YWN0aXZlLCY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCkgc2NhbGUoMC45Nik7XG4gICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoYmxhY2ssIC4yKTsgLyooZGlyZWN0aW9uIHNoYWRvdyBibHVyIGNvbG9yKSovXG4gIH1cblxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMDAlLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuLnNsaWRlSW5Eb3duIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xufVxuXG4uZmFkZUluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmFsZXJ0LW1zZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xuICB0b3A6IDEzcmVtO1xuICB6LWluZGV4OiAxMDA7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA3cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDhyZW07XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xufVxufVxuIiwiQGltcG9ydCBcInNyYy9zdHlsZXMvaW1wb3J0c1wiO1xuXG5cbi5zbGlkZXNob3ctYWRkIHtcbiAgQGluY2x1ZGUgZmxleChjb2x1bW4pO1xuICBwYWRkaW5nOiAzcmVtO1xuXG4gIC5pbWFnZS1ob2xkZXIge1xuICAgIHBhZGRpbmc6IDRyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgICBAaW5jbHVkZSBmbGV4LWFsaWdubWVudChjZW50ZXIsIGNlbnRlcik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggNXB4ICNmMWYxZjE7XG4gICAgfVxuICB9XG5cbiAgLnByb2R1Y3Qtc2VsZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgICBAaW5jbHVkZSBmbGV4LWFsaWdubWVudChmbGV4LXN0YXJ0LCBjZW50ZXIpO1xuXG4gICAgaDIge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5zZWxlY3RlZC1pdGVtIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuXG4gICAgJl9fYm94IHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuICB9XG59XG4iLCJcbkBrZXlmcmFtZXMgbW92ZUluQm90dG9tIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZUluVG9wIHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xuICB9XG59XG4iLCJAbWl4aW4gdHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGZsZXgoJGRpcmVjdGlvbikge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZsZXgtYWxpZ25tZW50KCRtYWluLWF4aXMsICRjcm9zcy1heGlzKSB7XG4gIGp1c3RpZnktY29udGVudDogJG1haW4tYXhpcztcbiAgYWxpZ24taXRlbXM6ICRjcm9zcy1heGlzO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminSlideshowAddComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-admin-slideshow-add',
            templateUrl: './admin-slideshow-add.component.html',
            styleUrls: ['./admin-slideshow-add.component.scss']
          }]
        }], function () {
          return [{
            type: _core_http_slideshow_api_service__WEBPACK_IMPORTED_MODULE_3__["SlideshowApiService"]
          }, {
            type: _core_http_product_api_service__WEBPACK_IMPORTED_MODULE_4__["ProductApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _core_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
          }, {
            type: _firebase_storage_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseStorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jzG7":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/admin/admin-testimonies/add-testimonies/add-testimonies.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: AddTestimoniesComponent */

    /***/
    function jzG7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddTestimoniesComponent", function () {
        return AddTestimoniesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_http_testimony_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/http/testimony-api.service */
      "WMln");
      /* harmony import */


      var _core_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/services/utility.service */
      "qeeY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _firebase_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../firebase-storage.service */
      "AXPk");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AddTestimoniesComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddTestimoniesComponent_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

            return _r1.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Select image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddTestimoniesComponent_img_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddTestimoniesComponent_img_6_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

            return _r1.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.selectedImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      var AddTestimoniesComponent = /*#__PURE__*/function () {
        function AddTestimoniesComponent(testimonyApiService, utilityService, router, storageService) {
          _classCallCheck(this, AddTestimoniesComponent);

          this.testimonyApiService = testimonyApiService;
          this.utilityService = utilityService;
          this.router = router;
          this.storageService = storageService;
        }

        _createClass(AddTestimoniesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              customer_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
              testimony: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            });
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            var _this16 = this;

            var file = event.target.files[0];
            this.file = file;
            var reader = new FileReader();

            reader.onload = function (_) {
              return _this16.selectedImage = reader.result;
            };

            reader.readAsDataURL(file);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this17 = this;

              var image_url, data;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.storageService.uploadFile(this.file, 'testimonies');

                    case 2:
                      image_url = _context5.sent;
                      data = Object.assign(Object.assign({}, this.form.value), {
                        image: image_url
                      });
                      this.utilityService.showLoader.next(true);
                      this.testimonyApiService.addTestimony(data).subscribe(function (res) {
                        _this17.utilityService.showLoader.next(false);

                        _this17.router.navigate(['/', 'private-path', 'admin', 'testimonies']);
                      }, function (err) {
                        return _this17.utilityService.showLoader.next(false);
                      });

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return AddTestimoniesComponent;
      }();

      AddTestimoniesComponent.ɵfac = function AddTestimoniesComponent_Factory(t) {
        return new (t || AddTestimoniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_http_testimony_api_service__WEBPACK_IMPORTED_MODULE_3__["TestimonyApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_firebase_storage_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseStorageService"]));
      };

      AddTestimoniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddTestimoniesComponent,
        selectors: [["app-add-testimonies"]],
        decls: 19,
        vars: 3,
        consts: [[1, "add-testimony", 3, "formGroup", "ngSubmit"], [1, "add-testimony__container"], [1, "image-container"], ["class", "image-holder", 3, "click", 4, "ngIf"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["image", ""], ["alt", "selected image", "style", "object-fit: contain", "width", "300", "height", "200", 3, "src", "click", 4, "ngIf"], [1, "field-container"], [1, "form-group"], ["for", "customerName"], ["id", "customerName", "formControlName", "customer_name", "placeholder", "Customer name", 1, "form-control", "form-control-lg"], ["for", "testimony"], ["rows", "5", "id", "testimony", "formControlName", "testimony", "placeholder", "Testimony", 1, "form-control", "form-control-lg"], [2, "display", "flex", "flex-direction", "column"], [1, "btn", "primary-button", 2, "align-self", "flex-end"], [1, "image-holder", 3, "click"], ["alt", "selected image", "width", "300", "height", "200", 2, "object-fit", "contain", 3, "src", "click"]],
        template: function AddTestimoniesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddTestimoniesComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddTestimoniesComponent_div_3_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddTestimoniesComponent_Template_input_change_4_listener($event) {
              return ctx.onChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AddTestimoniesComponent_img_6_Template, 1, 1, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Testimony");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "textarea", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedImage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedImage);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.add-testimony[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n.add-testimony__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.add-testimony__container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 3rem;\n}\n.add-testimony__container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background-color: #f1f1f1;\n  height: 100%;\n  width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n}\n.add-testimony__container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 2px 4px 5px #f1f1f1;\n}\n.add-testimony__container[_ngcontent-%COMP%]   .field-container[_ngcontent-%COMP%] {\n  width: 70%;\n  padding: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9fY29tbW9uLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW4tdGVzdGltb25pZXMvYWRkLXRlc3RpbW9uaWVzL2FkZC10ZXN0aW1vbmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvX2FuaW1hdGlvbnMuc2NzcyIsInNyYy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLGVBQUE7QUFJQSxtQkFBQTtBQUdBLGtCQUFBO0FDckJBO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0lGO0FERkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDSUo7QURBQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0dGO0FEREU7RUFFRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSwyREFBQTtFQUNBLG1LQUFBO0VBRUEsMkJBQUE7QUNDSjtBREdFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSw0Q0FBQTtFQUEwQyxnQ0FBQTtBQ0Q5QztBRE1BO0VBQ0U7SUFDRSxVQUFBO0VDSEY7RURNQTtJQUNFLFVBQUE7RUNKRjtBQUNGO0FET0E7RUFDRTtJQUNFLFVBQUE7RUNMRjtFRFFBO0lBQ0UsVUFBQTtFQ05GO0FBQ0Y7QURTQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSwrQkFBQTtFQ1JGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSwrQkFBQTtFQ1JGO0FBQ0Y7QURXQTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUNURjtBRFlBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ1RGO0FEWUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ1RGO0FEWUE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNURjtBRFlBO0VBQ0UsaUJBQUE7QUNURjtBRFlBO0VBRUE7SUFDRSxpQkFBQTtFQ1ZBO0FBQ0Y7QURhQTtFQUVBO0lBQ0UsaUJBQUE7RUNaQTtBQUNGO0FDN0dBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0Esd0JBQUE7RUQrR0o7QUFDRjtBQ3ZIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VEK0dKO0FBQ0Y7QUM3R0E7RUFDRTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFRCtHSjtFQzdHQTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFRCtHSjtBQUNGO0FDdkhBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7QUFDRjtBQWhJQTtFQUNFLGFBQUE7QUFrSUY7QUFoSUU7RUVFQSxhQUFBO0VBQ0EsbUJGRmdCO0FBbUlsQjtBQWpJSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBbUlOO0FBaklNO0VFTEosYUFBQTtFQUNBLG1CRktvQjtFRURwQix1QkZFOEI7RUVEOUIsbUJGQ3NDO0VBQ2hDLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUFxSVI7QUFuSVE7RUFDRSxtQ0FBQTtBQXFJVjtBQWhJSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBa0lOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZG1pbi10ZXN0aW1vbmllcy9hZGQtdGVzdGltb25pZXMvYWRkLXRlc3RpbW9uaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktd2Vic2l0ZS1jb2xvcjogIzA3NWFjOTtcbiRwcmltYXJ5LXdlYnNpdGUtY29sb3ItbGlnaHQ6ICM5ZmMwZWM7XG4kc2Vjb25kYXJ5LXdlYnNpdGUtY29sb3I6ICMwODRjYTU7XG4kdGVydGlhcnktd2Vic2l0ZS1jb2xvcjogcmdiYSgyNTUsMjU1LDAsMSk7XG4kcHJpbWFyeS10ZXh0OiAjNDQ0NDQ0O1xuXG4kc2Vjb25kYXJ5LWJnOiAjZmNmY2ZjO1xuJHNlY29uZGFyeS1ib3JkZXI6ICNlOWVjZWY7XG5cbiRwcmltYXJ5LXJlZDogI2Y1MmIyYjtcbiRwcmltYXJ5LXJlZC1saWdodDogI2VlYTRhNDtcblxuXG5cbi8qIEluZm8gQmFzZWQgKi9cbiRjb2xvci1ub3RpZnk6ICNmZmMxMDc7XG4kY29sb3ItaW5mbzogIzM1YzdkZjtcblxuLyogUHJvcGVydHkgQmFzZWQgKi9cbiRjb2xvci13aGl0ZTogd2hpdGU7XG5cbi8qKiBHcmF5IFNoYWRlcyAqKi9cbiRncmV5LXNoYWRlLTE6ICNmMWYxZjE7XG4kZ3JleS1zaGFkZS0yOiAjY2VjZWNlO1xuJGdyZXktc2hhZGUtMzogI2ZlZmVmZTtcbiRmYS1mb250LXBhdGg6IFwifmZvbnQtYXdlc29tZS9mb250cy9cIjtcbiIsIi5sb2FkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiA5OTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4ucHJpbWFyeS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogLjFyZW0gc29saWQgYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMS4ycmVtIDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDByZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcblxuICAmOmhvdmVye1xuXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEuMnJlbSAzcmVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMnB4IDFweCB0cmFuc3BhcmVudCBpbnNldCxcbiAgICAwIDE4cHggMzJweCAtMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSBpbnNldDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG5cbiAgfVxuXG4gIC5mYSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIH1cblxuICAmOmFjdGl2ZSwmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpIHNjYWxlKDAuOTYpO1xuICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKGJsYWNrLCAuMik7IC8qKGRpcmVjdGlvbiBzaGFkb3cgYmx1ciBjb2xvcikqL1xuICB9XG5cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwJSwgMCk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbi5zbGlkZUluRG93biB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluRG93bjtcbn1cblxuLmZhZGVJbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbn1cblxuLmFuaW1hdGVkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5hbGVydC1tc2cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiBjYWxjKDUwJSAtIDE1MHB4KTtcbiAgdG9wOiAxM3JlbTtcbiAgei1pbmRleDogMTAwO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogN3JlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA4cmVtO1xufVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cbn1cbiIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9pbXBvcnRzXCI7XG5cbi5hZGQtdGVzdGltb255IHtcbiAgcGFkZGluZzogM3JlbTtcblxuICAmX19jb250YWluZXIge1xuICAgIEBpbmNsdWRlIGZsZXgocm93KTtcblxuICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIHBhZGRpbmc6IDNyZW07XG5cbiAgICAgIC5pbWFnZS1ob2xkZXJ7XG4gICAgICAgIEBpbmNsdWRlIGZsZXgocm93KTtcbiAgICAgICAgQGluY2x1ZGUgZmxleC1hbGlnbm1lbnQoY2VudGVyLCBjZW50ZXIpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLCAwLjMpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggNXB4ICNmMWYxZjE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmllbGQtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBwYWRkaW5nOiAzcmVtO1xuICAgIH1cbiAgfVxufVxuIiwiXG5Aa2V5ZnJhbWVzIG1vdmVJbkJvdHRvbSB7XG4gIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVJblRvcCB7XG4gIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcbiAgfVxufVxuIiwiQG1peGluIHRydW5jYXRlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb24pIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmbGV4LWFsaWdubWVudCgkbWFpbi1heGlzLCAkY3Jvc3MtYXhpcykge1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRtYWluLWF4aXM7XG4gIGFsaWduLWl0ZW1zOiAkY3Jvc3MtYXhpcztcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddTestimoniesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-add-testimonies',
            templateUrl: './add-testimonies.component.html',
            styleUrls: ['./add-testimonies.component.scss']
          }]
        }], function () {
          return [{
            type: _core_http_testimony_api_service__WEBPACK_IMPORTED_MODULE_3__["TestimonyApiService"]
          }, {
            type: _core_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _firebase_storage_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseStorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "q/0M":
    /*!*********************************************************!*\
      !*** ./node_modules/@firebase/logger/dist/index.esm.js ***!
      \*********************************************************/

    /*! exports provided: LogLevel, Logger, setLogLevel, setUserLogHandler */

    /***/
    function q0M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogLevel", function () {
        return LogLevel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Logger", function () {
        return Logger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setLogLevel", function () {
        return setLogLevel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setUserLogHandler", function () {
        return setUserLogHandler;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
      
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
      
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** */


      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var _a;
      /**
       * A container for all of the Logger instances
       */


      var instances = [];
      /**
       * The JS SDK supports 5 log levels and also allows a user the ability to
       * silence the logs altogether.
       *
       * The order is a follows:
       * DEBUG < VERBOSE < INFO < WARN < ERROR
       *
       * All of the log types above the current log level will be captured (i.e. if
       * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
       * `VERBOSE` logs will not)
       */

      var LogLevel;

      (function (LogLevel) {
        LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
        LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
        LogLevel[LogLevel["INFO"] = 2] = "INFO";
        LogLevel[LogLevel["WARN"] = 3] = "WARN";
        LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
        LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
      })(LogLevel || (LogLevel = {}));

      var levelStringToEnum = {
        'debug': LogLevel.DEBUG,
        'verbose': LogLevel.VERBOSE,
        'info': LogLevel.INFO,
        'warn': LogLevel.WARN,
        'error': LogLevel.ERROR,
        'silent': LogLevel.SILENT
      };
      /**
       * The default log level
       */

      var defaultLogLevel = LogLevel.INFO;
      /**
       * By default, `console.debug` is not displayed in the developer console (in
       * chrome). To avoid forcing users to have to opt-in to these logs twice
       * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
       * logs to the `console.log` function.
       */

      var ConsoleMethod = (_a = {}, _a[LogLevel.DEBUG] = 'log', _a[LogLevel.VERBOSE] = 'log', _a[LogLevel.INFO] = 'info', _a[LogLevel.WARN] = 'warn', _a[LogLevel.ERROR] = 'error', _a);
      /**
       * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
       * messages on to their corresponding console counterparts (if the log method
       * is supported by the current log level)
       */

      var defaultLogHandler = function defaultLogHandler(instance, logType) {
        var args = [];

        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }

        if (logType < instance.logLevel) {
          return;
        }

        var now = new Date().toISOString();
        var method = ConsoleMethod[logType];

        if (method) {
          console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
        } else {
          throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
        }
      };

      var Logger =
      /** @class */
      function () {
        /**
         * Gives you an instance of a Logger to capture messages according to
         * Firebase's logging scheme.
         *
         * @param name The name that the logs will be associated with
         */
        function Logger(name) {
          this.name = name;
          /**
           * The log level of the given Logger instance.
           */

          this._logLevel = defaultLogLevel;
          /**
           * The main (internal) log handler for the Logger instance.
           * Can be set to a new function in internal package code but not by user.
           */

          this._logHandler = defaultLogHandler;
          /**
           * The optional, additional, user-defined log handler for the Logger instance.
           */

          this._userLogHandler = null;
          /**
           * Capture the current instance for later use
           */

          instances.push(this);
        }

        Object.defineProperty(Logger.prototype, "logLevel", {
          get: function get() {
            return this._logLevel;
          },
          set: function set(val) {
            if (!(val in LogLevel)) {
              throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
            }

            this._logLevel = val;
          },
          enumerable: true,
          configurable: true
        }); // Workaround for setter/getter having to be the same type.

        Logger.prototype.setLogLevel = function (val) {
          this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
        };

        Object.defineProperty(Logger.prototype, "logHandler", {
          get: function get() {
            return this._logHandler;
          },
          set: function set(val) {
            if (typeof val !== 'function') {
              throw new TypeError('Value assigned to `logHandler` must be a function');
            }

            this._logHandler = val;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Logger.prototype, "userLogHandler", {
          get: function get() {
            return this._userLogHandler;
          },
          set: function set(val) {
            this._userLogHandler = val;
          },
          enumerable: true,
          configurable: true
        });
        /**
         * The functions below are all based on the `console` interface
         */

        Logger.prototype.debug = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));

          this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
        };

        Logger.prototype.log = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));

          this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
        };

        Logger.prototype.info = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));

          this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
        };

        Logger.prototype.warn = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));

          this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
        };

        Logger.prototype.error = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));

          this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
        };

        return Logger;
      }();

      function setLogLevel(level) {
        instances.forEach(function (inst) {
          inst.setLogLevel(level);
        });
      }

      function setUserLogHandler(logCallback, options) {
        var _loop_1 = function _loop_1(instance) {
          var customLogLevel = null;

          if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
          }

          if (logCallback === null) {
            instance.userLogHandler = null;
          } else {
            instance.userLogHandler = function (instance, level) {
              var args = [];

              for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
              }

              var message = args.map(function (arg) {
                if (arg == null) {
                  return null;
                } else if (typeof arg === 'string') {
                  return arg;
                } else if (typeof arg === 'number' || typeof arg === 'boolean') {
                  return arg.toString();
                } else if (arg instanceof Error) {
                  return arg.message;
                } else {
                  try {
                    return JSON.stringify(arg);
                  } catch (ignored) {
                    return null;
                  }
                }
              }).filter(function (arg) {
                return arg;
              }).join(' ');

              if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                logCallback({
                  level: LogLevel[level].toLowerCase(),
                  message: message,
                  args: args,
                  type: instance.name
                });
              }
            };
          }
        };

        for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
          var instance = instances_1[_i];

          _loop_1(instance);
        }
      } //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "spgP":
    /*!**************************************************************************!*\
      !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js ***!
      \**************************************************************************/

    /*! exports provided: AngularFireModule, FIREBASE_APP_NAME, FIREBASE_OPTIONS, FirebaseApp, VERSION, ɵAngularFireSchedulers, ɵBlockUntilFirstOperator, ɵZoneScheduler, ɵfirebaseAppFactory, ɵkeepUnstableUntilFirstFactory, ɵlazySDKProxy */

    /***/
    function spgP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFireModule", function () {
        return AngularFireModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FIREBASE_APP_NAME", function () {
        return FIREBASE_APP_NAME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FIREBASE_OPTIONS", function () {
        return FIREBASE_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseApp", function () {
        return FirebaseApp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵAngularFireSchedulers", function () {
        return ɵAngularFireSchedulers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵBlockUntilFirstOperator", function () {
        return ɵBlockUntilFirstOperator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵZoneScheduler", function () {
        return ɵZoneScheduler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵfirebaseAppFactory", function () {
        return ɵfirebaseAppFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵkeepUnstableUntilFirstFactory", function () {
        return ɵkeepUnstableUntilFirstFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵlazySDKProxy", function () {
        return ɵlazySDKProxy;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @return {?}
       */


      function noop() {}
      /**
       * Schedules tasks so that they are invoked inside the Zone that is passed in the constructor.
       */


      var ɵZoneScheduler = /*#__PURE__*/function () {
        /**
         * @param {?} zone
         * @param {?=} delegate
         */
        function ɵZoneScheduler(zone) {
          var delegate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : rxjs__WEBPACK_IMPORTED_MODULE_0__["queueScheduler"];

          _classCallCheck(this, ɵZoneScheduler);

          this.zone = zone;
          this.delegate = delegate;
        }
        /**
         * @return {?}
         */


        _createClass(ɵZoneScheduler, [{
          key: "now",
          value: function now() {
            return this.delegate.now();
          }
          /**
           * @param {?} work
           * @param {?=} delay
           * @param {?=} state
           * @return {?}
           */

        }, {
          key: "schedule",
          value: function schedule(work, delay, state) {
            /** @type {?} */
            var targetZone = this.zone; // Wrap the specified work function to make sure that if nested scheduling takes place the
            // work is executed in the correct zone

            /** @type {?} */

            var workInZone =
            /**
            * @this {?}
            * @param {?} state
            * @return {?}
            */
            function workInZone(state) {
              var _this18 = this;

              targetZone.runGuarded(
              /**
              * @return {?}
              */
              function () {
                work.apply(_this18, [state]);
              });
            } // Scheduling itself needs to be run in zone to ensure setInterval calls for async scheduling are done
            // inside the correct zone. This scheduler needs to schedule asynchronously always to ensure that
            // firebase emissions are never synchronous. Specifying a delay causes issues with the queueScheduler delegate.
            ; // Scheduling itself needs to be run in zone to ensure setInterval calls for async scheduling are done
            // inside the correct zone. This scheduler needs to schedule asynchronously always to ensure that
            // firebase emissions are never synchronous. Specifying a delay causes issues with the queueScheduler delegate.


            return this.delegate.schedule(workInZone, delay, state);
          }
        }]);

        return ɵZoneScheduler;
      }();

      if (false) {}
      /**
       * @template T
       */


      var ɵBlockUntilFirstOperator = /*#__PURE__*/function () {
        /**
         * @param {?} zone
         */
        function ɵBlockUntilFirstOperator(zone) {
          _classCallCheck(this, ɵBlockUntilFirstOperator);

          this.zone = zone;
          this.task = null;
        }
        /**
         * @param {?} subscriber
         * @param {?} source
         * @return {?}
         */


        _createClass(ɵBlockUntilFirstOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            /** @type {?} */
            var unscheduleTask = this.unscheduleTask.bind(this);
            this.task = this.zone.run(
            /**
            * @return {?}
            */
            function () {
              return Zone.current.scheduleMacroTask('firebaseZoneBlock', noop, {}, noop, noop);
            });
            return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(unscheduleTask, unscheduleTask, unscheduleTask)).subscribe(subscriber).add(unscheduleTask);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "unscheduleTask",
          value: function unscheduleTask() {
            var _this19 = this;

            // maybe this is a race condition, invoke in a timeout
            // hold for 10ms while I try to figure out what is going on    
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              if (_this19.task != null && _this19.task.state === 'scheduled') {
                _this19.task.invoke();

                _this19.task = null;
              }
            }, 10);
          }
        }]);

        return ɵBlockUntilFirstOperator;
      }();

      if (false) {}

      var ɵAngularFireSchedulers =
      /**
       * @param {?} ngZone
       */
      function ɵAngularFireSchedulers(ngZone) {
        _classCallCheck(this, ɵAngularFireSchedulers);

        this.ngZone = ngZone;
        this.outsideAngular = ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          return new ɵZoneScheduler(Zone.current);
        });
        this.insideAngular = ngZone.run(
        /**
        * @return {?}
        */
        function () {
          return new ɵZoneScheduler(Zone.current, rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"]);
        });
      };

      if (false) {}
      /**
       * Operator to block the zone until the first value has been emitted or the observable
       * has completed/errored. This is used to make sure that universal waits until the first
       * value from firebase but doesn't block the zone forever since the firebase subscription
       * is still alive.
       * @param {?} schedulers
       * @param {?} platformId
       * @return {?}
       */


      function ɵkeepUnstableUntilFirstFactory(schedulers, platformId) {
        return (
          /**
          * @template T
          * @param {?} obs$
          * @return {?}
          */
          function keepUnstableUntilFirst(obs$) {
            obs$ = obs$.lift(new ɵBlockUntilFirstOperator(schedulers.ngZone));
            return obs$.pipe( // Run the subscribe body outside of Angular (e.g. calling Firebase SDK to add a listener to a change event)
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["subscribeOn"])(schedulers.outsideAngular), // Run operators inside the angular zone (e.g. side effects via tap())
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(schedulers.insideAngular) // INVESTIGATE https://github.com/angular/angularfire/pull/2315
            // share()
            );
          }
        );
      } // DEBUG quick debugger function for inline logging that typescript doesn't complain about
      //       wrote it for debugging the ɵlazySDKProxy, commenting out for now; should consider exposing a
      //       verbose mode for AngularFire in a future release that uses something like this in multiple places
      //       usage: () => log('something') || returnValue
      // const log = (...args: any[]): false => { console.log(...args); return false }
      // The problem here are things like ngOnDestroy are missing, then triggering the service
      // rather than dig too far; I'm capturing these as I go.

      /** @type {?} */


      var noopFunctions = ['ngOnDestroy']; // INVESTIGATE should we make the Proxy revokable and do some cleanup?
      //             right now it's fairly simple but I'm sure this will grow in complexity

      /** @type {?} */

      var ɵlazySDKProxy =
      /**
      * @param {?} klass
      * @param {?} observable
      * @param {?} zone
      * @return {?}
      */
      function ɵlazySDKProxy(klass, observable, zone) {
        return new Proxy(klass, {
          get:
          /**
          * @param {?} _
          * @param {?} name
          * @return {?}
          */
          function get(_, name) {
            return zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              if (klass[name]) {
                return klass[name];
              }

              if (noopFunctions.includes(name)) {
                return (
                  /**
                  * @return {?}
                  */
                  function () {}
                );
              }
              /** @type {?} */


              var promise = observable.toPromise().then(
              /**
              * @param {?} mod
              * @return {?}
              */
              function (mod) {
                /** @type {?} */
                var ret = mod && mod[name]; // TODO move to proper type guards

                if (typeof ret == 'function') {
                  return ret.bind(mod);
                } else if (ret && ret.then) {
                  return ret.then(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    return zone.run(
                    /**
                    * @return {?}
                    */
                    function () {
                      return res;
                    });
                  });
                } else {
                  return zone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    return ret;
                  });
                }
              }); // recurse the proxy

              return new Proxy(
              /**
              * @return {?}
              */
              function () {
                return undefined;
              }, {
                get:
                /**
                * @param {?} _
                * @param {?} name
                * @return {?}
                */
                function get(_, name) {
                  return promise[name];
                },
                // TODO handle callbacks as transparently as I can 
                apply:
                /**
                * @param {?} self
                * @param {?} _
                * @param {?} args
                * @return {?}
                */
                function apply(self, _, args) {
                  return promise.then(
                  /**
                  * @param {?} it
                  * @return {?}
                  */
                  function (it) {
                    return it && it.apply(void 0, _toConsumableArray(args));
                  });
                }
              });
            });
          }
        });
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function FirebaseOptions() {}

      ;
      /**
       * @record
       */

      function FirebaseAppConfig() {}

      ;
      /** @type {?} */

      var FIREBASE_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.app.options');
      /** @type {?} */

      var FIREBASE_APP_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.app.nameOrConfig'); // Have to implement as we need to return a class from the provider, we should consider exporting
      // this in the firebase/app types as this is our highest risk of breaks

      var FirebaseApp = function FirebaseApp() {
        _classCallCheck(this, FirebaseApp);
      };

      if (false) {}
      /** @type {?} */


      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Version"]('6.0.0');
      /**
       * @param {?} options
       * @param {?} zone
       * @param {?=} nameOrConfig
       * @return {?}
       */

      function ɵfirebaseAppFactory(options, zone, nameOrConfig) {
        /** @type {?} */
        var name = typeof nameOrConfig === 'string' && nameOrConfig || '[DEFAULT]';
        /** @type {?} */

        var config = typeof nameOrConfig === 'object' && nameOrConfig || {};
        config.name = config.name || name; // Added any due to some inconsistency between @firebase/app and firebase types

        /** @type {?} */

        var existingApp =
        /** @type {?} */
        firebase_app__WEBPACK_IMPORTED_MODULE_3__["apps"].filter(
        /**
        * @param {?} app
        * @return {?}
        */
        function (app) {
          return app && app.name === config.name;
        })[0]; // We support FirebaseConfig, initializeApp's public type only accepts string; need to cast as any
        // Could be solved with https://github.com/firebase/firebase-js-sdk/pull/1206

        return (
          /** @type {?} */
          existingApp || zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Object(firebase_app__WEBPACK_IMPORTED_MODULE_3__["initializeApp"])(options,
            /** @type {?} */
            config);
          })
        );
      }
      /** @type {?} */


      var FirebaseAppProvider = {
        provide: FirebaseApp,
        useFactory: ɵfirebaseAppFactory,
        deps: [FIREBASE_OPTIONS, _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), FIREBASE_APP_NAME]]
      };

      var AngularFireModule = /*#__PURE__*/function () {
        /**
         * @param {?} platformId
         */
        function AngularFireModule(platformId) {
          _classCallCheck(this, AngularFireModule);

          Object(firebase_app__WEBPACK_IMPORTED_MODULE_3__["registerVersion"])('angularfire', VERSION.full, platformId.toString());
          Object(firebase_app__WEBPACK_IMPORTED_MODULE_3__["registerVersion"])('angular', _angular_core__WEBPACK_IMPORTED_MODULE_2__["VERSION"].full);
        }
        /**
         * @param {?} options
         * @param {?=} nameOrConfig
         * @return {?}
         */


        _createClass(AngularFireModule, null, [{
          key: "initializeApp",
          value: function initializeApp(options, nameOrConfig) {
            return {
              ngModule: AngularFireModule,
              providers: [{
                provide: FIREBASE_OPTIONS,
                useValue: options
              }, {
                provide: FIREBASE_APP_NAME,
                useValue: nameOrConfig
              }]
            };
          }
        }]);

        return AngularFireModule;
      }();

      AngularFireModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AngularFireModule
      });
      AngularFireModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AngularFireModule_Factory(t) {
          return new (t || AngularFireModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]));
        },
        providers: [FirebaseAppProvider]
      });
      /** @nocollapse */

      AngularFireModule.ctorParameters = function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AngularFireModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            providers: [FirebaseAppProvider]
          }]
        }], function () {
          return [{
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-fire.js.map

      /***/

    },

    /***/
    "t+Z7":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/admin/admin-testimonies/admin-testimonies.component.ts ***!
      \********************************************************************************/

    /*! exports provided: AdminTestimoniesComponent */

    /***/
    function tZ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminTestimoniesComponent", function () {
        return AdminTestimoniesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_http_testimony_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/http/testimony-api.service */
      "WMln");
      /* harmony import */


      var _core_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/services/utility.service */
      "qeeY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function AdminTestimoniesComponent_table_0_tr_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminTestimoniesComponent_table_0_tr_10_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var testimony_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.deleteItem(testimony_r4._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var testimony_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", testimony_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", testimony_r4.customer_name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](testimony_r4.testimony);
        }
      }

      function AdminTestimoniesComponent_table_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Testimony");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdminTestimoniesComponent_table_0_tr_10_Template, 9, 3, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.list);
        }
      }

      function AdminTestimoniesComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No testimonies yet!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AdminTestimoniesComponent = /*#__PURE__*/function () {
        function AdminTestimoniesComponent(testimonyApiService, utilityService) {
          _classCallCheck(this, AdminTestimoniesComponent);

          this.testimonyApiService = testimonyApiService;
          this.utilityService = utilityService;
          this.list = [];
        }

        _createClass(AdminTestimoniesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetchTestimonies();
          }
        }, {
          key: "fetchTestimonies",
          value: function fetchTestimonies() {
            var _this20 = this;

            this.utilityService.showLoader.next(true);
            this.testimonyApiService.getTestimonies().subscribe(function (res) {
              if (res) {
                _this20.list = res;
              }

              _this20.utilityService.showLoader.next(false);
            }, function (err) {
              return _this20.utilityService.showLoader.next(false);
            });
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(testimony) {
            this.seletectTestimony = testimony;
          }
        }, {
          key: "onDelete",
          value: function onDelete() {
            var _this21 = this;

            this.utilityService.showLoader.next(true);
            this.testimonyApiService.deleteTestimony(this.seletectTestimony).subscribe(function (res) {
              console.log('testimony deleted');

              _this21.utilityService.showLoader.next(false);

              _this21.fetchTestimonies();
            }, function (err) {
              return _this21.utilityService.showLoader.next(false);
            });
          }
        }]);

        return AdminTestimoniesComponent;
      }();

      AdminTestimoniesComponent.ɵfac = function AdminTestimoniesComponent_Factory(t) {
        return new (t || AdminTestimoniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_testimony_api_service__WEBPACK_IMPORTED_MODULE_1__["TestimonyApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]));
      };

      AdminTestimoniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminTestimoniesComponent,
        selectors: [["admin-testimonies"]],
        decls: 22,
        vars: 2,
        consts: [["class", "table", 4, "ngIf", "ngIfElse"], ["noTestimony", ""], ["id", "confirmationModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "add-button"], ["routerLink", "add", 1, "btn", "primary-button"], [1, "table"], ["scope", "col"], ["class", "product", 4, "ngFor", "ngForOf"], [1, "product"], ["width", "60", "height", "60", "alt", "image", 2, "object-fit", "contain", 3, "src"], ["type", "button", "data-toggle", "modal", "data-target", "#confirmationModal", 1, "btn", 2, "outline", "none", "box-shadow", "none", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash", 2, "font-size", "25px", "width", "25px", "height", "25px", "color", "red"], [1, "text-center", "cart-empty"], [1, "text-muted"]],
        template: function AdminTestimoniesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminTestimoniesComponent_table_0_Template, 11, 1, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminTestimoniesComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Confirm deletion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Do you want to delete ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminTestimoniesComponent_Template_button_click_17_listener() {
              return ctx.onDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add testimony");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 0)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.table[_ngcontent-%COMP%] {\n  border-color: #075ac9;\n  margin: 3rem;\n  width: 95%;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  border: 0.1rem solid #075ac9;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background-color: #075ac9;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  color: white;\n  font-weight: bold;\n  border-color: #075ac9;\n  max-width: 13rem;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  border: 0.1rem solid #cecece;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 1.5rem;\n  max-width: 13rem;\n}\n.add-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 4rem;\n  right: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9fY29tbW9uLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW4tdGVzdGltb25pZXMvYWRtaW4tdGVzdGltb25pZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL19hbmltYXRpb25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0EsZUFBQTtBQUlBLG1CQUFBO0FBR0Esa0JBQUE7QUNyQkE7RUFDRSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDSUY7QURGRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNJSjtBREFBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDR0Y7QURERTtFQUVFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDJEQUFBO0VBQ0EsbUtBQUE7RUFFQSwyQkFBQTtBQ0NKO0FER0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDREo7QURJRTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLDRDQUFBO0VBQTBDLGdDQUFBO0FDRDlDO0FETUE7RUFDRTtJQUNFLFVBQUE7RUNIRjtFRE1BO0lBQ0UsVUFBQTtFQ0pGO0FBQ0Y7QURPQTtFQUNFO0lBQ0UsVUFBQTtFQ0xGO0VEUUE7SUFDRSxVQUFBO0VDTkY7QUFDRjtBRFNBO0VBQ0U7SUFDRSxtQ0FBQTtJQUNBLG1CQUFBO0VDUEY7RURVQTtJQUNFLCtCQUFBO0VDUkY7QUFDRjtBREFBO0VBQ0U7SUFDRSxtQ0FBQTtJQUNBLG1CQUFBO0VDUEY7RURVQTtJQUNFLCtCQUFBO0VDUkY7QUFDRjtBRFdBO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtBQ1RGO0FEWUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0FDVEY7QURZQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDVEY7QURZQTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1RGO0FEWUE7RUFDRSxpQkFBQTtBQ1RGO0FEWUE7RUFFQTtJQUNFLGlCQUFBO0VDVkE7QUFDRjtBRGFBO0VBRUE7SUFDRSxpQkFBQTtFQ1pBO0FBQ0Y7QUM3R0E7RUFDRTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFRCtHSjtFQzdHQTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFRCtHSjtBQUNGO0FDdkhBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0Esd0JBQUE7RUQrR0o7QUFDRjtBQzdHQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0FBQ0Y7QUN2SEE7RUFDRTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFRCtHSjtFQzdHQTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFRCtHSjtBQUNGO0FBaElBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQWtJRjtBQWhJRTtFQUNFLDRCQUFBO0FBa0lKO0FBaklJO0VBQ0UseUJBQUE7QUFtSU47QUFoSUk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWtJTjtBQTlIRTtFQUNFLDRCQUFBO0FBZ0lKO0FBN0hFO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUErSEo7QUExSEE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUE2SEYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2FkbWluLXRlc3RpbW9uaWVzL2FkbWluLXRlc3RpbW9uaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktd2Vic2l0ZS1jb2xvcjogIzA3NWFjOTtcbiRwcmltYXJ5LXdlYnNpdGUtY29sb3ItbGlnaHQ6ICM5ZmMwZWM7XG4kc2Vjb25kYXJ5LXdlYnNpdGUtY29sb3I6ICMwODRjYTU7XG4kdGVydGlhcnktd2Vic2l0ZS1jb2xvcjogcmdiYSgyNTUsMjU1LDAsMSk7XG4kcHJpbWFyeS10ZXh0OiAjNDQ0NDQ0O1xuXG4kc2Vjb25kYXJ5LWJnOiAjZmNmY2ZjO1xuJHNlY29uZGFyeS1ib3JkZXI6ICNlOWVjZWY7XG5cbiRwcmltYXJ5LXJlZDogI2Y1MmIyYjtcbiRwcmltYXJ5LXJlZC1saWdodDogI2VlYTRhNDtcblxuXG5cbi8qIEluZm8gQmFzZWQgKi9cbiRjb2xvci1ub3RpZnk6ICNmZmMxMDc7XG4kY29sb3ItaW5mbzogIzM1YzdkZjtcblxuLyogUHJvcGVydHkgQmFzZWQgKi9cbiRjb2xvci13aGl0ZTogd2hpdGU7XG5cbi8qKiBHcmF5IFNoYWRlcyAqKi9cbiRncmV5LXNoYWRlLTE6ICNmMWYxZjE7XG4kZ3JleS1zaGFkZS0yOiAjY2VjZWNlO1xuJGdyZXktc2hhZGUtMzogI2ZlZmVmZTtcbiRmYS1mb250LXBhdGg6IFwifmZvbnQtYXdlc29tZS9mb250cy9cIjtcbiIsIi5sb2FkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiA5OTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4ucHJpbWFyeS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogLjFyZW0gc29saWQgYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMS4ycmVtIDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDByZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcblxuICAmOmhvdmVye1xuXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEuMnJlbSAzcmVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwNzVhYzksICMzNWM3ZGYpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMnB4IDFweCB0cmFuc3BhcmVudCBpbnNldCxcbiAgICAwIDE4cHggMzJweCAtMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSBpbnNldDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG5cbiAgfVxuXG4gIC5mYSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIH1cblxuICAmOmFjdGl2ZSwmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpIHNjYWxlKDAuOTYpO1xuICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKGJsYWNrLCAuMik7IC8qKGRpcmVjdGlvbiBzaGFkb3cgYmx1ciBjb2xvcikqL1xuICB9XG5cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwJSwgMCk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbi5zbGlkZUluRG93biB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluRG93bjtcbn1cblxuLmZhZGVJbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbn1cblxuLmFuaW1hdGVkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5hbGVydC1tc2cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiBjYWxjKDUwJSAtIDE1MHB4KTtcbiAgdG9wOiAxM3JlbTtcbiAgei1pbmRleDogMTAwO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogN3JlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA4cmVtO1xufVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXG4ubWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cbn1cbiIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9pbXBvcnRzXCI7XG5cbi50YWJsZSB7XG4gIGJvcmRlci1jb2xvcjogIzA3NWFjOTtcbiAgbWFyZ2luOiAzcmVtO1xuICB3aWR0aDogOTUlO1xuXG4gIHRoZWFkIHtcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjMDc1YWM5O1xuICAgIHRyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzVhYzk7XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBib3JkZXItY29sb3I6ICMwNzVhYzk7XG4gICAgICBtYXgtd2lkdGg6IDEzcmVtO1xuICAgIH1cbiAgfVxuXG4gIHRib2R5IHtcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAkZ3JleS1zaGFkZS0yO1xuICB9XG5cbiAgdGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIG1heC13aWR0aDogMTNyZW07XG4gIH1cbn1cblxuXG4uYWRkLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA0cmVtO1xuICByaWdodDogNHJlbTtcbn1cbiIsIlxuQGtleWZyYW1lcyBtb3ZlSW5Cb3R0b20ge1xuICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlSW5Ub3Age1xuICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSk7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminTestimoniesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'admin-testimonies',
            templateUrl: './admin-testimonies.component.html',
            styleUrls: ['./admin-testimonies.component.scss']
          }]
        }], function () {
          return [{
            type: _core_http_testimony_api_service__WEBPACK_IMPORTED_MODULE_1__["TestimonyApiService"]
          }, {
            type: _core_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "wj3C":
    /*!******************************************************!*\
      !*** ./node_modules/@firebase/app/dist/index.cjs.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function wj3C(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var tslib = __webpack_require__(
      /*! tslib */
      "30Go");

      var util = __webpack_require__(
      /*! @firebase/util */
      "zVF4");

      var component = __webpack_require__(
      /*! @firebase/component */
      "S+S0");

      var logger$1 = __webpack_require__(
      /*! @firebase/logger */
      "q/0M");
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var _a;

      var ERRORS = (_a = {}, _a["no-app"
      /* NO_APP */
      ] = "No Firebase App '{$appName}' has been created - " + 'call Firebase App.initializeApp()', _a["bad-app-name"
      /* BAD_APP_NAME */
      ] = "Illegal App name: '{$appName}", _a["duplicate-app"
      /* DUPLICATE_APP */
      ] = "Firebase App named '{$appName}' already exists", _a["app-deleted"
      /* APP_DELETED */
      ] = "Firebase App named '{$appName}' already deleted", _a["invalid-app-argument"
      /* INVALID_APP_ARGUMENT */
      ] = 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.', _a["invalid-log-argument"
      /* INVALID_LOG_ARGUMENT */
      ] = 'First argument to `onLog` must be null or a function.', _a);
      var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);
      var name$1 = "@firebase/app";
      var version = "0.6.5";
      var name$2 = "@firebase/analytics";
      var name$3 = "@firebase/auth";
      var name$4 = "@firebase/database";
      var name$5 = "@firebase/functions";
      var name$6 = "@firebase/installations";
      var name$7 = "@firebase/messaging";
      var name$8 = "@firebase/performance";
      var name$9 = "@firebase/remote-config";
      var name$a = "@firebase/storage";
      var name$b = "@firebase/firestore";
      var name$c = "firebase-wrapper";
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var _a$1;

      var DEFAULT_ENTRY_NAME = '[DEFAULT]';
      var PLATFORM_LOG_STRING = (_a$1 = {}, _a$1[name$1] = 'fire-core', _a$1[name$2] = 'fire-analytics', _a$1[name$3] = 'fire-auth', _a$1[name$4] = 'fire-rtdb', _a$1[name$5] = 'fire-fn', _a$1[name$6] = 'fire-iid', _a$1[name$7] = 'fire-fcm', _a$1[name$8] = 'fire-perf', _a$1[name$9] = 'fire-rc', _a$1[name$a] = 'fire-gcs', _a$1[name$b] = 'fire-fst', _a$1['fire-js'] = 'fire-js', _a$1[name$c] = 'fire-js-all', _a$1);
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var logger = new logger$1.Logger('@firebase/app');
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Global context object for a collection of services using
       * a shared authentication state.
       */

      var FirebaseAppImpl =
      /** @class */
      function () {
        function FirebaseAppImpl(options, config, firebase_) {
          var e_1, _a;

          var _this = this;

          this.firebase_ = firebase_;
          this.isDeleted_ = false;
          this.name_ = config.name;
          this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
          this.options_ = util.deepCopy(options);
          this.container = new component.ComponentContainer(config.name); // add itself to container

          this._addComponent(new component.Component('app', function () {
            return _this;
          }, "PUBLIC"
          /* PUBLIC */
          ));

          try {
            // populate ComponentContainer with existing components
            for (var _b = tslib.__values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var component$1 = _c.value;

              this._addComponent(component$1);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }

        Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
          get: function get() {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
          },
          set: function set(val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(FirebaseAppImpl.prototype, "name", {
          get: function get() {
            this.checkDestroyed_();
            return this.name_;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(FirebaseAppImpl.prototype, "options", {
          get: function get() {
            this.checkDestroyed_();
            return this.options_;
          },
          enumerable: true,
          configurable: true
        });

        FirebaseAppImpl.prototype["delete"] = function () {
          var _this = this;

          return new Promise(function (resolve) {
            _this.checkDestroyed_();

            resolve();
          }).then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);

            return Promise.all(_this.container.getProviders().map(function (provider) {
              return provider["delete"]();
            }));
          }).then(function () {
            _this.isDeleted_ = true;
          });
        };
        /**
         * Return a service instance associated with this app (creating it
         * on demand), identified by the passed instanceIdentifier.
         *
         * NOTE: Currently storage and functions are the only ones that are leveraging this
         * functionality. They invoke it by calling:
         *
         * ```javascript
         * firebase.app().storage('STORAGE BUCKET ID')
         * ```
         *
         * The service name is passed to this already
         * @internal
         */


        FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
          if (instanceIdentifier === void 0) {
            instanceIdentifier = DEFAULT_ENTRY_NAME;
          }

          this.checkDestroyed_(); // getImmediate will always succeed because _getService is only called for registered components.

          return this.container.getProvider(name).getImmediate({
            identifier: instanceIdentifier
          });
        };
        /**
         * Remove a service instance from the cache, so we will create a new instance for this service
         * when people try to get this service again.
         *
         * NOTE: currently only firestore is using this functionality to support firestore shutdown.
         *
         * @param name The service name
         * @param instanceIdentifier instance identifier in case multiple instances are allowed
         * @internal
         */


        FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
          if (instanceIdentifier === void 0) {
            instanceIdentifier = DEFAULT_ENTRY_NAME;
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any


          this.container.getProvider(name).clearInstance(instanceIdentifier);
        };
        /**
         * @param component the component being added to this app's container
         */


        FirebaseAppImpl.prototype._addComponent = function (component) {
          try {
            this.container.addComponent(component);
          } catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
          }
        };

        FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
          this.container.addOrOverwriteComponent(component);
        };
        /**
         * This function will throw an Error if the App has already been deleted -
         * use before performing API actions on the App.
         */


        FirebaseAppImpl.prototype.checkDestroyed_ = function () {
          if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted"
            /* APP_DELETED */
            , {
              appName: this.name_
            });
          }
        };

        return FirebaseAppImpl;
      }(); // Prevent dead-code elimination of these methods w/o invalid property
      // copying.


      FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype["delete"] || console.log('dc');
      var version$1 = "7.15.0";
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Because auth can't share code with other components, we attach the utility functions
       * in an internal namespace to share code.
       * This function return a firebase namespace object without
       * any utility functions, so it can be shared between the regular firebaseNamespace and
       * the lite version.
       */

      function createFirebaseNamespaceCore(firebaseAppImpl) {
        var apps = {}; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        var components = new Map(); // A namespace is a plain JavaScript Object.

        var namespace = {
          // Hack to prevent Babel from modifying the object returned
          // as the firebase namespace.
          // @ts-ignore
          __esModule: true,
          initializeApp: initializeApp,
          // @ts-ignore
          app: app,
          registerVersion: registerVersion,
          setLogLevel: logger$1.setLogLevel,
          onLog: onLog,
          // @ts-ignore
          apps: null,
          SDK_VERSION: version$1,
          INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
          }
        }; // Inject a circular default export to allow Babel users who were previously
        // using:
        //
        //   import firebase from 'firebase';
        //   which becomes: var firebase = require('firebase').default;
        //
        // instead of
        //
        //   import * as firebase from 'firebase';
        //   which becomes: var firebase = require('firebase');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        namespace['default'] = namespace; // firebase.apps is a read-only getter.

        Object.defineProperty(namespace, 'apps', {
          get: getApps
        });
        /**
         * Called by App.delete() - but before any services associated with the App
         * are deleted.
         */

        function removeApp(name) {
          delete apps[name];
        }
        /**
         * Get the App object for a given name (or DEFAULT).
         */


        function app(name) {
          name = name || DEFAULT_ENTRY_NAME;

          if (!util.contains(apps, name)) {
            throw ERROR_FACTORY.create("no-app"
            /* NO_APP */
            , {
              appName: name
            });
          }

          return apps[name];
        } // @ts-ignore


        app['App'] = firebaseAppImpl;

        function initializeApp(options, rawConfig) {
          if (rawConfig === void 0) {
            rawConfig = {};
          }

          if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = {
              name: name_1
            };
          }

          var config = rawConfig;

          if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
          }

          var name = config.name;

          if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name"
            /* BAD_APP_NAME */
            , {
              appName: String(name)
            });
          }

          if (util.contains(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app"
            /* DUPLICATE_APP */
            , {
              appName: name
            });
          }

          var app = new firebaseAppImpl(options, config, namespace);
          apps[name] = app;
          return app;
        }
        /*
         * Return an array of all the non-deleted FirebaseApps.
         */


        function getApps() {
          // Make a copy so caller cannot mutate the apps list.
          return Object.keys(apps).map(function (name) {
            return apps[name];
          });
        }

        function registerComponent(component) {
          var e_1, _a;

          var componentName = component.name;

          if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC"
            /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] : null;
          }

          components.set(componentName, component); // create service namespace for public components

          if (component.type === "PUBLIC"
          /* PUBLIC */
          ) {
              // The Service namespace is an accessor function ...
              var serviceNamespace = function serviceNamespace(appArg) {
                if (appArg === void 0) {
                  appArg = app();
                } // eslint-disable-next-line @typescript-eslint/no-explicit-any


                if (typeof appArg[componentName] !== 'function') {
                  // Invalid argument.
                  // This happens in the following case: firebase.storage('gs:/')
                  throw ERROR_FACTORY.create("invalid-app-argument"
                  /* INVALID_APP_ARGUMENT */
                  , {
                    appName: componentName
                  });
                } // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any


                return appArg[componentName]();
              }; // ... and a container for service-level properties.


              if (component.serviceProps !== undefined) {
                util.deepExtend(serviceNamespace, component.serviceProps);
              } // eslint-disable-next-line @typescript-eslint/no-explicit-any


              namespace[componentName] = serviceNamespace; // Patch the FirebaseAppImpl prototype
              // eslint-disable-next-line @typescript-eslint/no-explicit-any

              firebaseAppImpl.prototype[componentName] = // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
              // option added to the no-explicit-any rule when ESlint releases it.
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              function () {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                var serviceFxn = this._getService.bind(this, componentName);

                return serviceFxn.apply(this, component.multipleInstances ? args : []);
              };
            }

          try {
            // add the component to existing app instances
            for (var _b = tslib.__values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var appName = _c.value;

              apps[appName]._addComponent(component);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }

          return component.type === "PUBLIC"
          /* PUBLIC */
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          namespace[componentName] : null;
        }

        function registerVersion(libraryKeyOrName, version, variant) {
          var _a; // TODO: We can use this check to whitelist strings when/if we set up
          // a good whitelist system.


          var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;

          if (variant) {
            library += "-" + variant;
          }

          var libraryMismatch = library.match(/\s|\//);
          var versionMismatch = version.match(/\s|\//);

          if (libraryMismatch || versionMismatch) {
            var warning = ["Unable to register library \"" + library + "\" with version \"" + version + "\":"];

            if (libraryMismatch) {
              warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            }

            if (libraryMismatch && versionMismatch) {
              warning.push('and');
            }

            if (versionMismatch) {
              warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
            }

            logger.warn(warning.join(' '));
            return;
          }

          registerComponent(new component.Component(library + "-version", function () {
            return {
              library: library,
              version: version
            };
          }, "VERSION"
          /* VERSION */
          ));
        }

        function onLog(logCallback, options) {
          if (logCallback !== null && typeof logCallback !== 'function') {
            throw ERROR_FACTORY.create("invalid-log-argument"
            /* INVALID_LOG_ARGUMENT */
            , {
              appName: name
            });
          }

          logger$1.setUserLogHandler(logCallback, options);
        } // Map the requested service to a registered service name
        // (used to map auth to serverAuth service when needed).


        function useAsService(app, name) {
          if (name === 'serverAuth') {
            return null;
          }

          var useService = name;
          return useService;
        }

        return namespace;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Return a firebase namespace object.
       *
       * In production, this will be called exactly once and the result
       * assigned to the 'firebase' global.  It may be called multiple times
       * in unit tests.
       */


      function createFirebaseNamespace() {
        var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
        namespace.INTERNAL = tslib.__assign(tslib.__assign({}, namespace.INTERNAL), {
          createFirebaseNamespace: createFirebaseNamespace,
          extendNamespace: extendNamespace,
          createSubscribe: util.createSubscribe,
          ErrorFactory: util.ErrorFactory,
          deepExtend: util.deepExtend
        });
        /**
         * Patch the top-level firebase namespace with additional properties.
         *
         * firebase.INTERNAL.extendNamespace()
         */

        function extendNamespace(props) {
          util.deepExtend(namespace, props);
        }

        return namespace;
      }

      var firebase = createFirebaseNamespace();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var PlatformLoggerService =
      /** @class */
      function () {
        function PlatformLoggerService(container) {
          this.container = container;
        } // In initial implementation, this will be called by installations on
        // auth token refresh, and installations will send this string.


        PlatformLoggerService.prototype.getPlatformInfoString = function () {
          var providers = this.container.getProviders(); // Loop through providers and get library/version pairs from any that are
          // version components.

          return providers.map(function (provider) {
            if (isVersionServiceProvider(provider)) {
              var service = provider.getImmediate();
              return service.library + "/" + service.version;
            } else {
              return null;
            }
          }).filter(function (logString) {
            return logString;
          }).join(' ');
        };

        return PlatformLoggerService;
      }();
      /**
       *
       * @param provider check if this provider provides a VersionService
       *
       * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
       * provides VersionService. The provider is not necessarily a 'app-version'
       * provider.
       */


      function isVersionServiceProvider(provider) {
        var component = provider.getComponent();
        return (component === null || component === void 0 ? void 0 : component.type) === "VERSION"
        /* VERSION */
        ;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function registerCoreComponents(firebase, variant) {
        firebase.INTERNAL.registerComponent(new component.Component('platform-logger', function (container) {
          return new PlatformLoggerService(container);
        }, "PRIVATE"
        /* PRIVATE */
        )); // Register `app` package.

        firebase.registerVersion(name$1, version, variant); // Register platform SDK identifier (no version).

        firebase.registerVersion('fire-js', '');
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Firebase Lite detection test
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      if (util.isBrowser() && self.firebase !== undefined) {
        logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "); // eslint-disable-next-line

        var sdkVersion = self.firebase.SDK_VERSION;

        if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
          logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
        }
      }

      var initializeApp = firebase.initializeApp; // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
      // the no-explicit-any rule when ESlint releases it.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      firebase.initializeApp = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        } // Environment check before initializing app
        // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
        // in @firebase/logger


        if (util.isNode()) {
          logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ");
        }

        return initializeApp.apply(undefined, args);
      };

      var firebase$1 = firebase;
      registerCoreComponents(firebase$1);
      exports["default"] = firebase$1;
      exports.firebase = firebase$1; //# sourceMappingURL=index.cjs.js.map

      /***/
    },

    /***/
    "xYpa":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/admin/admin-products/admin-products.component.ts ***!
      \**************************************************************************/

    /*! exports provided: AdminProductsComponent */

    /***/
    function xYpa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function () {
        return AdminProductsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _admin_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-product.service */
      "VCJp");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./filter.pipe */
      "+NnO");

      function AdminProductsComponent_li_32_i_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 25);
        }
      }

      function AdminProductsComponent_li_32_i_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 26);
        }
      }

      function AdminProductsComponent_li_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdminProductsComponent_li_32_i_11_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminProductsComponent_li_32_i_12_Template, 1, 0, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.product_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r1.in_stock);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !product_r1.in_stock);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", product_r1._id);
        }
      }

      var AdminProductsComponent = /*#__PURE__*/function () {
        function AdminProductsComponent(adminService) {
          _classCallCheck(this, AdminProductsComponent);

          this.adminService = adminService;
          this.filterText = '';
        }

        _createClass(AdminProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProducts();
          }
        }, {
          key: "getProducts",
          value: function getProducts() {
            var _this22 = this;

            this.adminService.getProductList().subscribe(function (data) {
              _this22.products = data;
              _this22.adminService.products = data;
            });
          }
        }]);

        return AdminProductsComponent;
      }();

      AdminProductsComponent.ɵfac = function AdminProductsComponent_Factory(t) {
        return new (t || AdminProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_product_service__WEBPACK_IMPORTED_MODULE_1__["AdminProductService"]));
      };

      AdminProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminProductsComponent,
        selectors: [["admin-products"]],
        decls: 34,
        vars: 5,
        consts: [[1, "mr-3"], [1, "row"], [1, "col-1"], [1, "heading"], [1, "col-9"], [1, "button", "button__refresh", 3, "click"], [1, "fa", "fa-refresh"], [1, "row", "mr-2"], [1, "col-4"], ["type", "text", "placeholder", "Search...", 1, "search-input", "mr-2", 3, "ngModel", "ngModelChange"], [1, "col-5"], [1, "col-3"], ["routerLink", "add", 1, "button", "button__search"], [1, "fa", "fa-plus"], [1, "table", "row"], [1, "table__heading", "col-3"], [1, "table__heading", "col-2"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "col-2"], ["class", "fa fa-check", "style", "color: green;", 4, "ngIf"], ["class", "fa fa-times", "style", "color: red;", 4, "ngIf"], [3, "routerLink"], [1, "fa", "fa-edit"], [1, "fa", "fa-check", 2, "color", "green"], [1, "fa", "fa-times", 2, "color", "red"]],
        template: function AdminProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductsComponent_Template_button_click_7_listener() {
              return ctx.getProducts();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminProductsComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.filterText = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Add New Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "In Stock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AdminProductsComponent_li_32_Template, 16, 7, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterText);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 2, ctx.products, ctx.filterText));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        pipes: [_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]],
        styles: [".heading[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n\n.button[_ngcontent-%COMP%] {\n  border: none;\n  color: white;\n  padding: 12px 16px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.button__refresh[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: DodgerBlue;\n}\n\n.button__refresh[_ngcontent-%COMP%]:hover {\n  background-color: #005db7;\n}\n\n.button__search[_ngcontent-%COMP%] {\n  background-color: grey;\n}\n\n.button__search[_ngcontent-%COMP%]:hover {\n  background-color: #4d4d4d;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  padding: 10px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZG1pbi1wcm9kdWN0cy9hZG1pbi1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUFJO0VBQ0UseUJBQUE7QUFFTjs7QUFDRTtFQUNFLHNCQUFBO0FBQ0o7O0FBQUk7RUFDRSx5QkFBQTtBQUVOOztBQUdBO0VBQ0UsaUJBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZ3tcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJl9fcmVmcmVzaCB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IERvZGdlckJsdWU7XG4gICAgJjpob3ZlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3I6IERvZGdlckJsdWUsICRhbW91bnQ6IDIwKTtcbiAgICB9XG4gIH1cbiAgJl9fc2VhcmNoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgICY6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiBncmV5LCAkYW1vdW50OiAyMCk7XG4gICAgfVxuICB9XG59XG5cbi5zZWFyY2gtaW5wdXR7XG4gIHBhZGRpbmc6IDEwcHggOHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminProductsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'admin-products',
            templateUrl: './admin-products.component.html',
            styleUrls: ['./admin-products.component.scss']
          }]
        }], function () {
          return [{
            type: _admin_product_service__WEBPACK_IMPORTED_MODULE_1__["AdminProductService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "y1ZC":
    /*!********************************************************************!*\
      !*** ./src/app/modules/admin/admin-login/admin-login.component.ts ***!
      \********************************************************************/

    /*! exports provided: AdminLoginComponent */

    /***/
    function y1ZC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function () {
        return AdminLoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth.service */
      "JD6w");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../loading-spinner/loading-spinner.component */
      "Fx1/");

      function AdminLoginComponent_div_0_form_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminLoginComponent_div_0_form_1_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.onSubmit(_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminLoginComponent_div_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLoginComponent_div_0_ng_template_2_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.user.email, " ");
        }
      }

      function AdminLoginComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminLoginComponent_div_0_form_1_Template, 15, 0, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminLoginComponent_div_0_ng_template_2_Template, 9, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isAuthenticated)("ngIfElse", _r4);
        }
      }

      function AdminLoginComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AdminLoginComponent = /*#__PURE__*/function () {
        function AdminLoginComponent(authService) {
          _classCallCheck(this, AdminLoginComponent);

          this.authService = authService;
          this.isAuthenticated = false;
          this.isLoading = false;
          this.error = null;
        }

        _createClass(AdminLoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            this.userSubs = this.authService.userSubject.subscribe(function (user) {
              return _this23.changeAuthStatus(user);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            var _this24 = this;

            if (form.invalid) {
              return;
            }

            this.isLoading = true;
            var email = form.value.email;
            var password = form.value.password;
            var authObs;
            authObs = this.authService.login(email, password);
            authObs.subscribe(function (resData) {
              return _this24.onSuccess(resData);
            }, function (errorMessage) {
              return _this24.onError(errorMessage);
            });
          }
        }, {
          key: "onSuccess",
          value: function onSuccess(response) {
            this.isLoading = false;
            this.isAuthenticated = true;
          }
        }, {
          key: "onError",
          value: function onError(errorMessage) {
            this.error = errorMessage;
            this.isLoading = false;
          }
        }, {
          key: "changeAuthStatus",
          value: function changeAuthStatus(user) {
            if (user) {
              this.user = user;
              this.isAuthenticated = true;
            } else {
              this.user = null;
              this.isAuthenticated = false;
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userSubs.unsubscribe();
          }
        }]);

        return AdminLoginComponent;
      }();

      AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) {
        return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminLoginComponent,
        selectors: [["admin-login"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["loading_circular", ""], [3, "ngSubmit", 4, "ngIf", "ngIfElse"], ["userLoggedIn", ""], [3, "ngSubmit"], ["authForm", "ngForm"], [1, "container"], [1, "form-group"], ["type", "text", "id", "email", "ngModel", "", "placeholder", "Email Address", "name", "email", "required", ""], ["for", "password"], ["type", "password", "id", "password", "name", "password", "ngModel", "", "placeholder", "Enter Password", "minlength", "6", "required", ""], ["type", "submit", 1, "login_button"], ["role", "alert", 1, "alert", "alert-success"], [1, "alert-heading"], [1, "btn", "btn-danger", "pb-2", 3, "click"], [2, "text-align", "center"]],
        template: function AdminLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminLoginComponent_div_0_Template, 4, 2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminLoginComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadingSpinnerComponent"]],
        styles: ["form[_ngcontent-%COMP%] {\n  border: 3px solid #f1f1f1;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n\n.login_button[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.cancelbtn[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n\n.imgcontainer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 24px 0 12px 0;\n}\n\nimg.avatar[_ngcontent-%COMP%] {\n  width: 40%;\n  border-radius: 50%;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\nspan.psw[_ngcontent-%COMP%] {\n  float: right;\n  padding-top: 16px;\n}\n\n\n\n@media screen and (max-width: 300px) {\n  span.psw[_ngcontent-%COMP%] {\n    display: block;\n    float: none;\n  }\n\n  .cancelbtn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZG1pbi1sb2dpbi9hZG1pbi1sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFNLHlCQUFBO0FBRU47O0FBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFBQTtFQUNFLFlBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUdGOztBQUFBLG9FQUFBOztBQUNBO0VBQ0U7SUFDRyxjQUFBO0lBQ0EsV0FBQTtFQUdIOztFQURBO0lBQ0csV0FBQTtFQUlIO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7Ym9yZGVyOiAzcHggc29saWQgI2YxZjFmMTt9XG5cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubG9naW5fYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uY2FuY2VsYnRuIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLmltZ2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xufVxuXG5pbWcuYXZhdGFyIHtcbiAgd2lkdGg6IDQwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuc3Bhbi5wc3cge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBzcGFuIGFuZCBjYW5jZWwgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIHNwYW4ucHN3IHtcbiAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5jYW5jZWxidG4ge1xuICAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'admin-login',
            templateUrl: './admin-login.component.html',
            styleUrls: ['./admin-login.component.scss']
          }]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yT3b":
    /*!************************************************************************!*\
      !*** ./src/app/modules/admin/admin-reviews/admin-reviews.component.ts ***!
      \************************************************************************/

    /*! exports provided: AdminReviewsComponent */

    /***/
    function yT3b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminReviewsComponent", function () {
        return AdminReviewsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_http_review_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/http/review-api.service */
      "AZ++");
      /* harmony import */


      var _core_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/services/utility.service */
      "qeeY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AdminReviewsComponent_table_0_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminReviewsComponent_table_0_tr_14_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var review_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.selectId(review_r4._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminReviewsComponent_table_0_tr_14_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var review_r4 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.selectId(review_r4._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var review_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r4.reviewer_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r4.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r4.rating);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r4.review);
        }
      }

      function AdminReviewsComponent_table_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rating");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Accept");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminReviewsComponent_table_0_tr_14_Template, 17, 4, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.list);
        }
      }

      function AdminReviewsComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No pending review!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AdminReviewsComponent = /*#__PURE__*/function () {
        function AdminReviewsComponent(reviewApiService, utilityService) {
          _classCallCheck(this, AdminReviewsComponent);

          this.reviewApiService = reviewApiService;
          this.utilityService = utilityService;
          this.list = [];
        }

        _createClass(AdminReviewsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetchReviews();
          }
        }, {
          key: "fetchReviews",
          value: function fetchReviews() {
            var _this25 = this;

            this.utilityService.showLoader.next(true);
            this.reviewApiService.getReviews().subscribe(function (res) {
              if (res) {
                _this25.list = res;
              }

              _this25.utilityService.showLoader.next(false);
            }, function (err) {
              return _this25.utilityService.showLoader.next(false);
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete() {
            var _this26 = this;

            this.utilityService.showLoader.next(true);
            var data = {
              reviewId: this.selectedId,
              acknowledge: false
            };
            this.reviewApiService.acknowlegdeReview(data).subscribe(function () {
              console.log('review no added');

              _this26.utilityService.showLoader.next(false);

              _this26.fetchReviews();
            }, function (err) {
              return _this26.utilityService.showLoader.next(false);
            });
          }
        }, {
          key: "onAccept",
          value: function onAccept() {
            var _this27 = this;

            this.utilityService.showLoader.next(true);
            var data = {
              reviewId: this.selectedId,
              acknowledge: true
            };
            this.reviewApiService.acknowlegdeReview(data).subscribe(function () {
              console.log('review added');

              _this27.utilityService.showLoader.next(false);

              _this27.fetchReviews();
            }, function (err) {
              return _this27.utilityService.showLoader.next(false);
            });
          }
        }, {
          key: "selectId",
          value: function selectId(id) {
            this.selectedId = id;
          }
        }]);

        return AdminReviewsComponent;
      }();

      AdminReviewsComponent.ɵfac = function AdminReviewsComponent_Factory(t) {
        return new (t || AdminReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_review_api_service__WEBPACK_IMPORTED_MODULE_1__["ReviewApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]));
      };

      AdminReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminReviewsComponent,
        selectors: [["admin-reviews"]],
        decls: 35,
        vars: 2,
        consts: [["class", "table", 4, "ngIf", "ngIfElse"], ["noReview", ""], ["id", "confirmationDeleteModal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["id", "confirmationAcceptModal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], [1, "table"], ["scope", "col"], ["class", "product", 4, "ngFor", "ngForOf"], [1, "product"], [2, "display", "flex", "flex-direction", "column"], [2, "font-size", "18px", "font-weight", "bold"], ["type", "button", "data-toggle", "modal", "data-target", "#confirmationAcceptModal", 1, "btn", 2, "outline", "none", "box-shadow", "none", 3, "click"], ["data-toggle", "tooltip", "data-title", "Add", "aria-hidden", "true", 1, "fa", "fa-check", 2, "font-size", "25px", "width", "25px", "height", "25px", "color", "green"], ["type", "button", "data-toggle", "modal", "data-target", "#confirmationDeleteModal", 1, "btn", 2, "outline", "none", "box-shadow", "none", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times", 2, "font-size", "25px", "width", "25px", "height", "25px", "color", "red"], [1, "text-center", "cart-empty"], [1, "text-muted"]],
        template: function AdminReviewsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminReviewsComponent_table_0_Template, 15, 1, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminReviewsComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Confirm deletion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Do you want to reject this review ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminReviewsComponent_Template_button_click_17_listener() {
              return ctx.onDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Confirm deletion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Do you want to accept this review ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminReviewsComponent_Template_button_click_33_listener() {
              return ctx.onAccept();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Accept");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 0)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".loader[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  position: fixed;\n  height: 100vh;\n  display: flex;\n  z-index: 99;\n}\n.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  display: block;\n  margin: auto;\n}\n.primary-button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.1rem solid black;\n  color: black;\n  padding: 1.2rem 3rem;\n  border-radius: 0rem;\n  margin-top: 1rem;\n  font-size: 1.4rem;\n  outline: none;\n  transition: all 0.2s;\n  border-radius: 0.2rem;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  padding: 1.2rem 3rem;\n  background-image: linear-gradient(-45deg, #075ac9, #35c7df);\n  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.2), 0 4px 6px 1px rgba(0, 0, 0, 0.05), 0 1px 2px 1px transparent inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;\n  transform: translateY(-4px);\n}\n.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  text-rendering: auto;\n}\n.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: translateY(1px) scale(0.96);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  \n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -300%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown[_ngcontent-%COMP%] {\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.animated[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.alert-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  right: calc(50% - 150px);\n  top: 13rem;\n  z-index: 100;\n  padding: 2rem;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n@media screen and (max-width: 1050px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0rem);\n  }\n}\n.table[_ngcontent-%COMP%] {\n  border-color: #075ac9;\n  margin: 3rem;\n  width: 95%;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  border: 0.1rem solid #075ac9;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background-color: #075ac9;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  color: white;\n  font-weight: bold;\n  border-color: #075ac9;\n  max-width: 13rem;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  border: 0.1rem solid #cecece;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 1.5rem;\n  max-width: 13rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9fY29tbW9uLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW4tcmV2aWV3cy9hZG1pbi1yZXZpZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9fYW5pbWF0aW9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLGVBQUE7QUFJQSxtQkFBQTtBQUdBLGtCQUFBO0FDckJBO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0lGO0FERkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDSUo7QURBQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0dGO0FEREU7RUFFRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSwyREFBQTtFQUNBLG1LQUFBO0VBRUEsMkJBQUE7QUNDSjtBREdFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSw0Q0FBQTtFQUEwQyxnQ0FBQTtBQ0Q5QztBRE1BO0VBQ0U7SUFDRSxVQUFBO0VDSEY7RURNQTtJQUNFLFVBQUE7RUNKRjtBQUNGO0FET0E7RUFDRTtJQUNFLFVBQUE7RUNMRjtFRFFBO0lBQ0UsVUFBQTtFQ05GO0FBQ0Y7QURTQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSwrQkFBQTtFQ1JGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEVUE7SUFDRSwrQkFBQTtFQ1JGO0FBQ0Y7QURXQTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUNURjtBRFlBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ1RGO0FEWUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ1RGO0FEWUE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNURjtBRFlBO0VBQ0UsaUJBQUE7QUNURjtBRFlBO0VBRUE7SUFDRSxpQkFBQTtFQ1ZBO0FBQ0Y7QURhQTtFQUVBO0lBQ0UsaUJBQUE7RUNaQTtBQUNGO0FDN0dBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0Esd0JBQUE7RUQrR0o7QUFDRjtBQ3ZIQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VEK0dKO0VDN0dBO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VEK0dKO0FBQ0Y7QUM3R0E7RUFDRTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFRCtHSjtFQzdHQTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFRCtHSjtBQUNGO0FDdkhBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNEJBQUE7RUQrR0o7RUM3R0E7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUQrR0o7QUFDRjtBQWhJQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFrSUY7QUFoSUU7RUFDRSw0QkFBQTtBQWtJSjtBQWpJSTtFQUNFLHlCQUFBO0FBbUlOO0FBaElJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFrSU47QUE5SEU7RUFDRSw0QkFBQTtBQWdJSjtBQTdIRTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBK0hKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZG1pbi1yZXZpZXdzL2FkbWluLXJldmlld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS13ZWJzaXRlLWNvbG9yOiAjMDc1YWM5O1xuJHByaW1hcnktd2Vic2l0ZS1jb2xvci1saWdodDogIzlmYzBlYztcbiRzZWNvbmRhcnktd2Vic2l0ZS1jb2xvcjogIzA4NGNhNTtcbiR0ZXJ0aWFyeS13ZWJzaXRlLWNvbG9yOiByZ2JhKDI1NSwyNTUsMCwxKTtcbiRwcmltYXJ5LXRleHQ6ICM0NDQ0NDQ7XG5cbiRzZWNvbmRhcnktYmc6ICNmY2ZjZmM7XG4kc2Vjb25kYXJ5LWJvcmRlcjogI2U5ZWNlZjtcblxuJHByaW1hcnktcmVkOiAjZjUyYjJiO1xuJHByaW1hcnktcmVkLWxpZ2h0OiAjZWVhNGE0O1xuXG5cblxuLyogSW5mbyBCYXNlZCAqL1xuJGNvbG9yLW5vdGlmeTogI2ZmYzEwNztcbiRjb2xvci1pbmZvOiAjMzVjN2RmO1xuXG4vKiBQcm9wZXJ0eSBCYXNlZCAqL1xuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcblxuLyoqIEdyYXkgU2hhZGVzICoqL1xuJGdyZXktc2hhZGUtMTogI2YxZjFmMTtcbiRncmV5LXNoYWRlLTI6ICNjZWNlY2U7XG4kZ3JleS1zaGFkZS0zOiAjZmVmZWZlO1xuJGZhLWZvbnQtcGF0aDogXCJ+Zm9udC1hd2Vzb21lL2ZvbnRzL1wiO1xuIiwiLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAuMXJlbSBzb2xpZCBibGFjaztcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxLjJyZW0gM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMHJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuXG4gICY6aG92ZXJ7XG5cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMS4ycmVtIDNyZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA3NWFjOSwgIzM1YzdkZik7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDFweCAycHggMXB4IHRyYW5zcGFyZW50IGluc2V0LFxuICAgIDAgMThweCAzMnB4IC0ycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcblxuICB9XG5cbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgfVxuXG4gICY6YWN0aXZlLCY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCkgc2NhbGUoMC45Nik7XG4gICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoYmxhY2ssIC4yKTsgLyooZGlyZWN0aW9uIHNoYWRvdyBibHVyIGNvbG9yKSovXG4gIH1cblxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMDAlLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuLnNsaWRlSW5Eb3duIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xufVxuXG4uZmFkZUluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xufVxuXG4uYW5pbWF0ZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmFsZXJ0LW1zZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xuICB0b3A6IDEzcmVtO1xuICB6LWluZGV4OiAxMDA7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA3cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDhyZW07XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xufVxufVxuIiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL2ltcG9ydHNcIjtcblxuLnRhYmxlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDc1YWM5O1xuICBtYXJnaW46IDNyZW07XG4gIHdpZHRoOiA5NSU7XG5cbiAgdGhlYWQge1xuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICMwNzVhYzk7XG4gICAgdHIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA3NWFjOTtcbiAgICB9XG5cbiAgICB0aCB7XG4gICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGJvcmRlci1jb2xvcjogIzA3NWFjOTtcbiAgICAgIG1heC13aWR0aDogMTNyZW07XG4gICAgfVxuICB9XG5cbiAgdGJvZHkge1xuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmV5LXNoYWRlLTI7XG4gIH1cblxuICB0ZCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgbWF4LXdpZHRoOiAxM3JlbTtcbiAgfVxufVxuIiwiXG5Aa2V5ZnJhbWVzIG1vdmVJbkJvdHRvbSB7XG4gIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVJblRvcCB7XG4gIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminReviewsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'admin-reviews',
            templateUrl: './admin-reviews.component.html',
            styleUrls: ['./admin-reviews.component.scss']
          }]
        }], function () {
          return [{
            type: _core_http_review_api_service__WEBPACK_IMPORTED_MODULE_1__["ReviewApiService"]
          }, {
            type: _core_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yTGm":
    /*!****************************************************!*\
      !*** ./src/app/core/http/slideshow-api.service.ts ***!
      \****************************************************/

    /*! exports provided: SlideshowApiService */

    /***/
    function yTGm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlideshowApiService", function () {
        return SlideshowApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _constants_api_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../constants/api.const */
      "bh//");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./http-error-handler.service */
      "p4Ho");
      /* harmony import */


      var _modules_admin_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../modules/admin/auth.service */
      "JD6w");

      var SlideshowApiService = /*#__PURE__*/function () {
        function SlideshowApiService(http, httpErrorHandlerService, authService) {
          _classCallCheck(this, SlideshowApiService);

          this.http = http;
          this.httpErrorHandlerService = httpErrorHandlerService;
          this.authService = authService;
          this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL;
        }

        _createClass(SlideshowApiService, [{
          key: "getSlideshows",
          value: function getSlideshows() {
            var url = "".concat(this.BASE_URL).concat(_constants_api_const__WEBPACK_IMPORTED_MODULE_3__["GET_PAGER_API"]);
            return this.http.get(url, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.authService.userSubject.value.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }, {
          key: "deleteSlide",
          value: function deleteSlide(id) {
            var url = "".concat(this.BASE_URL).concat(_constants_api_const__WEBPACK_IMPORTED_MODULE_3__["PAGER_PRODUCT_API"], "/").concat(id);
            return this.http["delete"](url, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.authService.userSubject.value.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }, {
          key: "addSlide",
          value: function addSlide(data) {
            var url = "".concat(this.BASE_URL).concat(_constants_api_const__WEBPACK_IMPORTED_MODULE_3__["PAGER_PRODUCT_API"]);
            return this.http.post(url, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.authService.userSubject.value.token))
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.httpErrorHandlerService.handleErr));
          }
        }]);

        return SlideshowApiService;
      }();

      SlideshowApiService.ɵfac = function SlideshowApiService_Factory(t) {
        return new (t || SlideshowApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_modules_admin_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
      };

      SlideshowApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SlideshowApiService,
        factory: SlideshowApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideshowApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"]
          }, {
            type: _modules_admin_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zVF4":
    /*!*******************************************************!*\
      !*** ./node_modules/@firebase/util/dist/index.cjs.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function zVF4(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var tslib = __webpack_require__(
      /*! tslib */
      "30Go");
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
       */


      var CONSTANTS = {
        /**
         * @define {boolean} Whether this is the client Node.js SDK.
         */
        NODE_CLIENT: false,

        /**
         * @define {boolean} Whether this is the Admin Node.js SDK.
         */
        NODE_ADMIN: false,

        /**
         * Firebase SDK Version
         */
        SDK_VERSION: '${JSCORE_VERSION}'
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Throws an error if the provided assertion is falsy
       */

      var assert = function assert(assertion, message) {
        if (!assertion) {
          throw assertionError(message);
        }
      };
      /**
       * Returns an Error object suitable for throwing.
       */


      var assertionError = function assertionError(message) {
        return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var stringToByteArray = function stringToByteArray(str) {
        // TODO(user): Use native implementations if/when available
        var out = [];
        var p = 0;

        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);

          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }

        return out;
      };
      /**
       * Turns an array of numbers into the string given by the concatenation of the
       * characters to which the numbers correspond.
       * @param bytes Array of numbers representing characters.
       * @return Stringification of the array.
       */


      var byteArrayToString = function byteArrayToString(bytes) {
        // TODO(user): Use native implementations if/when available
        var out = [];
        var pos = 0,
            c = 0;

        while (pos < bytes.length) {
          var c1 = bytes[pos++];

          if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
          } else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
          } else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
          } else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          }
        }

        return out.join('');
      }; // We define it as an object literal instead of a class because a class compiled down to es5 can't
      // be treeshaked. https://github.com/rollup/rollup/issues/1691
      // Static lookup maps, lazily populated by init_()


      var base64 = {
        /**
         * Maps bytes to characters.
         */
        byteToCharMap_: null,

        /**
         * Maps characters to bytes.
         */
        charToByteMap_: null,

        /**
         * Maps bytes to websafe characters.
         * @private
         */
        byteToCharMapWebSafe_: null,

        /**
         * Maps websafe characters to bytes.
         * @private
         */
        charToByteMapWebSafe_: null,

        /**
         * Our default alphabet, shared between
         * ENCODED_VALS and ENCODED_VALS_WEBSAFE
         */
        ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',

        /**
         * Our default alphabet. Value 64 (=) is special; it means "nothing."
         */
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + '+/=';
        },

        /**
         * Our websafe alphabet.
         */
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + '-_.';
        },

        /**
         * Whether this browser supports the atob and btoa functions. This extension
         * started at Mozilla but is now implemented by many browsers. We use the
         * ASSUME_* variables to avoid pulling in the full useragent detection library
         * but still allowing the standard per-browser compilations.
         *
         */
        HAS_NATIVE_SUPPORT: typeof atob === 'function',

        /**
         * Base64-encode an array of bytes.
         *
         * @param input An array of bytes (numbers with
         *     value in [0, 255]) to encode.
         * @param webSafe Boolean indicating we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeByteArray: function encodeByteArray(input, webSafe) {
          if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
          }

          this.init_();
          var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
          var output = [];

          for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
            var outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
            var outByte4 = byte3 & 0x3f;

            if (!haveByte3) {
              outByte4 = 64;

              if (!haveByte2) {
                outByte3 = 64;
              }
            }

            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
          }

          return output.join('');
        },

        /**
         * Base64-encode a string.
         *
         * @param input A string to encode.
         * @param webSafe If true, we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeString: function encodeString(input, webSafe) {
          // Shortcut for Mozilla browsers that implement
          // a native base64 encoder in the form of "btoa/atob"
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
          }

          return this.encodeByteArray(stringToByteArray(input), webSafe);
        },

        /**
         * Base64-decode a string.
         *
         * @param input to decode.
         * @param webSafe True if we should use the
         *     alternative alphabet.
         * @return string representing the decoded value.
         */
        decodeString: function decodeString(input, webSafe) {
          // Shortcut for Mozilla browsers that implement
          // a native base64 encoder in the form of "btoa/atob"
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
          }

          return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
        },

        /**
         * Base64-decode a string.
         *
         * In base-64 decoding, groups of four characters are converted into three
         * bytes.  If the encoder did not apply padding, the input length may not
         * be a multiple of 4.
         *
         * In this case, the last group will have fewer than 4 characters, and
         * padding will be inferred.  If the group has one or two characters, it decodes
         * to one byte.  If the group has three characters, it decodes to two bytes.
         *
         * @param input Input to decode.
         * @param webSafe True if we should use the web-safe alphabet.
         * @return bytes representing the decoded value.
         */
        decodeStringToByteArray: function decodeStringToByteArray(input, webSafe) {
          this.init_();
          var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
          var output = [];

          for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;

            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
              throw Error();
            }

            var outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);

            if (byte3 !== 64) {
              var outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
              output.push(outByte2);

              if (byte4 !== 64) {
                var outByte3 = byte3 << 6 & 0xc0 | byte4;
                output.push(outByte3);
              }
            }
          }

          return output;
        },

        /**
         * Lazy static initialization function. Called before
         * accessing any of the static map variables.
         * @private
         */
        init_: function init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {}; // We want quick mappings back and forth, so we precompute two maps.

            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
              this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
              this.charToByteMap_[this.byteToCharMap_[i]] = i;
              this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
              this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i; // Be forgiving when decoding and correctly decode both encodings.

              if (i >= this.ENCODED_VALS_BASE.length) {
                this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
              }
            }
          }
        }
      };
      /**
       * URL-safe base64 encoding
       */

      var base64Encode = function base64Encode(str) {
        var utf8Bytes = stringToByteArray(str);
        return base64.encodeByteArray(utf8Bytes, true);
      };
      /**
       * URL-safe base64 decoding
       *
       * NOTE: DO NOT use the global atob() function - it does NOT support the
       * base64Url variant encoding.
       *
       * @param str To be decoded
       * @return Decoded result, if possible
       */


      var base64Decode = function base64Decode(str) {
        try {
          return base64.decodeString(str, true);
        } catch (e) {
          console.error('base64Decode failed: ', e);
        }

        return null;
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Do a deep-copy of basic JavaScript Objects or Arrays.
       */


      function deepCopy(value) {
        return deepExtend(undefined, value);
      }
      /**
       * Copy properties from source to target (recursively allows extension
       * of Objects and Arrays).  Scalar values in the target are over-written.
       * If target is undefined, an object of the appropriate type will be created
       * (and returned).
       *
       * We recursively copy all child properties of plain Objects in the source- so
       * that namespace- like dictionaries are merged.
       *
       * Note that the target can be a function, in which case the properties in
       * the source Object are copied onto it as static properties of the Function.
       */


      function deepExtend(target, source) {
        if (!(source instanceof Object)) {
          return source;
        }

        switch (source.constructor) {
          case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());

          case Object:
            if (target === undefined) {
              target = {};
            }

            break;

          case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;

          default:
            // Not a plain Object - treat it as a scalar.
            return source;
        }

        for (var prop in source) {
          if (!source.hasOwnProperty(prop)) {
            continue;
          }

          target[prop] = deepExtend(target[prop], source[prop]);
        }

        return target;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var Deferred =
      /** @class */
      function () {
        function Deferred() {
          var _this = this;

          this.reject = function () {};

          this.resolve = function () {};

          this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
          });
        }
        /**
         * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
         * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
         * and returns a node-style callback which will resolve or reject the Deferred's promise.
         */


        Deferred.prototype.wrapCallback = function (callback) {
          var _this = this;

          return function (error, value) {
            if (error) {
              _this.reject(error);
            } else {
              _this.resolve(value);
            }

            if (typeof callback === 'function') {
              // Attaching noop handler just in case developer wasn't expecting
              // promises
              _this.promise["catch"](function () {}); // Some of our callbacks don't expect a value and our own tests
              // assert that the parameter length is 1


              if (callback.length === 1) {
                callback(error);
              } else {
                callback(error, value);
              }
            }
          };
        };

        return Deferred;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns navigator.userAgent string or '' if it's not defined.
       * @return user agent string
       */


      function getUA() {
        if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
          return navigator['userAgent'];
        } else {
          return '';
        }
      }
      /**
       * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
       *
       * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
       * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
       * wait for a callback.
       */


      function isMobileCordova() {
        return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
      }
      /**
       * Detect Node.js.
       *
       * @return true if Node.js environment is detected.
       */
      // Node detection logic from: https://github.com/iliakan/detect-node/


      function isNode() {
        try {
          return Object.prototype.toString.call(global.process) === '[object process]';
        } catch (e) {
          return false;
        }
      }
      /**
       * Detect Browser Environment
       */


      function isBrowser() {
        return typeof self === 'object' && self.self === self;
      }

      function isBrowserExtension() {
        var runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
        return typeof runtime === 'object' && runtime.id !== undefined;
      }
      /**
       * Detect React Native.
       *
       * @return true if ReactNative environment is detected.
       */


      function isReactNative() {
        return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
      }
      /** Detects Electron apps. */


      function isElectron() {
        return getUA().indexOf('Electron/') >= 0;
      }
      /** Detects Internet Explorer. */


      function isIE() {
        var ua = getUA();
        return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
      }
      /** Detects Universal Windows Platform apps. */


      function isUWP() {
        return getUA().indexOf('MSAppHost/') >= 0;
      }
      /**
       * Detect whether the current SDK build is the Node version.
       *
       * @return true if it's the Node SDK build.
       */


      function isNodeSdk() {
        return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
      }
      /** Returns true if we are running in Safari. */


      function isSafari() {
        return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var ERROR_NAME = 'FirebaseError'; // Based on code from:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types

      var FirebaseError =
      /** @class */
      function (_super) {
        tslib.__extends(FirebaseError, _super);

        function FirebaseError(code, message) {
          var _this = _super.call(this, message) || this;

          _this.code = code;
          _this.name = ERROR_NAME; // Fix For ES5
          // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

          Object.setPrototypeOf(_this, FirebaseError.prototype); // Maintains proper stack trace for where our error was thrown.
          // Only available on V8.

          if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
          }

          return _this;
        }

        return FirebaseError;
      }(Error);

      var ErrorFactory =
      /** @class */
      function () {
        function ErrorFactory(service, serviceName, errors) {
          this.service = service;
          this.serviceName = serviceName;
          this.errors = errors;
        }

        ErrorFactory.prototype.create = function (code) {
          var data = [];

          for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
          }

          var customData = data[0] || {};
          var fullCode = this.service + "/" + code;
          var template = this.errors[code];
          var message = template ? replaceTemplate(template, customData) : 'Error'; // Service Name: Error message (service/code).

          var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
          var error = new FirebaseError(fullCode, fullMessage); // Keys with an underscore at the end of their name are not included in
          // error.data for some reason.
          // TODO: Replace with Object.entries when lib is updated to es2017.

          for (var _a = 0, _b = Object.keys(customData); _a < _b.length; _a++) {
            var key = _b[_a];

            if (key.slice(-1) !== '_') {
              if (key in error) {
                console.warn("Overwriting FirebaseError base field \"" + key + "\" can cause unexpected behavior.");
              }

              error[key] = customData[key];
            }
          }

          return error;
        };

        return ErrorFactory;
      }();

      function replaceTemplate(template, data) {
        return template.replace(PATTERN, function (_, key) {
          var value = data[key];
          return value != null ? value.toString() : "<" + key + "?>";
        });
      }

      var PATTERN = /\{\$([^}]+)}/g;
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Evaluates a JSON string into a javascript object.
       *
       * @param {string} str A string containing JSON.
       * @return {*} The javascript object representing the specified JSON.
       */

      function jsonEval(str) {
        return JSON.parse(str);
      }
      /**
       * Returns JSON representing a javascript object.
       * @param {*} data Javascript object to be stringified.
       * @return {string} The JSON contents of the object.
       */


      function stringify(data) {
        return JSON.stringify(data);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Decodes a Firebase auth. token into constituent parts.
       *
       * Notes:
       * - May return with invalid / incomplete claims if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var decode = function decode(token) {
        var header = {},
            claims = {},
            data = {},
            signature = '';

        try {
          var parts = token.split('.');
          header = jsonEval(base64Decode(parts[0]) || '');
          claims = jsonEval(base64Decode(parts[1]) || '');
          signature = parts[2];
          data = claims['d'] || {};
          delete claims['d'];
        } catch (e) {}

        return {
          header: header,
          claims: claims,
          data: data,
          signature: signature
        };
      };
      /**
       * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
       * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var isValidTimestamp = function isValidTimestamp(token) {
        var claims = decode(token).claims;
        var now = Math.floor(new Date().getTime() / 1000);
        var validSince = 0,
            validUntil = 0;

        if (typeof claims === 'object') {
          if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
          } else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
          }

          if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
          } else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
          }
        }

        return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
      };
      /**
       * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
       *
       * Notes:
       * - May return null if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var issuedAtTime = function issuedAtTime(token) {
        var claims = decode(token).claims;

        if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
          return claims['iat'];
        }

        return null;
      };
      /**
       * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var isValidFormat = function isValidFormat(token) {
        var decoded = decode(token),
            claims = decoded.claims;
        return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
      };
      /**
       * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var isAdmin = function isAdmin(token) {
        var claims = decode(token).claims;
        return typeof claims === 'object' && claims['admin'] === true;
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function contains(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }

      function safeGet(obj, key) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          return obj[key];
        } else {
          return undefined;
        }
      }

      function isEmpty(obj) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
          }
        }

        return true;
      }

      function map(obj, fn, contextObj) {
        var res = {};

        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
          }
        }

        return res;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
       * params object (e.g. {arg: 'val', arg2: 'val2'})
       * Note: You must prepend it with ? when adding it to a URL.
       */


      function querystring(querystringParams) {
        var params = [];

        var _loop_1 = function _loop_1(key, value) {
          if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
              params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
          } else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
          }
        };

        for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
          var _b = _a[_i],
              key = _b[0],
              value = _b[1];

          _loop_1(key, value);
        }

        return params.length ? '&' + params.join('&') : '';
      }
      /**
       * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
       * (e.g. {arg: 'val', arg2: 'val2'})
       */


      function querystringDecode(querystring) {
        var obj = {};
        var tokens = querystring.replace(/^\?/, '').split('&');
        tokens.forEach(function (token) {
          if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
          }
        });
        return obj;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @fileoverview SHA-1 cryptographic hash.
       * Variable names follow the notation in FIPS PUB 180-3:
       * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
       *
       * Usage:
       *   var sha1 = new sha1();
       *   sha1.update(bytes);
       *   var hash = sha1.digest();
       *
       * Performance:
       *   Chrome 23:   ~400 Mbit/s
       *   Firefox 16:  ~250 Mbit/s
       *
       */

      /**
       * SHA-1 cryptographic hash constructor.
       *
       * The properties declared here are discussed in the above algorithm document.
       * @constructor
       * @final
       * @struct
       */


      var Sha1 =
      /** @class */
      function () {
        function Sha1() {
          /**
           * Holds the previous values of accumulated variables a-e in the compress_
           * function.
           * @private
           */
          this.chain_ = [];
          /**
           * A buffer holding the partially computed hash result.
           * @private
           */

          this.buf_ = [];
          /**
           * An array of 80 bytes, each a part of the message to be hashed.  Referred to
           * as the message schedule in the docs.
           * @private
           */

          this.W_ = [];
          /**
           * Contains data needed to pad messages less than 64 bytes.
           * @private
           */

          this.pad_ = [];
          /**
           * @private {number}
           */

          this.inbuf_ = 0;
          /**
           * @private {number}
           */

          this.total_ = 0;
          this.blockSize = 512 / 8;
          this.pad_[0] = 128;

          for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
          }

          this.reset();
        }

        Sha1.prototype.reset = function () {
          this.chain_[0] = 0x67452301;
          this.chain_[1] = 0xefcdab89;
          this.chain_[2] = 0x98badcfe;
          this.chain_[3] = 0x10325476;
          this.chain_[4] = 0xc3d2e1f0;
          this.inbuf_ = 0;
          this.total_ = 0;
        };
        /**
         * Internal compress helper function.
         * @param buf Block to compress.
         * @param offset Offset of the block in the buffer.
         * @private
         */


        Sha1.prototype.compress_ = function (buf, offset) {
          if (!offset) {
            offset = 0;
          }

          var W = this.W_; // get 16 big endian words

          if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
              // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
              // have a bug that turns the post-increment ++ operator into pre-increment
              // during JIT compilation.  We have code that depends heavily on SHA-1 for
              // correctness and which is affected by this bug, so I've removed all uses
              // of post-increment ++ in which the result value is used.  We can revert
              // this change once the Safari bug
              // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
              // most clients have been updated.
              W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
              offset += 4;
            }
          } else {
            for (var i = 0; i < 16; i++) {
              W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
              offset += 4;
            }
          } // expand to 80 words


          for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = (t << 1 | t >>> 31) & 0xffffffff;
          }

          var a = this.chain_[0];
          var b = this.chain_[1];
          var c = this.chain_[2];
          var d = this.chain_[3];
          var e = this.chain_[4];
          var f, k; // TODO(user): Try to unroll this loop to speed up the computation.

          for (var i = 0; i < 80; i++) {
            if (i < 40) {
              if (i < 20) {
                f = d ^ b & (c ^ d);
                k = 0x5a827999;
              } else {
                f = b ^ c ^ d;
                k = 0x6ed9eba1;
              }
            } else {
              if (i < 60) {
                f = b & c | d & (b | c);
                k = 0x8f1bbcdc;
              } else {
                f = b ^ c ^ d;
                k = 0xca62c1d6;
              }
            }

            var t = (a << 5 | a >>> 27) + f + e + k + W[i] & 0xffffffff;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 0xffffffff;
            b = a;
            a = t;
          }

          this.chain_[0] = this.chain_[0] + a & 0xffffffff;
          this.chain_[1] = this.chain_[1] + b & 0xffffffff;
          this.chain_[2] = this.chain_[2] + c & 0xffffffff;
          this.chain_[3] = this.chain_[3] + d & 0xffffffff;
          this.chain_[4] = this.chain_[4] + e & 0xffffffff;
        };

        Sha1.prototype.update = function (bytes, length) {
          // TODO(johnlenz): tighten the function signature and remove this check
          if (bytes == null) {
            return;
          }

          if (length === undefined) {
            length = bytes.length;
          }

          var lengthMinusBlock = length - this.blockSize;
          var n = 0; // Using local instead of member variables gives ~5% speedup on Firefox 16.

          var buf = this.buf_;
          var inbuf = this.inbuf_; // The outer while loop should execute at most twice.

          while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
              while (n <= lengthMinusBlock) {
                this.compress_(bytes, n);
                n += this.blockSize;
              }
            }

            if (typeof bytes === 'string') {
              while (n < length) {
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;

                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

                  break;
                }
              }
            } else {
              while (n < length) {
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;

                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

                  break;
                }
              }
            }
          }

          this.inbuf_ = inbuf;
          this.total_ += length;
        };
        /** @override */


        Sha1.prototype.digest = function () {
          var digest = [];
          var totalBits = this.total_ * 8; // Add pad 0x80 0x00*.

          if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
          } else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          } // Add # bits.


          for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
          }

          this.compress_(this.buf_);
          var n = 0;

          for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
              digest[n] = this.chain_[i] >> j & 255;
              ++n;
            }
          }

          return digest;
        };

        return Sha1;
      }();
      /**
       * Helper to make a Subscribe function (just like Promise helps make a
       * Thenable).
       *
       * @param executor Function which can make calls to a single Observer
       *     as a proxy.
       * @param onNoObservers Callback when count of Observers goes to zero.
       */


      function createSubscribe(executor, onNoObservers) {
        var proxy = new ObserverProxy(executor, onNoObservers);
        return proxy.subscribe.bind(proxy);
      }
      /**
       * Implement fan-out for any number of Observers attached via a subscribe
       * function.
       */


      var ObserverProxy =
      /** @class */
      function () {
        /**
         * @param executor Function which can make calls to a single Observer
         *     as a proxy.
         * @param onNoObservers Callback when count of Observers goes to zero.
         */
        function ObserverProxy(executor, onNoObservers) {
          var _this = this;

          this.observers = [];
          this.unsubscribes = [];
          this.observerCount = 0; // Micro-task scheduling by calling task.then().

          this.task = Promise.resolve();
          this.finalized = false;
          this.onNoObservers = onNoObservers; // Call the executor asynchronously so subscribers that are called
          // synchronously after the creation of the subscribe function
          // can still receive the very first value generated in the executor.

          this.task.then(function () {
            executor(_this);
          })["catch"](function (e) {
            _this.error(e);
          });
        }

        ObserverProxy.prototype.next = function (value) {
          this.forEachObserver(function (observer) {
            observer.next(value);
          });
        };

        ObserverProxy.prototype.error = function (error) {
          this.forEachObserver(function (observer) {
            observer.error(error);
          });
          this.close(error);
        };

        ObserverProxy.prototype.complete = function () {
          this.forEachObserver(function (observer) {
            observer.complete();
          });
          this.close();
        };
        /**
         * Subscribe function that can be used to add an Observer to the fan-out list.
         *
         * - We require that no event is sent to a subscriber sychronously to their
         *   call to subscribe().
         */


        ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
          var _this = this;

          var observer;

          if (nextOrObserver === undefined && error === undefined && complete === undefined) {
            throw new Error('Missing Observer.');
          } // Assemble an Observer object when passed as callback functions.


          if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
            observer = nextOrObserver;
          } else {
            observer = {
              next: nextOrObserver,
              error: error,
              complete: complete
            };
          }

          if (observer.next === undefined) {
            observer.next = noop;
          }

          if (observer.error === undefined) {
            observer.error = noop;
          }

          if (observer.complete === undefined) {
            observer.complete = noop;
          }

          var unsub = this.unsubscribeOne.bind(this, this.observers.length); // Attempt to subscribe to a terminated Observable - we
          // just respond to the Observer with the final error or complete
          // event.

          if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
              try {
                if (_this.finalError) {
                  observer.error(_this.finalError);
                } else {
                  observer.complete();
                }
              } catch (e) {// nothing
              }

              return;
            });
          }

          this.observers.push(observer);
          return unsub;
        }; // Unsubscribe is synchronous - we guarantee that no events are sent to
        // any unsubscribed Observer.


        ObserverProxy.prototype.unsubscribeOne = function (i) {
          if (this.observers === undefined || this.observers[i] === undefined) {
            return;
          }

          delete this.observers[i];
          this.observerCount -= 1;

          if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
          }
        };

        ObserverProxy.prototype.forEachObserver = function (fn) {
          if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
          } // Since sendOne calls asynchronously - there is no chance that
          // this.observers will become undefined.


          for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
          }
        }; // Call the Observer via one of it's callback function. We are careful to
        // confirm that the observe has not been unsubscribed since this asynchronous
        // function had been queued.


        ObserverProxy.prototype.sendOne = function (i, fn) {
          var _this = this; // Execute the callback asynchronously
          // eslint-disable-next-line @typescript-eslint/no-floating-promises


          this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
              try {
                fn(_this.observers[i]);
              } catch (e) {
                // Ignore exceptions raised in Observers or missing methods of an
                // Observer.
                // Log error to console. b/31404806
                if (typeof console !== 'undefined' && console.error) {
                  console.error(e);
                }
              }
            }
          });
        };

        ObserverProxy.prototype.close = function (err) {
          var _this = this;

          if (this.finalized) {
            return;
          }

          this.finalized = true;

          if (err !== undefined) {
            this.finalError = err;
          } // Proxy is no longer needed - garbage collect references
          // eslint-disable-next-line @typescript-eslint/no-floating-promises


          this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
          });
        };

        return ObserverProxy;
      }();
      /** Turn synchronous function into one called asynchronously. */


      function async(fn, onError) {
        return function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          Promise.resolve(true).then(function () {
            fn.apply(void 0, args);
          })["catch"](function (error) {
            if (onError) {
              onError(error);
            }
          });
        };
      }
      /**
       * Return true if the object passed in implements any of the named methods.
       */


      function implementsAnyMethods(obj, methods) {
        if (typeof obj !== 'object' || obj === null) {
          return false;
        }

        for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
          var method = methods_1[_i];

          if (method in obj && typeof obj[method] === 'function') {
            return true;
          }
        }

        return false;
      }

      function noop() {// do nothing
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Check to make sure the appropriate number of arguments are provided for a public function.
       * Throws an error if it fails.
       *
       * @param fnName The function name
       * @param minCount The minimum number of arguments to allow for the function call
       * @param maxCount The maximum number of argument to allow for the function call
       * @param argCount The actual number of arguments provided.
       */


      var validateArgCount = function validateArgCount(fnName, minCount, maxCount, argCount) {
        var argError;

        if (argCount < minCount) {
          argError = 'at least ' + minCount;
        } else if (argCount > maxCount) {
          argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
        }

        if (argError) {
          var error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
          throw new Error(error);
        }
      };
      /**
       * Generates a string to prefix an error message about failed argument validation
       *
       * @param fnName The function name
       * @param argumentNumber The index of the argument
       * @param optional Whether or not the argument is optional
       * @return The prefix to add to the error thrown for validation.
       */


      function errorPrefix(fnName, argumentNumber, optional) {
        var argName = '';

        switch (argumentNumber) {
          case 1:
            argName = optional ? 'first' : 'First';
            break;

          case 2:
            argName = optional ? 'second' : 'Second';
            break;

          case 3:
            argName = optional ? 'third' : 'Third';
            break;

          case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;

          default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
        }

        var error = fnName + ' failed: ';
        error += argName + ' argument ';
        return error;
      }
      /**
       * @param fnName
       * @param argumentNumber
       * @param namespace
       * @param optional
       */


      function validateNamespace(fnName, argumentNumber, namespace, optional) {
        if (optional && !namespace) {
          return;
        }

        if (typeof namespace !== 'string') {
          //TODO: I should do more validation here. We only allow certain chars in namespaces.
          throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid firebase namespace.');
        }
      }

      function validateCallback(fnName, argumentNumber, callback, optional) {
        if (optional && !callback) {
          return;
        }

        if (typeof callback !== 'function') {
          throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid function.');
        }
      }

      function validateContextObject(fnName, argumentNumber, context, optional) {
        if (optional && !context) {
          return;
        }

        if (typeof context !== 'object' || context === null) {
          throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid context object.');
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
      // automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
      // so it's been modified.
      // Note that not all Unicode characters appear as single characters in JavaScript strings.
      // fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
      // use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
      // character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
      // pair).
      // See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3

      /**
       * @param {string} str
       * @return {Array}
       */


      var stringToByteArray$1 = function stringToByteArray$1(str) {
        var out = [];
        var p = 0;

        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i); // Is this the lead surrogate in a surrogate pair?

          if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.

            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.

            c = 0x10000 + (high << 10) + low;
          }

          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }

        return out;
      };
      /**
       * Calculate length without actually converting; useful for doing cheaper validation.
       * @param {string} str
       * @return {number}
       */


      var stringLength = function stringLength(str) {
        var p = 0;

        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);

          if (c < 128) {
            p++;
          } else if (c < 2048) {
            p += 2;
          } else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
          } else {
            p += 3;
          }
        }

        return p;
      };

      exports.CONSTANTS = CONSTANTS;
      exports.Deferred = Deferred;
      exports.ErrorFactory = ErrorFactory;
      exports.FirebaseError = FirebaseError;
      exports.Sha1 = Sha1;
      exports.assert = assert;
      exports.assertionError = assertionError;
      exports.async = async;
      exports.base64 = base64;
      exports.base64Decode = base64Decode;
      exports.base64Encode = base64Encode;
      exports.contains = contains;
      exports.createSubscribe = createSubscribe;
      exports.decode = decode;
      exports.deepCopy = deepCopy;
      exports.deepExtend = deepExtend;
      exports.errorPrefix = errorPrefix;
      exports.getUA = getUA;
      exports.isAdmin = isAdmin;
      exports.isBrowser = isBrowser;
      exports.isBrowserExtension = isBrowserExtension;
      exports.isElectron = isElectron;
      exports.isEmpty = isEmpty;
      exports.isIE = isIE;
      exports.isMobileCordova = isMobileCordova;
      exports.isNode = isNode;
      exports.isNodeSdk = isNodeSdk;
      exports.isReactNative = isReactNative;
      exports.isSafari = isSafari;
      exports.isUWP = isUWP;
      exports.isValidFormat = isValidFormat;
      exports.isValidTimestamp = isValidTimestamp;
      exports.issuedAtTime = issuedAtTime;
      exports.jsonEval = jsonEval;
      exports.map = map;
      exports.querystring = querystring;
      exports.querystringDecode = querystringDecode;
      exports.safeGet = safeGet;
      exports.stringLength = stringLength;
      exports.stringToByteArray = stringToByteArray$1;
      exports.stringify = stringify;
      exports.validateArgCount = validateArgCount;
      exports.validateCallback = validateCallback;
      exports.validateContextObject = validateContextObject;
      exports.validateNamespace = validateNamespace; //# sourceMappingURL=index.cjs.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-modules-admin-admin-module-es5.js.map