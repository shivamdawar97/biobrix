import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/core/http/contact-us.service';

@Component({
  selector: 'app-floater',
  templateUrl: './floater.component.html',
  styleUrls: ['./floater.component.scss']
})
export class FloaterComponent implements OnInit {

  isExpanded = false;
  isLoading = false;
  constructor(private contactUsService: ContactUsService) { }

  ngOnInit(): void {

  }

  expand = () => this.isExpanded=!this.isExpanded;



}
