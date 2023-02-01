import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiRootUrl = 'http://localhost:5000';
    const modifiedRequest = request.clone({
      url: `${apiRootUrl}/${request.url}`,
    });
    return next.handle(modifiedRequest);
  }
}
