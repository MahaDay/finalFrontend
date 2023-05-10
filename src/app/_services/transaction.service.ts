import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  
  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`http://localhost:8080/transaction/read`);
  }

  getTransactionById(id: number):Observable<Transaction>{
    return this.http.get<Transaction>(`http://localhost:8080/transaction/retournerTransaction/${id}`);

  } 

  deleteTransaction(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:8080/transaction/delete/${id}`);
  }
  createTransaction(transaction:Transaction): Observable<Object> {
    return this.http.post(`http://localhost:8080/transaction/create`,transaction);
  }

  retournerTransaction(id: number, transaction:Transaction): Observable<Object> {
    return this.http.put(`http://localhost:8080/transaction/update/${id}`,transaction);

  }

  getTotalAmount(){
    return this.http.get<number>(`http://localhost:8080/transaction/sommeTransaction`);

  }


  

}
