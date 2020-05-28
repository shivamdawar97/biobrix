import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Category} from 'src/app/core/models/category.model';
import {Product} from 'src/app/core/models/product.model';

import {ProductApiService} from 'src/app/core/http/product-api.service';
import {DataService} from 'src/app/core/services/data.service';

import {DefaultCategory} from 'src/app/constants/products.const';
import {CartService} from 'src/app/core/services/cart.service';
import {UtilityService} from 'src/app/core/services/utility.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categoryList: Array<Category>;
  productList: Array<Product>;
  selectedCategoryIndex: number;
  categoryId: string;
  tag: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private cartService: CartService,
    private productService: ProductApiService,
    private utilityService: UtilityService
  ) {
  }


  getCategoryList() {
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
      params = [{name: 'categoryId', value: categoryId}];
    }

    this.utilityService.showLoader.next(true);

    this.productService.getProductList(params).subscribe({
      next: (data) => {
        this.productList = Array.isArray(data) ? data : [data];
        this.utilityService.showLoader.next(false);
      }
    });
  }

  /** Set Active category by finding its index in category list */
  setActiveCategory() {
    if (!this.categoryList || !this.categoryList.length) {
      return;
    }
    this.selectedCategoryIndex = this.categoryList.findIndex((category: any) => category.id === this.categoryId);
  }


  /**
   * @param categoryId
   * On Category click just change the route and everything will be handled itself on activated route subscription
   */
  onCategoryButtonClick(categoryId: string, selectedCategoryIndex: number) {
    this.tag = '';
    this.selectedCategoryIndex = selectedCategoryIndex;
    this.router.navigate(['/products', categoryId]);
  }


  handleParamsChange(params: any) {
    if (!params.categoryId) {
      return;
    }
    this.categoryId = params.categoryId;
    if (!!this.tag) {
      this.getTagsProducts();
    } else {
      this.getProductList(params.categoryId);
    }
    this.setActiveCategory();
  }


  ngOnInit(): void {

    this.getCategoryList();

    this.tag = this.route.snapshot.queryParamMap.get('tag');

    this.route.params.subscribe(params => {
      this.handleParamsChange(params);
    });
  }

  getTagsProducts() {
    this.utilityService.showLoader.next(true);
    this.productService.getSimilarProducts(this.tag).subscribe(res => {
      if (res) {
        this.productList = Array.isArray(res) ? res : [res];
        this.utilityService.showLoader.next(false);
      }
    }, err => this.utilityService.showLoader.next(false));
  }

  searchChanged(search) {

    if (!search) {
      return;
    }

    this.tag = search;
    this.getTagsProducts();
  }

}
