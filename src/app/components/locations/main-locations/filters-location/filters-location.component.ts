import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from 'src/app/models/Location';

@Component({
  selector: 'app-filters-location',
  templateUrl: './filters-location.component.html',
  styleUrls: ['./filters-location.component.css']
})
export class FiltersLocationComponent implements OnInit {

  @Output() onChangeFilters = new EventEmitter<Location>();
  location: Location = new Location();
  constructor() { }

  ngOnInit() {
  }

  public changeFilters(): void {
    this.onChangeFilters.emit(this.location);
  }

}
