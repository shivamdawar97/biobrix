import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {SecondaryHeaderComponent} from 'src/app/components/secondary-header/secondary-header.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ProductsComponent} from './products/products.component';
import {TradeEnquiryComponent} from './trade-enquiry/trade-enquiry.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ContactComponent} from './contact/contact.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ReviewComponent} from './products/product-detail/review/review.component';
import {SharedModule} from '../../shared/shared.module';
import { PaymentComponent } from './payment/payment.component';
import {SafePipe} from '../../core/pipes/safe.pipe';
import { AboutComponent } from './about/about.component';
import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { FloaterComponent } from 'src/app/components/floater/floater.component';
import { DrawerComponent } from 'src/app/components/drawer/drawer.component';
import { HederPlaceholderDirective } from './headerPlaceholder.directive';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: '', component: HomepageComponent},
      {path: 'view-cart', loadChildren: () => import('src/app/modules/cart/cart.module').then(m => m.CartModule)},
      {path: 'track-order', loadChildren: () => import('src/app/modules/track-order/track-order.module').then(m => m.TrackOrderModule)},
      {path: 'private-path/admin', loadChildren: () => import('src/app/modules/admin/admin.module').then(m => m.AdminModule)},
      {path: 'products/:categoryId', component: ProductsComponent},
      {path: 'trade-enquiry', component: TradeEnquiryComponent},
      {path: 'contact-us', component: ContactComponent},
      {path: 'about', component: AboutComponent},
      {path: 'product/:productId', component: ProductDetailComponent}
    ]
  }
];


@NgModule({
  declarations: [
    CommonModule,
    HomeComponent,
    SecondaryHeaderComponent,
    FooterComponent,
    HomepageComponent,
    ProductsComponent,
    TradeEnquiryComponent,
    ContactComponent,
    ProductDetailComponent,
    ReviewComponent,
    PaymentComponent,
    SafePipe,
    AboutComponent,
    LoadingSpinnerComponent,
    FloaterComponent,
    DrawerComponent,
    HederPlaceholderDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    SafePipe,
    HederPlaceholderDirective
  ]
})
export class HomeModule {
}
