import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IWorkers } from '../../interfaces/workers.interface';
import { PageEvent } from '@angular/material/paginator';
import { WorkersService } from '../../services/workers.service';
import { Observable, Subscription, map, takeUntil } from 'rxjs';
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
export class WorkersComponent implements OnInit, OnDestroy {
  public workers!: Observable<IWorkers[]>;
  public visibleWorkers!: Observable<IWorkers[]>;
  public searchText: string = '';
  public sortText: SortBy = SortBy.name;
  public pageEvent: PageEvent = new PageEvent();
  public pageIndex: number = 0;
  public pageSize: number = 3;
  public length: number = 0;
  constructor(
    public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer,
    private _router: Router,
    public workersServive: WorkersService,
    private _destroy: DestroyService
  ) {
    iconRegistry.addSvgIconLiteral(
      'sortIco',
      sanitizer.bypassSecurityTrustHtml(sortIcon)
    );
  }

  public getServerData(event: PageEvent): PageEvent {
    this.workers.pipe(
      takeUntil(this._destroy)
    ).subscribe((x:IWorkers[]) => this.length = x.length);

    this.visibleWorkers = this.workers
      .pipe(map((x:any) => {
        return x.filter((el: any, index: number) => index + 1 > event.pageIndex * this.pageSize && index + 1 <= event.pageIndex* this.pageSize + this.pageSize);
      }));

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

  public more(key: string): void {
    this._router.navigate(['admin/workers', key]);
  }
}
