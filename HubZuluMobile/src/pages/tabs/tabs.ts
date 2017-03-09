import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { WeatherPage } from '../weather/weather';
import { FlightCalculatorPage } from '../flightcalculator/flightcalculator';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = WeatherPage;
  tab3Root: any = FlightCalculatorPage;

  constructor() {

  }
}
