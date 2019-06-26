import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sadness-fear",
  templateUrl: "./sadness-fear.component.html",
  styleUrls: ["./sadness-fear.component.css"]
})
export class SadnessFearComponent implements OnInit {
  //initializing this.playing as true
  playing: boolean = true;
  audio = new Audio();

  constructor() { }

  ngOnInit() { }
  //click event for arrow scroll
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  //methods for playing sound on click, and to pause sound
  audioPart2() {
    if (this.playing) {
      this.playing = !this.playing;
      this.audio.src = "../../../assets/sounds/Grasshopper.mp3";
      this.audio.load();
      this.audio.play();
    } else {
      this.audio.pause();
      this.playing = !this.playing;
    }
  }
  audioPart5() {
    if (this.playing) {
      this.playing = !this.playing;
      this.audio.src = "../../../assets/sounds/Thunderstorm.mp3";
      this.audio.load();
      this.audio.play();
    } else {
      this.audio.pause();
      this.playing = !this.playing;
    }
  }
  audioPart7() {
    let audio = new Audio();
    audio.src = "../../../assets/sounds/Bicycle Bell Ringing.mp3";
    audio.load();
    audio.play();
  }
  audioPart8() {
    let audio = new Audio();
    audio.src = "../../../assets/sounds/Squish.mp3";
    audio.load();
    audio.play();
  }
  audioPart9() {
    let audio = new Audio();
    audio.src = "../../../assets/sounds/Door Close.mp3";
    audio.load();
    audio.play();
  }
}
