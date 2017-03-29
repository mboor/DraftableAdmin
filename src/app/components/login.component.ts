import { Component, OnInit, ViewChild, QueryList, ElementRef } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import { AuthGuard } from '../services/auth-guard.service';

@Component ({
  selector: 'login',
  templateUrl: 'app/templates/login.component.html',
  providers: [PlayersService]
})

export class LoginComponent {
  username: string;
  password: string;
  @ViewChild('username') usernameInput:ElementRef;
  @ViewChild('password') passwordInput:ElementRef;
  auth: boolean;
  constructor(private route: ActivatedRoute, private service: PlayersService, private router: Router,
    private cookieService: CookieService, private authGuard: AuthGuard) {
  }

  login() {
    this.username = this.usernameInput.nativeElement.value;
    console.log(this.username);
    this.password = this.passwordInput.nativeElement.value;
    console.log(this.password);

    var jsonObj = {
      "username": this.username,
      "password": this.password
    };
    console.log('json login: ' + jsonObj);
    this.service.login(jsonObj).subscribe(authSession => {
      console.log(authSession);

      this.auth = authSession.auth_failed;
      console.log(this.auth);
      if (!this.auth) {
        this.authGuard.authenticated = true;
        this.router.navigate(['prospects']);
      }
    });
  }
}
