import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaIBGEComponent } from './consulta-ibge.component';

describe('ConsultaIBGEComponent', () => {
  let component: ConsultaIBGEComponent;
  let fixture: ComponentFixture<ConsultaIBGEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaIBGEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaIBGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
