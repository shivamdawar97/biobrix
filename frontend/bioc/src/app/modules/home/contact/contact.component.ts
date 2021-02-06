import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ContactUsService } from 'src/app/core/http/contact-us.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required,Validators.email]);
  message = new FormControl('', [Validators.required]);

  isLoading = false;

  constructor(private contactUsService: ContactUsService) { }

  ngOnInit(): void {
  }


}
