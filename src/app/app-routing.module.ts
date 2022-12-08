import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeesComponent } from './add-employee/add-employees/add-employees.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { UpdateEmployeesComponent } from './edit-employee/update-employees/update-employees.component';

const routes: Routes = [
  {
    path:'',
    component:EmployeeListComponent
  },
  {
    path:'employees',
    component:EmployeeListComponent
  },
  {
    path:'employees/add',
    component:AddEmployeesComponent
  },
  {
    path:'employees/edit/:id',
    component:UpdateEmployeesComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
