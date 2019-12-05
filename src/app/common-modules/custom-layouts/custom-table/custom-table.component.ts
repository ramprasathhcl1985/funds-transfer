import { Component, OnInit, Input} from '@angular/core';
import { ITableHeaders, IAccountDetailBody } from '../../../models/model';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {

  @Input('tableHeaders') tableHeaders: string[];
  @Input('tableBody') tableBody:  IAccountDetailBody[];

  constructor() { }

  ngOnInit() {

    console.dir(this.tableHeaders);
    console.dir(this.tableBody);
  }

}
