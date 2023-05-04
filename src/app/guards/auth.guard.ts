import { Injectable } from '@angular/core';
import {
  CanActivate, CanDeactivate,
  Router, UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> {

  constructor(private _router: Router) {
  }

  public canActivate(): boolean | UrlTree {
    if (localStorage.getItem('token') === 'true') {
      return true;
    }

    return this._router.parseUrl('login');
  }

  public canDeactivate(): any{
    if (confirm('Are you sure?')) {
      localStorage.removeItem('token');

      return true;
    }

    return false;
  }
}
