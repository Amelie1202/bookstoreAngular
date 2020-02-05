import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Categorie} from'../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<Categorie[]>("http://localhost:8080/categories").pipe()
  }

  getOne(id:number){ 
return this.http.get<Categorie>("http://localhost:8080/categories/"+id).pipe()
  }

  deleteOne(id:number){ 
    return this.http.delete("http://localhost:8080/categories/delete2/"+id).pipe() 
  }
  addNew(categorie: Categorie){

    return this.http.post("http://localhost:8080/categories", categorie).pipe()  
  }

  update(categorie: Categorie, id:number){
    return this.http.put("http://localhost:8080/categories/"+id, categorie).pipe() 
  }


}
