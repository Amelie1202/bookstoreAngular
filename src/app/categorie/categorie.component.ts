import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  newCategorie: Categorie = new Categorie();


  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
  }
  addCategorie() {
    this.categorieService.addNew(this.newCategorie).subscribe(
      data => {

      }
    )
  }


}
