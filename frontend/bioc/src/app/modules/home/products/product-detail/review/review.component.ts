import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/core/models/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  @Input() review: Review;

  ngOnInit(): void {
  }

}
