import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../layout-module/header/services/header.service';
import { UserApiService } from '../services/user-api.service';
import { IUsers, IUserLogin,  } from '../../../models/model';
import { ApplicationConstants } from '../../../constants/applicationConstants';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public userLogin: FormGroup;
  public usersList: IUsers[];

  public inValidUserMessage = '';

  public userName = new FormControl('', [Validators.required]);
  public userPassword = new FormControl('', [Validators.required]);


  constructor(private fb: FormBuilder, private router: Router, private headerService: HeaderService, private userService: UserApiService) {
    this.userLogin = this.fb.group({
      userName: this.userName,
      userPassword: this.userPassword
    });
  }

  ngOnInit() {
  }

   /* to redirect to register page*/
   public goToRegister(): void {
    this.router.navigateByUrl('user/register');
  }

  /* form submit checking suer login is present in the user List */
  public onSubmit(): void {
    if (this.userLogin.valid) {
      const userLogin:IUserLogin = {
       userName: this.userName.value,
       password: this.userPassword.value,

      
      }

      this.userService.loginUser(userLogin).subscribe((data)=> {
        console.dir(data);
        this.userService.setSessionItem(ApplicationConstants.userLoginId, data.id.toString());
        this.router.navigateByUrl('/customer');

      });


     // this.getUsersList();

    }
  }
   
   /* method to  get the list of users */
   public getUsersList(): void {
    this.userService.getUsersList().subscribe((data) => {

      if (data.filter((data) => data.userName === this.userName.value &&
        data.password === this.userPassword.value)) {
        this.usersList = data.filter((data) => data.userName === this.userName.value
          && data.password === this.userPassword.value);
       
       
        if (this.usersList.length > 0) {
          this.inValidUserMessage = '';
          this.userService.setSessionItem(ApplicationConstants.userLoginId, this.usersList[0].id.toString());
          sessionStorage.setItem(ApplicationConstants.userfullName, this.usersList[0].firstName. concat(' ').concat(this.usersList[0].lastName))
          this.headerService.enableMenus.next(true);
          this.headerService.loginUserName.next(this.usersList[0].firstName.concat(' ').concat(this.usersList[0].lastName));

          this.router.navigateByUrl('/customer');
        } else {
          this.inValidUserMessage = ApplicationConstants.loginErrorMessage;
        }
      }
    });
  }



}
