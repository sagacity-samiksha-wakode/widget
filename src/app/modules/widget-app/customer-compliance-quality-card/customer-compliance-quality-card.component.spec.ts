import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComplianceQualityCardComponent } from './customer-compliance-quality-card.component';

describe('CustomerComplianceQualityCardComponent', () => {
  let component: CustomerComplianceQualityCardComponent;
  let fixture: ComponentFixture<CustomerComplianceQualityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerComplianceQualityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComplianceQualityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
