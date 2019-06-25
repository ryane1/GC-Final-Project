import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-joy-surprise",
  templateUrl: "./joy-surprise.component.html",
  styleUrls: ["./joy-surprise.component.css"]
})
export class JoySurpriseComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  audioPart2() {
    let audio = new Audio();
    audio.src = "../assets/sounds/cardriving.wav";
    audio.play();
  }
  audioPart3() {
    let audio = new Audio();
    audio.src = "../assets/sounds/bark.mp3";
    audio.play();
  }
  audioPart5() {
    let audio = new Audio();
    audio.src = "../assets/sounds/gong.wav";
    audio.play();
  }
  audioPart8() {
    let audio = new Audio();
    audio.src = "../assets/sounds/camera.wav";
    audio.play();
  }
  audioPart9() {
    let audio = new Audio();
    audio.src = "../assets/sounds/phonering.mp3";
    audio.play();
  }
}
