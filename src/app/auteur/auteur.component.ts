import { Component, OnInit } from '@angular/core';
import { Auteur } from '../models/auteur';
import { AuteurService } from '../service/auteur.service';

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.css']
})
export class AuteurComponent implements OnInit {
  newAuteur: Auteur = new Auteur();

  constructor(private auteurService: AuteurService) { }

  ngOnInit() {
  }
  addAuteur() {
    this.auteurService.addNew(this.newAuteur).subscribe(
      data => {

      }
    )
  }

}
