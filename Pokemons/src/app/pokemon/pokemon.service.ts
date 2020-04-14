import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private pokemons: Pokemon[] = [
    {id: 1, name: 'bulbasaur', damage: 23},
    {id: 2, name: 'ivysaur', damage: 67},
    {id: 3, name: 'venusaur', damage: 51},
    {id: 4, name: 'charmander', damage: 14},
    {id: 5, name: 'charmeleon', damage: 58},
    {id: 6, name: 'charizard', damage: 37},
    {id: 7, name: 'squirtle', damage: 78},
    {id: 8, name: 'wartortle', damage: 128},
    {id: 9, name: 'blastoise', damage: 8},
    {id: 10, name: 'caterpie', damage: 46},
    {id: 11, name: 'metapod', damage: 74},
    {id: 12, name: 'butterfree', damage: 60}
  ];

  constructor() { }

  getAllPokemons(): Pokemon[] {
    return this.pokemons;
  }

  filterPokemonsByName(name: string): Pokemon[] {
    return this.pokemons.filter((pokemon: Pokemon) => pokemon.name === name);
  }

  getPokemonById(id: number): Pokemon {
    return this.pokemons.find((pokemon: Pokemon) => pokemon.id === id);
  }
}
