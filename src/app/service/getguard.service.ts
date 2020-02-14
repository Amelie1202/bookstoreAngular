import { Injectable } from '@angular/core';
 
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class GetguardService {
  token : any; 
idRole; 

  constructor() { }
  getRole(){
    if(localStorage.getItem("token")){
      this.token = jwt_decode(localStorage.getItem('token'))
      return this.idRole = this.token['idUtilisateur']
    }
  }}


