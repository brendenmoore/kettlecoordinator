import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {tap, shareReplay} from 'rxjs/internal/operators';
import * as dayjs from 'dayjs'
dayjs().format()

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_PATH: 'http://localhost:8080'
  SIGN_UP_URL = '/users/sign-up'
  LOGIN_URL = '/login'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: String;
  public password: String;

  constructor(private http: HttpClient) {

  }

  login(email:string, password:string ) {
    return this.http.post<User>('/api/login', {email, password})
      .pipe(
          tap(res => this.setSession),
          shareReplay()
      );
  }

  private setSession(authResult) {
      const expiresAt = dayjs().add(authResult.expiresIn,'second');

      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return dayjs().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration);
      return dayjs(expiresAt);
  }

}

