import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.css']
})
export class UpdateEmployeesComponent implements OnInit {

  employeeDetails:Employee={
    id:'',
    name:'',
    email:'',
    department:'',
    salary:0,
    phonenumber:0

  }
  constructor(private route:ActivatedRoute,private empservice:EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id= params.get('id');
       if(id){
          this.empservice.getEmployeeById(id)
          .subscribe({
            next:(response)=>{
                this.employeeDetails=response;
            }
          })
       }
      }
    })

  }

  updateEmployee(){
    this.empservice.updateEmployee(this.employeeDetails.id,this.employeeDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['employees']);
      }
    })
  }
  deleteEmployee(id:string){
    this.empservice.deleteEmployee(this.employeeDetails.id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['employees'])
      }
    })
  }

}
