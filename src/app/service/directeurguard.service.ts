import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GetguardService } from './getguard.service';

@Injectable({
  providedIn: 'root'
})
export class DirecteurguardService {
 


  constructor(private router: Router, private getguard: GetguardService) { }

  canActivate(){
    if(this.getguard.getRole()==1){

    
    return true;
  }
  return false;

}
}
