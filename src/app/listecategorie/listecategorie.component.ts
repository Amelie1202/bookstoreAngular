import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../service/categorie.service';
import { Categorie } from '../models/categorie';
import { LivreService } from '../service/livre.service';
import { Livre } from '../models/livre';
import Swal from'sweetalert2';
import { faList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listecategorie',
  templateUrl: './listecategorie.component.html',
  styleUrls: ['./listecategorie.component.css']
})
export class ListecategorieComponent implements OnInit {
  faList=faList;
  listCategorie: Categorie[] = [];
listLivreCategorie: Livre[]=[];
  constructor(private categorieService: CategorieService, private livreService: LivreService) { }

  ngOnInit() {
    this.categorieService.getAll().subscribe(
      data => {this.listCategorie = data;
 
      } 
     )
  }
  delete(id:number){
    this.categorieService.deleteOne(id).subscribe(
      data =>{
        if(data==true){
          this.ngOnInit(); 
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Erreur!',
            text: 'Cette catégorie est liée à un livre, vous ne pouvez pas la supprimer',
            footer: '<a href>Veuillez choisir une autre catégorie</a>'
          })
        }
      }
    )
      }
      afficherLivre(idCategorie: number){
        this.livreService.findByCategorie(idCategorie).subscribe(
          data => {this.listLivreCategorie = data;
 
          } 

        )
      }

}
