import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedPenaltyNoticesComponent } from './fixed-penalty-notices.component';

describe('FixedPenaltyNoticesComponent', () => {
  let component: FixedPenaltyNoticesComponent;
  let fixture: ComponentFixture<FixedPenaltyNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedPenaltyNoticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedPenaltyNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
