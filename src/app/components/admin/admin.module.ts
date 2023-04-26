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
import { RecruitmentComponent } from './components/recruitment/recruitment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersComponent } from '../users/users.component';
import { FilterPipe } from '../users/pipes/search.component';
import { FormsModule } from '@angular/forms';
import { AccountsHttpService } from '../users/services/userdata.service';

@NgModule({
  declarations: [
    SidebarComponent,
    ButtonComponent,
    AdminComponent,
    RecruitmentComponent,
    UsersComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [AccountsHttpService]
})
export class AdminModule { }
