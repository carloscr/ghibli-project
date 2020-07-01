import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People } from '../models/People';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }
  private api_name: string = 'people';

  // Servicio 7
  findAll(): Observable<Array<People>> {
    return this.http.get<Array<People>>(`${environment.API_URL}/${this.api_name}`);
  }

  // Servicio 8
  findById(id: string): Observable<People> {
    return this.http.get<People>(`${environment.API_URL}/${this.api_name}/${id}`);
  }

  // Servicio 9
  findByFilter(filters: People): Observable<Array<People>> {
    let filtersString: string = '?limit=249';
    if(!filters || (!filters.name && !filters.gender)) return this.findAll();
    if(filters.gender) {
      filtersString = filtersString.concat(`&gender=${filters.gender}`);
    }
    if(filters.name) {
      filtersString = filtersString.concat(`&name=${filters.name}`);
    }
    return this.http.get<Array<People>>(`${environment.API_URL}/${this.api_name}${filtersString}`);
  }
}
