import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpTreatmentOfferingServiceService } from 'src/app/service/ipTreatment-offering-service/ip-treatment-offering-service.service';
import{SpecialistsDetails} from '../../models/SpecialistsDetails';

@Component({
  selector: 'app-specialist-list',
  templateUrl: './specialist-list.component.html',
  styleUrls: ['./specialist-list.component.css']
})
export class SpecialistListComponent implements OnInit {

  specialists:SpecialistsDetails[]=[];
  constructor(private specialistService:IpTreatmentOfferingServiceService) { }

  isFailure:boolean=false;
  FailureMsg:string="";
  dataAvailable:boolean=false;

  ngOnInit(): void {
    this.specialistService.getSpecialists().subscribe(data=>{
      this.specialists=data;
      this.dataAvailable=true;
    },
    (error)=>
    {
      this.dataAvailable=false;
      this.isFailure = true;
      this.FailureMsg = "Error While retrieving Specialist list"
    });
  }

}
