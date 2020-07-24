import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required,Validators.email]);
  message = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.name.valid && this.email.valid && this.message.valid) {
      this.sendMessage(this.name.value,this.email.value,this.message.value);
      this.name.reset(); this.email.reset(); this.message.reset();
    }
  }

  private sendMessage(name: string,email: string, message: string) {

  }
}
