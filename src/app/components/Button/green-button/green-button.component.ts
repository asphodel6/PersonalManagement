import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-green-button',
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.scss']
})

export class GreenButtonComponent {
  @Input() public label: string | undefined;
  @Input() public disabled: boolean = false;
  @Input() public width: string | undefined;
  @Input() public height: string | undefined;
  @Output() public byClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  public onClickButton = (event: MouseEvent): void => {
    this.byClick.emit(event);
  };
}
