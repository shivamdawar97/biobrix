import {Component, OnInit} from '@angular/core';
import {Slideshow, SlideshowApiService} from '../../../core/http/slideshow-api.service';
import {UtilityService} from '../../../core/services/utility.service';

@Component({
  selector: 'admin-slideshow',
  templateUrl: './admin-slideshow.component.html',
  styleUrls: ['./admin-slideshow.component.scss']
})
export class AdminSlideshowComponent implements OnInit {

  list: Slideshow[] = [];
  currentId = '';

  constructor(private slidshowApiService: SlideshowApiService, private utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.fetchList();
  }

  onModalClick(id: string) {
    this.currentId = id;
  }

  onDelete() {
    this.utilityService.showLoader.next(true);
    this.slidshowApiService.deleteSlide(this.currentId).subscribe(res => {
      console.log('product deleted');
      this.fetchList();
      this.utilityService.showLoader.next(false);
    }, err => this.utilityService.showLoader.next(false));
  }

  fetchList() {
    this.utilityService.showLoader.next(true);
    this.slidshowApiService.getSlideshows().subscribe(res => {
      if (res.length) {
        this.list = res;
      }
      this.utilityService.showLoader.next(false);
    }, err => this.utilityService.showLoader.next(false));
  }

}
