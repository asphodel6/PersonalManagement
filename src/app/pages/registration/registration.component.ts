import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {

  public registrationForm!: FormGroup;

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
    this.registrationForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
      'repeat': new FormControl('', [Validators.required])
    });
  }

  public createUser(): void {
    this._authService.singUp(this.registrationForm.value);
    this.registrationForm.get('password')?.reset();
    this.registrationForm.get('repeat')?.reset();
  }



  public repeatPassportValid(): boolean {
    return  this.registrationForm?.get('password')?.value !== this.registrationForm?.get('repeat')?.value;
  }

  public validationElementMethod(controlName: string): boolean {
    return !!(this.registrationForm.get(controlName)?.invalid && this.registrationForm.get(controlName)?.touched);
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
