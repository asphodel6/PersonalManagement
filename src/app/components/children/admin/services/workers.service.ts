import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWorkers } from '../interfaces/workers.interface';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { IWorker } from '../interfaces/worker.interface';
import { IRecruitmentForm } from '../interfaces/recruitment.form.interface';
import { AlertService } from '../../../../services/alert.service';
import { Router } from '@angular/router';

@Injectable()
export class WorkersService  {

  constructor(private _db: AngularFireDatabase, private _alertService: AlertService, private _router: Router) {}

  public getWorkers(): Observable<IWorkers[]> {
    return this._db.list<IWorkers>('employees').valueChanges(undefined,{});
  }


  public setWorker(form: IRecruitmentForm, worker: IWorker): void {
    const workerDateOfBirth: string = form.dateOfBirth.split('-').reverse().join('.');
    const workerDeviceDate: string = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' });
    if(worker.key !== undefined) {
      if (!(worker.currentSalary === form.currentSalary.toString())) {
        worker.salaryStatistic.push({ date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' }), sum: form.currentSalary });
      }
    }
    else {
      worker.salaryStatistic = [{ date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' }), sum: form.currentSalary }];
      worker.key = this.generateKey();
      worker.deviceDate = workerDeviceDate;
    }
    worker.name = `${form.name} ${form.surname} ${form.patronymic}`;
    worker.email = form.email;
    worker.phone = form.telephone;
    worker.currentSalary = form.currentSalary.toString();
    worker.dateOfBirth = workerDateOfBirth;
    worker.education = form.education;
    worker.profession = form.position;
    worker.institution = form.completedEducationalInstitution;
    worker.age = this.calculateAge(workerDateOfBirth, workerDeviceDate);
    worker.place = form.place;
    worker.img = form.img;
    this.pushWorker(worker);
  }

  public pushWorker(worker: IWorker): void {
    this._db.object(`employees/${worker.key}`).update(worker).then();
    this._alertService.showAlert('Успешно');
    this._router.navigate(['admin/recruitment']);
  }

  private generateKey(): string {
    const newKey: string| null = this._db.database.ref('employees').push().key;

    return <string>newKey;
  }

  private calculateAge(birthDateString: string, currentDateString: string): string {
    const birthDate: Date = new Date(birthDateString.split('.').reverse().join('-'));
    const currentDate: Date = new Date(currentDateString.split('.').reverse().join('-'));
    const diff:number = currentDate.getTime() - birthDate.getTime();
    const msInYear:number = 1000 * 60 * 60 * 24 * 365.25;
    const age:number = Math.floor(diff / msInYear);

    return age.toString();
  }
}
