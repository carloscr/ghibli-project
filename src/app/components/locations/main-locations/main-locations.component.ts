import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/Location';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-main-locations',
  templateUrl: './main-locations.component.html',
  styleUrls: ['./main-locations.component.css']
})
export class MainLocationsComponent implements OnInit {

  locationsList: Array<Location> = new Array<Location>();
  constructor(private locationsService: LocationsService) { }

  ngOnInit() {
    this.locationsService.findAll().subscribe(r=>this.locationsList = r, e=>console.log(e));
  }

  public findByFilters($event: Location): void {
    this.locationsService.findByFilter($event).subscribe(r=>this.locationsList = r, e=>console.log(e));
  }

}
