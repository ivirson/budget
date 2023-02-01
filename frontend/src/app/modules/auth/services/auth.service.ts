import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserToken } from '../models/user-token.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(credentials: Partial<User>): Observable<UserToken> {
    return this.http.post<UserToken>('auth/login', credentials);
  }
}
