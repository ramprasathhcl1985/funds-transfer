import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './common-modules/layout-module/layout.module';
import { UsersModule } from './common-modules/users-module/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomerSectionsModule } from './customer-sections/customer-sections.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    UsersModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    CustomerSectionsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
