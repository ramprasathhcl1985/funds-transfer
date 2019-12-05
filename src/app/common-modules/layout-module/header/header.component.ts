import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './services/header.service';
import { UserApiService } from '../../users-module/services/user-api.service';
import { ApplicationConstants } from '../../../constants/applicationConstants';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public showMenus = false;
  public userName = '';
  public userId = '';


  constructor(private router: Router, private headerService: HeaderService, private userApiService: UserApiService) { }


  ngOnInit() {
    if (sessionStorage.getItem('USER-LOGIN-ID')) {
      this.userId = sessionStorage.getItem('USER-LOGIN-ID');
      this.showMenus = true;
      this.getLoginUserDetails();
    }
    /* to enable menus */
    this.headerService.enableMenus.subscribe((data) => {
      this.showMenus = data;
    });

    /* to enable user name */
    this.headerService.loginUserName.subscribe((data) => {
      this.userName = data;
    });
  }

  /* to logout the user */
  public logout() {
    sessionStorage.removeItem(ApplicationConstants.userLoginId);
    this.headerService.enableMenus.next(false);
    this.headerService.loginUserName.next('');
    this.router.navigateByUrl('/login');

  }
  /* to read the login user details*/
  public getLoginUserDetails(): void {
    this.userApiService.getUser(this.userId).subscribe((data) => {
      this.headerService.loginUserName.next(data.userName);
    });


  }

  public fundtransfer(){
    this.router.navigateByUrl('/customer/fundtransfer');
  }
  public mytransactions(){
    this.router.navigateByUrl('/customer/mytransactions');
  }
}
