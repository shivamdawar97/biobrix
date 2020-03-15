import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductApiService } from 'src/app/core/http/product-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductApiService
  ) { }


  getProductList(categoryId: string) {
    const params = [{ name: 'categoryId', value: categoryId }];
    this.productService.getProductList(params).subscribe({
      next: (data) => {
        console.log(data)
      }
    });
  }


  handleParamsChange(params: any) {
    if (!params.categoryId) { return; }
    this.getProductList(params.categoryId);
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.handleParamsChange(params);
    });
  }

}
