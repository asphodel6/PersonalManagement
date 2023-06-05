import { Injectable } from '@angular/core';
import { IDialogInterface } from '../../../interfaces/dialog.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable()
export class DialogService {

  constructor(private _matDialog: MatDialog) {

  }

  public openDialog(dialog: IDialogInterface): void {
    this._matDialog.open(DialogComponent, {
      data: dialog
    });
  }
}
