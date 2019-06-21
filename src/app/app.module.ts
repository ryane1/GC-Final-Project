import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { SadnessFearComponent } from './story/sadness-fear/sadness-fear.component';
import { AngerDisgustComponent } from './story/anger-disgust/anger-disgust.component';
import { JoySurpriseComponent } from './story/joy-surprise/joy-surprise.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{RouterModule, Routes} from '@angular/router';

const storyRoutes:Routes=[
  {path: '', redirectTo: '/story', pathMatch:'full'},
  {path: 'story', component:StoryComponent},
  {path: 'joy', component:JoySurpriseComponent},
  {path: 'sad', component:SadnessFearComponent},
  {path: 'anger', component:AngerDisgustComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    SadnessFearComponent,
    AngerDisgustComponent,
    JoySurpriseComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(storyRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
