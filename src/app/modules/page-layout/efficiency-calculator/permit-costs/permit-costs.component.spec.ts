import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitCostsComponent } from './permit-costs.component';

describe('PermitCostsComponent', () => {
  let component: PermitCostsComponent;
  let fixture: ComponentFixture<PermitCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermitCostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
