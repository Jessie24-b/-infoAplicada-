import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaAvancesComponent } from './grafica-avances.component';

describe('GraficaAvancesComponent', () => {
  let component: GraficaAvancesComponent;
  let fixture: ComponentFixture<GraficaAvancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaAvancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaAvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
