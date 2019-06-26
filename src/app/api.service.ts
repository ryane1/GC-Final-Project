import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "X-RapidAPI-Host": "twinword-emotion-analysis-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "3a97eed575mshac6ad2315388727p1b7087jsna8d923d3487d",
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
