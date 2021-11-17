import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalDonutChartComponent } from './vertical-donut-chart.component';

describe('VerticalDonutChartComponent', () => {
  let component: VerticalDonutChartComponent;
  let fixture: ComponentFixture<VerticalDonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalDonutChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
