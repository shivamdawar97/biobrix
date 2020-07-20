import { Component, OnInit } from '@angular/core';
import {CartApiService, OrderDetail} from '../../core/http/cart-api.service';
import {UtilityService} from '../../core/services/utility.service';
import {FormControl, Validators} from '@angular/forms';
import {
  VERIFICATION_ENCRYPTION_COUNT,
  VERIFICATION_TIME,
  VERIFICATION_TIMEOUT,
  VERIFIED_NUMBER
} from '../../constants/contact-info.const';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss']
})
export class TrackOrderComponent implements OnInit {

  phone = new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.required]);
  otp = new FormControl('', [Validators.minLength(6), Validators.maxLength(10), Validators.required]);
  isPhoneVerified = false;
  isOtpSent = false;
  orders: OrderDetail;

  constructor(private cartApiService: CartApiService, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.getVerifiedNumber();
  }

  getOtp() {

    if (!this.phone.value || !this.phone.valid) {
      return;
    }
    // this.utilityService.showLoader.next(true);
    // this.cartApiService.getOtp(this.phone.value).subscribe(res => {
    //   if (res.status === 'pending') {
    //     this.isOtpSent = true;
    //   }
    //   this.utilityService.showLoader.next(false);
    // }, err => this.utilityService.showLoader.next(false));
    this.isOtpSent = true;
    this.isPhoneVerified = true;
    this.saveVerifiedNumber();
    this.getDetails(this.phone.value);
  }

  verifyOtp() {
    if (!this.phone.value || !this.otp.value) {
      return;
    }
    this.utilityService.showLoader.next(true);
    this.cartApiService.verifyOtp(this.phone.value, this.otp.value).subscribe(res => {
      if (res.status === 'verified') {
        this.isPhoneVerified = true;
        this.saveVerifiedNumber();
        this.getDetails(this.phone.value);
      }
      this.utilityService.showLoader.next(false);
    }, err => this.utilityService.showLoader.next(false));
  }

  saveVerifiedNumber() {
    localStorage.setItem(VERIFIED_NUMBER, this.BtoA(this.phone.value));
    localStorage.setItem(VERIFICATION_TIME, this.BtoA(new Date().toISOString()));
  }

  getVerifiedNumber() {

    const phoneNumber = localStorage.getItem(VERIFIED_NUMBER);
    const date = localStorage.getItem(VERIFICATION_TIME);

    const limitDate = new Date(this.AtoB(date));

    if (!limitDate) {
      return;
    }

    limitDate.setMinutes( limitDate.getMinutes() + VERIFICATION_TIMEOUT);

    if (!!phoneNumber && limitDate > new Date()) {
      this.phone.setValue(this.AtoB(phoneNumber));
      this.isOtpSent = this.isPhoneVerified = true;
      this.getDetails(this.phone.value);
    }
  }

  getDetails(phone: string) {
    if (!phone) {
      return;
    }

    this.utilityService.showLoader.next(true);
    this.cartApiService.getOrderByPhoneNumber(phone).subscribe(res => {
      console.log('list is', res);
      if (res) {
        this.orders = res;
      }
      this.utilityService.showLoader.next(false);
    }, err => this.utilityService.showLoader.next(false));
  }

  getOrderStatus = status =>  status.charAt(0).toUpperCase() + status.slice(1);

  getColor(status: string){
    let color = '#black'
    switch(status){
      case 'placed' :   color = '#fc7303';  break;
      case 'dispatched' :   color = '#41fc03';  break;
      case 'delivered' :   color = '#41fc03';  break;
      case 'canceled' :   color = '#fc0303';  break;
    }
    return color;
  }

  clearStorage(){

    this.phone = new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.required]);
    this.otp = new FormControl('', [Validators.minLength(6), Validators.maxLength(10), Validators.required]);
    this.orders = undefined;
    this.isOtpSent = false;
    this.isPhoneVerified = false;
    localStorage.removeItem(VERIFIED_NUMBER);
    localStorage.removeItem(VERIFICATION_TIME);
  }

  AtoB(value: string) {
    let newvalue = value;

    for (let i = 0; i < VERIFICATION_ENCRYPTION_COUNT; i ++ ) {
      newvalue = atob(newvalue);
    }

    return newvalue;
  }

  BtoA(value: string) {
    let newvalue = value;

    for (let i = 0; i < VERIFICATION_ENCRYPTION_COUNT; i ++ ) {
      newvalue = btoa(newvalue);
    }

    return newvalue;
  }

}
