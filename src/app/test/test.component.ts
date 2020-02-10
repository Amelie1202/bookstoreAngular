import { Component, OnInit,ViewChild } from '@angular/core';

import {MatSort} from'@angular/material/sort';
import {MatTableDataSource} from'@angular/material/table';
import { Livre } from '../models/livre';
import { LivreService } from '../service/livre.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
listeLivres: Livre[] = [];

//initialise les colonnes
displayedColumns: String[] =['titre','isbn','date','auteur','categorie','etagere'];
//initialise la source de donnée
dataSource = new MatTableDataSource<Livre>();

@ViewChild(MatSort,{static:true}) sort: MatSort;

  constructor( private livreService: LivreService) { 
    this.getAll();
  }

  ngOnInit() {
  }

  getAll(){
    this.livreService.getAll().subscribe(
      data => {
        this.listeLivres = data;
        this.dataSource = new MatTableDataSource(this.listeLivres);
        this.dataSource.sort = this.sort; // se référer aux fonctions dans ViewChild
      }
    )
  }

}
