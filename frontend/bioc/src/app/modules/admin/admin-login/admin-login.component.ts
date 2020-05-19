import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, AuthResponseData } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit,OnDestroy {

  isAuthenticated = false
  isLoading = false;
  error:string = null
  private userSubs: Subscription
  user: User

 constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.userSubs= this.authService.userSubject.subscribe( user => this.changeAuthStatus(user) )
  }


  onSubmit(form: NgForm){
    if(form.invalid) return
    this.isLoading = true

    const email = form.value.email
    const password = form.value.password
    let authObs: Observable<AuthResponseData>;

    authObs = this.authService.login(email,password)


    authObs.subscribe(
      resData =>  this.onSuccess(resData),
      errorMessage  =>  this.onError(errorMessage)
    );

  }


  private onSuccess(response: AuthResponseData){
    this.isLoading = false
    this.isAuthenticated = true
  }

  private onError(errorMessage: string){
    this.error = errorMessage
    this.isLoading = false
  }

  private changeAuthStatus(user: User){
    if(user) {
      this.user = user
      this.isAuthenticated = true
    }
    else {
      this.user = null
      this.isAuthenticated = false
    }
  }

  logout(){
    this.authService.logout()
  }


  ngOnDestroy(): void {
    this.userSubs.unsubscribe()
  }


}
