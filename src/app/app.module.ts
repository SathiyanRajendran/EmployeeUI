import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddEmployeesComponent } from './add-employee/add-employees/add-employees.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeesComponent } from './components/employees/employee-list/employee-list/edit-employees.component';
import { UpdateEmployeesComponent } from './edit-employee/update-employees/update-employees.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeesComponent,
    EditEmployeesComponent,
    UpdateEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
