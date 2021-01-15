import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkNameComponent } from './drink-name.component';

describe('DrinkNameComponent', () => {
  let component: DrinkNameComponent;
  let fixture: ComponentFixture<DrinkNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
