import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router, UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private _authService: AuthService) {
  }

  public canActivate(): Observable<boolean | UrlTree> {
    return this._authService.isLoggedIn().pipe(
      take(1),
      map(user => {
        if (!user) {
          return this._router.parseUrl('/login');
        } else {
          return true;
        }
      })
    );
  }
}
