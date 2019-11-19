import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageHeroComponent } from './main-page-hero.component';

describe('MainPageHeroComponent', () => {
  let component: MainPageHeroComponent;
  let fixture: ComponentFixture<MainPageHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
