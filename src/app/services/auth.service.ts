import { Injectable, OnDestroy } from '@angular/core';
import { IUser } from '../interfaces/login.user.interface';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { catchError, from, Observable, Subscription } from 'rxjs';
import firebase from 'firebase/compat';
import FirebaseError = firebase.FirebaseError;


@Injectable()

export class AuthService implements OnDestroy{

  private _subscription!: Subscription;
  constructor(private _router: Router, private _fireAuth: AngularFireAuth) {

  }

  public login(user: IUser): void {
    const observable: Observable<firebase.auth.UserCredential> = from(this._fireAuth.signInWithEmailAndPassword(user.email, user.password)).pipe(
      catchError((error: FirebaseError) => {
        if (error.code) {
          alert('Wrong email or password');
        }

        return [];
      })
    );
    this._subscription = observable.subscribe(() => {
      localStorage.setItem('token', 'true');
      this._router.navigate(['admin']);
    });
  }

  public singUp(user: IUser): void {
    const observable: Observable<firebase.auth.UserCredential> = from(this._fireAuth.createUserWithEmailAndPassword(user.email, user.password)).pipe(
      catchError((error: FirebaseError) => {
        if (error.code) {
          alert('Registration failed');
        }

        return [];
      })
    );
    this._subscription = observable.subscribe(() => {
      this._router.navigate(['login']);
    });
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}



