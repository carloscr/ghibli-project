import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFilmsComponent } from './main-films/main-films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';

const routes: Routes = [
  {path: '', component: MainFilmsComponent}, {path: 'films/:id', component: FilmDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
