import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/login.user.interface';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, take } from 'rxjs';
import { AlertService } from './alert.service';


@Injectable()

export class AuthService{

  constructor(private _router: Router, private _fireAuth: AngularFireAuth, private _alertService: AlertService) {

  }

  public login(user: IUser): void {
    from(this._fireAuth.signInWithEmailAndPassword(user.email, user.password)).pipe(
      take(1)
    ).subscribe(() => {
      localStorage.setItem('token', 'true');
      this._router.navigate(['admin']);
      this._alertService.showAlert('You have successfully logged in');
    });
  }

  public singUp(user: IUser): void {
    from(this._fireAuth.createUserWithEmailAndPassword(user.email, user.password)).pipe(
      take(1)
    ).subscribe(() => {
      this._router.navigate(['login']);
      this._alertService.showAlert('You have successfully registered');
    });
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('token') === 'true';
  }
}



