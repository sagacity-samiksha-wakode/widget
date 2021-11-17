import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPieChartComponent } from './e-pie-chart.component';

describe('EPieChartComponent', () => {
  let component: EPieChartComponent;
  let fixture: ComponentFixture<EPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
