import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackOrderComponent } from './track-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { Routes, RouterModule } from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StepIndicatorComponent } from './step-indicator/step-indicator.component';

const routes: Routes = [
  { path: '', component: TrackOrderComponent },
  {
    path: 'order-detail/:id', component: OrderDetailComponent
  }
];

@NgModule({
  declarations: [
    TrackOrderComponent,
    OrderDetailComponent,
    StepIndicatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TrackOrderModule { }
