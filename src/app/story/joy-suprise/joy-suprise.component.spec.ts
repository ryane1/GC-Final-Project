import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoySupriseComponent } from './joy-suprise.component';

describe('JoySupriseComponent', () => {
  let component: JoySupriseComponent;
  let fixture: ComponentFixture<JoySupriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoySupriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoySupriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
