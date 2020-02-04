import { Component, OnInit } from '@angular/core';
import { Etagere } from '../models/etagere';
import { EtagereService } from '../service/etagere.service';

@Component({
  selector: 'app-listeetagere',
  templateUrl: './listeetagere.component.html',
  styleUrls: ['./listeetagere.component.css']
})
export class ListeetagereComponent implements OnInit {
  listEtagere: Etagere[] = [];

  constructor(private etagereService: EtagereService) { }

  ngOnInit() {
    this.etagereService.getAll().subscribe(
      data => {this.listEtagere = data;
 
      } 
     )
  }
  delete(id:number){
    this.etagereService.deleteOne(id).subscribe(
      data =>{
        this.ngOnInit(); 
      }
    )
      }

}
