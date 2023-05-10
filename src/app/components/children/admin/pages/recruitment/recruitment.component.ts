import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkersService } from '../../services/workers.service';
import { IWorker } from '../../interfaces/worker.interface';

export type Card = {
  controlName: string,
  label: string,
}

@Component({
  selector: 'admin-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RecruitmentComponent{

  public readonly patternForValidationName: string = '^(?=.*[а-яА-яA-Za-z])[а-яА-яA-Za-z]{2,}$';

  public recruitmentForm: FormGroup = new FormGroup({
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


  constructor(private _workersService: WorkersService) {
  }

  public trackByControlName(index:number, card: Card): string {
    return card.controlName;
  }

  public submitRecruitment(): void {
    this._workersService.setWorker(<IWorker>this.recruitmentForm.value);
  }
}
