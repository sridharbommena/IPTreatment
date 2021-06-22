import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {

  constructor(private service:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  doLogOut()
  {
    this.service.logOut();
    this.router.navigateByUrl("/login");
  }

}
