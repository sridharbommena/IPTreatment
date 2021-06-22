import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{SpecialistsDetails} from '../../models/SpecialistsDetails'
import { Observable } from 'rxjs';
import { IpTreatmentPackages } from 'src/app/models/IpTreatmentPackages';

@Injectable({
  providedIn: 'root'
})
export class IpTreatmentOfferingServiceService {

  baseUrl : string = "http://localhost:8500/portal"; 
  
  constructor(private http:HttpClient) { }

  getSpecialists():Observable<SpecialistsDetails[]>{
    return this.http.get<SpecialistsDetails[]>(this.baseUrl + "/specialists");
  }

  getPackages():Observable<IpTreatmentPackages[]>{
    return this.http.get<IpTreatmentPackages[]>(this.baseUrl + "/ipTreatmentPackages");
   }


}
