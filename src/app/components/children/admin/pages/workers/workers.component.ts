import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IWorkers } from '../../interfaces/workers.interface';
import { PageEvent } from '@angular/material/paginator';
import { WorkersService } from '../../services/workers.service';
import { Observable, map, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { DestroyService } from '../../../../../services/destroy.service';
const sortIcon: string =
  `
<svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="0.50563" y="0.333252" width="12.4944" height="25" fill="url(#pattern0)" fill-opacity="0.5"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_76_810" transform="matrix(0.00390801 0 0 0.00195312 -0.50045 0)"/>
</pattern>
<image id="image0_76_810" width="512" height="512" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`;


@Component({
  selector: 'admin-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class WorkersComponent implements OnInit {
  public workers!: Observable<IWorkers[]>;
  public visibleWorkers!: Observable<IWorkers[]>;
  public searchText: string = '';
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
