import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWorkers } from '../interfaces/workers.interface';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable()
export class WorkersService  {

  constructor(private _db: AngularFireDatabase) {}

  public getWorkers(): Observable<IWorkers[]> {
    return this._db.list<IWorkers>('employees').valueChanges();
  }
}
