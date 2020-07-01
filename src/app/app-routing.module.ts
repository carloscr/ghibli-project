import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: 'films',
    loadChildren: () =>
      import('./components/films/films.module').then(m=>m.FilmsModule)
  },
  {
    path: 'people',
    loadChildren: () =>
      import('./components/people/people.module').then(m=>m.PeopleModule)
  },
  {
    path: 'vehicles',
    loadChildren: () =>
      import('./components/vehicles/vehicles.module').then(m=>m.VehiclesModule)
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./components/locations/locations.module').then(m=>m.LocationsModule)
  },
  {
    path: 'species',
    loadChildren: () =>
      import('./components/species/species.module').then(m=>m.SpeciesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
