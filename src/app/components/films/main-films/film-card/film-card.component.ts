import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/models/Film';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  @Input() film: Film = new Film();
  @Input() path: string;

  constructor(private router: Router, private filmsService: FilmsService) { }

  ngOnInit() {
    if(!this.film.id && this.path) {
      let parts = this.path.split('/');
      let id = parts[parts.length-1];
      this.filmsService.findById(id).subscribe(r=>this.film=r, e=>console.log(e));
    }
  }

  showDetail() {
    this.router.navigate([`/films/${this.film.id}`]);
  }

}
