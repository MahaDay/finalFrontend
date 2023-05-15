import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getNbTransaction(){
    return this.http.get<number>(`http://localhost:8080/transaction/nbTransaction`);

  }

  getNbProduit(){
    return this.http.get<number>(`http://localhost:8080/produit/nbProduit`);
    
  }

  getNbClient(){
    return this.http.get<number>(`http://localhost:8080/client/nbClient`);
    
  }

  getNaissance(){
    return this.http.get<number>(`http://localhost:8080/client/status`);
    
  }
  getPrix(){
    return this.http.get<number>(`http://localhost:8080/produit/stats`);

  }

  getTotalAmount(){
    return this.http.get<number>(`http://localhost:8080/transaction/sommeTransaction`);

  }



  getTransactionLastDay(){
    return this.http.get<any>(`http://localhost:8080/transaction/lastday`);

  }

  getTransactionLastMonth(){
    return this.http.get<any>(`http://localhost:8080/transaction/lastmonth`);

  }

  getTransactionLastYear(){
    return this.http.get<any>(`http://localhost:8080/transaction/lastyear`);

  }
  getTransactionLastFive(){
    return this.http.get<any>(`http://localhost:8080/transaction/lastFive`);

  }
}
