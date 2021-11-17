import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentOverviewComponent } from './managment-overview.component';

describe('ManagmentOverviewComponent', () => {
  let component: ManagmentOverviewComponent;
  let fixture: ComponentFixture<ManagmentOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagmentOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
