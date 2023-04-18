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

@NgModule({
  declarations: [
    SidebarComponent,
    ButtonComponent,
    AdminComponent,
    RecruitmentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
