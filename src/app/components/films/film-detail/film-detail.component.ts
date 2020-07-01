import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  film: Film = new Film();
  constructor(private filmsService: FilmsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get("id");
    this.filmsService.findById(id).subscribe(r=>this.film=r, e=>console.log(e));
  }
}
