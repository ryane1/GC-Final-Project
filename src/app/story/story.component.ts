import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.css"]
})
export class StoryComponent implements OnInit {
  showAngerDisgust: boolean = false;
  showSadnessFear: boolean = false;
  showJoySurprise: boolean = false;
  emotions:any;
  constructor(private apiService: ApiService,private router:Router) {}

  ngOnInit() {}

  analyzeUserData(form) {
    this.apiService
      .getEmotionAnalysis(form.value.textInput)
      .subscribe(response => {this.emotions=response
        console.log(form.value.textInput);
        console.log(response);
        if(this.emotions.emotions_detected[0]=="joy" || this.emotions.emotions_detected[0] == "surprise"){
          this.showJoySurprise = true;
          this.router.navigate(["/joy"]);
        }else if(this.emotions.emotions_detected[0] == "anger" || this.emotions.emotions_detected[0] == "disgust"){
          this.showAngerDisgust = true;
          this.router.navigate(["/anger"]);
        }else if(this.emotions.emotions_detected[0] == "sadness" || this.emotions.emotions_detected[0] == "fear"){
          this.showSadnessFear = true;
          this.router.navigate(["/sad"]);
        }else{
          this.showJoySurprise = true;
          this.router.navigate(["/joy"]);
        }
  });
  }
}
