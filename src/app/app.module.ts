import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPlantsComponent } from './plant/components/list-plants/list-plants.component';
import { PlantModule } from './plant/plant.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PlantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
