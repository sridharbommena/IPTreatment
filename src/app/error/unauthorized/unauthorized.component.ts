import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  constructor(private service:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  handleClick()
  {
    if(this.service.getUser()==null)
    {
      this.router.navigateByUrl("/");
    }
    else
    {
      if(this.service.getUser()=="admin")
      {
        this.router.navigateByUrl("/admin");
      }
      else if(this.service.getUser().startsWith("user"))
      {
        this.router.navigateByUrl("/user");
      }
      else
      {
        this.router.navigateByUrl("/");
      }
    }
  }

}
