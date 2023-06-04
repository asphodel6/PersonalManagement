import { Component, ElementRef, Input, ViewChild, Renderer2 } from '@angular/core';
import { Card } from '../../pages/recruitment/recruitment.component';
import {
  FormGroup,
  AbstractControl,
} from '@angular/forms';




@Component({
  selector: 'input-recruitment',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() public card!: Card;
  @Input() public recruitmentForm!: FormGroup;
  @Input() public type?: string;
  @ViewChild('input') public input?: ElementRef;

  public selectedEducation: string | undefined;
  public educations: string[] = ['Общее', 'Профессиональное', 'Основное', 'Среднее общее', 'Высшее'];


  private _errors: Record<string, string> = {
    required: 'Это поле обязательно',
    maxlength: 'Максимальная длинна 15',
    pattern: 'Поле не валидно',
    email: 'почта введена неверно'
  };

  constructor(private _renderer: Renderer2) {
  }

  public onInputChange(): void {

    if (this.recruitmentForm.get(this.card.controlName)?.invalid && this.recruitmentForm.get(this.card.controlName)?.touched) {
      this._renderer.setStyle(this.input?.nativeElement, 'border', '2px solid red');
    } else {
      this._renderer.setStyle(this.input?.nativeElement, 'border', 'none');
    }
  }

  public validationElementMethod(controlName: string): boolean {
    return !!(this.recruitmentForm.get(controlName)?.invalid && this.recruitmentForm.get(controlName)?.touched);
  }


  public getErrorMessages<T>(control: AbstractControl<T>): string[] {
    const messages: string[] = [];
    if (control.errors) {
      for (const errorName in control.errors) {
        const mesValue: string = this._errors[errorName] || 'Ввод не валиден';
        messages.push(mesValue);
      }
    }

    return messages;
  }

}

