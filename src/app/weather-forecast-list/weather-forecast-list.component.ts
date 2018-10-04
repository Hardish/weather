import { Component,Input,OnInit, Output } from '@angular/core';
import { weatherBit } from '../../environments/environment';
import { CityDetails } from '../models/city-details' ;
import { WeatherForecast } from '../models/weather-forecast';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {

 
  
  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];
  @Input() searchText: string;
  @Output() cityDetails: CityDetails;
  
  constructor(private http: HttpClient) {
    this.weatherForecasts = [];
    this.weatherBitUrl = ``;
    this.cityDetails = {
      cityName:'',
      stateCode:'',
      country_code:'',
    };

      }

  getWeather() {
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apiKey}`;
    this.http.get(this.weatherBitUrl).subscribe((result: any) => {
      console.log('weather result starts');
      console.log(result);
      console.log('weather result ends');
       this.weatherForecasts = result['data'];
       this.cityDetails.cityName = result['city_name'];
       this.cityDetails.stateCode = result['state_code'];
       this.cityDetails.country_code = result['country_code'];

      // console.log(this.cityDetails.cityName);
      // console.log(this.cityDetails.stateCode);
 
      // console.log(this.cityDetails.country_code);
      });
    //subscribe to weatherbit forecase results here
  }

  ngOnInit() {
  }

}
