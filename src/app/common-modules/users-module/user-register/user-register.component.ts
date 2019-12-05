import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationConstants } from '../../../constants/applicationConstants';
import { IUsers } from '../../../models/model';
import { UserApiService } from '../services/user-api.service';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public userRegisterForm: FormGroup;
  public passwordNotmatchError: Boolean = false;

  public firstName = new FormControl('', [Validators.required]);
  public lastName = new FormControl('', [Validators.required]);
  public userEmail = new FormControl('', [Validators.required, Validators.email]);
  public userName = new FormControl('', [Validators.required]);
  public userPassword = new FormControl('', [Validators.required]);
  public userConfirmPassword = new FormControl('', [Validators.required]);
  public dateOfBirth = new FormControl('', [Validators.required]);
  public mobileNo = new FormControl('', [Validators.required, Validators.pattern(ApplicationConstants.mobileValidationPattern)]);
  public address = new FormControl('', [Validators.required]);
  
  constructor(private fb: FormBuilder, private router: Router, private userService: UserApiService) {
 
    this.userRegisterForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      userEmail: this.userEmail,
      userName: this.userName,
      userPassword: this.userPassword,
      userConfirmPassword: this.userConfirmPassword,
      dateOfBirth: this.dateOfBirth,
      mobileNo: this.mobileNo,
      address: this.address

    });
  }

  ngOnInit() {

    this.userRegisterForm.get(ApplicationConstants.confirmPasswordInput).valueChanges.subscribe(val => {
     
        if(this.userRegisterForm.get(ApplicationConstants.passwordInput).value !== val){
          this.passwordNotmatchError = true;
        }else {
          this.passwordNotmatchError = false;
        }
    });
  }

  /* method to redirect to login page */

  public goToLogin() {
    this.router.navigateByUrl('/user/login');
  }

  /* to add new used to database  */

  public onSubmit(): void {

    if (this.userRegisterForm.valid && !this.passwordNotmatchError) {
         const userAdd: IUsers = {
        firstName : this.firstName.value,
        lastName:  this.lastName.value,
        userName: this.userName.value,
        emailId: this.userEmail.value,
        password: this.userConfirmPassword.value,
        dateOfBirth: this.dateOfBirth.value,
        mobileNo: this.mobileNo.value,
        address: this.address.value
       
      };
   
     
      this.userService.addUser(userAdd).subscribe((success) => {
      this.router.navigateByUrl('/user/login');     

      }, error => {
      

      })
    }
    else {
      Object.keys(this.userRegisterForm.controls).forEach(key => {
        this.userRegisterForm.controls[key].markAsDirty();

      });
    }

  }

}
