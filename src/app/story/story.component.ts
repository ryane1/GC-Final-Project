import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.css"]
})
export class StoryComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  analyzeUserData(form) {
    this.apiService.getEmotionAnalysis(form.value.textInput).subscribe(response => {
      console.log(form.value.textInput);
      console.log(response);
    });
  }
}
