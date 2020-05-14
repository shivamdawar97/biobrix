import { OnInit, Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isAuthenticated = false

  constructor(private authService: AuthService){}


  ngOnInit(): void {
    this.authService.autoLogin()
  }

}
