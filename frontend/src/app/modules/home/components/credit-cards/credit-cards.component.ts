import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { CreditCard } from '../../models/credit-card.model';
import { HomeService } from '../../services/home.service';
import { CreditCardModalComponent } from '../credit-card-modal/credit-card-modal.component';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss'],
})
export class CreditCardsComponent implements OnInit {
  public creditCards: CreditCard[] = [];
  public panelOpenState = false;

  constructor(
    private homeService: HomeService,
    private snackBarService: SnackBarService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCreditCards();
  }

  private getCreditCards(): void {
    this.homeService
      .getCreditCards()
      .pipe(first())
      .subscribe({
        next: (res: CreditCard[]) => {
          this.creditCards = res;
        },
        error: (err) => {
          this.snackBarService.openSnackBar();
        },
      });
  }

  public addOrEditCreditCard(card?: CreditCard): void {
    const dialogRef = this.dialog.open(CreditCardModalComponent, {
      width: '90vw',
      maxWidth: '90vw',
      height: '95vh',
      maxHeight: '95vh',
      data: card,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getCreditCards();
    });
  }

  public deleteCard(cardId: string): void {
    this.homeService
      .deleteCreditCard(cardId)
      .pipe(first())
      .subscribe({
        next: () => {
          this.getCreditCards();
        },
        error: (err) => {
          this.snackBarService.openSnackBar();
        },
      });
  }
}
