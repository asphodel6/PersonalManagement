import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../../../../services/auth.service';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', '../button/button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthService]
})
export class SidebarComponent {
  constructor(private _authService: AuthService) {

  }

  public logout(): void {
    this._authService.logout();
  }
}
