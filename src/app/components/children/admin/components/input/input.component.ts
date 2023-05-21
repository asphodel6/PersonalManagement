import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Card } from '../../pages/recruitment/recruitment.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'input-recruitment',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent{
  @Input() public card!: Card;
  @Input() public recruitmentForm!: FormGroup;
  @Input() public type?: string;
  @ViewChild('input') public input?: ElementRef;

  public onInputChange(): void {
    if (this.recruitmentForm.get(this.card.controlName)?.invalid && this.recruitmentForm.get(this.card.controlName)?.touched) {
      this.input!.nativeElement.style.border = '2px solid red';
    }
    else {
      this.input!.nativeElement.style.border = 'none';
    }
  }

  public validationElementMethod(controlName: string): boolean {
    return !!(this.recruitmentForm.get(controlName)?.invalid && this.recruitmentForm.get(controlName)?.touched);
  }

  public validationElementMethodRequired(controlName: string): boolean {
    return !!(this.recruitmentForm.get(controlName)?.errors?.['required']);
  }

  public validationElementMethodPattern(controlName: string): boolean {
    return !!(this.recruitmentForm.get(controlName)?.errors?.['pattern']);
  }

  public validationElementMethodEmail(controlName: string): boolean {
    return !!(this.recruitmentForm.get(controlName)?.errors?.['email']);
  }

}
