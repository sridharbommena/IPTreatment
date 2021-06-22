import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreatmentPlan } from 'src/app/models/TreatmentPlan';
import { PortalServiceService } from 'src/app/service/portal-service/portal-service.service';
import{ PatientDetails } from '../../models/PatientDetails';
@Component({
  selector: 'app-active-patients',
  templateUrl: './active-patients.component.html',
  styleUrls: ['./active-patients.component.css']
})
export class ActivePatientsComponent implements OnInit {
  id:number=0;
  patients:PatientDetails[]=[];
  constructor(private portalService:PortalServiceService,private router:Router) { }

  ngOnInit(): void {
    this.portalService.getActivePatients().subscribe(data=>{
      this.patients=data;
      
      
    });
  }
  handleClick(patient:PatientDetails)
  {
    if(confirm("Are you sure you want to mark this patient as complete ?")) {
      this.router.navigate(['/admin/insurers-names',patient.name,patient.ailment]);
      
    }  
  }

}
