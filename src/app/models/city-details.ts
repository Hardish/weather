export class CityDetails {
    cityName:string;
    stateCode:string;
    country_code: string;

    constructor(cityName:string,stateCode:string,country_code:string) 
    {
        this.cityName = cityName;
        this.stateCode = stateCode;
        this.country_code = country_code;
    }
}
