import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../auth/models/user.model';
import { CreditCardFlag } from '../models/credit-card-flag.model';
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

  public getCreditCardFlags(): Observable<CreditCardFlag[]> {
    return this.http.get<CreditCardFlag[]>(`flags`);
  }

  public saveCreditCard(card: CreditCard): Observable<CreditCard> {
    const user: User = JSON.parse(localStorage.getItem('USER') || '');
    return this.http.post<CreditCard>(`users/${user.id}/credit-cards`, card);
  }

  public updateCreditCard(
    id: string,
    card: CreditCard
  ): Observable<CreditCard> {
    const user: User = JSON.parse(localStorage.getItem('USER') || '');
    return this.http.put<CreditCard>(
      `users/${user.id}/credit-cards/${id}`,
      card
    );
  }

  public deleteCreditCard(id: string): Observable<void> {
    const user: User = JSON.parse(localStorage.getItem('USER') || '');
    return this.http.delete<void>(`users/${user.id}/credit-cards/${id}`);
  }
}
