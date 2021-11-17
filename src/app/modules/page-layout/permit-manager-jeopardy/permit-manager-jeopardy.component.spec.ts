import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitManagerJeopardyComponent } from './permit-manager-jeopardy.component';

describe('PermitManagerJeopardyComponent', () => {
  let component: PermitManagerJeopardyComponent;
  let fixture: ComponentFixture<PermitManagerJeopardyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermitManagerJeopardyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitManagerJeopardyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
