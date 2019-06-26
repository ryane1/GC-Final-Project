import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-anger-disgust",
  templateUrl: "./anger-disgust.component.html",
  styleUrls: ["./anger-disgust.component.css"]
})
export class AngerDisgustComponent implements OnInit {
  //initializing this.playing as true
  playing: boolean = true;
  audio = new Audio();

  constructor(private router: Router) {}

  ngOnInit() {}
  //click event for arrow scroll
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  //methods for playing sound on click, and to pause sound
  audioPart1() {
    if (this.playing) {
      this.playing = !this.playing;
      this.audio.src = "../assets/sounds/alarm.mp3";
      this.audio.load();
      this.audio.play();
    } else {
      this.audio.pause();
      this.playing = !this.playing;
    }
  }
  audioPart4() {
    if (this.playing) {
      this.playing = !this.playing;
      this.audio.src = "../assets/sounds/parrot.mp3";
      this.audio.load();
      this.audio.play();
    } else {
      this.audio.pause();
      this.playing = !this.playing;
    }
  }
  audioPart8() {
    let audio = new Audio();
    audio.src = "../assets/sounds/glass.mp3";
    audio.play();
  }
  audioPart9() {
    if (this.playing) {
      this.playing = !this.playing;
      this.audio.src = "../assets/sounds/metronome.mp3";
      this.audio.load();
      this.audio.play();
    } else {
      this.audio.pause();
      this.playing = !this.playing;
    }
  }
  backToMain() {
    this.router.navigate(["/story"]);
  }
}
