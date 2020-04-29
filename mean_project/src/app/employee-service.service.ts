import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';
import { apiInfo , environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  constructor(private http: HttpClient) { }
  configUrl = environment.baseUrl +"/"+ apiInfo.info.get_emp;
  configPostUrl = environment.baseUrl +"/"+ apiInfo.info.post_emp;
  configOneEmp =  environment.baseUrl;
  configDeleteEmployee = environment.baseUrl;
    
    getConfig():Observable<any> {
     return this.http.get(this.configUrl);
    }

    insertUserDetails( post:Post ):Observable<any>{
      return this.http.post(this.configPostUrl, post);
    }

    getEmployeeDetails(id:number):Observable<any> {
      return this.http.get<any[]>(this.configOneEmp +"/"+ id );
    }

    // Update item by id
    // updateEmployee(id, item): Observable<any> {
    //   console.log("id",id);
    //   console.log("item",item)

    // return this.http
    //   .put<any>(this.configOneEmp + id, item);
    // }


  updateEmployee (id, item): Observable<any> {
    return this.http.put<any>(this.configOneEmp+"/"+id, item);
  }

    deleteEmployee(empId:number):Observable<any>{
      return this.http.delete(this.configDeleteEmployee+"/"+empId);
    }
    
}
