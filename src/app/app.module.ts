import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PracticeComponent } from './practice/practice.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { EmployeeService } from './employee.service';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PracticeComponent,
    Service1Component,
    Service2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
