import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie';
import { CategorieService } from '../service/categorie.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modifiercategorie',
  templateUrl: './modifiercategorie.component.html',
  styleUrls: ['./modifiercategorie.component.css']
})
export class ModifiercategorieComponent implements OnInit {
  idCategorie: number;
categorie: Categorie= new Categorie();

  constructor(private categorieService: CategorieService, private route: ActivatedRoute) { 
    this.idCategorie = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.categorieService.getOne(this.idCategorie).subscribe(
      data => {
        this.categorie = data;
      }
    )
  }

  update(){
    this.categorieService.update(this.categorie,this.idCategorie).subscribe(
      data =>{
       
      }
    )
  }
}
