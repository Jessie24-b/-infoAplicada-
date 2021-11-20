import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudTransaccionComponent } from './solicitud-transaccion.component';

describe('SolicitudTransaccionComponent', () => {
  let component: SolicitudTransaccionComponent;
  let fixture: ComponentFixture<SolicitudTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
