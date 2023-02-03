import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccountsComponent } from './components/bank-accounts/bank-accounts.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { OverviewComponent } from './components/overview/overview.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'bank-accounts',
        component: BankAccountsComponent,
      },
      {
        path: 'credit-cards',
        component: CreditCardsComponent,
      },
      {
        path: 'expenses',
        component: ExpensesComponent,
      },
      {
        path: 'graphics',
        component: GraphicsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
