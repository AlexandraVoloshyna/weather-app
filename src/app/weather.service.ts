import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeather } from './IWeather';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}
  getWeather(latitude: number, longitude: number): Observable<IWeather> {
    const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto&forecast_days=1`;
    return this.http.get<IWeather>(url).pipe(
      map((data: any) => {
        return {
          currentTemperature: data.current_weather.temperature,
          lowestTemperature: data.daily.temperature_2m_min[0],
          highestTemperature: data.daily.temperature_2m_max[0],
          weatherCode: data.current_weather.weathercode,
        };
      })
    );
  }
}
