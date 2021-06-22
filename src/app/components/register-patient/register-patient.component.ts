import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators ,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { IptreatmentServiceService } from 'src/app/service/ipTreatment-service/iptreatment-service.service';
import { first } from 'rxjs/operators';

import * as $ from 'jquery';
@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {

  ailment:string[] = ["ORTHOPAIDICS","UROLOGY"];
  package:string[] = ["Package 1","Package 2"] ;
  
  constructor(private form:FormBuilder,
    private service:IptreatmentServiceService,
    private route:Router) {
      // this.Validation();
     }
  
  ngOnInit(): void {
  }
  
  today:Date=new Date();
  isSuccess = false;
  isFailure = false;
  FailureMsg = "";
  utilErrorMsg:string = "";

  registerForm = this.form.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    aadharNumber:['', Validators.required],
    ailment: ['', Validators.required],
    treatmentPackageName: ['', [Validators.required]],
    treatmentCommencementDate: ['', [Validators.required]]
});
  
  validate():boolean{
    var re = /^[A-Z a-z]+$/;
    var pattern=/^\d{4}\d{4}\d{4}$/ ;

    if(!re.test(this.registerForm.get("name").value))
    {
      this.isFailure = true;
      this.FailureMsg = "Enter name using characters only";
      this.isSuccess = false;
      return false;
    }
    if(!(this.registerForm.get("age").value>=1 && this.registerForm.get("age").value<=110))
    {
      this.isFailure = true;
      this.FailureMsg = "Enter valid age between 1 to 110";
      this.isSuccess = false;
      return false;
    }
    if(!pattern.test(this.registerForm.get("aadharNumber").value)){
      this.isFailure = true;
      this.FailureMsg = "Enter Valid Aadhar number";
      this.isSuccess = false;
      return false;
    }
    else
    {
      this.isFailure = false;
      this.FailureMsg = "";
      this.isSuccess = false;
      return true;
    }
  }

  onSubmit() {
    
    if(this.registerForm.valid)
    {
        if(this.validate())
        {
          this.service.register(this.registerForm.value).subscribe(
            (success)=>{
              this.isFailure = false;
                this.FailureMsg = "";
              this.isSuccess = true;
            },
            (error)=>{
              this.isSuccess = false;
              this.isFailure = true;
              this.FailureMsg = error.error.message;
            });
        }      
    }
    else
    {
      this.isSuccess = false;
      this.isFailure = true;
      this.FailureMsg = "Please enter valid details!";
    }
  
  }

  getToday():string
  {
    var date = new Date();

    var month;
    var day;

    if((date.getMonth()+1).toString().length==1)
    {
      month = "-0"+(date.getMonth()+1)
    }
    else
    {
      month = "-"+(date.getMonth()+1)
    }
    if((date.getDate()).toString().length==1)
    {
      day = "-0"+(date.getDate());
    }
    else
    {
      day = "-"+(date.getDate());
    }
    
    return date.getFullYear()+month+day;
  }

}
