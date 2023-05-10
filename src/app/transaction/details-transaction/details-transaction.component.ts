import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/_services/transaction.service';

@Component({
  selector: 'app-details-transaction',
  templateUrl: './details-transaction.component.html',
  styleUrls: ['./details-transaction.component.css']
})
export class DetailsTransactionComponent implements OnInit{
  id:any
  transaction:any
  constructor(private route:ActivatedRoute,private router: Router,
     private transactionService: TransactionService){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    
    this.transactionService.getTransactionById(this.id).subscribe(data=>{
      this.transaction = data;
    });
      
  }

  navigateToBackToList(){
    this.router.navigate(['transactions']);
   }
  

}
