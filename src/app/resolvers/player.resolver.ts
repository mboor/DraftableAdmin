import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable} from 'rxjs/Rx';
import { PlayersService } from '../services/players.service';

@Injectable()
export class PlayerResolver implements Resolve<any> {
  constructor (private service: PlayersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.service.getPlayer(route.params['id']);
  }
}
