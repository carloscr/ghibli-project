import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/Film';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-main-films',
  templateUrl: './main-films.component.html',
  styleUrls: ['./main-films.component.css']
})
export class MainFilmsComponent implements OnInit {

  filmsList: Array<Film> = new Array<Film>();
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.filmsService.findAll().subscribe(r=>this.filmsList = r, e=>console.log(e));
  }

  public findByFilters($event: Film): void {
    this.filmsService.findByFilter($event).subscribe(r=>this.filmsList = r, e=>console.log(e));
  }
}
