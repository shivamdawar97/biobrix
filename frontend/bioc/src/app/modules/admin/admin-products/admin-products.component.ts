import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductApiService } from 'src/app/core/http/product-api.service';
import { AdminServices } from '../admin.service';
import { ProductDetail } from 'src/app/core/models/product-detail.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  constructor(private adminService: AdminServices) { }

  products: ProductDetail[]
  filterText: string = ''
  ngOnInit(): void { this.getProducts() }

  getProducts(){
      this.adminService.getProductList().subscribe(data=> this.products = data)
  }

}
