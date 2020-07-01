import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { MainFilmsComponent } from './main-films/main-films.component';
import { FilmCardComponent } from './main-films/film-card/film-card.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FiltersFilmComponent } from './main-films/filters-film/filters-film.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainFilmsComponent, FilmCardComponent, FilmDetailComponent, FiltersFilmComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    FormsModule
  ],
  exports: [FilmCardComponent]
})
export class FilmsModule { }
