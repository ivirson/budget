import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, CreditCardsComponent],
  imports: [CommonModule, HomeRoutingModule, MatIconModule, MatExpansionModule],
})
export class HomeModule {}
