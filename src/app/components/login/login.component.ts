import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{

  public loginForm!: FormGroup;

  constructor(
      private _router: Router,
      private _authService: AuthService) {

  }

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    });
  }

  public submitLogin(): void {
    this._authService.login(this.loginForm.value);
    this.loginForm.value.email = '';
    this.loginForm.value.password = '';
  }

  public get email (): any {
    return this.loginForm.get('email');
  }

  public get password (): any {
    return this.loginForm.get('password');
  }
}



