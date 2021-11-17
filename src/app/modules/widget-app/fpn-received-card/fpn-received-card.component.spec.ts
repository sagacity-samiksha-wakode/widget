import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpnReceivedCardComponent } from './fpn-received-card.component';

describe('FpnReceivedCardComponent', () => {
  let component: FpnReceivedCardComponent;
  let fixture: ComponentFixture<FpnReceivedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpnReceivedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpnReceivedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
