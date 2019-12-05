import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../common-modules/users-module/services/user-api.service';
import { IAccountDetails, IAccountDetailBody, ITransactionDetails } from '../../models/model';
import { ApplicationConstants } from '../../constants/applicationConstants';
import { HeaderService } from '../../common-modules/layout-module/header/services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public accountDetails: IAccountDetails;
  public userId: string;
  public accountDetailsHeaders : string[];
  public accountDetailsData: IAccountDetailBody[];
  public transactionList : ITransactionDetails[];
  public tableHeaders : string[];


  constructor( private router: Router, private userService : UserApiService, private headerService: HeaderService) {
    this.accountDetailsHeaders = ApplicationConstants.accountDetailsHeaders;

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

    this.userService.getUserAccountDetails('1').subscribe((data)=> {
       this.accountDetailsData = [];
      const item  =<IAccountDetailBody>{}
      item.accountNumber = data.account_no;
      item.name = sessionStorage.getItem(ApplicationConstants.userfullName);
      item.balance = data.balance
  
      this.accountDetailsData.push(item);
    })

    this.getLatestTransactions();


  }

  public getLatestTransactions(){
    this.userService.getLastestTransactions().subscribe((data)=> {
      this.transactionList = data;
    })
  }



}
