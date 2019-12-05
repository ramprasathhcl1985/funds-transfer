import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { CustomTableComponent } from './custom-table/custom-table.component';


@NgModule({
  declarations: [CustomTableComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [CustomTableComponent]
})
export class CustomLayoutsModule { }
