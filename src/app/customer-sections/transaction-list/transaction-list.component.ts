import { Component, OnInit } from '@angular/core';
import { ApplicationConstants } from '../../constants/applicationConstants';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../common-modules/layout-module/header/services/header.service';
import { UserApiService } from '../../common-modules/users-module/services/user-api.service';
import { ITransactionDetails } from '../../models/model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  public userId: string;
  public myTransferList: FormGroup;
  public monthList: string[];
  public yearsList: string[] = [];
  public tableHeaders: string[];
  public transactionList: ITransactionDetails[];
  public transferMonth = new FormControl('', [Validators.required]);
  public transferYear = new FormControl('', [Validators.required]);


  constructor(private fb: FormBuilder, private router: Router, private headerService: HeaderService, private userService: UserApiService) {
    this.myTransferList = this.fb.group({
      transferMonth: this.transferMonth,
      transferYear: this.transferYear,

    });
    this.monthList = ApplicationConstants.monthsList;

    this.tableHeaders = ApplicationConstants.transactionHeaders;
  }

  ngOnInit() {
    if (sessionStorage.getItem(ApplicationConstants.userLoginId)) {
      this.userId = sessionStorage.getItem(ApplicationConstants.userLoginId);
      this.headerService.enableMenus.next(true);
    } else {
      this.userId = '0';
      this.router.navigateByUrl('/login');
    }

    // to get the list of years
    this.getYearsList();
  }

  private getYearsList(): void {

    let item: number = Number(new Date().getFullYear());
    for (let i = 0; i < 10; i++) {
      const year: number = (item - i);

      this.yearsList.push(year.toString());
    }

  }

  public onSubmit(): void {
    if (this.myTransferList.valid) {
      this.getLatestTransactions();

    }

  }

  public getLatestTransactions() {
    this.userService.getLastestTransactions().subscribe((data) => {
      this.transactionList = data;
    })
  }


}
