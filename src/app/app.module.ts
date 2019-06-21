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
<<<<<<< HEAD
import{RouterModule, Routes} from '@angular/router';

const storyRoutes:Routes=[
  {path: '', redirectTo: '/story', pathMatch:'full'},
  {path: 'story', component:StoryComponent},
  {path: 'joy', component:JoySupriseComponent},
  {path: 'sad', component:SadnessFearComponent},
  {path: 'anger', component:AngerDisgustComponent}
];

=======
import {NgsRevealModule} from 'ngx-scrollreveal';
>>>>>>> bf8ac453194df2273df3f7cdc7d01476c4b7b7e3

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    SadnessFearComponent,
    AngerDisgustComponent,
    JoySupriseComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    RouterModule.forRoot(storyRoutes)
=======
    BrowserAnimationsModule,NgsRevealModule
>>>>>>> bf8ac453194df2273df3f7cdc7d01476c4b7b7e3
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
