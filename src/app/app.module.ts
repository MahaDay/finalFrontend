import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';


import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ProduitListComponent } from './produit/produit-list/produit-list.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { UpdateClientComponent } from './client/update-client/update-client/update-client.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';
import { CreateProduitComponent } from './produit/create-produit/create-produit.component';
import { UpdateTransactionComponent } from './transaction/update-transaction/update-transaction.component';
import { CreateTransactionComponent } from './transaction/create-transaction/create-transaction.component';
import { DetailsClientComponent } from './client/details-client/details-client.component';
import { DetailsProduitComponent } from './produit/details-produit/details-produit.component';
import { DetailsTransactionComponent } from './transaction/details-transaction/details-transaction.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorsComponent } from './errors/errors.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { ReviewComponentComponent } from './Review/review-component/review-component.component';






export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ClientListComponent,
    ProduitListComponent,
    TransactionListComponent,
    UpdateClientComponent,
    CreateClientComponent,
    UpdateProduitComponent,
    CreateProduitComponent,
    UpdateTransactionComponent,
    CreateTransactionComponent,
    DetailsClientComponent,
    DetailsProduitComponent,
    DetailsTransactionComponent,
    DashboardComponent,
    ErrorsComponent,
    ReviewComponentComponent

    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule ,
    CommonModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient],
        },
      defaultLanguage: 'en-US',
    }),
  ],
  providers: [httpInterceptorProviders,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
