import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserComponentComponent } from './register-user-component.component';

describe('RegisterUserComponentComponent', () => {
  let component: RegisterUserComponentComponent;
  let fixture: ComponentFixture<RegisterUserComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterUserComponentComponent]
    });
    fixture = TestBed.createComponent(RegisterUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
