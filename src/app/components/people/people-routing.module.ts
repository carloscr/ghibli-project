import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPeopleComponent } from './main-people/main-people.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

const routes: Routes = [{path: '', component: MainPeopleComponent},{path:'people/:id',component: PeopleDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
