import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IWorkers } from '../../interfaces/workers.interface';
import { PageEvent } from '@angular/material/paginator';
import { WorkersService } from '../../services/workers.service';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'admin-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkersComponent implements OnInit {
  public workers!: Observable<IWorkers[]>;
  public visibleWorkers!: Observable<IWorkers[]>;
  public searchText: string = '';
  public sortText: string = '';
  public pageEvent: PageEvent = new PageEvent();
  public pageIndex: number = 0;
  public pageSize: number = 3;
  public length: number = 0;
  constructor(public workersServive: WorkersService) {}

  public getServerData(event: PageEvent): PageEvent {
    this.workers.subscribe((x: IWorkers[]) => (this.length = x.length));

    this.visibleWorkers = this.workers.pipe(
      map((x: IWorkers[]) => {
        return x.filter(
          (el: IWorkers, index: number) =>
            index + 1 > event.pageIndex * this.pageSize &&
            index + 1 <= event.pageIndex * this.pageSize + this.pageSize
        );
      })
    );

    return event || new PageEvent();
  }
  public ngOnInit(): void {
    const initPage: PageEvent = new PageEvent();
    initPage.pageIndex = 0;
    this.workers = this.workersServive.getWorkers();
    this.getServerData(initPage);
  }
}
