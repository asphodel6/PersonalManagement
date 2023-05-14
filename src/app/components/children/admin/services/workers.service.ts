import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWorkers } from '../interfaces/workers.interface';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { IWorker } from '../interfaces/worker.interface';
import { IRecruitmentForm } from '../interfaces/recruitment.form.interface';

@Injectable()
export class WorkersService  {

  constructor(private _db: AngularFireDatabase) {}

  public calculateAge(birthDateString: string, currentDateString: string): string {
    const date1: Date = new Date(birthDateString.split('.').reverse().join('-'));
    const date2: Date = new Date(currentDateString.split('.').reverse().join('-'));
    const birthDate: Date = new Date(date1);
    const currentDate: Date = new Date(date2);

    const diff:number = currentDate.getTime() - birthDate.getTime();

    const msInYear:number = 1000 * 60 * 60 * 24 * 365.25;

    const age:number = Math.floor(diff / msInYear);

    return age.toString();
  }

  public getWorkers(): Observable<IWorkers[]> {
    return this._db.list<IWorkers>('employees').valueChanges(undefined,{});
  }

  public setWorker(form: IRecruitmentForm, worker: IWorker): void {
    const workerDateOfBirth: string = form.dateOfBirth.split('-').reverse().join('.');
    const workerDeviceDate: string = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' });
    worker.name = `${form.name} ${form.surname} ${form.patronymic}`;
    worker.email = form.email;
    worker.phone = form.telephone;
    worker.currentSalary = form.currentSalary.toString();
    worker.dateOfBirth = workerDateOfBirth;
    worker.deviceDate = workerDeviceDate;
    worker.education = form.education;
    worker.profession = form.position;
    worker.institution = form.completedEducationalInstitution;
    worker.eventHistory = [];
    worker.salaryStatistic = [{ date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' }), sum: form.currentSalary }];
    worker.age = this.calculateAge(workerDateOfBirth, workerDeviceDate);
    worker.place = form.place;
    this.pushWorker(worker);
  }

  public pushWorker(worker: IWorker): void {
    this._db.list('employees').push(worker);
    alert('Worker successfully created');
  }
}
