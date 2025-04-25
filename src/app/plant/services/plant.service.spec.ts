import {TestBed} from '@angular/core/testing';

import {PlantService} from './plant.service';


import {mockPlants} from '../../../assets/mock/plants.mock';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';


describe('PlantService', () => {
  let service: PlantService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers:[PlantService,{ provide:HttpClient, useValue:httpClientSpy }]
    });
    service = TestBed.inject(PlantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the list of plants', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(mockPlants));

    service.getListPlants().subscribe({
      next: (plants) => {
        expect(plants.length).toBe(3);
        expect(plants).withContext('expected plants').toEqual(mockPlants);
        done();
      },
      error:done.fail
    });

    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
