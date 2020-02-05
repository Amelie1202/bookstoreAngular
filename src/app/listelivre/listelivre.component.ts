import { Component, OnInit } from '@angular/core';
import {Livre} from'../models/livre';
import { LivreService } from '../service/livre.service';
import { faBook} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-listelivre',
  templateUrl: './listelivre.component.html',
  styleUrls: ['./listelivre.component.css']
})
export class ListelivreComponent implements OnInit {
  faBook=faBook;
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
