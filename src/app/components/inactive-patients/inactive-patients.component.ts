import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientDetails } from 'src/app/models/PatientDetails';
import { TreatmentPlan } from 'src/app/models/TreatmentPlan';
import { PortalServiceService } from 'src/app/service/portal-service/portal-service.service';

@Component({
  selector: 'app-inactive-patients',
  templateUrl: './inactive-patients.component.html',
  styleUrls: ['./inactive-patients.component.css']
})
export class InactivePatientsComponent implements OnInit {

  id:number=0;
  patients:TreatmentPlan[]=[];
  constructor(private portalService:PortalServiceService,private router:Router) { }
  

  ngOnInit(): void {
    this.portalService.getInActivePatients().subscribe(data=>{
        this.patients=data;
        
        
      });
  }

}
