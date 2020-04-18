import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokemonService} from '../pokemon.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editing-form',
  templateUrl: './editing-form.component.html',
  styleUrls: ['./editing-form.component.scss']
})
export class EditingFormComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private service: PokemonService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pokemon = this.service.getPokemonById(+params.get('pokemonId'));
      this.pokemon = {
        ...pokemon
      };
    });
  }

  saveChanges() {
    this.service.updatePokemon(this.pokemon);
  }
}
