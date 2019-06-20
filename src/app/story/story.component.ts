import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.css"]
})
export class StoryComponent implements OnInit {
  showAngerDisgust: boolean = true;
  showSadnessFear: boolean = true;
  showJoySurprise: boolean = true;
  loading: boolean = false;
  show: boolean = true;
  maxLength: number = 100;
  charactersLeft: any = this.maxLength;
  characterAlert: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  analyzeUserData(form) {
    this.loading = !this.loading;
    this.show = !this.show;
    this.apiService
      .getEmotionAnalysis(form.value.textInput)
      .subscribe(response => {
        console.log(form.value.textInput);
        console.log(response);
        // if (response.emotions_detected[0] == "joy") {
        //   this.showJoySurprise = true;
        // } else if (response.emotions_detected[0] == "surpise") {
        //   this.showJoySurprise = true;
        // } else if (response.emotions_detected[0] == "anger") {
        //   this.showAngerDisgust = true;
        // } else if (response.emotions_detected[0] == "disgust") {
        //   this.showAngerDisgust = true;
        // } else if (response.emotions_detected[0] == "sadness") {
        //   this.showSadnessFear = true;
        // } else if (response.emotions_detected[0] == "fear") {
        //   this.showSadnessFear = true;
        // } else {
        //   this.showJoySurprise = true;
        // }
  });
  }
  count(msg) {
    if (this.maxLength>=msg.length) {
      this.charactersLeft=this.maxLength-msg.length;
      this.characterAlert = `${this.charactersLeft} character(s) left`;
    }
    else {
      this.charactersLeft=Math.abs(this.maxLength-msg.length);
      this.characterAlert = `You are ${this.charactersLeft} character(s) over the limit`;
    }
  }
}
