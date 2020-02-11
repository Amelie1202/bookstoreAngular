import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  newUtilisateur: Utilisateur = new Utilisateur();
  utilisateur = new Utilisateur();
utilisateur2= new Utilisateur();
  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
  }
  addUtilisateur() {
    this.utilisateurService.addNew(this.newUtilisateur).subscribe(
      data => {
        if (data["idUtilisateur"] == null) {

        } else {

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Inscription nouvel utilisateur',
            showConfirmButton: false,
            timer: 3000
          }).then((result) => {
            window.location.href = "http://localhost:4200/utilisateur"
          })
        }

      }
    )
  }
  authentification() {
    this.utilisateurService.findByLogin(this.utilisateur).subscribe( //s'authentifier sur le site
      data => {
        if (data!=null) {
          localStorage.setItem("login", data['login']);
          localStorage.setItem("mdp", data['mdp']);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Connexion réussie',
            showConfirmButton: false,
            timer: 3000
          })
        }
        else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Verifier vos identifiants',
            showConfirmButton: false,
            timer: 3000
          })
        }
      }
    )
    

  }

}
