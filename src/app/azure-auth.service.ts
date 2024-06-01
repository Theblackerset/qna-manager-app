import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzureAuthService {
  private tenantId = environment.azure.tenantId;
  private clientId = environment.azure.clientId;
  private clientSecret = environment.azure.clientSecret;

  constructor(private http: HttpClient) { }

  getAccessToken(): Observable<any> {
    //const url = `https://login.microsoftonline.com/${this.tenantId}/oauth2/v2.0/token`;
    const url = `/auth/b5f9ba68-c751-47b7-9ca0-bef57f773af8/oauth2/v2.0/token`;
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', this.clientId);
    body.set('client_secret', this.clientSecret);
    body.set('scope', 'https://vault.azure.net/.default');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<any>(url, body.toString(), { headers });
  }

  getSecretFromKeyVault(token: string, secretName: string): Observable<any> {
    const url = `https://KvChatbotWhatsapp.vault.azure.net/secrets/${secretName}?api-version=7.0`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(url, { headers });
  }
}