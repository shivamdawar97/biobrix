import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floater',
  templateUrl: './floater.component.html',
  styleUrls: ['./floater.component.scss']
})
export class FloaterComponent implements OnInit {

  isExpanded = false;
  constructor() { }

  ngOnInit(): void {

  }

  expand(){
    this.isExpanded=!this.isExpanded;
  }

}
