import { Component, OnInit } from '@angular/core';
import { Etagere } from '../models/etagere';
import { EtagereService } from '../service/etagere.service';

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

      }
    )
  }

}
