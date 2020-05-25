import { Injectable } from '@angular/core';
import { ProductDetail } from 'src/app/core/models/product-detail.model';
import { AdminProductService } from './admin-product.service';

@Injectable()
export class ProductsService {

  products : ProductDetail[]

  constructor(private adminSercice: AdminProductService){}

  fetchProducts(){

  }

}
