import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/livre';
import{ActivatedRoute} from '@angular/router';
import { LivreService } from '../service/livre.service';

@Component({
  selector: 'app-afficherlivrecategorie',
  templateUrl: './afficherlivrecategorie.component.html',
  styleUrls: ['./afficherlivrecategorie.component.css']
})
export class AfficherlivrecategorieComponent implements OnInit {
  listLivreCategorie: Livre[]=[];
  idCategorie: number;

  constructor(private livreService: LivreService,  private route: ActivatedRoute) { 
    this.idCategorie = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.livreService.findByCategorie(this.idCategorie).subscribe(
      data => {
        this.listLivreCategorie = data;
      }
    )
  
  }

}
