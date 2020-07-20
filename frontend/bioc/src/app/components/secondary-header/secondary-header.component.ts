import { Component, OnInit, Input } from '@angular/core';

/** Constants */
import { ContactInfo } from 'src/app/constants/contact-info.const';
import { CartConfig } from 'src/app/constants/header.const';

import { CartService } from 'src/app/core/services/cart.service';
import { ContactInfoService } from 'src/app/core/services/contact-info.service';

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent implements OnInit {

  cartConfig = CartConfig;
  cartItemCount = 0;
  contactInfo = ContactInfo;

  constructor(
    private cartService: CartService,
    private contactService: ContactInfoService
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
