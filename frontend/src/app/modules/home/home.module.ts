import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';

@NgModule({
  declarations: [HomeComponent, CreditCardsComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
