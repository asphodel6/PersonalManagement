import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWorkers } from '../interfaces/workers.interface';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { IWorker } from '../interfaces/worker.interface';

@Injectable()
export class WorkersService  {

  constructor(private _db: AngularFireDatabase) {}

  public getWorkers(): Observable<IWorkers[]> {
    return this._db.list<IWorkers>('employees').valueChanges();
  }

  public setWorker(worker: IWorker): void {
    console.log(worker);
    // this._db.list('employees').push(worker);
    alert('Workers successfully created');
  }
}
