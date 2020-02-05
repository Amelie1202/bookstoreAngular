import { Component, OnInit } from '@angular/core';
import { Auteur } from '../models/auteur';
import { AuteurService } from '../service/auteur.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modifierauteur',
  templateUrl: './modifierauteur.component.html',
  styleUrls: ['./modifierauteur.component.css']
})
export class ModifierauteurComponent implements OnInit {
idAuteur: number;
auteur: Auteur= new Auteur();
  constructor(private auteurService: AuteurService, private route: ActivatedRoute) {
    this.idAuteur = parseInt(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    this.auteurService.getOne(this.idAuteur).subscribe(
      data => {
        this.auteur = data;
      }
    )
    
  }
  update(){
    this.auteurService.update(this.auteur,this.idAuteur).subscribe(
      data =>{
       
      }
    )
      }

}
