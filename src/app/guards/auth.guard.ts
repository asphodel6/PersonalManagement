import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) {
  }

  public canActivate(): boolean {
    if (localStorage.getItem('token') === 'true') {
      return true;
    }
    this._router.parseUrl('login');

    return false;
  }
}
