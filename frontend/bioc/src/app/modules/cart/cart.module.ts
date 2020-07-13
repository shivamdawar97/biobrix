import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ReactiveFormsModule} from '@angular/forms';

import { OrderListComponent } from './order-list/order-list.component';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: CartComponent },
  {
    path: 'checkout', component: CheckoutComponent
  }
];

@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CartModule { }
