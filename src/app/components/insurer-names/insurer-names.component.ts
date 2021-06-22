import { DepFlags } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AilmentCategory } from 'src/app/models/AilmentCategory';
import { InitiateClaim } from 'src/app/models/InitiateClaim';
import { InsurerDetail } from 'src/app/models/InsurerDetail';
import { InsuranceClaimServiceService } from 'src/app/service/insurance-claim-service/insurance-claim-service.service';

@Component({
  selector: 'insurer-names',
  templateUrl: './insurer-names.component.html',
  styleUrls: ['./insurer-names.component.css']
})
export class InsurerNamesComponent implements OnInit {

  insurerNames:InsurerDetail[] = []
  constructor(private service:InsuranceClaimServiceService,private router:ActivatedRoute,private form:FormBuilder) { }

  patientName:string;
  ailment:AilmentCategory;
  ailmentString:string;
  balanceAmountToBePaid:number;
  displayTable:boolean = false;

  ngOnInit(): void {
    this.getInsurerNames();
    this.patientName = this.router.snapshot.paramMap.get('name');
    this.ailmentString = this.router.snapshot.paramMap.get('ailment');

    if(this.ailmentString=="UROLOGY")
      this.ailment=AilmentCategory.UROLOGY;
    else
      this.ailment=AilmentCategory.ORTHOPAIDICS;
  }

  errorMessage = "";
  isFailure = false;

  initiateClaim:InitiateClaim;

  insurerName = this.form.group({
    insurer : new FormControl("", Validators.required),
  });

  get insurer()
  {
    return this.insurerName.get('insurer');
  }

  getInsurerNames()
  {
    this.service.getInsurers().subscribe(
      (success)=>{
        this.insurerNames = success;
      },
      (error:string)=>{
        console.log(error);
      });
  }

  handleSubmit()
  {
    if(confirm("Are you sure you want to initiate claim ?")) {
      console.log("Initiating claim...");

      this.initiateClaim = { id: 1 , ailment:this.ailment,patientName:this.patientName,insurerName:this.insurer.value };

      this.service.initiateClaimRequest(this.initiateClaim).subscribe(
        (data)=>{
          this.balanceAmountToBePaid=data;
          this.displayTable =true
          this.isFailure = false;
        },(error)=>{
          this.isFailure = true;
          this.errorMessage = error.error.message;
          this.displayTable = false;
        });
    }

  }

}
