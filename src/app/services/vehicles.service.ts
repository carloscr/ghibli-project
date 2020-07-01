import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }
  private api_name: string = 'vehicles';

  // Servicio 12
  public findAll(): Observable<Array<Vehicle>> {
    return this.http.get<Array<Vehicle>>(`${environment.API_URL}/${this.api_name}`);
  }

  // Servicio 13
  public findById(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${environment.API_URL}/${this.api_name}/${id}`);
  }
}
