import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import {AuthService} from "./auth.service";

@Injectable({providedIn:'root'})
export class AuthGaurd implements CanActivate  {

  constructor(private router: Router,private authService: AuthService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const user = this.authService.userSubject.value
    const isAuth = !!user
    return isAuth ? true : this.router.createUrlTree(['/private-path/admin/administration'])
  }

}
