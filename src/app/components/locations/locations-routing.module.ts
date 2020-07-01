import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLocationsComponent } from './main-locations/main-locations.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';

const routes: Routes = [
  {path: '', component: MainLocationsComponent},{path: 'locations/:id', component: LocationDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
