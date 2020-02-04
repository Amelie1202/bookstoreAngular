import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../service/categorie.service';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-listecategorie',
  templateUrl: './listecategorie.component.html',
  styleUrls: ['./listecategorie.component.css']
})
export class ListecategorieComponent implements OnInit {
  listCategorie: Categorie[] = [];

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.categorieService.getAll().subscribe(
      data => {this.listCategorie = data;
 
      } 
     )
  }
  delete(id:number){
    this.categorieService.deleteOne(id).subscribe(
      data =>{
        this.ngOnInit(); 
      }
    )
      }

}
