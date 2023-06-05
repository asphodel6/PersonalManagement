import { InjectionToken } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { IWorker } from '../interfaces/worker.interface';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from '../services/worker.service';

export const workerData: InjectionToken<Observable<IWorker>> =  new InjectionToken<Observable<IWorker>>('workerData');

export function workerDataProvider(route: ActivatedRoute, service: WorkerService): Observable<IWorker> {
  return route.paramMap.pipe(
    map((params) => params.get('key') as string),
    switchMap(id => service.getWorkerFromDB(id))
  );
}
