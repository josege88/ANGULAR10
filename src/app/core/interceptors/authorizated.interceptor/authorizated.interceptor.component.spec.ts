import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Authorizated.InterceptorComponent } from './authorizated.interceptor.component';

describe('Authorizated.InterceptorComponent', () => {
  let component: Authorizated.InterceptorComponent;
  let fixture: ComponentFixture<Authorizated.InterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Authorizated.InterceptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Authorizated.InterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
