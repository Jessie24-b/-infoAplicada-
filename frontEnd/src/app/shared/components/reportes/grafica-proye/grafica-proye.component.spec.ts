import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaProyeComponent } from './grafica-proye.component';

describe('GraficaProyeComponent', () => {
  let component: GraficaProyeComponent;
  let fixture: ComponentFixture<GraficaProyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaProyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaProyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
