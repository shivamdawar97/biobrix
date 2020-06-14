import { Component, OnInit } from '@angular/core';

/** Models */
import { Category } from 'src/app/core/models/category.model';

/** Services */
import { ProductApiService } from 'src/app/core/http/product-api.service';
import { DataService } from 'src/app/core/services/data.service';

import { DefaultCategory } from 'src/app/constants/products.const';

@Component({
  selector: 'app-primary-header',
  templateUrl: './primary-header.component.html',
  styleUrls: ['./primary-header.component.scss']
})
export class PrimaryHeaderComponent implements OnInit {

  categoryList: Array<Category>;

  constructor(
    private productService: ProductApiService,
    private dataService: DataService
  ) { }


  getCategoryList() {
    this.productService.getCategoryList()
      .subscribe({
        next: (data: Array<Category>) => {
          this.categoryList = data;
          // this.dataService.categoryList = data.splice(0, 2);
          this.categoryList.push(DefaultCategory);
        }
      });
  }


  ngOnInit(): void {
    this.getCategoryList();
  }

}
