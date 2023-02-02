import { Component } from '@angular/core';
import { HomeSteps } from './constants/home-steps.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public currentStep: HomeSteps = HomeSteps.HOME;
  public steps = HomeSteps;

  public setHomeStep(step: HomeSteps): void {
    this.currentStep = step;
  }
}
