import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TestimonyApiService} from '../../../../core/http/testimony-api.service';
import {UtilityService} from '../../../../core/services/utility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-testimonies',
  templateUrl: './add-testimonies.component.html',
  styleUrls: ['./add-testimonies.component.scss']
})
export class AddTestimoniesComponent implements OnInit {

  form: FormGroup;
  file: File;
  selectedImage: string;

  constructor(private testimonyApiService: TestimonyApiService,
              private utilityService: UtilityService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      customer_name: new FormControl(''),
      testimony: new FormControl('')
    });
  }

  onChange(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.file = file;
    const reader = new FileReader();
    reader.onload = _ => this.selectedImage = reader.result as string;
    reader.readAsDataURL(file);
  }

  onSubmit() {
    const data = {
      ...this.form.value,
      image: this.file
    } as { image: File, customer_name: string, testimony: string};
    this.utilityService.showLoader.next(true);
    this.testimonyApiService.addTestimony(data).subscribe(res => {
      console.log('added resutl is ' , res);
      this.utilityService.showLoader.next(false);
      this.router.navigate(['/', 'private-path', 'admin', 'testimonies']);
    }, err => this.utilityService.showLoader.next(false));
  }

}
