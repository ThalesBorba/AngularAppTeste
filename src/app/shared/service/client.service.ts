import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = 'http://localhost:3000/people';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getClientWithFlag(flag: string): Observable<Client> {
    return this.httpClient.get<Client>(this.apiUrl + '?flag=' + flag)
  }

  public postClient(cliente: Client): Observable<Client> {
    return this.httpClient.post<Client>(
      this.apiUrl,
      cliente,
      this.httpOptions
    );
  }
}
