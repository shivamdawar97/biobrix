(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{GcBr:function(t,n,e){"use strict";e.r(n),e.d(n,"CartModule",(function(){return V}));var o=e("ofXK"),r=e("tyNb"),i=e("fXoL"),a=e("7pSQ"),c=e("ht2v"),d=e("qeeY"),s=e("1lc2");function l(t,n){if(1&t){const t=i.Rb();i.Qb(0,"button",8),i.Yb("click",(function(n){return i.oc(t),i.ac().clearCart()})),i.vc(1,"Clear Cart"),i.Pb()}}function m(t,n){if(1&t){const t=i.Rb();i.Qb(0,"tr",12),i.Qb(1,"td"),i.Mb(2,"img",13),i.Pb(),i.Qb(3,"td",14),i.vc(4),i.Pb(),i.Qb(5,"td"),i.Mb(6,"i",15),i.vc(7),i.Pb(),i.Qb(8,"td",16),i.Qb(9,"button",17),i.Yb("click",(function(e){i.oc(t);const o=n.$implicit;return i.ac(2).decrementQuantity(o)})),i.vc(10,"-"),i.Pb(),i.Qb(11,"span"),i.vc(12),i.Pb(),i.Qb(13,"button",17),i.Yb("click",(function(e){i.oc(t);const o=n.$implicit;return i.ac(2).incrementQuantity(o)})),i.vc(14,"+"),i.Pb(),i.Pb(),i.Qb(15,"td"),i.Mb(16,"i",15),i.vc(17),i.Pb(),i.Qb(18,"td"),i.Qb(19,"button",17),i.Yb("click",(function(e){i.oc(t);const o=n.$implicit;return i.ac(2).removeFromCart(o)})),i.Mb(20,"i",18),i.Pb(),i.Pb(),i.Pb()}if(2&t){const t=n.$implicit;i.Ab(2),i.hc("src",t.image,i.rc),i.ic("alt","",t.product_name," image"),i.Ab(2),i.wc(t.product_name),i.Ab(3),i.xc(" ",t.price,""),i.Ab(5),i.wc(t.quantity),i.Ab(5),i.xc(" ",t.total,"")}}function b(t,n){if(1&t&&(i.Qb(0,"table",9),i.Qb(1,"thead"),i.Qb(2,"tr"),i.Mb(3,"th",10),i.Qb(4,"th",10),i.vc(5,"Product"),i.Pb(),i.Qb(6,"th",10),i.vc(7,"Price"),i.Pb(),i.Qb(8,"th",10),i.vc(9,"Quantity"),i.Pb(),i.Qb(10,"th",10),i.vc(11,"Total"),i.Pb(),i.Qb(12,"th",10),i.vc(13,"Remove"),i.Pb(),i.Pb(),i.Pb(),i.Qb(14,"tbody"),i.tc(15,m,21,6,"tr",11),i.Pb(),i.Pb()),2&t){const t=i.ac();i.Ab(15),i.gc("ngForOf",t.cartItems)}}function g(t,n){if(1&t){const t=i.Rb();i.Qb(0,"button",19),i.Yb("click",(function(n){return i.oc(t),i.ac().checkout()})),i.vc(1," Checkout "),i.Pb()}}function f(t,n){1&t&&(i.Qb(0,"div",20),i.Qb(1,"h2",21),i.vc(2,"Your Cart is empty"),i.Pb(),i.Pb())}let p=(()=>{class t{constructor(t,n,e,o){this.cartService=t,this.cartApiService=n,this.router=e,this.utilityService=o,this.cartItems=[],this.maxQuantiy=10}getCartItems(){this.cartItems=this.cartService.getCartItems()}removeFromCart(t){this.cartService.removeFromCart(t)}decrementQuantity(t){t.quantity>=0&&(t.quantity=t.quantity-1,t.total=t.total-t.price),0!==t.quantity?this.cartService.saveCart(t):this.cartService.removeFromCart(t)}incrementQuantity(t){t.quantity<this.maxQuantiy&&(t.quantity=t.quantity+1,t.total=t.total+t.price),this.cartService.saveCart(t)}clearCart(){this.cartService.clearCart()}checkout(){this.utilityService.showLoader.next(!0),this.cartApiService.createOrder(this.cartItems).subscribe(t=>{this.utilityService.showLoader.next(!1),t&&this.router.navigate(["view-cart/checkout"],{queryParams:{order_id:t._id}})},t=>this.utilityService.showLoader.next(!1))}ngOnInit(){this.getCartItems(),this.cartService.CartUpdateSubject.subscribe(t=>{this.cartItems=t.items})}}return t.\u0275fac=function(n){return new(n||t)(i.Lb(a.a),i.Lb(c.a),i.Lb(r.b),i.Lb(d.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-cart"]],decls:10,vars:4,consts:[["title","CART"],[1,"cart-container"],["class","del-btn btn btn-outline-danger",3,"click",4,"ngIf"],["class","table",4,"ngIf","ngIfElse"],[1,"cart-buttons"],["routerLink","/products/all",1,"btn","primary-button"],["type","button","class","btn primary-button checkout",3,"click",4,"ngIf"],["emptyCart",""],[1,"del-btn","btn","btn-outline-danger",3,"click"],[1,"table"],["scope","col"],["class","product",4,"ngFor","ngForOf"],[1,"product"],[1,"product-img",3,"src","alt"],[1,"product-name"],[1,"fa","fa-inr"],[1,"product-quantity"],["type","button",1,"btn",3,"click"],["aria-hidden","true",1,"fa","fa-times"],["type","button",1,"btn","primary-button","checkout",3,"click"],[1,"text-center","cart-empty"],[1,"text-muted"]],template:function(t,n){if(1&t&&(i.Qb(0,"app-main-container",0),i.Qb(1,"div",1),i.tc(2,l,2,0,"button",2),i.tc(3,b,16,1,"table",3),i.Qb(4,"div",4),i.Qb(5,"a",5),i.vc(6," Continue Shopping "),i.Pb(),i.tc(7,g,2,0,"button",6),i.Pb(),i.Pb(),i.tc(8,f,3,0,"ng-template",null,7,i.uc),i.Pb()),2&t){const t=i.mc(9);i.Ab(2),i.gc("ngIf",n.cartItems.length>0),i.Ab(1),i.gc("ngIf",n.cartItems.length>0)("ngIfElse",t),i.Ab(4),i.gc("ngIf",n.cartItems.length>0)}},directives:[s.a,o.k,r.e,o.j],styles:[".loader[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.95);width:100%;position:fixed;height:100vh;display:flex;z-index:99}.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;display:block;margin:auto}.primary-button[_ngcontent-%COMP%]{position:relative;border:.1rem solid #000;color:#000;padding:1.2rem 2.5rem;border-radius:.5rem;margin-top:1rem;font-size:1.4rem;outline:none;transition:all .2s}.primary-button[_ngcontent-%COMP%]:hover{border:none;color:#fff;background-image:linear-gradient(-45deg,#075ac9,#35c7df);box-shadow:0 4px 10px -1px rgba(0,0,0,.2),0 4px 6px 1px rgba(0,0,0,.05),inset 0 1px 2px 1px transparent,inset 0 18px 32px -2px hsla(0,0%,100%,.1);transform:translateY(-4px)}.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:1.6rem;text-rendering:auto}.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus{outline:none;transform:translateY(1px) scale(.96);box-shadow:0 .5rem 1rem rgba(0,0,0,.2)}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown[_ngcontent-%COMP%]{-webkit-animation-name:slideInDown;animation-name:slideInDown}.fadeIn[_ngcontent-%COMP%]{-webkit-animation-name:fadeIn;animation-name:fadeIn}.animated[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.alert-msg[_ngcontent-%COMP%]{position:fixed;right:calc(50% - 150px);top:13rem;z-index:100;padding:2rem}.main-container[_ngcontent-%COMP%]{padding-top:12rem}@-webkit-keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes moveInTop{0%{opacity:0;transform:translateY(-2rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInTop{0%{opacity:0;transform:translateY(-2rem)}to{opacity:1;transform:translateY(0)}}.cart-container[_ngcontent-%COMP%]{margin-top:5rem;padding:0 8rem 4rem;min-height:50rem}.cart-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{border-color:#075ac9}.cart-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:.1rem solid #075ac9}.cart-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#075ac9}.cart-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.5rem;color:#fff;font-weight:700;border-color:#075ac9;max-width:13rem}.cart-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border:.1rem solid #cecece}.cart-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;padding:1.5rem;max-width:13rem}.cart-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{font-size:1.8rem}.cart-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]{width:12rem}.cart-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{color:#075ac9}.cart-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#dae0e5;height:2.5rem;width:2.5rem;font-size:1.6rem;line-height:1}.cart-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 1rem}.cart-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%]{font-size:2rem}.cart-buttons[_ngcontent-%COMP%]{text-align:right;margin-top:1.5rem}.cart-buttons[_ngcontent-%COMP%]   .checkout[_ngcontent-%COMP%]{margin-left:1rem}.del-btn[_ngcontent-%COMP%]{font-size:1.5rem;float:right;margin-bottom:1rem}"]}),t})();var u=e("3Pt+"),P=e("AytR"),h=e("JIr8"),_=e("tk/3"),O=e("p4Ho");let C=(()=>{class t{constructor(t,n){this.http=t,this.httpErrorHandlerService=n,this.BASE_URL=P.a.BASE_URL,this.INITIATE_PAYMENT="payment/initiate_payment/",this.VERIFY_PAYMENT="payment/validate_signature/"}initiatePayment(t,n){return this.http.post(`${this.BASE_URL}${this.INITIATE_PAYMENT}${t}`,n,{headers:{"Access-Control-Allow-Methods":"*"}}).pipe(Object(h.a)(this.httpErrorHandlerService.handleErr))}verifyPayment(t){return this.http.post(`${this.BASE_URL}${this.VERIFY_PAYMENT}`,t,{headers:{"Access-Control-Allow-Methods":"*"}}).pipe(Object(h.a)(this.httpErrorHandlerService.handleErr))}}return t.\u0275fac=function(n){return new(n||t)(i.Ub(_.b),i.Ub(O.a))},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),M=(()=>{class t{constructor(){}get nativeWindow(){return window}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function y(t,n){1&t&&(i.Qb(0,"div",4),i.Mb(1,"i",5),i.Qb(2,"div",6),i.Qb(3,"strong"),i.vc(4," Your has been successfully placed! \xa0 \xa0"),i.Pb(),i.Qb(5,"a",7),i.vc(6,"Click here "),i.Pb(),i.vc(7," to track your order. "),i.Pb(),i.Pb())}function v(t,n){if(1&t&&(i.Qb(0,"div",31),i.Mb(1,"img",32),i.Qb(2,"div",33),i.Qb(3,"span",34),i.vc(4),i.Pb(),i.Qb(5,"span",35),i.vc(6),i.Pb(),i.Pb(),i.Mb(7,"div",14),i.Qb(8,"span",36),i.vc(9),i.Pb(),i.Qb(10,"span",37),i.vc(11),i.Pb(),i.Pb()),2&t){const t=n.$implicit;i.Ab(1),i.hc("src",t.image,i.rc),i.Ab(3),i.wc(t.product_name),i.Ab(2),i.wc(t.price),i.Ab(3),i.wc(t.quantity),i.Ab(2),i.wc(t.total)}}function x(t,n){1&t&&(i.Qb(0,"div",38),i.vc(1,"Please verify your mobile number"),i.Pb())}function w(t,n){1&t&&(i.Qb(0,"div",39),i.vc(1,"OTP has been sent to this mobile number, please verify!"),i.Pb())}function k(t,n){1&t&&(i.Qb(0,"div",39),i.vc(1,"Mobile number verified!"),i.Pb())}function I(t,n){1&t&&(i.Qb(0,"div",40),i.vc(1,"Mobile number verification failed!"),i.Pb())}function Q(t,n){if(1&t&&(i.Qb(0,"div",23),i.Qb(1,"label",41),i.vc(2,"Enter OTP"),i.Pb(),i.Mb(3,"input",42),i.Pb()),2&t){const t=i.ac(2);i.Ab(3),i.gc("formControl",t.otpField)}}function A(t,n){if(1&t){const t=i.Rb();i.Qb(0,"button",43),i.Yb("click",(function(n){return i.oc(t),i.ac(2).getOtp()})),i.vc(1,"Get OTP"),i.Pb()}if(2&t){const t=i.ac(2);i.gc("disabled",!t.form.get("phone_number").valid)}}function Y(t,n){if(1&t){const t=i.Rb();i.Qb(0,"button",43),i.Yb("click",(function(n){return i.oc(t),i.ac(2).verifyOtp()})),i.vc(1,"Verify"),i.Pb()}if(2&t){const t=i.ac(2);i.gc("disabled",!t.otpField.value)}}function z(t,n){1&t&&(i.Qb(0,"div",60),i.Qb(1,"button",61),i.vc(2,"Make Payment"),i.Pb(),i.Pb())}function S(t,n){if(1&t&&(i.Qb(0,"div",44),i.Qb(1,"div",45),i.Qb(2,"label",46),i.vc(3,"Email"),i.Pb(),i.Mb(4,"input",47),i.Pb(),i.Qb(5,"div",45),i.Qb(6,"label",48),i.vc(7,"Full Name"),i.Pb(),i.Mb(8,"input",49),i.Pb(),i.Qb(9,"div",50),i.Qb(10,"label",51),i.vc(11,"Billing address"),i.Pb(),i.Mb(12,"textarea",52),i.Pb(),i.Qb(13,"div",45),i.Qb(14,"label",53),i.vc(15,"Zip code"),i.Pb(),i.Mb(16,"input",54),i.Pb(),i.Qb(17,"div",45),i.Qb(18,"label",55),i.vc(19,"City"),i.Pb(),i.Mb(20,"input",56),i.Pb(),i.Qb(21,"div",45),i.Qb(22,"label",57),i.vc(23,"State"),i.Pb(),i.Mb(24,"input",58),i.Pb(),i.tc(25,z,3,0,"div",59),i.Pb()),2&t){const t=i.ac(2);i.Ab(25),i.gc("ngIf",!t.isOrderPlaced)}}function L(t,n){if(1&t){const t=i.Rb();i.Qb(0,"div",8),i.Qb(1,"div",9),i.Qb(2,"div",10),i.vc(3,"Your Order"),i.Pb(),i.Qb(4,"div",11),i.tc(5,v,12,5,"div",12),i.Qb(6,"div",13),i.Mb(7,"div",14),i.Qb(8,"span",15),i.vc(9,"Sub total"),i.Pb(),i.Qb(10,"span",16),i.vc(11),i.Pb(),i.Pb(),i.Qb(12,"div",17),i.Mb(13,"div",14),i.Qb(14,"span",15),i.vc(15,"Total"),i.Pb(),i.Qb(16,"span",16),i.vc(17),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Qb(18,"div",18),i.Qb(19,"div",19),i.vc(20,"Billing information"),i.Pb(),i.Qb(21,"form",20),i.Yb("ngSubmit",(function(n){i.oc(t);const e=i.ac();return e.form.valid&&e.makePayment()})),i.Qb(22,"div",21),i.tc(23,x,2,0,"div",22),i.Qb(24,"div",23),i.Qb(25,"label",24),i.vc(26,"Mobile number"),i.Pb(),i.Mb(27,"input",25),i.Pb(),i.tc(28,w,2,0,"div",26),i.tc(29,k,2,0,"div",26),i.tc(30,I,2,0,"div",27),i.tc(31,Q,4,1,"div",28),i.tc(32,A,2,1,"button",29),i.tc(33,Y,2,1,"button",29),i.Pb(),i.tc(34,S,26,1,"div",30),i.Pb(),i.Pb(),i.Pb()}if(2&t){const t=i.ac();i.Ab(5),i.gc("ngForOf",t.products),i.Ab(6),i.wc(t.subtotal),i.Ab(6),i.wc(t.total),i.Ab(4),i.gc("formGroup",t.form),i.Ab(2),i.gc("ngIf",!t.isPhoneVerified),i.Ab(5),i.gc("ngIf",t.isOtpSent&&!t.isPhoneVerified),i.Ab(1),i.gc("ngIf",t.isPhoneVerified),i.Ab(1),i.gc("ngIf",t.isVerficationFailed),i.Ab(1),i.gc("ngIf",t.isOtpSent&&!t.isPhoneVerified),i.Ab(1),i.gc("ngIf",!t.isOtpSent&&!t.isPhoneVerified),i.Ab(1),i.gc("ngIf",t.isOtpSent&&!t.isPhoneVerified),i.Ab(1),i.gc("ngIf",t.isPhoneVerified)}}function E(t,n){1&t&&i.Mb(0,"div",62)}let q=(()=>{class t{constructor(t,n,e,o,r,i){this.route=t,this.cartApiService=n,this.razorpayPaymentService=e,this.cart=o,this.router=r,this.windowRef=i,this.isLoading=!1,this.isOtpSent=!1,this.isPhoneVerified=!1,this.otpField=new u.e,this.products=[],this.total=0,this.subtotal=0,this.isOrderPlaced=!1,this.isVerficationFailed=!1,this.orderId=this.route.snapshot.queryParamMap.get("order_id"),this.orderId||(console.log("No order id present"),this.router.navigate(["/view-cart"]))}ngOnInit(){scrollTo(0,0),this.isLoading=!0,this.cartApiService.orderDetails(this.orderId).subscribe(t=>{this.isLoading=!1,this.products=t.products,this.total=t.total,this.subtotal=this.total,this.isOrderPlaced=t.payment_status,this.initiateForm(this.isOrderPlaced?t:null),this.isOrderPlaced&&(this.isPhoneVerified=!0,this.form.disable())})}initiateForm(t){var n,e,o,r,i,a,c;this.form=new u.h({phone_number:new u.e(null===(n=t)||void 0===n?void 0:n.phone_number,[u.v.minLength(10),u.v.maxLength(10),u.v.required]),user_name:new u.e(null===(e=t)||void 0===e?void 0:e.user_name,u.v.required),email:new u.e(null===(o=t)||void 0===o?void 0:o.email,[u.v.required,u.v.email]),address:new u.e(null===(r=t)||void 0===r?void 0:r.address,u.v.required),zip_code:new u.e(null===(i=t)||void 0===i?void 0:i.zip_code,u.v.required),city:new u.e(null===(a=t)||void 0===a?void 0:a.city,u.v.required),state:new u.e(null===(c=t)||void 0===c?void 0:c.state,u.v.required)})}getOtp(){this.isLoading=!0,this.cartApiService.getOtp(this.form.get("phone_number").value).subscribe(t=>{this.isLoading=!1,"pending"===t.status&&(this.isOtpSent=!0,this.form.get("phone_number").disable())})}verifyOtp(){try{this.cartApiService.verifyOtp(this.form.get("phone_number").value,this.otpField.value).subscribe(t=>{"verified"===t.status&&(this.isVerficationFailed=!1,this.isPhoneVerified=!0)})}catch(t){this.isVerficationFailed=!0}}makePayment(){this.form.valid&&this.razorpayPaymentService.initiatePayment(this.orderId,this.form.getRawValue()).subscribe(t=>{this.payWithRazor(t)})}payWithRazor(t){const n={key:"rzp_test_htUikbcBMPbM6C",amount:t.total,currency:"INR",name:"Biobrix",description:"Healthcarre",image:"../../../../assets/BIOBRIX_LOGO.svg",order_id:t.payment_id,modal:{escape:!1},prefill:{name:t.user_name,email:t.email,contact:t.phone_number},theme:{color:"#0c238a"}};n.handler=(t,n)=>{this.verifyPayment(t)},n.modal.ondismiss=()=>{console.log("Transaction cancelled.")},new this.windowRef.nativeWindow.Razorpay(n).open()}verifyPayment(t){this.razorpayPaymentService.verifyPayment(Object.assign(Object.assign({},t),{order_id:this.orderId})).subscribe(t=>{console.log("Success!! Order Placed")})}}return t.\u0275fac=function(n){return new(n||t)(i.Lb(r.a),i.Lb(c.a),i.Lb(C),i.Lb(a.a),i.Lb(r.b),i.Lb(M))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-checkout"]],decls:5,vars:3,consts:[["title","CHECKOUT"],["class","media payment-success",4,"ngIf"],["class","checkout-container",4,"ngIf","ngIfElse"],["loading_circular",""],[1,"media","payment-success"],[1,"align-self-center","mr-3","far","fa-check-circle","payment-success__done"],[1,"payment-success__body"],["href","#",1,"alert-link"],[1,"checkout-container"],[1,"order-information"],[1,"order-information__header"],[1,"order-information__content"],["class","order-item",4,"ngFor","ngForOf"],[1,"sub-total-item"],[1,"flex-fill"],[1,"total-heading"],[1,"total-count"],[1,"total-item"],[1,"billing-information"],[1,"billing-information__header"],[1,"billing-information__container",3,"formGroup","ngSubmit"],[1,"verify-phone"],["class","alert alert-primary",4,"ngIf"],[1,"form-group"],["for","phone_number"],["type","text","maxlength","10","formControlName","phone_number","id","phone_number","aria-describedby","phoneHelp","placeholder","Enter mobile number",1,"form-control","form-control-lg"],["class","alert alert-success mt-3",4,"ngIf"],["class","alert alert-danger mt-3",4,"ngIf"],["class","form-group",4,"ngIf"],["type","button","class","btn primary-button d-block",3,"disabled","click",4,"ngIf"],["class","details-form",4,"ngIf"],[1,"order-item"],["height","80","width","80",2,"object-fit","contain",3,"src"],[1,"name-and-price"],[1,"name"],[1,"price"],[1,"quantity"],[1,"total"],[1,"alert","alert-primary"],[1,"alert","alert-success","mt-3"],[1,"alert","alert-danger","mt-3"],["for","optField"],["type","text","id","optField","aria-describedby","phoneHelp","placeholder","Enter OTP code",1,"form-control","form-control-lg",3,"formControl"],["type","button",1,"btn","primary-button","d-block",3,"disabled","click"],[1,"details-form"],[1,"form-group","input"],["for","email"],["type","email","formControlName","email","id","email","aria-describedby","emailHelp","placeholder","Enter email",1,"form-control","form-control-lg"],["for","user_name"],["type","text","formControlName","user_name","id","user_name","aria-describedby","nameHelp","placeholder","Enter name",1,"form-control","form-control-lg"],[1,"form-group","textarea"],["for","address"],["type","text","formControlName","address","id","address","aria-describedby","addressHelp","placeholder","Enter address",1,"form-control","form-control-lg","w-100"],["for","zip_code"],["type","number","formControlName","zip_code","id","zip_code","aria-describedby","zipcodeHelp","placeholder","Enter zip code",1,"form-control","form-control-lg"],["for","city"],["type","text","formControlName","city","id","city","aria-describedby","cityHelp","placeholder","Enter city",1,"form-control","form-control-lg"],["for","state"],["type","text","formControlName","state","id","state","aria-describedby","stateHelp","placeholder","Enter state",1,"form-control","form-control-lg"],["class","make-payment-btn",4,"ngIf"],[1,"make-payment-btn"],["type","submit",1,"btn","primary-button"],[1,"lds-dual-ring"]],template:function(t,n){if(1&t&&(i.Qb(0,"app-main-container",0),i.tc(1,y,8,0,"div",1),i.tc(2,L,35,12,"div",2),i.tc(3,E,1,0,"ng-template",null,3,i.uc),i.Pb()),2&t){const t=i.mc(4);i.Ab(1),i.gc("ngIf",n.isOrderPlaced),i.Ab(1),i.gc("ngIf",!n.isLoading)("ngIfElse",t)}},directives:[s.a,o.k,o.j,u.x,u.n,u.i,u.b,u.k,u.m,u.g,u.f,u.r],styles:['.loader[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.95);width:100%;position:fixed;height:100vh;display:flex;z-index:99}.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;display:block;margin:auto}.primary-button[_ngcontent-%COMP%]{position:relative;border:.1rem solid #000;color:#000;padding:1.2rem 2.5rem;border-radius:.5rem;margin-top:1rem;font-size:1.4rem;outline:none;transition:all .2s}.primary-button[_ngcontent-%COMP%]:hover{border:none;color:#fff;background-image:linear-gradient(-45deg,#075ac9,#35c7df);box-shadow:0 4px 10px -1px rgba(0,0,0,.2),0 4px 6px 1px rgba(0,0,0,.05),inset 0 1px 2px 1px transparent,inset 0 18px 32px -2px hsla(0,0%,100%,.1);transform:translateY(-4px)}.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:1.6rem;text-rendering:auto}.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus{outline:none;transform:translateY(1px) scale(.96);box-shadow:0 .5rem 1rem rgba(0,0,0,.2)}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown[_ngcontent-%COMP%]{-webkit-animation-name:slideInDown;animation-name:slideInDown}.fadeIn[_ngcontent-%COMP%]{-webkit-animation-name:fadeIn;animation-name:fadeIn}.animated[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.alert-msg[_ngcontent-%COMP%]{position:fixed;right:calc(50% - 150px);top:13rem;z-index:100;padding:2rem}.main-container[_ngcontent-%COMP%]{padding-top:12rem}@-webkit-keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes moveInTop{0%{opacity:0;transform:translateY(-2rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInTop{0%{opacity:0;transform:translateY(-2rem)}to{opacity:1;transform:translateY(0)}}.checkout-container[_ngcontent-%COMP%]{margin-top:5rem;padding:0 8rem 4rem;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.checkout-container[_ngcontent-%COMP%]   .billing-information[_ngcontent-%COMP%]{width:calc(50% - 40px);border:.1rem solid #cecece}.checkout-container[_ngcontent-%COMP%]   .billing-information__header[_ngcontent-%COMP%]{padding:1.5rem;font-weight:600;background-color:#075ac9;color:#fff;font-size:16px}.checkout-container[_ngcontent-%COMP%]   .billing-information__container[_ngcontent-%COMP%]{padding:1rem;font-size:14px}.checkout-container[_ngcontent-%COMP%]   .billing-information__container[_ngcontent-%COMP%]   .verify-phone[_ngcontent-%COMP%]{margin:1rem}.checkout-container[_ngcontent-%COMP%]   .billing-information__container[_ngcontent-%COMP%]   .make-payment-btn[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center}.checkout-container[_ngcontent-%COMP%]   .billing-information__container[_ngcontent-%COMP%]   .details-form[_ngcontent-%COMP%]   .form-group.input[_ngcontent-%COMP%]{margin:1rem;width:calc(50% - 2rem);display:inline-block}.checkout-container[_ngcontent-%COMP%]   .billing-information__container[_ngcontent-%COMP%]   .details-form[_ngcontent-%COMP%]   .form-group.textarea[_ngcontent-%COMP%]{margin:1rem}.checkout-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{border-color:#075ac9}.checkout-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:.1rem solid #075ac9}.checkout-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#075ac9}.checkout-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.5rem;color:#fff;font-weight:700;border-color:#075ac9;max-width:13rem}.checkout-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border:.1rem solid #cecece}.checkout-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;padding:1.5rem;max-width:13rem}.checkout-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{font-size:1.8rem}.checkout-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]{width:12rem}.checkout-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{color:#075ac9}.checkout-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#dae0e5;height:2.5rem;width:2.5rem;font-size:1.6rem;line-height:1}.checkout-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 1rem}.checkout-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%]{font-size:2rem}.cart-buttons[_ngcontent-%COMP%]{text-align:right;margin-top:1.5rem}.cart-buttons[_ngcontent-%COMP%]   .checkout[_ngcontent-%COMP%]{margin-left:1rem}.order-information[_ngcontent-%COMP%]{width:calc(50% - 40px);border:.1rem solid #cecece}.order-information__header[_ngcontent-%COMP%]{padding:1.5rem;font-weight:600;background-color:#075ac9;color:#fff;font-size:16px}.order-information__content[_ngcontent-%COMP%]{padding:2rem}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;margin-bottom:.1rem;color:#856404;background-color:#fff3cd}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]   .total-heading[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]{margin-right:2rem}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;margin-bottom:.1rem;color:#0c5460;background-color:#d1ecf1;font-size:15px;font-weight:600}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-heading[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]{margin-right:2rem}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;background-color:hsla(0,0%,94.5%,.5);margin-bottom:.1rem}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]{margin-left:1rem;display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{margin-right:2rem}.payment-success[_ngcontent-%COMP%]{margin:3rem;padding:1rem;border:3px solid #0dc70d}.payment-success__done[_ngcontent-%COMP%]{font-size:5rem;color:#0dc70d}.payment-success__body[_ngcontent-%COMP%]{margin:auto}.lds-dual-ring[_ngcontent-%COMP%]{display:inline-block;width:100%;min-height:60rem;position:relative}.lds-dual-ring[_ngcontent-%COMP%]:after{content:" ";display:block;float:right;text-align:center;width:6.4rem;height:6.4rem;position:absolute;left:46%;border-radius:50%;border-color:#075ac9 transparent;border-style:solid;border-width:.6rem;-webkit-animation:lds-dual-ring 1.2s linear infinite;animation:lds-dual-ring 1.2s linear infinite}@-webkit-keyframes lds-dual-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-dual-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}']}),t})();function F(t,n){1&t&&(i.Qb(0,"div",17),i.vc(1," Your order has been successfully placed! "),i.Pb())}function D(t,n){if(1&t&&(i.Qb(0,"div",18),i.vc(1," Your order id is - \xa0"),i.Qb(2,"span",19),i.vc(3),i.Pb(),i.Pb()),2&t){const t=i.ac();i.Ab(3),i.wc(t.orderDetail._id)}}function T(t,n){if(1&t&&(i.Qb(0,"div",20),i.Mb(1,"img",21),i.Qb(2,"div",22),i.Qb(3,"span",23),i.vc(4),i.Pb(),i.Qb(5,"span",24),i.vc(6),i.Pb(),i.Pb(),i.Mb(7,"div",13),i.Qb(8,"span",25),i.vc(9),i.Pb(),i.Qb(10,"span",26),i.vc(11),i.Pb(),i.Pb()),2&t){const t=n.$implicit;i.Ab(1),i.hc("src",t.image,i.rc),i.Ab(3),i.wc(t.product_name),i.Ab(2),i.wc(t.price),i.Ab(3),i.wc(t.quantity),i.Ab(2),i.wc(t.total)}}let R=(()=>{class t{constructor(t,n,e,o){this.route=t,this.router=n,this.utilityService=e,this.cartApiService=o,this.newOrder=!1,this.orderId="",this.total=0,this.subtotal=0,this.newOrder="true"===this.route.snapshot.queryParamMap.get("new_order"),this.orderId=this.route.snapshot.paramMap.get("orderId")}ngOnInit(){this.utilityService.showLoader.next(!0),this.cartApiService.orderDetails(this.orderId).subscribe(t=>{t&&(this.orderDetail=t,this.total=t.products.map(t=>t.total).reduce((t,n)=>t+n),this.subtotal=this.total),this.utilityService.showLoader.next(!1)},t=>this.utilityService.showLoader.next(!1))}}return t.\u0275fac=function(n){return new(n||t)(i.Lb(r.a),i.Lb(r.b),i.Lb(d.a),i.Lb(c.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-order-confirmation"]],decls:27,vars:6,consts:[["title","ORDER DETAILS"],[1,"order-detail-container"],["class","alert alert-success",4,"ngIf"],["class","alert alert-info",4,"ngIf"],[1,"order-detail-secondary-container"],[1,"address-information"],[1,"address-information__header"],[1,"address-information__container"],[1,"order-information"],[1,"order-information__header"],[1,"order-information__content"],["class","order-item",4,"ngFor","ngForOf"],[1,"sub-total-item"],[1,"flex-fill"],[1,"total-heading"],[1,"total-count"],[1,"total-item"],[1,"alert","alert-success"],[1,"alert","alert-info"],[1,"alert-info__id"],[1,"order-item"],["height","80","width","80",2,"object-fit","contain",3,"src"],[1,"name-and-price"],[1,"name"],[1,"price"],[1,"quantity"],[1,"total"]],template:function(t,n){1&t&&(i.Qb(0,"app-main-container",0),i.Qb(1,"div",1),i.tc(2,F,2,0,"div",2),i.tc(3,D,4,1,"div",3),i.Pb(),i.Qb(4,"div",4),i.Qb(5,"div",5),i.Qb(6,"div",6),i.vc(7,"Delivery Address"),i.Pb(),i.Qb(8,"div",7),i.vc(9),i.Pb(),i.Pb(),i.Qb(10,"div",8),i.Qb(11,"div",9),i.vc(12,"Your Order"),i.Pb(),i.Qb(13,"div",10),i.tc(14,T,12,5,"div",11),i.Qb(15,"div",12),i.Mb(16,"div",13),i.Qb(17,"span",14),i.vc(18,"Sub total"),i.Pb(),i.Qb(19,"span",15),i.vc(20),i.Pb(),i.Pb(),i.Qb(21,"div",16),i.Mb(22,"div",13),i.Qb(23,"span",14),i.vc(24,"Total"),i.Pb(),i.Qb(25,"span",15),i.vc(26),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb()),2&t&&(i.Ab(2),i.gc("ngIf",n.newOrder),i.Ab(1),i.gc("ngIf",n.orderDetail),i.Ab(6),i.xc(" ",null==n.orderDetail?null:n.orderDetail.address," "),i.Ab(5),i.gc("ngForOf",null==n.orderDetail?null:n.orderDetail.products),i.Ab(6),i.wc(n.subtotal),i.Ab(6),i.wc(n.total))},directives:[s.a,o.k,o.j],styles:[".loader[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.95);width:100%;position:fixed;height:100vh;display:flex;z-index:99}.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;display:block;margin:auto}.primary-button[_ngcontent-%COMP%]{position:relative;border:.1rem solid #000;color:#000;padding:1.2rem 2.5rem;border-radius:.5rem;margin-top:1rem;font-size:1.4rem;outline:none;transition:all .2s}.primary-button[_ngcontent-%COMP%]:hover{border:none;color:#fff;background-image:linear-gradient(-45deg,#075ac9,#35c7df);box-shadow:0 4px 10px -1px rgba(0,0,0,.2),0 4px 6px 1px rgba(0,0,0,.05),inset 0 1px 2px 1px transparent,inset 0 18px 32px -2px hsla(0,0%,100%,.1);transform:translateY(-4px)}.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:1.6rem;text-rendering:auto}.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus{outline:none;transform:translateY(1px) scale(.96);box-shadow:0 .5rem 1rem rgba(0,0,0,.2)}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown[_ngcontent-%COMP%]{-webkit-animation-name:slideInDown;animation-name:slideInDown}.fadeIn[_ngcontent-%COMP%]{-webkit-animation-name:fadeIn;animation-name:fadeIn}.animated[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.alert-msg[_ngcontent-%COMP%]{position:fixed;right:calc(50% - 150px);top:13rem;z-index:100;padding:2rem}.main-container[_ngcontent-%COMP%]{padding-top:12rem}@-webkit-keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes moveInTop{0%{opacity:0;transform:translateY(-2rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInTop{0%{opacity:0;transform:translateY(-2rem)}to{opacity:1;transform:translateY(0)}}.order-detail-container[_ngcontent-%COMP%]{margin-top:5rem;padding:0 8rem;flex-direction:column}.alert-info[_ngcontent-%COMP%], .order-detail-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.alert-info[_ngcontent-%COMP%]{font-size:16px;flex-direction:row;width:80%}.alert-info__id[_ngcontent-%COMP%]{font-weight:600}.order-detail-secondary-container[_ngcontent-%COMP%]{margin-top:2rem;padding:0 8rem 4rem;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.order-detail-secondary-container[_ngcontent-%COMP%]   .address-information[_ngcontent-%COMP%]{width:calc(50% - 40px);border:.1rem solid #cecece}.order-detail-secondary-container[_ngcontent-%COMP%]   .address-information__header[_ngcontent-%COMP%]{padding:1.5rem;font-weight:600;background-color:#075ac9;color:#fff;font-size:16px}.order-detail-secondary-container[_ngcontent-%COMP%]   .address-information__container[_ngcontent-%COMP%]{padding:1rem;font-size:14px}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{border-color:#075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:.1rem solid #075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.5rem;color:#fff;font-weight:700;border-color:#075ac9;max-width:13rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border:.1rem solid #cecece}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;padding:1.5rem;max-width:13rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{font-size:1.8rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]{width:12rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{color:#075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#dae0e5;height:2.5rem;width:2.5rem;font-size:1.6rem;line-height:1}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 1rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%]{font-size:2rem}.order-information[_ngcontent-%COMP%]{width:calc(50% - 40px);border:.1rem solid #cecece}.order-information__header[_ngcontent-%COMP%]{padding:1.5rem;font-weight:600;background-color:#075ac9;color:#fff;font-size:16px}.order-information__content[_ngcontent-%COMP%]{padding:2rem}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;margin-bottom:.1rem;color:#856404;background-color:#fff3cd}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]   .total-heading[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]{margin-right:2rem}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;margin-bottom:.1rem;color:#0c5460;background-color:#d1ecf1;font-size:15px;font-weight:600}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-heading[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]{margin-right:2rem}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;background-color:hsla(0,0%,94.5%,.5);margin-bottom:.1rem}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]{margin-left:1rem;display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{margin-right:2rem}"]}),t})();var j=e("PCNd");const N=[{path:"",component:p},{path:"checkout",component:q},{path:"order/:orderId",component:R}];let V=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(n){return new(n||t)},imports:[[o.b,u.t,j.a,r.f.forChild(N)],r.f]}),t})()}}]);