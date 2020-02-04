import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/livre';
import { LivreService } from '../service/livre.service';


@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  newLivre: Livre = new Livre();

  constructor(private livreService: LivreService
    ) { }

  ngOnInit() {
  }
  addLivre() {
    this.livreService.addNew(this.newLivre).subscribe(
      data => {

      }
    )
  }
}


