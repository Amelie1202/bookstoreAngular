import { Component, OnInit } from '@angular/core';
import { Auteur } from '../models/auteur';
import {AuteurService} from'../service/auteur.service';

@Component({
  selector: 'app-listeauteur',
  templateUrl: './listeauteur.component.html',
  styleUrls: ['./listeauteur.component.css']
})
export class ListeauteurComponent implements OnInit {
  listAuteur:Auteur[] = [];
  constructor(private auteurService: AuteurService) { }

  ngOnInit() {
    this.auteurService.getAll().subscribe(
      data => {this.listAuteur = data;
 
      } 
     )
  }
  delete(id:number){
    this.auteurService.deleteOne(id).subscribe(
      data =>{
        this.ngOnInit(); 
      }
    )
      }
}
