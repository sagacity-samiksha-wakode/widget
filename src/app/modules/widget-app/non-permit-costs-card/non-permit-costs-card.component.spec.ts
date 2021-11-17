import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonPermitCostsCardComponent } from './non-permit-costs-card.component';

describe('NonPermitCostsCardComponent', () => {
  let component: NonPermitCostsCardComponent;
  let fixture: ComponentFixture<NonPermitCostsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonPermitCostsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonPermitCostsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
