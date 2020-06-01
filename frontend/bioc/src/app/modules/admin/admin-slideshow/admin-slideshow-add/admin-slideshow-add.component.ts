import {Component, OnInit} from '@angular/core';
import {SlideshowApiService} from '../../../../core/http/slideshow-api.service';
import {UtilityService} from '../../../../core/services/utility.service';
import {ProductApiService} from '../../../../core/http/product-api.service';
import {Product} from '../../../../core/models/product.model';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-slideshow-add',
  templateUrl: './admin-slideshow-add.component.html',
  styleUrls: ['./admin-slideshow-add.component.scss']
})
export class AdminSlideshowAddComponent implements OnInit {

  list: Product[];
  selectedItem: Product;
  image = new FormControl();
  file: string;
  fileData: File;

  constructor(private slidshowApiService: SlideshowApiService,
              private productApiService: ProductApiService,
              private router: Router,
              private utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.utilityService.showLoader.next(true);
    this.productApiService.getProductList().subscribe(res => {
      if (res) {
        this.list = (res as any).reduce((prev, next) => [...prev, ...next.product_list], []);
      }
      this.utilityService.showLoader.next(false);
    }, err => this.utilityService.showLoader.next(false));
  }

  itemSelected(item: Product) {
    this.selectedItem = item;
  }

  addSlide() {
    this.utilityService.showLoader.next(true);
    const data = {
      image: this.fileData,
      product_id: this.selectedItem.product_id
    };
    this.slidshowApiService.addSlide(data).subscribe(res => {
      console.log('result is ', res);
      this.utilityService.showLoader.next(false);
      this.router.navigate(['/', 'private-path', 'admin', 'slideshow']);
    }, err => this.utilityService.showLoader.next(false));
  }

  onChange(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.fileData = file;
    const reader = new FileReader();
    reader.onload = _ => this.file = reader.result as string;
    reader.readAsDataURL(file);
  }
}
