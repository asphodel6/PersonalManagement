import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/login.user.interface';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, take } from 'rxjs';
import { AlertService } from './alert.service';


@Injectable()

export class AuthService{

  private _userToken: string = '';

  constructor(private _router: Router, private _fireAuth: AngularFireAuth, private _alertService: AlertService) {

  }

  public login(user: IUser): void {
    from(this._fireAuth.signInWithEmailAndPassword(user.email, user.password)).pipe(
      take(1)
    ).subscribe((token) => {
      this._userToken = <string>token.user?.refreshToken;
      sessionStorage.setItem('token', this._userToken);
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
    return sessionStorage.getItem('token') === this._userToken;
  }

  public logout(): void {
    sessionStorage.removeItem('token');
    this._router.navigate(['login']);
    this._alertService.showAlert('You are logged out');
  }
}

