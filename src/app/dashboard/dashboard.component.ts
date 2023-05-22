import { Component } from '@angular/core';
import { TransactionService } from '../_services/transaction.service';
import { DashboardService } from '../_services/dashboard.service';
import Chart from 'chart.js/auto';
import { Transaction } from 'ethers';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nbTransaction:any;
  nbProduit:any;
  nbClient:any;
  listAjout:any;
  date:any;
  total:any;
  totalD:any;
  totalM:any;
  totalY:any;
  chart: Chart | null = null;
  ctx:any;
  chart1:any=null;
  

  
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
    this. getDateAjout();
    // this.getChart()

     const canvas = document.getElementById('myChart') as HTMLCanvasElement;
         this.ctx = canvas.getContext('2d');
          if (this.ctx) {
             this.chart1 = new Chart(this.ctx, { type: 'bar',
            data: {
              labels: [''],
              datasets: [{
                label: 'Sales',
                data: [0],
                backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                  'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
              }]
            }
           
          });
        }
          else {
            console.error('Could not get 2D context for canvas element.');
          }
    
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

      getDateAjout(){
        this.dashboardService.getDateAjout().subscribe((nombre: number)=>{
          this.listAjout=nombre;
          
          
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


      getLastDay(){
        this.dashboardService.getTransactionLastDay().subscribe((numberToday)=>{
          let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

          let d = new Date();
          let day = weekday[d.getDay()]; // hedhi taatik inhar ali fih hney tw ken theb tzidou fl affiche wala hkeya
          this.updateChart({"No data":0})//,day) // hedhi badlouha b numberToday ken rigeltou l fonction fl backend , hani bch nhotou f commentaire l button mte3ha fl html
        })
      }
      
      getLastMonth(){
        this.dashboardService.getTransactionLastMonth().subscribe((numberToday)=>{
          let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

          let d = new Date();
          let monthName = month[d.getMonth()]; // hedhi taatik ichhar ali hney fih tw ken theb tzidou fl affiche wala hkeya
          this.updateChart(numberToday)
        })
      }

      getLastYear(){
        this.dashboardService.getTransactionLastYear().subscribe((numberToday)=>{
          this.updateChart(numberToday)//(new Date().getFullYear()).toString()) // ali fl commentaire yaatik l aam ali fih hney tw ken theb t affichih wala hkeya
        })
      }

      updateChart(object_data:object={}){
        this.chart1.destroy()
          this.chart1 = new Chart(this.ctx, { type: 'line',
          data: {
            labels: Object.keys(object_data),
            datasets: [{
              label: 'Sales',
              data: Object.values(object_data),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1
            }]
          }
         
        });
        console.log(this.chart1.data.datasets)
      }



      async getChart() {
      
        await this.getNbClient();
      const canvas = document.getElementById('myChart') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const chart = new Chart(ctx, { type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Sales',
            data: [this.getNbClient, 19, 3, 5, 2, 3, 15],
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
    }
  }

       

    