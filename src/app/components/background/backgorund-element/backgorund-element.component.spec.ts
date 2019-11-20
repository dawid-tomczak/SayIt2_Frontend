import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgorundElementComponent } from './backgorund-element.component';

describe('BackgorundElementComponent', () => {
  let component: BackgorundElementComponent;
  let fixture: ComponentFixture<BackgorundElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgorundElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgorundElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
