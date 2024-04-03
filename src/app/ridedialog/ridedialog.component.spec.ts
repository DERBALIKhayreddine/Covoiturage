import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidedialogComponent } from './ridedialog.component';

describe('RidedialogComponent', () => {
  let component: RidedialogComponent;
  let fixture: ComponentFixture<RidedialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RidedialogComponent]
    });
    fixture = TestBed.createComponent(RidedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
