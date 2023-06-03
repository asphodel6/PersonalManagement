import { ChangeDetectionStrategy, Component, inject, InjectionToken } from '@angular/core';
import { IWorker } from '../../interfaces/worker.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkerService } from '../../services/worker.service';
import { map, Observable, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { IDialogInterface } from '../../../../../interfaces/dialog.interface';
import { DialogService } from '../../../../../modules/dialog/services/dialog.service';

export const workerData: InjectionToken<Observable<IWorker>> =  new InjectionToken<Observable<IWorker>>('workerData');
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

  constructor(private _matDialog: MatDialog, private _workerService: WorkerService, private _dialogService: DialogService,
              private _router: Router) {

  }

  public openDialog(id: string): void {
    const dialog: IDialogInterface = {
      dialogHeader: 'Подтвердите',
      dialogContent: 'Удалить сотрудника ?',
      cancelButton: { title: 'Нет', callback: () => {} },
      confirmButton: { title: 'Да', callback: () => {
        this._workerService.deleteWorkerFromDB(id);
      } },
    };
    this._dialogService.openDialog(dialog);
  }

  public updateWorker(id: string): void {
    this._router.navigate(['admin/recruitment', id]);
  }
}
