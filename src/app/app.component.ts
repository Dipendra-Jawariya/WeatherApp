import { Component, OnInit } from '@angular/core';
import { weatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  cityName: string = 'Indore';
  weatherData?: weatherData;
// > using to 
  constructor(private weatherService: WeatherService){
    // Here injected the weather service
  }   
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  // title = 'WeatherApp';
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next:(response)=>{
        this.weatherData =response;
        console.log(response );
        
      }
    })
  }
}
