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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AuthService } from './auth.service';
import { AdminProductsAddComponent } from "./admin-products/admin-products-add/admin-products-add.Component";
import { AdminProductService } from './admin-products/admin-product.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { FilterPipe } from './admin-products/filter.pipe';
import { AdminOrderDetailsComponent } from './admin-orders/admin-order-details/admin-order-details.component';
import {AdminOrderService} from "./admin-orders/admin-order.service";
import { AdminSlideshowAddComponent } from './admin-slideshow/admin-slideshow-add/admin-slideshow-add.component';
import { AddTestimoniesComponent } from './admin-testimonies/add-testimonies/add-testimonies.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'administration'},
      { path:'administration', component: AdminLoginComponent  },
      { path:'products', component: AdminProductsComponent},
      { path:'products/add', component: AdminProductsAddComponent },
      { path:'products/:id', component: AdminProductsAddComponent },
      { path:'orders', component: AdminOrdersComponent  },
      { path:'orders/:id', component: AdminOrderDetailsComponent  },
      { path:'slideshow', component: AdminSlideshowComponent  },
      {path: 'slideshow/add', component: AdminSlideshowAddComponent},
      { path:'testimonies', component: AdminTestimoniesComponent  },
      {path: 'testimonies/add', component: AddTestimoniesComponent},
      { path:'pending_reviews', component: AdminReviewsComponent  }
    ]
  }
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
    LoadingSpinnerComponent,
    AdminProductsAddComponent,
    FilterPipe,
    AdminOrderDetailsComponent,
    AdminSlideshowAddComponent,
    AddTestimoniesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[AuthService,AdminProductService,AdminOrderService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  exports: [
    RouterModule
  ]
})
export class AdminModule {
}
