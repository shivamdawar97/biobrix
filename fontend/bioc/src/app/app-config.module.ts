import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';
import { PrimaryHeaderComponent } from './components/primary-header/primary-header.component';
import { CartModule } from './modules/cart/cart.module';


@NgModule({
  declarations: [
    SecondaryHeaderComponent,
    PrimaryHeaderComponent,
  ],
  imports: [
    CommonModule,
    CartModule
  ],
  exports: [
    SecondaryHeaderComponent,
    PrimaryHeaderComponent,
    CartModule
  ]
})
export class AppConfigModule { }
