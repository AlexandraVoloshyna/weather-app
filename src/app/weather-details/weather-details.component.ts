import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent {
  @Input() icon: string = '';
  @Input() highest: number = 0;
  @Input() current: number = 0;
  @Input() lowest: number = 0;
  
}
