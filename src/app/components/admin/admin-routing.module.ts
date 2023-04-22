import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RecruitmentComponent } from './components/recruitment/recruitment.component';
import { WorkerComponent } from "./components/worker/worker.component";

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'recruitment', component: RecruitmentComponent },
      { path: 'users', component: WorkerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
