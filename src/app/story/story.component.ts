import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.css"]
})
export class StoryComponent implements OnInit {
  showAngerDisgust: boolean = false;
  showSadnessFear: boolean = true;
  showJoySurprise: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  analyzeUserData(form) {
    this.apiService
      .getEmotionAnalysis(form.value.textInput)
      .subscribe(response => {
        console.log(form.value.textInput);
        console.log(response);
      
  //       if (response.emotions_detected[0] == "joy") {
  //         this.showJoySurprise = true;
  //       } else if (response.emotions_detected[0] == "surpise") {
  //         this.showJoySurprise = true;
  //       } else if (response.emotions_detected[0] == "anger") {
  //         this.showAngerDisgust = true;
  //       } else if (response.emotions_detected[0] == "disgust") {
  //         this.showAngerDisgust = true;
  //       } else if (response.emotions_detected[0] == "sadness") {
  //         this.showSadnessFear = true;
  //       } else if (response.emotions_detected[0] == "fear") {
  //         this.showSadnessFear = true;
  //       } else {
  //         this.showJoySurprise = true;
  //       }
  });
  }
}
