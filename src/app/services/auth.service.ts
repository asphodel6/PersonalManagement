import { Injectable, OnDestroy } from '@angular/core';
import { IUser } from '../interfaces/login.user.interface';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { catchError, from, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnDestroy{

  private _subscription!: Subscription;
  constructor(private _router: Router, private _fireAuth: AngularFireAuth) {

  }

  public login(user: IUser): void {
    const observable = from(this._fireAuth.signInWithEmailAndPassword(user.email, user.password)).pipe(
      catchError((error) => {
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

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}



