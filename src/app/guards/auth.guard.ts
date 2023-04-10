import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanDeactivate,
  Router,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> {

  constructor(private _authService: AuthService, private _router: Router) {
  }

  public canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this._authService.isLoggedIn()) {
      this._router.navigate(['login']);

      return false;
    }

    return true;
  }

  public canDeactivate(): boolean{
    return false;
  }

}
