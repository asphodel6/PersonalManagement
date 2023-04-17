import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule, Routes  } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PageCreateUserComponent } from './create-user/create-user.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { ButtonComponent } from './components/button/button.component';

const approutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'createuser', component: PageCreateUserComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersComponent,
    PageCreateUserComponent,
    PageNotFoundComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
