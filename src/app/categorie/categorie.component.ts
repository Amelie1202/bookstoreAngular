import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie';
import { CategorieService } from '../service/categorie.service';
import Swal from'sweetalert2'; //swal pour les alertes dans le ts

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
        if (data["idCategorie"]==null){

        }else {
           
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'La Categorie est ajoutée!',
  showConfirmButton: false,
  timer: 3000
})
        }

      }
    )
  }
}
        
