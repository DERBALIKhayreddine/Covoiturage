import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashbordComponent } from './user-dashbord.component';

describe('UserDashbordComponent', () => {
  let component: UserDashbordComponent;
  let fixture: ComponentFixture<UserDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDashbordComponent]
    });
    fixture = TestBed.createComponent(UserDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
