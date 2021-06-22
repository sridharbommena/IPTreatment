import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenResponse } from 'src/app/models/TokenResponse';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  
  constructor(private form:FormBuilder,private service:LoginServiceService, private route:Router) { }
  
  ngOnInit(): void {
    
    if(this.service.isLoggedIn())
    {
      if(this.service.getUser()=='admin')
      this.route.navigate(["/admin"]);
      if( this.service.getUser()!=null  && this.service.getUser().startsWith("user") )
      this.route.navigate(["/user"]);
    }

  }

  errorMessage = "";

  UserDetails = this.form.group({

    userName : new FormControl("", Validators.required),
    password : ["", Validators.required],
  });

  get userName()
  {
    return this.UserDetails.get('userName');
  }

  get password()
  {
    return this.UserDetails.get('password');
  }

  handleSubmit()
  {
    if(this.UserDetails.valid)
    {
      this.service.authenticate(this.UserDetails.value).subscribe((success:TokenResponse)=>{
          this.errorMessage="";
          this.service.loginUser(success.token);
          this.service.saveUser(this.userName.value);
          if(this.service.getUser()=='admin')
            this.route.navigate(["/admin"]);
          if(  this.service.getUser()!=null  &&  this.service.getUser().startsWith("user") )
            this.route.navigate(["/user"]);
        },
        error =>
        {
          this.errorMessage = "Invalid Credentials";
        }
      )
    }
 
  }

}
