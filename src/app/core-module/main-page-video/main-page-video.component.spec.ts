import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageVideoComponent } from './main-page-video.component';

describe('MainPageVideoComponent', () => {
  let component: MainPageVideoComponent;
  let fixture: ComponentFixture<MainPageVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
