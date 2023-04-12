import {Component} from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css'],

})
export class RecruitmentComponent{
  cardsOfInputs = [
    {controlName: 'name', label: 'Имя'},
    {controlName: 'surname', label: 'Фамилия'},
    {controlName: 'patronymic', label: 'Отчество'},
    {controlName: 'email', label: 'Email'},
    {controlName: 'telephone', label: 'Телефон'},
    {controlName: 'position', label: 'Позиция'},
    {controlName: 'dateOfBirth', label: 'Дата рождения'},
    {controlName: 'completedEducationalInstitution', label: 'Уч. Учереждение'},
    {controlName: 'education', label: 'Образование'},
  ]

  protected recruitmentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[а-яА-яA-Za-z])[а-яА-яA-Za-z]{2,}$/),Validators.maxLength(15)]),
    surname: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[а-яА-яA-Za-z])[а-яА-яA-Za-z]{2,}$/),Validators.maxLength(20)]),
    patronymic: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[а-яА-яA-Za-z])[а-яА-яA-Za-z]{2,}$/),Validators.maxLength(15)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [Validators.required, Validators.pattern(/^\+7\d{10}$/)]),
    position: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    completedEducationalInstitution: new FormControl('', Validators.required),
    education: new FormControl('', Validators.required),

  })

  submitRecruitment() {
    // Create new worker logic
    console.log(this.recruitmentForm.value)
  }
}
