import { ErrorHandler, Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import firebase from 'firebase/compat';
import FirebaseError = firebase.FirebaseError;

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private _alertService: AlertService) {

  }

  public handleError(error: FirebaseError): void {
    this._alertService.showAlert(`${error.message}`);
  }

}
