import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkInstructionsComponent } from './drink-instructions.component';

describe('DrinkInstructionsComponent', () => {
  let component: DrinkInstructionsComponent;
  let fixture: ComponentFixture<DrinkInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
