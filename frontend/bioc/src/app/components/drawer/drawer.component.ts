import { Component, HostListener, Input } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {

  constructor(private router: Router){}

  isOpen = false;
  @Input() categoryList: Array<Category>;

  public outsideClick(){
     if(this.isOpen) this.isOpen = false;
  }

  itemSelected = route => {
    this.isOpen = false;
    this.router.navigate([route]);
  }

  onCategorySelected = id => {
    this.isOpen = false;
    this.router.navigate(['/products',id]);
  }

}
