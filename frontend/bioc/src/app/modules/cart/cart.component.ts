import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';

import { CartService } from 'src/app/core/services/cart.service';
import {CartApiService} from '../../core/http/cart-api.service';
import {Router} from '@angular/router';
import {UtilityService} from '../../core/services/utility.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [];
  maxQuantiy = 10;

  constructor(
    private cartService: CartService,
    private cartApiService: CartApiService,
    private router: Router,
    private utilityService: UtilityService
  ) { }

  getCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }


  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }


  decrementQuantity(product: Product) {
    if (product.quantity >= 0) {
      product.quantity = product.quantity - 1;
      product.total = product.total - product.price;
    }

    /** If Quantity is zero then remove from cart */
    if (product.quantity === 0) {
      this.cartService.removeFromCart(product);
      return;
    }

    this.cartService.saveCart(product);
  }



  incrementQuantity(product: Product) {

    if (product.quantity < this.maxQuantiy) {
      product.quantity = product.quantity + 1;
      product.total = product.total + product.price;
    }

    this.cartService.saveCart(product);
  }


  checkout() {
    this.utilityService.showLoader.next(true);
    this.cartApiService.createOrder(this.cartItems).subscribe(res => {
      this.utilityService.showLoader.next(false);
      if (!res) {
        return;
      }
      const orderId = res.order_id;
      this.router.navigate(['view-cart/checkout'], {queryParams: {order_id: orderId}});
    });
  }


  ngOnInit(): void {

    this.getCartItems();

    /** Get Cart Cart From Subscription when it's updated */
    this.cartService.CartUpdateSubject.subscribe((cart) => {
      this.cartItems = cart.items;
    });
  }

}
