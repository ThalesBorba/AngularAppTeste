import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../model/client.model';
import { ClientResponse } from '../model/clientResponse.model';

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

  constructor(private http: HttpClient) { }

  public getClients() {
    return this.http.get(this.apiUrl)
  }

  public postClient(cliente: Client): Observable<Client> {
    return this.http.post<Client>(
      this.apiUrl,
      cliente,
      this.httpOptions
    );
  }
}
