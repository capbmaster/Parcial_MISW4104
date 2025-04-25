import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Plant } from '../../model/plant.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl:string = environment.urlBase;

  constructor() { }

  public getListPlants():Observable<Plant[]>{
    return this.httpClient.get<Plant[]>(this.baseUrl)
  }
}
