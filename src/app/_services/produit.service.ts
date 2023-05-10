import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) {}

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>('http://localhost:8080/produit/read');
  }

  getProduitById(id: number):Observable<Produit>{
    return this.http.get<Produit>(`http://localhost:8080/produit/retournerProduit/${id}`);

  }

  deleteProduit(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:8080/produit/delete/${id}`);
  }
  createProduit(produit:Produit): Observable<Object> {
    return this.http.post(`http://localhost:8080/produit/create`,produit);
  }

  retournerProduit(id: number, produit:Produit): Observable<Object> {
    return this.http.put(`http://localhost:8080/produit/update/${id}`, produit);

  }

  
}
