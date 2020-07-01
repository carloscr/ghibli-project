import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent implements OnInit {

  @Input() vehicle: Vehicle = new Vehicle();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public showDetail(): void {
    this.router.navigate([`vehicles/${this.vehicle.id}`]);
  }

}
