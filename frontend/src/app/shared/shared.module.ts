import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './services/snack-bar.service';

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  declarations: [],
  providers: [{ provide: SnackBarService, useClass: SnackBarService }],
})
export class SharedModule {}
