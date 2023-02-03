import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(
    message = 'Desculpa, houve um erro! Tente novamente em instantes.',
    actionText = 'Ok'
  ) {
    this.snackBar.open(message, actionText, {
      duration: 3000,
    });
  }
}
