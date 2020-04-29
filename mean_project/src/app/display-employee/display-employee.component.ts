import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  constructor(private apiServices : EmployeeServiceService ,private router: Router ) {
  }
  listcomment=[];
  empId : number;
  ngOnInit() {
    this.apiServices.getConfig()
         .subscribe(
           data=>
           {
             this.listcomment = data;
             console.log( this.listcomment );
           }
         );
  }

  editEmployee(empId:number){
    this.router.navigate(['/edit',empId]);
  }
  
  deleteEmployee(empid){
    this.apiServices.deleteEmployee(empid)
    .subscribe(
      data=>{
        console.log(data)
      }
    );

  }



}
