import { Component, OnInit } from '@angular/core';
import { Specie } from 'src/app/models/Specie';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-main-species',
  templateUrl: './main-species.component.html',
  styleUrls: ['./main-species.component.css']
})
export class MainSpeciesComponent implements OnInit {

  speciesList: Array<Specie> = new Array<Specie>();
  constructor(private speciesService: SpeciesService) { }

  ngOnInit() {
    this.speciesService.findAll().subscribe(r=>this.speciesList=r, e=>console.log(e));
  }

}
