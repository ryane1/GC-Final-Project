import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-joy-surprise',
  templateUrl: './joy-surprise.component.html',
  styleUrls: ['./joy-surprise.component.css']
})
export class JoySurpriseComponent implements OnInit {
  
  showJoy:boolean;
  constructor() { }

  ngOnInit() {
  }
}