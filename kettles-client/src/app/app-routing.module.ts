import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RingersComponent } from './components/ringers/ringers.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AddRingerComponent } from './components/add-ringer/add-ringer.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ringers', component: RingersComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'ringers/new', component: AddRingerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
