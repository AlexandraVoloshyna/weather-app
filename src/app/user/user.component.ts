import { Component, OnInit } from '@angular/core';
import { UserService } from '../get-user.service';
import { WeatherService } from '../weather.service';
import { IUser } from '../IUser';
import { IWeather } from '../IWeather';
import { concatMap } from 'rxjs/operators';
import { IWeatherIcons } from '../IWetherIcons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user!: IUser;
  weatherData!: IWeather;
  weatherIcon: IWeatherIcons = {
    sun: [0, 1, 2, 3],
    fog: [45, 48],
    rain: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
    snow: [71, 73, 75, 77, 85, 86],
    thunderstorm: [95, 96, 99],
  };
  icon!: string;

  constructor(
    private userService: UserService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.userService
      .getUser()
      .pipe(
        concatMap((userData: IUser) => {
          this.user = userData;
          return this.weatherService.getWeather(
            this.user.coordinates.latitude,
            this.user.coordinates.longitude
          );
        })
      )
      .subscribe({
        next: (weatherData: IWeather) => {
          this.weatherData = weatherData;
          this.findIcon(weatherData.weatherCode);
        },
        error: (error) => {
          console.error('Error fetching weather data:', error);
        },
      });
  }
  findIcon(weatherCode: number) {
    for (const icon in this.weatherIcon) {
      if (this.weatherIcon[icon as keyof IWeatherIcons].includes(weatherCode)) {
        this.icon = icon;
        break;
      }
    }
  }

  saveUser() {
    const savedUserDetailsJSON = localStorage.getItem('savedUserDetails');
    let savedUserDetails: any[] = [];

    if (savedUserDetailsJSON) {
      savedUserDetails = JSON.parse(savedUserDetailsJSON);
    }
    if (this.user && this.weatherData) {
      const userDetailsToSave = {
        user: this.user,
        weatherData: this.weatherData,
        icon: this.icon,
      };

      savedUserDetails.push(userDetailsToSave);

      localStorage.setItem(
        'savedUserDetails',
        JSON.stringify(savedUserDetails)
      );
    } else {
      alert('User details or weather data are not available for saving.');
    }
  }
}
