import { ErrorHandler, NgModule } from '@angular/core';
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
import { WorkersService } from './services/workers.service';
import { GraphComponent } from './components/graph/graph.component';
import { NgChartsModule } from 'ng2-charts';
import { InputComponent } from './components/input/input.component';
import { GlobalErrorHandlerService } from '../../../services/global-error-handler.service';
import { AlertService } from '../../../services/alert.service';
import { WorkerService } from './services/worker.service';
import { SortPipe } from './pipes/sort.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GreenButtonModule } from '../../Button/green-button/green-button.module';
import { DialogModule } from '../../../modules/dialog/dialog.module';
import { MatSelectModule } from '@angular/material/select';
import { LetDirective } from './directives/let.directive';


@NgModule({
  declarations: [
    SidebarComponent,
    ButtonComponent,
    AdminComponent,
    RecruitmentComponent,
    WorkerComponent,
    WorkersComponent,
    FilterPipe,
    GraphComponent,
    InputComponent,
    SortPipe,
    LetDirective
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
    NgChartsModule,
    MatDialogModule,
    GreenButtonModule,
    DialogModule,
    MatSelectModule
  ],
  providers: [WorkersService, AlertService, WorkerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ]
})
export class AdminModule { }
