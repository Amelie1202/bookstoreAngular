import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/livre';
import { LivreService } from '../service/livre.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livreutilisateur',
  templateUrl: './livreutilisateur.component.html',
  styleUrls: ['./livreutilisateur.component.css']
})
export class LivreutilisateurComponent implements OnInit {
  listLivreUtilisateur: Livre[] = [];
  idUtilisateur: number;

  constructor(private livreService: LivreService,  private route: ActivatedRoute) {
    this.idUtilisateur = parseInt(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    this.livreService.findByUtilisateur(this.idUtilisateur).subscribe(
      data => {
        this.listLivreUtilisateur = data;
      }
    )
  }
  }


