import { Component, OnInit } from '@angular/core';
import { AdminProductService } from './admin-product.service';
import { ProductDetail } from 'src/app/core/models/product-detail.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  constructor(private adminService: AdminProductService) { }

  products: ProductDetail[]
  filterText: string = ''
  ngOnInit(): void { this.getProducts() }

  getProducts(){
      this.adminService.getProductList().subscribe(data=> {
        this.products = data
        this.adminService.products = data
      })

  }


}
