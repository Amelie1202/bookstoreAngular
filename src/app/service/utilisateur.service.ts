import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) {}

  getAll(){
    return this.http.get<Utilisateur[]>("http://localhost:8080/utilisateurs").pipe()
  }

  getOne(id:number){ 
return this.http.get<Utilisateur>("http://localhost:8080/utilisateurs/"+id).pipe()
  }

  deleteOne(id:number){ 
    return this.http.delete("http://localhost:8080/utilisateurs/delete2/"+id).pipe() 
  }
  addNew(utilisateur: Utilisateur){

    return this.http.post("http://localhost:8080/utilisateurs/", utilisateur).pipe()  
  }

  update(utilisateur:Utilisateur, id:number){
    return this.http.put("http://localhost:8080/utilisateurs/"+id, utilisateur).pipe() 
  }

  findByLogin(utilisateur:Utilisateur){
    return this.http.post("http://localhost:8080/utilisateurs/login/", utilisateur).pipe()
 }

 authentification2(utilisateur:Utilisateur){
   return this.http.post("http://localhost:8080/utilisateurs/authentif/", utilisateur).pipe()
 }
 findByRole(idRole: number){
  return this.http.get<Utilisateur[]>("http://localhost:8080/utilisateurs/byRole/"+idRole).pipe()
 }
}
