import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  apiBaseUrl=environment.apiBaseUrl;
  getAllEmployees(): Observable <Employee[]>{
    return this.httpClient.get<Employee[]>(this.apiBaseUrl +'/api/fullstack')
  }
  addEmployees(addEmployeeRequest:Employee): Observable<Employee>{
    addEmployeeRequest.id='00000000-0000-0000-0000-000000000000'
    return this.httpClient.post<Employee>(this.apiBaseUrl+'/api/fullstack',addEmployeeRequest)
  }
  getEmployeeById(id:string):Observable<Employee>{
    return this.httpClient.get<Employee>(this.apiBaseUrl+'/api/fullstack/' +id)
  }
  updateEmployee(id:string,updateEmployeeRequest:Employee):Observable<Employee>{
      return this.httpClient.put<Employee>(this.apiBaseUrl+'/api/fullstack/' +id,updateEmployeeRequest)
  }
  deleteEmployee(id:string){
      return this.httpClient.delete<Employee>(this.apiBaseUrl+'/api/fullstack/' +id);
  }

}
