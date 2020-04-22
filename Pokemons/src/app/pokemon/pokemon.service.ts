import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private pokemons: Pokemon[] = [
    {id: 1, name: 'bulbasaur', damage: 23, createdDate: '2020-04-18'},
    {id: 2, name: 'ivysaur', damage: 67, createdDate: '2020-03-05'},
    {id: 3, name: 'venusaur', damage: 51, createdDate: '2020-04-10'},
    {id: 4, name: 'charmander', damage: 14, createdDate: '2020-04-12'},
    {id: 5, name: 'charmeleon', damage: 58, createdDate: '2020-03-15'},
    {id: 6, name: 'charizard', damage: 37, createdDate: '2020-03-17'},
    {id: 7, name: 'squirtle', damage: 78, createdDate: '2020-04-11'},
    {id: 8, name: 'wartortle', damage: 128, createdDate: '2020-04-12'},
    {id: 9, name: 'blastoise', damage: 8, createdDate: '2020-04-15'},
    {id: 10, name: 'caterpie', damage: 46, createdDate: '2020-04-08'},
    {id: 11, name: 'metapod', damage: 74, createdDate: '2020-04-01'},
    {id: 12, name: 'butterfree', damage: 60, createdDate: '2020-04-03'}
  ];

  constructor() { }
  pokemon: Pokemon;

  getAllPokemons(): Pokemon[] {
    return this.pokemons;
  }

  filterPokemonsByName(name: string): Pokemon[] {
    return this.pokemons.filter((pokemon: Pokemon) => pokemon.name === name);
  }

  getPokemonById(id: number): Pokemon {
    return this.pokemons.find((pokemon: Pokemon) => pokemon.id === id);
  }

  updatePokemon(pokemon: Pokemon): void {
    this.pokemons = this.pokemons.map(item => item.id === pokemon.id ? pokemon : item);
  }
}
