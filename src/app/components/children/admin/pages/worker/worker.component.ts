import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IWorker } from '../../interfaces/worker.interface';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from '../../services/worker.service';
import { DestroyService } from '../../../../../services/destroy.service';
import { Observable, takeUntil } from 'rxjs';


@Component({
  selector: 'admin-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class WorkerComponent{

  public workerData$!: Observable<IWorker>;

  constructor(private _route: ActivatedRoute, private _workerService: WorkerService, private _destroy: DestroyService) {
    this._route.paramMap.pipe(
      takeUntil(this._destroy)
    ).subscribe(key => this.setWorker(key.get('key')));
  }

  private setWorker(key: string | null): void {
    this.workerData$ = this._workerService.getWorkerFromDB(<string>key);
  }
}
