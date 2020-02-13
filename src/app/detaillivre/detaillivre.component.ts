import { Component, OnInit } from '@angular/core';
import { LivreService } from '../service/livre.service';
import { Livre } from '../models/livre';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import * as jwt_decode from 'jwt-decode';
import Swal from'sweetalert2';

@Component({
  selector: 'app-detaillivre',
  templateUrl: './detaillivre.component.html',
  styleUrls: ['./detaillivre.component.css']
})
export class DetaillivreComponent implements OnInit {
  condition: boolean;
  idLivre: number;
  livre = new Livre();
  utilisateur = new Utilisateur();
  token: any;
  idUtilisateur: number;

  constructor(private livreService: LivreService, private route: ActivatedRoute) {
    this.idLivre = parseInt(this.route.snapshot.paramMap.get('id')); //chercher id du livre
    if(localStorage.getItem("token")){
      this.token = jwt_decode(localStorage.getItem("token")) //decoder le token
      this.idUtilisateur = this.token['idUtilisateur'] //prendre idUtilisateur
    }
   
    console.log(this.idUtilisateur)
  }

  ngOnInit() {
    this.livreService.getOne(this.idLivre).subscribe(
      data => {
        this.livre = data;
        if((localStorage.getItem("token"))&&(this.livre.utilisateur)){
          this.condition = true
        }else{
          this.condition = false
        }
        })
        console.log(this.livre.utilisateur)
      
        
        
      }
  


//reservation d'un livre
  affecterUtilisateur() {
    this.livreService.affecterUtilisateur(this.idLivre, this.idUtilisateur).subscribe(
      data => {
        if(data != null){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Le livre est reservé!',
          showConfirmButton: false,
          timer: 3000
        })
      }
      }
    );

  }

}


