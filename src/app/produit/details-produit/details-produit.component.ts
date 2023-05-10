import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/_services/produit.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent {
  id:any
  produit:any
  constructor(private route:ActivatedRoute,private router: Router,
     private produitService: ProduitService){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.produitService.getProduitById(this.id).subscribe(data=>{
      this.produit = data;
    });
      
  }
  navigateToBackToList(){
    this.router.navigate(['produits']);
   }

}
