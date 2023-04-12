import { Component } from '@angular/core';
import {RecruitmentComponent} from "./components/recruitment/recruitment.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'personal_management';
}
