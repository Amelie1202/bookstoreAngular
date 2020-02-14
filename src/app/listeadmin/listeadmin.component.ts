import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-listeadmin',
  templateUrl: './listeadmin.component.html',
  styleUrls: ['./listeadmin.component.css']
})
export class ListeadminComponent implements OnInit {
  listUtilisateur: Utilisateur[] = [];
  idRole=2;

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.utilisateurService.findByRole(this.idRole).subscribe(
      data => {
        this.listUtilisateur = data;
      }
    )
  }
  delete(id:number){
    this.utilisateurService.deleteOne(id).subscribe(
      data =>{
        if(data==true){
          this.ngOnInit(); 
        }
        else {
          console.log("error")
        }
      }
    )
      }

}
