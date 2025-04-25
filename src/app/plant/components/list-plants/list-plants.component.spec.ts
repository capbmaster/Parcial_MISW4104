import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlantsComponent } from './list-plants.component';
import {PlantService} from '../../services/plant.service';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {By} from '@angular/platform-browser';
import {of, throwError} from 'rxjs';
import {mockPlants} from '../../../../assets/mock/plants.mock';
import {AlertModule} from 'ngx-bootstrap/alert';

describe('ListPlantsComponent', () => {
  let component: ListPlantsComponent;
  let fixture: ComponentFixture<ListPlantsComponent>;
  let plantsServiceMock: jasmine.SpyObj<PlantService>;

  beforeEach(async () => {
    plantsServiceMock= jasmine.createSpyObj('PlantService', ['getListPlants']);
    plantsServiceMock.getListPlants.and.returnValue(of(mockPlants));

    await TestBed.configureTestingModule({
      imports: [CommonModule, AlertModule],
      declarations: [ListPlantsComponent],
      providers: [provideHttpClient(),{provide:PlantService, useValue:plantsServiceMock}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render exactly 3 plant rows', async () => {
    await fixture.whenStable();
    fixture.detectChanges();

    const plantRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(plantRows.length).toBe(3);
    expect(plantRows[0].nativeElement.textContent).toContain(mockPlants[0].nombre_comun);
  });

  it('should render totals types', async () => {
    await fixture.whenStable();
    fixture.detectChanges();

    const totalTypesInto = mockPlants.filter(m=>m.tipo==='Interior').length;
    const totalTypesExt = mockPlants.filter(m=>m.tipo==='Exterior').length;


    const totalInterior = fixture.debugElement.query(By.css('#total_interior')).nativeElement.textContent;
    const totalExterior = fixture.debugElement.query(By.css('#total_exterior')).nativeElement.textContent;

    expect(totalInterior).toContain(`Total plantas de interior: ${totalTypesInto}`);
    expect(totalExterior).toContain(`Total plantas de exterior: ${totalTypesExt}`);
  });


  it('should show error message when service fails', async () => {
    plantsServiceMock.getListPlants.and.returnValue(throwError(() => new Error('Error')));

    fixture = TestBed.createComponent(ListPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    await fixture.whenStable();
    fixture.detectChanges();

    const alert = fixture.debugElement.query(By.css('alert'));
    expect(alert).toBeTruthy();
    expect(alert.nativeElement.textContent).toContain('Algo salió mal al cargar el listado');
  });
});
