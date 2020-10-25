import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalServiceLoginComponent } from './external-service-login.component';

describe('ExternalServiceLoginComponent', () => {
  let component: ExternalServiceLoginComponent;
  let fixture: ComponentFixture<ExternalServiceLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalServiceLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalServiceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
