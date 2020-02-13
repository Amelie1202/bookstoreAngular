import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router:Router) { } //besoin du router pour rediriger la page

  canActivate(){
    if (localStorage.getItem("token")){ //si on est connecte donc un token, c est true
      return true;
    }
    this.router.navigate(['/utilisateur']) //remplacer notre route
    return false;
  }
}
