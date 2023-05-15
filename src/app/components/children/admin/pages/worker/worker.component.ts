import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IWorker } from '../../interfaces/worker.interface';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from '../../services/worker.service';
import { DestoryService } from '../../../../../services/destory.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'admin-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkerComponent{

  public workerData$!: Observable<IWorker>;

  constructor(private _route: ActivatedRoute, private _workerService: WorkerService, private _destory$: DestoryService) {
    this._route.paramMap.subscribe(key => this.getWorker(key.get('key')));
  }

  private getWorker(key: string | null): void {
    this.workerData$ = this._workerService.getWorkerFromDB(<string>key);
  }
}
