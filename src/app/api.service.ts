import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "X-RapidAPI-Host": "twinword-emotion-analysis-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "f09bd54c39msh6d19b6d7bafdfdep18dc82jsn5f351b2f8669",
    "Content-Type": "application/x-www-form-urlencoded"
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEmotionAnalysis() {
    return this.http.post('https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/', "text=After living abroad for such a long time, seeing my family was the best present I could have ever wished for.", httpOptions)
  }
}
