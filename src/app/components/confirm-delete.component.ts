import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { PlayersService } from '../services/players.service';
export interface ConfirmModel {
  title: string;
  message: string;
  playerId: string;
}
@Component({
  selector: 'confirmDelete',
  templateUrl: 'app/templates/confirm-delete.component.html'
})
export class ConfirmDeleteComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  playerId: string;
  constructor(dialogService: DialogService, private playerService: PlayersService) {
    super(dialogService);
  }
  confirm() {
    this.playerService.delete(this.playerId).subscribe(deletePlayer => {
      if (deletePlayer.delete_success) {
        this.result = true;
        this.close();
      }
    });
  }
  cancel() {
    this.result = false;
    this.close();
  }
}
