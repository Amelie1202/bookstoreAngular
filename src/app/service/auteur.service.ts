import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Auteur} from'../models/auteur';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Auteur[]>("http://localhost:8080/auteurs").pipe()
  }

  getOne(id:number){ 
return this.http.get<Auteur>("http://localhost:8080/auteurs/"+id).pipe()
  }

  deleteOne(id:number){ 
    return this.http.delete("http://localhost:8080/auteurs/"+id).pipe() 
  }
  addNew(auteur:Auteur){

    return this.http.post("http://localhost:8080/auteurs", auteur).pipe()  
  }

  update(auteur:Auteur, id:number){
    return this.http.put("http://localhost:8080/auteurs/"+id, auteur).pipe() 
  }



}

