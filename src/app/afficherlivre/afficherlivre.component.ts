import { Component, OnInit } from '@angular/core';
import { LivreService } from '../service/livre.service';
import { Livre } from '../models/livre';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-afficherlivre',
  templateUrl: './afficherlivre.component.html',
  styleUrls: ['./afficherlivre.component.css']
})
export class AfficherlivreComponent implements OnInit {
  listLivreAuteur: Livre[]=[];
  idAuteur: number;

  constructor(private livreService: LivreService,  private route: ActivatedRoute) {
    this.idAuteur = parseInt(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    this.livreService.findByAuteur(this.idAuteur).subscribe(
      data => {
        this.listLivreAuteur = data;
      }
    )
  }
  }