import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheAvanceeComponent } from './recherche-avancee.component';

describe('RechercheAvanceeComponent', () => {
  let component: RechercheAvanceeComponent;
  let fixture: ComponentFixture<RechercheAvanceeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheAvanceeComponent]
    });
    fixture = TestBed.createComponent(RechercheAvanceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
