import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent implements OnInit {

  constructor(private service:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  doLogOut()
  {
    this.service.logOut();
    this.router.navigateByUrl("/login");
  }


}
