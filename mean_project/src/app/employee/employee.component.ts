import { Component } from '@angular/core';
import { FormControl , FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-employee',
    templateUrl : 'employee.component.html'
})

export class EmployeeComponent
{
  
    title = 'Practicle';
    firstName = '';
    lastName ='';
    passWord = '';
    companyName= '';
    contactNumber = '';
    messageUser = '';
    empId = '';
    formdata:any;
   constructor(private fb : FormBuilder ,private myservice: EmployeeServiceService ,private route:ActivatedRoute) {
   }
   MyForm = this.fb.group({
         fname : ['',Validators.required],
         lname : [''],
         password : [''],
         companyname : [''],
         contactNo : [''],
         message : [''],
         empId : ['']
     
       });
   

    ngOnInit() {
        this.route.paramMap.subscribe(
          (params) => {
            const EmpId = +params.get('id');
            if(EmpId === 0)
            {
                this.addEmployee();
            }
            else{
                this.getEmployee(EmpId);
            }
          }
        )
      }
  
    getEmployee(id:number){

        this.myservice.getEmployeeDetails(id).subscribe(
            data=>
            {
                this.editEmployee(data)
            }
        );
    }

    editEmployee(employee:any){
        this.MyForm.patchValue({
            fname : employee.fname,
            lname:employee.lname,
            password:employee.password,
            companyname:employee.companyname,
            contactNo:employee.contactNo,
            message:employee.message,
            empId:employee.id
        });

    }

    addEmployee(){
        this.MyForm.patchValue({
            fname : "",
            lname:"",
            password:"",
            companyname:"",
            contactNo:"",
            message:"",
            empId:0
        });
        //this.MyForm.reset();

    }
    // onSubmit(){
    //     this.formdata = this.MyForm.value
    //     //console.log("Form-data",this.formdata)
    //     this.myservice.insertUserDetails( this.formdata )
    //     .subscribe(
    //         data=>
    //         {
    //             console.log(data)
                
    //         }
    //     );
    // }


    onSubmit(){
        this.formdata = this.MyForm.value

        if(this.formdata.empId!=0){
                this.myservice.updateEmployee(this.formdata.empId, this.formdata )
                .subscribe(
                    data=>
                    {
                        console.log(data)
                        
                    }
                );
        }
        else{
            this.myservice.insertUserDetails( this.formdata )
                .subscribe(
                    data=>
                    {
                        console.log(data)
                        
                    }
                );

        }
        
        console.log("Form-data",this.formdata)
        
    }

      
}