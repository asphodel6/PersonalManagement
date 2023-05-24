import { ChangeDetectionStrategy, Component, inject, InjectionToken } from '@angular/core';
import { IWorker } from '../../interfaces/worker.interface';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from '../../services/worker.service';
import { map, Observable, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';

const workerData: InjectionToken<Observable<IWorker>> =  new InjectionToken<Observable<IWorker>>('workerData');
@Component({
  selector: 'admin-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: workerData,
      useFactory: () => {
        const route: ActivatedRoute = inject(ActivatedRoute);
        const service: WorkerService = inject(WorkerService);


        return route.paramMap
          .pipe(
            map((params) => params.get('key') as string),
            switchMap(id => service.getWorkerFromDB(id))
          );
      }
    }
  ]
})
export class WorkerComponent {
  public workerData$: Observable<IWorker> = inject(workerData);

  constructor(private _matDialog: MatDialog) {

  }

  public openDialog(id: string): void {
    this._matDialog.open(DialogComponent, {
      data: id
    });
  }
}
