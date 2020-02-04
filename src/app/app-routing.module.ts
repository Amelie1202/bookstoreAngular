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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
