import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerSectionsRoutingModule } from './customer-sections-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import { CustomLayoutsModule } from '../common-modules/custom-layouts/custom-layouts.module';
import {AccordionModule} from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, TransactionListComponent, FundsTransferComponent],
  imports: [
    CommonModule,
    CustomerSectionsRoutingModule,
    CustomLayoutsModule,
  AccordionModule,
  TableModule,
  ReactiveFormsModule

  ]
})
export class CustomerSectionsModule { }
