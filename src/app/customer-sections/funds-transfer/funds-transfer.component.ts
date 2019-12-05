import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApplicationConstants } from '../../constants/applicationConstants';
import { HeaderService } from '../../common-modules/layout-module/header/services/header.service';
import { Router } from '@angular/router';
import { UserApiService } from '../../common-modules/users-module/services/user-api.service';
import { IUsers, IBeneficiary, IpaymentTransaction } from '../../models/model';


@Component({
  selector: 'app-funds-transfer',
  templateUrl: './funds-transfer.component.html',
  styleUrls: ['./funds-transfer.component.css']
})
export class FundsTransferComponent implements OnInit {
  public userId: string;
  public usersList: IBeneficiary[];
  public payeeFundTransfer: FormGroup;
  public transferPayee = new FormControl('', [Validators.required]);
  public transferAmount = new FormControl('', [Validators.required]);
  public transferDescription = new FormControl('', [Validators.required]);


  constructor(private fb: FormBuilder,  private router: Router, private headerService: HeaderService, private userService: UserApiService) { 

    this.payeeFundTransfer = this.fb.group({
      transferPayee: this.transferPayee,
      transferAmount: this.transferAmount,
      transferDescription: this.transferDescription
    });
  }

  ngOnInit() {
    if (sessionStorage.getItem(ApplicationConstants.userLoginId)) {
      this.userId = sessionStorage.getItem(ApplicationConstants.userLoginId);
      this.headerService.enableMenus.next(true);
    } else {
      this.userId = '0';
      this.router.navigateByUrl('/login');
    }

    this.getUsersList();
  }

  public onSubmit(): void {
    if (this.payeeFundTransfer.valid) {

      const addPayment: IpaymentTransaction = {
        transactionAmount: this.transferAmount.value,
        fromAccount: this.transferPayee.value,
        toAccount:this.transferPayee.value,
        transactionDescription: this.transferDescription.value,
        
      }

      this.userService.addPayment(addPayment).subscribe((data) => {
         this.router.navigateByUrl('/customer');
      })


    }else{
      Object.keys(this.payeeFundTransfer.controls).forEach(key => {
        this.payeeFundTransfer.controls[key].markAsDirty();
      });
    }
  }

   /* method to  get the list of users */
   public getUsersList(): void {
    this.userService.getAccounts().subscribe((data) => {
     this.usersList = data;
    
    });
  }



}
