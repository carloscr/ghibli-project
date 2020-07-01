import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { MainVehicleComponent } from './main-vehicle/main-vehicle.component';
import { VehicleCardComponent } from './main-vehicle/vehicle-card/vehicle-card.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { PeopleModule } from '../people/people.module';

@NgModule({
  declarations: [MainVehicleComponent, VehicleCardComponent, VehicleDetailComponent],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    PeopleModule
  ]
})
export class VehiclesModule { }
