import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivreComponent } from './livre/livre.component';
import { AuteurComponent } from './auteur/auteur.component';
import { CategorieComponent } from './categorie/categorie.component';
import { EtagereComponent } from './etagere/etagere.component';
import { ListelivreComponent } from './listelivre/listelivre.component';
import { ListeauteurComponent } from './listeauteur/listeauteur.component';
import { ListecategorieComponent } from './listecategorie/listecategorie.component';
import { ListeetagereComponent } from './listeetagere/listeetagere.component';
import { HomeComponent } from './home/home.component';
import { AfficherlivreComponent } from './afficherlivre/afficherlivre.component';
import { ModifierauteurComponent } from './modifierauteur/modifierauteur.component';


const routes: Routes = [

  {
    path:"livre",
    component:LivreComponent
  },

  {
    path:"auteur",
    component:AuteurComponent
  },

  {
    path: "categorie",
    component:CategorieComponent
  },

  {
    path:"etagere",
    component:EtagereComponent
  },

  {
    path:"listelivre",
    component:ListelivreComponent
  },

  {
    path:"listeauteur",
    component:ListeauteurComponent
  },

  {
    path:"listecategorie",
    component:ListecategorieComponent
  },
  {
    path:"listeetagere",
    component:ListeetagereComponent
  },

  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"afficherlivre/:id",
    component:AfficherlivreComponent
  },

  {
    path:"modifierauteur/:id",
    component:ModifierauteurComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
