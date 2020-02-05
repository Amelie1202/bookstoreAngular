import { Component, OnInit } from '@angular/core';
import { Etagere } from '../models/etagere';
import { EtagereService } from '../service/etagere.service';
import Swal from'sweetalert2'; //swal pour les alertes dans le ts

@Component({
  selector: 'app-etagere',
  templateUrl: './etagere.component.html',
  styleUrls: ['./etagere.component.css']
})
export class EtagereComponent implements OnInit {
  newEtagere: Etagere = new Etagere();

  constructor(private etagereService: EtagereService) { }

  ngOnInit() {
  }

  addEtagere() {
    this.etagereService.addNew(this.newEtagere).subscribe(
      data => {
        if (data["idEtagere"]==null){

        }else {
           
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'L étagère est ajoutée!',
  showConfirmButton: false,
  timer: 3000
})
        }

      }
    )
  }
}
