import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenResponse } from '../models/TokenResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  baseUrl : string = "http://localhost:8500/portal"; 

  constructor(private http:HttpClient) { }

  authenticate(userDetails):Observable<TokenResponse>
  {
    return this.http.post<TokenResponse>(this.baseUrl + "/login",userDetails);
  }

  loginUser(token)
  {
    sessionStorage.setItem("token",token);

    // setTimeout(function() { sessionStorage.clear(); }, ( 30 * 60 * 1000));

    // console.log(token);
    return true;
  }

  saveUser(username)
  {
    sessionStorage.setItem("user",username);
    return true;
  }

  getUser()
  {
    return sessionStorage.getItem("user");
  }

  isLoggedIn()
  {
    let token = sessionStorage.getItem("token");
    if(token==null || token==undefined || token=="")
      return false;
    else
      return true;
  }
  
  logOut()
  {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    return true;
  }

  getToken()
  {
    return sessionStorage.getItem("token");
  }
  
}
