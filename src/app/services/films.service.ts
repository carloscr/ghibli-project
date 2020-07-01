import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../models/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }
  private api_name: string = 'films';

  // Servicio 1
  public findAll(): Observable<Array<Film>> {
    return this.http.get<Array<Film>>(`${environment.API_URL}/${this.api_name}`);
  }

  // Servicio 2
  public findById(id: string): Observable<Film> {
    return this.http.get<Film>(`${environment.API_URL}/${this.api_name}/${id}`);
  }

  // Servicio 3
  public findByFilter(filters: Film): Observable<Array<Film>> {
    let filtersString: string = '?limit=249';
    if(!filters || (!filters.title && !filters.director)) return this.findAll();
    if(filters.title) {
      filtersString = filtersString.concat(`&title=${filters.title}`);
    }
    if(filters.director) {
      filtersString = filtersString.concat(`&director=${filters.director}`);
    }
    return this.http.get<Array<Film>>(`${environment.API_URL}/${this.api_name}${filtersString}`);
  }

}
