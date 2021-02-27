import {Component, OnInit, HostListener, Input} from '@angular/core';
import {HomepageApiService} from '../../../core/http/homepage-api.service';
import {Homepage} from '../../../core/models/homepage.model';
import {UtilityService} from '../../../core/services/utility.service';
import {Router} from "@angular/router";
import { ContactInfoService } from 'src/app/core/services/contact-info.service';
import { HomepageService } from './homepage.service';
import { Category } from 'src/app/core/models/category.model';
import { ProductApiService } from 'src/app/core/http/product-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  homepage: Homepage;
  recentProducts = [];
  private pa1 = [];
  private pa2 = [];
  private pa3 = [];

  constructor(
    private productService: ProductApiService,
    private homepageService: HomepageService,
    private contactService: ContactInfoService,
    private utilityService: UtilityService,
    private router: Router,
  ) {}

  async ngOnInit(): Promise<void>  {
    this.utilityService.showLoader.next(true);

    this.homepage = await this.homepageService.getHomePage;

      this.utilityService.showLoader.next(false);
      const recents = this.homepage.recentProducts;

      for (let i = 0; i < recents.length; i = i + 3) {
        this.pa1.push(recents.slice(i, i + 3));
      }

      for (let i = 0; i < recents.length; i = i + 2) {
        this.pa2.push(recents.slice(i, i + 2));
      }
      recents.forEach( product => this.pa3.push([product]) )

      this.assembelRecentProducts();
      this.contactService.setContactInfo(this.homepage.contact_no,this.homepage.email);

  }

  gotoProductType(type:String){

    const category =
    this.productService.categoryList.find(cat =>cat.categoryName.toLowerCase().trim() == type.toLowerCase())
    this.router.navigate(['/products',category.id])
  }

  productDetail(product_id: string) {
    this.router.navigate(['/product', product_id]);
  }

  @HostListener('window:resize',['$event'])
  onResize = _ => this.assembelRecentProducts();

  private assembelRecentProducts() {
    if(window.innerWidth<700) this.recentProducts = this.pa3;
    else if(window.innerWidth<1120) this.recentProducts = this.pa2;
    else this.recentProducts = this.pa1;
  }


}
