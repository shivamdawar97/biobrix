import { Component, OnInit } from '@angular/core';
import {TestimonyApiService} from '../../../core/http/testimony-api.service';
import {UtilityService} from '../../../core/services/utility.service';
import {Testimony} from '../../../core/models/testimony.model';

@Component({
  selector: 'admin-testimonies',
  templateUrl: './admin-testimonies.component.html',
  styleUrls: ['./admin-testimonies.component.scss']
})
export class AdminTestimoniesComponent implements OnInit {

  list: Testimony[] = [];
  seletectTestimony: string;

  constructor(private testimonyApiService: TestimonyApiService,
              private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.fetchTestimonies();
  }


  fetchTestimonies() {
    this.utilityService.showLoader.next(true);
    this.testimonyApiService.getTestimonies().subscribe(res => {
      if (res) {
        this.list = res;
      }
      this.utilityService.showLoader.next(false);
    }, err => this.utilityService.showLoader.next(false));
  }

  deleteItem(testimony: string) {
    this.seletectTestimony = testimony;
  }

  onDelete() {
    this.utilityService.showLoader.next(true);
    this.testimonyApiService.deleteTestimony(this.seletectTestimony).subscribe(res => {
      console.log('testimony deleted');
      this.utilityService.showLoader.next(false);
      this.fetchTestimonies();
    }, err => this.utilityService.showLoader.next(false));
  }

}
