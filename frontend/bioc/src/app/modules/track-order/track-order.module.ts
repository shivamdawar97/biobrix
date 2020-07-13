import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackOrderComponent } from './track-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: TrackOrderComponent },
  {
    path: 'orders/order-detail', component: OrderDetailComponent
  }
];


@NgModule({
  declarations: [
    TrackOrderComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TrackOrderModule { }
