import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { HrComponent } from './Pages/hr/hr.component';

const routes: Routes = [
  { path: '', component: HrComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'hr', component: HrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
