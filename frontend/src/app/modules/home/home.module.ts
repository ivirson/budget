import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreditCardModalComponent } from './components/credit-cards/components/credit-card-modal/credit-card-modal.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BankAccountsComponent } from './components/bank-accounts/bank-accounts.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { GraphicsComponent } from './components/graphics/graphics.component';

@NgModule({
  declarations: [HomeComponent, CreditCardsComponent, CreditCardModalComponent, BankAccountsComponent, OverviewComponent, ExpensesComponent, GraphicsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    SharedModule,
  ],
})
export class HomeModule {}
