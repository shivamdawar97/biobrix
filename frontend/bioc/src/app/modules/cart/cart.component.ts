import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';

import { CartService } from 'src/app/core/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  cartItems = [];
  maxQuantiy = 10;


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


  ngOnInit(): void {

    this.getCartItems();

    /** Get Cart Cart From Subscription when it's updated */
    this.cartService.CartUpdateSubject.subscribe((cart) => {
      this.cartItems = cart.items;
    });
  }

}
