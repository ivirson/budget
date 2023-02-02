import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../auth/models/user.model';
import { CreditCard } from '../models/credit-card.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  public getCreditCards(): Observable<CreditCard[]> {
    const user: User = JSON.parse(localStorage.getItem('USER') || '');
    return this.http.get<CreditCard[]>(`users/${user.id}/credit-cards`);
  }
}
