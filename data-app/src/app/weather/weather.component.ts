import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather:any[] = [];

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.GetWeatherData().subscribe(
      (data)=>{
        this.weather = data.weather;
        console.log(this.weather);
      }
    );
  }

}
