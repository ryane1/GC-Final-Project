import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sadness-fear",
  templateUrl: "./sadness-fear.component.html",
  styleUrls: ["./sadness-fear.component.css"]
})
export class SadnessFearComponent implements OnInit {
  constructor() {}
  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  ngOnInit() {}

playAudio(){
  let audio = new Audio();
  audio.src = "../../../assets/sounds/Grasshopper.mp3";
  audio.load();
  audio.play();
}
playAudio2(){
  let audio = new Audio();
  audio.src="../../../assets/sounds/Thunderstorm.mp3";
  audio.load();
  audio.play();
}
playAudio3(){
  let audio = new Audio();
  audio.src="../../../assets/sounds/Bicycle Bell Ringing.mp3";
  audio.load();
  audio.play();
}
playAudio4(){
  let audio = new Audio();
  audio.src="../../../assets/sounds/Squish.mp3";
  audio.load();
  audio.play();
}
playAudio5(){
  let audio = new Audio();
  audio.src="../../../assets/sounds/Door Close.mp3";
  audio.load();
  audio.play();
}
}
