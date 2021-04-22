import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { Employee } from './employee/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService{
  /*httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }*/

  private baseURL="http://localhost:8080/api/v1/employees";
  constructor(private httpclient: HttpClient) { }
  getEmployeeList():Observable<Employee[]>{
     return this.httpclient.get<Employee[]>(this.baseURL);

  }
  create(employee: any): Observable<Employee> {
    return this.httpclient.post<Employee>(this.baseURL,employee);
  }
  find(id: number): Observable<Employee> {
    return this.httpclient.get<Employee>(this.baseURL+'/'+id)
  }
  update(id: number,employee:Employee): Observable<Object> {
    return this.httpclient.put<Employee>(this.baseURL+'/'+id,employee);
  }

  delete(id:number):Observable<Employee>{
    return this.httpclient.delete<Employee>(this.baseURL+'/'+id);
  }
} 
