import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCostCardComponent } from './total-cost-card.component';

describe('TotalCostCardComponent', () => {
  let component: TotalCostCardComponent;
  let fixture: ComponentFixture<TotalCostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCostCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
