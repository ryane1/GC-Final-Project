import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-sadness-fear",
  templateUrl: "./sadness-fear.component.html",
  styleUrls: ["./sadness-fear.component.css"]
})
export class SadnessFearComponent implements OnInit {
  
  playing: boolean = true;
  audio = new Audio();

  constructor(private router:Router) {}

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  ngOnInit() {}

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
  backToMain(){
    this.router.navigate(["/story"]);
  }
}
