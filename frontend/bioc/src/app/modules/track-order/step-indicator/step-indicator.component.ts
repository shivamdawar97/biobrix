import { Component, OnInit, Input } from '@angular/core';
import { OrderDetail } from 'src/app/core/http/cart-api.service';

@Component({
  selector: 'step-indicator',
  templateUrl: './step-indicator.component.html',
  styleUrls: ['./step-indicator.component.scss']
})
export class StepIndicatorComponent implements OnInit {

  @Input() order: OrderDetail;

  constructor() { }


  ngOnInit(): void {
  }

}
