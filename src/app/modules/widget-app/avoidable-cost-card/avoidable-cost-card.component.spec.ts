import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidableCostCardComponent } from './avoidable-cost-card.component';

describe('AvoidableCostCardComponent', () => {
  let component: AvoidableCostCardComponent;
  let fixture: ComponentFixture<AvoidableCostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvoidableCostCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvoidableCostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
