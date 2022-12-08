import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  addEmployeeRequest:Employee={
    id:'',
    name:'',
    email:'',
    department:'',
    salary:0,
    phonenumber:0
  }
  
  constructor(private empservice:EmployeeService
    ,private router: Router) { }

  ngOnInit(): void {

  }
  addEmployee(){
    this.empservice.addEmployees(this.addEmployeeRequest)
    .subscribe({
      next:(employee)=>{
        this.router.navigate(['employees']) //navigate to the another page 
      }
    })
  }

}
