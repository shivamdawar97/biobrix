import { Component, OnInit, ChangeDetectorRef, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  scrollOffset = 0;
  isLoading = false;


  constructor(
    private utilityService: UtilityService,
    private changeDetection: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.utilityService.showLoader.subscribe({
      next: (status) => {
        this.isLoading = status;
        this.changeDetection.detectChanges();
      }
    });
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll = _ => this.scrollOffset = window.pageYOffset;


}
