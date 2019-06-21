import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.css"]
})
export class StoryComponent implements OnInit {
  //boolean to hide the loading icon until the form is submitted
  loading: boolean = false;
  //boolean to hide the textarea and button when the form is submitted
  show: boolean = true;
  //initializes character counter's max length, how many characters are left, and the alert that the user will see
  maxLength: number = 100;
  charactersLeft: any = this.maxLength;
  characterAlert: string = '';
  //initializing emotion variable, emotions response will be stored
  emotions:any;
  constructor(private apiService: ApiService , private router:Router) {}

  ngOnInit() {}
 
  analyzeUserData(form) {
    //setting loader toggle
    this.loading = !this.loading;
    this.show = !this.show;
     // method analyzing user text input
    this.apiService
      .getEmotionAnalysis(form.value.textInput)
      .subscribe(response => {this.emotions=response
        //emotions detected from the user input is checked for each emotion, it is than routed to proper route
        if(this.emotions.emotions_detected[0]=="joy" || this.emotions.emotions_detected[0] == "surprise"){
          this.router.navigate(["/joy"]);
        }else if(this.emotions.emotions_detected[0] == "anger" || this.emotions.emotions_detected[0] == "disgust"){
          this.router.navigate(["/anger"]);
        }else if(this.emotions.emotions_detected[0] == "sadness" || this.emotions.emotions_detected[0] == "fear"){
          this.router.navigate(["/sad"]);
        }else{
          this.router.navigate(["/joy"]);
        }
  });
  }
  //characters counter method
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
