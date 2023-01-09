import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AssosListComponent } from './assos-list/assos-list.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  //{ path: 'users', component: UsersListComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersListComponent },
  { path: 'assos', component: AssosListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
