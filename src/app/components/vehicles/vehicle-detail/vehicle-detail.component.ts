import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();
  @ViewChild('closePilotModal',{static: false}) public closePilotModal: ElementRef;
  constructor(private vehiclesService: VehiclesService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get("id");
    this.vehiclesService.findById(id).subscribe(r=>this.vehicle=r, e=>console.log(e));
  }
  
  ngOnDestroy(): void {
    if(this.closePilotModal) this.closePilotModal.nativeElement.click();
  }

}
