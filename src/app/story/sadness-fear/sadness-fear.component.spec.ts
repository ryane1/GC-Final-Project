import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SadnessFearComponent } from './sadness-fear.component';

describe('SadnessFearComponent', () => {
  let component: SadnessFearComponent;
  let fixture: ComponentFixture<SadnessFearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadnessFearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SadnessFearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
