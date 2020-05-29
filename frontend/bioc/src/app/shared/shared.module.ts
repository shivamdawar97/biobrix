import {NgModule} from '@angular/core';
import {SearchInputComponent} from './search-input/search-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';

const declarationsAndExports = [
  SearchInputComponent,
  ProductCardComponent,
  MainContainerComponent
];

@NgModule({
  declarations: [...declarationsAndExports],
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  exports: [...declarationsAndExports]
})
export class SharedModule {}
