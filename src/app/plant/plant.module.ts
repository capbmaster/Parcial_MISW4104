import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlantsComponent } from './components/list-plants/list-plants.component';



@NgModule({
  declarations: [
    ListPlantsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListPlantsComponent
  ]
})
export class PlantModule { }
