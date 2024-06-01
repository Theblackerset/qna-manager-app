import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AzureAuthService } from './azure-auth.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QnaMakerService {
  private endpoint = 'https://languagebotwhatsapp.cognitiveservices.azure.com'; // Reemplaza con tu endpoint de Azure
  private projectName = 'botwhatsapp';
  constructor(private http: HttpClient, private authService: AzureAuthService) { }

  getHeaders(token: string) {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer {token}',
      'Ocp-Apim-Subscription-Key': '2a225cb3b5cc469d9b785364033a8fc1'
    });
  }

  getQuestions(): Observable<any> {
  return this.authService.getAccessToken().pipe(
    switchMap(tokenResponse => this.authService.getSecretFromKeyVault(tokenResponse.access_token, 'QuestionAnsweringSecret')),
    switchMap(secretResponse => {
      const token = secretResponse.value;
      const url = `${this.endpoint}/language/query-knowledgebases/projects/${this.projectName}?api-version=2021-10-01`;
      console.log(token);
      return this.http.get<any>(url, { headers: this.getHeaders(token) });
    })
  );
  }

  // addQuestion(question: any): Observable<any> {
  //   const url = `${this.endpoint}/qnamaker/v4.0/knowledgebases/YOUR_KB_ID`;
  //   return this.http.patch<any>(url, question, { headers: this.getHeaders() });
  // }

  // deleteQuestion(questionId: string): Observable<any> {
  //   const url = `${this.endpoint}/qnamaker/v4.0/knowledgebases/YOUR_KB_ID/${questionId}`;
  //   return this.http.delete<any>(url, { headers: this.getHeaders() });
  // }
}
