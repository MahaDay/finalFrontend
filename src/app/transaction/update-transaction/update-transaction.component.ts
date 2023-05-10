import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/_services/transaction.service';
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.css']
})
export class UpdateTransactionComponent implements OnInit {
  id:any;
  transaction:Transaction=new Transaction();

 

  
  constructor(private transactionService: TransactionService,
   
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];
    this.updateTransaction();
    
  }


updateTransaction(){
  this.transactionService.getTransactionById(this.id).subscribe(data=>{
    console.log(data);
    this.transaction = data; 
    
  },error =>console.log(error));
}


onChangeTransactionType(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  this.transaction.typeTransaction = value;
}


onChangeMethodePaiement(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  this.transaction.methodePaiement = value;
}

onChangeStatutTransaction(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  this.transaction.statutTransaction = value;
}


onSubmit(){
  this.transactionService.retournerTransaction(this.id, this.transaction).subscribe(data=>{
    this.gotoTransactionList();
  },error=>console.log(error));

}


gotoTransactionList() {
  this.router.navigate(['/transactions']);
}

}
