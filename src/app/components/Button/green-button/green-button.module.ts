import { NgModule } from '@angular/core';
import { GreenButtonComponent } from './green-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [
    GreenButtonComponent,
  ],
  exports: [
    GreenButtonComponent,
  ]
})
export class GreenButtonModule { }