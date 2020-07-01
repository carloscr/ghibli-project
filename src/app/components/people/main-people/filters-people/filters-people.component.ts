import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { People } from 'src/app/models/People';

@Component({
  selector: 'app-filters-people',
  templateUrl: './filters-people.component.html',
  styleUrls: ['./filters-people.component.css']
})
export class FiltersPeopleComponent implements OnInit {

  @Output() onChangeFilters = new EventEmitter<People>();
  people: People = new People();
  constructor() { }

  ngOnInit() {
  }

  changeFilters() {
    this.onChangeFilters.emit(this.people);
  }

}
