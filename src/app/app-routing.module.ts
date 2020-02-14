import { NgModule, Component } from '@angular/core';
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
import { ModifierlivreComponent } from './modifierlivre/modifierlivre.component';
import { ModifiercategorieComponent } from './modifiercategorie/modifiercategorie.component';
import { ModifieretagereComponent } from './modifieretagere/modifieretagere.component';
import { AfficherlivrecategorieComponent } from './afficherlivrecategorie/afficherlivrecategorie.component';
import { AfficherlivreetagereComponent } from './afficherlivreetagere/afficherlivreetagere.component';
import { DetaillivreComponent } from './detaillivre/detaillivre.component';
import { InfoComponent } from './info/info.component';
import { VisiteComponent } from './visite/visite.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ListeutilisateurComponent } from './listeutilisateur/listeutilisateur.component';
import { TestComponent } from './test/test.component';
import { ModifierutilisateurComponent } from './modifierutilisateur/modifierutilisateur.component';
//restreindre une page
import {AuthGuardService} from'./service/auth-guard.service';
import { RoleComponent } from './role/role.component';
import { ListeadminComponent } from './listeadmin/listeadmin.component';
import { LivreutilisateurComponent } from './livreutilisateur/livreutilisateur.component';
import { DirecteurguardService } from './service/directeurguard.service';


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
  },

  {
    path:"modifierlivre/:id",
    component:ModifierlivreComponent
  },
  {
    path:"modifiercategorie/:id",
    component:ModifiercategorieComponent
  },
  {
    path:"modifieretagere/:id",
    component:ModifieretagereComponent
  },
  {
    path:"afficherlivrecategorie/:id",
    component:AfficherlivrecategorieComponent
  },
  {
    path:"afficherlivreetagere/:id",
    component:AfficherlivreetagereComponent
  },
  {
    path:"detaillivre/:id",
    component:DetaillivreComponent
  },
  {
    path:"info",
    component:InfoComponent
  },
  {
    path:"visite",
    component:VisiteComponent
  },
  {
    path:"utilisateur",
    component:UtilisateurComponent
  },
  {
    path:"listeutilisateur",
    component:ListeutilisateurComponent, 
    canActivate: [AuthGuardService]
  },
  {
    path:"test",
    component:TestComponent
  },
  {
    path:"modifierutilisateur/:id",
    component:ModifierutilisateurComponent
  },
  {
    path:"role",
    component:RoleComponent
  },
  {
    path:"listeadmin",
    component:ListeadminComponent,
    canActivate:[DirecteurguardService] //importe la classe service ou est la méthode canActivate
  },
  {
    path:"livreutilisateur/:id",
    component: LivreutilisateurComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
