import { Component, OnInit, Input } from '@angular/core';

/** Models */
import { Category } from 'src/app/core/models/category.model';

/** Services */
import { DataService } from 'src/app/core/services/data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-primary-header',
  templateUrl: './primary-header.component.html',
  styleUrls: ['./primary-header.component.scss']
})
export class PrimaryHeaderComponent implements OnInit {

  @Input() categoryList: Array<Category>;


  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  isProductRoute () {
    const url =  this.router.url;
    return url.indexOf('/products') > -1 || url.indexOf('/product') > -1;
  }

}
