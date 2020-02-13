import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { Role } from '../models/role';
import { UtilisateurService } from '../service/utilisateur.service';
import { RoleService } from '../service/role.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  newUtilisateur: Utilisateur= new Utilisateur();
  listUtilisateur: Utilisateur[]=[];
  listRole: Role[]=[];
  idUtilisateur: number;
  constructor(private utilisateurService: UtilisateurService, private roleService: RoleService) {
    
   }

  ngOnInit() {
    this.utilisateurService.getAll().subscribe(
      data => {
        this.listUtilisateur = data;
      }
    );
    this.roleService.getAll().subscribe(
      data => {
        this.listRole = data;
      }
    );
  }
  affecterrole(){
    //a faire avec des getOne
  }

}
