import { Component } from '@angular/core';
import { TransactionService } from '../_services/transaction.service';
import { DashboardService } from '../_services/dashboard.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nbTransaction:any;
  nbProduit:any;
  nbClient:any;
  date:any;
  total:any;
  totalD:any;
  totalM:any;
  totalY:any;
  chart: Chart | null = null;

  constructor(private dashboardService: DashboardService){

  }
  ngOnInit(){
    this.getNumber();
    this.getNbProduit();
    this.getNbClient();
   
    this.getAmount();
    this.getTransactionLastDay();
    this.getTransactionLastMonth();
    this.getTransactionLastYear();
    this.getChart()

    
    
  }

  getTransactionLastDay(){

    this.dashboardService.getTransactionLastDay().subscribe((amount: number) => {
     this.totalD=amount;
    });
  }

  getTransactionLastMonth(){

    this.dashboardService.getTransactionLastMonth().subscribe((amount: number) => {
     this.totalM=amount;
    });

  }
  getTransactionLastYear(){

    this.dashboardService.getTransactionLastYear().subscribe((amount: number) => {
     this.totalY=amount;
    });
  }




  getNumber(){

    this.dashboardService.getNbTransaction().subscribe((nombre: number) => {
     this.nbTransaction=nombre;
    });
    
    }

    getNbProduit(){

      this.dashboardService.getNbProduit().subscribe((nombre: number) => {
       this.nbProduit=nombre;
      });
      
      }

    getNbClient(){

        this.dashboardService.getNbClient().subscribe((nombre: number) => {
         this.nbClient=nombre;
        });
        
        }
    


    getAmount(){

      this.dashboardService.getTotalAmount().subscribe((amount: number) => {
       this.total=amount;
      });
      
      }


    getChart(){
      const canvas = document.getElementById('myChart') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        this.chart = new Chart(ctx, { type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3, 15],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }]
        }
       
      });
    }
       
      else {
        console.error('Could not get 2D context for canvas element.');
      }
    }}
     
    
    


