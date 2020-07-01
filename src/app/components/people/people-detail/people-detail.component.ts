import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { People } from 'src/app/models/People';
import { PeopleService } from 'src/app/services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit, OnDestroy {

  people: People = new People();
  @ViewChild('closeModalPeople',{static: false}) public closeModalPeople: ElementRef;
  constructor(private peopleService: PeopleService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get("id");
    this.peopleService.findById(id).subscribe(r=>this.people=r, e=>console.log(e));
  }

  ngOnDestroy(): void {
    if(this.closeModalPeople) this.closeModalPeople.nativeElement.click();
  }

}
