(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2SsE":function(t,n,e){"use strict";e.r(n),e.d(n,"TrackOrderModule",(function(){return T}));var r=e("ofXK"),o=e("3Pt+"),i=e("fXoL"),a=e("ht2v"),c=e("qeeY"),d=e("1lc2"),s=e("tyNb");function l(t,n){1&t&&(i.Nb(0,"div",7),i.Nb(1,"p"),i.rc(2," You can track your orders with your "),i.Nb(3,"b"),i.rc(4,"mobile number"),i.Mb(),i.rc(5,". Please "),i.Nb(6,"b"),i.rc(7,"verify"),i.Mb(),i.rc(8," your mobile number to check your orders. "),i.Mb(),i.Mb())}function b(t,n){1&t&&(i.Nb(0,"div",14),i.rc(1,"OTP has been sent to this mobile number, please verify! "),i.Mb())}function g(t,n){if(1&t&&(i.Nb(0,"div",9),i.Nb(1,"label",15),i.rc(2,"OTP"),i.Mb(),i.Jb(3,"input",16),i.Mb()),2&t){const t=i.Xb(2);i.yb(3),i.dc("formControl",t.otp)}}function m(t,n){if(1&t&&(i.Nb(0,"div",8),i.Nb(1,"div",9),i.Nb(2,"label",10),i.rc(3,"Phone number"),i.Mb(),i.Jb(4,"input",11),i.Mb(),i.pc(5,b,2,0,"div",12),i.pc(6,g,4,1,"div",13),i.Mb()),2&t){const t=i.Xb();i.yb(4),i.dc("formControl",t.phone),i.yb(1),i.dc("ngIf",t.isOtpSent&&!t.isPhoneVerified),i.yb(1),i.dc("ngIf",t.isOtpSent&&!t.isPhoneVerified)}}function p(t,n){if(1&t){const t=i.Ob();i.Nb(0,"button",17),i.Tb("click",(function(){return i.lc(t),i.Xb().getOtp()})),i.rc(1,"Get OTP"),i.Mb()}}function f(t,n){if(1&t){const t=i.Ob();i.Nb(0,"button",17),i.Tb("click",(function(){return i.lc(t),i.Xb().verifyOtp()})),i.rc(1,"Verify"),i.Mb()}}function M(t,n){if(1&t){const t=i.Ob();i.Nb(0,"div",18),i.Nb(1,"h1"),i.rc(2,"Orders for "),i.Nb(3,"strong"),i.rc(4),i.Mb(),i.Mb(),i.Nb(5,"button",19),i.Tb("click",(function(){return i.lc(t),i.Xb().clearStorage()})),i.rc(6,"Change Number"),i.Mb(),i.Mb()}if(2&t){const t=i.Xb();i.yb(4),i.tc(" ",t.phone.value," ")}}function u(t,n){if(1&t&&(i.Nb(0,"div",33),i.Jb(1,"img",34),i.Nb(2,"span"),i.rc(3),i.Mb(),i.Mb()),2&t){const t=n.$implicit,e=i.Xb().$implicit;i.yb(1),i.ec("src",t.image,i.nc),i.ec("alt",e.product_name),i.yb(2),i.sc(t.product_name)}}const _=function(t){return{color:t,"font-weight":"800"}},h=function(t){return["order-detail",t]};function O(t,n){if(1&t&&(i.Nb(0,"div",20),i.Nb(1,"div",21),i.Nb(2,"span",22),i.rc(3),i.Yb(4,"date"),i.Nb(5,"span",23),i.rc(6),i.Mb(),i.Mb(),i.Jb(7,"span",24),i.Nb(8,"a",25),i.rc(9,"View detail"),i.Mb(),i.Mb(),i.Nb(10,"div",26),i.Nb(11,"div",27),i.Nb(12,"div",28),i.Nb(13,"h3"),i.rc(14,"Items"),i.Mb(),i.Nb(15,"div",29),i.pc(16,u,4,3,"div",30),i.Mb(),i.Mb(),i.Nb(17,"div",31),i.Nb(18,"h2"),i.Nb(19,"strong"),i.rc(20," SHIP TO:"),i.Mb(),i.Mb(),i.Nb(21,"h3",32),i.rc(22),i.Mb(),i.Nb(23,"h1"),i.rc(24,"\xa0"),i.Mb(),i.Nb(25,"h2"),i.Nb(26,"strong"),i.rc(27," DELIVERY ADDRESS: "),i.Mb(),i.Mb(),i.Nb(28,"div"),i.rc(29),i.Mb(),i.Nb(30,"div"),i.rc(31),i.Mb(),i.Nb(32,"div"),i.rc(33),i.Mb(),i.Nb(34,"div"),i.rc(35),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb()),2&t){const t=n.$implicit,e=i.Xb();i.yb(3),i.uc("",i.ac(4,11,t.createdAt,"fullDate")," \xa0 | Amount : \u20b9 ",t.total," \xa0 | Status: \xa0 "),i.yb(2),i.dc("ngStyle",i.hc(14,_,e.getColor(t.order_status))),i.yb(1),i.sc(e.getOrderStatus(t.order_status)),i.yb(2),i.dc("routerLink",i.hc(16,h,t._id)),i.yb(8),i.dc("ngForOf",t.products),i.yb(6),i.sc(t.user_name),i.yb(7),i.sc(t.address),i.yb(2),i.sc(t.city),i.yb(2),i.sc(t.state),i.yb(2),i.sc(t.zip_code)}}let C=(()=>{class t{constructor(t,n){this.cartApiService=t,this.utilityService=n,this.phone=new o.e("",[o.v.minLength(10),o.v.maxLength(10),o.v.required]),this.otp=new o.e("",[o.v.minLength(6),o.v.maxLength(10),o.v.required]),this.isPhoneVerified=!1,this.isOtpSent=!1,this.getOrderStatus=t=>t.charAt(0).toUpperCase()+t.slice(1)}ngOnInit(){this.getVerifiedNumber()}getOtp(){this.phone.value&&this.phone.valid&&(this.isOtpSent=!0,this.isPhoneVerified=!0,this.saveVerifiedNumber(),this.getDetails(this.phone.value))}verifyOtp(){this.phone.value&&this.otp.value&&(this.utilityService.showLoader.next(!0),this.cartApiService.verifyOtp(this.phone.value,this.otp.value).subscribe(t=>{"verified"===t.status&&(this.isPhoneVerified=!0,this.saveVerifiedNumber(),this.getDetails(this.phone.value)),this.utilityService.showLoader.next(!1)},t=>this.utilityService.showLoader.next(!1)))}saveVerifiedNumber(){localStorage.setItem("_n",this.BtoA(this.phone.value)),localStorage.setItem("_t",this.BtoA((new Date).toISOString()))}getVerifiedNumber(){const t=localStorage.getItem("_n"),n=localStorage.getItem("_t"),e=new Date(this.AtoB(n));e&&(e.setMinutes(e.getMinutes()+300),t&&e>new Date&&(this.phone.setValue(this.AtoB(t)),this.isOtpSent=this.isPhoneVerified=!0,this.getDetails(this.phone.value)))}getDetails(t){t&&(this.utilityService.showLoader.next(!0),this.cartApiService.getOrderByPhoneNumber(t).subscribe(t=>{console.log("list is",t),t&&(this.orders=t),this.utilityService.showLoader.next(!1)},t=>this.utilityService.showLoader.next(!1)))}getColor(t){let n="#black";switch(t){case"placed":n="#fc7303";break;case"dispatched":case"delivered":n="#41fc03";break;case"canceled":n="#fc0303"}return n}clearStorage(){this.phone=new o.e("",[o.v.minLength(10),o.v.maxLength(10),o.v.required]),this.otp=new o.e("",[o.v.minLength(6),o.v.maxLength(10),o.v.required]),this.orders=void 0,this.isOtpSent=!1,this.isPhoneVerified=!1,localStorage.removeItem("_n"),localStorage.removeItem("_t")}AtoB(t){let n=t;for(let e=0;e<3;e++)n=atob(n);return n}BtoA(t){let n=t;for(let e=0;e<3;e++)n=btoa(n);return n}}return t.\u0275fac=function(n){return new(n||t)(i.Ib(a.a),i.Ib(c.a))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-track-order"]],decls:8,vars:6,consts:[["title","TRACK ORDER"],[1,"track-order-container"],["class","alert alert-dark can-track-text",4,"ngIf"],["class","phone-input",4,"ngIf"],["class","btn primary-button",3,"click",4,"ngIf"],["class","change_number",4,"ngIf"],["class","card",4,"ngFor","ngForOf"],[1,"alert","alert-dark","can-track-text"],[1,"phone-input"],[1,"form-group"],["for","phone"],["type","text","id","phone","placeholder","Enter phone number",1,"form-control","form-control-lg",3,"formControl"],["class","alert alert-success mt-3",4,"ngIf"],["class","form-group",4,"ngIf"],[1,"alert","alert-success","mt-3"],["for","otp"],["type","text","id","otp","placeholder","Enter OTP",1,"form-control","form-control-lg",3,"formControl"],[1,"btn","primary-button",3,"click"],[1,"change_number"],[1,"btn","btn-dark","change_number__btn",3,"click"],[1,"card"],[1,"card-header"],[1,"date-heading"],[3,"ngStyle"],[1,"flex-fill"],[1,"detail-button",3,"routerLink"],[1,"card-body"],[1,"row"],[1,"product-list","col-md-8","col-sm-12"],[1,"order-items"],["class","item",4,"ngFor","ngForOf"],[1,"delivery-address","col-md-4"],[1,""],[1,"item"],[1,"item-image",3,"src","alt"]],template:function(t,n){1&t&&(i.Nb(0,"app-main-container",0),i.Nb(1,"div",1),i.pc(2,l,9,0,"div",2),i.pc(3,m,7,3,"div",3),i.pc(4,p,2,0,"button",4),i.pc(5,f,2,0,"button",4),i.pc(6,M,7,1,"div",5),i.pc(7,O,36,18,"div",6),i.Mb(),i.Mb()),2&t&&(i.yb(2),i.dc("ngIf",!n.orders),i.yb(1),i.dc("ngIf",!n.orders),i.yb(1),i.dc("ngIf",!n.isOtpSent),i.yb(1),i.dc("ngIf",!n.isPhoneVerified&&n.isOtpSent),i.yb(1),i.dc("ngIf",n.orders),i.yb(1),i.dc("ngForOf",n.orders))},directives:[d.a,r.k,r.j,o.b,o.m,o.f,r.l,s.f],pipes:[r.d],styles:[".loader[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.95);width:100%;position:fixed;height:100vh;display:flex;z-index:99}.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;display:block;margin:auto}.primary-button[_ngcontent-%COMP%]{position:relative;border:.1rem solid #000;color:#000;padding:1.2rem 3rem;border-radius:0;margin-top:1rem;font-size:1.4rem;outline:none;transition:all .2s;border-radius:.2rem}.primary-button[_ngcontent-%COMP%]:hover{color:#fff;padding:1.2rem 3rem;background-image:linear-gradient(-45deg,#075ac9,#35c7df);box-shadow:0 4px 10px -1px rgba(0,0,0,.2),0 4px 6px 1px rgba(0,0,0,.05),inset 0 1px 2px 1px transparent,inset 0 18px 32px -2px hsla(0,0%,100%,.1);transform:translateY(-4px)}.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:1.6rem;text-rendering:auto}.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus{outline:none;transform:translateY(1px) scale(.96);box-shadow:0 .5rem 1rem rgba(0,0,0,.2)}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown[_ngcontent-%COMP%]{-webkit-animation-name:slideInDown;animation-name:slideInDown}.fadeIn[_ngcontent-%COMP%]{-webkit-animation-name:fadeIn;animation-name:fadeIn}.animated[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.alert-msg[_ngcontent-%COMP%]{position:fixed;right:calc(50% - 150px);top:13rem;z-index:100;padding:2rem}.main-container[_ngcontent-%COMP%]{padding-top:7rem}@media screen and (max-width:1050px){.main-container[_ngcontent-%COMP%]{padding-top:8rem}}@media screen and (max-width:767px){.main-container[_ngcontent-%COMP%]{padding-top:4rem}}@-webkit-keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes moveInTop{0%{opacity:0;transform:translateY(-2rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInTop{0%{opacity:0;transform:translateY(-2rem)}to{opacity:1;transform:translateY(0)}}.track-order-container[_ngcontent-%COMP%]{min-height:50rem;display:flex;flex-direction:column;align-items:center}.track-order-container[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:3rem;width:40%}.track-order-container[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], .track-order-container[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.track-order-container[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:80%;margin:2rem 0}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .date-heading[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .detail-button[_ngcontent-%COMP%]{outline:none;padding-left:.5rem}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .detail-button[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%]{padding:3rem}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;margin:0 2rem 2rem}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]{width:8rem;margin-bottom:1rem}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%]   .card-divider[_ngcontent-%COMP%]{width:80%;border-top:1px solid #f1f1f1}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%]   .order-total[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin:1rem 0;width:100%}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%]   .order-total[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{font-weight:500}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .delivery-address[_ngcontent-%COMP%]{border-left:1px solid #f1f1f1;padding:3rem;flex:1}.alert-dark[_ngcontent-%COMP%]{font-size:16px;justify-content:center;align-items:center;width:80%}.alert-dark[_ngcontent-%COMP%], .phone_heading[_ngcontent-%COMP%]{display:flex;flex-direction:row}.change_number[_ngcontent-%COMP%]{align-self:flex-start;margin-left:10%}.change_number__btn[_ngcontent-%COMP%]{font-size:1.3rem;margin-top:1rem;padding:.5rem}.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),t})();function P(t,n){if(1&t&&(i.Nb(0,"span"),i.rc(1),i.Yb(2,"date"),i.Mb()),2&t){const t=i.Xb();i.yb(1),i.tc(" ",i.ac(2,1,t.order.dispatched_date,"fullDate"),"")}}function y(t,n){1&t&&(i.Nb(0,"span"),i.rc(1,"Fri, June 28"),i.Mb())}const v=function(t){return{completed:t}};let x=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Cb({type:t,selectors:[["step-indicator"]],inputs:{order:"order"},decls:24,vars:12,consts:[[1,"container"],[1,"row"],[1,"col-12","col-md-10","hh-grayBox","pt45","pb20"],[1,"row","justify-content-between"],[1,"order-tracking","completed"],[1,"is-complete"],[1,"order-tracking",3,"ngClass"],[4,"ngIf"]],template:function(t,n){1&t&&(i.Nb(0,"div",0),i.Nb(1,"div",1),i.Nb(2,"div",2),i.Nb(3,"div",3),i.Nb(4,"div",4),i.Jb(5,"span",5),i.Nb(6,"p"),i.rc(7,"Ordered"),i.Jb(8,"br"),i.Nb(9,"span"),i.rc(10),i.Yb(11,"date"),i.Mb(),i.Mb(),i.Mb(),i.Nb(12,"div",6),i.Jb(13,"span",5),i.Nb(14,"p"),i.rc(15,"Shipped"),i.Jb(16,"br"),i.pc(17,P,3,4,"span",7),i.Mb(),i.Mb(),i.Nb(18,"div",6),i.Jb(19,"span",5),i.Nb(20,"p"),i.rc(21,"Delivered"),i.Jb(22,"br"),i.pc(23,y,2,0,"span",7),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb()),2&t&&(i.yb(10),i.sc(i.ac(11,5,n.order.createdAt,"fullDate")),i.yb(2),i.dc("ngClass",i.hc(8,v,"placed"!==n.order.order_status)),i.yb(5),i.dc("ngIf","placed"!==n.order.order_status),i.yb(1),i.dc("ngClass",i.hc(10,v,"delivered"===n.order.order_status)),i.yb(5),i.dc("ngIf","delivered"===n.order.order_status))},directives:[r.i,r.k],pipes:[r.d],styles:['.hh-grayBox[_ngcontent-%COMP%]{background-color:#f8f8f8;padding:35px;margin:20px auto 0}.pt45[_ngcontent-%COMP%]{padding-top:45px}.order-tracking[_ngcontent-%COMP%]{text-align:center;width:33.33%;position:relative;display:block}.order-tracking[_ngcontent-%COMP%]   .is-complete[_ngcontent-%COMP%]{display:block;position:relative;border-radius:50%;height:30px;width:30px;border:0 solid #afafaf;background-color:#f7be16;margin:0 auto;transition:background .25s linear;-webkit-transition:background .25s linear;z-index:2}.order-tracking[_ngcontent-%COMP%]   .is-complete[_ngcontent-%COMP%]:after{display:block;position:absolute;content:"";height:14px;width:7px;top:-2px;bottom:0;left:5px;margin:auto 0;border:0 solid #afafaf;border-width:0 2px 2px 0;transform:rotate(45deg);opacity:0}.order-tracking.completed[_ngcontent-%COMP%]   .is-complete[_ngcontent-%COMP%]{border-color:#27aa80;border-width:0;background-color:#27aa80}.order-tracking.completed[_ngcontent-%COMP%]   .is-complete[_ngcontent-%COMP%]:after{border-color:#fff;border-width:0 3px 3px 0;width:7px;left:11px;opacity:1}.order-tracking[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#a4a4a4;font-size:16px;margin-top:8px;margin-bottom:0;line-height:20px}.order-tracking[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px}.order-tracking.completed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.order-tracking[_ngcontent-%COMP%]:before{content:"";display:block;height:3px;width:calc(100% - 40px);background-color:#f7be16;top:13px;position:absolute;left:calc(-50% + 20px);z-index:0}.order-tracking[_ngcontent-%COMP%]:first-child:before{display:none}.order-tracking.completed[_ngcontent-%COMP%]:before{background-color:#27aa80}']}),t})();function w(t,n){1&t&&(i.Nb(0,"div",21),i.Nb(1,"p"),i.rc(2,"Your order has been successfully placed!"),i.Mb(),i.Mb())}function k(t,n){if(1&t&&(i.Nb(0,"div",22),i.Nb(1,"p"),i.rc(2," Your order id is - "),i.Nb(3,"span",23),i.rc(4),i.Mb(),i.Mb(),i.Mb()),2&t){const t=i.Xb();i.yb(4),i.sc(t.orderDetail._id)}}function N(t,n){if(1&t&&(i.Nb(0,"div",22),i.Nb(1,"p"),i.rc(2,"Your transaction id is - "),i.Nb(3,"span",23),i.rc(4),i.Mb(),i.Mb(),i.Mb()),2&t){const t=i.Xb();i.yb(4),i.sc(t.orderDetail.transaction_id)}}function I(t,n){1&t&&(i.Nb(0,"h2",27),i.rc(1,"Order Cancelled, you money will be refunded soon."),i.Mb())}const S=function(){return["/view-cart/checkout"]};function D(t,n){1&t&&(i.Nb(0,"div",27),i.Nb(1,"h2"),i.rc(2," Order not placed yet,"),i.Mb(),i.Nb(3,"a",28),i.Nb(4,"h2"),i.rc(5,"\xa0click here\xa0"),i.Mb(),i.Mb(),i.Nb(6,"h2"),i.rc(7,"to place this order now."),i.Mb(),i.Mb()),2&t&&(i.yb(3),i.dc("routerLink",i.gc(1,S)))}function Y(t,n){if(1&t&&(i.Nb(0,"div"),i.Jb(1,"step-indicator",29),i.Mb()),2&t){const t=i.Xb(2);i.yb(1),i.dc("order",t.orderDetail)}}function z(t,n){if(1&t&&(i.Nb(0,"div",24),i.pc(1,I,2,0,"h2",25),i.pc(2,D,8,2,"div",25),i.pc(3,Y,2,1,"div",26),i.Mb()),2&t){const t=i.Xb();i.dc("ngSwitch",t.orderDetail.order_status),i.yb(1),i.dc("ngSwitchCase","cancelled"),i.yb(1),i.dc("ngSwitchCase","created")}}function L(t,n){if(1&t&&(i.Nb(0,"div",30),i.Jb(1,"img",31),i.Nb(2,"div",32),i.Nb(3,"span",33),i.rc(4),i.Mb(),i.Nb(5,"span",34),i.rc(6),i.Mb(),i.Mb(),i.Jb(7,"div",13),i.Nb(8,"span",35),i.rc(9),i.Mb(),i.Nb(10,"span",36),i.rc(11),i.Mb(),i.Mb()),2&t){const t=n.$implicit;i.yb(1),i.ec("src",t.image,i.nc),i.yb(3),i.sc(t.product_name),i.yb(2),i.sc(t.price),i.yb(3),i.sc(t.quantity),i.yb(2),i.sc(t.total)}}let A=(()=>{class t{constructor(t,n,e){this.route=t,this.utilityService=n,this.cartApiService=e,this.newOrder=!1,this.orderId="",this.total=0,this.subtotal=0,this.newOrder="true"===this.route.snapshot.queryParamMap.get("new_order"),this.orderId=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.utilityService.showLoader.next(!0),this.cartApiService.orderDetails(this.orderId).subscribe(t=>{t&&(this.orderDetail=t,this.total=t.products.map(t=>t.total).reduce((t,n)=>t+n),this.subtotal=this.total),this.utilityService.showLoader.next(!1)},t=>this.utilityService.showLoader.next(!1))}}return t.\u0275fac=function(n){return new(n||t)(i.Ib(s.a),i.Ib(c.a),i.Ib(a.a))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-order-confirmation"]],decls:41,vars:12,consts:[["title","ORDER DETAILS"],[1,"order-detail-container"],["class","alert alert-success",4,"ngIf"],["class","alert alert-info",4,"ngIf"],["class","tracker",3,"ngSwitch",4,"ngIf"],[1,"order-detail-secondary-container"],[1,"row"],[1,"col-md-6","col-sm-12","order-information__parent"],[1,"order-information"],[1,"order-information__header"],[1,"order-information__content"],["class","order-item",4,"ngFor","ngForOf"],[1,"sub-total-item"],[1,"flex-fill"],[1,"total-heading"],[1,"total-count"],[1,"total-item"],[1,"col-md-6","address-information__parent"],[1,"address-information"],[1,"address-information__header"],[1,"address-information__container"],[1,"alert","alert-success"],[1,"alert","alert-info"],[1,"alert-info__id"],[1,"tracker",3,"ngSwitch"],["class","not_placed",4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"not_placed"],[3,"routerLink"],[3,"order"],[1,"order-item"],["height","80","width","80",2,"object-fit","contain",3,"src"],[1,"name-and-price"],[1,"name"],[1,"price"],[1,"quantity"],[1,"total"]],template:function(t,n){1&t&&(i.Nb(0,"app-main-container",0),i.Nb(1,"div",1),i.pc(2,w,3,0,"div",2),i.pc(3,k,5,1,"div",3),i.pc(4,N,5,1,"div",3),i.Mb(),i.pc(5,z,4,3,"div",4),i.Nb(6,"div",5),i.Nb(7,"div",6),i.Nb(8,"div",7),i.Nb(9,"div",8),i.Nb(10,"div",9),i.rc(11,"Your Order"),i.Mb(),i.Nb(12,"div",10),i.pc(13,L,12,5,"div",11),i.Nb(14,"div",12),i.Jb(15,"div",13),i.Nb(16,"span",14),i.rc(17,"Sub total"),i.Mb(),i.Nb(18,"span",15),i.rc(19),i.Mb(),i.Mb(),i.Nb(20,"div",16),i.Jb(21,"div",13),i.Nb(22,"span",14),i.rc(23,"Total"),i.Mb(),i.Nb(24,"span",15),i.rc(25),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(26,"div",17),i.Nb(27,"div",18),i.Nb(28,"div",19),i.rc(29,"Delivery Address"),i.Mb(),i.Nb(30,"div",20),i.Nb(31,"div"),i.rc(32),i.Mb(),i.Nb(33,"div"),i.rc(34),i.Mb(),i.Nb(35,"div"),i.rc(36),i.Mb(),i.Nb(37,"div"),i.rc(38),i.Mb(),i.Nb(39,"div"),i.rc(40),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb()),2&t&&(i.yb(2),i.dc("ngIf",n.newOrder),i.yb(1),i.dc("ngIf",n.orderDetail),i.yb(1),i.dc("ngIf",null==n.orderDetail?null:n.orderDetail.payment_status),i.yb(1),i.dc("ngIf",null!=n.orderDetail),i.yb(8),i.dc("ngForOf",null==n.orderDetail?null:n.orderDetail.products),i.yb(6),i.sc(n.subtotal),i.yb(6),i.sc(n.total),i.yb(7),i.tc("Ship to: ",null==n.orderDetail?null:n.orderDetail.user_name,""),i.yb(2),i.tc("Address: ",null==n.orderDetail?null:n.orderDetail.address,""),i.yb(2),i.tc("City: ",null==n.orderDetail?null:n.orderDetail.city,""),i.yb(2),i.tc("State: ",null==n.orderDetail?null:n.orderDetail.state,""),i.yb(2),i.tc("Zip Code: ",null==n.orderDetail?null:n.orderDetail.zip_code,""))},directives:[d.a,r.k,r.j,r.m,r.n,r.o,s.f,x],styles:[".loader[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.95);width:100%;position:fixed;height:100vh;display:flex;z-index:99}.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;display:block;margin:auto}.primary-button[_ngcontent-%COMP%]{position:relative;border:.1rem solid #000;color:#000;padding:1.2rem 3rem;border-radius:0;margin-top:1rem;font-size:1.4rem;outline:none;transition:all .2s;border-radius:.2rem}.primary-button[_ngcontent-%COMP%]:hover{color:#fff;padding:1.2rem 3rem;background-image:linear-gradient(-45deg,#075ac9,#35c7df);box-shadow:0 4px 10px -1px rgba(0,0,0,.2),0 4px 6px 1px rgba(0,0,0,.05),inset 0 1px 2px 1px transparent,inset 0 18px 32px -2px hsla(0,0%,100%,.1);transform:translateY(-4px)}.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:1.6rem;text-rendering:auto}.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus{outline:none;transform:translateY(1px) scale(.96);box-shadow:0 .5rem 1rem rgba(0,0,0,.2)}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown[_ngcontent-%COMP%]{-webkit-animation-name:slideInDown;animation-name:slideInDown}.fadeIn[_ngcontent-%COMP%]{-webkit-animation-name:fadeIn;animation-name:fadeIn}.animated[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.alert-msg[_ngcontent-%COMP%]{position:fixed;right:calc(50% - 150px);top:13rem;z-index:100;padding:2rem}.main-container[_ngcontent-%COMP%]{padding-top:7rem}@media screen and (max-width:1050px){.main-container[_ngcontent-%COMP%]{padding-top:8rem}}@media screen and (max-width:767px){.main-container[_ngcontent-%COMP%]{padding-top:4rem}}@-webkit-keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes moveInTop{0%{opacity:0;transform:translateY(-2rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInTop{0%{opacity:0;transform:translateY(-2rem)}to{opacity:1;transform:translateY(0)}}.order-detail-container[_ngcontent-%COMP%]{margin-top:5rem;padding:0 8rem;flex-direction:column}.alert-info[_ngcontent-%COMP%], .order-detail-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.alert-info[_ngcontent-%COMP%]{font-size:16px;flex-direction:row;padding:1rem 5rem}.alert-info__id[_ngcontent-%COMP%]{font-weight:600}.order-detail-secondary-container[_ngcontent-%COMP%]{margin-top:2rem;padding:0 8rem 4rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .address-information__parent[_ngcontent-%COMP%]{padding:1rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .address-information[_ngcontent-%COMP%]{border:.1rem solid #cecece;padding:0;height:100%}.order-detail-secondary-container[_ngcontent-%COMP%]   .address-information__header[_ngcontent-%COMP%]{padding:1.5rem;font-weight:600;background-color:#075ac9;color:#fff;font-size:16px}.order-detail-secondary-container[_ngcontent-%COMP%]   .address-information__container[_ngcontent-%COMP%]{padding:1rem;font-size:2rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{border-color:#075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:.1rem solid #075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.5rem;color:#fff;font-weight:700;border-color:#075ac9;max-width:13rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border:.1rem solid #cecece}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;padding:1.5rem;max-width:13rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{font-size:1.8rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]{width:12rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{color:#075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#dae0e5;height:2.5rem;width:2.5rem;font-size:1.6rem;line-height:1}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 1rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%]{font-size:2rem}@media screen and (max-width:800px){.order-detail-secondary-container[_ngcontent-%COMP%]{padding:0 1rem}}.order-information__parent[_ngcontent-%COMP%]{padding:1rem}.order-information[_ngcontent-%COMP%]{border:.1rem solid #cecece;padding:0}.order-information__header[_ngcontent-%COMP%]{padding:1.5rem;font-weight:600;background-color:#075ac9;color:#fff;font-size:1.6rem}.order-information__content[_ngcontent-%COMP%]{padding:2rem}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;margin-bottom:.1rem;color:#856404;background-color:#fff3cd}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]   .total-heading[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]{margin-right:2rem}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;margin-bottom:.1rem;color:#0c5460;background-color:#d1ecf1;font-size:15px;font-weight:600}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-heading[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]{margin-right:2rem}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;background-color:hsla(0,0%,94.5%,.5);margin-bottom:.1rem}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]{margin-left:1rem;display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{margin-right:2rem}.not_placed[_ngcontent-%COMP%]{color:red;display:flex;flex-direction:row;justify-content:center;font-weight:700}"]}),t})();var J=e("PCNd");const V=[{path:"",component:C},{path:"order-detail/:id",component:A}];let T=(()=>{class t{}return t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({factory:function(n){return new(n||t)},imports:[[r.b,J.a,o.t,s.g.forChild(V)],s.g]}),t})()}}]);