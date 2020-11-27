import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkGlassComponent } from './drink-glass.component';

describe('DrinkGlassComponent', () => {
  let component: DrinkGlassComponent;
  let fixture: ComponentFixture<DrinkGlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkGlassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
