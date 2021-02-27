import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router:Router){}

  title = 'bioc';
  ngOnInit(): void {
    this.router.events.subscribe(evt => {
      if(evt instanceof NavigationEnd) window.scrollTo(0,0)
    })
  }


}
