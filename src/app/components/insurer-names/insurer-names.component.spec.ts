import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurerNamesComponent } from './insurer-names.component';

describe('InsurerNamesComponent', () => {
  let component: InsurerNamesComponent;
  let fixture: ComponentFixture<InsurerNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurerNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurerNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
