import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class AuthGuard implements CanActivate {
  authenticated: boolean = false;
  constructor(private cookieService: CookieService, private router: Router) {}
  canActivate() {
    var cookie = this.cookieService.get('AuthSession');
    console.log(cookie);
    console.log(this.authenticated);
    if (this.authenticated && cookie != null && cookie != undefined && cookie != '') {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
