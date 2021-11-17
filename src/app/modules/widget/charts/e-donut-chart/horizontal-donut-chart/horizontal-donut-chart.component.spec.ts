import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalDonutChartComponent } from './horizontal-donut-chart.component';

describe('HorizontalDonutChartComponent', () => {
  let component: HorizontalDonutChartComponent;
  let fixture: ComponentFixture<HorizontalDonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalDonutChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
