import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/_services/client.service';
import { Client } from 'src/app/models/Client';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit{
  id:any;
  client:Client=new Client();
 

  
  constructor(private clientService: ClientService,
   
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit():void{
    

    

    this.id=this.route.snapshot.params['id'];
    this.updateClient();
    
    
   
    
  }
updateClient(){
  this.clientService.getClientById(this.id).subscribe(data=>{
    console.log(data);
    this.client = data;
    
    
  },error =>console.log(error));
}
onSubmit(){
  this.clientService.retournerClient(this.id, this.client).subscribe(data=>{
    this.gotoClientList();
  },error=>console.log(error));
   

}

onChangeSalutationClient(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  this.client.salutation = value;
}
gotoClientList() {
  this.router.navigate(['/clients']);
}

  

}
