import { Component, OnInit } from '@angular/core';

/** Constants */
import { ContactInfo } from 'src/app/constants/contact-info.const';
import { CartConfig } from 'src/app/constants/header.const';

import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent implements OnInit {

  contactInfo = ContactInfo;
  cartConfig = CartConfig;
  cartItemCount = 0;

  constructor(
    private cartService: CartService
  ) { }

  setCartItems() {
    this.cartItemCount = this.cartService.getCartItemsCount();

    this.cartService.CartUpdateSubject.subscribe(cart => {
      this.cartItemCount = cart.count;
    });
  }

  ngOnInit(): void {
    this.setCartItems();
  }

}
