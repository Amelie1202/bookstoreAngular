import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Etagere} from'../models/etagere';

@Injectable({
  providedIn: 'root'
})
export class EtagereService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Etagere[]>("http://localhost:8080/etageres").pipe()
  }

  getOne(id:number){ 
return this.http.get<Etagere>("http://localhost:8080/etageres/"+id).pipe()
  }

  deleteOne(id:number){ 
    return this.http.delete("http://localhost:8080/etageres/delete2/"+id).pipe() 
  }
  addNew(etagere: Etagere){

    return this.http.post("http://localhost:8080/etageres", etagere).pipe()  
  }

  update(etagere: Etagere, id:number){
    return this.http.put("http://localhost:8080/etageres/"+id, etagere).pipe() 
  }

}
