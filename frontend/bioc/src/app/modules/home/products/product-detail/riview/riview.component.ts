import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/core/models/review.model';

@Component({
  selector: 'app-riview',
  templateUrl: './riview.component.html',
  styleUrls: ['./riview.component.scss']
})
export class RiviewComponent implements OnInit {

  constructor() { }

  @Input() review : Review

  ngOnInit(): void {
    console.log(this.review)
  }

}
