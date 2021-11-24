import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {
  employees=[]
  public errorMsg;
  constructor(private _employeeService:EmployeeService) { 
   
  }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data=>this.employees=data, 
    error=>this.errorMsg=error )
  }

}
