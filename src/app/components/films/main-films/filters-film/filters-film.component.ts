import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-filters-film',
  templateUrl: './filters-film.component.html',
  styleUrls: ['./filters-film.component.css']
})
export class FiltersFilmComponent implements OnInit {

  @Output() onChangeFilters = new EventEmitter<Film>();
  film: Film = new Film();
  constructor() { }

  ngOnInit() {
  }

  public changeFilters(): void {
    this.onChangeFilters.emit(this.film);
  }

}
