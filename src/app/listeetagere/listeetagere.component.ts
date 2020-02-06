import { Component, OnInit } from '@angular/core';
import { Etagere } from '../models/etagere';
import { EtagereService } from '../service/etagere.service';
import { LivreService } from '../service/livre.service';
import { Livre } from '../models/livre';
import Swal from'sweetalert2';
import { faStream} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listeetagere',
  templateUrl: './listeetagere.component.html',
  styleUrls: ['./listeetagere.component.css']
})
export class ListeetagereComponent implements OnInit {
  faStream=faStream;
  listEtagere: Etagere[] = [];
  listLivreEtagere: Livre[]=[];

  constructor(private etagereService: EtagereService, private livreService: LivreService) { }

  ngOnInit() {
    this.etagereService.getAll().subscribe(
      data => {this.listEtagere = data;
 
      } 
     )
  }
  delete(id:number){
    this.etagereService.deleteOne(id).subscribe(
      data =>{
        if(data==true){
          this.ngOnInit(); 
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Erreur!',
            text: 'Cette étagère est liée à un livre, vous ne pouvez pas la supprimer',
            footer: '<a href>Veuillez choisir une autre étagère</a>'
          })
        }
      }
    )
      }
      afficherLivre(idEtagere: number){
        this.livreService.findByEtagere(idEtagere).subscribe(
          data => {this.listLivreEtagere = data;
 
          } 

        )
      }

}
