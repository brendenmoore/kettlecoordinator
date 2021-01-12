import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RingersComponent } from './components/ringers/ringers.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AddRingerComponent } from './components/add-ringer/add-ringer.component';
import { SheetSelectionComponent } from './components/sheet-selection/sheet-selection.component';
import { SheetComponent } from './components/sheet/sheet.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './services/authGuard.service';
import { AuthService } from './services/auth.service';
import { CanDeactivateGuard } from './components/add-ringer/can-deactivate-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'home', canActivate:[AuthGuard], component: HomeComponent},
  {path: 'ringers', canActivate:[AuthGuard], component: RingersComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'ringers/new', canActivate:[AuthGuard], canDeactivate:[CanDeactivateGuard], component: AddRingerComponent},
  {path: 'ringers/edit/:id', canActivate:[AuthGuard], component: AddRingerComponent},
  {path: 'sheets', canActivate:[AuthGuard], component: SheetSelectionComponent},
  {path: 'sheets/:id', canActivate:[AuthGuard], component: SheetComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
