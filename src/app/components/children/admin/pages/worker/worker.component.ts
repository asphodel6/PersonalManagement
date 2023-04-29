import { Component } from '@angular/core';
import { IWorker } from '../../interfaces/worker.interface';
import { OnInit } from "@angular/core";
import { Chart } from 'chart.js';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'admin-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent{

  protected workerData: IWorker = {
    name: 'Тресков Антон Сергеевич',
    profession: 'ML Инженер',
    age: '22',
    currentSalary: '20 000',

    additionalInformation: [
      { label: 'Адресс эл. почты', value: 'anton@mail.ru' },
      { label: 'Телефон', value: '+79999955595' },
      { label: 'Дата рождения', value: '18.06.2004' },
      { label: 'Дата устройства', value: '23.08.2008' },
      { label: 'Образование', value: 'Высшее' },
      {
        label: 'Наименование уч. Учереждения',
        value: 'Институт радиоэлектроники и информационных технологий - Радиотехнический факультет'
      },
    ],
    salaryStatistic: [
      { date: '23.08.2008', sum: 345 },
      { date: '23.09.2008', sum: 355 },
      { date: '23.10.2008', sum: 365 },
      { date: '23.11.2008', sum: 375 },
      { date: '23.12.2008', sum: 385 },
      { date: '23.01.2009', sum: 395 },
      { date: '23.02.2009', sum: 405 },
      { date: '23.03.2009', sum: 415 },
      { date: '23.04.2009', sum: 425 },
      { date: '23.05.2009', sum: 435 },
    ],
    eventHistory: ['Начать работать', 'Получить миска рис', 'Совершить ошибка Партия не одобрят', 'Изъять миска рис', 'Исправить ошибка Партия рад', 'Сдавать тест квалификация АП', 'Успешно работать новая должность', 'Получить кошка жена'],
  };

  // public items!: any[];
  //
  // constructor(private db: AngularFireDatabase) {
  //   this.db.list('employees').valueChanges().subscribe(items => {
  //     this.items = items;
  //     console.log(items);
  //   });
  // }
  //
  // ngOnInit() {
  //
  // }
}
