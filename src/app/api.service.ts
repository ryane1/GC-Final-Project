import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "X-RapidAPI-Host": "twinword-emotion-analysis-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "7a3e2df803mshaa1630ee6c6c239p1c9c0bjsned1be9eb7b9d",
    "Content-Type": "application/x-www-form-urlencoded"
  })
};

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getEmotionAnalysis(textInput) {
    return this.http.post(
      "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/",
      `text=${textInput}`,
      httpOptions
    );
  }
}
