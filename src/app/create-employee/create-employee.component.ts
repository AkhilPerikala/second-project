import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  form!: FormGroup;
  constructor(private employeeservice:EmployeeService,private router:Router) { }
  ngOnInit(): void {
    this.form=new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      emailId:new FormControl('',[Validators.required])
})
 }
 onsubmit(){
   console.log(this.form.value);
   this.employeeservice.create(this.form.value).subscribe(data=>{
     console.log(data);
     this.router.navigate(['/employees']);
   })
 }


}
