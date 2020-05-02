import {Component, OnInit} from '@angular/core';
import {HomepageApiService} from '../../../core/http/homepage-api.service';
import {Homepage} from '../../../core/models/homepage.model';
import {Product} from '../../../core/models/product.model';
import {CartService} from '../../../core/services/cart.service';
import {UtilityService} from '../../../core/services/utility.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  homepage: Homepage;
  recentProducts = [];

  constructor(
    private homepageApiService: HomepageApiService,
    private cartService: CartService,
    private utilityService: UtilityService
  ) {}


  /**
   * If Product are added to cart then mark "addedToCart" as true
   */
  syncProductsWithCart(products: any) {
    console.log(products);
    const cartHashMap = this.cartService.getCartHashMap();
    console.log(cartHashMap);

    products.forEach((product: Product) => {
      if (cartHashMap[product.product_id]) {
        product.addedToCart = true;
      }
    });


    return products;
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


  ngOnInit(): void {
    this.utilityService.showLoader.next(true);
    this.homepageApiService.getHomePage().subscribe(res => {
      this.homepage = res;

      if (res) {
        this.utilityService.showLoader.next(false);
        const recents = this.syncProductsWithCart(res.recentProducts);
        for (let i = 0; i < recents.length; i = i + 4) {
          this.recentProducts.push(res.recentProducts.slice(i, i + 4));
        }
      }
    });
  }
}
