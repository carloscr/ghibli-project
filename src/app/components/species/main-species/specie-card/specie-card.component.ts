import { Component, OnInit, Input } from '@angular/core';
import { Specie } from 'src/app/models/Specie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specie-card',
  templateUrl: './specie-card.component.html',
  styleUrls: ['./specie-card.component.css']
})
export class SpecieCardComponent implements OnInit {

  @Input() specie: Specie = new Specie();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDetail() {
    this.router.navigate([`species/${this.specie.id}`]);
  }
}
