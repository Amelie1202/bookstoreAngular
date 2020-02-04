import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Livre} from'../models/livre';


@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http:HttpClient ) {}
  
  getAll(){
    return this.http.get<Livre[]>("http://localhost:8080/livres").pipe()
  }

  getOne(id:number){ 
return this.http.get<Livre>("http://localhost:8080/livres/"+id).pipe()
  }

  deleteOne(id:number){ 
    return this.http.delete("http://localhost:8080/livres/"+id).pipe() 
  }
  addNew(livre: Livre){

    return this.http.post("http://localhost:8080/livres", livre).pipe()  
  }

  update(livre:Livre, id:number){
    return this.http.put("http://localhost:8080/livres/"+id, livre).pipe() 
  }



}
  


  

