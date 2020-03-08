import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/core/models/category.model';
import { CategoryList } from 'src/app/testing/product.data';

@Component({
  selector: 'app-primary-header',
  templateUrl: './primary-header.component.html',
  styleUrls: ['./primary-header.component.scss']
})
export class PrimaryHeaderComponent implements OnInit {

  categoryList: Array<Category>;

  constructor() { }


  getCategoryList() {
    this.categoryList = CategoryList;
  }


  ngOnInit(): void {
    this.getCategoryList();
  }

}
