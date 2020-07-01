import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Specie } from 'src/app/models/Specie';
import { SpeciesService } from 'src/app/services/species.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specie-detail',
  templateUrl: './specie-detail.component.html',
  styleUrls: ['./specie-detail.component.css']
})
export class SpecieDetailComponent implements OnInit {

  specie: Specie = new Specie();
  @ViewChild('closeFilmModal',{static: false}) public closeFilmModal: ElementRef;
  constructor(private speciesService: SpeciesService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get("id");
    this.speciesService.findById(id).subscribe(r=>this.specie=r, e=>console.log(e));
  }

  ngOnDestroy(): void {
    if(this.closeFilmModal) this.closeFilmModal.nativeElement.click();
  }

}
