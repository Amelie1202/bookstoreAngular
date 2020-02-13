import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import { AuteurComponent } from './auteur/auteur.component';
import { CategorieComponent } from './categorie/categorie.component';
import { EtagereComponent } from './etagere/etagere.component';
import { HeaderComponent } from './header/header.component';
import { ListelivreComponent } from './listelivre/listelivre.component';
import { ListeauteurComponent } from './listeauteur/listeauteur.component';
import { HomeComponent } from './home/home.component';
import { ListecategorieComponent } from './listecategorie/listecategorie.component';
import { ListeetagereComponent } from './listeetagere/listeetagere.component';
//Popup SweetAlert2
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AfficherlivreComponent } from './afficherlivre/afficherlivre.component';
import { ModifierauteurComponent } from './modifierauteur/modifierauteur.component'; //Module de message alerte (pop up)
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AfficherlivrecategorieComponent } from './afficherlivrecategorie/afficherlivrecategorie.component';
import { AfficherlivreetagereComponent } from './afficherlivreetagere/afficherlivreetagere.component';
import { ModifiercategorieComponent } from './modifiercategorie/modifiercategorie.component';
import { ModifieretagereComponent } from './modifieretagere/modifieretagere.component';
import { ModifierlivreComponent } from './modifierlivre/modifierlivre.component';
import { FooterComponent } from './footer/footer.component';
import { DetaillivreComponent } from './detaillivre/detaillivre.component';
import { InfoComponent } from './info/info.component';
import { VisiteComponent } from './visite/visite.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ListeutilisateurComponent } from './listeutilisateur/listeutilisateur.component';
//Modules Angular Material
import {BrowserAnimationsModule} from'@angular/platform-browser/animations';
import {MatTableModule} from'@angular/material/table';
import {MatIconModule} from'@angular/material/icon';
import {MatSortModule} from'@angular/material/sort';
import { TestComponent } from './test/test.component';
import { ModifierutilisateurComponent } from './modifierutilisateur/modifierutilisateur.component';
import { RoleComponent } from './role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    AuteurComponent,
    CategorieComponent,
    EtagereComponent,
    HeaderComponent,
    ListelivreComponent,
    ListeauteurComponent,
    HomeComponent,
    ListecategorieComponent,
    ListeetagereComponent,
    AfficherlivreComponent,
    ModifierauteurComponent,
    AfficherlivrecategorieComponent,
    AfficherlivreetagereComponent,
    ModifiercategorieComponent,
    ModifieretagereComponent,
    ModifierlivreComponent,
    FooterComponent,
    DetaillivreComponent,
    InfoComponent,
    VisiteComponent,
    UtilisateurComponent,
    ListeutilisateurComponent,
    TestComponent,
    ModifierutilisateurComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
