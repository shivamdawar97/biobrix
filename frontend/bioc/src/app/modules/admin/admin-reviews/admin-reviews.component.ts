import { Component, OnInit } from '@angular/core';
import {ReviewApiService} from '../../../core/http/review-api.service';
import {Review} from '../../../core/models/review.model';
import {UtilityService} from '../../../core/services/utility.service';

@Component({
  selector: 'admin-reviews',
  templateUrl: './admin-reviews.component.html',
  styleUrls: ['./admin-reviews.component.scss']
})
export class AdminReviewsComponent implements OnInit {

  list: Review[] = [];
  selectedId: string;

  constructor(private reviewApiService: ReviewApiService,
              private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.fetchReviews();
  }

  fetchReviews() {
    this.utilityService.showLoader.next(true);
    this.reviewApiService.getReviews().subscribe(res => {
      if (res) {
        this.list = res;
      }
      this.utilityService.showLoader.next(false);
    }, err => this.utilityService.showLoader.next(false));
  }

  onDelete() {
    this.utilityService.showLoader.next(true);
    const data = {
      reviewId: this.selectedId,
      acknowledge: false
    };
    this.reviewApiService.acknowlegdeReview(data).subscribe(() => {
      console.log('review no added');
      this.utilityService.showLoader.next(false);
      this.fetchReviews();
    }, err => this.utilityService.showLoader.next(false));
  }

  onAccept() {
    this.utilityService.showLoader.next(true);
    const data = {
      reviewId: this.selectedId,
      acknowledge: true
    };
    this.reviewApiService.acknowlegdeReview(data).subscribe(() => {
      console.log('review added');
      this.utilityService.showLoader.next(false);
      this.fetchReviews();
    }, err => this.utilityService.showLoader.next(false));
  }

  selectId(id: string) {
    this.selectedId = id;
  }
}
