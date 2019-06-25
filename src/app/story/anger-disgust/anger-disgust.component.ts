import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anger-disgust',
  templateUrl: './anger-disgust.component.html',
  styleUrls: ['./anger-disgust.component.css']
})
export class AngerDisgustComponent implements OnInit {

  playing: boolean = true;
  audio = new Audio();

  constructor() { }

  ngOnInit() {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
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
}
