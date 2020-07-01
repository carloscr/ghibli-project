import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Specie } from '../models/Specie';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }
  private api_name: string = 'species';

  // Servicio 10
  public findAll(): Observable<Array<Specie>> {
    return this.http.get<Array<Specie>>(`${environment.API_URL}/${this.api_name}`);
  }

  // Servicio 11
  public findById(id: string): Observable<Specie> {
    return this.http.get<Specie>(`${environment.API_URL}/${this.api_name}/${id}`);
  }
}
