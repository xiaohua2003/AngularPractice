import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse} from '@angular/common/http'
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url:string="/assets/employees2.json"
  constructor(private http:HttpClient) {}
   getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(catchError((error)=>{
return throwError(()=>new Error (error.message))
    }))
  }
 
}