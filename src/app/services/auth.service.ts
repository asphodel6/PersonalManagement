import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/login.user.interface';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { catchError, from, takeUntil } from 'rxjs';
import firebase from 'firebase/compat';
import FirebaseError = firebase.FirebaseError;
import { DestoryService } from './destory.service';


@Injectable()

export class AuthService{

  constructor(private _router: Router, private _fireAuth: AngularFireAuth, private _destory$: DestoryService) {

  }

  public login(user: IUser): void {
    from(this._fireAuth.signInWithEmailAndPassword(user.email, user.password)).pipe(
      takeUntil(this._destory$),
      catchError((error: FirebaseError) => {
        if (error.code) {
          alert('Wrong email or password');
        }

        return [];
      })
    ).subscribe(() => {
      localStorage.setItem('token', 'true');
      this._router.navigate(['admin']);
    });
  }

  public singUp(user: IUser): void {
    from(this._fireAuth.createUserWithEmailAndPassword(user.email, user.password)).pipe(
      takeUntil(this._destory$),
      catchError((error: FirebaseError) => {
        if (error.code) {
          alert('Registration failed');
        }

        return [];
      })
    ).subscribe(() => this._router.navigate(['login']));
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('token') === 'true';
  }
}



