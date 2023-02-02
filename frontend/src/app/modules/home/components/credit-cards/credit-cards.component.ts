import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { CreditCard } from '../../models/credit-card.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss'],
})
export class CreditCardsComponent implements OnInit {
  public creditCards: CreditCard[] = [];
  public panelOpenState = false;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getCreditCards();
  }

  private getCreditCards(): void {
    this.homeService
      .getCreditCards()
      .pipe(first())
      .subscribe({
        next: (res: CreditCard[]) => {
          console.log(res);

          this.creditCards = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
