import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QnaMakerService {
  private endpoint = environment.webApp.url;
  
  constructor(private http: HttpClient) { }

  
  getQuestions(): Observable<any> {
    return this.http.get<any>(this.endpoint).pipe(
      map(response => response.value)
    );
  }
}
