import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkIngredientListComponent } from './drink-ingredient-list.component';

describe('DrinkIngredientListComponent', () => {
  let component: DrinkIngredientListComponent;
  let fixture: ComponentFixture<DrinkIngredientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkIngredientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkIngredientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
