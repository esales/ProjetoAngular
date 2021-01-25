import { TestBed } from '@angular/core/testing';

import { ConsultaIBGEService } from './consulta-ibge.service';

describe('ConsultaIBGEService', () => {
  let service: ConsultaIBGEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaIBGEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
