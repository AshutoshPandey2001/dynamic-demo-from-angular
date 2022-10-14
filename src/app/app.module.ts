import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrComponent } from './Pages/hr/hr.component';
import { EmployeeComponent } from './Pages/employee/employee.component';

@NgModule({
  declarations: [AppComponent, HrComponent, EmployeeComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
