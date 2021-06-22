import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InitiateClaim } from 'src/app/models/InitiateClaim';
import { InsurerDetail } from 'src/app/models/InsurerDetail';
import { LoginServiceService } from '../login-service.service';

@Injectable({
  providedIn: 'root'
})
export class InsuranceClaimServiceService {

  baseUrl : string = "http://localhost:8500/portal"; 

  constructor(private http:HttpClient,private loginService:LoginServiceService) { }

  getInsurers():Observable<InsurerDetail[]>
  {
    //headers will be automatically set for every request by Interceptor
    return this.http.get<InsurerDetail[]>(this.baseUrl + "/getAllInsurerDetail");
  }

  initiateClaimRequest(initiateClaim:InitiateClaim):Observable<number>
  {
    return this.http.post<number>(this.baseUrl + "/initiateClaim",initiateClaim);
  }


}
