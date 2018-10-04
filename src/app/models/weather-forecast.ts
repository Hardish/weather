export class WeatherForecast {
   // weatherForecast: any[];
   datetime:string;
   wind_gust_spd:number;
   wind_spd: number;
   wind_dir:number;
   max_temp: number; 
    constructor(datetime:string,wind_gust_spd:number,wind_spd:number,wind_dir:number,max_temp:number) 
    {
       this.datetime = datetime;
       this.wind_dir = wind_dir;
       this.wind_gust_spd = wind_gust_spd;
       this.wind_spd = wind_spd;
       this.max_temp = max_temp;
    }
}
