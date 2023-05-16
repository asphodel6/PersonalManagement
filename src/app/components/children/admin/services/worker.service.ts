import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { IWorker } from '../interfaces/worker.interface';

@Injectable()
export class WorkerService {

  constructor(private _db: AngularFireDatabase) {

  }

  public getWorkerFromDB(key: string): Observable<IWorker> {
    return this._db.object(`employees/${key}`).valueChanges().pipe(
      map((data: unknown) => data as IWorker)
    );
  }
}
