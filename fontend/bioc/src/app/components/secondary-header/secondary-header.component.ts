import { Component, OnInit } from '@angular/core';

/** Constants */
import { ContactInfo } from 'src/app/constants/contact-info.const';

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent implements OnInit {

  contactInfo = ContactInfo

  constructor() { }
  ngOnInit(): void {
  }

}
