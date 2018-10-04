import { Component } from '@angular/core';
import { weatherBit } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CityDetails } from './models/city-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  
  // searchText: string;  //have to import FormsModule in app.module.ts. need to bring external module 
  //  cityName:string;
  //  stateCode:string;
  //  country_code:string;
  //  datetime:string;
  //  wind_gust_spd:number;
  //  wind_spd: number;
  //  wind_dir:number;
  //  max_temp:number;
  //   urlBase:string;

  constructor()
    {
      
    }

}
