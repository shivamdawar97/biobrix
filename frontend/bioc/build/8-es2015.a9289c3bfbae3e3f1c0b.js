(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2SsE":function(t,n,e){"use strict";e.r(n),e.d(n,"TrackOrderModule",(function(){return q}));var o=e("ofXK"),r=e("3Pt+"),i=e("fXoL"),a=e("ht2v"),c=e("qeeY"),d=e("1lc2"),s=e("tyNb");function l(t,n){1&t&&(i.Pb(0,"div",7),i.uc(1," You can track your orders with your \xa0 "),i.Pb(2,"b"),i.uc(3,"mobile number"),i.Ob(),i.uc(4,". Please \xa0 "),i.Pb(5,"b"),i.uc(6,"verify"),i.Ob(),i.uc(7," \xa0 your mobile number to check your orders. "),i.Ob())}function b(t,n){1&t&&(i.Pb(0,"div",14),i.uc(1,"OTP has been sent to this mobile number, please verify! "),i.Ob())}function g(t,n){if(1&t&&(i.Pb(0,"div",9),i.Pb(1,"label",15),i.uc(2,"OTP"),i.Ob(),i.Lb(3,"input",16),i.Ob()),2&t){const t=i.Zb(2);i.Ab(3),i.fc("formControl",t.otp)}}function f(t,n){if(1&t&&(i.Pb(0,"div",8),i.Pb(1,"div",9),i.Pb(2,"label",10),i.uc(3,"Phone number"),i.Ob(),i.Lb(4,"input",11),i.Ob(),i.sc(5,b,2,0,"div",12),i.sc(6,g,4,1,"div",13),i.Ob()),2&t){const t=i.Zb();i.Ab(4),i.fc("formControl",t.phone),i.Ab(1),i.fc("ngIf",t.isOtpSent&&!t.isPhoneVerified),i.Ab(1),i.fc("ngIf",t.isOtpSent&&!t.isPhoneVerified)}}function m(t,n){if(1&t){const t=i.Qb();i.Pb(0,"button",17),i.Xb("click",(function(n){return i.nc(t),i.Zb().getOtp()})),i.uc(1,"Get OTP"),i.Ob()}}function p(t,n){if(1&t){const t=i.Qb();i.Pb(0,"button",17),i.Xb("click",(function(n){return i.nc(t),i.Zb().verifyOtp()})),i.uc(1,"Verify"),i.Ob()}}function u(t,n){if(1&t){const t=i.Qb();i.Pb(0,"div",18),i.Pb(1,"h1"),i.uc(2,"Orders for "),i.Pb(3,"strong"),i.uc(4),i.Ob(),i.Ob(),i.Pb(5,"button",19),i.Xb("click",(function(n){return i.nc(t),i.Zb().clearStorage()})),i.uc(6,"Change Number"),i.Ob(),i.Ob()}if(2&t){const t=i.Zb();i.Ab(4),i.wc(" ",t.phone.value," ")}}function O(t,n){if(1&t&&(i.Pb(0,"div",32),i.Lb(1,"img",33),i.Pb(2,"span"),i.uc(3),i.Ob(),i.Ob()),2&t){const t=n.$implicit,e=i.Zb().$implicit;i.Ab(1),i.gc("src",t.image,i.qc),i.gc("alt",e.product_name),i.Ab(2),i.vc(t.product_name)}}const P=function(t){return{color:t,"font-weight":"800"}},h=function(t){return["order-detail",t]};function _(t,n){if(1&t&&(i.Pb(0,"div",20),i.Pb(1,"div",21),i.Pb(2,"span",22),i.uc(3),i.ac(4,"date"),i.Pb(5,"span",23),i.uc(6),i.Ob(),i.Ob(),i.Lb(7,"span",24),i.Pb(8,"a",25),i.uc(9,"View detail"),i.Ob(),i.Ob(),i.Pb(10,"div",26),i.Pb(11,"div",27),i.Pb(12,"h3"),i.uc(13,"Items"),i.Ob(),i.Pb(14,"div",28),i.sc(15,O,4,3,"div",29),i.Ob(),i.Ob(),i.Pb(16,"div",30),i.Pb(17,"h2"),i.Pb(18,"strong"),i.uc(19," SHIP TO:"),i.Ob(),i.Ob(),i.Pb(20,"h3",31),i.uc(21),i.Ob(),i.Pb(22,"h1"),i.uc(23,"\xa0"),i.Ob(),i.Pb(24,"h2"),i.Pb(25,"strong"),i.uc(26," DELIVERY ADDRESS: "),i.Ob(),i.Ob(),i.Pb(27,"div"),i.uc(28),i.Ob(),i.Pb(29,"div"),i.uc(30),i.Ob(),i.Pb(31,"div"),i.uc(32),i.Ob(),i.Pb(33,"div"),i.uc(34),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&t){const t=n.$implicit,e=i.Zb();i.Ab(3),i.xc("",i.cc(4,11,t.createdAt,"fullDate")," \xa0 | Amount : \u20b9 ",t.total," \xa0 | Status: \xa0 "),i.Ab(2),i.fc("ngStyle",i.jc(14,P,e.getColor(t.order_status))),i.Ab(1),i.vc(e.getOrderStatus(t.order_status)),i.Ab(2),i.fc("routerLink",i.jc(16,h,t._id)),i.Ab(7),i.fc("ngForOf",t.products),i.Ab(6),i.vc(t.user_name),i.Ab(7),i.vc(t.address),i.Ab(2),i.vc(t.city),i.Ab(2),i.vc(t.state),i.Ab(2),i.vc(t.zip_code)}}let C=(()=>{class t{constructor(t,n){this.cartApiService=t,this.utilityService=n,this.phone=new r.e("",[r.v.minLength(10),r.v.maxLength(10),r.v.required]),this.otp=new r.e("",[r.v.minLength(6),r.v.maxLength(10),r.v.required]),this.isPhoneVerified=!1,this.isOtpSent=!1,this.getOrderStatus=t=>t.charAt(0).toUpperCase()+t.slice(1)}ngOnInit(){this.getVerifiedNumber()}getOtp(){this.phone.value&&this.phone.valid&&(this.isOtpSent=!0,this.isPhoneVerified=!0,this.saveVerifiedNumber(),this.getDetails(this.phone.value))}verifyOtp(){this.phone.value&&this.otp.value&&(this.utilityService.showLoader.next(!0),this.cartApiService.verifyOtp(this.phone.value,this.otp.value).subscribe(t=>{"verified"===t.status&&(this.isPhoneVerified=!0,this.saveVerifiedNumber(),this.getDetails(this.phone.value)),this.utilityService.showLoader.next(!1)},t=>this.utilityService.showLoader.next(!1)))}saveVerifiedNumber(){localStorage.setItem("_n",this.BtoA(this.phone.value)),localStorage.setItem("_t",this.BtoA((new Date).toISOString()))}getVerifiedNumber(){const t=localStorage.getItem("_n"),n=localStorage.getItem("_t"),e=new Date(this.AtoB(n));e&&(e.setMinutes(e.getMinutes()+300),t&&e>new Date&&(this.phone.setValue(this.AtoB(t)),this.isOtpSent=this.isPhoneVerified=!0,this.getDetails(this.phone.value)))}getDetails(t){t&&(this.utilityService.showLoader.next(!0),this.cartApiService.getOrderByPhoneNumber(t).subscribe(t=>{console.log("list is",t),t&&(this.orders=t),this.utilityService.showLoader.next(!1)},t=>this.utilityService.showLoader.next(!1)))}getColor(t){let n="#black";switch(t){case"placed":n="#fc7303";break;case"dispatched":case"delivered":n="#41fc03";break;case"canceled":n="#fc0303"}return n}clearStorage(){this.phone=new r.e("",[r.v.minLength(10),r.v.maxLength(10),r.v.required]),this.otp=new r.e("",[r.v.minLength(6),r.v.maxLength(10),r.v.required]),this.orders=void 0,this.isOtpSent=!1,this.isPhoneVerified=!1,localStorage.removeItem("_n"),localStorage.removeItem("_t")}AtoB(t){let n=t;for(let e=0;e<3;e++)n=atob(n);return n}BtoA(t){let n=t;for(let e=0;e<3;e++)n=btoa(n);return n}}return t.\u0275fac=function(n){return new(n||t)(i.Kb(a.a),i.Kb(c.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-track-order"]],decls:8,vars:6,consts:[["title","TRACK ORDER"],[1,"track-order-container"],["class","alert alert-dark",4,"ngIf"],["class","phone-input",4,"ngIf"],["class","btn primary-button",3,"click",4,"ngIf"],["class","change_number",4,"ngIf"],["class","card",4,"ngFor","ngForOf"],[1,"alert","alert-dark"],[1,"phone-input"],[1,"form-group"],["for","phone"],["type","text","id","phone","placeholder","Enter phone number",1,"form-control","form-control-lg",3,"formControl"],["class","alert alert-success mt-3",4,"ngIf"],["class","form-group",4,"ngIf"],[1,"alert","alert-success","mt-3"],["for","otp"],["type","text","id","otp","placeholder","Enter OTP",1,"form-control","form-control-lg",3,"formControl"],[1,"btn","primary-button",3,"click"],[1,"change_number"],[1,"btn","btn-dark","change_number__btn",3,"click"],[1,"card"],[1,"card-header"],[1,"date-heading"],[3,"ngStyle"],[1,"flex-fill"],[1,"detail-button",3,"routerLink"],[1,"card-body"],[1,"product-list"],[1,"order-items"],["class","item",4,"ngFor","ngForOf"],[1,"delivery-address"],[1,""],[1,"item"],[1,"item-image",3,"src","alt"]],template:function(t,n){1&t&&(i.Pb(0,"app-main-container",0),i.Pb(1,"div",1),i.sc(2,l,8,0,"div",2),i.sc(3,f,7,3,"div",3),i.sc(4,m,2,0,"button",4),i.sc(5,p,2,0,"button",4),i.sc(6,u,7,1,"div",5),i.sc(7,_,35,18,"div",6),i.Ob(),i.Ob()),2&t&&(i.Ab(2),i.fc("ngIf",!n.orders),i.Ab(1),i.fc("ngIf",!n.orders),i.Ab(1),i.fc("ngIf",!n.isOtpSent),i.Ab(1),i.fc("ngIf",!n.isPhoneVerified&&n.isOtpSent),i.Ab(1),i.fc("ngIf",n.orders),i.Ab(1),i.fc("ngForOf",n.orders))},directives:[d.a,o.k,o.j,r.b,r.m,r.f,o.l,s.e],pipes:[o.d],styles:[".loader[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.95);width:100%;position:fixed;height:100vh;display:flex;z-index:99}.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;display:block;margin:auto}.primary-button[_ngcontent-%COMP%]{position:relative;border:.1rem solid #000;color:#000;padding:1.2rem 2.5rem;border-radius:.5rem;margin-top:1rem;font-size:1.4rem;outline:none;transition:all .2s}.primary-button[_ngcontent-%COMP%]:hover{border:none;color:#fff;padding:1.2rem 2.5rem;background-image:linear-gradient(-45deg,#075ac9,#35c7df);box-shadow:0 4px 10px -1px rgba(0,0,0,.2),0 4px 6px 1px rgba(0,0,0,.05),inset 0 1px 2px 1px transparent,inset 0 18px 32px -2px hsla(0,0%,100%,.1);transform:translateY(-4px)}.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:1.6rem;text-rendering:auto}.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus{outline:none;transform:translateY(1px) scale(.96);box-shadow:0 .5rem 1rem rgba(0,0,0,.2)}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown[_ngcontent-%COMP%]{-webkit-animation-name:slideInDown;animation-name:slideInDown}.fadeIn[_ngcontent-%COMP%]{-webkit-animation-name:fadeIn;animation-name:fadeIn}.animated[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.alert-msg[_ngcontent-%COMP%]{position:fixed;right:calc(50% - 150px);top:13rem;z-index:100;padding:2rem}.main-container[_ngcontent-%COMP%]{padding-top:12rem}@-webkit-keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes moveInTop{0%{opacity:0;transform:translateY(-2rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInTop{0%{opacity:0;transform:translateY(-2rem)}to{opacity:1;transform:translateY(0)}}.track-order-container[_ngcontent-%COMP%]{min-height:50rem;padding:0 8rem;display:flex;flex-direction:column;align-items:center}.track-order-container[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:3rem;width:40%}.track-order-container[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], .track-order-container[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.track-order-container[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:80%;margin:2rem 0}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .date-heading[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .detail-button[_ngcontent-%COMP%]{outline:none}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .detail-button[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{display:flex;flex-direction:row}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%]{flex:2;padding:3rem;display:flex;flex-direction:column}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;margin:0 2rem 2rem}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%]   .order-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]{width:8rem;margin-bottom:1rem}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%]   .card-divider[_ngcontent-%COMP%]{width:80%;border-top:1px solid #f1f1f1}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%]   .order-total[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin:1rem 0;width:100%}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%]   .order-total[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{font-weight:500}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .delivery-address[_ngcontent-%COMP%]{border-left:1px solid #f1f1f1;padding:3rem;flex:1}.track-order-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{box-shadow:2px 2px 5px 2px #f1f1f1}.alert-dark[_ngcontent-%COMP%]{font-size:16px;justify-content:center;align-items:center;width:80%}.alert-dark[_ngcontent-%COMP%], .phone_heading[_ngcontent-%COMP%]{display:flex;flex-direction:row}.change_number[_ngcontent-%COMP%]{align-self:flex-start;margin-left:10%}.change_number__btn[_ngcontent-%COMP%]{font-size:1.3rem;margin-top:1rem;padding:.5rem}.ng-invalid[_ngcontent-%COMP%]{border:1px solid red}"]}),t})();function M(t,n){if(1&t&&(i.Pb(0,"span"),i.uc(1),i.ac(2,"date"),i.Ob()),2&t){const t=i.Zb();i.Ab(1),i.wc(" ",i.cc(2,1,t.order.dispatched_date,"fullDate"),"")}}function v(t,n){1&t&&(i.Pb(0,"span"),i.uc(1,"Fri, June 28"),i.Ob())}const y=function(t){return{completed:t}};let x=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["step-indicator"]],inputs:{order:"order"},decls:24,vars:12,consts:[[1,"container"],[1,"row"],[1,"col-12","col-md-10","hh-grayBox","pt45","pb20"],[1,"row","justify-content-between"],[1,"order-tracking","completed"],[1,"is-complete"],[1,"order-tracking",3,"ngClass"],[4,"ngIf"]],template:function(t,n){1&t&&(i.Pb(0,"div",0),i.Pb(1,"div",1),i.Pb(2,"div",2),i.Pb(3,"div",3),i.Pb(4,"div",4),i.Lb(5,"span",5),i.Pb(6,"p"),i.uc(7,"Ordered"),i.Lb(8,"br"),i.Pb(9,"span"),i.uc(10),i.ac(11,"date"),i.Ob(),i.Ob(),i.Ob(),i.Pb(12,"div",6),i.Lb(13,"span",5),i.Pb(14,"p"),i.uc(15,"Shipped"),i.Lb(16,"br"),i.sc(17,M,3,4,"span",7),i.Ob(),i.Ob(),i.Pb(18,"div",6),i.Lb(19,"span",5),i.Pb(20,"p"),i.uc(21,"Delivered"),i.Lb(22,"br"),i.sc(23,v,2,0,"span",7),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&t&&(i.Ab(10),i.vc(i.cc(11,5,n.order.createdAt,"fullDate")),i.Ab(2),i.fc("ngClass",i.jc(8,y,"placed"!==n.order.order_status)),i.Ab(5),i.fc("ngIf","placed"!==n.order.order_status),i.Ab(1),i.fc("ngClass",i.jc(10,y,"delivered"===n.order.order_status)),i.Ab(5),i.fc("ngIf","delivered"===n.order.order_status))},directives:[o.i,o.k],pipes:[o.d],styles:['.hh-grayBox[_ngcontent-%COMP%]{background-color:#f8f8f8;padding:35px;margin:20px auto 0}.pt45[_ngcontent-%COMP%]{padding-top:45px}.order-tracking[_ngcontent-%COMP%]{text-align:center;width:33.33%;position:relative;display:block}.order-tracking[_ngcontent-%COMP%]   .is-complete[_ngcontent-%COMP%]{display:block;position:relative;border-radius:50%;height:30px;width:30px;border:0 solid #afafaf;background-color:#f7be16;margin:0 auto;transition:background .25s linear;-webkit-transition:background .25s linear;z-index:2}.order-tracking[_ngcontent-%COMP%]   .is-complete[_ngcontent-%COMP%]:after{display:block;position:absolute;content:"";height:14px;width:7px;top:-2px;bottom:0;left:5px;margin:auto 0;border:0 solid #afafaf;border-width:0 2px 2px 0;transform:rotate(45deg);opacity:0}.order-tracking.completed[_ngcontent-%COMP%]   .is-complete[_ngcontent-%COMP%]{border-color:#27aa80;border-width:0;background-color:#27aa80}.order-tracking.completed[_ngcontent-%COMP%]   .is-complete[_ngcontent-%COMP%]:after{border-color:#fff;border-width:0 3px 3px 0;width:7px;left:11px;opacity:1}.order-tracking[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#a4a4a4;font-size:16px;margin-top:8px;margin-bottom:0;line-height:20px}.order-tracking[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px}.order-tracking.completed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.order-tracking[_ngcontent-%COMP%]:before{content:"";display:block;height:3px;width:calc(100% - 40px);background-color:#f7be16;top:13px;position:absolute;left:calc(-50% + 20px);z-index:0}.order-tracking[_ngcontent-%COMP%]:first-child:before{display:none}.order-tracking.completed[_ngcontent-%COMP%]:before{background-color:#27aa80}']}),t})();function w(t,n){1&t&&(i.Pb(0,"div",18),i.uc(1," Your order has been successfully placed! "),i.Ob())}function k(t,n){if(1&t&&(i.Pb(0,"div",19),i.uc(1," Your order id is - \xa0"),i.Pb(2,"span",20),i.uc(3),i.Ob(),i.Ob()),2&t){const t=i.Zb();i.Ab(3),i.vc(t.orderDetail._id)}}function A(t,n){if(1&t&&(i.Pb(0,"div",19),i.uc(1," Your transaction id is - \xa0"),i.Pb(2,"span",20),i.uc(3),i.Ob(),i.Ob()),2&t){const t=i.Zb();i.Ab(3),i.vc(t.orderDetail.transaction_id)}}function I(t,n){1&t&&(i.Pb(0,"h2",24),i.uc(1,"Order Cancelled, you money will be refunded soon."),i.Ob())}const S=function(){return["/view-cart/checkout"]};function D(t,n){1&t&&(i.Pb(0,"div",24),i.Pb(1,"h2"),i.uc(2," Order not placed yet,"),i.Ob(),i.Pb(3,"a",25),i.Pb(4,"h2"),i.uc(5,"\xa0click here\xa0"),i.Ob(),i.Ob(),i.Pb(6,"h2"),i.uc(7,"to place this order now."),i.Ob(),i.Ob()),2&t&&(i.Ab(3),i.fc("routerLink",i.ic(1,S)))}function L(t,n){if(1&t&&(i.Pb(0,"div"),i.Lb(1,"step-indicator",26),i.Ob()),2&t){const t=i.Zb(2);i.Ab(1),i.fc("order",t.orderDetail)}}function z(t,n){if(1&t&&(i.Pb(0,"div",21),i.sc(1,I,2,0,"h2",22),i.sc(2,D,8,2,"div",22),i.sc(3,L,2,1,"div",23),i.Ob()),2&t){const t=i.Zb();i.fc("ngSwitch",t.orderDetail.order_status),i.Ab(1),i.fc("ngSwitchCase","cancelled"),i.Ab(1),i.fc("ngSwitchCase","created")}}function Y(t,n){if(1&t&&(i.Pb(0,"div",27),i.Lb(1,"img",28),i.Pb(2,"div",29),i.Pb(3,"span",30),i.uc(4),i.Ob(),i.Pb(5,"span",31),i.uc(6),i.Ob(),i.Ob(),i.Lb(7,"div",11),i.Pb(8,"span",32),i.uc(9),i.Ob(),i.Pb(10,"span",33),i.uc(11),i.Ob(),i.Ob()),2&t){const t=n.$implicit;i.Ab(1),i.gc("src",t.image,i.qc),i.Ab(3),i.vc(t.product_name),i.Ab(2),i.vc(t.price),i.Ab(3),i.vc(t.quantity),i.Ab(2),i.vc(t.total)}}let j=(()=>{class t{constructor(t,n,e){this.route=t,this.utilityService=n,this.cartApiService=e,this.newOrder=!1,this.orderId="",this.total=0,this.subtotal=0,this.newOrder="true"===this.route.snapshot.queryParamMap.get("new_order"),this.orderId=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.utilityService.showLoader.next(!0),this.cartApiService.orderDetails(this.orderId).subscribe(t=>{t&&(this.orderDetail=t,this.total=t.products.map(t=>t.total).reduce((t,n)=>t+n),this.subtotal=this.total),this.utilityService.showLoader.next(!1)},t=>this.utilityService.showLoader.next(!1))}}return t.\u0275fac=function(n){return new(n||t)(i.Kb(s.a),i.Kb(c.a),i.Kb(a.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-order-confirmation"]],decls:38,vars:12,consts:[["title","ORDER DETAILS"],[1,"order-detail-container"],["class","alert alert-success",4,"ngIf"],["class","alert alert-info",4,"ngIf"],["class","tracker",3,"ngSwitch",4,"ngIf"],[1,"order-detail-secondary-container"],[1,"order-information"],[1,"order-information__header"],[1,"order-information__content"],["class","order-item",4,"ngFor","ngForOf"],[1,"sub-total-item"],[1,"flex-fill"],[1,"total-heading"],[1,"total-count"],[1,"total-item"],[1,"address-information"],[1,"address-information__header"],[1,"address-information__container"],[1,"alert","alert-success"],[1,"alert","alert-info"],[1,"alert-info__id"],[1,"tracker",3,"ngSwitch"],["class","not_placed",4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"not_placed"],[3,"routerLink"],[3,"order"],[1,"order-item"],["height","80","width","80",2,"object-fit","contain",3,"src"],[1,"name-and-price"],[1,"name"],[1,"price"],[1,"quantity"],[1,"total"]],template:function(t,n){1&t&&(i.Pb(0,"app-main-container",0),i.Pb(1,"div",1),i.sc(2,w,2,0,"div",2),i.sc(3,k,4,1,"div",3),i.sc(4,A,4,1,"div",3),i.Ob(),i.sc(5,z,4,3,"div",4),i.Pb(6,"div",5),i.Pb(7,"div",6),i.Pb(8,"div",7),i.uc(9,"Your Order"),i.Ob(),i.Pb(10,"div",8),i.sc(11,Y,12,5,"div",9),i.Pb(12,"div",10),i.Lb(13,"div",11),i.Pb(14,"span",12),i.uc(15,"Sub total"),i.Ob(),i.Pb(16,"span",13),i.uc(17),i.Ob(),i.Ob(),i.Pb(18,"div",14),i.Lb(19,"div",11),i.Pb(20,"span",12),i.uc(21,"Total"),i.Ob(),i.Pb(22,"span",13),i.uc(23),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(24,"div",15),i.Pb(25,"div",16),i.uc(26,"Delivery Address"),i.Ob(),i.Pb(27,"div",17),i.Pb(28,"div"),i.uc(29),i.Ob(),i.Pb(30,"div"),i.uc(31),i.Ob(),i.Pb(32,"div"),i.uc(33),i.Ob(),i.Pb(34,"div"),i.uc(35),i.Ob(),i.Pb(36,"div"),i.uc(37),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&t&&(i.Ab(2),i.fc("ngIf",n.newOrder),i.Ab(1),i.fc("ngIf",n.orderDetail),i.Ab(1),i.fc("ngIf",null==n.orderDetail?null:n.orderDetail.payment_status),i.Ab(1),i.fc("ngIf",null!=n.orderDetail),i.Ab(6),i.fc("ngForOf",null==n.orderDetail?null:n.orderDetail.products),i.Ab(6),i.vc(n.subtotal),i.Ab(6),i.vc(n.total),i.Ab(6),i.wc("Ship to: ",null==n.orderDetail?null:n.orderDetail.user_name,""),i.Ab(2),i.wc("Address: ",null==n.orderDetail?null:n.orderDetail.address,""),i.Ab(2),i.wc("City: ",null==n.orderDetail?null:n.orderDetail.city,""),i.Ab(2),i.wc("State: ",null==n.orderDetail?null:n.orderDetail.state,""),i.Ab(2),i.wc("Zip Code: ",null==n.orderDetail?null:n.orderDetail.zip_code,""))},directives:[d.a,o.k,o.j,o.m,o.n,o.o,s.e,x],styles:[".loader[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.95);width:100%;position:fixed;height:100vh;display:flex;z-index:99}.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;display:block;margin:auto}.primary-button[_ngcontent-%COMP%]{position:relative;border:.1rem solid #000;color:#000;padding:1.2rem 2.5rem;border-radius:.5rem;margin-top:1rem;font-size:1.4rem;outline:none;transition:all .2s}.primary-button[_ngcontent-%COMP%]:hover{border:none;color:#fff;padding:1.2rem 2.5rem;background-image:linear-gradient(-45deg,#075ac9,#35c7df);box-shadow:0 4px 10px -1px rgba(0,0,0,.2),0 4px 6px 1px rgba(0,0,0,.05),inset 0 1px 2px 1px transparent,inset 0 18px 32px -2px hsla(0,0%,100%,.1);transform:translateY(-4px)}.primary-button[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:1.6rem;text-rendering:auto}.primary-button[_ngcontent-%COMP%]:active, .primary-button[_ngcontent-%COMP%]:focus{outline:none;transform:translateY(1px) scale(.96);box-shadow:0 .5rem 1rem rgba(0,0,0,.2)}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInDown{0%{transform:translate3d(0,-300%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown[_ngcontent-%COMP%]{-webkit-animation-name:slideInDown;animation-name:slideInDown}.fadeIn[_ngcontent-%COMP%]{-webkit-animation-name:fadeIn;animation-name:fadeIn}.animated[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.alert-msg[_ngcontent-%COMP%]{position:fixed;right:calc(50% - 150px);top:13rem;z-index:100;padding:2rem}.main-container[_ngcontent-%COMP%]{padding-top:12rem}@-webkit-keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes moveInTop{0%{opacity:0;transform:translateY(-2rem)}to{opacity:1;transform:translateY(0)}}@keyframes moveInTop{0%{opacity:0;transform:translateY(-2rem)}to{opacity:1;transform:translateY(0)}}.order-detail-container[_ngcontent-%COMP%]{margin-top:5rem;padding:0 8rem;flex-direction:column}.alert-info[_ngcontent-%COMP%], .order-detail-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.alert-info[_ngcontent-%COMP%]{font-size:16px;flex-direction:row;width:80%}.alert-info__id[_ngcontent-%COMP%]{font-weight:600}.order-detail-secondary-container[_ngcontent-%COMP%]{margin-top:2rem;padding:0 8rem 4rem;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.order-detail-secondary-container[_ngcontent-%COMP%]   .address-information[_ngcontent-%COMP%]{width:calc(50% - 40px);border:.1rem solid #cecece}.order-detail-secondary-container[_ngcontent-%COMP%]   .address-information__header[_ngcontent-%COMP%]{padding:1.5rem;font-weight:600;background-color:#075ac9;color:#fff;font-size:16px}.order-detail-secondary-container[_ngcontent-%COMP%]   .address-information__container[_ngcontent-%COMP%]{padding:1rem;font-size:2rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{border-color:#075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:.1rem solid #075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1.5rem;color:#fff;font-weight:700;border-color:#075ac9;max-width:13rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border:.1rem solid #cecece}.order-detail-secondary-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;padding:1.5rem;max-width:13rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{font-size:1.8rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]{width:12rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{color:#075ac9}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#dae0e5;height:2.5rem;width:2.5rem;font-size:1.6rem;line-height:1}.order-detail-secondary-container[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 1rem}.order-detail-secondary-container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%]{font-size:2rem}.order-information[_ngcontent-%COMP%]{width:calc(50% - 40px);border:.1rem solid #cecece}.order-information__header[_ngcontent-%COMP%]{padding:1.5rem;font-weight:600;background-color:#075ac9;color:#fff;font-size:16px}.order-information__content[_ngcontent-%COMP%]{padding:2rem}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;margin-bottom:.1rem;color:#856404;background-color:#fff3cd}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]   .total-heading[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .sub-total-item[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]{margin-right:2rem}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;margin-bottom:.1rem;color:#0c5460;background-color:#d1ecf1;font-size:15px;font-weight:600}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-heading[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]{margin-right:2rem}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.5rem;background-color:hsla(0,0%,94.5%,.5);margin-bottom:.1rem}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]{margin-left:1rem;display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .name-and-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]{margin-right:20%}.order-information[_ngcontent-%COMP%]   .order-item[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{margin-right:2rem}.not_placed[_ngcontent-%COMP%]{color:red;display:flex;flex-direction:row;justify-content:center;font-weight:700}"]}),t})();var Z=e("PCNd");const V=[{path:"",component:C},{path:"order-detail/:id",component:j}];let q=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(n){return new(n||t)},imports:[[o.b,Z.a,r.t,s.f.forChild(V)],s.f]}),t})()}}]);