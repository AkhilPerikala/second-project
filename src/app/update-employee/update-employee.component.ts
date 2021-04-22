
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee!: Employee;
  form!:FormGroup;
  constructor(private employeeservice:EmployeeService,private router:Router,private route:ActivatedRoute) { }
   
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeservice.find(this.id).subscribe((data:Employee)=>{
      this.employee=data;
    });
    this.form = new FormGroup({
    
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required])
    });
  }
 
  submit(){
    
    console.log(this.form.value); 
    this.employeeservice.update(this.id,this.form.value).subscribe(data=> {
         console.log(data);
         this.router.navigate(['/employees']);
    })
  }
}
