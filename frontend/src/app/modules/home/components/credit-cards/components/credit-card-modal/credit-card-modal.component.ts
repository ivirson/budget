import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { first } from 'rxjs';
import { CreditCardFlag } from 'src/app/modules/home/models/credit-card-flag.model';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { CreditCard } from '../../../../models/credit-card.model';
import { HomeService } from '../../../../services/home.service';

@Component({
  selector: 'app-credit-card-modal',
  templateUrl: './credit-card-modal.component.html',
  styleUrls: ['./credit-card-modal.component.scss'],
})
export class CreditCardModalComponent implements OnInit {
  public form!: FormGroup;
  public creditCardFlags!: CreditCardFlag[];

  constructor(
    private homeService: HomeService,
    private snackBarService: SnackBarService,
    public dialogRef: MatDialogRef<CreditCardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public card?: CreditCard
  ) {}

  ngOnInit() {
    this.getCreditCardFlags();
    this.buildForm();
    if (this.card) this.patchForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      alias: new FormControl(null, [Validators.required]),
      dueDate: new FormControl(null, [Validators.required]),
      invoiceClosingDate: new FormControl(null, [Validators.required]),
      limit: new FormControl(null, [Validators.required]),
      flag: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required]),
    });
  }

  private getCreditCardFlags(): void {
    this.homeService
      .getCreditCardFlags()
      .pipe(first())
      .subscribe({
        next: (res: CreditCardFlag[]) => {
          this.creditCardFlags = res;
        },
        error: (err) => {
          this.snackBarService.openSnackBar();
        },
      });
  }

  private patchForm(): void {
    this.form.patchValue(this.card as CreditCard);
  }

  public onSubmit(): void {
    const payload = this.form.getRawValue();

    if (this.card) {
      return this.updateCard(payload);
    }

    this.saveCard(payload);
  }

  private saveCard(payload: CreditCard): void {
    this.homeService
      .saveCreditCard(payload)
      .pipe(first())
      .subscribe({
        next: (res: CreditCard) => {
          this.closeModal();
        },
        error: (err) => {
          this.snackBarService.openSnackBar();
        },
      });
  }

  private updateCard(payload: CreditCard): void {
    this.homeService
      .updateCreditCard(this.card!.id, payload)
      .pipe(first())
      .subscribe({
        next: (res: CreditCard) => {
          this.closeModal();
        },
        error: (err) => {
          this.snackBarService.openSnackBar();
        },
      });
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
