import { Component, OnInit, Input, OnDestroy } from '@angular/core';

/** Constants */
import { CartConfig } from 'src/app/constants/header.const';
import { CartService } from 'src/app/core/services/cart.service';
import { ContactInfoService } from 'src/app/core/services/contact-info.service';
import { first } from 'rxjs/operators'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent implements OnInit {

  cartConfig = CartConfig;
  cartItemCount = 0;
  phone : string = ''
  email : string = ''
  subscription : Subscription

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
      this.phone = this.contactService.phone;
      this.email = this.contactService.email;
      this.subscription = this.contactService.contactInfo.pipe(first()).subscribe( info => {
      this.email = info.email;
      this.phone = info.phone;
      this.subscription.unsubscribe();
    })
  }

}
