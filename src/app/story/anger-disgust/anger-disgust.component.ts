import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anger-disgust',
  templateUrl: './anger-disgust.component.html',
  styleUrls: ['./anger-disgust.component.css']
})
export class AngerDisgustComponent implements OnInit {

  playing: boolean = false;

  constructor() { }

  ngOnInit() {
    let clock = document.getElementById("clock");
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  // playClock() {
  //   this.playing = !this.playing;
  //   if (this.playing) {
  //     clock.play();
  //   } else {
  //     clock.pause();
  //   }
  // } 
}
