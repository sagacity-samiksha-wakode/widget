import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfficiencyFilterComponent } from './efficiency-filter.component';

describe('EfficiencyFilterComponent', () => {
  let component: EfficiencyFilterComponent;
  let fixture: ComponentFixture<EfficiencyFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfficiencyFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfficiencyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
