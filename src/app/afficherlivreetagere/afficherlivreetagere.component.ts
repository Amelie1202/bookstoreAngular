import { Component, OnInit } from '@angular/core';
import { LivreService } from '../service/livre.service';
import { Livre } from '../models/livre';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-afficherlivreetagere',
  templateUrl: './afficherlivreetagere.component.html',
  styleUrls: ['./afficherlivreetagere.component.css']
})
export class AfficherlivreetagereComponent implements OnInit {
  listLivreEtagere: Livre[]=[];
  idEtagere: number;

  constructor(private livreService: LivreService,  private route: ActivatedRoute) { 
    this.idEtagere = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.livreService.findByEtagere(this.idEtagere).subscribe(
      data => {
        this.listLivreEtagere = data;
      }
    )
  }

}
