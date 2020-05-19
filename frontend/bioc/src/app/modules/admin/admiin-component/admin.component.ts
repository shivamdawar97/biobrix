import { OnInit, Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isAuthenticated = false

  constructor(private authService: AuthService,private router: Router){}
  private userSubs: Subscription


  ngOnInit(): void {
    this.authService.autoLogin()
    this.userSubs= this.authService.userSubject.subscribe( user => this.changeAuthStatus(user) )

  }

  private changeAuthStatus(user: User){
    this.isAuthenticated = !!user
  }

}
