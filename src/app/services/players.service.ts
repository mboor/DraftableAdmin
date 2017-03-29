import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthGuard} from './auth-guard.service';

@Injectable()
export class PlayersService {
  constructor(private http: Http, private authGuard: AuthGuard) {
    console.log('Players Service Initialized...');
  }


  //Get All Players
  getPlayers() {
    return this.http.get('http://localhost:3030/api/players/')
      .map(res => res.json());
  }

  //Get Single Players
  getPlayer(playerId: string) {
    var request = 'http://localhost:3030/api/players/' + playerId;
    return this.http.get(request)
      .map(res => res.json());
  }

  //Edit Player
  editPlayer(jsonObj: string, playerId: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('withCredentials', 'true');
    let options = new RequestOptions({headers: headers});
    return this.http.put('http://localhost:3030/api/players/' + playerId, jsonObj, {withCredentials: true,
      headers: new Headers({'Content-Type' : 'application/json'})})
      .map(res => res.json());
  }

  //Create Player
  createPlayer(jsonObj: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3030/api/players', jsonObj,
    {withCredentials: true, headers: headers})
      .map(res => res.json());
  }

  //Login
  login(jsonObj: Object) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //headers.append('withCredentials', 'true');
    let options = new RequestOptions({headers: headers});
    return this.http.put('http://localhost:3030/api/login', jsonObj, {withCredentials: true,
    headers: new Headers({'Content-Type': 'application/json'})})
      .map(res => res.json());
  }

  //Delete Player
  delete(playerId: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete('http://localhost:3030/api/players/delete/' + playerId,
    {withCredentials: true, headers: headers})
      .map(res => res.json());
  }
}
