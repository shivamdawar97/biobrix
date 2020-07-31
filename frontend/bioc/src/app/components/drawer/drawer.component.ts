import { Component, HostListener, Input } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {

  isOpen = false;
  @Input() categoryList: Array<Category>;

}
