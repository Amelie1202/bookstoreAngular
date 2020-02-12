import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  condition: boolean;
  constructor() {
   }

  ngOnInit() {
    if (localStorage.getItem("token")!=null){
      this.condition = false
    }else{
      this.condition = true
    }
  }

  deconnexion(){
    localStorage.removeItem('token');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Déconnexion réussie',
      showConfirmButton: false,
      timer: 3000
    }).then((result) => {
      window.location.href = "http://localhost:4200/home" //pour rafraichir automatiquement la page
    })
  }
  
}
