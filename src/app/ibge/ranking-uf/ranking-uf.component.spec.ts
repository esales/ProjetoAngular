import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingUFComponent } from './ranking-uf.component';

describe('RankingUFComponent', () => {
  let component: RankingUFComponent;
  let fixture: ComponentFixture<RankingUFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingUFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingUFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
