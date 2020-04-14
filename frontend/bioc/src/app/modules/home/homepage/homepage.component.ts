import { Component, OnInit } from '@angular/core';
import {HomepageApiService} from '../../../core/http/homepage-api.service';
import {Homepage} from '../../../core/models/homepage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  homepage: Homepage;

  constructor(private homepageApiService: HomepageApiService) { }

  ngOnInit(): void {

    this.homepageApiService.getHomePage().subscribe(res => {
      console.log('data is', res);
      this.homepage = res;
    });
  }

}
