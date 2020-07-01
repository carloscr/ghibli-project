import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/models/People';
import { Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css']
})
export class PeopleCardComponent implements OnInit { 

  @Input() people: People = new People();
  @Input() path: string;
  constructor(private router: Router, private peopleService: PeopleService) { }

  ngOnInit() {
    if(!this.people.id && this.path) {
      let parts = this.path.split('/');
      let id = parts[parts.length-1];
      this.peopleService.findById(id).subscribe(r=>this.people=r, e=>console.log(e));
    }
  }

  public showDetail(): void {
    this.router.navigate([`people/${this.people.id}`]);
  }

}
