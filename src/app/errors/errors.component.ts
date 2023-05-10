import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent {
  constructor(private router:Router){

  }
  navigateToBackToHome(){
    this.router.navigate(['home']);
   }

}
