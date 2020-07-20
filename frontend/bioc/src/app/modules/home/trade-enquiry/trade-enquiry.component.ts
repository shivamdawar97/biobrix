import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-trade-enquiry',
  templateUrl: './trade-enquiry.component.html',
  styleUrls: ['./trade-enquiry.component.scss']
})
export class TradeEnquiryComponent implements OnInit {

  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      name: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required,Validators.minLength(10)]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl(''),
      company: new FormControl('', [Validators.required]),
      reference: new FormControl('', [Validators.required]),
      associated: new FormControl('', [Validators.required]),
      exposure: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      profile: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required])
    });
  }

  submit() {

    if (!this.form.valid) {
      this.showMessage('Please fill all the required fields', true);
      return;
    }

    this.form.reset();
    this.showMessage('Your query has been submitted. Thank you', false);
  }

  showMessage(message: string, error: boolean) {

    const msg = document.createElement('div');
    msg.innerText = message;
    msg.classList.add('alert');
    if (error) {
      msg.classList.add('alert-danger');
    } else {
      msg.classList.add('alert-success');
    }
    msg.classList.add('alert-msg');
    msg.classList.add('animated');
    msg.classList.add('slideInDown');
    document.body.appendChild(msg);

    setTimeout(() => {
      document.body.removeChild(msg);
    }, 3000);
  }

}
