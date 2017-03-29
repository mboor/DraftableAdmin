import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDeleteComponent } from './confirm-delete.component';
import { DialogService } from 'ng2-bootstrap-modal';

@Component ({
  selector: 'player',
  templateUrl: 'app/templates/player.component.html',
  providers: [PlayersService]
})

export class PlayerComponent implements OnInit {
  playerInfo: Player;
  playerId : string;
  getPlayerInfo: ElementRef[];
  createPlayer: boolean;

  @ViewChildren('height,weight,position,rank') inputs:QueryList<ElementRef>;
  @ViewChildren('fName,lName,school,height,weight,position,rank') createProspectInputs:QueryList<ElementRef>;

  constructor(private route: ActivatedRoute, private service: PlayersService, private router: Router, private dialogService: DialogService) {
    if (route.snapshot.params['id']){
      this.playerId = route.snapshot.params['id'];
      this.createPlayer = false;
      console.log('create player: ' + this.createPlayer);
    } else {
      this.createPlayer = true;
    }

  }
  ngOnInit() {
    if (this.playerId != null || this.playerId != undefined || this.playerId != ''){
      this.playerInfo = this.route.snapshot.data['player'];
      console.log(this.route.snapshot.data);
    }

  }
  editOrCreatePlayer() {
    if (!this.createPlayer) {
      this.getPlayerInfo = this.inputs.toArray();
      //this.getPlayerInfo.
      console.log(this.getPlayerInfo);
      var editPlayerInfo = { height: "", weight: "", position: "", rank:  ""};
      //var editPlayerInfo: EditPlayer;
      this.getPlayerInfo.forEach(function(item) {
        var value: undefined = item.nativeElement.value;
        var id: string = item.nativeElement.id;
        console.log('value: ' + value + ', id: ' + id);
        if (id.includes('height'))
        {
          editPlayerInfo.height = value;
        }
        else if (id.includes('weight')) {
          editPlayerInfo.weight = value;
        }
        else if (id.includes('position')) {
          editPlayerInfo.position = value;
        }
        else if (id.includes('rank')) {
          editPlayerInfo.rank = value;
        }
      });
      //console.debug('createJsonObject: ' + this.createJsonObject(editPlayerInfo.height, editPlayerInfo.weight, editPlayerInfo.position, editPlayerInfo.rank));
      var jsonObj = this.createJsonObjectForEditPlayer(editPlayerInfo.height, editPlayerInfo.weight, editPlayerInfo.position, editPlayerInfo.rank);
      console.log(jsonObj);
      console.log(this.playerId);
      this.service.editPlayer(jsonObj, this.playerId).subscribe(editPlayer => {
        console.log(editPlayer);
        if (!editPlayer.error && !editPlayer.auth_failed){
          this.router.navigate(['prospects']);
        } else if (editPlayer.auth_failed){
          this.router.navigate(['/']);
        } else {
          console.log(editPlayer);
        }
      });
    } else {
      this.getPlayerInfo = this.createProspectInputs.toArray();
      console.log(this.createProspectInputs);
      var createPlayerInfo = { fName: "", lName: "", school: "", height: "", weight: "", position: "", rank: "" };
      this.getPlayerInfo.forEach(function(item) {
        var value: undefined = item.nativeElement.value;
        var id: string = item.nativeElement.id;
        console.debug('value: ' + value + ', id: ' + id);

        if (id.includes('height')) {
          createPlayerInfo.height = value;
        }
        else if (id.includes('weight')) {
          createPlayerInfo.weight = value;
        }
        else if (id.includes('position')) {
          createPlayerInfo.position = value;
        }
        else if (id.includes('rank')) {
          createPlayerInfo.rank = value;
        }
        else if (id.includes('fName')) {
          createPlayerInfo.fName = value;
        }
        else if (id.includes('lName')) {
          createPlayerInfo.lName = value;
        }
        else if (id.includes('school')) {
          createPlayerInfo.school = value;
        }
      });
      //console.debug('createJsonObject: ' + this.createJsonObject(editPlayerInfo.height, editPlayerInfo.weight, editPlayerInfo.position, editPlayerInfo.rank));
      var jsonObj = this.createJsonObjectForCreatePlayer(createPlayerInfo.fName, createPlayerInfo.lName, createPlayerInfo.school, createPlayerInfo.height, createPlayerInfo.weight, createPlayerInfo.position, createPlayerInfo.rank);
      console.debug(jsonObj);
      console.debug(this.playerId);
      this.service.createPlayer(jsonObj).subscribe(createPlayer => {
        console.log(createPlayer);
        if (!createPlayer.error && !createPlayer.auth_failed) {
          this.router.navigate(['prospects']);
        } else if (createPlayer.auth_failed) {
          this.router.navigate(['/']);
        } else {
          console.log(createPlayer.error);
        }
      });
    }
  }

  createJsonObjectForEditPlayer(height: string, weight: string, position: string, rank: string) {
    var jsonObj = `{
      "firstName": "` + this.playerInfo.firstName + `",
      "lastName": "` + this.playerInfo.lastName + `",
      "height": "` + height + `",
      "weight": "` + weight + `",
      "school": "` + this.playerInfo.school + `",
      "rank": ` + rank + `,
      "position": "` + position + `"
    }`;
    return jsonObj;
  }

  createJsonObjectForCreatePlayer(fName: string, lName: string, school: string, height: string, weight: string, position: string, rank: string) {
    var jsonObj = `{
      "firstName": "` + fName + `",
      "lastName": "` + lName + `",
      "height": "` + height + `",
      "weight": "` + weight + `",
      "school": "` + school + `",
      "rank": ` + rank + `,
      "position": "` + position + `"
    }`;
    return jsonObj;
  }
  checkForEmptyString(string: undefined) {
    if (string == null || string == undefined){
      return '';
    } else {
      return string;
    }
  }
  deletePlayerClick() {
    var playerName = this.playerInfo.firstName + ' ' + this.playerInfo.lastName;
    this.dialogService.addDialog(ConfirmDeleteComponent, {
      title: 'Confirm Delete',
      message: 'Delete ' + playerName + '?',
      playerId: this.playerId
    }).subscribe((isConfirmed) => {
      console.log('isConfirmed: ' + isConfirmed);
      if (isConfirmed) {
        this.router.navigate(['prospects']);
      }
    })
  }
}

interface Player {
  _id: string;
  _rev: string;
  firstName: string;
  lastName: string;
  height: string;
  weight: number;
  school: string;
  rank: number;
  position: string;
}
