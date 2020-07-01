import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { MainSpeciesComponent } from './main-species/main-species.component';
import { SpecieCardComponent } from './main-species/specie-card/specie-card.component';
import { SpecieDetailComponent } from './specie-detail/specie-detail.component';
import { FilmsModule } from '../films/films.module';

@NgModule({
  declarations: [MainSpeciesComponent, SpecieCardComponent, SpecieDetailComponent],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    FilmsModule
  ]
})
export class SpeciesModule { }
