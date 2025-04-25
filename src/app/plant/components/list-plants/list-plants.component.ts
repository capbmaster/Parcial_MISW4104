import { Component, computed, inject, linkedSignal, OnInit, resource, signal } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { lastValueFrom } from 'rxjs';
import { Plant } from '../../../model/plant.model';

@Component({
  selector: 'app-list-plants',
  standalone: false,
  templateUrl: './list-plants.component.html',
  styleUrl: './list-plants.component.css',
})
export class ListPlantsComponent{
  private readonly plantService = inject(PlantService);
  public plants = computed<Plant[]>(()=>this.plantsQuery.value()??[]);
  public error = computed<any>(()=>this.plantsQuery.error());
  public loading = computed<boolean>(()=>this.plantsQuery.isLoading());

  public plantsQuery = resource({
    loader:()=>lastValueFrom(this.plantService.getListPlants())
  })
}
