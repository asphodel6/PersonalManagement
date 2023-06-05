import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'admin-nav-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonComponent {
  @Input() public text: string | undefined;
  @Input() public path: string | undefined;
}
