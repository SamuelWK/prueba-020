import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) {}

  getByFilter(filter: string){
    return this.http.get<any>(
      `${environment.url}/beers?page=1&per_page=10&beer_name=${filter}`
    );
  }

  getById(id: number){
    return this.http.get<any>(
      `${environment.url}/beers/${id}`
    );
  }
}

