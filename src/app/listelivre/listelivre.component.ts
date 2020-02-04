import { Component, OnInit } from '@angular/core';
import {Livre} from'../models/livre';
import { LivreService } from '../service/livre.service';

@Component({
  selector: 'app-listelivre',
  templateUrl: './listelivre.component.html',
  styleUrls: ['./listelivre.component.css']
})
export class ListelivreComponent implements OnInit {
listLivre: Livre[] = [];
  constructor(private livreService: LivreService ) { }

  ngOnInit() {
    this.livreService.getAll().subscribe(
     data => {this.listLivre = data;

     } 
    )
  }
  delete(id:number){
    this.livreService.deleteOne(id).subscribe(
      data =>{
        this.ngOnInit(); 
      }
    )
      }
}
