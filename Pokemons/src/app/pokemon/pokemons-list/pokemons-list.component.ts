import {Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {
  textView = false;

  constructor(private pokemonService:
  PokemonService) { }

  pokemons: Pokemon[];

  ngOnInit() {
    this.getAllPokemons();
  }

  toggleView() {
    this.textView = !this.textView;
  }

  onChanged(pokemon: Pokemon) {
      pokemon.caught = !pokemon.caught;
      if (pokemon.caught) {
        console.log('Pokemon ' + pokemon.name + ' is caught');
      } else {
        console.log('Pokemon ' + pokemon.name + ' is free');
      }
  }

  getAllPokemons(): void {
    this.pokemonService.getAllPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }
}
