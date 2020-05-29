function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{GcBr:function(t,n,e){"use strict";e.r(n),e.d(n,"CartModule",(function(){return j}));var o=e("ofXK"),r=e("tyNb"),i=e("fXoL"),a=e("7pSQ"),c=e("ht2v"),d=e("qeeY"),s=e("1lc2");function l(t,n){if(1&t){var e=i.Qb();i.Pb(0,"tr",10),i.Pb(1,"td"),i.Lb(2,"img",11),i.Ob(),i.Pb(3,"td",12),i.sc(4),i.Ob(),i.Pb(5,"td"),i.Lb(6,"i",13),i.sc(7),i.Ob(),i.Pb(8,"td",14),i.Pb(9,"button",15),i.Xb("click",(function(t){i.mc(e);var o=n.$implicit;return i.Zb(2).decrementQuantity(o)})),i.sc(10,"-"),i.Ob(),i.Pb(11,"span"),i.sc(12),i.Ob(),i.Pb(13,"button",15),i.Xb("click",(function(t){i.mc(e);var o=n.$implicit;return i.Zb(2).incrementQuantity(o)})),i.sc(14,"+"),i.Ob(),i.Ob(),i.Pb(15,"td"),i.Lb(16,"i",13),i.sc(17),i.Ob(),i.Pb(18,"td"),i.Pb(19,"button",15),i.Xb("click",(function(t){i.mc(e);var o=n.$implicit;return i.Zb(2).removeFromCart(o)})),i.Lb(20,"i",16),i.Ob(),i.Ob(),i.Ob()}if(2&t){var o=n.$implicit;i.zb(2),i.gc("src",o.image,i.oc),i.hc("alt","",o.product_name," image"),i.zb(2),i.tc(o.product_name),i.zb(3),i.uc(" ",o.price,""),i.zb(5),i.tc(o.quantity),i.zb(5),i.uc(" ",o.total,"")}}function m(t,n){if(1&t&&(i.Pb(0,"table",7),i.Pb(1,"thead"),i.Pb(2,"tr"),i.Lb(3,"th",8),i.Pb(4,"th",8),i.sc(5,"Product"),i.Ob(),i.Pb(6,"th",8),i.sc(7,"Price"),i.Ob(),i.Pb(8,"th",8),i.sc(9,"Quantity"),i.Ob(),i.Pb(10,"th",8),i.sc(11,"Total"),i.Ob(),i.Pb(12,"th",8),i.sc(13,"Remove"),i.Ob(),i.Ob(),i.Ob(),i.Pb(14,"tbody"),i.qc(15,l,21,6,"tr",9),i.Ob(),i.Ob()),2&t){var e=i.Zb();i.zb(15),i.fc("ngForOf",e.cartItems)}}function b(t,n){if(1&t){var e=i.Qb();i.Pb(0,"button",17),i.Xb("click",(function(t){return i.mc(e),i.Zb().checkout()})),i.sc(1," Checkout "),i.Ob()}}function g(t,n){1&t&&(i.Pb(0,"div",18),i.Pb(1,"h2",19),i.sc(2,"Your Cart is empty"),i.Ob(),i.Ob())}var f,u=((f=function(){function t(n,e,o,r){_classCallCheck(this,t),this.cartService=n,this.cartApiService=e,this.router=o,this.utilityService=r,this.cartItems=[],this.maxQuantiy=10}return _createClass(t,[{key:"getCartItems",value:function(){this.cartItems=this.cartService.getCartItems()}},{key:"removeFromCart",value:function(t){this.cartService.removeFromCart(t)}},{key:"decrementQuantity",value:function(t){t.quantity>=0&&(t.quantity=t.quantity-1,t.total=t.total-t.price),0!==t.quantity?this.cartService.saveCart(t):this.cartService.removeFromCart(t)}},{key:"incrementQuantity",value:function(t){t.quantity<this.maxQuantiy&&(t.quantity=t.quantity+1,t.total=t.total+t.price),this.cartService.saveCart(t)}},{key:"checkout",value:function(){var t=this;this.utilityService.showLoader.next(!0),this.cartApiService.createOrder(this.cartItems).subscribe((function(n){t.utilityService.showLoader.next(!1),n&&t.router.navigate(["view-cart/checkout"],{queryParams:{order_id:n._id}})}),(function(n){return t.utilityService.showLoader.next(!1)}))}},{key:"ngOnInit",value:function(){var t=this;this.getCartItems(),this.cartService.CartUpdateSubject.subscribe((function(n){t.cartItems=n.items}))}}]),t}()).\u0275fac=function(t){return new(t||f)(i.Kb(a.a),i.Kb(c.a),i.Kb(r.b),i.Kb(d.a))},f.\u0275cmp=i.Eb({type:f,selectors:[["app-cart"]],decls:9,vars:3,consts:[["title","CART"],[1,"cart-container"],["class","table",4,"ngIf","ngIfElse"],[1,"cart-buttons"],["routerLink","/products/all",1,"btn","primary-button"],["type","button","class","btn primary-button checkout",3,"click",4,"ngIf"],["emptyCart",""],[1,"table"],["scope","col"],["class","product",4,"ngFor","ngForOf"],[1,"product"],[1,"product-img",3,"src","alt"],[1,"product-name"],[1,"fa","fa-inr"],[1,"product-quantity"],["type","button",1,"btn",3,"click"],["aria-hidden","true",1,"fa","fa-times"],["type","button",1,"btn","primary-button","checkout",3,"click"],[1,"text-center","cart-empty"],[1,"text-muted"]],template:function(t,n){if(1&t&&(i.Pb(0,"app-main-container",0),i.Pb(1,"div",1),i.qc(2,m,16,1,"table",2),i.Pb(3,"div",3),i.Pb(4,"a",4),i.sc(5," Continue Shopping "),i.Ob(),i.qc(6,b,2,0,"button",5),i.Ob(),i.Ob(),i.qc(7,g,3,0,"ng-template",null,6,i.rc),i.Ob()),2&t){var e=i.lc(8);i.zb(2),i.fc("ngIf",n.cartItems.length>0)("ngIfElse",e),i.zb(4),i.fc("ngIf",n.cartItems.length>0)}},directives:[s.a,o.k,r.e,o.j],styles:[".loader[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.95);width:100%;position:fixed;height:100vh;display:flex;z-index:99}.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;display:block;margin:auto}.primary-button[_ngcontent-%COMP%]{background-image:linear-gradient(-45deg,#075ac9,#35c7df);box-shadow:0 4px 10px -1px rgba(0,0,0,.2),0 4px 6px 1px rgba(0,0,0,.05),inset 0 1px 2px 1px transparent,inset 0 18px 32px -2px hsla(0,0%,100%,.1);padding:1.2rem 2.5rem;border-radius:5rem;color:#fff;margin-top:1rem;border:0;font-size:1.4rem}.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:1.6rem;text-rendering:auto}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown[_ngcontent-%COMP%]{-webkit-animation-name:slideInDown;animation-name:slideInDown}.fadeIn[_ngcontent-%COMP%]{-webkit-animation-name:fadeIn;animation-name:fadeIn}.animated[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.alert-msg[_ngcontent-%COMP%]{position:fixed;right:calc(50% - 150px);top:13rem;z-index:100;padding:2rem}@-webkit-keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}.cart-container[_ngcontent-%COMP%]{margin-top:5rem;padding:0 8rem 4rem}.cart-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{border-color:#075ac9}.cart-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:.1rem solid #075ac9}.cart-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#075ac9}.cart-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.5rem;color:#fff;font-weight:700;border-color:#075ac9;max-width:13rem}.cart-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border:.1rem solid #e4e4e4}.cart-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;padding:1.5rem;max-width:13rem}.cart-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{font-size:1.8rem}.cart-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]{width:12rem}.cart-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{color:#075ac9}.cart-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#dae0e5;height:2.5rem;width:2.5rem;font-size:1.6rem;line-height:1}.cart-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 1rem}.cart-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%]{font-size:2rem}.cart-buttons[_ngcontent-%COMP%]{text-align:right;margin-top:1.5rem}.cart-buttons[_ngcontent-%COMP%]   .checkout[_ngcontent-%COMP%]{margin-left:1rem}"]}),f),p=e("3Pt+");function O(t,n){1&t&&(i.Pb(0,"div",23),i.sc(1,"Please verify your mobile number"),i.Ob())}function P(t,n){1&t&&(i.Pb(0,"div",24),i.sc(1,"OTP has been sent to this mobile number, please verify!"),i.Ob())}function _(t,n){1&t&&(i.Pb(0,"div",24),i.sc(1,"Mobile number verified!"),i.Ob())}function h(t,n){if(1&t&&(i.Pb(0,"div",7),i.Pb(1,"label",25),i.sc(2,"Enter OTP"),i.Ob(),i.Lb(3,"input",26),i.Ob()),2&t){var e=i.Zb();i.zb(3),i.fc("formControl",e.otpField)}}function C(t,n){if(1&t){var e=i.Qb();i.Pb(0,"button",27),i.Xb("click",(function(t){return i.mc(e),i.Zb().getOtp()})),i.sc(1,"Get OTP"),i.Ob()}if(2&t){var o=i.Zb();i.fc("disabled",!o.form.get("phone_number").valid)}}function M(t,n){if(1&t){var e=i.Qb();i.Pb(0,"button",27),i.Xb("click",(function(t){return i.mc(e),i.Zb().verifyOtp()})),i.sc(1,"Verify"),i.Ob()}if(2&t){var o=i.Zb();i.fc("disabled",!o.otpField.value)}}function y(t,n){1&t&&(i.Pb(0,"div",28),i.Pb(1,"div",29),i.Pb(2,"label",30),i.sc(3,"Enter email"),i.Ob(),i.Lb(4,"input",31),i.Ob(),i.Pb(5,"div",29),i.Pb(6,"label",32),i.sc(7,"Enter name"),i.Ob(),i.Lb(8,"input",33),i.Ob(),i.Pb(9,"div",34),i.Pb(10,"label",35),i.sc(11,"Enter address"),i.Ob(),i.Lb(12,"textarea",36),i.Ob(),i.Pb(13,"div",29),i.Pb(14,"label",37),i.sc(15,"Enter zip code"),i.Ob(),i.Lb(16,"input",38),i.Ob(),i.Pb(17,"div",29),i.Pb(18,"label",39),i.sc(19,"Enter city"),i.Ob(),i.Lb(20,"input",40),i.Ob(),i.Pb(21,"div",29),i.Pb(22,"label",41),i.sc(23,"Enter state"),i.Ob(),i.Lb(24,"input",42),i.Ob(),i.Pb(25,"div",43),i.Pb(26,"button",44),i.sc(27,"Make Payment"),i.Ob(),i.Ob(),i.Ob())}function v(t,n){if(1&t&&(i.Pb(0,"div",45),i.Lb(1,"img",46),i.Pb(2,"div",47),i.Pb(3,"span",48),i.sc(4),i.Ob(),i.Pb(5,"span",49),i.sc(6),i.Ob(),i.Ob(),i.Lb(7,"div",19),i.Pb(8,"span",50),i.sc(9),i.Ob(),i.Pb(10,"span",51),i.sc(11),i.Ob(),i.Ob()),2&t){var e=n.$implicit;i.zb(1),i.gc("src",e.image,i.oc),i.zb(3),i.tc(e.product_name),i.zb(2),i.tc(e.price),i.zb(3),i.tc(e.quantity),i.zb(2),i.tc(e.total)}}var x,k=((x=function(){function t(n,e,o,r){_classCallCheck(this,t),this.route=n,this.cartApiService=e,this.cart=o,this.router=r,this.isOtpSent=!1,this.isPhoneVerified=!1,this.otpField=new p.e,this.products=[],this.total=0,this.subtotal=0,this.orderId=this.route.snapshot.queryParamMap.get("order_id"),this.orderId||(console.log("No order id present"),this.router.navigate(["/view-cart"])),this.products=this.cart.getCartItems(),this.total=this.products.map((function(t){return t.total})).reduce((function(t,n){return t+n})),this.subtotal=this.total,console.log("products ",this.products),this.form=new p.h({phone_number:new p.e(null,[p.u.minLength(10),p.u.maxLength(12),p.u.required]),user_name:new p.e,email:new p.e,address:new p.e,zip_code:new p.e,city:new p.e,state:new p.e})}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"getOtp",value:function(){var t=this;this.cartApiService.getOtp(this.form.get("phone_number").value).subscribe((function(n){"pending"===n.status&&(t.isOtpSent=!0,t.form.get("phone_number").disable())}))}},{key:"verifyOtp",value:function(){var t=this;this.cartApiService.verifyOtp(this.form.get("phone_number").value,this.otpField.value).subscribe((function(n){"verified"===n.status&&(t.isPhoneVerified=!0)}))}},{key:"makePayment",value:function(){console.log("from value is ",this.form.value),this.updateOrder()}},{key:"updateOrder",value:function(){var t=this;this.cartApiService.updateOrder(this.orderId,this.form.getRawValue()).subscribe((function(n){t.router.navigate(["view-cart/order",n._id],{queryParams:{new_order:!0}})}))}}]),t}()).\u0275fac=function(t){return new(t||x)(i.Kb(r.a),i.Kb(c.a),i.Kb(a.a),i.Kb(r.b))},x.\u0275cmp=i.Eb({type:x,selectors:[["app-checkout"]],decls:35,vars:11,consts:[["title","CHECKOUT"],[1,"checkout-container"],[1,"billing-information"],[1,"billing-information__header"],[1,"billing-information__container",3,"formGroup","ngSubmit"],[1,"verify-phone"],["class","alert alert-primary",4,"ngIf"],[1,"form-group"],["for","phone_number"],["type","text","formControlName","phone_number","id","phone_number","aria-describedby","phoneHelp","placeholder","Enter mobile number",1,"form-control","form-control-lg"],["class","alert alert-success mt-3",4,"ngIf"],["class","form-group",4,"ngIf"],["type","button","class","btn primary-button d-block",3,"disabled","click",4,"ngIf"],["class","details-form",4,"ngIf"],[1,"order-information"],[1,"order-information__header"],[1,"order-information__content"],["class","order-item",4,"ngFor","ngForOf"],[1,"sub-total-item"],[1,"flex-fill"],[1,"total-heading"],[1,"total-count"],[1,"total-item"],[1,"alert","alert-primary"],[1,"alert","alert-success","mt-3"],["for","optField"],["type","text","id","optField","aria-describedby","phoneHelp","placeholder","Enter OTP code",1,"form-control","form-control-lg",3,"formControl"],["type","button",1,"btn","primary-button","d-block",3,"disabled","click"],[1,"details-form"],[1,"form-group","input"],["for","email"],["type","email","formControlName","email","id","email","aria-describedby","emailHelp","placeholder","Enter email",1,"form-control","form-control-lg"],["for","user_name"],["type","text","formControlName","user_name","id","user_name","aria-describedby","nameHelp","placeholder","Enter name",1,"form-control","form-control-lg"],[1,"form-group","textarea"],["for","address"],["type","text","formControlName","address","id","address","aria-describedby","addressHelp","placeholder","Enter address",1,"form-control","form-control-lg","w-100"],["for","zip_code"],["type","number","formControlName","zip_code","id","zip_code","aria-describedby","zipcodeHelp","placeholder","Enter zip code",1,"form-control","form-control-lg"],["for","city"],["type","text","formControlName","city","id","city","aria-describedby","cityHelp","placeholder","Enter city",1,"form-control","form-control-lg"],["for","state"],["type","text","formControlName","state","id","state","aria-describedby","stateHelp","placeholder","Enter state",1,"form-control","form-control-lg"],[1,"make-payment-btn"],["type","submit",1,"btn","primary-button"],[1,"order-item"],["height","80","width","80",2,"object-fit","contain",3,"src"],[1,"name-and-price"],[1,"name"],[1,"price"],[1,"quantity"],[1,"total"]],template:function(t,n){1&t&&(i.Pb(0,"app-main-container",0),i.Pb(1,"div",1),i.Pb(2,"div",2),i.Pb(3,"div",3),i.sc(4,"Billing information"),i.Ob(),i.Pb(5,"form",4),i.Xb("ngSubmit",(function(t){return n.form.valid&&n.makePayment()})),i.Pb(6,"div",5),i.qc(7,O,2,0,"div",6),i.Pb(8,"div",7),i.Pb(9,"label",8),i.sc(10,"Mobile number"),i.Ob(),i.Lb(11,"input",9),i.Ob(),i.qc(12,P,2,0,"div",10),i.qc(13,_,2,0,"div",10),i.qc(14,h,4,1,"div",11),i.qc(15,C,2,1,"button",12),i.qc(16,M,2,1,"button",12),i.Ob(),i.qc(17,y,28,0,"div",13),i.Ob(),i.Ob(),i.Pb(18,"div",14),i.Pb(19,"div",15),i.sc(20,"Your Order"),i.Ob(),i.Pb(21,"div",16),i.qc(22,v,12,5,"div",17),i.Pb(23,"div",18),i.Lb(24,"div",19),i.Pb(25,"span",20),i.sc(26,"Sub total"),i.Ob(),i.Pb(27,"span",21),i.sc(28),i.Ob(),i.Ob(),i.Pb(29,"div",22),i.Lb(30,"div",19),i.Pb(31,"span",20),i.sc(32,"Total"),i.Ob(),i.Pb(33,"span",21),i.sc(34),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&t&&(i.zb(5),i.fc("formGroup",n.form),i.zb(2),i.fc("ngIf",!n.isPhoneVerified),i.zb(5),i.fc("ngIf",n.isOtpSent&&!n.isPhoneVerified),i.zb(1),i.fc("ngIf",n.isPhoneVerified),i.zb(1),i.fc("ngIf",n.isOtpSent&&!n.isPhoneVerified),i.zb(1),i.fc("ngIf",!n.isOtpSent&&!n.isPhoneVerified),i.zb(1),i.fc("ngIf",n.isOtpSent&&!n.isPhoneVerified),i.zb(1),i.fc("ngIf",n.isPhoneVerified),i.zb(5),i.fc("ngForOf",n.products),i.zb(6),i.tc(n.subtotal),i.zb(6),i.tc(n.total))},directives:[s.a,p.w,p.m,p.i,o.k,p.b,p.l,p.g,o.j,p.f,p.q],styles:[".loader[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.95);width:100%;position:fixed;height:100vh;display:flex;z-index:99}.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;display:block;margin:auto}.primary-button[_ngcontent-%COMP%]{background-image:linear-gradient(-45deg,#075ac9,#35c7df);box-shadow:0 4px 10px -1px rgba(0,0,0,.2),0 4px 6px 1px rgba(0,0,0,.05),inset 0 1px 2px 1px transparent,inset 0 18px 32px -2px hsla(0,0%,100%,.1);padding:1.2rem 2.5rem;border-radius:5rem;color:#fff;margin-top:1rem;border:0;font-size:1.4rem}.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:1.6rem;text-rendering:auto}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown[_ngcontent-%COMP%]{-webkit-animation-name:slideInDown;animation-name:slideInDown}.fadeIn[_ngcontent-%COMP%]{-webkit-animation-name:fadeIn;animation-name:fadeIn}.animated[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.alert-msg[_ngcontent-%COMP%]{position:fixed;right:calc(50% - 150px);top:13rem;z-index:100;padding:2rem}@-webkit-keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}.checkout-container[_ngcontent-%COMP%]{margin-top:5rem;padding:0 8rem 4rem;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.checkout-container[_ngcontent-%COMP%]   .billing-information[_ngcontent-%COMP%]{width:calc(50% - 40px);border:.1rem solid #e4e4e4}.checkout-container[_ngcontent-%COMP%]   .billing-information__header[_ngcontent-%COMP%]{padding:1.5rem;font-weight:600;background-color:#075ac9;color:#fff;font-size:16px}.checkout-container[_ngcontent-%COMP%]   .billing-information__container[_ngcontent-%COMP%]{padding:1rem;font-size:14px}.checkout-container[_ngcontent-%COMP%]   .billing-information__container[_ngcontent-%COMP%]   .verify-phone[_ngcontent-%COMP%]{margin:1rem}.checkout-container[_ngcontent-%COMP%]   .billing-information__container[_ngcontent-%COMP%]   .make-payment-btn[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center}.checkout-container[_ngcontent-%COMP%]   .billing-information__container[_ngcontent-%COMP%]   .details-form[_ngcontent-%COMP%]   .form-group.input[_ngcontent-%COMP%]{margin:1rem;width:calc(50% - 2rem);display:inline-block}.checkout-container[_ngcontent-%COMP%]   .billing-information__container[_ngcontent-%COMP%]   .details-form[_ngcontent-%COMP%]   .form-group.textarea[_ngcontent-%COMP%]{margin:1rem}.checkout-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{border-color:#075ac9}.checkout-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:.1rem solid #075ac9}.checkout-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#075ac9}.checkout-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.5rem;color:#fff;font-weight:700;border-color:#075ac9;max-width:13rem}.checkout-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border:.1rem solid #e4e4e4}.checkout-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;padding:1.5rem;max-width:13rem}.checkout-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{font-size:1.8rem}.checkout-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]{width:12rem}.checkout-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{color:#075ac9}.checkout-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#dae0e5;height:2.5rem;width:2.5rem;font-size:1.6rem;line-height:1}.checkout-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 1rem}.checkout-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%]{font-size:2rem}.cart-buttons[_ngcontent-%COMP%]{text-align:right;margin-top:1.5rem}.cart-buttons[_ngcontent-%COMP%]   .checkout[_ngcontent-%COMP%]{margin-left:1rem}.order-information[_ngcontent-%COMP%]{width:calc(50% - 40px);border:.1rem solid #e4e4e4}.order-information__header[_ngcontent-%COMP%]{padding:1.5rem;font-weight:600;background-color:#075ac9;color:#fff;font-size:16px}.order-information__content[_ngcontent-%COMP%]{padding:2rem}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;margin-bottom:.1rem;color:#856404;background-color:#fff3cd}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]   .total-heading[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]{margin-right:2rem}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;margin-bottom:.1rem;color:#0c5460;background-color:#d1ecf1;font-size:15px;font-weight:600}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-heading[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]{margin-right:2rem}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;background-color:hsla(0,0%,94.5%,.5);margin-bottom:.1rem}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]{margin-left:1rem;display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{margin-right:2rem}"]}),x);function w(t,n){1&t&&(i.Pb(0,"div",17),i.sc(1," Your order has been successfully placed! "),i.Ob())}function I(t,n){if(1&t&&(i.Pb(0,"div",18),i.sc(1," Your order id is - \xa0"),i.Pb(2,"span",19),i.sc(3),i.Ob(),i.Ob()),2&t){var e=i.Zb();i.zb(3),i.tc(e.orderDetail._id)}}function z(t,n){if(1&t&&(i.Pb(0,"div",20),i.Lb(1,"img",21),i.Pb(2,"div",22),i.Pb(3,"span",23),i.sc(4),i.Ob(),i.Pb(5,"span",24),i.sc(6),i.Ob(),i.Ob(),i.Lb(7,"div",13),i.Pb(8,"span",25),i.sc(9),i.Ob(),i.Pb(10,"span",26),i.sc(11),i.Ob(),i.Ob()),2&t){var e=n.$implicit;i.zb(1),i.gc("src",e.image,i.oc),i.zb(3),i.tc(e.product_name),i.zb(2),i.tc(e.price),i.zb(3),i.tc(e.quantity),i.zb(2),i.tc(e.total)}}var q,S,L=((q=function(){function t(n,e,o,r){_classCallCheck(this,t),this.route=n,this.router=e,this.utilityService=o,this.cartApiService=r,this.newOrder=!1,this.orderId="",this.total=0,this.subtotal=0,this.newOrder="true"===this.route.snapshot.queryParamMap.get("new_order"),this.orderId=this.route.snapshot.paramMap.get("orderId")}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.utilityService.showLoader.next(!0),this.cartApiService.orderDetails(this.orderId).subscribe((function(n){n&&(t.orderDetail=n,t.total=n.products.map((function(t){return t.total})).reduce((function(t,n){return t+n})),t.subtotal=t.total),t.utilityService.showLoader.next(!1)}),(function(n){return t.utilityService.showLoader.next(!1)}))}}]),t}()).\u0275fac=function(t){return new(t||q)(i.Kb(r.a),i.Kb(r.b),i.Kb(d.a),i.Kb(c.a))},q.\u0275cmp=i.Eb({type:q,selectors:[["app-order-confirmation"]],decls:27,vars:6,consts:[["title","ORDER DETAILS"],[1,"order-detail-container"],["class","alert alert-success",4,"ngIf"],["class","alert alert-info",4,"ngIf"],[1,"order-detail-secondary-container"],[1,"address-information"],[1,"address-information__header"],[1,"address-information__container"],[1,"order-information"],[1,"order-information__header"],[1,"order-information__content"],["class","order-item",4,"ngFor","ngForOf"],[1,"sub-total-item"],[1,"flex-fill"],[1,"total-heading"],[1,"total-count"],[1,"total-item"],[1,"alert","alert-success"],[1,"alert","alert-info"],[1,"alert-info__id"],[1,"order-item"],["height","80","width","80",2,"object-fit","contain",3,"src"],[1,"name-and-price"],[1,"name"],[1,"price"],[1,"quantity"],[1,"total"]],template:function(t,n){1&t&&(i.Pb(0,"app-main-container",0),i.Pb(1,"div",1),i.qc(2,w,2,0,"div",2),i.qc(3,I,4,1,"div",3),i.Ob(),i.Pb(4,"div",4),i.Pb(5,"div",5),i.Pb(6,"div",6),i.sc(7,"Delivery Address"),i.Ob(),i.Pb(8,"div",7),i.sc(9),i.Ob(),i.Ob(),i.Pb(10,"div",8),i.Pb(11,"div",9),i.sc(12,"Your Order"),i.Ob(),i.Pb(13,"div",10),i.qc(14,z,12,5,"div",11),i.Pb(15,"div",12),i.Lb(16,"div",13),i.Pb(17,"span",14),i.sc(18,"Sub total"),i.Ob(),i.Pb(19,"span",15),i.sc(20),i.Ob(),i.Ob(),i.Pb(21,"div",16),i.Lb(22,"div",13),i.Pb(23,"span",14),i.sc(24,"Total"),i.Ob(),i.Pb(25,"span",15),i.sc(26),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&t&&(i.zb(2),i.fc("ngIf",n.newOrder),i.zb(1),i.fc("ngIf",n.orderDetail),i.zb(6),i.uc(" ",null==n.orderDetail?null:n.orderDetail.address," "),i.zb(5),i.fc("ngForOf",null==n.orderDetail?null:n.orderDetail.products),i.zb(6),i.tc(n.subtotal),i.zb(6),i.tc(n.total))},directives:[s.a,o.k,o.j],styles:[".loader[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.95);width:100%;position:fixed;height:100vh;display:flex;z-index:99}.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;display:block;margin:auto}.primary-button[_ngcontent-%COMP%]{background-image:linear-gradient(-45deg,#075ac9,#35c7df);box-shadow:0 4px 10px -1px rgba(0,0,0,.2),0 4px 6px 1px rgba(0,0,0,.05),inset 0 1px 2px 1px transparent,inset 0 18px 32px -2px hsla(0,0%,100%,.1);padding:1.2rem 2.5rem;border-radius:5rem;color:#fff;margin-top:1rem;border:0;font-size:1.4rem}.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:1.6rem;text-rendering:auto}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown[_ngcontent-%COMP%]{-webkit-animation-name:slideInDown;animation-name:slideInDown}.fadeIn[_ngcontent-%COMP%]{-webkit-animation-name:fadeIn;animation-name:fadeIn}.animated[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.alert-msg[_ngcontent-%COMP%]{position:fixed;right:calc(50% - 150px);top:13rem;z-index:100;padding:2rem}@-webkit-keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}.order-detail-container[_ngcontent-%COMP%]{margin-top:5rem;padding:0 8rem;flex-direction:column}.alert-info[_ngcontent-%COMP%], .order-detail-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.alert-info[_ngcontent-%COMP%]{font-size:16px;flex-direction:row;width:80%}.alert-info__id[_ngcontent-%COMP%]{font-weight:600}.order-detail-secondary-container[_ngcontent-%COMP%]{margin-top:2rem;padding:0 8rem 4rem;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.order-detail-secondary-container[_ngcontent-%COMP%]   .address-information[_ngcontent-%COMP%]{width:calc(50% - 40px);border:.1rem solid #e4e4e4}.order-detail-secondary-container[_ngcontent-%COMP%]   .address-information__header[_ngcontent-%COMP%]{padding:1.5rem;font-weight:600;background-color:#075ac9;color:#fff;font-size:16px}.order-detail-secondary-container[_ngcontent-%COMP%]   .address-information__container[_ngcontent-%COMP%]{padding:1rem;font-size:14px}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{border-color:#075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:.1rem solid #075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.5rem;color:#fff;font-weight:700;border-color:#075ac9;max-width:13rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border:.1rem solid #e4e4e4}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;padding:1.5rem;max-width:13rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{font-size:1.8rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]{width:12rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{color:#075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#dae0e5;height:2.5rem;width:2.5rem;font-size:1.6rem;line-height:1}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 1rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%]{font-size:2rem}.order-information[_ngcontent-%COMP%]{width:calc(50% - 40px);border:.1rem solid #e4e4e4}.order-information__header[_ngcontent-%COMP%]{padding:1.5rem;font-weight:600;background-color:#075ac9;color:#fff;font-size:16px}.order-information__content[_ngcontent-%COMP%]{padding:2rem}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;margin-bottom:.1rem;color:#856404;background-color:#fff3cd}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]   .total-heading[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]{margin-right:2rem}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;margin-bottom:.1rem;color:#0c5460;background-color:#d1ecf1;font-size:15px;font-weight:600}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-heading[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]{margin-right:2rem}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;background-color:hsla(0,0%,94.5%,.5);margin-bottom:.1rem}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]{margin-left:1rem;display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{margin-right:2rem}"]}),q),D=e("PCNd"),E=[{path:"",component:u},{path:"checkout",component:k},{path:"order/:orderId",component:L}],j=((S=function t(){_classCallCheck(this,t)}).\u0275mod=i.Ib({type:S}),S.\u0275inj=i.Hb({factory:function(t){return new(t||S)},imports:[[o.b,p.s,D.a,r.f.forChild(E)],r.f]}),S)}}]);