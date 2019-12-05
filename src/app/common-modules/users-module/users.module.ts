import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LayoutModule } from '../layout-module/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [UserLoginComponent, UserRegisterComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    CalendarModule
  ]
})
export class UsersModule { }
