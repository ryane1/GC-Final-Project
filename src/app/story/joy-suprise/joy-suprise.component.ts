import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-joy-suprise',
  templateUrl: './joy-suprise.component.html',
  styleUrls: ['./joy-suprise.component.css']
})
export class JoySupriseComponent implements OnInit {
  
  showJoy:boolean;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
}