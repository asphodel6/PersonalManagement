import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { fader } from 'src/app/animations/fader';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ fader ]
})
export class AdminComponent {
  constructor(private _contexts: ChildrenOutletContexts) {}

  public getRouteAnimationData(): unknown {
    return this._contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
