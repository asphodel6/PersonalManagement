import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

type Card = {
  controlName: string,
  label: string,
}

@Component({
  selector: 'admin-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})

export class RecruitmentComponent{
  public readonly cardsOfInputs: Card[] = [
    { controlName: 'name', label: 'Имя' },
    { controlName: 'surname', label: 'Фамилия' },
    { controlName: 'patronymic', label: 'Отчество' },
    { controlName: 'email', label: 'Email' },
    { controlName: 'telephone', label: 'Телефон' },
    { controlName: 'position', label: 'Позиция' },
    { controlName: 'dateOfBirth', label: 'Дата рождения' },
    { controlName: 'completedEducationalInstitution', label: 'Уч. Учереждение' },
    { controlName: 'education', label: 'Образование' },
  ];


  protected trackByControlName(index:number, card: Card) {
    return card.controlName;
  }

  private readonly patternForValidationName = '^(?=.*[а-яА-яA-Za-z])[а-яА-яA-Za-z]{2,}$';

  protected recruitmentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(this.patternForValidationName),Validators.maxLength(15)]),
    surname: new FormControl('', [Validators.required, Validators.pattern(this.patternForValidationName),Validators.maxLength(20)]),
    patronymic: new FormControl('', [Validators.required, Validators.pattern(this.patternForValidationName),Validators.maxLength(15)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [Validators.required, Validators.pattern(/^\+7\d{10}$/)]),
    position: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    completedEducationalInstitution: new FormControl('', Validators.required),
    education: new FormControl('', Validators.required),
  });


  ValidationElementMethod(controlName: string): boolean {
    return !!(this.recruitmentForm.get(controlName)?.invalid && this.recruitmentForm.get(controlName)?.touched);
  }


  protected InvalidMethod(controlName: string) {

    return !!(this.recruitmentForm.get(controlName)?.invalid && this.recruitmentForm.get(controlName)?.touched);
  }

  protected submitRecruitment(): void {
    // Create new worker logic
    console.log(this.recruitmentForm.value);
  }
}
