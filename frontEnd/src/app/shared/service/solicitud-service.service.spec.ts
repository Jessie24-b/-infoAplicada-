import { TestBed } from '@angular/core/testing';

import { SolicitudServicaService } from './solicitud-service.service';

describe('SolicitudServicaService', () => {
  let service: SolicitudServicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudServicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
