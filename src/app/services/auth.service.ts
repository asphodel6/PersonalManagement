import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/login.user.interface';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private _router: Router, private _fireAuth: AngularFireAuth) {

  }

  public login(user: IUser):void {
    this._fireAuth.signInWithEmailAndPassword(user.email, user.password).then(() => {
      localStorage.setItem('token', 'true');
      this._router.navigate(['admin']);
    })
      .catch((error: any) => {
        if (error.code) {
          alert('Wrong email or password');
        }
      });
  }
}



