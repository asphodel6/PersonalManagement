import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router, UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) {
  }

  public canActivate(): boolean | UrlTree {
    if (localStorage.getItem('token') === 'true') {
      return true;
    }

    return this._router.parseUrl('login');
  }
}
