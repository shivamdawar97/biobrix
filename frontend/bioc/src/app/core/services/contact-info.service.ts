import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

class ContactInfomation {
  constructor(public phone: string,public email: string){}
}

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  contactInfo = new Subject<ContactInfomation>()

  phone = '+91 93130 17818'
  email = 'info@biobrix.com'

  constructor(){}

  setContactInfo(phone,email){
    this.phone = phone;
    this.email = email;
    this.contactInfo.next(new ContactInfomation(phone,email));
  }

}
