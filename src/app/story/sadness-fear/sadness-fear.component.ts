import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sadness-fear',
  templateUrl: './sadness-fear.component.html',
  styleUrls: ['./sadness-fear.component.css']
})
export class SadnessFearComponent implements OnInit {

  constructor() { }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  ngOnInit() {
  }
  
}
