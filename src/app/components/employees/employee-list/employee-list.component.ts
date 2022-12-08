import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  //employee:Employee | undefined;
  employee:Employee[]=[
//     {
//        id:'1',
//        name:'sathiyan',
//        email:'sathiyan@whiteblue.in',
//        department:'EEE',
//        salary:25000,
//        phonenumber:6379280820
//     },
//     {
//       id:'2',
//       name:'sathiyan raj',
//       email:'sathiyan@whiteblue.in',
//       department:'EEE',
//       salary:250000,
//       phonenumber:6379280820
//    },
//    {
//     id:'3',
//     name:'sathiyan rajendran',
//     email:'sathiyan@whiteblue.in',
//     department:'EEE',
//     salary:250000,
//     phonenumber:6379280820
//  }
 ]
  constructor(private empservice:EmployeeService) { }

  ngOnInit(): void {
    this.empservice.getAllEmployees()
    .subscribe({
      next:(employee)=>{
        this.employee=employee;
      },
      error:(response)=>{

      }
    })
  }


}
