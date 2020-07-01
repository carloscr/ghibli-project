import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from '../models/Location';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }
  private api_name: string = 'locations';

  // Servicio 4
  public findAll(): Observable<Array<Location>> {
    return this.http.get<Array<Location>>(`${environment.API_URL}/${this.api_name}`);
  }

  // Servicio 5
  public findById(id: string): Observable<Location> {
    return this.http.get<Location>(`${environment.API_URL}/${this.api_name}/${id}`);
  }

  // Servicio 6
  public findByFilter(filters: Location): Observable<Array<Location>> {
    let filtersString: string = '?limit=249';
    if(!filters || (!filters.name && !filters.climate)) return this.findAll();
    if(filters.climate) {
      filtersString = filtersString.concat(`&climate=${filters.climate}`);
    }
    if(filters.name) {
      filtersString = filtersString.concat(`&name=${filters.name}`);
    }
    return this.http.get<Array<Location>>(`${environment.API_URL}/${this.api_name}${filtersString}`);
  }
}
