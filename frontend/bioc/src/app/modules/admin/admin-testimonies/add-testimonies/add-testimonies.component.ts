import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TestimonyApiService} from '../../../../core/http/testimony-api.service';
import {UtilityService} from '../../../../core/services/utility.service';
import {Router} from '@angular/router';
import {FirebaseStorageService} from "../../firebase-storage.service";

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
              private router: Router,
              private storageService: FirebaseStorageService) { }

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

  async onSubmit() {
    const image_url = await this.storageService.uploadFile(this.file);
    const data = {
      ...this.form.value,
      image: image_url
    };
    this.utilityService.showLoader.next(true);
    this.testimonyApiService.addTestimony(data).subscribe(res => {
      this.utilityService.showLoader.next(false);
      this.router.navigate(['/', 'private-path', 'admin', 'testimonies']);
    }, err => this.utilityService.showLoader.next(false));
  }

}
