import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{

  public loginForm!: FormGroup;

  private _errors: Record<string, string> = {
    required: 'Это поле обязательно',
    maxlength: 'Максимальная длинна 15',
    pattern: 'Пароль должен быть длиннее 7 символов и содержать цифры',
    email: 'Неккоректный формат почты'
  };


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
    this.loginForm.get('password')?.reset();
  }



  public validationElementMethod(controlName: string): boolean {
    return !!(this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched);
  }

  public getErrorMessages<T>(control: AbstractControl<T>): string[] {
    const messages: string[] = [];
    if (control.errors) {
      for (const errorName in control.errors) {
        const mesValue: string = this._errors[errorName] || 'Ввод не валиден';
        messages.push(mesValue);
      }
    }

    return messages;
  }
}



