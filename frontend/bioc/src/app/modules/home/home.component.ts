import { Component, OnInit, ChangeDetectorRef, HostListener, ViewChild, ComponentFactoryResolver, TemplateRef } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility.service';
import { ProductApiService } from 'src/app/core/http/product-api.service';
import { Category } from 'src/app/core/models/category.model';
import { DefaultCategory } from 'src/app/constants/products.const';
import { DrawerComponent } from 'src/app/components/drawer/drawer.component';
import { HederPlaceholderDirective } from './headerPlaceholder.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  scrollOffset = 0;
  isLoading = false;
  screenWidth = 0;
  drawerOpen = false;
  categoryList: Array<Category>;

  @ViewChild('appDrawer') appDrawer : DrawerComponent
  @ViewChild(HederPlaceholderDirective,{static:false}) primaryHeader : HederPlaceholderDirective

  constructor(
    private productService: ProductApiService,
    private utilityService: UtilityService,
    private changeDetection: ChangeDetectorRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.utilityService.showLoader.subscribe({
      next: (status) => {
        this.isLoading = status;
        this.changeDetection.detectChanges();
      }
    });
    this.getCategoryList();
  }


  private getCategoryList() {
    this.productService.getCategoryList().subscribe({next: (data: Array<Category>) => {
          this.categoryList = data;
          this.categoryList.push(DefaultCategory);
        }
    });
  }

  outsideClicked(){
    console.log(this.appDrawer);
    if(this.appDrawer !== undefined) this.appDrawer.outsideClick();
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll = _ =>  this.scrollOffset = window.pageYOffset;

  @HostListener('window:resize',['$event'])
  onResize = async _ => {
    this.screenWidth = window.innerWidth;
    if(window.innerWidth>767){
    const { PrimaryHeaderComponent } = await import('../../components/primary-header/primary-header.component');
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(PrimaryHeaderComponent);
    const hostViewContainerRef = this.primaryHeader.viewContainerRef;

    //next thing we clear anything that might have been rendered before
    hostViewContainerRef.clear();

    //This create a new component in that place
      const compRef = hostViewContainerRef.createComponent(alertCmpFactory);
      compRef.instance.categoryList = this.categoryList;
      compRef.instance.squeeze = this.scrollOffset>100;

    }

  }


}
