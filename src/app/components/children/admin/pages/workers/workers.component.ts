import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IWorkers } from '../../interfaces/workers.interface';
import { PageEvent } from '@angular/material/paginator';
import { WorkersService } from '../../services/workers.service';
import { Observable, map, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { DestroyService } from '../../../../../services/destroy.service';
import { SortBy } from '../../pipes/sort.component';


@Component({
  selector: 'admin-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class WorkersComponent implements OnInit {
  public workers!: Observable<IWorkers[]>;
  public visibleWorkers!: Observable<IWorkers[]>;
  public searchText: string = '';
  public sortBy: SortBy = SortBy.noSort;
  public pageEvent: PageEvent = new PageEvent();
  public pageIndex: number = 0;
  public pageSize: number = 10;
  public length: number = 0;
  constructor(
    public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer,
    private _router: Router,
    public workersServive: WorkersService,
    private _destroy: DestroyService
  ) {
  }

  public compareSortBy = (val: SortBy, abs: boolean): boolean => {
    return abs ? val === Math.abs(this.sortBy) : val === this.sortBy;
  };

  public getServerData(event: PageEvent): PageEvent {
    this.workers.pipe(
      takeUntil(this._destroy)
    ).subscribe((x:IWorkers[]) => this.length = x.length);

    this.visibleWorkers = this.workers
      .pipe(map((workers: IWorkers[]) => {
        return workers.filter((el: IWorkers, index: number) => index + 1 > event.pageIndex * this.pageSize && index + 1 <= event.pageIndex* this.pageSize + this.pageSize);
      }));

    return event || new PageEvent();
  }

  public sortByName = (): void => {
    this.sortBy = this.sortBy === SortBy.name ? -SortBy.name : SortBy.name;
  };
  public sortByPosition = (): void => {
    this.sortBy = this.sortBy === SortBy.position ? -SortBy.position : SortBy.position;
  };
  public sortByPlace = (): void => {
    this.sortBy = this.sortBy === SortBy.place ? -SortBy.place : SortBy.place;
  };
  public sortBySalary = (): void => {
    this.sortBy = this.sortBy === SortBy.salary ? -SortBy.salary : SortBy.salary;
  };

  public ngOnInit(): void {
    const initPage: PageEvent = new PageEvent();
    initPage.pageIndex = 0;
    this.workers = this.workersServive.getWorkers();
    this.getServerData(initPage);
  }

  public more(key: string): void {
    this._router.navigate(['admin/workers', key]);
  }
}
