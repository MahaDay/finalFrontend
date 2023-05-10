import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/_services/produit.service';
import { Produit } from 'src/app/models/Produit';

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit{
  produit: Produit = new Produit();
  constructor(private produitService:ProduitService,
    private router:Router){

  }
  ngOnInit(): void {
      
  }
  saveProduit(){
    this.produitService.createProduit(this.produit).subscribe(data=>{
      console.log(data);
      this.goToProduitList();

    },
    error=>console.log(error));
    
  }

goToProduitList(){
  this.router.navigate(['/produits']);

}
navigateToBackToList(){
  this.router.navigate(['produits']);
 }

  onSubmit(){
    this.produitService.createProduit(this.produit).subscribe(data=>{
      this.goToProduitList();
    },error=> console.log(error));
    
  }



}
