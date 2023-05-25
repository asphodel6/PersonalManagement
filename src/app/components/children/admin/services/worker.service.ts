import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { IWorker } from '../interfaces/worker.interface';
import { AlertService } from '../../../../services/alert.service';
import { Router } from '@angular/router';

@Injectable()
export class WorkerService {

  constructor(private _db: AngularFireDatabase, private _alertService: AlertService, private _router: Router) {

  }

  public getWorkerFromDB(id: string): Observable<IWorker> {
    return this._db.object(`employees/${id}`).valueChanges().pipe(
      map((data: unknown) => data as IWorker)
    );
  }

  public deleteWorkerFromDB(id: string): void {
    this._db.object(`employees/${id}`).remove();
    this._alertService.showAlert('Сотрудник успешно удален');
    this._router.navigate(['admin']);
  }
}
