import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  CartUpdateSubject: Subject<any> = new Subject<any>();

  addToCart(product: Product) {
    const saved = this.saveCart(product);

    if (saved) {
      this.updateCartSubscriptions();
      return product;
    }

    return false;
  }


  removeFromCart(product: Product) {
    const cartItems: Array<Product> = this.getCartItems();

    const itemIndex = cartItems.findIndex(item => {
      return item.product_id === product.product_id;
    });

    if (itemIndex !== -1) {
      cartItems.splice(itemIndex, 1);
      this.updateSavedCart(cartItems);
      this.updateCartSubscriptions();
    }
  }


  updateCartSubscriptions() {
    const cartItems = this.getCartItems();
    if (cartItems) {
      this.CartUpdateSubject.next({ count: cartItems.length, items: cartItems });
    } else {
      this.CartUpdateSubject.next({ count: 0, items: null });
    }
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
        return [];
      }
    } catch (err) {
      localStorage.removeItem('cart');
      return [];
    }
  }


  /**
   * Returns hashmap of cart items
   */
  getCartHashMap() {
    const cartHashMap = {};
    const cartItems = this.getCartItems();

    if (!cartItems) { return {}; }

    cartItems.forEach(item => {
      cartHashMap[item.product_id] = item;
    });

    return cartHashMap;
  }


  /**
   * Return total cart items
   */
  getCartItemsCount() {
    const cartItems = this.getCartItems();
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

      /** Find Product Index */
      const itemIndex = cartItems.findIndex(item => {
        return item.product_id === product.product_id;
      });

      /** Check if product quantity has been updated  */
      if (itemIndex === -1) {
        cartItems.push(product);
      } else if (product.quantity !== cartItems[itemIndex].quantity) {
        cartItems[itemIndex] = product;
      }

    } else {
      cartItems.push(product);
    }

    return this.updateSavedCart(cartItems);
  }


  /** Update Cart in local storage */
  updateSavedCart(cartItems) {
    try {
      if (cartItems.length) {
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(cartItems));
      } else {
        localStorage.removeItem('cart');
      }
      return true;
    } catch (err) {
      localStorage.removeItem('cart');
      return false;
    }
  }

  itemInCart(id: string): boolean {
    if (!id) {
      return false;
    }
    const itemIds = this.getCartItems().map(item => item.product_id);
    return itemIds.includes(id);
  }
}
