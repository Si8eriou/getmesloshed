import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileAccountComponent } from './edit-profile-account.component';

describe('EditProfileAccountComponent', () => {
  let component: EditProfileAccountComponent;
  let fixture: ComponentFixture<EditProfileAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
