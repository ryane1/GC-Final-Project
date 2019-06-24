import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-joy-surprise",
  templateUrl: "./joy-surprise.component.html",
  styleUrls: ["./joy-surprise.component.css"]
})
export class JoySurpriseComponent implements OnInit {
  constructor() {}

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  ngOnInit() {}
}
