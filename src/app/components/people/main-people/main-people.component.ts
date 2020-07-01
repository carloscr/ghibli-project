import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/People';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-main-people',
  templateUrl: './main-people.component.html',
  styleUrls: ['./main-people.component.css']
})
export class MainPeopleComponent implements OnInit {

  peopleList: Array<People> = new Array<People>();
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.findAll().subscribe(r=>this.peopleList = r, e=>console.log(e));
  }

  findByFilters($event: People) {
    this.peopleService.findByFilter($event).subscribe(r=>this.peopleList = r, e=>console.log(e));
  }

}
