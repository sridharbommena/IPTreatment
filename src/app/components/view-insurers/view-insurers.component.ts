import { Component, OnInit } from '@angular/core';
import { InsurerDetail } from 'src/app/models/InsurerDetail';
import { InsuranceClaimServiceService } from 'src/app/service/insurance-claim-service/insurance-claim-service.service';

@Component({
  selector: 'view-insurers',
  templateUrl: './view-insurers.component.html',
  styleUrls: ['./view-insurers.component.css']
})
export class ViewInsurersComponent implements OnInit {

  insurers:InsurerDetail[] = [];

  constructor(private service:InsuranceClaimServiceService) { }

  isFailure:boolean=false;
  FailureMsg:string="";
  dataAvailable:boolean=false;

  ngOnInit(): void {
    this.service.getInsurers().subscribe(
      (success)=>{
        this.insurers = success;
        this.dataAvailable = true;
      },
      (error)=>
      {
        this.dataAvailable = false;
        this.isFailure = true;
        this.FailureMsg = "Error While retrieving Insurer list";
        console.log(this.FailureMsg);
      });
  }

}
