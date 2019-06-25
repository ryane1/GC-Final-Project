import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anger-disgust',
  templateUrl: './anger-disgust.component.html',
  styleUrls: ['./anger-disgust.component.css']
})
export class AngerDisgustComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  audioPart1() {
    let audio = new Audio();
    audio.src = "../assets/sounds/alarm.mp3";
    audio.play();
  }
  audioPart4() {
    let audio = new Audio();
    audio.src = "../assets/sounds/parrot.mp3";
    audio.play();
  }
  audioPart8() {
    let audio = new Audio();
    audio.src = "../assets/sounds/glass.mp3";
    audio.play();
  }
  audioPart9() {
    let audio = new Audio();
    audio.src = "../assets/sounds/metronome.mp3";
    audio.play();
  }
}
