import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AilmentCategory } from 'src/app/models/AilmentCategory';
import { IpTreatmentPackages } from 'src/app/models/IpTreatmentPackages';
import { IpTreatmentOfferingServiceService } from 'src/app/service/ipTreatment-offering-service/ip-treatment-offering-service.service';

@Component({
  selector: 'app-iptreatment-packages',
  templateUrl: './iptreatment-packages.component.html',
  styleUrls: ['./iptreatment-packages.component.css']
})
export class IptreatmentPackagesComponent implements OnInit {

  ipTreatmentPackage:IpTreatmentPackages[]=[];
  filteredPackages:IpTreatmentPackages[] = this.ipTreatmentPackage;

  ailment:string[] = ["ORTHOPAIDICS","UROLOGY"];
  package:string[] = ["Package 1","Package 2"] ;
  
  constructor(private specialistService:IpTreatmentOfferingServiceService,private form:FormBuilder) { }

  ngOnInit(): void {
      this.loadData();
  }

  searchOptions = this.form.group({

    ailment_name : new FormControl("", Validators.required),
    package_name : ["", Validators.required],
  });

  get ailment_name()
  {
    return this.searchOptions.get('ailment_name');
  }

  get package_name()
  {
    return this.searchOptions.get('package_name');
  }

 

  handleSubmit()
  {
    
     this.filteredPackages =  this.ipTreatmentPackage.filter(i=>{

            if(i.ailmentCategory.toString() == this.ailment_name.value && i.packageDetail.treatmentPackageName==this.package_name.value)
              return true;
            else
              return false;
     });

  }


  loadData()
  {
    this.specialistService.getPackages().subscribe((data)=>{
      this.ipTreatmentPackage=data;
      this.filteredPackages=data;
    });
  }

  clearFilters()
  {
    this.filteredPackages = this.ipTreatmentPackage;
    this.ailment_name.setValue("");
    this.package_name.setValue("");
  }
  
}
