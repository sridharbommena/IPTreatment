import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PatientDetails } from 'src/app/models/PatientDetails';
import { LoginServiceService } from '../login-service.service';
import { TreatmentPlan } from 'src/app/models/TreatmentPlan';

@Injectable({
  providedIn: 'root'
})
export class PortalServiceService {

  baseUrl : string = "http://localhost:8500/portal"; 

  constructor(private http:HttpClient,private loginService:LoginServiceService) { }

  getActivePatients():Observable<PatientDetails[]>
  {
    //headers will be automatically set for every request by Interceptor
    return this.http.get<PatientDetails[]>(this.baseUrl + "/activePatients");
  }

  getInActivePatients():Observable<TreatmentPlan[]>
  {
    return this.http.get<TreatmentPlan[]>(this.baseUrl + "/inActivePatients");
  }

  getTreatmentPlan():Observable<TreatmentPlan[]>{
    return this.http.get<TreatmentPlan[]>(this.baseUrl + "/trackTreatment");
  }

}
