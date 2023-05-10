import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/_services/produit.service';
import { TransactionService } from 'src/app/_services/transaction.service';
import { Produit } from 'src/app/models/Produit';
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent {
  produits: Produit[] = [];
  selectedProduct: any;
  

  transaction: Transaction = new Transaction();
  constructor(private transactionService:TransactionService,
    private router:Router,
    private produitService: ProduitService){

  }
  ngOnInit(): void {
      
  }
  saveTransaction(){
    this.transactionService.createTransaction(this.transaction).subscribe(data=>{
      console.log(data);
      this.goToTransactionList();

    },
    error=>console.log(error));
    
  }

goToTransactionList(){
  this.router.navigate(['/transactions']);

}
navigateToBackToList(){
  this.router.navigate(['transactions']);
 }

  onSubmit(){
    this.transactionService.createTransaction(this.transaction).subscribe(data=>{
      this.goToTransactionList();
    },error=> console.log(error));
    
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

  getProducts(){
    this.produitService.getProduits().subscribe((data: Produit[]) => {
      this.produits = data;
    
    });

  }

  
  onProductSelected() {
    console.log('Selected product:', this.selectedProduct);
  }


}
