import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceIndicatorsCardComponent } from './performance-indicators-card.component';

describe('PerformanceIndicatorsCardComponent', () => {
  let component: PerformanceIndicatorsCardComponent;
  let fixture: ComponentFixture<PerformanceIndicatorsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceIndicatorsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceIndicatorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
