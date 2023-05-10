import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/_services/produit.service';
import { Produit } from 'src/app/models/Produit';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit{
  id:any;
  produit:Produit=new Produit();
 

  

  
  constructor(private produitService: ProduitService,
   
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit():void{


    this.id=this.route.snapshot.params['id'];
    this.updateProduit();
    
   
    
  }
updateProduit(){
  this.produitService.getProduitById(this.id).subscribe(data=>{
    console.log(data);
    this.produit=  data;
    
    
    
  },error =>console.log(error));
}
onSubmit(){
  this.produitService.retournerProduit(this.id, this.produit).subscribe(data=>{
    this.gotoProduitList();
  },error=>console.log(error));
    
  

}
gotoProduitList() {
  this.router.navigate(['/produits']);
}

}
