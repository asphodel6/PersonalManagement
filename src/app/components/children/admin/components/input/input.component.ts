import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Card } from '../../pages/recruitment/recruitment.component';
import {
  FormGroup,
  AbstractControl,
  ɵGetProperty,
  ɵTypedOrUntyped,
  ɵFormGroupRawValue
} from '@angular/forms';

@Component({
  selector: 'input-recruitment',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() public card!: Card;
  @Input() public recruitmentForm!: FormGroup;
  @Input() public selectedEducation!: string;
  @ViewChild('input') public input?: ElementRef;

  public educations: string[] = ['Общее', 'Профессиональное', 'Основное', 'Среднее общее', 'Высшее'];

  public onInputChange(): void {
    if (this.recruitmentForm.get(this.card.controlName)?.invalid && this.recruitmentForm.get(this.card.controlName)?.touched) {
      this.input!.nativeElement.style.border = '2px solid red';
    } else {
      this.input!.nativeElement.style.border = 'none';
    }
  }

  public validationElementMethod(controlName: string): boolean {
    return !!(this.recruitmentForm.get(controlName)?.invalid && this.recruitmentForm.get(controlName)?.touched);
  }

  public getErrorMessages(control: AbstractControl<ɵGetProperty<ɵTypedOrUntyped<any, ɵFormGroupRawValue<any>, any>, string>>): string[] {
    const messages: string[] = [];
    if (control.errors) {
      for (const errorName in control.errors) {
        switch (errorName) {
          case 'required':
            messages.push('Это поле обязательно');
            break;
          case 'maxlength':
            messages.push(`Максимальная длинна 15`);
            break;
          case 'pattern':
            messages.push(`Поле не валидно`);
            break;
          case 'email':
            messages.push(`почта введена неверно`);
            break;
        }
      }
    }

    return messages;
  }

}

