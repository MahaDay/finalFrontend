import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { FirstComponent } from './test/first/first.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { ProduitListComponent } from './produit/produit-list/produit-list.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { AdresseListComponent } from './adresse/adresse-list/adresse-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { UpdateClientComponent } from './client/update-client/update-client/update-client.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';
import { CreateProduitComponent } from './produit/create-produit/create-produit.component';
import { DetailsClientComponent } from './client/details-client/details-client.component';
import { UpdateTransactionComponent } from './transaction/update-transaction/update-transaction.component';
import { CreateTransactionComponent } from './transaction/create-transaction/create-transaction.component';
import { DetailsProduitComponent } from './produit/details-produit/details-produit.component';
import { DetailsTransactionComponent } from './transaction/details-transaction/details-transaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorsComponent } from './errors/errors.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { ReviewComponentComponent } from './Review/review-component/review-component.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'first', component: FirstComponent },
  { path: 'listTransaction', component: TransactionListComponent },
  { path: 'listProduit', component: ProduitListComponent },
  { path: 'listClient', component: ClientListComponent },
  { path: 'listAdresse', component: AdresseListComponent },
  { path: 'listUser', component: UserListComponent },
  { path: 'listRole', component: RoleListComponent },
  { path: 'updateClient/:id', component: UpdateClientComponent },
  { path: 'createClient', component: CreateClientComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'updateProduit/:id', component: UpdateProduitComponent },
  { path: 'createProduit', component: CreateProduitComponent },
  { path: 'produits', component: ProduitListComponent },
  { path: 'detailsClient/:id', component: DetailsClientComponent },
  { path: 'updateTransaction/:id', component: UpdateTransactionComponent },
  { path: 'createTransaction', component: CreateTransactionComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'detailsProduit/:id', component: DetailsProduitComponent },
  { path: 'detailsTransaction/:id', component: DetailsTransactionComponent },
  { path : 'Dashboard', component: DashboardComponent},
  { path : 'Review', component: ReviewComponentComponent },
  { path : '**', component: ErrorsComponent  },
 
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
