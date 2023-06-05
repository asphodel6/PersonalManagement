import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AlertService{

  constructor(private _snackBar: MatSnackBar) { }

  public showAlert(message: string, action: string = 'Закрыть', duration: number = 5000): void {

    this._snackBar.open(message, action, { duration, verticalPosition: 'top', panelClass: ['snack-bar'] });
  }
}
