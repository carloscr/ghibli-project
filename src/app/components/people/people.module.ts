import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { MainPeopleComponent } from './main-people/main-people.component';
import { PeopleCardComponent } from './main-people/people-card/people-card.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { FiltersPeopleComponent } from './main-people/filters-people/filters-people.component';
import { FormsModule } from '@angular/forms';
import { FilmsModule } from '../films/films.module';

@NgModule({
  declarations: [MainPeopleComponent, PeopleCardComponent, PeopleDetailComponent, FiltersPeopleComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    FormsModule,
    FilmsModule
  ],
  exports: [PeopleCardComponent]
})
export class PeopleModule { }
