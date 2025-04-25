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
  public totalPlantType = computed<{into:number; external:number}>(()=>{
    const into = this.plantsQuery.value()?.filter(p=>p.tipo==='Interior').length ?? 0
    const external = this.plantsQuery.value()?.filter(p=>p.tipo==='Exterior').length ?? 0

    return {
      into,
      external
    }
  })

  public plantsQuery = resource({
    loader:()=>lastValueFrom(this.plantService.getListPlants())
  })
}
