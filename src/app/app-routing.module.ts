import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AssosListComponent } from './assos-list/assos-list.component';
import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [
  //{ path: 'users', component: UsersListComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersListComponent },
  { path: 'assos', component: AssosListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'user-form', component: UserFormComponent, canActivate: [AuthGuard] },
  {path: '', redirectTo:'users', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
