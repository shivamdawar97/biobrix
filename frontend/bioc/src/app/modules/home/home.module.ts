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


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'view-cart', loadChildren: () => import('src/app/modules/cart/cart.module').then(m => m.CartModule) },
      { path: 'products/:categoryId', component: ProductsComponent },
      { path: 'trade-enquiry', component: TradeEnquiryComponent }
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
    TradeEnquiryComponent
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
export class HomeModule { }
