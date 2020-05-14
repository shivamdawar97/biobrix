import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admiin-component/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminSlideshowComponent } from './admin-slideshow/admin-slideshow.component';
import { AdminTestimoniesComponent } from './admin-testimonies/admin-testimonies.component';
import { AdminReviewsComponent } from './admin-reviews/admin-reviews.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children: [
      { path:'administration', component: AdminLoginComponent },
      { path:'products', component: AdminProductsComponent },
      { path:'orders', component: AdminOrdersComponent },
      { path:'slideshow', component: AdminSlideshowComponent },
      { path:'reviews', component: AdminReviewsComponent },
      { path:'testimonies', component: AdminTestimoniesComponent },
    ]
},


];

@NgModule({
  declarations: [
    AdminComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminSlideshowComponent,
    AdminTestimoniesComponent,
    AdminReviewsComponent,
    AdminLoginComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
