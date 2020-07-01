import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsModule } from './components/films/films.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationsModule } from './components/locations/locations.module';
import { VehiclesModule } from './components/vehicles/vehicles.module';
import { SpeciesModule } from './components/species/species.module';
import { PeopleModule } from './components/people/people.module';
import { HomeComponent } from './components/shared/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilmsModule,
    HttpClientModule,
    LocationsModule,
    VehiclesModule,
    SpeciesModule,
    PeopleModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
