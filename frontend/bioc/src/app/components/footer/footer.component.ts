import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactUsService } from 'src/app/core/http/contact-us.service';
import { ProductApiService } from 'src/app/core/http/product-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required,Validators.email]);
  message = new FormControl('', [Validators.required]);

  isLoading = false;

  constructor(private contactUsService: ContactUsService,
    private productService: ProductApiService,
    private router: Router) { }

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

  gotoProductType(type:String){

    const category =
    this.productService.categoryList.find(cat =>cat.categoryName.toLowerCase().trim() == type.toLowerCase())
    this.router.navigate(['/products',category.id])
  }


}
