import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrComponent } from './Pages/hr/hr.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AllFormComponent } from './Pages/all-form/all-form.component';
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from "ngx-ui-loader";

@NgModule({
  declarations: [AppComponent, HrComponent, EmployeeComponent, AllFormComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule, ReactiveFormsModule,HttpClientModule,NgxUiLoaderModule.forRoot({
    // bgsColor: "red",
    // bgsPosition: POSITION.bottomCenter,
    // bgsSize: 40,
    // bgsType: SPINNER.rectangleBounce, // background spinner type
    // fgsType: SPINNER.chasingDots, // foreground spinner type
    // pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
    // pbThickness: 5, // progress bar thickness
  }),],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
