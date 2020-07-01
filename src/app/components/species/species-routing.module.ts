import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSpeciesComponent } from './main-species/main-species.component';
import { SpecieDetailComponent } from './specie-detail/specie-detail.component';

const routes: Routes = [{path: '', component: MainSpeciesComponent},{path:'species/:id',component: SpecieDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesRoutingModule { }
