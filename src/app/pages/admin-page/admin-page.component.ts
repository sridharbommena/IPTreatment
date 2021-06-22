import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private service:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  handleLogout()
  {
    this.service.logOut();
    this.router.navigateByUrl("/login");
  }

}
