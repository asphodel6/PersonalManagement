import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { WorkerComponent } from './pages/worker/worker.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'recruitment', component: RecruitmentComponent },
      { path: 'workers', component: WorkersComponent },
      { path: 'worker', component: WorkerComponent },
      { path: '', redirectTo: 'workers', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
