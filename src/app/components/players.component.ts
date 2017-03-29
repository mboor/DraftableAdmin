import { Component, Input, ViewChild, ElementRef} from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
@Component ({
  selector: 'players',
  templateUrl: 'app/templates/players.component.html',
  providers: [PlayersService]
})

export class PlayersComponent {
  players: Players[];
  auth: boolean;
  constructor(private service: PlayersService, private router: Router, private cookieService: CookieService) {
    this.service.getPlayers().subscribe(players => {
      console.log(players);
      this.players = players;
    });
  }

  createNewProspectClick() {
    this.router.navigate(['create']);
  }
  logoutClick() {
    this.cookieService.remove('AuthSession');
    this.router.navigate(['/']);
  }
}

interface Players {
  id: string;
  key: string;
  value: string;
}
