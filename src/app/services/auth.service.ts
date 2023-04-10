import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
  public login(userInfo: { email: string, password: string }): Observable<string | boolean> {
    if (userInfo.email === 'admin@gmail.com' && userInfo.password === 'admin111') {
      this.setToken('asdfghjkljvcuhcecwkbcanxmpozlkjhgf');

      return of(true);
    }

    return throwError(() => new Error('Failed Login'));
  }
  private setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  private getToken(): string | null {
    return localStorage.getItem('token');
  }
}
