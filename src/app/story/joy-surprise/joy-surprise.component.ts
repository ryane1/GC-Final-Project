import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joy-surprise',
  templateUrl: './joy-surprise.component.html',
  styleUrls: ['./joy-surprise.component.css']
})
export class JoySurpriseComponent implements OnInit {

  
  constructor() { }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  ngOnInit() {
  }
playAudio(){
    let audio = new Audio();
    audio.src = "../assets/images/phonering.mp3";
    audio.load();
    audio.play();
  }
  playAudio2(){
    let audio = new Audio();
    audio.src = "../assets/images/Car Engine Revving-SoundBible.com-296716119.mp3";
    audio.load();
    audio.play();
  }
}
