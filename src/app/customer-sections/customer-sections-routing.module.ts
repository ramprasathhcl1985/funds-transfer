import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fundtransfer', component: FundsTransferComponent },
  { path: 'mytransactions', component: TransactionListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerSectionsRoutingModule { }
