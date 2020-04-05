import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  CartCountSubject: Subject<number> = new Subject<number>()

  addToCart(product: Product) {
    console.log('adding to cart', product);
    const saved = this.saveCart(product);

    if (saved) {
      return product;
    }

    return false;
  }


  /**
   * Return list of cart items;
   */
  getCartItems() {
    const savedItems = localStorage.getItem('cart');
    try {
      if (savedItems) {
        return JSON.parse(savedItems);
      } else {
        return null;
      }
    } catch (err) {
      localStorage.removeItem('cart');
      return null;
    }
  }

  /**
   * Returns hashmap of cart items
   */
  getCartHashMap() {
    const cartHashMap = {};
    const cartItems = this.getCartItems();

    cartItems.forEach(item => {
      cartHashMap[item.product_id] = item;
    });

    return cartHashMap;
  }


  /**
   * Return total cart items
   */
  getCartItemsCount() {
    console.log('getting cart count');
    const cartItems = this.getCartItems();
    console.log(cartItems)
    if (cartItems) {
      return cartItems.length;
    }
  }

  /**
   * Save cart to storage
   */
  saveCart(product: Product) {

    const cartItems: Array<Product> = this.getCartItems() || [];

    if (cartItems.length) {
      const itemIndex = cartItems.findIndex(item => {
        return item.product_id === product.product_id;
      });

      if (itemIndex === -1) {
        cartItems.push(product);
      }
    } else {
      cartItems.push(product);
    }

    try {
      localStorage.removeItem('cart');
      localStorage.setItem('cart', JSON.stringify(cartItems));
      this.CartCountSubject.next(cartItems.length);
      return true;
    } catch (err) {
      localStorage.removeItem('cart');
      return false;
    }
  }
}
