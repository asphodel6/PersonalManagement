import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../../../../services/auth.service';
import { IDialogInterface } from '../../../../../interfaces/dialog.interface';
import { DialogService } from '../../../../../services/dialog.service';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', '../button/button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthService, DialogService]
})
export class SidebarComponent {
  constructor(private _authService: AuthService, private _dialogService: DialogService) {

  }

  public logout(): void {
    const dialog: IDialogInterface = {
      dialogHeader: 'Подтвердите',
      dialogContent: 'Покинуть сайт ?',
      cancelButtonLabel: 'Нет',
      confirmButtonLabel: 'Да',
      callbackMethod: () => {
        this._authService.logout();
      }
    };

    this._dialogService.openDialog(dialog);
  }
}
