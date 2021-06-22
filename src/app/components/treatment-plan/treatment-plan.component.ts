import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreatmentPlan } from 'src/app/models/TreatmentPlan';
import { PortalServiceService } from 'src/app/service/portal-service/portal-service.service';

@Component({
  selector: 'app-treatment-plan',
  templateUrl: './treatment-plan.component.html',
  styleUrls: ['./treatment-plan.component.css']
})
export class TreatmentPlanComponent implements OnInit {

  id:number=0;
  treatmentPlan:TreatmentPlan[]=[];
  constructor(private portalService:PortalServiceService,private router:Router) { }
  

  ngOnInit(): void {
    this.portalService.getTreatmentPlan().subscribe(data=>{
        this.treatmentPlan=data;
        // console.log(data);
    });
  }

}
