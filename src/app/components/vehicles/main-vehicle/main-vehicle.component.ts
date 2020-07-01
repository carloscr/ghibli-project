import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-main-vehicle',
  templateUrl: './main-vehicle.component.html',
  styleUrls: ['./main-vehicle.component.css']
})
export class MainVehicleComponent implements OnInit {

  vehiclesList: Array<Vehicle> = new Array<Vehicle>();
  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.vehiclesService.findAll().subscribe(r=>this.vehiclesList=r, e=>console.log(e));
  }

}
