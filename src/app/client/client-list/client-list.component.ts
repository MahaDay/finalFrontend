import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/_services/client.service';
import { Client } from 'src/app/models/Client';
import { CommonModule } from '@angular/common';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { position } from 'html2canvas/dist/types/css/property-descriptors/position';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})


export class ClientListComponent {
  @ViewChild('content', { static: false }) el!: ElementRef;
  
  clients: Client[] = [];
  title: "search";
  searchtext:any;
  titre:"generate PDF";
  todayy:any;
  isVisible:boolean=false;
  selectedClientId: any;
  size:any;

  constructor(private clientService: ClientService,
    public translateService: TranslateService,
    private router: Router) {this.title='search' , 
    this.titre="generate PDF"}

    ngOnInit() {
      this.getClients();
     
    }
    private getClients(){
      this.clientService.getClients().subscribe((data: Client[]) => {
        this.clients = data;
        this.size=this.clients.length;
      
      });

    }
    hideDialog(){
      this.isVisible=false;
    }
    showDialog(){
      this.isVisible=true;

    }
    deleteClient(id: number){
      this.isVisible=false;
      this.clientService.deleteClient(id).subscribe( data => {
        console.log(data);
        this.getClients();
      })
    }

    
    detailsClient(id: number){
      this.router.navigate(['detailsClient', id]);
      
    }
    updateClient(id:number){
      this.router.navigate(['updateClient', id]);

    }



navigateToCreateClientInterface(){
  this.router.navigate(['createClient']);
 }

 makePDF() {
  const table = this.el.nativeElement.querySelector('table');
  html2canvas(table, {
    ignoreElements: (element) => element.classList.contains('exclude-from-pdf')
  }).then(canvas => {
    const pdf = new jsPDF('p', 'pt','a4', true);
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const hours = today.getHours();
    const minute= today.getMinutes();
    const logo = new Image();
    logo.src = 'data:image/jpeg;base64,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';

    pdf.addImage(logo, 'PNG', 60, 20, 60, 0);
    this.todayy = mm + '/' + dd + '/' + yyyy + ':' + hours + ':' + minute;

    pdf.setDrawColor(0, 0, 0);
    pdf.setFillColor(220, 220, 220);
    pdf.rect(400, 775, 160, 20, 'FD');
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(12);
    pdf.text('Nombre des clients:'+this.size,405,790);
   


    pdf.setFontSize(25);
    pdf.setTextColor(0, 0, 139);
    pdf.text('Client Report',200,60);
    pdf.setTextColor(0, 0, 0);
    pdf.setLineWidth(1);
    pdf.line(10, 120, 580, 120); 
    pdf.setFontSize(10);
    pdf.text('Nom de l\'entreprise: FRS', 10,160);
    pdf.text('Adresse: Sfax', 10,180);
    pdf.text('Code Postal et ville: 3000 Sfax', 10,200);
    
    pdf.text('Date:' + this.todayy, 440,20);

    pdf.text('Numéro de téléphone: 74 221 544', 400,160);
    pdf.text('Email: contact@frsdev.com', 400,180);
 

    pdf.setTextColor(128, 128, 128);
    pdf.text('contact@frsdev.com' , 230,840);

    pdf.setLineWidth(1);
    pdf.line(10, 240, 580, 240);
    const imgWidth = pdf.internal.pageSize.width;
    const imgHeight = canvas.height * imgWidth / canvas.width;

    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 300, imgWidth, imgHeight);
    pdf.save('clients.pdf');

  });

}

getDirection() {
  if (this.translateService.currentLang === 'ar-AR') {
    return 'rtl'; 
  } else {
    return 'ltr'; 
  }
}




}