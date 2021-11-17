import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpnReceivedTypeCardComponent } from './fpn-received-type-card.component';

describe('FpnReceivedTypeCardComponent', () => {
  let component: FpnReceivedTypeCardComponent;
  let fixture: ComponentFixture<FpnReceivedTypeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpnReceivedTypeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpnReceivedTypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
