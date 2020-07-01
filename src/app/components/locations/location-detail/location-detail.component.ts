import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Location } from 'src/app/models/Location';
import { LocationsService } from 'src/app/services/locations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit, OnDestroy {

  location: Location = new Location();
  @ViewChild('closeResidentModal',{static: false}) public closeResidentModal: ElementRef;
  @ViewChild('closeFilmModal',{static: false}) public closeFilmModal: ElementRef;
  constructor(private locationsService: LocationsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get("id");
    this.locationsService.findById(id).subscribe(r=>this.location=r, e=>console.log(e));
  }

  ngOnDestroy(): void {
    if(this.closeResidentModal) this.closeResidentModal.nativeElement.click();
    if(this.closeFilmModal) this.closeFilmModal.nativeElement.click();
  }

}
