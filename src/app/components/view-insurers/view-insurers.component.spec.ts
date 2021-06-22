import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInsurersComponent } from './view-insurers.component';

describe('ViewInsurersComponent', () => {
  let component: ViewInsurersComponent;
  let fixture: ComponentFixture<ViewInsurersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInsurersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInsurersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
