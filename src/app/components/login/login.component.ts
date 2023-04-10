import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginForm!: FormGroup;
  constructor(
    private _router: Router,
    private _authService: AuthService) {
  }
  public submitLogin(): void {
    this._authService.login(this.loginForm.value).subscribe({
      next: () => this._router.navigate(['admin']),
      error: (err: Error) => alert(err.message)
    });
  }
  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    });
    if (this._authService.isLoggedIn()) {
      this._router.navigate(['admin']);
    }
  }

}
