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

  submitForm() {
    if (this.name.valid && this.email.valid && this.message.valid) {
      this.sendMessage(this.name.value,this.email.value,this.message.value);
      this.name.reset(); this.email.reset(); this.message.reset();
    }
  }

  private sendMessage(name: string,contact: string, message: string) {
    this.isLoading = true;
    this.contactUsService.sendMessage({name,contact,message}).subscribe( send => {
      this.isLoading = false;
      this.showMessage('Your message has been sent successfully.')
      console.log(send)
    }, err => {
      this.isLoading = false;
      this.showMessage('Error in sending your message.',true);
    }
    )
  }

  private showMessage(message: string, error: boolean = false) {

    const msg = document.createElement('div');
    msg.innerText = message;
    msg.classList.add('alert');
    msg.classList.add(error?'alert-danger':'alert-success');
    msg.classList.add('alert-msg');
    msg.classList.add('animated');
    msg.classList.add('slideInUp');
    document.body.appendChild(msg);

    setTimeout(() => {
      document.body.removeChild(msg);
    }, 4000);
  }


}
