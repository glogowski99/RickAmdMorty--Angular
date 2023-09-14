import { Component, OnInit } from '@angular/core';
import {CharactersService} from "../characters.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any;

  constructor(private charactersService: CharactersService, private router: Router) { }

  goToDetails(character: any) {
    this.router.navigate([`/character-list/${character.name}/${character.id}`]);
  }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe(data => {
      this.characters = (data as any).results;
    });

  }
}
