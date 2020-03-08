import { Component, OnInit } from '@angular/core';

/** Constants */
import { ContactInfo } from 'src/app/constants/contact-info.const';
import { CartConfig } from 'src/app/constants/header.const';

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent implements OnInit {

  contactInfo = ContactInfo;
  cartConfig = CartConfig;

  cartItemCount = 1;

  constructor() { }


  ngOnInit(): void {
  }

}
