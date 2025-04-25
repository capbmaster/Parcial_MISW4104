import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlantsComponent } from './components/list-plants/list-plants.component';
import { provideHttpClient } from '@angular/common/http';

import { AlertModule } from 'ngx-bootstrap/alert';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';


@NgModule({
  declarations: [
    ListPlantsComponent
  ],
  imports: [
    CommonModule,
    AlertModule,
    ProgressbarModule
  ],
  exports:[
    ListPlantsComponent
  ],
  providers:[provideHttpClient()]
})
export class PlantModule { }
