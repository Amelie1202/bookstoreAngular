import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/livre';
import { LivreService } from '../service/livre.service';
import { Auteur } from '../models/auteur';
import { Categorie } from '../models/categorie';
import { Etagere } from '../models/etagere';
import { AuteurService } from '../service/auteur.service';
import { CategorieService } from '../service/categorie.service';
import { EtagereService } from '../service/etagere.service';
import Swal from'sweetalert2'; //swal pour les alertes dans le ts
import { Utilisateur } from '../models/utilisateur';


@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  newLivre: Livre = new Livre();
  livre = new Livre();
  auteur = new Auteur();
  categorie = new Categorie();
  etagere = new Etagere();
  listAuteur: Auteur[]=[];
  listCategorie: Categorie[]=[];
  listEtagere: Etagere[]=[];
  utilisateur = new Utilisateur();

  constructor(private livreService: LivreService, private auteurService: AuteurService, private categorieService: CategorieService, private etagereService: EtagereService) { }

  ngOnInit() {
    this.auteurService.getAll().subscribe(
      data => {
        this.listAuteur = data;
      }
    );
    this.categorieService.getAll().subscribe(
      data => {
        this.listCategorie = data;
      }
    );
    this.etagereService.getAll().subscribe(
      data => {
        this.listEtagere = data;
      }
    );
  }
  
  addLivre() {
    this.livreService.addNew(this.newLivre).subscribe(
      data => {
        if (data["idLivre"]==null){

        }else {
           
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Le livre est ajouté!',
  showConfirmButton: false,
  timer: 3000
})
        }

      }
    )
  }

  affecterAuteur() {
    this.livreService.getOne(this.livre.idLivre).subscribe(
      data => {
        this.livre = data;
        this.livre.auteur = this.auteur.idAuteur;
        console.log(this.livre);

        this.livreService.affecterAuteur(this.livre.idLivre, this.auteur.idAuteur).subscribe(
          data => {
          }
        );

      }
    )
  }
  affecterCategorie() {
    this.livreService.getOne(this.livre.idLivre).subscribe(
      data => {
        this.livre = data;
        this.livre.categorie = this.categorie.idCategorie;
        console.log(this.livre);

        this.livreService.affecterCategorie(this.livre.idLivre, this.categorie.idCategorie).subscribe(
          data => {
          }
        );

      }
    )
  }
  affecterEtagere() {
    this.livreService.getOne(this.livre.idLivre).subscribe(
      data => {
        this.livre = data;
        this.livre.etagere = this.etagere.idEtagere;
        console.log(this.livre);

        this.livreService.affecterEtagere(this.livre.idLivre, this.etagere.idEtagere).subscribe(
          data => {
          }
        );

      }
    )
  }

  
}


