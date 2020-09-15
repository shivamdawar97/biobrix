import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/core/http/contact-us.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-floater',
  templateUrl: './floater.component.html',
  styleUrls: ['./floater.component.scss']
})
export class FloaterComponent implements OnInit {

  isExpanded = false;
  isLoading = false;
  isMessageSend = false;

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required,Validators.email]);
  message = new FormControl('', [Validators.required]);

  constructor(private contactUsService: ContactUsService) { }

  ngOnInit(): void {

  }

  expand = () => this.isExpanded=!this.isExpanded;

  submitForm() {
    this.isMessageSend = false;
    if (this.name.valid && this.email.valid && this.message.valid) {
      this.sendMessage(this.name.value,this.email.value,this.message.value);
      this.name.reset(); this.email.reset(); this.message.reset();
    }
  }

  private sendMessage(name: string,contact: string, message: string) {
    this.isLoading = true;
    this.contactUsService.sendMessage({name,contact,message}).subscribe( _ => this.isLoading = false, _ => this.isLoading = false)
  }

}
