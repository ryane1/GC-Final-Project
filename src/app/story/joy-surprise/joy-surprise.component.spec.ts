import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JoySurpriseComponent } from "./joy-surprise.component";

describe("JoySupriseComponent", () => {
  let component: JoySurpriseComponent;
  let fixture: ComponentFixture<JoySurpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JoySurpriseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoySurpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
