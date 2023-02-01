import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiRootUrl = 'http://localhost:5000';
    let modifiedRequest = request.clone({
      url: `${apiRootUrl}/${request.url}`,
    });

    if (request.url.includes('auth')) {
      return next.handle(modifiedRequest);
    }

    const token = localStorage.getItem('USER_TOKEN');

    if (!token) {
      this.router.navigate(['/auth/login']);
    }

    modifiedRequest = modifiedRequest.clone({
      headers: request.headers.set('Authorization', token!),
    });

    return next.handle(modifiedRequest);
  }
}
