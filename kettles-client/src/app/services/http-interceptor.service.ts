import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem("id_token");
    console.log(idToken);

    if (idToken) {
      const cloned = req.clone({
          setHeaders: {
            Authorization: "Bearer " + idToken
          }
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
