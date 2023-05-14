import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AlertService{

  constructor(private _snackBar: MatSnackBar, private _zone: NgZone) { }

  public showAlert(message: string, action: string = 'Close', duration: number = 5000): void {

    this._snackBar.open(message, action, { duration, verticalPosition: 'top', panelClass: ['snack-bar'] });
  }
}
