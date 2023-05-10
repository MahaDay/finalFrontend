import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdresseService } from 'src/app/_services/adresse.service';
import { Adresse } from 'src/app/models/Adresse';

@Component({
  selector: 'app-adresse-list',
  templateUrl: './adresse-list.component.html',
  styleUrls: ['./adresse-list.component.css']
})
export class AdresseListComponent {
  adresses: Adresse[] = [];

  constructor(private adresseService: AdresseService,
    private router: Router) {}

    ngOnInit() {
      this.adresseService.getAdresse().subscribe((data: Adresse[]) => {
        this.adresses = data;
        console.log("This clients" , this.adresses )
      });
    }

}
