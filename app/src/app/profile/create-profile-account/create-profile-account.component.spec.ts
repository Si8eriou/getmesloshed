import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfileAccountComponent } from './create-profile-account.component';

describe('CreateProfileAccountComponent', () => {
  let component: CreateProfileAccountComponent;
  let fixture: ComponentFixture<CreateProfileAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfileAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfileAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
