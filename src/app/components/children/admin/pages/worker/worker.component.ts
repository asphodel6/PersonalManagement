import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IWorker } from '../../interfaces/worker.interface';

@Component({
  selector: 'admin-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkerComponent implements OnInit{

  public readonly workerData: IWorker = {
    name: 'Тресков Антон Сергеевич',
    profession: 'ML Инженер',
    age: '22',
    currentSalary: '20 000',
    email: 'anton@mail.ru',
    phone: '+79999955595',
    dateOfBirth: '18.06.2004',
    deviceDate: '23.08.2008',
    education: 'Высшее',
    institution: 'Институт радиоэлектроники и информационных технологий - Радиотехнический факультет',
    salaryStatistic: [
      { date: '23.08.2008', sum: 345 },
      { date: '23.09.2008', sum: 200 },
      { date: '23.10.2008', sum: 365 },
      { date: '23.11.2008', sum: 375 },
      { date: '23.12.2008', sum: 150 },
      { date: '23.01.2009', sum: 395 },
      { date: '23.02.2009', sum: 505 },
      { date: '23.03.2009', sum: 415 },
      { date: '23.04.2009', sum: 350 },
      { date: '23.05.2009', sum: 435 },
    ],
    eventHistory: ['Событие 1', 'Событие 2', 'Событие 3', 'Событие 4', 'Событие 5', 'Событие 6', 'Событие 7', 'Событие 8'],
  };

  public ngOnInit(): void {
    this.workerData.eventHistory = this.workerData.eventHistory.reverse();
  }
}
