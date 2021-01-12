import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
// import { HttpInterceptorService } from './services/http-interceptor.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RingersComponent } from './components/ringers/ringers.component';
import { RingerService } from './services/ringer.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import { LogoutComponent } from './components/logout/logout.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { AddRingerComponent } from './components/add-ringer/add-ringer.component';
import { EditRingerComponent } from './components/edit-ringer/edit-ringer.component';
import { SheetComponent } from './components/sheet/sheet.component';
import { RingerSignInComponent } from './components/ringer-sign-in/ringer-sign-in.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SheetService } from './services/sheet.service';
import { SheetSelectionComponent } from './components/sheet-selection/sheet-selection.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/authGuard.service';
import { CanDeactivateGuard } from './components/add-ringer/can-deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    NavbarComponent,
    RingersComponent,
    LogoutComponent,
    AddRingerComponent,
    EditRingerComponent,
    SheetComponent,
    RingerSignInComponent,
    SheetSelectionComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSidenavModule,
    MatCardModule,
    NgbModule
  ],
  providers: [
    SheetService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    RingerService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
