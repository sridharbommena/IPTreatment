import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptreatmentPackagesComponent } from './iptreatment-packages.component';

describe('IptreatmentPackagesComponent', () => {
  let component: IptreatmentPackagesComponent;
  let fixture: ComponentFixture<IptreatmentPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IptreatmentPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IptreatmentPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
