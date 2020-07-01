import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationCardComponent } from './main-locations/location-card/location-card.component';
import { MainLocationsComponent } from './main-locations/main-locations.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { FiltersLocationComponent } from './main-locations/filters-location/filters-location.component';
import { FormsModule } from '@angular/forms';
import { PeopleModule } from '../people/people.module';
import { FilmsModule } from '../films/films.module';

@NgModule({
  declarations: [MainLocationsComponent, LocationCardComponent, LocationDetailComponent, FiltersLocationComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    FormsModule,
    PeopleModule,
    FilmsModule
  ]
})
export class LocationsModule { }
