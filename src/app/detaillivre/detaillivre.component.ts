import { Component, OnInit } from '@angular/core';
import { LivreService } from '../service/livre.service';
import { Livre } from '../models/livre';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detaillivre',
  templateUrl: './detaillivre.component.html',
  styleUrls: ['./detaillivre.component.css']
})
export class DetaillivreComponent implements OnInit {
  idLivre:number;
  livre = new Livre();

  constructor(private livreService: LivreService,  private route: ActivatedRoute) { 
    this.idLivre = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.livreService.getOne(this.idLivre).subscribe(
      data => {
        this.livre = data;
      }
    )
  }

}
