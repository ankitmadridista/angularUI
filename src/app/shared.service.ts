import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://localhost:61075/api";
readonly PhotoUrl = "http://localhost:61075/Photos";

  constructor( private http:HttpClient) { }

  //dept
  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/department', val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/department', val);
  }

  deleteDepartment(id:number){
    return this.http.delete(this.APIUrl+'/department/'+ id);
  }

  //emp
  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/employee', val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/employee', val);
  }

  deleteEmployee(id:number){
    return this.http.delete(this.APIUrl+'/employee/'+ id);
  }

  uploadPhotot(val:any){
    return this.http.post(this.APIUrl+'/employee/SaveFile', val);
  }

  getAllDeptList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }

}
