import { Component, OnInit } from '@angular/core';
import { Etagere } from '../models/etagere';
import { EtagereService } from '../service/etagere.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modifieretagere',
  templateUrl: './modifieretagere.component.html',
  styleUrls: ['./modifieretagere.component.css']
})
export class ModifieretagereComponent implements OnInit {
  idEtagere: number;
  etagere: Etagere= new Etagere();

  constructor(private etagereService: EtagereService, private route: ActivatedRoute) { 
    this.idEtagere = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.etagereService.getOne(this.idEtagere).subscribe(
      data => {
        this.etagere = data;
      }
    )
    
  }
  update(){
    this.etagereService.update(this.etagere,this.idEtagere).subscribe(
      data =>{
       
      }
    )
  }

}
