import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IWorker } from '../../interfaces/worker.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkerService } from '../../services/worker.service';
import { Observable } from 'rxjs';
import { IDialogInterface } from '../../../../../interfaces/dialog.interface';
import { DialogService } from '../../../../../modules/dialog/services/dialog.service';
import { workerData, workerDataProvider } from '../../providers/worker-data.provider';


@Component({
  selector: 'admin-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: workerData,
      useFactory: workerDataProvider,
      deps: [ActivatedRoute, WorkerService]
    }
  ]
})
export class WorkerComponent {
  public workerData$: Observable<IWorker> = inject(workerData);

  constructor(private _workerService: WorkerService, private _dialogService: DialogService, private _router: Router) {

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
