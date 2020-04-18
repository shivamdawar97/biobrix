import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


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

}
