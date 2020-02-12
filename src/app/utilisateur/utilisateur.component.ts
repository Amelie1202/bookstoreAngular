import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';
import Swal from 'sweetalert2';
//import pour decoder le token
import * as jwt_decode from 'jwt-decode';
import {JwtHelperService} from"@auth0/angular-jwt";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  newUtilisateur: Utilisateur = new Utilisateur();
  utilisateur = new Utilisateur();
utilisateur2= new Utilisateur();
tokendata;
token2;
decodedToken;
helper = new JwtHelperService();
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
          localStorage.setItem("login", data['login']); //mettre dans le localstorage
          localStorage.setItem("mdp", data['mdp']);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Connexion réussie',
            showConfirmButton: false,
            timer: 3000
          }).then((result) => {
            window.location.href = "http://localhost:4200/home"
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

  authentificationtoken(){ //mettre le token dans le local storage
    this.utilisateurService.authentification2(this.utilisateur2).subscribe( //s'authentifier sur le site, attention utilisateur2 a mettre dans html
    data => {
      this.tokendata = data['token'];
      this.token2 = jwt_decode(this.tokendata); //decoder le token dans la console,
      console.log(this.token2)
      localStorage.setItem("token",this.token2)
        //localStorage.setItem("token", data['token']); //mettre dans le localstorage
        if (data!=null) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Connexion réussie',
          showConfirmButton: false,
          timer: 3000
        }).then((result) => {
          window.location.href = "http://localhost:4200/home"
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
