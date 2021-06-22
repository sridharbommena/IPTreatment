import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { PatientDetails } from 'src/app/models/PatientDetails';

@Injectable({
  providedIn: 'root'
})
export class IptreatmentServiceService {

  constructor(private http:HttpClient,private router: Router) {}

  baseUrl : string = "http://localhost:8500/portal"; 

  register(patient: PatientDetails) {
    return this.http.post(this.baseUrl + "/treatmentRegister", patient);
  }
}
