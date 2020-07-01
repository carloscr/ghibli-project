import { Component, OnInit, Input } from '@angular/core';
import { Location } from 'src/app/models/Location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent implements OnInit {

  @Input() location: Location = new Location();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDetail() {
    this.router.navigate([`locations/${this.location.id}`]);
  }

}
