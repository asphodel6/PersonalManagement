import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router, UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private _authService: AuthService) {
  }

  public canActivate(): boolean | UrlTree {
    if (this._authService.isLoggedIn()) {

      return true;
    }

    return this._router.parseUrl('login');
  }
}
