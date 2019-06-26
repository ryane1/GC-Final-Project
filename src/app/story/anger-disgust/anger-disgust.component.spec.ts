import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AngerDisgustComponent } from "./anger-disgust.component";

describe("AngerDisgustComponent", () => {
  let component: AngerDisgustComponent;
  let fixture: ComponentFixture<AngerDisgustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AngerDisgustComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngerDisgustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
