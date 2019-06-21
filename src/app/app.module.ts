import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { SadnessFearComponent } from './story/sadness-fear/sadness-fear.component';
import { AngerDisgustComponent } from './story/anger-disgust/anger-disgust.component';
import { JoySupriseComponent } from './story/joy-suprise/joy-suprise.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgsRevealModule} from 'ngx-scrollreveal';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    SadnessFearComponent,
    AngerDisgustComponent,
    JoySupriseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,NgsRevealModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
