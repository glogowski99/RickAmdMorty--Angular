import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { CharactersComponent } from './characters/characters/characters.component';
import {HttpClientModule} from "@angular/common/http";
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';

import { TranslatePipe } from './translate-gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    CharactersListComponent,
    CharactersComponent,
    CharacterDetailComponent,
    TranslatePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
