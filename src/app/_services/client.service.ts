import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:8080/client/read');
  }
  getClientById(id: number):Observable<Client>{
    return this.http.get<Client>(`http://localhost:8080/client/retournerClient/${id}`);

  }
  deleteClient(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:8080/client/delete/${id}`);
  }
  createClient(client:Client): Observable<Object> {
    return this.http.post(`http://localhost:8080/client/create`,client);
  }

  retournerClient(id: number, client:Client): Observable<Object> {
    return this.http.put(`http://localhost:8080/client/update/${id}`,client);

  }
 
  

 
}
