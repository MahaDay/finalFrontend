import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/_services/client.service';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit{
  client: Client = new Client();
  constructor(private clientService:ClientService,
    private router:Router){

  }
  ngOnInit(): void {
      
  }
  saveClient(){
    this.clientService.createClient(this.client).subscribe(data=>{
      console.log(data);
      this.goToClientList();

    },
    error=>console.log(error));
    
  }

goToClientList(){
  this.router.navigate(['/clients']);

}
navigateToBackToList(){
  this.router.navigate(['clients']);
 }

onChangeSalutationClient(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  this.client.salutation = value;
}

  onSubmit(){
    this.clientService.createClient(this.client).subscribe(data=>{
      this.goToClientList();
    },error=> console.log(error));
    
  }



}
