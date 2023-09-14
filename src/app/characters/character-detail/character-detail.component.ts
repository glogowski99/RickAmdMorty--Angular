import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CharactersService} from "../characters.service";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: any;
  characterId!: number;

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.characterId = +params['id'];//przetworzenie stringa na liczbe dzięki "+"

      this.charactersService.getCharacterById(this.characterId).subscribe(data => {
        this.character = data;
      });
    });
  }
}
