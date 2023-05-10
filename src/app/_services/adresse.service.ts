import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adresse } from '../models/Adresse';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  constructor(private http: HttpClient) { }

  getAdresse(): Observable<Adresse[]> {
    return this.http.get<Adresse[]>('http://localhost:8080/adresse/read');
  }
}
