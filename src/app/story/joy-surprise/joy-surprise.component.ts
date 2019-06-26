import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-joy-surprise",
  templateUrl: "./joy-surprise.component.html",
  styleUrls: ["./joy-surprise.component.css"]
})
export class JoySurpriseComponent implements OnInit {
  
  playing: boolean = true;
  audio = new Audio();

  constructor(private router:Router) {}

  ngOnInit() {}
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  audioPart2() {
    if (this.playing) {
      this.playing = !this.playing;
      this.audio.src = "../assets/sounds/cardriving.wav";
      this.audio.load();
      this.audio.play();
    } else {
      this.audio.pause();
      this.playing = !this.playing;
    }
  }
  audioPart3() {
    if (this.playing) {
      this.playing = !this.playing;
      this.audio.src = "../assets/sounds/bark.mp3";
      this.audio.load();
      this.audio.play();
    } else {
      this.audio.pause();
      this.playing = !this.playing;
    }
  }
  audioPart5() {
    let audio = new Audio();
    audio.src = "../assets/sounds/gong.wav";
    audio.play();
  }
  audioPart8() {
    if (this.playing) {
      this.playing = !this.playing;
      this.audio.src = "../assets/sounds/camera.wav";
      this.audio.load();
      this.audio.play();
    } else {
      this.audio.pause();
      this.playing = !this.playing;
    }
  }
  audioPart9() {
    if (this.playing) {
      this.playing = !this.playing;
      this.audio.src = "../assets/sounds/phonering.mp3";
      this.audio.load();
      this.audio.play();
    } else {
      this.audio.pause();
      this.playing = !this.playing;
    }
  }
  backToMain(){
    this.router.navigate(["/story"]);
  }
}
