import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { WeatherPage } from '../pages/weather/weather';
import { FlightCalculatorPage } from '../pages/flightcalculator/flightcalculator';
import { TabsPage } from '../pages/tabs/tabs';
import { GeneralSettingsPage } from '../pages/generalsettings/generalsettings';

@NgModule({
  declarations: [
    MyApp,
    GeneralSettingsPage,
    AboutPage,
    HomePage,
    WeatherPage,
    FlightCalculatorPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GeneralSettingsPage,
    AboutPage,
    HomePage,
    FlightCalculatorPage,
    WeatherPage,
    TabsPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
