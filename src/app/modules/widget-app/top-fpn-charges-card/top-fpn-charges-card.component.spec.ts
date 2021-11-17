import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFpnChargesCardComponent } from './top-fpn-charges-card.component';

describe('TopFpnChargesCardComponent', () => {
  let component: TopFpnChargesCardComponent;
  let fixture: ComponentFixture<TopFpnChargesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFpnChargesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFpnChargesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
