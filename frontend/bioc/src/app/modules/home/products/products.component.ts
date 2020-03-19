import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from 'src/app/core/models/category.model';

import { ProductApiService } from 'src/app/core/http/product-api.service';
import { DataService } from 'src/app/core/services/data.service';

import { DefaultCategory } from 'src/app/constants/products.const';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categoryList: Array<Category>;
  selectedCategoryIndex: number;
  categoryId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private productService: ProductApiService
  ) { }


  getCategoryList() {

    if (this.dataService.categoryList) {
      this.categoryList = this.dataService.categoryList;
      this.categoryList.unshift(DefaultCategory);
      return;
    }

    this.productService.getCategoryList()
      .subscribe({
        next: (data: Array<Category>) => {
          this.categoryList = data;
          this.dataService.categoryList = data;
          this.categoryList.unshift(DefaultCategory);

          this.setActiveCategory();
        }
      });
  }


  getProductList(categoryId?: any) {
    let params: Array<any>;

    if (categoryId && categoryId !== DefaultCategory.id) {
      params = [{ name: 'categoryId', value: categoryId }];
    }

    this.productService.getProductList(params).subscribe({
      next: (data) => {
        console.log(data)
      }
    });
  }


  /** Set Active category by finding its index in category list */
  setActiveCategory() {
    if (!this.categoryList || !this.categoryList.length) { return; }
    this.selectedCategoryIndex = this.categoryList.findIndex((category: any) => category.id === this.categoryId);
  }


  /**
   * @param categoryId
   * On Category click just change the route and everything will be handled itself on activated route subscription
   */
  onCategoryButtonClick(categoryId: string, selectedCategoryIndex: number) {
    this.selectedCategoryIndex = selectedCategoryIndex;
    this.router.navigate(['/products', categoryId]);
  }


  handleParamsChange(params: any) {
    if (!params.categoryId) { return; }
    this.categoryId = params.categoryId;
    this.getProductList(params.categoryId);
    this.setActiveCategory();
  }


  ngOnInit(): void {

    this.getCategoryList();

    this.route.params.subscribe(params => {
      this.handleParamsChange(params);
    });
  }

}
