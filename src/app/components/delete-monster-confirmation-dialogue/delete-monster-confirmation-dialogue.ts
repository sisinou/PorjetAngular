import { Component } from '@angular/core';
import { MatDialogActions, MatDialogTitle, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-monster-confirmation-dialogue',
  imports: [MatDialogActions, MatDialogTitle, MatDialogClose, MatDialogContent, MatButtonModule],
  templateUrl: './delete-monster-confirmation-dialogue.html',
  styleUrl: './delete-monster-confirmation-dialogue.scss',
})

export class DeleteMonsterConfirmationDialogue {

}
