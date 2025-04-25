import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlantsComponent } from './list-plants.component';

describe('ListPlantsComponent', () => {
  let component: ListPlantsComponent;
  let fixture: ComponentFixture<ListPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPlantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
