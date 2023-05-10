import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProduitService } from 'src/app/_services/produit.service';
import { TransactionService } from 'src/app/_services/transaction.service';
import { Produit } from 'src/app/models/Produit';
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  produits: Produit[] = []; // Initialize the products property here

  

  constructor(private produitService: ProduitService,
    private router: Router) {}



    ngOnInit() {
      this.produitService.getProduits().subscribe((data: Produit[]) => {
        this.produits = data;
        console.log("This products" , this.produits )
      });
    }




}
