import {Component, OnInit} from '@angular/core';
import {HomepageApiService} from '../../../core/http/homepage-api.service';
import {Homepage} from '../../../core/models/homepage.model';
import {Product} from '../../../core/models/product.model';
import {CartService} from '../../../core/services/cart.service';
import {UtilityService} from '../../../core/services/utility.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  homepage: Homepage;
  recentProducts = [];

  constructor(
    private homepageApiService: HomepageApiService,
    private cartService: CartService,
    private utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.utilityService.showLoader.next(true);
    this.homepageApiService.getHomePage().subscribe(res => {
      this.homepage = res;
      if (res) {
        this.utilityService.showLoader.next(false);
        const recents = res.recentProducts;
        for (let i = 0; i < recents.length; i = i + 4) {
          this.recentProducts.push(res.recentProducts.slice(i, i + 4));
        }
      }
    });
  }
}
