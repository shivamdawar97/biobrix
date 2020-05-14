import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SecondaryHeaderComponent } from 'src/app/components/secondary-header/secondary-header.component';
import { PrimaryHeaderComponent } from 'src/app/components/primary-header/primary-header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { TradeEnquiryComponent } from './trade-enquiry/trade-enquiry.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TrackOrderComponent } from './track-order/track-order.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

import { RiviewComponent } from './products/product-detail/riview/riview.component';

import { FormsModule } from '@angular/forms';
import { AuthGaurd } from '../admin/auth.gaurd';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'view-cart', loadChildren: () => import('src/app/modules/cart/cart.module').then(m => m.CartModule) },
      { path: 'private-path/admin', loadChildren: () => import('src/app/modules/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGaurd] },
      { path: 'products/:categoryId', component: ProductsComponent },
      { path: 'trade-enquiry', component: TradeEnquiryComponent },
      { path: 'track-order', component: TrackOrderComponent},
      { path: 'contact-us', component: ContactComponent},
      { path: 'product/:productId', component: ProductDetailComponent }
    ]
  }
];


@NgModule({
  declarations: [
    HomeComponent,
    SecondaryHeaderComponent,
    PrimaryHeaderComponent,
    HomepageComponent,
    ProductsComponent,
    TradeEnquiryComponent,
    TrackOrderComponent,
    ContactComponent,
    ProductDetailComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
