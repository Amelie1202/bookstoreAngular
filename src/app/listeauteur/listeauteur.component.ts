import { Component, OnInit } from '@angular/core';
import { Auteur } from '../models/auteur';
import {AuteurService} from'../service/auteur.service';
import Swal from'sweetalert2'; //swal pour les alertes dans le ts 
import { LivreService } from '../service/livre.service';
import { Livre } from '../models/livre';
import { faFeather} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listeauteur',
  templateUrl: './listeauteur.component.html',
  styleUrls: ['./listeauteur.component.css']
})
export class ListeauteurComponent implements OnInit {
  faFeather = faFeather;
  listAuteur:Auteur[] = [];
  listLivreAuteur: Livre[]=[];
  constructor(private auteurService: AuteurService, private livreService: LivreService) { }

  ngOnInit() {
    this.auteurService.getAll().subscribe(
      data => {this.listAuteur = data;
 
      } 
     )
  }
  delete(id:number){
    this.auteurService.deleteOne(id).subscribe(
      data =>{
        if(data==true){
          this.ngOnInit(); 
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Erreur!',
            text: 'Cet auteur est lié à un livre, vous ne pouvez pas le supprimer',
            footer: '<a href>Veuillez choisir un autre auteur</a>'
          })
        }
      }
    )
      }

      afficherLivre(idAuteur: number){
        this.livreService.findByAuteur(idAuteur).subscribe(
          data => {this.listLivreAuteur = data;
 
          } 

        )
      }
}
