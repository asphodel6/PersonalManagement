import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/login.user.interface';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable, take } from 'rxjs';
import { AlertService } from './alert.service';
import firebase from 'firebase/compat';


@Injectable()

export class AuthService{

  private readonly _user!: Observable<firebase.User | null>;

  constructor(private _router: Router, private _fireAuth: AngularFireAuth, private _alertService: AlertService) {
    this._user = _fireAuth.authState;
  }

  public login(user: IUser): void {
    from(this._fireAuth.signInWithEmailAndPassword(user.email, user.password)).pipe(
      take(1)
    ).subscribe(() => {
      this._router.navigate(['admin']);
      this._alertService.showAlert('Вы успешно вошли');
    });
  }

  public singUp(user: IUser): void {
    from(this._fireAuth.createUserWithEmailAndPassword(user.email, user.password)).pipe(
      take(1)
    ).subscribe(() => {
      this._router.navigate(['login']);
      this._alertService.showAlert('Вы успешно зарегестрировались');
    });
  }

  public isLoggedIn(): Observable<firebase.User | null> {
    return this._user;
  }

  public logout(): void {
    this._fireAuth.signOut().then(() => this._alertService.showAlert('Вы вышли из аккаунта'));
    this._router.navigate(['login']);
  }
}

