import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RecruitmentComponent } from './components/recruitment/recruitment.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'recruitment', component: RecruitmentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
