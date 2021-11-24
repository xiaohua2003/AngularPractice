import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

  public employees:any={}
  constructor(private _employeeService:EmployeeService) { 
    
  }
 public employeeMessage
  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data=>{this.employeeMessage=data
      this.employees=data
    console.log(this.employees)
    })
  }

}
