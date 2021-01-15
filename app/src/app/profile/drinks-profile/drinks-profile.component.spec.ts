import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksProfileComponent } from './drinks-profile.component';

describe('DrinksProfileComponent', () => {
  let component: DrinksProfileComponent;
  let fixture: ComponentFixture<DrinksProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
