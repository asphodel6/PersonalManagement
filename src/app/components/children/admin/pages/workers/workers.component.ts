import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { IWorkers } from '../../interfaces/workers.interface';
import { PageEvent } from '@angular/material/paginator';
import { WorkersService } from '../../services/workers.service';
import { Observable, Subscription, map } from 'rxjs';
import { SortBy } from '../../pipes/sort.component';


@Component({
  selector: 'admin-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkersComponent implements OnInit, OnDestroy {
  public workers!: Observable<IWorkers[]>;
  public visibleWorkers!: Observable<IWorkers[]>;
  public searchText: string = '';
  public sortText: SortBy = SortBy.name;
  public pageEvent: PageEvent = new PageEvent();
  public pageIndex: number = 0;
  public pageSize: number = 3;
  public length: number = 0;
  private _sub?: Subscription;
  constructor(public workersServive: WorkersService) {}

  public getServerData(event: PageEvent): PageEvent {
    this._sub = this.workers.subscribe((worker: IWorkers[]) => (this.length = worker.length));
    this.visibleWorkers = this.workers.pipe(
      map((worker: IWorkers[]) => {
        return worker.filter(
          (el: IWorkers, index: number) =>
            index + 1 > event.pageIndex * this.pageSize &&
            index + 1 <= event.pageIndex * this.pageSize + this.pageSize
        );
      })
    );

    return event || new PageEvent();
  }

  public sortByName = (): void => {
    this.sortText = SortBy.name;
  };
  public sortByPosition = (): void => {
    this.sortText = SortBy.position;
  };
  public sortByPlace = (): void => {
    this.sortText = SortBy.place;
  };
  public sortBySalary = (): void => {
    this.sortText = SortBy.salary;
  };

  public ngOnInit(): void {
    const initPage: PageEvent = new PageEvent();
    initPage.pageIndex = 0;
    this.workers = this.workersServive.getWorkers();
    this.getServerData(initPage);
  }

  public ngOnDestroy(): void {
    this._sub?.unsubscribe();
    
  }
}
