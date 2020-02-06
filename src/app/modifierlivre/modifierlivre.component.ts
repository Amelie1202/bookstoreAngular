import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/livre';
import { LivreService } from '../service/livre.service';
import{ActivatedRoute} from '@angular/router';
import { Categorie } from '../models/categorie';
import { Auteur } from '../models/auteur';
import { Etagere } from '../models/etagere';
import { AuteurService } from '../service/auteur.service';
import { CategorieService } from '../service/categorie.service';
import { EtagereService } from '../service/etagere.service';

@Component({
  selector: 'app-modifierlivre',
  templateUrl: './modifierlivre.component.html',
  styleUrls: ['./modifierlivre.component.css']
})
export class ModifierlivreComponent implements OnInit {
  idLivre: number;
livre: Livre= new Livre();
auteur = new Auteur();
categorie = new Categorie();
etagere = new Etagere();
listAuteur: Auteur[]=[];
listCategorie: Categorie[]=[];
listEtagere: Etagere[]=[];


  constructor(private livreService: LivreService, private auteurService: AuteurService, private categorieService: CategorieService, private etagereService: EtagereService, private route: ActivatedRoute) {
    this.idLivre = parseInt(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    this.livreService.getOne(this.idLivre).subscribe(
      data => {
        this.livre = data;
      }
    );
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
  update(){
    this.livreService.update(this.livre,this.idLivre).subscribe(
      data =>{
       
      }
    )
      }

}
