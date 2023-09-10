import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(this.apiUrl).pipe(
      map((data: any) => {
        const result = data.results[0];
        return {
          name: {
            title: result.name.title,
            first: result.name.first,
            last: result.name.last,
          },
          email: result.email,
          location: {
            street: {
              number: result.location.street.number,
              name: result.location.street.name,
            },
            city: result.location.city,
            state: result.location.state,
            country: result.location.country,
          },
          coordinates: {
            latitude: result.location.coordinates.latitude,
            longitude: result.location.coordinates.longitude,
          },
          gender: result.gender,
          picture: {
            large: result.picture.large,
            medium: result.picture.medium,
          },
        };
      })
    );
  }
}
