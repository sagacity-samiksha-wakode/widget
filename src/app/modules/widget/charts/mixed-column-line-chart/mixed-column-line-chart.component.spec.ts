import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedColumnLineChartComponent } from './mixed-column-line-chart.component';

describe('MixedColumnLineChartComponent', () => {
  let component: MixedColumnLineChartComponent;
  let fixture: ComponentFixture<MixedColumnLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedColumnLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedColumnLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
