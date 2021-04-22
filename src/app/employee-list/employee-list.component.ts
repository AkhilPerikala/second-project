import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee/employee';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[]=[];
  constructor(private employeeservice:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
getEmployees(){

  this.employeeservice.getEmployeeList().subscribe(data=>{
    this.employees=data
  });
 
}
deletePost(id: number){
  this.employeeservice.delete(id).subscribe(data => {
       this.employees = this.employees.filter(item => item.id !== id);
       console.log('Post deleted successfully!');
  })
}
updateEmployee(id:number){
this.router.navigate(['update-employee',id])
}
}