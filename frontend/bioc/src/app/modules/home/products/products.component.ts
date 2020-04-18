import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from 'src/app/core/models/category.model';
import { Product } from 'src/app/core/models/product.model';

import { ProductApiService } from 'src/app/core/http/product-api.service';
import { DataService } from 'src/app/core/services/data.service';

import { DefaultCategory } from 'src/app/constants/products.const';
import { CartService } from 'src/app/core/services/cart.service';
import { UtilityService } from 'src/app/core/services/utility.service';


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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private cartService: CartService,
    private productService: ProductApiService,
    private utilityService: UtilityService
  ) { }


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
      params = [{ name: 'categoryId', value: categoryId }];
    }

    this.utilityService.showLoader.next(true);

    this.productService.getProductList(params).subscribe({
      next: (data) => {
        this.productList = Array.isArray(data) ? data : [data];
        this.productList = this.syncProductsWithCart(this.productList);
        this.utilityService.showLoader.next(false);
      }
    });
  }


  /**
   * If Product are added to cart then mark "addedToCart" as true
   */
  syncProductsWithCart(categoryWiseProducts: any) {
    console.log(categoryWiseProducts)
    const cartHashMap = this.cartService.getCartHashMap();
    console.log(cartHashMap)
    categoryWiseProducts.forEach(category => {

      category.product_list.forEach((product: Product) => {
        if (cartHashMap[product.product_id]) {
          product.addedToCart = true;
        }
      });

    });

    return this.productList;
  }


  addToCart(product: Product) {

    if (product.quantity) {
      product.quantity = product.quantity + 1;
      product.total = product.total + product.price;
    } else {
      product.quantity = 1;
      product.total = product.price;
    }

    const addedItem = this.cartService.addToCart(product);
    if (addedItem) {
      addedItem.addedToCart = true;
    }
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
