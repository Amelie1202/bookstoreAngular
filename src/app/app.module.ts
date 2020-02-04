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
    ListeetagereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
