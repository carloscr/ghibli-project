import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainVehicleComponent } from './main-vehicle/main-vehicle.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

const routes: Routes = [{path: '', component: MainVehicleComponent},{path:'vehicles/:id',component:VehicleDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
