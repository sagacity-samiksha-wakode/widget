import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidableCostTableCardComponent } from './avoidable-cost-table-card.component';

describe('AvoidableCostTableCardComponent', () => {
  let component: AvoidableCostTableCardComponent;
  let fixture: ComponentFixture<AvoidableCostTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvoidableCostTableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvoidableCostTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
