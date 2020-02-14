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

  idUser: number;
  listUtilisateur: Utilisateur[] = [];
  listRole: Role[] = [];
  idUtilisateur: number;
  // utilisateur= new Utilisateur();
  role = new Role();
  utilisateur: Utilisateur = new Utilisateur();
  idRole: number;

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

  affecter() {
    this.utilisateurService.getOne(this.idUser).subscribe( //on va chercher l id utilisateur
      data => {
        this.utilisateur = data;
        this.roleService.getOne(this.idRole).subscribe( // puis son role
          data => {
            this.utilisateur.role = data; // on associe le role a l'utilisateur
            this.utilisateurService.update(this.utilisateur, this.utilisateur.idUtilisateur).subscribe( // on affecte
              data => {
              }
            );

          }
        )
      }
    )
  }

}
