import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  public registrationForm!: FormGroup;

  constructor(
    private _router: Router,
    private _authService: AuthService) {

  }

  public ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
      'repeat': new FormControl('',[Validators.required])
    });
  }

  public createUser(): void {
    this._authService.singUp(this.registrationForm.value);
    this.registrationForm.get('password')?.reset();
    this.registrationForm.get('repeat')?.reset();
  }

  public get email(): any {
    return this.registrationForm.get('email');
  }

  public get password(): any {
    return this.registrationForm.get('password');
  }

  public get repeat(): any {
    return this.registrationForm.get('repeat');
  }
}
