import { Component, OnInit, Input } from '@angular/core';
import { CityDetails } from '../models/city-details' ;
@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {

  @Input() weatherForecast: any[];
  @Input() cityDetails: CityDetails;

  constructor() {
    console.log('weather forecast component');
  }

  ngOnInit() {
  }

}
