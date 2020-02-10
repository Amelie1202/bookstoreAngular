import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modifierutilisateur',
  templateUrl: './modifierutilisateur.component.html',
  styleUrls: ['./modifierutilisateur.component.css']
})
export class ModifierutilisateurComponent implements OnInit {
  idUtilisateur: number;
  utilisateur: Utilisateur= new Utilisateur();

  constructor(private utilisateurService: UtilisateurService, private route: ActivatedRoute) { 
    this.idUtilisateur = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.utilisateurService.getOne(this.idUtilisateur).subscribe(
      data => {
        this.utilisateur = data;
      }
    )
  }

  update(){
    this.utilisateurService.update(this.utilisateur,this.idUtilisateur).subscribe(
      data =>{
       
      }
    )
      }
}
