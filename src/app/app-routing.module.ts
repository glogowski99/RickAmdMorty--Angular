import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found/page-not-found.component";
import {CharactersListComponent} from "./characters/characters-list/characters-list.component";
import {CharacterDetailComponent} from "./characters/character-detail/character-detail.component";

const routes: Routes = [
  {path:'', component: HomePageComponent,},
  {path:'characters-list', component: CharactersListComponent,},
  {path:'character-list/:name/:id', component: CharacterDetailComponent,},
  {path:'**', component: PageNotFoundComponent, title: 'Page not found'},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

