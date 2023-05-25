import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private _authService: AuthService) {
  }

  public canActivate(): Observable<boolean> {
    return this._authService.isLoggedIn().pipe(
      take(1),
      map(user => {
        if (!user) {
          this._router.navigate(['/login']);

          return false;
        } else {
          return true;
        }
      })
    );
  }
}
