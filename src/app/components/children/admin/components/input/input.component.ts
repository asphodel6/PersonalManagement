import { Component, Input } from '@angular/core';
import { Card } from '../../pages/recruitment/recruitment.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'input-recruitment',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() public card!: Card;
  @Input() public recruitmentForm!: FormGroup;

  public validationElementMethod(controlName: string): boolean {
    return !!(this.recruitmentForm.get(controlName)?.invalid && this.recruitmentForm.get(controlName)?.touched);
  }
}
