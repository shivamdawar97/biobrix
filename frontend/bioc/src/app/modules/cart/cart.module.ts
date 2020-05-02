import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ReactiveFormsModule} from '@angular/forms';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: '', component: CartComponent },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'order/:orderId', component: OrderDetailComponent
  }
];

@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    OrderDetailComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CartModule { }
