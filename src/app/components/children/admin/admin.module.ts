import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from './components/button/button.component';
import { AdminComponent } from './admin.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkerComponent } from './pages/worker/worker.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { WorkersComponent } from './pages/workers/workers.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FilterPipe } from './pipes/search.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkersService } from './services/workers.service';

@NgModule({
  declarations: [
    SidebarComponent,
    ButtonComponent,
    AdminComponent,
    RecruitmentComponent,
    WorkerComponent,
    WorkersComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    MatPaginatorModule,
  ],
  providers: [WorkersService]
})
export class AdminModule { }
