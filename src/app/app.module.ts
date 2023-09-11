import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { UserService } from './get-user.service';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { SavedUsersComponent } from './saved-users/saved-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SavedUsersComponent,
    UserDetailsComponent,
    WeatherDetailsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
